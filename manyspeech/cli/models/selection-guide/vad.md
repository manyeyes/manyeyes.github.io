# VAD 模型

## FSMN-VAD 系列

> **说明**
>
> - 模型背景：由阿里巴巴达摩院研发的工业级语音活性检测模型，基于 FSMN-Monophone 架构设计，为16k中文通用VAD模型，原生适配 FunASR 框架与 Paraformer-large 长音频场景。
> - 功能特性：依托FSMN结构充分利用上下文信息，推理速度快、时延可控；采用Monophone细分建模单元，提升特征区分能力，降低识别错误。支持音频文件、URL、二进制流、音频数组、wav.scp列表等多种输入，可自定义尾部静音时长、语音噪声阈值等参数；全平台兼容 Linux-x86\_64、macOS、Windows，可与ASR、标点模块自由组合使用。
> - 开源仓库：[https://github.com/modelscope/FunASR](https://github.com/modelscope/FunASR)

### 模型列表

| 模型名称            | 说明                | 下载地址                                                                |
| --------------- | ----------------- | ------------------------------------------------------------------- |
| alifsmnvad-onnx | 通用标准版，综合表现均衡，默认推荐 | [modelscope](https://modelscope.cn/models/manyeyes/alifsmnvad-onnx) |

***

## Silero-VAD 系列

> **说明**
>
> - 模型背景：由开源社区 snakers4 推出的深度学习语音活性检测模型，主流开源VAD方案，适配16kHz音频输入。
> - 功能特性：对语音执行预加重、分帧、加窗等预处理后，通过神经网络学习语音特征，精准区分语音与非语音片段；可根据噪声环境自适应调整检测阈值，在嘈杂场景下表现优异，迭代版本持续优化抗噪能力。
> - 开源仓库：[https://github.com/snakers4/silero-vad](https://github.com/snakers4/silero-vad)

### 模型列表

| 模型名称               | 说明                 | 下载地址                                                                   |
| ------------------ | ------------------ | ---------------------------------------------------------------------- |
| silero-vad-onnx    | 基础版本，适用于常规通用场景     | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-onnx)    |
| silero-vad-v5-onnx | V5 迭代版，优化噪声环境适配能力  | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-v5-onnx) |
| silero-vad-v6-onnx | V6 最新版本，嘈杂环境检测效果更佳 | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-v6-onnx) |
