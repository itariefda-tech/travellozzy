param(
  [string]$HostName = '51.222.30.28',
  [string]$UserName = 'ubuntu',
  [switch]$SkipBuild
)

$ErrorActionPreference = 'Stop'
$releaseName = "travelozy-$((Get-Date).ToUniversalTime().ToString('yyyyMMddHHmmss'))"
$archivePath = Join-Path $env:TEMP "$releaseName.tar.gz"
$remoteTarget = "$UserName@$HostName"

if (-not $SkipBuild) {
  npm exec --yes --package=node@22.20.0 -- node node_modules/vinext/dist/cli.js build
  if ($LASTEXITCODE -ne 0) { throw 'Build gagal; deployment dibatalkan.' }
}

if (-not (Test-Path 'dist/client/index.html')) {
  throw 'dist/client/index.html tidak ditemukan; deployment dibatalkan.'
}

tar -C dist/client -czf $archivePath .
scp $archivePath "${remoteTarget}:/tmp/$releaseName.tar.gz"
ssh $remoteTarget "sudo install -d -m 755 /var/www/travelozy/releases/$releaseName; sudo tar -xzf /tmp/$releaseName.tar.gz -C /var/www/travelozy/releases/$releaseName; sudo ln -sfn /var/www/travelozy/releases/$releaseName /var/www/travelozy/current; sudo rm -f /tmp/$releaseName.tar.gz; sudo nginx -t; sudo systemctl reload nginx"
if ($LASTEXITCODE -ne 0) { throw 'Aktivasi release di VPS gagal.' }

Remove-Item -LiteralPath $archivePath -Force
Write-Host "TRAVELOZY deployed: $releaseName"
