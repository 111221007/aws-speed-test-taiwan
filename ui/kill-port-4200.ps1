#!/usr/bin/env pwsh
# Kill all processes running on port 4200
Write-Host "Killing processes on port 4200..."

$processes = Get-NetTCPConnection -LocalPort 4200 -ErrorAction SilentlyContinue
if ($processes) {
    $processes | ForEach-Object {
        $processId = $_.OwningProcess
        Write-Host "Killing process ID: $processId"
        Stop-Process -Id $processId -Force
    }
    Write-Host "All processes on port 4200 have been killed."
} else {
    Write-Host "No processes found on port 4200."
}
