# Whisper 系列

> **说明**  
> 1. 后缀带 `-kv` 代表启用 KV Cache 推理加速  
> 2. 全系模型**支持标点、支持时间戳**，默认输出段落级时间戳，可通过参数开启词级时间戳  
> 3. 语种范围：  
>    - 标准多语言版（tiny/small/medium/large-v1/large-v2）：共支持 **99 种语言**（含中文、粤语、英语、日语、韩语、俄语、阿拉伯语、越南语、乌克兰语等全球主流语种）  
>    - large-v3 / large-v3-turbo 系列：在99种语言基础上扩充低资源语种，总计约 **106 种**，新增：**祖鲁语（zu）、毛利语（mi）、斯瓦希里语（sw）、豪萨语（ha）** 等，对应语种识别效果显著增强  

### whisper-tiny 模型

| 模型名称 | 类型 | 支持语种 | 标点 | 时间戳 | KV | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| whisper-tiny-onnx | 非流式 | 99种多语言 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-onnx) |
| whisper-tiny-onnx-kv | 非流式 | 99种多语言 | 是 | 是 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-onnx-kv) |
| whisper-tiny-en-onnx | 非流式 | 英语 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-en-onnx) |

### whisper-small 模型

| 模型名称 | 类型 | 支持语种 | 标点 | 时间戳 | KV | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| whisper-small-onnx | 非流式 | 99种多语言 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-onnx) |
| whisper-small-en-onnx | 非流式 | 英语 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-en-onnx) |
| whisper-small-cantonese-onnx | 非流式 | 粤语、中文、英语 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-cantonese-onnx) |

### whisper-medium 模型

| 模型名称 | 类型 | 支持语种 | 标点 | 时间戳 | KV | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| whisper-medium-onnx | 非流式 | 99种多语言 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-onnx) |
| whisper-medium-int8-onnx-kv | 非流式 | 99种多语言 | 是 | 是 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-int8-onnx-kv) |
| whisper-medium-en-onnx | 非流式 | 英语 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-en-onnx) |
| whisper-medium-yue-onnx-kv | 非流式 | 粤语 | 是 | 是 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-yue-onnx-kv) |
| whisper-medium-yue-int8-onnx-kv | 非流式 | 粤语 | 是 | 是 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-yue-int8-onnx-kv) |

### whisper-large 模型

| 模型名称 | 类型 | 支持语种 | 标点 | 时间戳 | KV | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| whisper-large-v1-onnx | 非流式 | 99种多语言 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v1-onnx) |
| whisper-large-v2-onnx | 非流式 | 99种多语言 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v2-onnx) |
| whisper-large-v3-onnx | 非流式 | 约106种多语言 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-onnx) |
| whisper-large-v3-turbo-onnx | 非流式 | 约106种多语言 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-onnx) |
| whisper-large-v3-turbo-zh-onnx | 非流式 | 中文 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-zh-onnx) |
| whisper-large-v3-turbo-zh-int8-onnx-kv-belle-20241016 | 非流式 | 中文 | 是 | 是 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-zh-int8-onnx-kv-belle-20241016) |

### Distil-Whisper 模型

| 模型名称 | 类型 | 支持语种 | 标点 | 时间戳 | KV | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| distil-whisper-small-en-onnx | 非流式 | 英语 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-small-en-onnx) |
| distil-whisper-medium-en-onnx | 非流式 | 英语 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-medium-en-onnx) |
| distil-whisper-large-v2-en-onnx | 非流式 | 英语 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v2-en-onnx) |
| distil-whisper-large-v3-en-onnx | 非流式 | 英语 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v3-en-onnx) |
| distil-whipser-large-v3.5-en-onnx | 非流式 | 英语 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whipser-large-v3.5-en-onnx) |
| distil-whisper-large-v2-multi-hans-onnx | 非流式 | 中文（兼容99种多语言） | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v2-multi-hans-onnx) |
| distil-whisper-small-cantonese-onnx-alvanlii-20240404 | 非流式 | 粤语、中文、英语 | 是 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-small-cantonese-onnx-alvanlii-20240404) |

