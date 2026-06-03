# 批量处理脚本

## Windows 批处理

```batch
@echo off
set INPUT_DIR=D:\audio
set OUTPUT_DIR=D:\output

for %%f in ("%INPUT_DIR%\*.wav") do (
    echo Processing %%f...
    manyspeech --output "%OUTPUT_DIR%" asr -t offline -m chunk --format srt --threads 4 -f "%%f"
)
echo Done!
pause
```

## PowerShell 脚本

```powershell
# batch-process.ps1
param(
    [string]$inputDir = "D:\audio",
    [string]$outputDir = "D:\output"
)

Get-ChildItem $inputDir -Filter *.wav | ForEach-Object {
    Write-Host "Processing $($_.Name)..." -ForegroundColor Green
    & manyspeech --output $outputDir asr -t offline -m chunk --format srt --threads 4 -f $_.FullName
}

Write-Host "All files processed!" -ForegroundColor Green
```

## 并发处理（高级）

使用 PowerShell 并行处理：

```powershell
$files = Get-ChildItem "D:\audio" -Filter *.wav
$files | ForEach-Object -Parallel {
    & manyspeech asr -t offline -f $_.FullName
} -ThrottleLimit 4
```

## 配合 ffmpeg 预处理

```batch
for %%f in ("*.mp4") do (
    ffmpeg -i "%%f" -vn -acodec pcm_s16le -ar 16000 -ac 1 "temp.wav"
    manyspeech asr -t offline -f temp.wav --format srt > "%%~nf.srt"
    del temp.wav
)
```
