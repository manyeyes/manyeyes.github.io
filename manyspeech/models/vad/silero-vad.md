# Silero-VAD 系列

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
