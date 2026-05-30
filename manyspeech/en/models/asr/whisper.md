# Whisper Series

> **Notes**
>
> 1. Models with `-kv` suffix have KV Cache inference acceleration enabled
> 2. All models support **punctuation** and **timestamps**. Output paragraph-level timestamps by default, can enable word-level timestamps via parameters
> 3. Language coverage:
>    - Standard multilingual versions (tiny/small/medium/large-v1/large-v2): Support **99 languages** (including Chinese, Cantonese, English, Japanese, Korean, Russian, Arabic, Vietnamese, Ukrainian, and other major world languages)
>    - large-v3 / large-v3-turbo series: Extend low-resource languages beyond the 99, total approximately **106 languages**. New additions include **Zulu (zu), Maori (mi), Swahili (sw), Hausa (ha)**, etc., with significantly improved language identification

### whisper-tiny Models

| Model Name           | Type          | Languages       | Punctuation | Timestamps | KV  | Download Link                                                                |
| -------------------- | ------------- | --------------- | ----------- | ---------- | --- | ---------------------------------------------------------------------------- |
| whisper-tiny-onnx    | Non-streaming | 99 multilingual | Yes         | Yes        | No  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-onnx)    |
| whisper-tiny-onnx-kv | Non-streaming | 99 multilingual | Yes         | Yes        | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-onnx-kv) |
| whisper-tiny-en-onnx | Non-streaming | English         | Yes         | Yes        | No  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-en-onnx) |

### whisper-small Models

| Model Name                   | Type          | Languages                   | Punctuation | Timestamps | KV | Download Link                                                                        |
| ---------------------------- | ------------- | --------------------------- | ----------- | ---------- | -- | ------------------------------------------------------------------------------------ |
| whisper-small-onnx           | Non-streaming | 99 multilingual             | Yes         | Yes        | No | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-onnx)           |
| whisper-small-en-onnx        | Non-streaming | English                     | Yes         | Yes        | No | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-en-onnx)        |
| whisper-small-cantonese-onnx | Non-streaming | Cantonese, Chinese, English | Yes         | Yes        | No | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-cantonese-onnx) |

### whisper-medium Models

| Model Name                      | Type          | Languages       | Punctuation | Timestamps | KV  | Download Link                                                                           |
| ------------------------------- | ------------- | --------------- | ----------- | ---------- | --- | --------------------------------------------------------------------------------------- |
| whisper-medium-onnx             | Non-streaming | 99 multilingual | Yes         | Yes        | No  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-onnx)             |
| whisper-medium-int8-onnx-kv     | Non-streaming | 99 multilingual | Yes         | Yes        | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-int8-onnx-kv)     |
| whisper-medium-en-onnx          | Non-streaming | English         | Yes         | Yes        | No  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-en-onnx)          |
| whisper-medium-yue-onnx-kv      | Non-streaming | Cantonese       | Yes         | Yes        | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-yue-onnx-kv)      |
| whisper-medium-yue-int8-onnx-kv | Non-streaming | Cantonese       | Yes         | Yes        | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-yue-int8-onnx-kv) |

### whisper-large Models

| Model Name                                            | Type          | Languages          | Punctuation | Timestamps | KV  | Download Link                                                                                                 |
| ----------------------------------------------------- | ------------- | ------------------ | ----------- | ---------- | --- | ------------------------------------------------------------------------------------------------------------- |
| whisper-large-v1-onnx                                 | Non-streaming | 99 multilingual    | Yes         | Yes        | No  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v1-onnx)                                 |
| whisper-large-v2-onnx                                 | Non-streaming | 99 multilingual    | Yes         | Yes        | No  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v2-onnx)                                 |
| whisper-large-v3-onnx                                 | Non-streaming | \~106 multilingual | Yes         | Yes        | No  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-onnx)                                 |
| whisper-large-v3-turbo-onnx                           | Non-streaming | \~106 multilingual | Yes         | Yes        | No  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-onnx)                           |
| whisper-large-v3-turbo-zh-onnx                        | Non-streaming | Chinese            | Yes         | Yes        | No  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-zh-onnx)                        |
| whisper-large-v3-turbo-zh-int8-onnx-kv-belle-20241016 | Non-streaming | Chinese            | Yes         | Yes        | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-zh-int8-onnx-kv-belle-20241016) |

### Distil-Whisper Models

| Model Name                                            | Type          | Languages                              | Punctuation | Timestamps | KV | Download Link                                                                                                 |
| ----------------------------------------------------- | ------------- | -------------------------------------- | ----------- | ---------- | -- | ------------------------------------------------------------------------------------------------------------- |
| distil-whisper-small-en-onnx                          | Non-streaming | English                                | Yes         | Yes        | No | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-small-en-onnx)                          |
| distil-whisper-medium-en-onnx                         | Non-streaming | English                                | Yes         | Yes        | No | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-medium-en-onnx)                         |
| distil-whisper-large-v2-en-onnx                       | Non-streaming | English                                | Yes         | Yes        | No | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v2-en-onnx)                       |
| distil-whisper-large-v3-en-onnx                       | Non-streaming | English                                | Yes         | Yes        | No | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v3-en-onnx)                       |
| distil-whipser-large-v3.5-en-onnx                     | Non-streaming | English                                | Yes         | Yes        | No | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whipser-large-v3.5-en-onnx)                     |
| distil-whisper-large-v2-multi-hans-onnx               | Non-streaming | Chinese (compatible with 99 languages) | Yes         | Yes        | No | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v2-multi-hans-onnx)               |
| distil-whisper-small-cantonese-onnx-alvanlii-20240404 | Non-streaming | Cantonese, Chinese, English            | Yes         | Yes        | No | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-small-cantonese-onnx-alvanlii-20240404) |
