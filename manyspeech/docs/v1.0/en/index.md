---
pageType: home

hero:
  name: "ManySpeech"
  text: "Lightweight Local Speech AI"
  tagline: Native offline recognition, real-time streaming, no cloud required.
  actions:
    - theme: brand
      text: Get Started
      link: /cli/getting-started/
    - theme: alt
      text: GitHub
      link: https://github.com/manyeyes/ManySpeech
  image:
    src: /manyspeech/manyspeech-icon-512.webp
    alt: ManySpeech

features:
  - title: 🎯 Dual-Core Engine
    details: Offline audio recognition + Real-time microphone streaming.
  - title: 🤖 Smart Model Management
    details: Auto-detect and download models. Fully offline local inference.
  - title: 📝 Multi-Format Output
    details: Supports SRT subtitles, JSON, plain text, and more.
  - title: ⚡ High Performance
    details: Multi-threaded inference with automatic CPU core detection.
  - title: 🔧 Dual Mode Usage
    details: Interactive mode + CLI mode, flexible for different scenarios.
  - title: 📦 Zero Config
    details: Ready to use out of the box, no complex environment setup.
---

## ✨ Highlights

| Feature | Description |
|------|------|
| **ASR** | Supports online / offline / 2pass recognition modes |
| **VAD** | Online / offline voice activity detection, auto silence removal |
| **PUNC** | Automatic punctuation restoration for recognized text |

---

## 🚀 Quick Start

```bash
# Real-time microphone recognition
manyspeech asr -t online -i mic

# Audio file recognition
manyspeech asr -t offline -f test.wav
```

> Check the left sidebar for full documentation.
