# FunASR Series

### Paraformer Chinese-English Models

| Model Name                                    | Type          | Languages                  | Punctuation | Timestamps | Download Link                                                                                                                                                                                               |
| --------------------------------------------- | ------------- | -------------------------- | ----------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| paraformer-large-zh-en-onnx-offline           | Non-streaming | Chinese (zh), English (en) | No          | No         | [huggingface](https://huggingface.co/manyeyes/speech_paraformer-large_asr_nat-zh-cn-16k-common-vocab8404-onnx), [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-onnx-offline) |
| paraformer-large-zh-en-timestamp-onnx-offline | Non-streaming | Chinese, English           | No          | Yes        | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-timestamp-onnx-offline)                                                                                                       |
| paraformer-large-en-onnx-offline              | Non-streaming | English                    | No          | No         | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-en-onnx-offline)                                                                                                                    |
| paraformer-large-zh-en-onnx-online            | Streaming     | Chinese, English           | No          | No         | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-onnx-online)                                                                                                                  |

### Paraformer Cantonese/Chinese/English Multilingual Models

| Model Name                                                            | Type          | Languages                   | Punctuation | Timestamps | Download Link                                                                                                                 |
| --------------------------------------------------------------------- | ------------- | --------------------------- | ----------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------- |
| paraformer-large-zh-yue-en-timestamp-onnx-offline-dengcunqin-20240805 | Non-streaming | Chinese, Cantonese, English | No          | Yes        | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-timestamp-onnx-offline-dengcunqin-20240805) |
| paraformer-large-zh-yue-en-onnx-offline-dengcunqin-20240805           | Non-streaming | Chinese, Cantonese, English | No          | No         | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-onnx-offline-dengcunqin-20240805)           |
| paraformer-large-zh-yue-en-onnx-online-dengcunqin-20240208            | Streaming     | Chinese, Cantonese, English | No          | No         | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-onnx-online-dengcunqin-20240208)            |

### SeACo-Paraformer Hotword Customization Model

SeACoParaformer is a next-generation non-autoregressive speech recognition model with hotword customization, proposed by Alibaba Speech Lab. Compared to the previous CLAS-based hotword customization solution, SeACoParaformer decouples the hotword module from the ASR model and performs hotword boosting via posterior probability fusion, making the boosting process visible and controllable, while significantly improving hotword recall.

| Model Name                                       | Type          | Languages                               | Punctuation | Timestamps | Download Link                                                                                            |
| ------------------------------------------------ | ------------- | --------------------------------------- | ----------- | ---------- | -------------------------------------------------------------------------------------------------------- |
| paraformer-seaco-large-zh-timestamp-onnx-offline | Non-streaming | Chinese, supports hotword customization | No          | Yes        | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-seaco-large-zh-timestamp-onnx-offline) |

### SenseVoice Models

| Model Name                                 | Type          | Languages                                     | Punctuation | Timestamps | Download Link                                                                                      |
| ------------------------------------------ | ------------- | --------------------------------------------- | ----------- | ---------- | -------------------------------------------------------------------------------------------------- |
| sensevoice-small-onnx                      | Non-streaming | Chinese, Cantonese, English, Japanese, Korean | Yes         | No         | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-onnx)                      |
| sensevoice-small-int8-onnx                 | Non-streaming | Chinese, Cantonese, English, Japanese, Korean | Yes         | No         | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-int8-onnx)                 |
| sensevoice-small-wenetspeech-yue-onnx      | Non-streaming | Cantonese, Chinese, English, Japanese, Korean | Yes         | No         | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-wenetspeech-yue-onnx)      |
| sensevoice-small-wenetspeech-yue-int8-onnx | Non-streaming | Cantonese, Chinese, English, Japanese, Korean | Yes         | No         | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-wenetspeech-yue-int8-onnx) |
| sensevoice-small-split-embed-onnx          | Non-streaming | Chinese, Cantonese, English, Japanese, Korean | Yes         | No         | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-split-embed-onnx)          |
