# Specify the directory path
$directoryPath = $PSScriptRoot #"C:\Path\To\Your\Directory"
Write-Host "Search folder $directoryPath"

# Get all folders containing the file named "to-learn"
$files = Get-ChildItem -Path $directoryPath -Recurse -Filter "to-learn" |
         Where-Object { -not $_.PSIsContainer }

# Display the list of folders
if ($files.Count -gt 0) {
    Write-Host "Folders containing 'to-learn' file:"
    foreach ($file in $files) {
        $parentFolder = (Get-Item $file).Directory.Name
        Write-Host $parentFolder
    }
} else {
    Write-Host "No folders found containing 'to-learn' file in the specified directory."
}
