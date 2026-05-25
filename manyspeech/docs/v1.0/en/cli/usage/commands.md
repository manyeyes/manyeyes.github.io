# Subcommand Details

## asr - Speech Recognition

### Recognition Types

| Type | Description | Use Case |
|------|------|----------|
| `online` | Real-time streaming, output as you speak | Microphone, live, low latency |
| `offline` | Non-streaming, processes full audio | File recognition, long audio |
| `2pass` | Dual-stream fusion, real-time + refinement | Balance of speed and accuracy |

### Basic Usage

```bash
# File recognition (Offline)
manyspeech asr -t offline -f audio.wav

# Microphone recognition (Online)
manyspeech asr -t online -i mic

# 2pass recognition
manyspeech asr -t 2pass -i mic
```

### Output Formats

| Format | Description |
|------|------|
| `text` | Plain text (Default) |
| `json` | JSON format with timestamps |
| `srt` | SubRip Subtitles |
| `vtt` | WebVTT Subtitles |

```bash
manyspeech asr -t offline --format srt -f audio.wav
```

---

## vad - Voice Activity Detection

### Basic Usage

```bash
# Microphone online detection
manyspeech vad -t online -i mic

# Audio file offline detection
manyspeech vad -t offline -f audio.wav

# Specify output format
manyspeech vad -t offline --format wav -f audio.wav
```

---

## punc - Punctuation Restoration

### Basic Usage

```bash
# Direct text input
manyspeech punc --text "hello world how are you"

# Read from file
manyspeech punc -f text.txt
```
