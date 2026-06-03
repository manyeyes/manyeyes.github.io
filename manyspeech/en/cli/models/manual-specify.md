# Manual Model Specification

## Specify Main Model

```bash
# Use FireRedASR Large
manyspeech asr -t offline --model fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212 -f meeting.wav

# Use Whisper tiny
manyspeech asr -t offline --model whisper-tiny-en-onnx -f english.wav
```

## Specify VAD Model

```bash
# Switch to Silero VAD
manyspeech --vad silero-vad-v6-onnx asr -t online -i mic

# Disable VAD
manyspeech --vad "" asr -t offline -f audio.wav
```

## Specify Punctuation Model

```bash
# Use default
manyspeech --punc alicttransformerpunc-zh-en-mge-int8-onnx asr -t offline -f audio.wav

# Disable Punctuation
manyspeech --punc "" asr -t offline -f audio.wav
```

## 2pass Secondary Model

```bash
manyspeech asr -t 2pass -i mic --model paraformer-large-zh-en-int8-onnx-online --model2 paraformer-seaco-large-zh-timestamp-int8-onnx-offline
```
