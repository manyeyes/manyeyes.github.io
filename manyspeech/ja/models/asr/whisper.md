# Whisper シリーズ

> **説明**
>
> 1. 末尾に `-kv` が付くものは、KV Cache推論高速化を有効にしたバージョン
> 2. 全シリーズ**句読点対応、タイムスタンプ対応**。デフォルトで段落レベルのタイムスタンプを出力し、パラメータで単語レベルのタイムスタンプも有効化可能
> 3. 言語範囲：
>    - 標準多言語版（tiny/small/medium/large-v1/large-v2）：合計 **99言語**（中国語、広東語、英語、日本語、韓国語、ロシア語、アラビア語、ベトナム語、ウクライナ語など世界の主要言語を含む）
>    - large-v3 / large-v3-turbo シリーズ：99言語に加え低リソース言語を拡張し、合計約 **106言語**。新たに追加されたもの：**ズールー語（zu）、マオリ語（mi）、スワヒリ語（sw）、ハウサ語（ha）** など。言語識別効果が顕著に向上

## whisper-tiny モデル

| モデル名                 | タイプ      | 対応言語     | 句読点 | タイムスタンプ | KV | ダウンロード先                                                                      |
| -------------------- | -------- | -------- | --- | ------- | -- | ---------------------------------------------------------------------------- |
| whisper-tiny-onnx    | 非ストリーミング | 99言語の多言語 | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-onnx)    |
| whisper-tiny-onnx-kv | 非ストリーミング | 99言語の多言語 | あり  | あり      | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-onnx-kv) |
| whisper-tiny-en-onnx | 非ストリーミング | 英語       | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-en-onnx) |

## whisper-small モデル

| モデル名                         | タイプ      | 対応言語       | 句読点 | タイムスタンプ | KV | ダウンロード先                                                                              |
| ---------------------------- | -------- | ---------- | --- | ------- | -- | ------------------------------------------------------------------------------------ |
| whisper-small-onnx           | 非ストリーミング | 99言語の多言語   | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-onnx)           |
| whisper-small-en-onnx        | 非ストリーミング | 英語         | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-en-onnx)        |
| whisper-small-cantonese-onnx | 非ストリーミング | 広東語、中国語、英語 | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-cantonese-onnx) |

## whisper-medium モデル

| モデル名                            | タイプ      | 対応言語     | 句読点 | タイムスタンプ | KV | ダウンロード先                                                                                 |
| ------------------------------- | -------- | -------- | --- | ------- | -- | --------------------------------------------------------------------------------------- |
| whisper-medium-onnx             | 非ストリーミング | 99言語の多言語 | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-onnx)             |
| whisper-medium-int8-onnx-kv     | 非ストリーミング | 99言語の多言語 | あり  | あり      | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-int8-onnx-kv)     |
| whisper-medium-en-onnx          | 非ストリーミング | 英語       | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-en-onnx)          |
| whisper-medium-yue-onnx-kv      | 非ストリーミング | 広東語      | あり  | あり      | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-yue-onnx-kv)      |
| whisper-medium-yue-int8-onnx-kv | 非ストリーミング | 広東語      | あり  | あり      | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-yue-int8-onnx-kv) |

## whisper-large モデル

| モデル名                                                  | タイプ      | 対応言語       | 句読点 | タイムスタンプ | KV | ダウンロード先                                                                                                       |
| ----------------------------------------------------- | -------- | ---------- | --- | ------- | -- | ------------------------------------------------------------------------------------------------------------- |
| whisper-large-v1-onnx                                 | 非ストリーミング | 99言語の多言語   | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v1-onnx)                                 |
| whisper-large-v2-onnx                                 | 非ストリーミング | 99言語の多言語   | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v2-onnx)                                 |
| whisper-large-v3-onnx                                 | 非ストリーミング | 約106言語の多言語 | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-onnx)                                 |
| whisper-large-v3-turbo-onnx                           | 非ストリーミング | 約106言語の多言語 | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-onnx)                           |
| whisper-large-v3-turbo-zh-onnx                        | 非ストリーミング | 中国語        | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-zh-onnx)                        |
| whisper-large-v3-turbo-zh-int8-onnx-kv-belle-20241016 | 非ストリーミング | 中国語        | あり  | あり      | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-zh-int8-onnx-kv-belle-20241016) |

## Distil-Whisper モデル

| モデル名                                                  | タイプ      | 対応言語            | 句読点 | タイムスタンプ | KV | ダウンロード先                                                                                                       |
| ----------------------------------------------------- | -------- | --------------- | --- | ------- | -- | ------------------------------------------------------------------------------------------------------------- |
| distil-whisper-small-en-onnx                          | 非ストリーミング | 英語              | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-small-en-onnx)                          |
| distil-whisper-medium-en-onnx                         | 非ストリーミング | 英語              | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-medium-en-onnx)                         |
| distil-whisper-large-v2-en-onnx                       | 非ストリーミング | 英語              | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v2-en-onnx)                       |
| distil-whisper-large-v3-en-onnx                       | 非ストリーミング | 英語              | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v3-en-onnx)                       |
| distil-whipser-large-v3.5-en-onnx                     | 非ストリーミング | 英語              | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whipser-large-v3.5-en-onnx)                     |
| distil-whisper-large-v2-multi-hans-onnx               | 非ストリーミング | 中国語（99言語の多言語互換） | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v2-multi-hans-onnx)               |
| distil-whisper-small-cantonese-onnx-alvanlii-20240404 | 非ストリーミング | 広東語、中国語、英語      | あり  | あり      | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-small-cantonese-onnx-alvanlii-20240404) |
