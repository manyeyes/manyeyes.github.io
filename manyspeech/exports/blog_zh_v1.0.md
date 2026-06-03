## v1.0/zh/blog/post-001.md

---
title: "X-ASR-zh-en：轻量高精度中英双语离线流式语音识别模型"
date: "2026-06-02"
tags: ["ASR", "语音识别", "中英双语", "开源模型", "轻量化部署"]
excerpt: "X-ASR-zh-en 是由上海交通大学联合复旦、华科等高校研发的超轻量中英双语语音识别模型。仅 0.16B 参数量，支持流式/离线双模式统一推理，原生适配中英混杂识别、自动标点与大小写规整。纯 CPU 部署，基于 Apache 2.0 开源，免费商用。"
sidebar: false
---

# X-ASR-zh-en：轻量高精度中英双语离线流式语音识别模型

## 一、项目背景与研发团队

### 1.1 行业研发背景

在本地离线语音交互、隐私化实时转写、中英双语混合识别的主流需求下，现有开源ASR模型普遍存在适配短板：大参数量模型部署成本高、无法轻量化落地，轻量模型则存在双语识别精度不足、流式与离线推理无法兼容、泛化能力薄弱等问题。针对这些核心痛点，多校科研团队联合研发**X-ASR-zh-en 中英双语离线流式统一ASR模型**，主打超轻量体积、高精度、低延迟、双模式统一适配，可兼顾学术研究与工业轻量化落地需求，为开发者提供低成本、零门槛的双语语音识别解决方案。

### 1.2 研发团队与开源声明

**研发单位**：由上海交通大学、上海创智学院牵头，联合复旦大学、华中科技大学多校科研力量协同迭代打造，是产学研融合的轻量化语音识别开源成果。

**开源协议**：模型基于 **Apache 2.0 开源协议** 正式发布，完全开放权重、源码与部署资源，支持**个人学习、学术研究、免费商业落地**，无额外授权门槛。

## 二、模型整体概述

X-ASR-zh-en 是一款基于 Icefall、K2 框架与 Zipformer Transducer 核心架构打造的轻量化中英双语统一语音识别模型。模型依托**100万小时**开源及采集双语语音数据训练，仅**0.16B 超小参数量**，核心突破为**单模型统一流式实时识别、离线高精度识别双模式推理**，无需切换权重与代码逻辑。

模型原生适配多粒度低延迟推理，提供 160ms / 480ms / 960ms / 1920ms 四种标准切片模式，完美适配不同延迟需求场景，同时原生支持中英混杂识别、自动标点补充与英文大小写规整。依托ONNX量化优化实现纯CPU低延迟推理，无需GPU算力、无需云端数据上传，兼顾极致轻量化部署与高精度识别能力，综合性能远超同级开源轻量ASR模型。

## 三、核心架构与核心能力

### 3.1 底层架构优势

模型采用业界先进的 Zipformer Transducer 高效时序建模架构，相较于传统CNN、RNN架构，具备更强的长时序上下文建模能力，可有效优化长句语音、复杂环境下的识别误差问题。搭配Icefall、K2框架完成精细化训练调度，大幅提升模型收敛稳定性与中英双语泛化能力，是模型能够以极小参数量实现高精度双模式推理的核心架构支撑。

### 3.2 核心功能亮点

- **双模式统一推理**：单模型一套权重，原生兼容实时流式解码、离线整段解码两种模式，全面适配各类语音识别业务场景

- **多粒度低延迟适配**：内置160ms、480ms、960ms、1920ms四档推理切片，灵活适配超低延迟直播、标准会议转写、长音频批量识别等差异化场景

- **原生中英双语能力**：统一双语建模训练，精准支持中英混杂语音识别，自动输出规范标点符号与英文大小写格式

- **零算力依赖部署**：0.16B超轻量参数，支持纯CPU推理，搭配ONNX量化优化，终端、服务器均可快速轻量化部署

- **标准化开源部署**：原生适配 [Sherpa-ONNX](https://github.com/k2-fsa/sherpa-onnx) 官方部署生态，配套完整ONNX推理文件、服务端脚本与测试工具，开箱即用、拓展性极强

## 四、核心性能数据（行业基准测试）

本次评测统一采用贪心搜索解码，以 WER（词错误率）、CER（字错误率）为核心评价指标，数值越低识别精度越高，所有测试结果均为客观可复现的标准基准数据。

### 4.1 通用基准数据集整体性能

|识别模式|切片尺寸|LibriSpeech-Clean|LibriSpeech-Other|GigaSpeech|WenetSpeech-Net|WenetSpeech-Meeting|
|---|---|---|---|---|---|---|
|流式识别|160ms|3.91|10.17|10.97|9.45|12.04|
|流式识别|480ms|3.14|7.57|9.77|7.38|9.31|
|流式识别|960ms|3.12|7.22|9.62|6.96|8.84|
|流式识别|1920ms|2.84|6.47|9.46|6.42|8.03|
|离线识别|-|**2.69**|**5.76**|**9.23**|**5.96**|**7.20**|

*注：加粗数值为当前测试最优精度，离线模式为全局最优结果*

### 4.2 主流开源模型横向对比

在统一基准测试条件下，X-ASR-zh-en 以仅 0.16B 的超小参数量，实现了远超同级轻量模型的识别精度，大幅缩小与大参数量模型的性能差距，在算力成本、部署门槛、识别精度三者间实现极致平衡，落地优势显著。综合误差值为五大通用数据集平均结果，数值越低性能越优。

|排名|模型名称|参数量|综合平均误差|核心特点|
|---|---|---|---|---|
|1|Qwen3-ASR|1.7B|4.882|大参数高精度，算力需求高、部署成本高|
|2|Qwen3-ASR|0.6B|5.702|精度与算力相对均衡|
|3|**X-ASR-zh-en（离线）**|**0.16B**|**6.036**|超轻量、双语统一、零GPU依赖、适配全场景|
|4|SenseVoice-small|0.234B|6.762|通用场景适配，体积更大、精度更低|
|5|VibeVoice-ASR|9B|9.792|超大参数、落地门槛极高|

### 4.3 垂直领域细分性能（中英双语）

模型基于GigaSpeechBench完成12大垂直细分场景专项评测，覆盖多领域专业语音识别场景，在专业词汇密集的细分场景中表现稳定，具备优秀的垂直场景适配能力，可满足细分场景的高精度识别需求。

#### 中文场景垂直领域误差率（CER）

|模式|切片|ARG|AIT|ART|BIO|ECM|ENG|ENT|FIN|HUM|LAW|MED|MIL|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|离线|-|**6.56**|**4.54**|**2.77**|**5.04**|**2.99**|**2.32**|**6.02**|**1.94**|**7.64**|**4.20**|**2.90**|**1.68**|

#### 英文场景垂直领域误差率（WER）

|模式|切片|ARG|AIT|ART|BIO|ECM|ENG|ENT|FIN|HUM|LAW|MED|MIL|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|离线|-|**4.09**|**8.28**|**6.73**|**5.48**|4.12|**4.30**|**12.30**|**4.94**|**6.17**|**10.41**|**5.35**|**5.61**|

## 五、推理部署

X-ASR-zh-en 官方推荐部署 runtime 为 [**Sherpa-ONNX**](https://github.com/k2-fsa/sherpa-onnx)，模型原生适配该开源部署生态，配套完整的ONNX推理文件、服务端脚本与测试工具，可满足专业开发者项目集成、批量推理、WebSocket流式服务等工程化开发场景。为适配不同用户使用需求，本文同时提供官方标准部署方案与轻量化快速体验方案，兼顾工程落地与快速测试需求。

### 5.1 官方标准部署：Sherpa-ONNX 工程部署

项目仓库内置完整的 Sherpa-ONNX 部署资源，包含多尺寸切片模型的ONNX编码、解码、连接权重文件及配套推理脚本，支持CPU轻量化流式服务部署，可快速搭建实时语音识别服务，适配项目二次开发与线上业务落地。

#### 环境部署步骤

下载完整项目资源后，进入部署目录，初始化虚拟环境并安装依赖：

```bash
cd deployment
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

#### 启动流式推理服务

以160ms低延迟模型为例，启动CPU流式识别服务，可自定义端口、线程与解码参数：

```bash
python infer_and_client/sherpa_streaming_server.py \
  --host 0.0.0.0 \
  --port 8766 \
  --tokens models/chunk-160ms-model/tokens.txt \
  --encoder models/chunk-160ms-model/encoder-160ms.onnx \
  --decoder models/chunk-160ms-model/decoder-160ms.onnx \
  --joiner models/chunk-160ms-model/joiner-160ms.onnx \
  --provider cpu \
  --sample-rate 16000 \
  --feature-dim 80 \
  --num-threads 1 \
  --decoding-method greedy_search \
  --model-type zipformer2 \
  --enable-endpoint-detection 0 \
  --text-format none
```

#### 音频文件测试推理

服务启动后，可通过客户端脚本加载本地WAV音频，模拟实时流式推理完成测试：

```bash
python infer_and_client/sherpa_streaming_client.py \
  --server-uri ws://127.0.0.1:8766 \
  --wav /path/to/test.wav \
  --chunk-ms 100 \
  --simulate-realtime 1
```

### 5.2 极简推理：ManySpeech-CLI 命令行（快速体验）

**[ManySpeech](https://github.com/manyeyes/ManySpeech)** 是开源语音AI模型推理项目，可作为通用 ONNX 语音模型推理 SDK，支持开发者二次开发与自定义功能拓展，适配各类轻量化语音识别模型落地。**ManySpeech-CLI** 是基于 ManySpeech 内核开发的轻量化命令行工具，剥离复杂开发配置，主打零门槛开箱即用，适合普通用户快速体验模型效果、开发者日常功能验证。

该工具完美兼容 X-ASR-zh-en 全系模型，支持麦克风实时收音、流式实时解码、中英混杂识别、自动标点与大小写规整，无需手动加载权重、无需复杂工程部署，是快速验证模型性能的最优轻量化方案。

#### 终端实时麦克风推理使用方法

完成 [ManySpeech-CLI 安装](https://manyeyes.github.io/manyspeech/cli/getting-started/installation.html) 后，终端输入以下命令，即可启动低延迟实时中英双语语音识别：

```bash
manyspeech asr -t online -md k2transducer-zipformer-x-asr-zh-en-480ms-onnx-online-20260601 -m chunk -i mic
```

#### 核心命令参数详解

- **-t online**：指定实时流式推理模式，适配麦克风实时语音输入，保障低延迟输出；

- **-md k2transducer-zipformer-x-asr-zh-en-480ms-onnx-online-20260601**：加载480ms均衡版模型，兼顾识别精度与推理延迟，适配绝大多数日常、办公场景；

- **-m chunk**：开启切片流式推理机制，匹配模型原生解码架构，保障识别流畅稳定；

- **-i mic**：指定麦克风为音频输入源，实现实时收音、即时转写效果。

命令运行后，终端持续监听麦克风输入，自动完成中英混杂语音识别、标点补充与英文大小写规整。普通用户可快速体验模型能力，开发者可基于 ManySpeech 开源内核二次开发，将模型推理能力快速集成至自研项目中。

## 六、在线Demo体验

项目官方提供基于 Sherpa-ONNX 部署的在线体验 Demo，无需本地部署、无需配置环境，可直接网页端实时体验 X-ASR-zh-en 双语流式识别效果，直观感受模型低延迟、高精度的识别能力。

**在线体验地址**：[https://stream-asr.sjtuxlance.com/](https://stream-asr.sjtuxlance.com/)

同时项目内置演示视频资源，可直观查看模型实时识别效果，方便用户快速了解模型整体性能与交互体验。

## 七、开源获取渠道

模型全量开源开放，多平台同步发布完整资源，包含项目源码、多尺寸ONNX模型权重、部署脚本、测试案例、双语文档等全部文件，适配不同网络环境用户下载使用：

- **[GitHub](https://github.com/Gilgamesh-J/X-ASR)**：提供完整项目源码、迭代日志、问题跟踪、开发文档与训练参考资源，适合深度开发与项目跟进

- **[Hugging Face Hub](https://huggingface.co/GilgameshWind/X-ASR-zh-en)**：模型权重一键下载，适配HF生态部署，提供模型卡片与版本管理

- **[ModelScope](https://www.modelscope.ai/Gilgamesh-J/X-ASR-zh-en)**：国内高速镜像站点，解决境外资源访问限制，适配国内开发者网络环境

- **[Hugging Face Space](https://huggingface.co/spaces/chenxie95/X-ASR)**：在线交互式体验空间，支持轻量化在线测试

## 八、致谢与版权

本模型基于 [Icefall](https://github.com/k2-fsa/icefall)、K2 与 [Sherpa-ONNX](https://github.com/k2-fsa/sherpa-onnx) 开源生态训练与部署，特此感谢相关开源社区的技术支持。模型基于 Apache 2.0 协议开源，开放免费商用、学术研究权限，欢迎社区迭代优化与二次开源。

---

## v1.0/zh/blog/post-002.md

---
title: "Fun-ASR-Nano-2512：千万小时真实语音训练的800M参数语音识别大模型"
date: "2026-06-04"
tags: ["ASR", "语音识别", "多语言", "开源模型", "通义实验室", "端到端模型"]
excerpt: "Fun-ASR-Nano-2512 是由通义实验室推出的端到端语音识别轻量大模型。仅 800M 参数量，基于数千万小时真实语音训练，支持中、英、日及7种方言、26种口音，原生适配远场高噪识别、音乐背景歌词识别与低延迟实时转录。纯 GPU/CPU 灵活部署，开源可商用，性能媲美更大规模模型。"
sidebar: false
---

# Fun-ASR-Nano-2512：千万小时真实语音训练的800M参数语音识别大模型

## 模型背景

Fun-ASR-Nano-2512 是由 **通义实验室（Tongyi Lab）** 于 **2025 年 12 月** 正式发布的端到端语音识别大模型。该模型是 Fun-ASR 系列的核心成员之一，基于数千万小时的真实语音数据训练而成，具备强大的上下文理解能力和行业适应性。它支持低延迟实时转录，并针对中文方言、口音以及音乐背景下的歌词识别等复杂场景进行了深度优化。

## 作者与团队

Fun-ASR-Nano-2512 由 **通义实验室（Tongyi Lab）** 的研究团队开发。相关技术细节在论文 **《Fun-ASR Technical Report》**（arXiv:2509.12508，2025）中进行了系统阐述，作者包括 Keyu An、Yanni Chen、Chong Deng、Changfeng Gao、Zhifu Gao、Bo Gong、Xiangang Li、Yabin Li、Xiang Lv、Yunjie Ji 等。

## 核心特性

| 特性类别 | 具体能力 |
| :--- | :--- |
| **参数规模** | **8 亿（800M）**，轻量高效 |
| **支持语言** | 中文、英语、日语（中文覆盖 7 大方言 + 26 种区域口音） |
| **远场高噪识别** | 远距离拾音、高噪声场景（会议室、车载、工业现场）准确率提升至 **93%** |
| **方言与口音** | 吴语、粤语、闽语、客家话、赣语、湘语、晋语等 7 大方言；河南、陕西、湖北、四川、重庆、云南、贵州、广东、广西等 26 种区域口音 |
| **多语言混合** | 支持中、英、日及各自口音的自由切换与混合识别 |
| **音乐背景歌词识别** | 在音乐干扰下准确识别歌词内容 |
| **实时转录** | 支持低延迟实时语音转录 |
| **行业定制** | 适配教育、金融等垂直领域，准确识别专业术语，有效减少“幻觉”生成和语种混淆 |

## 性能评估

在多个开源基准和行业测试集上，Fun-ASR-Nano-2512 展现了领先的性能。例如：

- **AIShell1**：字错误率（WER）1.80%
- **Fleurs-zh**：WER 2.56%
- **Librispeech-clean**：WER 1.76%
- **中文方言测试集**：WER 28.18%，显著优于 Whisper-large-v3（66.14%）和 GLM-ASR-Nano（54.21%）
- **远场测试集**：WER 5.79%，优于 Paraformer v2（9.55%）和 Kimi-Audio（10.95%）

> 详细对比数据可参见原始 README 中的性能表格。

## 模型系列与变体

| 模型名称 | 参数 | 支持语言 |
| :--- | :--- | :--- |
| **Fun-ASR-Nano-2512** | 800M | 中文（含方言/口音）、英语、日语 |
| **Fun-ASR-MLT-Nano-2512** | 800M | 31 种语言（含中、英、粤、日、韩、越南、印尼、泰、马来、菲律宾、阿拉伯、印地及多数欧洲语言） |
| **Fun-ASR**（7.7B） | 7.7B | 未开源，性能最优（平均 WER 12.70%） |

## 使用方式

### 环境安装

```bash
git clone https://github.com/FunAudioLLM/Fun-ASR.git
cd Fun-ASR
pip install -r requirements.txt
```

### 推理示例（funasr 方式）

```python
from funasr import AutoModel

model = AutoModel(
    model="FunAudioLLM/Fun-ASR-Nano-2512",
    trust_remote_code=True,
    remote_code="./model.py",
    device="cuda:0"
)

res = model.generate(
    input=["path/to/audio.mp3"],
    language="中文",
    itn=True
)
print(res[0]["text"])
```

### 直接推理（自定义模型类）

```python
from model import FunASRNano

m, kwargs = FunASRNano.from_pretrained(model="FunAudioLLM/Fun-ASR-Nano-2512", device="cuda:0")
m.eval()
res = m.inference(data_in=["path/to/audio.mp3"], **kwargs)
print(res[0][0]["text"])
```

## 可用资源

- **模型仓库**：[ModelScope](https://www.modelscope.cn/models/FunAudioLLM/Fun-ASR-Nano-2512) | [Hugging Face](https://huggingface.co/FunAudioLLM/Fun-ASR-Nano-2512)
- **在线体验**：[ModelScope Space](https://modelscope.cn/studios/FunAudioLLM/Fun-ASR-Nano) | [Hugging Face Space](https://huggingface.co/spaces/FunAudioLLM/Fun-ASR-Nano)
- **项目主页**：[FunAudioLLM/funasr](https://funaudiollm.github.io/funasr)
- **论文**：[arXiv:2509.12508](https://arxiv.org/abs/2509.12508)

## 总结

Fun-ASR-Nano-2512 以仅 **800M 参数** 的轻量体量，实现了对中文方言、口音、多语言混合、远场噪声及音乐背景等复杂场景的高精度识别。其开源、低延迟、可定制的特性，使其成为教育、金融、车载、会议等行业的理想语音识别基座模型。未来版本还将支持时间戳、说话人日志和模型训练等功能。

---

## v1.0/zh/blog/index.mdx

---
title: 所有博客
pageType: custom
---
import BlogList from '../../../../components/BlogList';

<BlogList />


---

