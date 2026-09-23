# cohere-transcribe 系列

> **说明**
>
> - License: Apache 2.0，支持商用、二次分发
> - 基础模型源自 [`CohereLabs/cohere-transcribe-03-2026`](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026)，**2B参数 Conformer 编码器 + 轻量Transformer解码器**，从零开始训练，使用50万小时精选音频文本对训练；同参数量下推理吞吐最高可达同类模型3倍
> - 输入预处理：音频自动重采样至16kHz，多通道立体声自动平均转为单声道，输出log-Mel频谱；长音频支持自动分块拼接，可处理小时级长音频
> - 输出特性：模型**默认开启标点，可通过参数关闭标点输出**
> - 能力限制：**不自带时间戳、说话人分离、自动语种识别**，推理前必须手动指定目标语种；混合语种音频识别效果不稳定；容易将背景噪声识别为文本，建议搭配VAD语音活动检测使用
> - 模型性能：在官方ASR榜单综合平均WER为5.42%，在会议、长音频等场景具备优秀识别效果，优于Whisper Large v3等主流开源ASR模型
> - 生态支持：原生支持Transformers、vLLM、MLX、Rust、WebGPU，支持浏览器、Apple Silicon、服务端多平台部署

完整支持语言及区域编码对照：

```
zh-CN: 中文(普通话)
en-US: 英语(美式)，en-GB: 英语(英式)
fr-FR: 法语(法国)
de-DE: 德语(德国)
it-IT: 意大利语(意大利)
es-ES: 西班牙语(西班牙)
pt-PT: 葡萄牙语(葡萄牙)
el-GR: 希腊语(希腊)
nl-NL: 荷兰语(荷兰)
pl-PL: 波兰语(波兰)
ja-JP: 日语
ko-KR: 韩语
vi-VN: 越南语
ar-GLA: 阿拉伯语，ar-MA: 阿拉伯语(摩洛哥)，ar-SA: 阿拉伯语(沙特)，ar-EG: 阿拉伯语(埃及)，ar-KW: 阿拉伯语(科威特)，ar-LY: 阿拉伯语(利比亚)，ar-JO: 阿拉伯语(约旦)，ar-AE: 阿拉伯语(阿联酋)，ar-LVT: 阿拉伯语(黎凡特)
```

### cohere-transcribe 模型

| 模型名称                                | 类型  | 支持语种 | 标点  | 时间戳 | 下载地址                                                                                    |
| ----------------------------------- | --- | ---- | --- | --- | --------------------------------------------------------------------------------------- |
| cohere-transcribe-03-2026-int8-onnx | 非流式 | 14语种 | 可开关 | 否   | [modelscope](https://modelscope.cn/models/manyeyes/cohere-transcribe-03-2026-int8-onnx) |
