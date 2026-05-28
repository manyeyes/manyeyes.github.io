# サポートモデル一覧

## ASR モデル

| モデルファミリ | 説明 | サポート |
|---------|------|----------|
| **AliParaformerAsr** | Paraformer 系列 | online/offline/2pass |
| **FireRedAsr** | FireRed 大モデル（中国語向け、最高精度） | offline |
| **K2TransducerAsr** | K2 系列 | online/offline/2pass |
| **WhisperAsr** | OpenAI Whisper 系列 | offline |
| **MoonshineAsr** | 軽量英語モデル | offline |
| **WenetAsr** | Wenet | online/offline |
| **DolphinAsr** | Dolphin 系列 | offline |
| **OmniAsr** | オールラウンド | online |
| **Fun-ASR-Nano-2512** | Fun-ASR-Nano | offline |

## VAD モデル

| モデル名 | 説明 |
|---------|------|
| `alifsmnvad-onnx` | FSMN-VAD（デフォルト、汎用） |
| `silero-vad-v6-onnx` | Silero-VAD（騒音環境で優位） |

## 句読点モデル

| モデル名 | 説明 |
|---------|------|
| `alicttransformerpunc-zh-en-mge-int8-onnx` | CT-Transformer（デフォルト） |

詳細:
- [AliParaformerAsr リポジトリ](https://github.com/manyeyes/ManySpeech/blob/master/docs/readme/AliParaformerAsr/README.zh_CN.md)
- [FireRedAsr リポジトリ](https://github.com/manyeyes/ManySpeech/blob/master/docs/readme/FireRedAsr/README.zh_CN.md)
- [K2TransducerAsr リポジトリ](https://github.com/manyeyes/ManySpeech/blob/master/docs/readme/K2TransducerAsr/README.zh_CN.md)

さらに詳しくは ModelScope の manyeyes ページへ。
