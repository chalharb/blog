param (
    [string]$environment = "development"
)

Write-Host "====================================="
if (Test-Path .env) {
    Write-Host "INFO: Found .env file"
}
else {
    Write-Host "ERROR: .env file not found! You must run .\init.ps1 to generate the .env file..."
    Exit 1
}

$envFile = Get-Content .env
foreach ($line in $envFile) {
    Write-Host $line
    if ($line.StartsWith("PORT=")) {
        $apiPort = $line.Substring(5)
        break
    }
}

if ($environment -eq "production") {
    $composeFile = ".docker\docker-compose.prod.yml"
    Write-Host "INFO: RUNNING PRODUCTION MODE"
}
else {
    $composeFile = ".docker\docker-compose.yml"
    Write-Host "INFO: RUNNING DEVELOP MODE"
}

Write-Host "INFO: Using docker-compose file: $composeFile"
Write-Host "====================================="

#docker compose -f $composeFile --env-file .env up -d --build
docker compose -f $composeFile --env-file .env up -d --build 

Write-Host "====================================="
if ($environment -eq "development") {
    Write-Host "INFO: Currently running at http://localhost:$apiPort/swagger/index.html"
}
