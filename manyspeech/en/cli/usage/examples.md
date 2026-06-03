# Typical Examples

## Long Audio Offline Recognition · Generate Subtitles

```cmd
# FireRedASR Large Model (Best for Chinese, High Accuracy)
manyspeech asr -t offline -m chunk --format srt --threads 4 -f "D:\audio\0.wav" --model fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212

# FunASR Light Model (Fast, Low Resource)
manyspeech asr -t offline -m chunk --format srt --threads 2 -f "D:\audio\0.wav" --model Fun-ASR-Nano-2512-LLM-int8-onnx
```

## Real-time Microphone Recognition

```cmd
# Streaming model + Mic (Lowest Latency)
manyspeech asr -t online -i mic

# Offline model + Mic (Higher Accuracy)
manyspeech asr -t offline -m chunk -i mic

# 2pass Mode + Mic (Balance)
manyspeech asr -t 2pass -i mic
```

## 2pass Dual-Stream Fusion

```cmd
# Paraformer 2pass
manyspeech asr -t 2pass -i mic --model paraformer-large-zh-en-int8-onnx-online --model2 paraformer-seaco-large-zh-timestamp-int8-onnx-offline

# K2Transducer 2pass
manyspeech asr -t 2pass -i mic --model k2transducer-zipformer-ctc-large-zh-onnx-online-yuekai-20250630 --model2 k2transducer-zipformer-ctc-small-zh-int8-onnx-offline-20250716
```

## VAD Voice Activity Detection

```cmd
# Microphone online detection
manyspeech vad -t online -i mic

# Audio file offline detection (Remove silence)
manyspeech vad -t offline -f meeting.wav

# Specify output format
manyspeech vad -t offline --format wav -f noisy_speech.wav
```

## Punctuation Restoration

```cmd
# Direct text input
manyspeech punc --text "hello world how are you today"

# Read from file
manyspeech punc -f transcript.txt

# Output as JSON
manyspeech punc --text "hello world" --format json
```
