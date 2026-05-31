## v1.0/zh/models/getting-started/index.md

# 快速开始

欢迎来到模型库！这里提供了多种语音识别、标点预测、VAD等模型的索引和下载链接。

你可以从这里找到适合你项目的 ONNX 格式模型。


---

## v1.0/zh/models/asr/index.md

# 语音识别模型

欢迎浏览语音识别模型目录。请从左侧菜单中选择具体模型系列：

- [DolphinAsr](./dolphin)
- [FunASR (Paraformer, SenseVoice)](./funasr)
- [Fun-ASR (Nano/MLT)](./fun-asr)
- [K2TransducerAsr](./k2)
- [FireRedAsr](./fireredasr)
- [MedAsr](./medasr)
- [moonshine](./moonshine)
- [WeNet](./wenet)
- [Whisper](./whisper)

每个页面包含详细的模型列表、参数说明和下载链接。

---

## v1.0/zh/models/asr/dolphin.md

# DolphinAsr 系列

> **说明**  
> - License: Apache 2.0
> - `opt`：优化版本，将音频特征提取模块移出模型，降低推理开销  
> - 完整支持语言及区域编码对照：
> ```
> zh-CN: 中文(普通话)，zh-TW: 中文(台湾)，zh-WU: 中文(吴语)，zh-SICHUAN: 中文(四川话)，zh-SHANXI: 中文(山西话)，zh-ANHUI: 中文(安徽话)，zh-TIANJIN: 中文(天津话)，zh-NINGXIA: 中文(宁夏话)，zh-SHAANXI: 中文(陕西话)，zh-HEBEI: 中文(河北话)，zh-SHANDONG: 中文(山东话)，zh-GUANGDONG: 中文(广东话)，zh-SHANGHAI: 中文(上海话)，zh-HUBEI: 中文(湖北话)，zh-LIAONING: 中文(辽宁话)，zh-GANSU: 中文(甘肃话)，zh-FUJIAN: 中文(福建话)，zh-HUNAN: 中文(湖南话)，zh-HENAN: 中文(河南话)，zh-YUNNAN: 中文(云南话)，zh-MINNAN: 中文(闽南语)，zh-WENZHOU: 中文(温州话)
> ja-JP: 日语，th-TH: 泰语，ru-RU: 俄语，ko-KR: 韩语，id-ID: 印度尼西亚语，vi-VN: 越南语
> ct-NULL: 粤语，ct-HK: 粤语(香港)，ct-GZ: 粤语(广东)
> hi-IN: 印地语，ur-IN: 乌尔都语(印度)，ur-PK: 乌尔都语，ms-MY: 马来语，uz-UZ: 乌兹别克语
> ar-MA: 阿拉伯语(摩洛哥)，ar-GLA: 阿拉伯语，ar-SA: 阿拉伯语(沙特)，ar-EG: 阿拉伯语(埃及)，ar-KW: 阿拉伯语(科威特)，ar-LY: 阿拉伯语(利比亚)，ar-JO: 阿拉伯语(约旦)，ar-AE: 阿拉伯语(阿联酋)，ar-LVT: 阿拉伯语(黎凡特)
> fa-IR: 波斯语，bn-BD: 孟加拉语
> ta-SG: 泰米尔语(新加坡)，ta-LK: 泰米尔语(斯里兰卡)，ta-IN: 泰米尔语(印度)，ta-MY: 泰米尔语(马来西亚)
> te-IN: 泰卢固语，ug-NULL: 维吾尔语，ug-CN: 维吾尔语，gu-IN: 古吉拉特语
> my-MM: 缅甸语，tl-PH: 塔加洛语，kk-KZ: 哈萨克语，or-IN: 奥里亚语，ne-NP: 尼泊尔语
> mn-MN: 蒙古语，km-KH: 高棉语，jv-ID: 爪哇语，lo-LA: 老挝语，si-LK: 僧伽罗语
> fil-PH: 菲律宾语，ps-AF: 普什图语，pa-IN: 旁遮普语，kab-NULL: 卡拜尔语
> ba-NULL: 巴什基尔语，ks-IN: 克什米尔语，tg-TJ: 塔吉克语，su-ID: 巽他语
> mr-IN: 马拉地语，ky-KG: 吉尔吉斯语，az-AZ: 阿塞拜疆语
> ```

### DolphinAsr-base 模型

| 模型名称 | 类型 | 支持语种 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| DolphinAsr-base-onnx | 非流式 | 多语种 | 否 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-onnx) |
| DolphinAsr-base-int8-onnx | 非流式 | 多语种 | 否 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-int8-onnx) |
| DolphinAsr-base-onnx-opt | 非流式 | 多语种 | 否 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-onnx-opt) |
| DolphinAsr-base-int8-onnx-opt | 非流式 | 多语种 | 否 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-int8-onnx-opt) |

### DolphinAsr-small 模型

| 模型名称 | 类型 | 支持语种 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| DolphinAsr-small-onnx | 非流式 | 多语种 | 否 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-onnx) |
| DolphinAsr-small-int8-onnx | 非流式 | 多语种 | 否 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-int8-onnx) |
| DolphinAsr-small-onnx-opt | 非流式 | 多语种 | 否 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-onnx-opt) |
| DolphinAsr-small-int8-onnx-opt | 非流式 | 多语种 | 否 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-int8-onnx-opt) |

---

## v1.0/zh/models/asr/funasr.md

# FunASR 系列

### Paraformer 中英模型

| 模型名称 | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| paraformer-large-zh-en-onnx-offline | 非流式 | 中文(zh), 英文(en) | 否 | 否 | [huggingface](https://huggingface.co/manyeyes/speech_paraformer-large_asr_nat-zh-cn-16k-common-vocab8404-onnx), [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-onnx-offline) |
| paraformer-large-zh-en-timestamp-onnx-offline | 非流式 | 中文、英文 | 否 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-timestamp-onnx-offline) |
| paraformer-large-en-onnx-offline | 非流式 | 英文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-en-onnx-offline) |
| paraformer-large-zh-en-onnx-online | 流式 | 中文、英文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-onnx-online) |

### Paraformer 粤/中英多语言模型

| 模型名称 | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| paraformer-large-zh-yue-en-timestamp-onnx-offline-dengcunqin-20240805 | 非流式 | 中、粤、英 | 否 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-timestamp-onnx-offline-dengcunqin-20240805) |
| paraformer-large-zh-yue-en-onnx-offline-dengcunqin-20240805 | 非流式 | 中、粤、英 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-onnx-offline-dengcunqin-20240805) |
| paraformer-large-zh-yue-en-onnx-online-dengcunqin-20240208 | 流式 | 中、粤、英 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-onnx-online-dengcunqin-20240208) |

### SeACo-Paraformer 热词定制模型

SeACoParaformer是阿里巴巴语音实验室提出的新一代热词定制化非自回归语音识别模型。相比于上一代基于CLAS的热词定制化方案，SeACoParaformer解耦了热词模块与ASR模型，通过后验概率融合的方式进行热词激励，使激励过程可见可控，并且热词召回率显著提升。

| 模型名称 | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| paraformer-seaco-large-zh-timestamp-onnx-offline | 非流式 | 中文,支持热词定制 | 否 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-seaco-large-zh-timestamp-onnx-offline) |

### SenseVoice 模型

| 模型名称 | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| sensevoice-small-onnx | 非流式 | 中、粤、英、日、韩 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-onnx) |
| sensevoice-small-int8-onnx | 非流式 | 中、粤、英、日、韩 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-int8-onnx) |
| sensevoice-small-wenetspeech-yue-onnx | 非流式 | 粤、中、英、日、韩 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-wenetspeech-yue-onnx) |
| sensevoice-small-wenetspeech-yue-int8-onnx | 非流式 | 粤、中、英、日、韩 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-wenetspeech-yue-int8-onnx) |
| sensevoice-small-split-embed-onnx | 非流式 | 中、粤、英、日、韩 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-split-embed-onnx) |


---

## v1.0/zh/models/asr/fun-asr.md

# Fun-ASR 系列

> **说明**  
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

| 模型名称 | 类型 | 支持语种 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Fun-ASR-Nano-2512-LLM-onnx | 非流式 | 中、英、日语；含7种方言+26种地方口音 + 歌词/说唱识别 | 是 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-onnx) |
| Fun-ASR-Nano-2512-LLM-int8-onnx | 非流式 | 同上 | 是 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-int8-onnx) |
| Fun-ASR-Nano-2512-LLM-split-adaptor-onnx | 非流式 | 同上 | 是 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-split-adaptor-onnx) |
| Fun-ASR-Nano-2512-LLM-split-adaptor-int8-onnx | 非流式 | 同上 | 是 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-split-adaptor-int8-onnx) |
| Fun-ASR-Nano-2512-CTC-onnx | 非流式 | 同上 | 是 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-CTC-onnx) |
| Fun-ASR-Nano-2512-CTC-int8-onnx | 非流式 | 同上 | 是 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-CTC-int8-onnx) |

### Fun-ASR-MLT-Nano 模型

| 模型名称 | 类型 | 支持语种 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Fun-ASR-MLT-Nano-2512-onnx | 非流式 | 31种多语言 | 是 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-MLT-Nano-2512-onnx) |
| Fun-ASR-MLT-Nano-2512-int8-onnx | 非流式 | 31种多语言 | 是 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-MLT-Nano-2512-int8-onnx) |


---

## v1.0/zh/models/asr/k2.md

# K2TransducerAsr 系列

### 流式模型

| 模型名称 | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| k2transducer-lstm-en-onnx-online-csukuangfj-20220903 | 流式 | 英文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-lstm-en-onnx-online-csukuangfj-20220903) |
| k2transducer-lstm-zh-onnx-online-csukuangfj-20221014 | 流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-lstm-zh-onnx-online-csukuangfj-20221014) |
| k2transducer-zipformer-en-onnx-online-weijizhuang-20221202 | 流式 | 英文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-en-onnx-online-weijizhuang-20221202) |
| k2transducer-zipformer-en-onnx-online-zengwei-20230517 | 流式 | 英文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-en-onnx-online-zengwei-20230517) |
| k2transducer-zipformer-multi-zh-hans-onnx-online-20231212 | 流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-multi-zh-hans-onnx-online-20231212) |
| k2transducer-zipformer-ko-onnx-online-johnbamma-20240612 | 流式 | 韩文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ko-onnx-online-johnbamma-20240612) |
| k2transducer-zipformer-ctc-small-zh-onnx-online-20250401 | 流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-small-zh-onnx-online-20250401) |
| k2transducer-zipformer-large-zh-onnx-online-yuekai-20250630 | 流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-large-zh-onnx-online-yuekai-20250630) |
| k2transducer-zipformer-xlarge-zh-onnx-online-yuekai-20250630 | 流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-xlarge-zh-onnx-online-yuekai-20250630) |
| k2transducer-zipformer-ctc-large-zh-onnx-online-yuekai-20250630 | 流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-large-zh-onnx-online-yuekai-20250630) |
| k2transducer-zipformer-ctc-xlarge-zh-onnx-online-yuekai-20250630 | 流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-xlarge-zh-onnx-online-yuekai-20250630) |

### 非流式模型

| 模型名称 | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| k2transducer-conformer-en-onnx-offline-csukuangfj-20220513 | 非流式 | 英文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-conformer-en-onnx-offline-csukuangfj-20220513) |
| k2transducer-conformer-zh-onnx-offline-luomingshuang-20220727 | 非流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-conformer-zh-onnx-offline-luomingshuang-20220727) |
| k2transducer-zipformer-en-onnx-offline-yfyeung-20230417 | 非流式 | 英文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-en-onnx-offline-yfyeung-20230417) |
| k2transducer-zipformer-large-en-onnx-offline-zengwei-20230516 | 非流式 | 英文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-large-en-onnx-offline-zengwei-20230516) |
| k2transducer-zipformer-small-en-onnx-offline-zengwei-20230516 | 非流式 | 英文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-small-en-onnx-offline-zengwei-20230516) |
| k2transducer-zipformer-zh-onnx-offline-wenetspeech-20230615 | 非流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-zh-onnx-offline-wenetspeech-20230615) |
| k2transducer-zipformer-zh-onnx-offline-multi-zh-hans-20230902 | 非流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-zh-onnx-offline-multi-zh-hans-20230902) |
| k2transducer-zipformer-zh-en-onnx-offline-20231122 | 非流式 | 中英文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-zh-en-onnx-offline-20231122) |
| k2transducer-zipformer-cantonese-onnx-offline-20240313 | 非流式 | 粤语 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-cantonese-onnx-offline-20240313) |
| k2transducer-zipformer-th-onnx-offline-yfyeung-20240620 | 非流式 | 泰语 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-th-onnx-offline-yfyeung-20240620) |
| k2transducer-zipformer-ja-onnx-offline-reazonspeech-20240801 | 非流式 | 日语 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ja-onnx-offline-reazonspeech-20240801) |
| k2transducer-zipformer-ru-onnx-offline-20240918 | 非流式 | 俄语 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ru-onnx-offline-20240918) |
| k2transducer-zipformer-vi-onnx-offline-20250420 | 非流式 | 越南语 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-vi-onnx-offline-20250420) |
| k2transducer-zipformer-ctc-zh-onnx-offline-20250703 | 非流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-zh-onnx-offline-20250703) [github](https://github.moeyy.xyz/https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/sherpa-onnx-zipformer-ctc-zh-int8-2025-07-03.tar.bz2) |
| k2transducer-zipformer-ctc-small-zh-onnx-offline-20250716 | 非流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-small-zh-onnx-offline-20250716) |


---

## v1.0/zh/models/asr/fireredasr.md

# FireRedAsr 系列

## FireRedAsr-AED 中英模型（v1）

| 模型名称 | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| fireredasr-aed-large-zh-en-onnx-offline-20250124 | 非流式 | 中文、英文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr-aed-large-zh-en-onnx-offline-20250124) |

## FireRedAsr2-AED 中英模型（v2）

| 模型名称 | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| fireredasr2-aed-large-zh-en-onnx-offline-20260212 | 非流式 | 中文、英文 | 否 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-onnx-offline-20260212) |
| fireredasr2-aed-large-zh-en-int8-onnx-offline-20260212 | 非流式 | 中文、英文 | 否 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-int8-onnx-offline-20260212) |
| fireredasr2-aed-large-zh-en-onnx-selfcrosskv-offline-20260212 | 非流式 | 中文、英文 | 否 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-onnx-selfcrosskv-offline-20260212) |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212 | 非流式 | 中文、英文 | 否 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212) |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskvstack-offline-20260212 | 非流式 | 中文、英文 | 否 | 是 | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskvstack-offline-20260212) |


---

## v1.0/zh/models/asr/medasr.md

# MedAsr 系列

> **说明**  
> - 模型架构：基于 **Conformer** 架构，由 Google Health 推出医疗场景专用语音识别模型  
> - 适用场景：适合放射科口述、医患对话、医学病历转录等医疗听写任务  
> - 支持语种：仅 **英语**（美式英语为主）  
> - 模型特点：经约5000小时医疗语音数据预训练，医学专业术语识别能力强；对非标准药名、日期时间类结构化数据识别存在波动，适合二次微调适配业务场景

| 模型名称 | 类型 | 支持语种 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| medasr-onnx | 非流式 | 英语 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/medasr-onnx) |

---

## v1.0/zh/models/asr/moonshine.md

# moonshine 系列

### moonshine-tiny 模型

| 模型名称 | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| moonshine-tiny-onnx | 非流式 | 英文 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-onnx) |
| moonshine-tiny-int8-onnx | 非流式 | 英文 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-int8-onnx) |
| moonshine-tiny-en-onnx | 非流式 | 英文 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-en-onnx) |
| moonshine-tiny-zh-onnx | 非流式 | 中文 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-zh-onnx) |
| moonshine-tiny-zh-int8-onnx | 非流式 | 中文 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-zh-int8-onnx) |
| moonshine-tiny-vi-onnx | 非流式 | 越南语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-vi-onnx) |
| moonshine-tiny-vi-int8-onnx | 非流式 | 越南语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-vi-int8-onnx) |
| moonshine-tiny-uk-onnx | 非流式 | 乌克兰语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-uk-onnx) |
| moonshine-tiny-uk-int8-onnx | 非流式 | 乌克兰语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-uk-int8-onnx) |
| moonshine-tiny-ko-onnx | 非流式 | 韩语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ko-onnx) |
| moonshine-tiny-ko-int8-onnx | 非流式 | 韩语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ko-int8-onnx) |
| moonshine-tiny-ja-onnx | 非流式 | 日语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ja-onnx) |
| moonshine-tiny-ja-int8-onnx | 非流式 | 日语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ja-int8-onnx) |
| moonshine-tiny-ar-onnx | 非流式 | 阿拉伯语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ar-onnx) |
| moonshine-tiny-ar-int8-onnx | 非流式 | 阿拉伯语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ar-int8-onnx) |
| moonshine-tiny-fr-onnx | 非流式 | 法语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-fr-onnx) |
| moonshine-tiny-fr-int8-onnx | 非流式 | 法语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-fr-int8-onnx) |

### moonshine-base 模型

| 模型名称 | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| moonshine-base-onnx | 非流式 | 英文 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/moonshine-base-onnx) |
| moonshine-base-int8-onnx | 非流式 | 英文 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/moonshine-base-int8-onnx) |
| moonshine-base-en-onnx | 非流式 | 英文 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-en-onnx) |
| moonshine-base-zh-onnx | 非流式 | 中文 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-zh-onnx) |
| moonshine-base-zh-int8-onnx | 非流式 | 中文 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-zh-int8-onnx) |
| moonshine-base-vi-onnx | 非流式 | 越南语 | 是 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/moonshine-base-vi-onnx) |
| moonshine-base-vi-int8-onnx | 非流式 | 越南语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-vi-int8-onnx) |
| moonshine-base-uk-onnx | 非流式 | 乌克兰语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-uk-onnx) |
| moonshine-base-uk-int8-onnx | 非流式 | 乌克兰语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-uk-int8-onnx) |
| moonshine-base-ko-onnx | 非流式 | 韩语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ko-onnx) |
| moonshine-base-ko-int8-onnx | 非流式 | 韩语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ko-int8-onnx) |
| moonshine-base-ja-onnx | 非流式 | 日语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ja-onnx) |
| moonshine-base-ja-int8-onnx | 非流式 | 日语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ja-int8-onnx) |
| moonshine-base-ar-onnx | 非流式 | 阿拉伯语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ar-onnx) |
| moonshine-base-ar-int8-onnx | 非流式 | 阿拉伯语 | 是 | 否 | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ar-int8-onnx) |

---

## v1.0/zh/models/asr/parakeet.md

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

---

## v1.0/zh/models/asr/wenet.md

# WeNet 系列

### 流式模型

| 模型名称 | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| wenet-u2pp-conformer-aishell-onnx-online-20210601 | 流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-aishell-onnx-online-20210601) |
| wenet-u2pp-conformer-wenetspeech-onnx-online-20220506 | 流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-onnx-online-20220506) |
| wenet-u2pp-conformer-wenetspeech-int8-onnx-online-20220506 | 流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-int8-onnx-online-20220506) |
| wenet-u2pp-conformer-gigaspeech-onnx-online-20210728 | 流式 | 英文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-gigaspeech-onnx-online-20210728) |

### 非流式模型

| 模型名称 | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| wenet-u2pp-conformer-aishell-onnx-offline-20210601 | 非流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-aishell-onnx-offline-20210601) |
| wenet-u2pp-conformer-wenetspeech-onnx-offline-20220506 | 非流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-onnx-offline-20220506) |
| wenet-u2pp-conformer-wenetspeech-int8-onnx-offline-20220506 | 非流式 | 中文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-int8-onnx-offline-20220506) |
| wenet-u2pp-conformer-gigaspeech-onnx-offline-20210728 | 非流式 | 英文 | 否 | 否 | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-gigaspeech-onnx-offline-20210728) |

---

## v1.0/zh/models/asr/whisper.md

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



---

## v1.0/zh/models/vad/index.md

# 语音端点检测（VAD）模型

VAD（Voice Activity Detection）用于检测音频流中的人声片段，降低ASR系统计算量，提升实时性。


---

## v1.0/zh/models/vad/fsmn-vad.md

# FSMN-VAD 系列

> **说明**
> - 模型背景：由阿里巴巴达摩院研发的工业级语音活性检测模型，基于 FSMN-Monophone 架构设计，为16k中文通用VAD模型，原生适配 FunASR 框架与 Paraformer-large 长音频场景。
> - 功能特性：依托FSMN结构充分利用上下文信息，推理速度快、时延可控；采用Monophone细分建模单元，提升特征区分能力，降低识别错误。支持音频文件、URL、二进制流、音频数组、wav.scp列表等多种输入，可自定义尾部静音时长、语音噪声阈值等参数；全平台兼容 Linux-x86_64、macOS、Windows，可与ASR、标点模块自由组合使用。
> - 开源仓库：https://github.com/modelscope/FunASR

### 模型列表
| 模型名称 | 说明 | 下载地址 |
| ---- | ---- | ---- |
| alifsmnvad-onnx | 通用标准版，综合表现均衡，默认推荐 | [modelscope](https://modelscope.cn/models/manyeyes/alifsmnvad-onnx) |


---

## v1.0/zh/models/vad/silero-vad.md

# Silero-VAD 系列

> **说明**
> - 模型背景：由开源社区 snakers4 推出的深度学习语音活性检测模型，主流开源VAD方案，适配16kHz音频输入。
> - 功能特性：对语音执行预加重、分帧、加窗等预处理后，通过神经网络学习语音特征，精准区分语音与非语音片段；可根据噪声环境自适应调整检测阈值，在嘈杂场景下表现优异，迭代版本持续优化抗噪能力。
> - 开源仓库：https://github.com/snakers4/silero-vad

### 模型列表
| 模型名称 | 说明 | 下载地址 |
| ---- | ---- | ---- |
| silero-vad-onnx | 基础版本，适用于常规通用场景 | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-onnx) |
| silero-vad-v5-onnx | V5 迭代版，优化噪声环境适配能力 | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-v5-onnx) |
| silero-vad-v6-onnx | V6 最新版本，嘈杂环境检测效果更佳 | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-v6-onnx) |


---

## v1.0/zh/models/punc/index.md

# 标点符号处理模型

本目录收录了用于语音识别后处理的标点预测模型，用于恢复文本中的标点符号，提升可读性。



---

## v1.0/zh/models/punc/firered-punc.md

# FireRedPunc 系列

> **说明**
> - 模型背景：FireRedPunc 是 **FireRedASR2S** 一体化语音系统中的独立标点预测模块，基于 BERT 架构开发，专为语音识别后处理场景设计，支持中英文双语标点恢复。
> - 功能特性：该模型综合性能达到业界SOTA水准，**平均F1分数 78.90%**，在多领域中文、英文数据集上均表现出色，适配各类离线、实时语音转写业务。
> - 开源仓库：https://github.com/FireRedTeam/FireRedASR2S

### 模型列表
| 模型名称 | 说明 | 下载地址 |
| ---- | ---- | ---- |
| FireRedPunc-zh-en-onnx | 中英文通用标点预测模型，综合精度优异，SOTA级别表现 | [modelscope](https://modelscope.cn/models/manyeyes/FireRedPunc-zh-en-onnx) |


---

## v1.0/zh/models/punc/ct-transformer-punc.md

# CT-Transformer 系列

> **说明**
> - 模型背景：由阿里巴巴达摩院开源的标点模型，基于 **Controllable Time-delay Transformer（CT-Transformer）** 架构打造，主要用于语音识别结果后处理，完成文本标点预测与恢复。
> - 功能特性：模型由 **Embedding、Encoder、Predictor** 三部分构成：Embedding 融合词向量与位置向量；Encoder 支持 Transformer、Conformer 等多种网络结构；Predictor 负责逐 Token 预测标点类型。针对传统 Transformer 推理时延高、标点结果反复刷新的问题，CT-Transformer 在保证精度不变的前提下实现**可控推理时延**，适配实时业务场景。基于通用领域业务数据集测试：精确率 53.8%、召回率 60.0%、F1 值 56.5%；训练样本总量约 3300 万条。
> - 开源仓库：https://github.com/modelscope/FunASR

**名词释义**
- `int8`：INT8 量化版本，压缩模型体积、加快推理速度，存在小幅精度损耗
- `mge`：针对 MatMul、Gather、Embed 核心层专项量化优化，进一步缩减模型体积，提升加载与推理速度，精度可能略有下降

### 模型列表
| 模型名称 | 词汇量 | 说明 | 下载地址 |
| ---- | ---- | ---- | ---- |
| alicttransformerpunc-zh-en-onnx | 272727 | 标准原版，中英文通用标点模型 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-onnx) |
| alicttransformerpunc-zh-en-int8-onnx | 272727 | 标准版 INT8 量化，体积更小、推理提速 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-int8-onnx) |
| alicttransformerpunc-zh-en-mge-int8-onnx | 272727 | 标准版 + 核心层MGE优化 + INT8量化，加载、推理速度进一步提升，精度略有下降 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-mge-int8-onnx) |
| alicttransformerpunc-large-zh-en-onnx | 471067 | 大参数量原版，标点识别精度更高 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-onnx) |
| alicttransformerpunc-large-zh-en-int8-onnx | 471067 | 大参数量版 INT8 量化，兼顾精度与推理速度 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-int8-onnx) |
| alicttransformerpunc-large-zh-en-mge-int8-onnx | 471067 | 大参数量版 + 核心层MGE优化 + INT8量化，综合运行效率最优，精度略有下降 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-mge-int8-onnx) |


---

## v1.0/zh/models/tts/index.md

# 语音生成（TTS）

> 待补充：后续会添加文本转语音模型的列表和说明。


---

## v1.0/zh/models/tts/kokoro.md

# kokoro

待补充。

---

## v1.0/zh/models/tts/vits.md

# vits

待补充。

---

## v1.0/zh/models/tts/indextts.md

# indextts

待补充。

---

## v1.0/zh/models/audio-sep/index.md

# 音频分离与增强

> 待补充：后续会添加音频分离、降噪、回声消除等模型的列表和说明。


---

## v1.0/zh/models/audio-sep/mossformer.md

# mossformer

待补充。

---

## v1.0/zh/models/audio-sep/splitter-voiceprint-sep.md

# splitter-voiceprint-sep

待补充。

---

## v1.0/zh/models/index.mdx

---
title: API Overview
overview: true
---

This is an API Overview page which outlines all the available APIs.


---

