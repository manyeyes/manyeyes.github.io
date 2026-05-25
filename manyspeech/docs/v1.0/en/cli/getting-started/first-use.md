# First Use

## Interactive Mode (Recommended for Beginners)

Double-click `manyspeech-cli.exe` to enter interactive mode:

```cmd
=====================================
Enter command (type 'exit' to quit, enter for help):

# 1. Select Language (First run)
Select Language: 1. Chinese; 2. English;
2

# 2. Enter Recognition Command
> asr -t offline -f D:\test.wav

# The program will automatically download models and start recognition
```

## CLI Mode

```bash
# Open CMD or PowerShell
cd D:\Tools\ManySpeech

# Recognize a single file
manyspeech asr -t offline -f test.wav

# Real-time microphone recognition (Press ESC to exit)
manyspeech asr -t online -i mic
```

## First Run Notes

- The configuration file `manyspeech.json` is generated automatically on first run.
- Models are downloaded automatically when first used.
- Models are large; please wait for the download to complete.

## Simplest Commands

```bash
# Use default test audio
manyspeech asr -t offline

# Real-time microphone recognition
manyspeech asr -t online -i mic
```
