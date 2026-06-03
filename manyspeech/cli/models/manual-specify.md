# 手动指定模型

## 指定主模型

```bash
# 使用 FireRedASR 大模型
manyspeech asr -t offline --model fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212 -f meeting.wav

# 使用 Whisper tiny
manyspeech asr -t offline --model whisper-tiny-en-onnx -f english.wav
```

## 指定 VAD 模型

```bash
# 切换 Silero VAD
manyspeech --vad silero-vad-v6-onnx asr -t online -i mic

# 禁用 VAD
manyspeech --vad "" asr -t offline -f audio.wav
```

## 指定标点模型

```bash
# 使用默认标点模型
manyspeech --punc alicttransformerpunc-zh-en-mge-int8-onnx asr -t offline -f audio.wav

# 禁用标点
manyspeech --punc "" asr -t offline -f audio.wav
```

## 2pass 模式指定副模型

```bash
manyspeech asr -t 2pass -i mic --model paraformer-large-zh-en-int8-onnx-online --model2 paraformer-seaco-large-zh-timestamp-int8-onnx-offline
```
