param(
    [string]$Version = "latest",
    [string]$InstallDir,
    [switch]$NoModifyPath
)

$ErrorActionPreference = "Stop"

$AppName = "ti-fetch"
$RepoOwner = if ($env:TI_FETCH_REPO_OWNER) { $env:TI_FETCH_REPO_OWNER } else { "thuvasooriya" }
$RepoName = if ($env:TI_FETCH_REPO_NAME) { $env:TI_FETCH_REPO_NAME } else { "ti-fetch" }
$ReleaseBaseUrl = if ($env:TI_FETCH_RELEASE_BASE_URL) {
    $env:TI_FETCH_RELEASE_BASE_URL.TrimEnd("/")
} else {
    "https://github.com/$RepoOwner/$RepoName/releases"
}

if (-not $InstallDir) {
    if ($env:LOCALAPPDATA) {
        $InstallDir = Join-Path $env:LOCALAPPDATA "Programs\$AppName"
    } else {
        $InstallDir = Join-Path $HOME ".local\bin"
    }
}

function Get-Architecture {
    $arch = [System.Runtime.InteropServices.RuntimeInformation]::OSArchitecture
    switch ($arch) {
        "X64" { return "x64" }
        "Arm64" { return "arm64" }
        default { throw "Unsupported architecture: $arch" }
    }
}

function Get-ArtifactName([string]$arch) {
    switch ($arch) {
        "x64" { return "ti-fetch-windows-x64.zip" }
        "arm64" { return "ti-fetch-windows-arm64.zip" }
        default { throw "Unsupported architecture: $arch" }
    }
}

function Get-BinaryName([string]$arch) {
    switch ($arch) {
        "x64" { return "ti-fetch-windows-x64.exe" }
        "arm64" { return "ti-fetch-windows-arm64.exe" }
        default { throw "Unsupported architecture: $arch" }
    }
}

function Get-ReleaseUrl([string]$artifact) {
    if ($Version -eq "latest") {
        return "$ReleaseBaseUrl/latest/download/$artifact"
    }

    if ($Version.StartsWith("v")) {
        return "$ReleaseBaseUrl/download/$Version/$artifact"
    }

    return "$ReleaseBaseUrl/download/v$Version/$artifact"
}

function Get-ChecksumUrl {
    if ($Version -eq "latest") {
        return "$ReleaseBaseUrl/latest/download/checksums.txt"
    }

    if ($Version.StartsWith("v")) {
        return "$ReleaseBaseUrl/download/$Version/checksums.txt"
    }

    return "$ReleaseBaseUrl/download/v$Version/checksums.txt"
}

function Try-VerifyChecksum([string]$artifactName, [string]$archivePath, [string]$tempDir) {
    $checksumsUrl = Get-ChecksumUrl
    $checksumsPath = Join-Path $tempDir "checksums.txt"

    try {
        Invoke-WebRequest -Uri $checksumsUrl -OutFile $checksumsPath -UseBasicParsing
    }
    catch {
        Write-Host "warning: checksum manifest unavailable; skipping verification" -ForegroundColor Yellow
        return $false
    }

    $expectedHash = $null
    foreach ($line in Get-Content -Path $checksumsPath) {
        if ($line -match '^([0-9a-fA-F]{64})\s+\*?(.+)$') {
            $hash = $matches[1].ToLower()
            $name = [System.IO.Path]::GetFileName($matches[2])
            if ($name -eq $artifactName) {
                $expectedHash = $hash
                break
            }
        }
    }

    if (-not $expectedHash) {
        Write-Host "warning: no checksum entry for $artifactName; skipping verification" -ForegroundColor Yellow
        return $false
    }

    $actualHash = (Get-FileHash -Algorithm SHA256 -Path $archivePath).Hash.ToLower()
    if ($actualHash -ne $expectedHash) {
        throw "Checksum verification failed for $artifactName"
    }

    Write-Host "Checksum verified for $artifactName" -ForegroundColor Cyan
    return $true
}

$arch = Get-Architecture
$artifact = Get-ArtifactName -arch $arch
$binaryName = Get-BinaryName -arch $arch
$downloadUrl = Get-ReleaseUrl -artifact $artifact

Write-Host "Detected architecture: $arch" -ForegroundColor Cyan
Write-Host "Downloading: $downloadUrl" -ForegroundColor Cyan

$tempDir = Join-Path $env:TEMP "ti-fetch-install-$([System.Guid]::NewGuid().ToString())"
$zipPath = Join-Path $tempDir $artifact

try {
    New-Item -ItemType Directory -Path $tempDir -Force | Out-Null
    Invoke-WebRequest -Uri $downloadUrl -OutFile $zipPath -UseBasicParsing

    Try-VerifyChecksum -artifactName $artifact -archivePath $zipPath -tempDir $tempDir | Out-Null

    Expand-Archive -Path $zipPath -DestinationPath $tempDir -Force

    $sourcePath = Join-Path $tempDir $binaryName
    if (-not (Test-Path $sourcePath)) {
        throw "Expected binary not found in archive: $binaryName"
    }

    New-Item -ItemType Directory -Path $InstallDir -Force | Out-Null
    $targetPath = Join-Path $InstallDir "$AppName.exe"
    Move-Item -Path $sourcePath -Destination $targetPath -Force

    Write-Host "Installed: $targetPath" -ForegroundColor Green

    if (-not $NoModifyPath) {
        $currentPath = [Environment]::GetEnvironmentVariable("Path", "User")
        if ($currentPath -notlike "*$InstallDir*") {
            [Environment]::SetEnvironmentVariable("Path", "$currentPath;$InstallDir", "User")
            Write-Host "Added to PATH: $InstallDir" -ForegroundColor Cyan
            Write-Host "Restart your terminal to pick up PATH changes." -ForegroundColor Yellow
        }
    }
}
finally {
    if (Test-Path $tempDir) {
        Remove-Item -Path $tempDir -Recurse -Force -ErrorAction SilentlyContinue
    }
}
