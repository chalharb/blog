param (
    [string]$environment = "development"
)

Write-Host "====================================="
if ($environment -eq "production") {
    $composeFile = ".docker\docker-compose.prod.yml"
    Write-Host "INFO: STOPPING PRODUCTION MODE"
}
else {
    $composeFile = ".docker\docker-compose.yml"
    Write-Host "INFO: STOPPING DEVELOP MODE"
}

Write-Host "INFO: Using docker-compose file: $composeFile"
Write-Host "====================================="
docker compose -f $composeFile down