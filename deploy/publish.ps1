param(
  [Parameter(Mandatory = $true)]
  [ValidateNotNullOrEmpty()]
  [string]$CommitMessage,
  [string]$SourceBranch = 'dev',
  [string]$TargetBranch = 'main'
)

$ErrorActionPreference = 'Stop'

function Invoke-Checked {
  param([Parameter(Mandatory = $true)][scriptblock]$Command)
  & $Command
  if ($LASTEXITCODE -ne 0) { throw "Perintah gagal dengan exit code $LASTEXITCODE." }
}

$repositoryRoot = (git rev-parse --show-toplevel).Trim()
if ($LASTEXITCODE -ne 0) { throw 'Jalankan skrip dari dalam repo Git.' }
Set-Location $repositoryRoot

$currentBranch = (git branch --show-current).Trim()
$sourceBranchExists = -not [string]::IsNullOrWhiteSpace((git branch --list $SourceBranch | Out-String))
if ($currentBranch -eq $TargetBranch -and -not $sourceBranchExists) {
  Invoke-Checked { git switch -c $SourceBranch }
} elseif ($currentBranch -ne $SourceBranch) {
  throw "Checkout branch '$SourceBranch' sebelum publish. Branch aktif: '$currentBranch'."
}

Invoke-Checked { npm run lint }
Invoke-Checked { npm run typecheck }
Invoke-Checked { npm test }
Invoke-Checked { npm exec --yes --package=node@22.20.0 -- node node_modules/vinext/dist/cli.js build }

Invoke-Checked { git add --all }
git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
  Invoke-Checked { git commit -m $CommitMessage }
}

Invoke-Checked { git fetch origin }
Invoke-Checked { git push --set-upstream origin $SourceBranch }
$sourceCommit = (git rev-parse HEAD).Trim()

Invoke-Checked { git switch $TargetBranch }
Invoke-Checked { git pull --ff-only origin $TargetBranch }
Invoke-Checked { git merge --ff-only $SourceBranch }

$targetCommit = (git rev-parse HEAD).Trim()
if ($targetCommit -ne $sourceCommit) {
  throw "Promosi tidak menghasilkan commit yang sama: dev=$sourceCommit main=$targetCommit"
}

Invoke-Checked { git push origin $TargetBranch }

& "$repositoryRoot\deploy\deploy-vps.ps1" -SkipBuild
if ($LASTEXITCODE -ne 0) { throw 'Deployment VPS gagal.' }

Write-Host "Push PASS: origin/$SourceBranch @ $sourceCommit"
Write-Host "Promote PASS: origin/$TargetBranch @ $targetCommit"
Write-Host 'Deploy PASS: https://travelozy.my.id'
