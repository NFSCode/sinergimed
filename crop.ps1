Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\naufa\OneDrive\Documents\Synergy Med\assets\logo.jpg"
$destPath = "c:\Users\naufa\OneDrive\Documents\Synergy Med\assets\logo.jpg"

$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

$minX = $bmp.Width
$minY = $bmp.Height
$maxX = 0
$maxY = 0

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        # Check non-white pixel
        if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

# Add small padding
$minX = [Math]::Max(0, $minX - 10)
$minY = [Math]::Max(0, $minY - 10)
$maxX = [Math]::Min($bmp.Width - 1, $maxX + 10)
$maxY = [Math]::Min($bmp.Height - 1, $maxY + 10)

$width = $maxX - $minX + 1
$height = $maxY - $minY + 1

$cropped = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($cropped)
$rectSrc = New-Object System.Drawing.Rectangle($minX, $minY, $width, $height)
$rectDest = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
$g.DrawImage($bmp, $rectDest, $rectSrc, [System.Drawing.GraphicsUnit]::Pixel)

$g.Dispose()
$bmp.Dispose()

$cropped.Save("c:\Users\naufa\OneDrive\Documents\Synergy Med\assets\logo_tight.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$cropped.Dispose()

Write-Host "Cropping successful!"
