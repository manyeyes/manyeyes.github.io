# 典型使用示例

## 长音频离线流式识别 · 生成字幕

```cmd
# FireRedASR 大模型（中文最佳，高精度）
manyspeech asr -t offline -m chunk --format srt --threads 4 -f "D:\audio\0.wav" --model fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212

# FunASR 轻量模型（速度快，资源占用低）
manyspeech asr -t offline -m chunk --format srt --threads 2 -f "D:\audio\0.wav" --model Fun-ASR-Nano-2512-LLM-int8-onnx
```

## 麦克风实时识别

```cmd
# 流式模型 + 麦克风（延迟最低）
manyspeech asr -t online -i mic

# 离线模型 + 麦克风（精度更高）
manyspeech asr -t offline -m chunk -i mic

# 2pass 模式 + 麦克风（兼顾实时与精度）
manyspeech asr -t 2pass -i mic
```

## 2pass 双流融合识别

```cmd
# Paraformer 2pass
manyspeech asr -t 2pass -i mic --model paraformer-large-zh-en-int8-onnx-online --model2 paraformer-seaco-large-zh-timestamp-int8-onnx-offline

# K2Transducer 2pass
manyspeech asr -t 2pass -i mic --model k2transducer-zipformer-ctc-large-zh-onnx-online-yuekai-20250630 --model2 k2transducer-zipformer-ctc-small-zh-int8-onnx-offline-20250716
```

## VAD 语音端点检测

```cmd
# 麦克风在线检测
manyspeech vad -t online -i mic

# 音频文件离线检测（剔除静音）
manyspeech vad -t offline -f meeting.wav

# 指定输出格式
manyspeech vad -t offline --format wav -f noisy_speech.wav
```

## 标点符号恢复

```cmd
# 直接输入文本
manyspeech punc --text "今天天气不错一起去郊游吧"

# 从文件读取
manyspeech punc -f transcript.txt

# 指定输出JSON格式
manyspeech punc --text "hello world" --format json
```
