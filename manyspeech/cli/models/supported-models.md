# 支持的模型列表

## ASR 模型

| 模型系列                  | 说明               | 支持类型                 |
| --------------------- | ---------------- | -------------------- |
| **AliParaformerAsr**  | 达摩院Paraformer系列  | online/offline/2pass |
| **FireRedAsr**        | FireRed大模型，中文最佳  | offline              |
| **K2TransducerAsr**   | K2转ducer系列       | online/offline/2pass |
| **WhisperAsr**        | OpenAI Whisper系列 | offline              |
| **MoonshineAsr**      | 轻量级英文模型          | offline              |
| **WenetAsr**          | 开源自研模型           | online/offline       |
| **DolphinAsr**        | 海豚系列             | offline              |
| **OmniAsr**           | 全能系列             | online               |
| **Fun-ASR-Nano-2512** | 最新纳米模型           | offline              |

## VAD 模型

| 模型名称                 | 说明                 |
| -------------------- | ------------------ |
| `alifsmnvad-onnx`    | FSMN-VAD（默认，通用）    |
| `silero-vad-v6-onnx` | Silero-VAD（嘈杂环境更佳） |

## 标点恢复模型

| 模型名称                                       | 说明                 |
| ------------------------------------------ | ------------------ |
| `alicttransformerpunc-zh-en-mge-int8-onnx` | CT-Transformer（默认） |

## 详细文档

- [AliParaformerAsr](https://github.com/manyeyes/ManySpeech/blob/master/docs/readme/AliParaformerAsr/README.zh_CN.md)
- [FireRedAsr](https://github.com/manyeyes/ManySpeech/blob/master/docs/readme/FireRedAsr/README.zh_CN.md)
- [K2TransducerAsr](https://github.com/manyeyes/ManySpeech/blob/master/docs/readme/K2TransducerAsr/README.zh_CN.md)

## 更多模型

请访问 [manyeyes ModelScope主页](https://modelscope.cn/profile/manyeyes?tab=model)
