# FSMN-VAD 系列

> **说明**
> - 模型背景：由阿里巴巴达摩院研发的工业级语音活性检测模型，基于 FSMN-Monophone 架构设计，为16k中文通用VAD模型，原生适配 FunASR 框架与 Paraformer-large 长音频场景。
> - 功能特性：依托FSMN结构充分利用上下文信息，推理速度快、时延可控；采用Monophone细分建模单元，提升特征区分能力，降低识别错误。支持音频文件、URL、二进制流、音频数组、wav.scp列表等多种输入，可自定义尾部静音时长、语音噪声阈值等参数；全平台兼容 Linux-x86_64、macOS、Windows，可与ASR、标点模块自由组合使用。
> - 开源仓库：https://github.com/modelscope/FunASR

### 模型列表
| 模型名称 | 说明 | 下载地址 |
| ---- | ---- | ---- |
| alifsmnvad-onnx | 通用标准版，综合表现均衡，默认推荐 | [modelscope](https://modelscope.cn/models/manyeyes/alifsmnvad-onnx) |
