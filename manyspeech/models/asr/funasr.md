# FunASR 系列

### Paraformer 中英模型

| 模型名称                                          | 类型  | 支持语言           | 标点 | 时间戳 | 下载地址                                                                                                                                                                                                        |
| --------------------------------------------- | --- | -------------- | -- | --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| paraformer-large-zh-en-onnx-offline           | 非流式 | 中文(zh), 英文(en) | 否  | 否   | [huggingface](https://huggingface.co/manyeyes/speech_paraformer-large_asr_nat-zh-cn-16k-common-vocab8404-onnx), [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-onnx-offline) |
| paraformer-large-zh-en-timestamp-onnx-offline | 非流式 | 中文、英文          | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-timestamp-onnx-offline)                                                                                                       |
| paraformer-large-en-onnx-offline              | 非流式 | 英文             | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-en-onnx-offline)                                                                                                                    |
| paraformer-large-zh-en-onnx-online            | 流式  | 中文、英文          | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-onnx-online)                                                                                                                  |

### Paraformer 粤/中英多语言模型

| 模型名称                                                                  | 类型  | 支持语言  | 标点 | 时间戳 | 下载地址                                                                                                                          |
| --------------------------------------------------------------------- | --- | ----- | -- | --- | ----------------------------------------------------------------------------------------------------------------------------- |
| paraformer-large-zh-yue-en-timestamp-onnx-offline-dengcunqin-20240805 | 非流式 | 中、粤、英 | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-timestamp-onnx-offline-dengcunqin-20240805) |
| paraformer-large-zh-yue-en-onnx-offline-dengcunqin-20240805           | 非流式 | 中、粤、英 | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-onnx-offline-dengcunqin-20240805)           |
| paraformer-large-zh-yue-en-onnx-online-dengcunqin-20240208            | 流式  | 中、粤、英 | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-onnx-online-dengcunqin-20240208)            |

### SeACo-Paraformer 热词定制模型

SeACoParaformer是阿里巴巴语音实验室提出的新一代热词定制化非自回归语音识别模型。相比于上一代基于CLAS的热词定制化方案，SeACoParaformer解耦了热词模块与ASR模型，通过后验概率融合的方式进行热词激励，使激励过程可见可控，并且热词召回率显著提升。

| 模型名称                                             | 类型  | 支持语言      | 标点 | 时间戳 | 下载地址                                                                                                     |
| ------------------------------------------------ | --- | --------- | -- | --- | -------------------------------------------------------------------------------------------------------- |
| paraformer-seaco-large-zh-timestamp-onnx-offline | 非流式 | 中文,支持热词定制 | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-seaco-large-zh-timestamp-onnx-offline) |

### SenseVoice 模型

| 模型名称                                       | 类型  | 支持语言      | 标点 | 时间戳 | 下载地址                                                                                               |
| ------------------------------------------ | --- | --------- | -- | --- | -------------------------------------------------------------------------------------------------- |
| sensevoice-small-onnx                      | 非流式 | 中、粤、英、日、韩 | 是  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-onnx)                      |
| sensevoice-small-int8-onnx                 | 非流式 | 中、粤、英、日、韩 | 是  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-int8-onnx)                 |
| sensevoice-small-wenetspeech-yue-onnx      | 非流式 | 粤、中、英、日、韩 | 是  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-wenetspeech-yue-onnx)      |
| sensevoice-small-wenetspeech-yue-int8-onnx | 非流式 | 粤、中、英、日、韩 | 是  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-wenetspeech-yue-int8-onnx) |
| sensevoice-small-split-embed-onnx          | 非流式 | 中、粤、英、日、韩 | 是  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-split-embed-onnx)          |
