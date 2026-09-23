# cohere-transcribe：2B参数高性能多语种语音识别模型

## 一、项目背景与研发团队

cohere-transcribe（`cohere-transcribe-03-2026`）是 **Cohere 与 Cohere Labs** 于 **2026年3月26日** 发布的专用端到端语音识别（ASR）模型，采用 **Apache 2.0 开源协议**，允许商用、修改与二次分发。该模型为纯语音转文字任务从零训练，发布后登顶HuggingFace Open ASR榜单，在会议、播客、长录音等真实口语场景取得领先的识别精度，同时具备优异的推理吞吐性能，面向生产级离线语音转录场景设计。

Cohere Labs团队长期深耕大语言模型与语音技术，本次发布的cohere-transcribe是Cohere首款开源语音模型，定位为**专用ASR模型**，并非基于已有大模型微调，训练目标聚焦降低词错误率（WER），同时兼顾工程部署效率。

## 二、模型整体概述与语言能力

模型总参数量为**20亿（2B）**，原生支持**14种语言**，覆盖欧洲、亚太、中东三大区域语种：

- 欧洲：英语、法语、德语、意大利语、西班牙语、葡萄牙语、希腊语、荷兰语、波兰语
- 亚太：中文（普通话）、日语、韩语、越南语
- 中东：阿拉伯语

> 完整支持语言及区域编码对照：

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

**官方明确的能力边界（重要）**

- 标点：模型输出文本自带标点，可通过推理参数控制标点开关；
- 时间戳与说话人分离：**原生模型不输出词/句时间戳、不支持说话人分 diarization**，如需该能力，需要上层应用额外开发；
- 语种检测：**无内置自动语种识别**，推理前必须手动指定目标语种，混合语码切换音频识别效果不稳定；
- 音频限制：单文件上传上限25MB；内置长音频分块机制，可处理小时级长音频转录；
- 部署版本：官方提供PyTorch权重；社区第三方导出INT8量化ONNX版本，适配CPU边缘设备与GPU离线推理（非官方）。

**适用场景**：播客转录、会议纪要、长录音归档、多语种课程字幕、访谈录音转写。

## 三、核心架构与核心能力

### 3.1 Conformer 编码器 + 轻量Transformer解码器架构

cohere-transcribe采用**编码器-解码器（Encoder-Decoder）**&#x7AEF;到端ASR架构：

1. **Conformer编码器**：承担模型绝大部分参数，从原始波形提取鲁棒声学特征，融合CNN与Transformer优势，适配不同语速、口音与环境声学变化；
2. **轻量Transformer解码器**：自回归生成文本token，精简设计降低解码算力开销；
3. 训练目标：标准监督交叉熵损失，**从零训练**，直接实现语音波形到文本的映射。

音频预处理逻辑：原始音频自动重采样至16kHz；多通道立体声自动均值合并为单声道，转换为log-Mel频谱作为模型输入。内置长音频分块逻辑，音频超过单段最大长度时自动切分片段，推理结束后拼接完整文本，原生支持小时级长音频转录。

### 3.2 核心能力矩阵

| 能力维度      | 具体说明                                                      |
| :-------- | :-------------------------------------------------------- |
| **多语种识别** | 14国语言，覆盖欧、亚、中东主流语种                                        |
| **标点恢复**  | 默认输出标点，支持参数关闭标点输出                                         |
| **长音频转录** | 自动分块+文本重组，支持小时级录音                                         |
| **推理效率**  | 同参数量模型中，实时因子最高可达同类模型3倍                                    |
| **限制项**   | 无自动语种检测、无原生时间戳、无说话人分离；静音/背景噪声容易产生幻觉文本，工程部署强烈推荐前置VAD语音活动检测 |

## 四、训练数据与训练策略

### 4.1 训练数据规模

模型从零开始训练，训练集包含**50万小时高质量精选音频-文本配对数据**，经过严格清洗筛选，优先保证数据质量；叠加噪声、语速扰动、口音增强等合成数据，提升真实环境鲁棒性。

> 注意：官方没有披露更多细分数据构成、伪标注与TTS合成数据细节，不额外添加未在模型卡说明的数据描述。

### 4.2 训练策略

采用**单阶段监督训练方案**，标准交叉熵损失做token预测，专注优化转录准确率；模型设计兼顾推理性能，在保持高识别精度前提下降低自回归解码的计算开销，实现高吞吐离线转录。

## 五、核心性能数据

### 5.1 HuggingFace Open ASR 榜单基准（2026.03.26）

模型在英文综合评测集取得**平均WER 5.42%**，登顶HuggingFace Open ASR榜单，超越Whisper Large v3、ElevenLabs Scribe v2、Qwen3-ASR-1.7B等主流专用ASR模型。

| 模型                | 平均WER | AMI会议集 | Earnings22财报长音频 | Gigaspeech播客 |
| :---------------- | :---: | :----: | :-------------: | :----------: |
| Cohere Transcribe |  5.42 |  8.15  |      10.84      |     9.33     |
| Whisper Large v3  |  7.44 |  15.95 |      11.29      |     10.02    |

> AMI：多人会议录音；Earnings22：长时长财报电话会议，代表长音频场景；Gigaspeech：播客类真实口语音频。
> 说明：5.42%为**英文综合榜单WER**；其他语种（中文、日语、阿拉伯语等）官方仅说明具备优秀表现，未统一发布完整公开横向评测表，不编造其它语种WER数值。

### 5.2 横向模型对比小结

✅ 优势

1. 同参数规模下**推理吞吐高**，会议、长音频、播客真实口语场景英文精度领先；
2. 覆盖14种商业常用语种，Apache2.0协议无商用限制；
3. 原生内置长音频自动分块，适合长录音离线归档。

⚠️ 短板

1. 缺少语种自动检测，必须手动指定语言；
2. 模型本身**不输出词/句时间戳、不支持说话人分离**，字幕/发言人归属能力需要上层组件实现；
3. 静音、背景噪声容易产生文本幻觉，依赖VAD预处理；
4. 混合语言识别效果不佳，单语种输入效果最优。

## 六、推理部署

### 6.1 官方原生部署（PyTorch）

原生依托HuggingFace `transformers`库，支持单机GPU离线推理，支持vLLM高性能服务化部署；官方原生支持MLX、Rust、WebGPU生态，可运行于Apple Silicon、浏览器WebGPU环境。

> 提示：HuggingFace权重为 gated 模型，需要登录并同意协议后方可下载。

```python
from transformers import AutoProcessor, CohereAsrForConditionalGeneration
from transformers.audio_utils import load_audio

processor = AutoProcessor.from_pretrained("CohereLabs/cohere-transcribe-03-2026")
model = CohereAsrForConditionalGeneration.from_pretrained(
    "CohereLabs/cohere-transcribe-03-2026", 
    device_map="auto"
)

audio = load_audio("audio.wav", sampling_rate=16000)
inputs = processor(audio, sampling_rate=16000, return_tensors="pt", language="en")
inputs.to(model.device, dtype=model.dtype)

outputs = model.generate(**inputs, max_new_tokens=256)
text = processor.decode(outputs, skip_special_tokens=True)
print(text)
```

### 6.2 社区部署方案：ONNX量化版本（ManySpeech-CLI）

社区基于官方权重导出INT8量化ONNX模型：`cohere-transcribe-03-2026-int8-onnx`，托管于ModelScope manyeyes模型空间。

- 量化优势：大幅降低显存占用，适配CPU设备；
- 推理模式：非流式推理，结合VAD分块实现准实时处理；
- CLI快速调用示例：

```cmd
manyspeech asr -t offline -m chunk --format txt --threads 4 -i file -files "meeting.wav" --model cohere-transcribe-03-2026-int8-onnx --language zh
```

> 模型文件清单：encoder.int8.onnx、decoder.int8.onnx、asr.yaml、conf.json、tokens.txt
> 重要声明：ONNX量化模型属于**社区第三方导出产物，非Cohere官方发布**。

## 七、开源获取渠道

| 资源类型                   | 链接                                                                                                                                                     |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 官方原始模型仓库(HF镜像)         | [https://huggingface.co/CohereLabs/cohere-transcribe-03-2026](https://hf-mirror.com/CohereLabs/cohere-transcribe-03-2026)                              |
| 社区ONNX量化模型（ModelScope） | [https://modelscope.cn/models/manyeyes/cohere-transcribe-03-2026-int8-onnx](https://modelscope.cn/models/manyeyes/cohere-transcribe-03-2026-int8-onnx) |
| Cohere官方技术博客           | [https://cohere.com/blog/transcribe](https://cohere.com/blog/transcribe)                                                                               |
| HuggingFace在线演示        | [https://huggingface.co/spaces/CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/spaces/CohereLabs/cohere-transcribe-03-2026)               |

## 八、版权

cohere-transcribe 由 Cohere Labs 团队开源发布，采用 **Apache 2.0许可证**，学术研究、商业产品均可免费使用、修改与二次分发。引用Bibtex：

```bibtex
@misc{cohere2026transcribe,
    author       = {Julian Mack and Ekagra Ranjan and Walter Beller-Morales and Bharat Venkitesh and Pierre Richemond},
    title        = {cohere-transcribe-03-2026},
    year         = {2026},
    url          = {[https://hf-mirror.com/CohereLabs/cohere-transcribe-03-2026](https://hf-mirror.com/CohereLabs/cohere-transcribe-03-2026)},
    doi          = {10.57967/hf/8653},
    publisher    = {Hugging Face}
}
```

> **说明**：官方原版为PyTorch权重；社区ONNX量化版本为第三方导出，适合低算力设备离线部署。模型本身仅负责语音转文字，时间戳、说话人分离、自动语种检测等能力需要上层应用额外开发。
