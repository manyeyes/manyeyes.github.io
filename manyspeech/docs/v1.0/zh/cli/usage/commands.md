# 子命令详解

## asr - 语音识别

### 识别类型

| 类型 | 说明 | 适用场景 |
|------|------|----------|
| `online` | 实时流式识别，边录边出字 | 麦克风、直播、低延迟 |
| `offline` | 非流式识别，处理完整音频 | 文件识别、长音频 |
| `2pass` | 双流融合，实时+精修 | 兼顾实时与精度 |

### 基本用法

```bash
# 文件识别（离线）
manyspeech asr -t offline -f audio.wav

# 麦克风识别（在线）
manyspeech asr -t online -i mic

# 2pass 识别
manyspeech asr -t 2pass -i mic
```

### 输出格式

| 格式 | 说明 |
|------|------|
| `text` | 纯文本（默认） |
| `json` | JSON格式，含时间戳 |
| `srt` | SubRip字幕 |
| `vtt` | WebVTT字幕 |

```bash
manyspeech asr -t offline --format srt -f audio.wav
```

---

## vad - 语音端点检测

### 基本用法

```bash
# 麦克风在线检测
manyspeech vad -t online -i mic

# 音频文件离线检测
manyspeech vad -t offline -f audio.wav

# 指定输出格式
manyspeech vad -t offline --format wav -f audio.wav
```

---

## punc - 标点符号恢复

### 基本用法

```bash
# 直接输入文本
manyspeech punc --text "今天天气不错一起去郊游吧"

# 从文件读取
manyspeech punc -f text.txt
```
