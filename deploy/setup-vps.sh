#!/usr/bin/env bash
# ==============================================================================
# Setup Script VPS TRAVELOZY (Ubuntu / Debian)
# Domain: travelozy.my.id
# ==============================================================================

set -euo pipefail

DOMAIN="travelozy.my.id"
REPO_URL="https://github.com/itariefda-tech/travellozzy.git"
APP_DIR="/var/www/travelozy"
REPO_DIR="$APP_DIR/repo"

echo "=== 1. Update Sistem & Install Paket Dasar ==="
sudo apt update
sudo apt install -y curl git ufw nginx certbot python3-certbot-nginx

echo "=== 2. Setup Firewall (UFW) ==="
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable || true

echo "=== 3. Install Node.js 22 LTS ==="
if ! command -v node >/dev/null 2>&1 || [[ $(node -v | cut -d'.' -f1) != "v22" ]]; then
  echo "Menginstall Node.js 22..."
  curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
  sudo apt install -y nodejs
fi
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

echo "=== 4. Setup Direktori & Clone Repo ==="
sudo mkdir -p "$APP_DIR"
sudo chown -R "$USER":"$USER" "$APP_DIR"

if [ -d "$REPO_DIR/.git" ]; then
  echo "Repo sudah ada, melakukan git pull..."
  cd "$REPO_DIR"
  git pull origin main
else
  echo "Cloning repository..."
  git clone "$REPO_URL" "$REPO_DIR"
  cd "$REPO_DIR"
fi

echo "=== 5. Install Dependency & Build Project ==="
npm install
npm run build

echo "=== 6. Setup Symlink Release ==="
sudo ln -sfn "$REPO_DIR/dist/client" "$APP_DIR/current"

echo "=== 7. Konfigurasi Nginx ==="
NGINX_CONF="/etc/nginx/sites-available/$DOMAIN"

sudo tee "$NGINX_CONF" > /dev/null << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name travelozy.my.id www.travelozy.my.id;

    root /var/www/travelozy/current;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml application/json application/javascript application/xml+rss application/atom+xml image/svg+xml;

    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }

    location ~* \.(?:avif|css|gif|ico|jpe?g|js|png|svg|webp|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000, immutable";
        try_files $uri =404;
    }
}
EOF

sudo ln -sfn "$NGINX_CONF" "/etc/nginx/sites-enabled/$DOMAIN"
sudo rm -f /etc/nginx/sites-enabled/default

echo "Testing konfigurasi Nginx..."
sudo nginx -t
sudo systemctl reload nginx

echo "=== 8. Membuat Skrip Update Cepat (/var/www/travelozy/update.sh) ==="
tee "$APP_DIR/update.sh" > /dev/null << 'EOF'
#!/usr/bin/env bash
set -euo pipefail
cd /var/www/travelozy/repo
git pull origin main
npm install
npm run build
sudo systemctl reload nginx
echo "TRAVELOZY berhasil di-update!"
EOF
chmod +x "$APP_DIR/update.sh"

echo ""
echo "=============================================================================="
echo " Setup awal selesai! Website sudah aktif via HTTP."
echo " Domain: http://$DOMAIN"
echo ""
echo " Langkah berikutnya untuk SSL (HTTPS):"
echo " 1. Pastikan DNS di Cloudflare untuk '@' dan 'www' sudah mengarah ke IP VPS ini."
echo " 2. Jalankan perintah certbot:"
echo "    sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
echo " 3. Di dashboard Cloudflare, set SSL/TLS mode ke 'Full' atau 'Full (strict)'."
echo "=============================================================================="
