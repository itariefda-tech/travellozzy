# VPS deployment — TRAVELOZY

This project is a static Vinext export, so it is served directly by Nginx. Docker is intentionally not required.

## Initial VPS setup

Copy `deploy/nginx/travelozy.my.id.conf` to `/etc/nginx/sites-available/travelozy.my.id`, create a symbolic link in `/etc/nginx/sites-enabled`, then validate and reload Nginx.

## Standard release: push → promote → deploy

Source work lives on `dev`. Production is always deployed from the exact commit fast-forwarded to `main`.

From PowerShell in the repository root, run one command:

```powershell
.\deploy\publish.ps1 -CommitMessage "Describe the release"
```

The script performs this gated sequence:

1. Require or create local `dev`.
2. Run lint, typecheck, tests, and the production build.
3. Commit current changes and push `dev` to GitHub.
4. Fast-forward only from `dev` to `main`, then push `main`.
5. Deploy that validated build to a timestamped VPS release.
6. Switch `/var/www/travelozy/current` atomically, validate Nginx, and reload it.

If `dev` and `main` cannot be promoted with `--ff-only`, the script stops before deployment. Resolve the branch history deliberately, then rerun it.

The production build is pinned to Node 22.20.0 because Node 24 on Windows can exit with a libuv assertion after Vinext has generated its output.

## Deploy only

Use this only when GitHub already contains the exact production commit:

```powershell
.\deploy\deploy-vps.ps1
```

The deploy-only script builds and publishes the current checkout without changing Git branches.

## DNS and TLS

Cloudflare uses `lila.ns.cloudflare.com` and `mark.ns.cloudflare.com` for this zone. Proxied DNS records point `travelozy.my.id` and `www` to `51.222.30.28`.

Let's Encrypt TLS is installed for both hostnames and renewed through `certbot.timer`. Keep Cloudflare SSL/TLS mode set to **Full (strict)**.
