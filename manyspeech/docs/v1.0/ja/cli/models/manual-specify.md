# 手動でモデルを指定する

## メインモデル指定

```bash
# FireRedASR を使用
manyspeech asr -t offline --model fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212 -f meeting.wav

# Whisper tiny を使用
manyspeech asr -t offline --model whisper-tiny-en-onnx -f english.wav
```

## VAD モデル指定

```bash
# Silero VAD へ切替
manyspeech --vad silero-vad-v6-onnx asr -t online -i mic

# VAD を無効化
manyspeech --vad "" asr -t offline -f audio.wav
```

## 句読点モデル指定

```bash
# デフォルトの句読点モデルを使用
manyspeech --punc alicttransformerpunc-zh-en-mge-int8-onnx asr -t offline -f audio.wav

# 句読点を無効化
manyspeech --punc "" asr -t offline -f audio.wav
```

## 2pass モードで副モデルを指定

```bash
manyspeech asr -t 2pass -i mic --model paraformer-large-zh-en-int8-onnx-online --model2 paraformer-seaco-large-zh-timestamp-int8-onnx-offline
```
