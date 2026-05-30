# FunASR シリーズ

## Paraformer 中英モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| paraformer-large-zh-en-onnx-offline | 非ストリーミング | 中国語(zh), 英語(en) | なし | なし | [huggingface](https://huggingface.co/manyeyes/speech_paraformer-large_asr_nat-zh-cn-16k-common-vocab8404-onnx), [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-onnx-offline) |
| paraformer-large-zh-en-timestamp-onnx-offline | 非ストリーミング | 中国語、英語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-timestamp-onnx-offline) |
| paraformer-large-en-onnx-offline | 非ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-en-onnx-offline) |
| paraformer-large-zh-en-onnx-online | ストリーミング | 中国語、英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-onnx-online) |

## Paraformer 粤/中英多言語モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| paraformer-large-zh-yue-en-timestamp-onnx-offline-dengcunqin-20240805 | 非ストリーミング | 中、広東語、英 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-timestamp-onnx-offline-dengcunqin-20240805) |
| paraformer-large-zh-yue-en-onnx-offline-dengcunqin-20240805 | 非ストリーミング | 中、広東語、英 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-onnx-offline-dengcunqin-20240805) |
| paraformer-large-zh-yue-en-onnx-online-dengcunqin-20240208 | ストリーミング | 中、広東語、英 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-onnx-online-dengcunqin-20240208) |

## SeACo-Paraformer ホットワードカスタマイズモデル

SeACoParaformerは、アリババ音声実験室が提案した次世代のホットワードカスタマイズ非自己回帰音声認識モデルです。従来のCLASベースのホットワードカスタマイズ方式と比較して、ホットワードモジュールとASRモデルを分離し、事後確率融合によりホットワードを促進することで、促進プロセスを可視化・制御可能にし、ホットワードの再現率を大幅に向上させています。

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| paraformer-seaco-large-zh-timestamp-onnx-offline | 非ストリーミング | 中国語、ホットワードカスタマイズ対応 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-seaco-large-zh-timestamp-onnx-offline) |

## SenseVoice モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| sensevoice-small-onnx | 非ストリーミング | 中、広東語、英、日、韓 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-onnx) |
| sensevoice-small-int8-onnx | 非ストリーミング | 中、広東語、英、日、韓 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-int8-onnx) |
| sensevoice-small-wenetspeech-yue-onnx | 非ストリーミング | 広東語、中、英、日、韓 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-wenetspeech-yue-onnx) |
| sensevoice-small-wenetspeech-yue-int8-onnx | 非ストリーミング | 広東語、中、英、日、韓 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-wenetspeech-yue-int8-onnx) |
| sensevoice-small-split-embed-onnx | 非ストリーミング | 中、広東語、英、日、韓 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-split-embed-onnx) |
