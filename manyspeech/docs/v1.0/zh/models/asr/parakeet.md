# Parakeet 系列

> **说明**  
> - 模型架构：基于 NVIDIA **FastConformer-TDT-CTC**（Hybrid 架构）  
> - 系列组成：  
>   - `tdt-0.6b`：标准 TDT 模型，0.6B 参数，支持标点、大写、时间戳  
>   - `tdt_ctc`：结合 CTC 的 TDT 模型（110M / 0.6B 参数），其中 110M 英文和 0.6B 日文模型支持标点  
> - 版本标识：  
>   - `v2`：英文模型，支持标点、大写、时间戳  
>   - `v3` / `multilingual`：多语言模型，支持 25 种欧洲语言，自动语言检测，支持标点、大写、时间戳  
> - 许可协议：v2 和 v3 模型使用 **CC-BY-4.0** 许可证；CTC 系列多使用 Apache License 2.0（以各模型页面为准）  
> - 适用场景：高吞吐量语音转录、多语言会话 AI、字幕生成、语音分析等

### 1. Parakeet-TDT 英文模型（v2）

> **详细特性**  
> - **支持语言**：英文  
> - **标点与大写**：输出自带标点符号和正确大小写  
> - **时间戳**：支持准确的词级、字符级和片段级时间戳预测  
> - **长音频**：使用全注意力机制，可单次处理最长 24 分钟的音频片段  
> - **架构**：FastConformer 编码器 + TDT 解码器，600M 参数  
> - **输入**：16kHz 单声道 .wav 或 .flac  
> - **输出**：带标点和大写的文本字符串  
> - **性能**：在 Hugging Face ASR 排行榜上 RTFx 达 3380  
> - **发布信息**：发布日期 2025-05-01；
> - **许可**：CC-BY-4.0，允许商业和非商业使用  

| 模型名称 | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| parakeet-tdt-0.6b-v2-en-onnx | 非流式 | 英文 | 是 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt-0.6b-v2-en-onnx) |
| parakeet-tdt-0.6b-v2-en-int8-onnx | 非流式 | 英文 | 是 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt-0.6b-v2-en-int8-onnx) |

### 2. Parakeet-TDT 多语言模型（v3）

> **详细特性**  
> - **支持语言**（共 25 种欧洲语言）：保加利亚语（bg）、克罗地亚语（hr）、捷克语（cs）、丹麦语（da）、荷兰语（nl）、英语（en）、爱沙尼亚语（et）、芬兰语（fi）、法语（fr）、德语（de）、希腊语（el）、匈牙利语（hu）、意大利语（it）、拉脱维亚语（lv）、立陶宛语（lt）、马耳他语（mt）、波兰语（pl）、葡萄牙语（pt）、罗马尼亚语（ro）、斯洛伐克语（sk）、斯洛文尼亚语（sl）、西班牙语（es）、瑞典语（sv）、俄语（ru）、乌克兰语（uk）  
> - **自动语言检测**：无需额外提示，模型自动识别音频语言  
> - **标点与大写**：输出自带标点符号和正确大小写  
> - **时间戳**：支持准确的词级和片段级时间戳  
> - **长音频**：在 A100 80GB 上使用全注意力可处理最长 24 分钟音频；使用局部注意力可处理最长 3 小时音频  
> - **架构**：FastConformer 编码器 + TDT 解码器，600M 参数，基于 Granary 数据集（670,000+ 小时音频）训练  
> - **输入**：16kHz 单声道 .wav 或 .flac  
> - **输出**：带标点和大写的文本字符串  
> - **发布信息**：Hugging Face 发布日期 2025-08-14；
> - **许可**：CC-BY-4.0，允许商业和非商业使用  

| 模型名称 | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| parakeet-tdt-0.6b-v3-multilingual-onnx | 非流式 | 25种欧洲语言（见上方列表） | 是 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt-0.6b-v3-multilingual-onnx) |
| parakeet-tdt-0.6b-v3-multilingual-int8-onnx | 非流式 | 25种欧洲语言（见上方列表） | 是 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt-0.6b-v3-multilingual-int8-onnx) |

### 3. Parakeet-TDT-CTC 英文模型（110M）

> **详细特性**  
> - **模型开发**：由 NVIDIA NeMo 与 Suno.ai 团队联合开发  
> - **架构**：Hybrid FastConformer-TDT-CTC，约 **114M 参数**  
> - **支持语言**：英文  
> - **标点与大写**：✅ 支持 Punctuations and Capitalizations（PnC）  
> - **时间戳**：默认使用 TDT 解码器可输出时间戳；切换至 CTC 解码器则仅输出文本（无时间戳）  
> - **长音频**：使用全注意力，可单次处理最长 **20 分钟**音频  
> - **性能**：在 Hugging Face ASR 评测集上平均 RTFx ~5300（A100）  
> - **输入**：16kHz 单声道 .wav 或 .flac  
> - **输出**：带标点和大写的文本字符串  
> - **许可**：Apache License 2.0  

| 模型名称 | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| parakeet-tdt_ctc-110m-en-onnx | 非流式 | 英文 | 是 | 是（TDT解码器） | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt_ctc-110m-en-onnx) |
| parakeet-tdt_ctc-110m-en-int8-onnx | 非流式 | 英文 | 是 | 是（TDT解码器） | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt_ctc-110m-en-int8-onnx) |

> **注意**：ONNX 导出版本可能默认使用 TDT 解码器，因此支持时间戳；具体以实际推理输出为准。若需切换为 CTC 解码器，请参考 NeMo 原生模型的使用说明。

### 4. Parakeet-TDT-CTC 日文模型（0.6B）

> **详细特性**  
> - **模型开发**：由 NVIDIA NeMo 团队开发  
> - **架构**：Hybrid FastConformer-TDT-CTC，**约 0.6B（600M）参数**  
>   - FastConformer：使用 8 倍深度可分离卷积下采样，优化推理速度  
>   - TDT（Token-and-Duration Transducer）：通过联合预测 token 和 duration，可跳过大部分 blank 预测（该模型 duration 最大 4 帧），显著提升推理速度  
> - **支持语言**：日语（Japanese）  
> - **标点**：✅ 支持标点符号（Punctuations）  
> - **时间戳**：❌ 未明确支持（默认 TDT 解码器可能输出时间戳，但官方描述仅提及输出文本字符串，暂标记为不支持）  
> - **长音频**：未明确说明处理时长  
> - **输入**：16kHz 单声道 .wav 或 .flac  
> - **输出**：带标点的文本字符串  
> - **使用方式**：可通过 NeMo 工具包加载或使用 `transcribe_speech.py` 脚本；默认使用 TDT 解码器，可通过 `decoding_type='ctc'` 切换  
> - **许可**：Apache License 2.0  

| 模型名称 | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| parakeet-tdt_ctc-0.6b-ja-onnx | 非流式 | 日语 | **是** | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt_ctc-0.6b-ja-onnx) |
| parakeet-tdt_ctc-0.6b-ja-int8-onnx | 非流式 | 日语 | **是** | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt_ctc-0.6b-ja-int8-onnx) |

---

> **补充说明**  
> - 标点和时间戳支持情况汇总：  
>   - ✅ **v2 英文模型**：支持标点、大写、时间戳  
>   - ✅ **v3 多语言模型**：支持标点、大写、时间戳  
>   - ✅ **CTC 110M 英文模型**：支持标点、大写；时间戳通过 TDT 解码器支持  
>   - ✅ **CTC 0.6B 日文模型**：支持标点；时间戳暂未确认  
> - 所有 ONNX 模型均适合边缘端和云端部署，int8 版本体积更小、推理更快  
> - 许可协议以各模型页面标注为准，v2/v3 推荐使用 CC-BY-4.0，CTC 模型多采用 Apache 2.0  
> - 日文模型的 TDT duration 为 4 帧，可带来显著推理加速，具体性能指标参考 NVIDIA 官方文档