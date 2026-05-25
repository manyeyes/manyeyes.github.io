---
pageType: home

hero:
  name: "ManySpeech"
  text: "轻量化本地语音识别工具"
  tagline: 原生支持离线识别、实时流式识别，无需云端、无需额外配置
  actions:
    - theme: brand
      text: 快速开始
      link: /cli/getting-started/
    - theme: alt
      text: GitHub
      link: https://github.com/manyeyes/ManySpeech
  image:
    src: /manyspeech-icon-512.png
    alt: ManySpeech

features:
  - title: 🎯 双核驱动
    details: 离线音频识别 + 麦克风实时流式识别，覆盖全场景
  - title: 🤖 智能模型管理
    details: 自动检测并下载所需模型，全程离线本地推理
  - title: 📝 多格式输出
    details: 支持 SRT字幕、JSON、纯文本等多种输出格式
  - title: ⚡ 高性能
    details: 支持多线程推理，自动检测CPU核心数智能适配
  - title: 🔧 双模式使用
    details: 交互模式 + 命令行模式，灵活适配不同场景
  - title: 📦 零配置开箱
    details: 解压即用，无需复杂的环境配置
---

## ✨ 功能亮点

| 功能 | 说明 |
|------|------|
| **语音识别 (ASR)** | 支持 online / offline / 2pass 三种识别模式 |
| **语音端点检测 (VAD)** | 支持 online / offline 检测，自动剔除静音 |
| **标点符号恢复 (PUNC)** | 为识别结果自动添加标点符号 |

---

## 🚀 一行命令快速体验

```bash
# 麦克风实时识别
manyspeech asr -t online -i mic

# 音频文件识别
manyspeech asr -t offline -f test.wav
```

> 完整文档请查看左侧导航栏
