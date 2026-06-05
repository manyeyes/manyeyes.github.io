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

## 一、项目背景与研发团队

Fun-ASR-Nano-2512 系列是由 **通义实验室（Tongyi Lab）** 于 **2025 年 12 月 15 日** 正式发布的端到端语音识别轻量大模型。该系列是 Fun-ASR 家族中专为低算力部署打造的轻量化版本，在不牺牲识别精度的前提下，以 800M 参数量实现对语音场景的全面覆盖。

通义实验室的 Fun 团队此前已在 ASR 领域积累了深厚的技术基础——先后开源了工业级 ASR 模型 **Paraformer**、轻量语音识别模型 **SenseVoiceSmall** 等多款产品，此次发布的 Fun-ASR-Nano 则代表了该团队在“轻量化 + 多语言 + 工业级鲁棒性”这一技术方向上的最新探索。

核心研究论文《Fun-ASR Technical Report》已上传至 arXiv（2509.12508），于 2025 年 9 月首次提交，此后历经四次修订（v4 版本于同年 12 月 19 日发布），详细阐述了数据缩放、模型规模扩展、LLM 深度集成与强化学习等多重技术路径。论文作者多达 38 位，涵盖语音识别、大语言模型、强化学习等多个研究领域。

## 二、模型整体概述与语言能力

该系列包含两个核心版本，参数量均为 **8 亿（800M）**：

| 模型名称 | 参数量 | 支持语言范围 | 核心特色 |
| :--- | :--- | :--- | :--- |
| **Fun-ASR-Nano-2512** | 800M | 中文（7 大方言 + 26 种口音）、英语、日语 | 深度优化中文方言、口音、音乐背景歌词识别、说唱语音识别 |
| **Fun-ASR-MLT-Nano-2512** | 800M | 31 种语言 | 多语言自由切换与混合识别 |

全系列支持低延迟实时转录、标点符号恢复、时间戳输出。**官方提供 PyTorch 原版模型**，社区基于官方模型额外导出了 ONNX 格式的优化变体（详见“社区部署方案”章节），适配云端 GPU 与边缘 CPU 部署。

### 2.1 Fun-ASR-Nano-2512 专精版：中文方言、口音、英语与日语的多维优化
#### 2.1.1 七大方言语系

Fun-ASR-Nano-2512 所支持的七大方言在地域分布和语音特征上各有显著差异：

| 方言类别 | 地域分布 | 典型音系特征 |
| :--- | :--- | :--- |
| **吴语** | 上海、浙江、江苏南部、安徽东南等 | 保留全浊声母和入声韵尾，声调复杂 |
| **粤语** | 广东、广西部分地区及海外华人社区 | 保留 -p、-t、-k 入声韵尾，声调多达 9 个 |
| **闽语** | 福建、台湾、海南以及潮汕、雷州半岛 | 保留轻唇归重唇等古音特征，文白异读丰富 |
| **客家话** | 广东、福建、江西、台湾的客家聚居区 | 保留完整的入声韵尾和丰富的古汉语词汇 |
| **赣语** | 江西中北部、湖南东部及湖北部分地区 | 古全浊声母逢塞音、塞擦音大部分读送气清音 |
| **湘语** | 湖南湘江流域及周边 | 保留古全浊声母系统，尖团音分化各异 |
| **晋语** | 山西大部分地区及陕西北部、内蒙古中西部 | 保留入声，存在复杂的连续变调现象 |

模型对这七大方言的识别**平均准确率超过 85%**，其中粤语、客家话等语种的识别准确率达 90% 以上。这得益于模型在训练中采用了**方言感知声学建模**技术——构建了包含平翘舌音分布、前后鼻音差异、入声韵尾保留程度等 **32 个维度的语音特征空间**。

#### 2.1.2 二十六种地方口音

除七大方言外，模型还针对 **26 种带有地方口音的普通话**进行了专项训练。这些口音主要分布于中原官话区（河南）、西南官话区（四川、重庆、云南、贵州、湖北）、西北官话区（陕西）、华南地区（广东、广西、福建、海南）以及华东华北地区（山东、江苏、浙江、河北等）。经过针对性训练，模型在口音场景下的**字错误率相对下降 56.2%**，有 **15 种口音的识别准确率超过 80%**。

#### 2.1.3 英语与日语识别

模型对英语和日语的支持不仅是“会听”，更强调“听得准”：
- **英语**：在标准学术基准 LibriSpeech-clean 测试中，词错误率低至 **1.76%**，并能处理印度英语、新加坡英语等非标准口音。
- **日语**：支持标准日语及多种地域口音，针对日语特有的音拍、助词连读等现象进行了优化。

模型采用 **中-英-日三语联合对齐训练** 的统一架构，建立了跨语言的共享声学表征空间，对中英混杂、日英混杂等真实混合场景具有天然适配优势。

### 2.2 Fun-ASR-MLT-Nano-2512 多语言多维优化
#### 2.2.1 三十一种多语言支持

Fun-ASR-MLT-Nano-2512 支持 31 种语言的语音识别，重点优化了东亚与东南亚语种，支持语种自由切换和混合识别。模型内置自动语言检测机制，能够自动识别音频中的语言类型，无需手动指定。完整语言列表如下（按语言代码排序）：

| 语言名称 | 语言代码 | 应用场景 |
| :--- | :---: | :--- |
| 中文普通话 | zh | 日常对话、会议记录、视频字幕 |
| 英语 | en | 国际交流、英文课程、商务会议 |
| 粤语 | yue | 广东地区方言、粤语歌曲识别 |
| 日语 | ja | 日语学习、动漫字幕、日企会议 |
| 韩语 | ko | 韩剧字幕、韩语学习、商务交流 |
| 西班牙语 | es | 西语国家交流、学习资料转录 |
| 法语 | fr | 法语课程、国际会议、商务沟通 |
| 德语 | de | 德语学习、技术文档、商务场景 |
| 意大利语 | it | 意语学习、文化艺术内容识别 |
| 俄语 | ru | 俄语交流、技术文档、新闻转录 |
| 葡萄牙语 | pt | 葡语国家交流、商务场景 |
| 阿拉伯语 | ar | 中东地区交流、新闻转录 |
| 荷兰语 | nl | 荷兰语学习、商务场景 |
| 土耳其语 | tr | 土耳其语交流、商务场景 |
| 波兰语 | pl | 波兰语学习、商务场景 |
| 瑞典语 | sv | 瑞典语学习、商务场景 |
| 印尼语 | id | 印尼语交流、东南亚业务 |
| 菲律宾语 | fil | 菲律宾语交流、东南亚业务 |
| 马来语 | ms | 马来语交流、东南亚业务 |
| 越南语 | vi | 越南语交流、东南亚业务 |
| 泰语 | th | 泰语交流、东南亚业务 |
| 印地语 | hi | 印地语交流、南亚业务 |
| 乌尔都语 | ur | 乌尔都语交流、南亚业务 |
| 波斯语 | fa | 波斯语交流、中东业务 |
| 孟加拉语 | bn | 孟加拉语交流、南亚业务 |
| 希腊语 | el | 希腊语学习、商务场景 |
| 捷克语 | cs | 捷克语学习、商务场景 |
| 芬兰语 | fi | 芬兰语学习、商务场景 |
| 匈牙利语 | hu | 匈牙利语学习、商务场景 |
| 罗马尼亚语 | ro | 罗马尼亚语学习、商务场景 |
| 丹麦语 | da | 丹麦语学习、商务场景 |

> **语言代码说明**：采用 ISO 639-1 标准的两字母代码，中文普通话为“zh”，粤语为“yue”（模型特定标识），不区分大小写。

**自动语言检测性能**：模型内置的多语言分类器在单一语言音频上的识别准确率超过 **95%**，主流语言（中英文）可达 **98%** 以上，混合语言主导语言识别准确率约 **90%**。

## 三、核心架构与核心能力

### 3.1 四组件端到端架构

Fun-ASR-Nano 采用端到端语音识别架构，包含四个核心组件：

1. **音频编码器**（200M 参数）：负责从原始音频中提取声学特征，建模语音序列的时序依赖关系；
2. **CTC 解码器**：作为并行解码分支，输出初步的语音转写结果，在实时性和准确率之间取得平衡；
3. **Adaptor 模块**：将语音特征空间与文本特征空间进行对齐，弥合语音-语言两个模态之间的表征差距；
4. **LLM 解码器**（600M 参数）：基于 **Qwen3-0.6B** 语言模型实现，在 CTC 输出基础上结合上下文语义信息完成精细化文本生成。

这种“编码器轻量 + 解码器精悍”的设计，使得模型整体参数量被精准控制在 **0.8B**。

### 3.2 LLM 与 CTC 双分支设计

Fun-ASR-Nano 包含两种推理分支选项，分别对应不同的使用场景：

- **LLM 增强分支**：以 LLM 解码器为主输出，具备更强的上下文理解能力和幻觉抑制能力；
- **CTC 轻量分支**：以 CTC 解码器为主输出，推理速度更快，适合对延迟敏感、算力受限的部署环境。

### 3.3 架构创新

- **文本知识注入**：预训练音频编码器时，使用预训练文本大模型 Qwen3 的层来初始化编码器，将文本世界的语言学知识“注入”语音表征学习。
- **RAG 热词机制**：推理时动态引入领域关键词，最高可导入 **1000 个以上** 自定义热词，大幅提升特定领域的关键词识别效果。

### 3.4 核心能力矩阵

| 能力维度 | 具体说明 |
| :--- | :--- |
| **远场高噪识别** | 会议室、车载、工业现场准确率提升至 **93%** |
| **中文方言与地方口音** | 支持 7 大方言 + 26 种口音，详见 2.1 与 2.2 |
| **多语言自由切换** | 支持 31 种语言识别，自动检测语种，详见 2.4 |
| **音乐背景歌词识别** | 强化音乐背景干扰下的语音识别性能，支持歌词精准识别 |
| **标点恢复与 ITN** | 自动添加标点符号，实现口语数字/日期转书面格式 |
| **时间戳输出** | 支持词级/句级时间戳，便于字幕生成 |
| **热词增强** | 支持多达 **1000+** 自定义热词，提升专业术语识别准确率 |

## 四、训练数据与策略

### 4.1 数据规模

预训练阶段使用了 **数千万小时** 的音频数据，涵盖无标注真实音频与标注音频-文本对。监督微调阶段则整合了 **数百万小时** 的多源数据，包括人工转录、伪标注、环境噪声增强、TTS 合成、模拟流式以及热词定制等专项数据。

### 4.2 数据来源与领域覆盖

预训练阶段的真实音频覆盖 **AI、电商、教育、出行** 等垂直行业。有标注的音频-文本对主要针对 **中文与英文** 构建。微调阶段进一步扩展了覆盖范围，并针对 **噪声鲁棒性、语码切换、热词定制** 等工业场景合成了定制化数据。此外，基于上亿小时音频数据训练，全面覆盖 **互联网、科技、家装、保险、畜牧、汽车** 等十多个行业的专业术语。

### 4.3 数据预处理与标注策略

- **标注数据构建**：使用 Paraformer-V2、Whisper、SenseVoice 三套独立的 ASR 系统对原始音频进行并行伪标注，通过共识机制筛选出高置信度的结果。
- **数据过滤**：采用 VAD 滤除静音段和低质量语音片段。
- **上下文增强**：使用 Qwen3 从训练文本中自动提取关键词，构建上下文提示训练样本。
- **数据增强**：额外构造 **11 万小时干净语音 + 1 万小时噪声混合** 的增强噪声数据集；利用 CosyVoice3 TTS 合成带口音语音，并在干净语音中叠加机场、车站等 6 类环境噪声。

### 4.4 方言与口音数据专项

方言覆盖 **吴语、粤语、闽语、客家话、赣语、湘语、晋语** 七大方言；口音涵盖 **河南、陕西、湖北、四川、重庆、云南、贵州、广东、广西** 等 26 个地区。每一类方言和口音数据均经过专门采集与标注。

### 4.5 训练策略

**三阶段渐进式训练：**

1. **大规模预训练**：数千万小时数据，建立声学理解和语音-文本对齐能力。
2. **多阶段有监督微调（SFT）** ：数百万小时多源数据，针对工业场景精细化调优。
3. **强化学习微调（RLHF）** ：使用 **FunRL** 框架，针对约 10 万条困难样本进行优化，设计关键词召回率、幻觉惩罚、语言一致性等奖励函数，显著降低模型幻觉率。

**专项训练：**
- **抗噪训练**：在复杂噪音环境测试集上带来约 **13%** 的平均相对性能提升。
- **流式能力训练**：构建模拟流式解码过程的训练数据，减少训练-推理失配。

## 五、核心性能数据

### 5.1 开源基准测试

| 测试集 | 词错误率（WER %） | 说明 |
| :--- | :---: | :--- |
| AIShell-1 | 1.80 | 中文普通话学术基准 |
| Fleurs-zh | 2.56 | 多语言 Fleurs 基准的中文子集 |
| Librispeech-clean | 1.76 | 英文学术基准（清洁测试分集） |
| 中文方言测试集 | 28.18 | 通义自建方言评测集（粤语/吴语/闽南语等） |
| 远场测试集 | 5.79 | 模拟远场拾音条件下的室内语音识别 |

### 5.2 工业场景实测数据集

| 工业测试场景 | 覆盖内容 |
| :--- | :--- |
| 近场标准场景 | 高信噪比近距离录音 |
| 远场高噪场景 | 会议室远距离、车载噪音、工业现场 |
| 复杂背景 | 街道环境音、音乐背景干扰 |
| 英文识别 | 中英混杂、全英文演讲 |
| 方言识别 | 七大方言语种综合评估 |
| 地区口音 | 26 种地方口音独立评测 |
| 歌词识别 | 音乐背景下的歌词转写 |
| 说唱识别 | 快节奏、非标准韵律的语音转写 |

**行业数据集平均 WER：16.72%**（基于 2025 年 6 月 30 日之后采集的 YouTube/Bilibili 视频及真实场景录音，避免训练-测试集重叠污染）。

### 5.3 横向模型对比

**中文方言测试集：**

| 模型 | 参数量 | WER (%) |
| :--- | :---: | :---: |
| Fun-ASR-Nano-2512 | 0.8B | **28.18** |
| GLM-ASR-Nano | ~0.8B | 54.21 |
| Whisper-large-v3 | ~1.5B | 66.14 |

**远场高噪测试集：**

| 模型 | 参数量 | WER (%) |
| :--- | :---: | :---: |
| Fun-ASR-Nano-2512 | 0.8B | **5.79** |
| Paraformer-v2 | ~0.3B | 9.55 |
| Kimi-Audio | ~7B | 10.95 |

**工业数据集平均：**

| 模型 | 参数量 | 平均 WER (%) |
| :--- | :---: | :---: |
| Fun-ASR-Nano-2512 | 0.8B | **9.38** |
| Seed-ASR | ~12B | 8.71 |

### 5.4 方言与口音专项评测

- 方言场景下字错误率（CER）相对下降 **56.2%**（对比未经过方言专项优化的基线模型）。
- 5 种方言识别准确率突破 **90%**，15 种方言和口音准确率超过 **80%**。

## 六、推理部署

### 1. 官方推理（PyTorch 原版）

使用通义实验室官方发布的 PyTorch 模型，需配合 `funasr` 库和 `remote_code`。

```python
from funasr import AutoModel

model = AutoModel(
    model="FunAudioLLM/Fun-ASR-Nano-2512",  # 或 Fun-ASR-MLT-Nano-2512
    trust_remote_code=True,
    remote_code="./model.py",  # 从 GitHub 仓库获取
    device="cuda:0"            # 或 "cpu"
)

res = model.generate(
    input=["path/to/audio.mp3"],
    language="中文",            # MLT 版可设为 "auto"
    itn=True,
    hotwords=["自定义热词"],
    output_timestamp=True
)
print(res[0]["text"])
```

> **注意**：`remote_code` 需指向从 [Fun-ASR GitHub 仓库](https://github.com/FunAudioLLM/Fun-ASR) 下载的 `model.py`。官方模型支持完整的标点恢复、时间戳、ITN 和热词功能。

### 2. 社区部署方案：ManySpeech-CLI

ManySpeech-CLI 是一个社区工具，封装了**社区导出的 ONNX 模型**的下载、音频处理和输出格式化，无需编写代码即可快速体验。

#### 2.1 社区导出的 ONNX 模型说明

社区基于官方 PyTorch 模型，使用 ONNX 格式导出了优化变体，并发布在 [ModelScope manyeyes 空间](https://www.modelscope.cn/models/manyeyes)。这些 ONNX 模型**非官方提供**，但经过社区验证，支持 int8 量化，体积压缩约 70%，显存可降至 2.5GB。所有 ONNX 模型均非流式推理，但可通过 VAD 分块实现准实时体验。

**中英日专精版 ONNX 模型：**

| 模型名称 | 模型精度 | 解码器 |
| :--- | :---: | :--- |
| Fun-ASR-Nano-2512-LLM-onnx | fp32 | LLM |
| Fun-ASR-Nano-2512-LLM-int8-onnx | int8 | LLM |
| Fun-ASR-Nano-2512-LLM-split-adaptor-onnx | fp32 | LLM |
| Fun-ASR-Nano-2512-LLM-split-adaptor-int8-onnx | int8 | LLM |
| Fun-ASR-Nano-2512-CTC-onnx | fp32 | CTC |
| Fun-ASR-Nano-2512-CTC-int8-onnx | int8 | CTC |

**多语言通用版 ONNX 模型：**

| 模型名称 | 模型精度 | 解码器 |
| :--- | :---: | :--- |
| Fun-ASR-MLT-Nano-2512-onnx | fp32 | LLM |
| Fun-ASR-MLT-Nano-2512-int8-onnx | int8 | LLM |

#### 2.2 ManySpeech-CLI 安装与使用

**安装**：参考 [安装指南](https://manyeyes.github.io/manyspeech/cli/getting-started/installation.html)

**识别本地音频文件：**
```cmd
# 生成字幕 SRT 文件
manyspeech asr -t offline -m chunk --format srt --threads 2 -i file -files "lecture.wav" --model Fun-ASR-Nano-2512-LLM-int8-onnx

# 指定语言和热词
manyspeech asr -t offline -m chunk -i file -files "meeting.wav" --model Fun-ASR-Nano-2512-LLM-int8-onnx --language 中文 --hotwords "深度学习,通义实验室"

# 识别西班牙语（多语言版自动检测）
manyspeech asr -t offline -m chunk --format json -i file -files "audio.wav" --model Fun-ASR-MLT-Nano-2512-int8-onnx
```

**麦克风实时识别：**
```cmd
# 准实时模式（分块处理）
manyspeech asr -t offline -m chunk -i mic --model Fun-ASR-Nano-2512-CTC-int8-onnx
```

> **参数说明**：`-i file` 必须配合 `-files "音频路径"`；`-i mic` 无需文件参数。首次运行自动下载 ONNX 模型并缓存。如果使用绿色版，直接以 `asr` 子命令开始即可，无需 `manyspeech` 主命令前缀。

## 七、开源获取渠道

| 资源类型 | 链接 |
| :--- | :--- |
| 官方 PyTorch 模型（ModelScope） | https://www.modelscope.cn/models/FunAudioLLM/Fun-ASR-Nano-2512 |
| 官方 PyTorch 模型（Hugging Face） | https://huggingface.co/FunAudioLLM/Fun-ASR-Nano-2512 |
| 社区 ONNX 模型仓库（ManyEyes 空间） | https://www.modelscope.cn/models/manyeyes |
| ModelScope 在线体验 | https://modelscope.cn/studios/FunAudioLLM/Fun-ASR-Nano |
| Hugging Face Space 体验 | https://huggingface.co/spaces/FunAudioLLM/Fun-ASR-Nano |
| 项目主页 | https://funaudiollm.github.io/funasr |
| 论文链接 | https://arxiv.org/abs/2509.12508 |
| FunRL 强化学习代码 | https://github.com/FunAudioLLM/Fun-ASR |

## 八、致谢与版权

感谢通义实验室研究团队的开源贡献。Fun-ASR 系列基于 **Apache 2.0 许可证** 开源，可免费用于学术及商业用途。欢迎在论文中引用：

```bibtex
@article{an2025fun,
  title={Fun-ASR Technical Report},
  author={An, Keyu and Chen, Yanni and Deng, Chong and Gao, Changfeng and Gao, Zhifu and Gong, Bo and Li, Xiangang and Li, Yabin and Lv, Xiang and Ji, Yunjie and others},
  journal={arXiv preprint arXiv:2509.12508},
  year={2025}
}
```

> **说明**：官方推理使用原始 PyTorch 模型，需依赖 `funasr` 库和 `remote_code`；社区部署方案（ManySpeech-CLI）基于社区导出的 ONNX 模型，提供更轻量便捷的体验。两者均可实现高精度语音识别。

---

## v1.0/zh/blog/post-003.md

---
title: "FireRedASR2-AED：轻量高精度中英双语语音识别模型"
date: "2026-06-05"
tags: ["ASR", "语音识别", "中英双语", "开源模型", "FireRedTeam", "端到端模型", "方言识别"]
excerpt: "FireRedASR2-AED 是由小红书FireRedTeam推出的第二代工业级语音识别模型。仅1B+参数量，基于Conformer-Transformer架构，支持普通话、20余种方言/口音、英语及中英混输，原生支持字级时间戳与歌声识别。在AISHELL-1上CER仅0.57%，方言平均CER 11.67%，提供PyTorch官方模型及社区ONNX量化版本，支持CPU/GPU灵活部署，开源可商用。"
sidebar: false
---

# FireRedASR2-AED：轻量高精度中英双语语音识别模型

## 一、模型概述

FireRedASR2-AED是小红书FireRedTeam推出的第二代工业级语音识别模型，属于一体化系统FireRedASR2S的核心ASR模块。作为FireRedASR2系列的两个变体之一，AED版本采用**Attention-based Encoder-Decoder（AED）** 架构，参数量约1B+，是FireRedASR2-LLM（8B+参数）大模型的轻量级替代方案。

FireRedASR2在FireRedASR第一代基础上全面提升了识别精度，设计目标是满足不同场景对卓越性能和最优效率的双重需求。

## 二、核心架构设计

根据第一代FireRedASR-AED的技术文档（arXiv:2501.14350），FireRedASR2-AED的核心架构如下：

### 2.1 编码器-解码器结构

模型采用**Conformer编码器 + Transformer解码器**的经典组合：
- **Conformer编码器**：通过多头自注意力机制与卷积模块的有机结合，兼顾语音信号的全局依赖关系和局部声学特征的精细化建模
- **Transformer解码器**：通过交叉注意力机制实现高效的序列转换，支持自回归解码

### 2.2 子采样策略

编码器前端通过**两层卷积（步长2、卷积核大小3）** 对输入语音进行子采样，将时间分辨率从10ms降低至40ms，在保留关键声学信息的同时有效降低计算复杂度。

### 2.3 分词策略

采用**混合分词策略**：中文使用字符级分词，英文使用Byte Pair Encoding（BPE）分词，**总词表量7,832**，天然支持中英文混合输入的识别场景。

### 2.4 输入长度限制（官方说明）

- FireRedASR2-AED：支持最长**60秒**的音频输入。超过60秒可能引发幻觉问题，超过200秒将触发位置编码错误。
- FireRedASR2-LLM：支持最长**40秒**音频输入（更长输入未测试）。

## 三、训练数据与策略

根据第一代FireRedASR-AED的技术文档（arXiv:2501.14350），其训练数据如下：

- **普通话语料**：约**70,000小时**专业转录的高质量语音数据，以人工标注为主
- **英语数据**：约**11,000小时**补充训练数据，保障双语识别能力

训练采用渐进正则化策略，逐步引入Dropout和SpecAugment，确保收敛稳定性。

## 四、核心性能与对比优势

### 4.1 官方评估总览

FireRedASR2在**24个公开测试集**上进行了全面评估，涵盖普通话（4个）、方言/口音（19个）和歌唱（1个）。官方评测结果如下：

| 模型 | 全场景平均CER(%) | 普通话平均CER(%) | 方言平均CER(%) |
|------|----------------|----------------|----------------|
| **FireRedASR2-LLM** | **9.67** | **2.89** | **11.55** |
| **FireRedASR2-AED** | **9.80** | **3.05** | **11.67** |
| Doubao-ASR | 12.98 | 3.69 | 15.39 |
| Qwen3-ASR-1.7B | 10.12 | 3.76 | 11.85 |
| Fun-ASR | 10.92 | 4.16 | 12.76 |
| Fun-ASR-Nano-2512 | - | 4.55 | 15.07 |

### 4.2 普通话测试集（4个）详细结果

| ID | 测试集 | FireRedASR2-LLM | FireRedASR2-AED | Doubao-ASR | Qwen3-ASR | Fun-ASR |
|----|--------|----------------|----------------|------------|-----------|---------|
| 1 | aishell1 | 0.64 | **0.57** | 1.52 | 1.48 | 1.64 |
| 2 | aishell2 | 2.15 | 2.51 | 2.77 | 2.71 | 2.38 |
| 3 | ws-net | 4.44 | 4.57 | 5.73 | 4.97 | 6.85 |
| 4 | ws-meeting | 4.32 | 4.53 | 4.74 | 5.88 | 5.78 |

### 4.3 方言/口音测试集（19个）详细结果

> 注：ws = WenetSpeech，md = MagicData，conv = 对话，daily = 日常

| ID | 测试集（方言/口音） | FRASR2-LLM | FRASR2-AED | Doubao-ASR | Qwen3-ASR | Fun-ASR |
|----|-------------------|------------|------------|------------|-----------|---------|
| 5 | kespeech（8种方言综合） | 3.08 | 3.60 | 5.38 | 5.10 | 5.36 |
| 6 | ws-yue-short（粤语短） | 5.14 | 5.15 | 10.51 | 5.82 | 7.34 |
| 7 | ws-yue-long（粤语长） | 8.71 | 8.54 | 11.39 | 8.85 | 10.14 |
| 8 | ws-chuan-easy（四川话简单） | 10.90 | 10.60 | 11.33 | 11.99 | 12.46 |
| 9 | ws-chuan-hard（四川话困难） | 20.71 | 21.35 | 20.77 | 21.63 | 22.49 |
| 10 | md-heavy | 7.42 | 7.43 | 7.69 | 8.02 | 9.13 |
| 11 | md-yue-conv（粤语对话） | 12.23 | 11.66 | 26.25 | 9.76 | 33.71 |
| 12 | md-yue-daily（粤语日常） | 3.61 | 3.35 | 12.82 | 3.66 | 2.69 |
| 13 | md-yue-vehicle（粤语车载） | 4.50 | 4.83 | 8.66 | 4.28 | 6.00 |
| 14 | md-chuan-conv（四川话对话） | 13.18 | 13.07 | 11.77 | 14.35 | 14.01 |
| 15 | md-chuan-daily（四川话日常） | 4.90 | 5.17 | 3.90 | 4.93 | 3.98 |
| 16 | md-shanghai-conv（上海话对话） | 28.70 | 27.02 | 45.15 | 29.77 | 25.49 |
| 17 | md-shanghai-daily（上海话日常） | 24.94 | 24.18 | 44.06 | 23.93 | 12.55 |
| 18 | md-wu（吴语） | 7.15 | 7.14 | 7.70 | 7.57 | 10.63 |
| 19 | md-zhengzhou-conv（郑州话对话） | 10.20 | 10.65 | 9.83 | 9.55 | 10.85 |
| 20 | md-zhengzhou-daily（郑州话日常） | 5.80 | 6.26 | 5.77 | 5.88 | 6.29 |
| 21 | md-wuhan（武汉话） | 9.60 | 10.81 | 9.94 | 10.22 | 4.34 |
| 22 | md-tianjin（天津话） | 15.45 | 15.30 | 15.79 | 16.16 | 19.27 |
| 23 | md-changsha（长沙话） | 23.18 | 25.64 | 23.76 | 23.70 | 25.66 |

### 4.4 歌唱测试集（1个）

| ID | 测试集 | FRASR2-LLM | FRASR2-AED | Doubao-ASR | Qwen3-ASR | Fun-ASR |
|----|--------|------------|------------|------------|-----------|---------|
| 24 | opencpop（中文歌声） | **1.12** | **1.17** | 4.36 | 2.57 | 3.05 |

### 4.5 支持的方言/口音列表（官方完整清单）

FireRedASR2-AED支持**20+种中国方言/口音**，官方列出的具体包括：

> 粤语（香港与广东）、四川话、上海话、吴语、闽南语、安徽话、福建话、甘肃话、贵州话、河北话、河南话、湖北话、湖南话、江西话、辽宁话、宁夏话、陕西话、山西话、山东话、天津话、云南话等。

## 五、ONNX模型系列与推理部署(社区部署方案)

### 5.1 社区贡献的ONNX模型（manyeyes）

为满足C#生态及跨平台部署需求，社区开发者 **manyeyes** 将FireRedASR2-AED导出为ONNX格式。这些ONNX模型并非由FireRedTeam官方导出，而是由manyeyes社区贡献的第三方版本，已在ModelScope平台公开发布。所有模型均支持字级时间戳输出，且经过INT8量化优化，显著降低部署门槛。

**完整ONNX模型列表**（来源：https://modelscope.cn/profile/manyeyes?tab=model）：

| 模型名称 | 精度 | 大小 | 时间戳 | 特点 |
|---------|------|------|--------|------|
| fireredasr2-aed-large-zh-en-onnx-offline-20260212 | FP32 | 4.73GB | 支持 | 基础ONNX版本 |
| fireredasr2-aed-large-zh-en-int8-onnx-offline-20260212 | INT8 | 1.76GB | 支持 | INT8量化，体积减小约62% |
| fireredasr2-aed-large-zh-en-onnx-selfcrosskv-offline-20260212 | FP32 | 4.73GB | 支持 | KV缓存优化 |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212 | INT8 | 1.76GB | 支持 | INT8量化 + KV缓存优化 |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskvstack-offline-20260212 | INT8 | 1.76GB | 支持 | INT8量化 + KV缓存优化 + 参数合并 |


### 5.2 manyspeech-cli 一键命令行工具

manyspeech-cli是一款由manyeyes社区开发的免安装本地命令行语音识别工具，支持本地音频文件识别、麦克风实时流式识别、SRT字幕生成和JSON等多格式结果输出。manyspeech-cli已集成上述ONNX模型，用户可通过以下命令一键完成离线识别与字幕生成：

```bash
manyspeech asr -t offline --model fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212 -m chunk --format srt --threads 2 -i file -f "/path/to/0.wav"
```

实际运行效果（31秒音频，输出SRT字幕）：
```
0
00:00:00,490 -> 00:00:03,820
每当新年的钟声敲响的时候。

1
00:00:03,820 -> 00:00:06,850
我总会闭起眼睛，静静的许愿。

2
00:00:06,850 -> 00:00:10,980
有时也会给自己定下新年的奋斗目标。

3
00:00:10,990 -> 00:00:14,280
还有时听到新年的钟声时。

4
00:00:14,280 -> 00:00:17,130
我的心里会有一种遗憾的感觉。

5
00:00:17,200 -> 00:00:20,370
感慨时光过得如此匆匆。

6
00:00:20,370 -> 00:00:24,420
而自己往年的愿望还没达成。尽管如此。

7
00:00:24,570 -> 00:00:28,230
经过岁月的洗礼，我已长大成熟。

8
00:00:28,230 -> 00:00:31,120
学会了勇敢地面对现实的一切。
```

## 六、快速上手指南（官方部署方案）

> 以下内容基于FireRedASR2S官方代码库（GitHub: FireRedTeam/FireRedASR2S），使用官方PyTorch模型。

### 6.1 环境准备

```bash
# 创建Python环境（要求Python 3.10）
conda create --name fireredasr2s python=3.10
conda activate fireredasr2s

# 克隆官方仓库
git clone https://github.com/FireRedTeam/FireRedASR2S.git
cd FireRedASR2S

# 安装依赖
pip install -r requirements.txt

# 设置环境变量
export PATH=$PWD/fireredasr2s/:$PATH
export PYTHONPATH=$PWD/:$PYTHONPATH
```

### 6.2 模型下载（官方PyTorch模型）

**国内用户（推荐ModelScope）**：
```bash
modelscope download --model xukaituo/FireRedASR2-AED --local_dir ./pretrained_models/FireRedASR2-AED
```

**国际用户（Hugging Face）**：
```bash
huggingface-cli download FireRedTeam/FireRedASR2-AED --local-dir ./pretrained_models/FireRedASR2-AED
```

### 6.3 音频格式要求

官方模型仅支持**16kHz、16-bit、单声道、PCM WAV**格式。如需转换，请使用FFmpeg：

```bash
ffmpeg -i input.mp3 -ar 16000 -ac 1 -acodec pcm_s16le -f wav output.wav
```

### 6.4 基础使用：ASR模块（Python API）

仅调用ASR模块进行语音识别，支持字级时间戳输出。

```python
from fireredasr2s.fireredasr2 import FireRedAsr2, FireRedAsr2Config

# 配置ASR参数
asr_config = FireRedAsr2Config(
    use_gpu=True,           # 是否使用GPU
    use_half=False,         # 是否使用半精度
    beam_size=3,            # 束搜索宽度
    nbest=1,                # 返回的最佳候选数
    decode_max_len=0,       # 最大解码长度（0=自动）
    softmax_smoothing=1.25, # Softmax平滑系数
    aed_length_penalty=0.6, # 长度惩罚系数
    eos_penalty=1.0,        # 结束符惩罚
    return_timestamp=True   # 返回字级时间戳
)

# 加载模型
model = FireRedAsr2.from_pretrained("aed", "./pretrained_models/FireRedASR2-AED", asr_config)

# 执行识别
results = model.transcribe(["utt1", "utt2"], ["test1.wav", "test2.wav"])
for res in results:
    print(f"文本: {res['text']}")
    print(f"置信度: {res['confidence']}")
    print(f"字级时间戳: {res['timestamp']}")  # 格式: [('你', 0.42, 0.66), ...]
```

### 6.5 高级使用：一体化系统（含VAD+LID+Punc）

自动完成语音活动检测、语种识别、语音识别和标点预测的全流程。

```python
from fireredasr2s import FireRedAsr2System, FireRedAsr2SystemConfig

# 使用默认配置初始化（自动加载VAD、LID、ASR、Punc模块）
asr_system_config = FireRedAsr2SystemConfig() 
asr_system = FireRedAsr2System(asr_system_config)

# 处理单个音频文件
result = asr_system.process("test.wav")

print(f"完整文本: {result['text']}")          # 带标点的文本
print(f"句子级信息: {result['sentences']}")   # 每句起止时间、语种、置信度
print(f"VAD片段: {result['vad_segments_ms']}") # 语音片段起止时间（毫秒）
print(f"字级时间戳: {result['words']}")       # 每个字的起止时间
```

### 6.6 命令行工具（官方CLI）

FireRedASR2S提供了命令行工具 `fireredasr2s-cli`，支持批量处理。

```bash
# 处理单个或多个音频文件，输出JSONL格式结果
fireredasr2s-cli --wav_paths "hello_zh.wav" "hello_en.wav" --outdir output

# 查看结果
cat output/result.jsonl
```

输出示例：
```json
{"uttid": "hello_zh", "text": "你好世界。", "sentences": [{"start_ms": 440, "end_ms": 1820, "text": "你好世界。", "asr_confidence": 0.868, "lang": "zh mandarin", "lang_confidence": 0.999}], "vad_segments_ms": [[440, 1820]], "dur_s": 2.32, "words": [{"start_ms": 540, "end_ms": 700, "text": "你"}, {"start_ms": 700, "end_ms": 1100, "text": "好"}, {"start_ms": 1100, "end_ms": 1300, "text": "世"}, {"start_ms": 1300, "end_ms": 1765, "text": "界"}], "wav_path": "assets/hello_zh.wav"}
```

### 6.7 TensorRT-LLM加速

FireRedASR2-AED已支持TensorRT-LLM推理加速。在AISHELL-1测试集上，单张H20 GPU实现**12.7倍**于PyTorch基线的速度提升。

## 七、开源与获取渠道

- **开源协议**：Apache-2.0
- **代码仓库**：https://github.com/FireRedTeam/FireRedASR2S
- **技术论文**：https://arxiv.org/abs/2603.10420
- **在线Demo**：https://huggingface.co/spaces/FireRedTeam/FireRedASR
- **官方模型（PyTorch）** ：ModelScope搜索 `xukaituo/FireRedASR2-AED` | Hugging Face: `FireRedTeam/FireRedASR2-AED`
- **社区ONNX模型（manyeyes）** ：ModelScope平台搜索 `manyeyes` | 项目主页：https://modelscope.cn/profile/manyeyes?tab=model
- **manyspeech-cli工具**：https://modelscope.cn/models/manyeyes/manyspeech-cli

## 八、适用场景

| 场景 | 推荐理由 |
|------|----------|
| 实时语音字幕 | 支持字级时间戳 + 流式VAD |
| 语音搜索/指令 | 中英混输 + 20+方言 |
| 会议录音转写 | 歌声/音乐过滤（mVAD） |
| 边缘端部署 | 1B+轻量参数 + INT8量化 |
| 歌唱歌词识别 | opencpop测试集CER仅1.17% |
| 离线字幕生成 | manyspeech-cli一键SRT输出 |


---

## v1.0/zh/blog/index.mdx

---
title: 所有博客
pageType: custom
---
import BlogList from '../../../../components/BlogList';

<BlogList />


---

