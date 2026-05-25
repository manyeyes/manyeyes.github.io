# 使用指南

ManySpeech-CLI 提供了三种核心子命令：

## 子命令概览

| 子命令 | 功能 | 支持类型 |
|--------|------|----------|
| `asr` | 语音识别 | online / offline / 2pass |
| `vad` | 语音端点检测 | online / offline |
| `punc` | 标点符号恢复 | - |

## 命令结构

```bash
manyspeech <子命令> [参数...]
```

> 💡 **提示**：全局选项（`--base`、`--vad`、`--output`、`--debug` 等）可放在命令行的**任意位置**。

## 快速示例

```bash
# 语音识别
manyspeech asr -t offline -f audio.wav

# VAD 检测
manyspeech vad -t online -i mic

# 标点恢复
manyspeech punc --text "你好世界"
```

## 导航

- [命令行模式 vs 交互模式](./cli-modes)
- [子命令详解](./commands)
- [典型使用示例](./examples)
- [调试模式](./debugging)
