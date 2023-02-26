$envFile = ".env"

function Get-RandomPassword {
    param (
        [Parameter(Mandatory)]
        [int] $length
    )

    $charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.ToCharArray()
    $rng = New-Object System.Security.Cryptography.RNGCryptoServiceProvider
    $bytes = New-Object byte[]($length)
 
    $rng.GetBytes($bytes)
 
    $result = New-Object char[]($length)
 
    for ($i = 0 ; $i -lt $length ; $i++) {
        $result[$i] = $charSet[$bytes[$i] % $charSet.Length]
    }
 
    return (-join $result)
}

# Define default values for environment variables
$port = 8888
$dbPassword = Get-RandomPassword 8 

# Define the contents of the .env file
$contents = "DB_ROOT_PASSWORD=$dbPassword`nAPI_PORT=$port`n"

# Create a new .env file with the specified contents
New-Item -ItemType File -Name ".env" -Value $contents -Force
