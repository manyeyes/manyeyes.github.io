# Fun-ASR 系列

> **说明**
>
> - 模型背景：由通义实验室推出的**端到端语音识别大模型**，基于数千万小时真实语音数据训练，具备强上下文理解与行业适配能力
> - 功能特性：全系**非流式、支持标点、支持时间戳**，支持低延迟实时转写，远场高噪声场景识别准确率可达93%
> - 版本标识释义：
>   - `int8`：INT8 量化版本，体积更小、推理速度更快、适合端侧部署
>   - `LLM`：大模型增强版，上下文理解更强，抑制识别幻觉
>   - `CTC`：经典 CTC 架构轻量版，推理轻量化
>   - `MLT`：多语言通用版，覆盖31种语言
>   - `split-adaptor`：特征适配模块分离部署版本
> - 语种与能力说明：
>   - **Fun-ASR-Nano**：支持中文、英文、日语；7种方言（吴语、粤语、闽语、客家话、赣语、湘语、晋语）；26种地方口音（河南、山西、湖北、四川、重庆、云南、贵州、广东、广西、陕西、河北、山东、安徽、天津、宁夏、辽宁、甘肃、湖南、黑龙江、吉林、内蒙古、江苏、浙江、福建、江西、海南）；额外支持歌词识别、说唱语音识别
>   - **Fun-ASR-MLT-Nano**：共支持31种语言：中文、英文、粤语、日语、韩语、越南语、印尼语、泰语、马来语、菲律宾语、阿拉伯语、印地语、保加利亚语、克罗地亚语、捷克语、丹麦语、荷兰语、爱沙尼亚语、芬兰语、希腊语、匈牙利语、爱尔兰语、拉脱维亚语、立陶宛语、马耳他语、波兰语、葡萄牙语、罗马尼亚语、斯洛伐克语、斯洛文尼亚语、瑞典语
> - 行业优势：在教育、金融等垂直领域表现优异，可精准识别专业术语，有效抑制幻觉生成与语言混淆问题

### Fun-ASR-Nano 模型

| 模型名称                                          | 类型  | 支持语种                           | 标点 | 时间戳 | 下载地址                                                                                                  |
| --------------------------------------------- | --- | ------------------------------ | -- | --- | ----------------------------------------------------------------------------------------------------- |
| Fun-ASR-Nano-2512-LLM-onnx                    | 非流式 | 中、英、日语；含7种方言+26种地方口音 + 歌词/说唱识别 | 是  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-onnx)                    |
| Fun-ASR-Nano-2512-LLM-int8-onnx               | 非流式 | 同上                             | 是  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-int8-onnx)               |
| Fun-ASR-Nano-2512-LLM-split-adaptor-onnx      | 非流式 | 同上                             | 是  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-split-adaptor-onnx)      |
| Fun-ASR-Nano-2512-LLM-split-adaptor-int8-onnx | 非流式 | 同上                             | 是  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-split-adaptor-int8-onnx) |
| Fun-ASR-Nano-2512-CTC-onnx                    | 非流式 | 同上                             | 是  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-CTC-onnx)                    |
| Fun-ASR-Nano-2512-CTC-int8-onnx               | 非流式 | 同上                             | 是  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-CTC-int8-onnx)               |

### Fun-ASR-MLT-Nano 模型

| 模型名称                            | 类型  | 支持语种   | 标点 | 时间戳 | 下载地址                                                                                    |
| ------------------------------- | --- | ------ | -- | --- | --------------------------------------------------------------------------------------- |
| Fun-ASR-MLT-Nano-2512-onnx      | 非流式 | 31种多语言 | 是  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-MLT-Nano-2512-onnx)      |
| Fun-ASR-MLT-Nano-2512-int8-onnx | 非流式 | 31种多语言 | 是  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-MLT-Nano-2512-int8-onnx) |
