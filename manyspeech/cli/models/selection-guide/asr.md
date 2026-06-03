# ASR 模型

## DolphinAsr 系列

> **说明**
>
> - License: Apache 2.0
> - `opt`：优化版本，将音频特征提取模块移出模型，降低推理开销
> - 完整支持语言及区域编码对照：
>
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

| 模型名称                          | 类型  | 支持语种 | 标点 | 时间戳 | 下载地址                                                                                  |
| ----------------------------- | --- | ---- | -- | --- | ------------------------------------------------------------------------------------- |
| DolphinAsr-base-onnx          | 非流式 | 多语种  | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-onnx)          |
| DolphinAsr-base-int8-onnx     | 非流式 | 多语种  | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-int8-onnx)     |
| DolphinAsr-base-onnx-opt      | 非流式 | 多语种  | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-onnx-opt)      |
| DolphinAsr-base-int8-onnx-opt | 非流式 | 多语种  | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-int8-onnx-opt) |

### DolphinAsr-small 模型

| 模型名称                           | 类型  | 支持语种 | 标点 | 时间戳 | 下载地址                                                                                   |
| ------------------------------ | --- | ---- | -- | --- | -------------------------------------------------------------------------------------- |
| DolphinAsr-small-onnx          | 非流式 | 多语种  | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-onnx)          |
| DolphinAsr-small-int8-onnx     | 非流式 | 多语种  | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-int8-onnx)     |
| DolphinAsr-small-onnx-opt      | 非流式 | 多语种  | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-onnx-opt)      |
| DolphinAsr-small-int8-onnx-opt | 非流式 | 多语种  | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-int8-onnx-opt) |

***

## FireRedAsr 系列

### FireRedAsr-AED 中英模型（v1）

| 模型名称                                             | 类型  | 支持语言  | 标点 | 时间戳 | 下载地址                                                                                                     |
| ------------------------------------------------ | --- | ----- | -- | --- | -------------------------------------------------------------------------------------------------------- |
| fireredasr-aed-large-zh-en-onnx-offline-20250124 | 非流式 | 中文、英文 | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr-aed-large-zh-en-onnx-offline-20250124) |

### FireRedAsr2-AED 中英模型（v2）

| 模型名称                                                                    | 类型  | 支持语言  | 标点 | 时间戳 | 下载地址                                                                                                                            |
| ----------------------------------------------------------------------- | --- | ----- | -- | --- | ------------------------------------------------------------------------------------------------------------------------------- |
| fireredasr2-aed-large-zh-en-onnx-offline-20260212                       | 非流式 | 中文、英文 | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-onnx-offline-20260212)                       |
| fireredasr2-aed-large-zh-en-int8-onnx-offline-20260212                  | 非流式 | 中文、英文 | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-int8-onnx-offline-20260212)                  |
| fireredasr2-aed-large-zh-en-onnx-selfcrosskv-offline-20260212           | 非流式 | 中文、英文 | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-onnx-selfcrosskv-offline-20260212)           |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212      | 非流式 | 中文、英文 | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212)      |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskvstack-offline-20260212 | 非流式 | 中文、英文 | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskvstack-offline-20260212) |

***

## Fun-ASR 系列

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

***

## FunASR 系列

### Paraformer 中英模型

| 模型名称                                          | 类型  | 支持语言           | 标点 | 时间戳 | 下载地址                                                                                                                                                                                                        |
| --------------------------------------------- | --- | -------------- | -- | --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| paraformer-large-zh-en-onnx-offline           | 非流式 | 中文(zh), 英文(en) | 否  | 否   | [huggingface](https://huggingface.co/manyeyes/speech_paraformer-large_asr_nat-zh-cn-16k-common-vocab8404-onnx), [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-onnx-offline) |
| paraformer-large-zh-en-timestamp-onnx-offline | 非流式 | 中文、英文          | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-timestamp-onnx-offline)                                                                                                       |
| paraformer-large-en-onnx-offline              | 非流式 | 英文             | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-en-onnx-offline)                                                                                                                    |
| paraformer-large-zh-en-onnx-online            | 流式  | 中文、英文          | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-onnx-online)                                                                                                                  |

### Paraformer 粤/中英多语言模型

| 模型名称                                                                  | 类型  | 支持语言  | 标点 | 时间戳 | 下载地址                                                                                                                          |
| --------------------------------------------------------------------- | --- | ----- | -- | --- | ----------------------------------------------------------------------------------------------------------------------------- |
| paraformer-large-zh-yue-en-timestamp-onnx-offline-dengcunqin-20240805 | 非流式 | 中、粤、英 | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-timestamp-onnx-offline-dengcunqin-20240805) |
| paraformer-large-zh-yue-en-onnx-offline-dengcunqin-20240805           | 非流式 | 中、粤、英 | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-onnx-offline-dengcunqin-20240805)           |
| paraformer-large-zh-yue-en-onnx-online-dengcunqin-20240208            | 流式  | 中、粤、英 | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-onnx-online-dengcunqin-20240208)            |

### SeACo-Paraformer 热词定制模型

SeACoParaformer是阿里巴巴语音实验室提出的新一代热词定制化非自回归语音识别模型。相比于上一代基于CLAS的热词定制化方案，SeACoParaformer解耦了热词模块与ASR模型，通过后验概率融合的方式进行热词激励，使激励过程可见可控，并且热词召回率显著提升。

| 模型名称                                             | 类型  | 支持语言      | 标点 | 时间戳 | 下载地址                                                                                                     |
| ------------------------------------------------ | --- | --------- | -- | --- | -------------------------------------------------------------------------------------------------------- |
| paraformer-seaco-large-zh-timestamp-onnx-offline | 非流式 | 中文,支持热词定制 | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-seaco-large-zh-timestamp-onnx-offline) |

### SenseVoice 模型

| 模型名称                                       | 类型  | 支持语言      | 标点 | 时间戳 | 下载地址                                                                                               |
| ------------------------------------------ | --- | --------- | -- | --- | -------------------------------------------------------------------------------------------------- |
| sensevoice-small-onnx                      | 非流式 | 中、粤、英、日、韩 | 是  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-onnx)                      |
| sensevoice-small-int8-onnx                 | 非流式 | 中、粤、英、日、韩 | 是  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-int8-onnx)                 |
| sensevoice-small-wenetspeech-yue-onnx      | 非流式 | 粤、中、英、日、韩 | 是  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-wenetspeech-yue-onnx)      |
| sensevoice-small-wenetspeech-yue-int8-onnx | 非流式 | 粤、中、英、日、韩 | 是  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-wenetspeech-yue-int8-onnx) |
| sensevoice-small-split-embed-onnx          | 非流式 | 中、粤、英、日、韩 | 是  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-split-embed-onnx)          |

***

## K2TransducerAsr 系列

### 流式模型

| 模型名称                                                             | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址                                                                                                                     |
| ---------------------------------------------------------------- | -- | ---- | -- | --- | ------------------------------------------------------------------------------------------------------------------------ |
| k2transducer-lstm-en-onnx-online-csukuangfj-20220903             | 流式 | 英文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-lstm-en-onnx-online-csukuangfj-20220903)             |
| k2transducer-lstm-zh-onnx-online-csukuangfj-20221014             | 流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-lstm-zh-onnx-online-csukuangfj-20221014)             |
| k2transducer-zipformer-en-onnx-online-weijizhuang-20221202       | 流式 | 英文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-en-onnx-online-weijizhuang-20221202)       |
| k2transducer-zipformer-en-onnx-online-zengwei-20230517           | 流式 | 英文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-en-onnx-online-zengwei-20230517)           |
| k2transducer-zipformer-multi-zh-hans-onnx-online-20231212        | 流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-multi-zh-hans-onnx-online-20231212)        |
| k2transducer-zipformer-ko-onnx-online-johnbamma-20240612         | 流式 | 韩文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ko-onnx-online-johnbamma-20240612)         |
| k2transducer-zipformer-ctc-small-zh-onnx-online-20250401         | 流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-small-zh-onnx-online-20250401)         |
| k2transducer-zipformer-large-zh-onnx-online-yuekai-20250630      | 流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-large-zh-onnx-online-yuekai-20250630)      |
| k2transducer-zipformer-xlarge-zh-onnx-online-yuekai-20250630     | 流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-xlarge-zh-onnx-online-yuekai-20250630)     |
| k2transducer-zipformer-ctc-large-zh-onnx-online-yuekai-20250630  | 流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-large-zh-onnx-online-yuekai-20250630)  |
| k2transducer-zipformer-ctc-xlarge-zh-onnx-online-yuekai-20250630 | 流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-xlarge-zh-onnx-online-yuekai-20250630) |

### 非流式模型

| 模型名称                                                          | 类型  | 支持语言 | 标点 | 时间戳 | 下载地址                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------- | --- | ---- | -- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| k2transducer-conformer-en-onnx-offline-csukuangfj-20220513    | 非流式 | 英文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-conformer-en-onnx-offline-csukuangfj-20220513)                                                                                                                                                     |
| k2transducer-conformer-zh-onnx-offline-luomingshuang-20220727 | 非流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-conformer-zh-onnx-offline-luomingshuang-20220727)                                                                                                                                                  |
| k2transducer-zipformer-en-onnx-offline-yfyeung-20230417       | 非流式 | 英文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-en-onnx-offline-yfyeung-20230417)                                                                                                                                                        |
| k2transducer-zipformer-large-en-onnx-offline-zengwei-20230516 | 非流式 | 英文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-large-en-onnx-offline-zengwei-20230516)                                                                                                                                                  |
| k2transducer-zipformer-small-en-onnx-offline-zengwei-20230516 | 非流式 | 英文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-small-en-onnx-offline-zengwei-20230516)                                                                                                                                                  |
| k2transducer-zipformer-zh-onnx-offline-wenetspeech-20230615   | 非流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-zh-onnx-offline-wenetspeech-20230615)                                                                                                                                                    |
| k2transducer-zipformer-zh-onnx-offline-multi-zh-hans-20230902 | 非流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-zh-onnx-offline-multi-zh-hans-20230902)                                                                                                                                                  |
| k2transducer-zipformer-zh-en-onnx-offline-20231122            | 非流式 | 中英文  | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-zh-en-onnx-offline-20231122)                                                                                                                                                             |
| k2transducer-zipformer-cantonese-onnx-offline-20240313        | 非流式 | 粤语   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-cantonese-onnx-offline-20240313)                                                                                                                                                         |
| k2transducer-zipformer-th-onnx-offline-yfyeung-20240620       | 非流式 | 泰语   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-th-onnx-offline-yfyeung-20240620)                                                                                                                                                        |
| k2transducer-zipformer-ja-onnx-offline-reazonspeech-20240801  | 非流式 | 日语   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ja-onnx-offline-reazonspeech-20240801)                                                                                                                                                   |
| k2transducer-zipformer-ru-onnx-offline-20240918               | 非流式 | 俄语   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ru-onnx-offline-20240918)                                                                                                                                                                |
| k2transducer-zipformer-vi-onnx-offline-20250420               | 非流式 | 越南语  | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-vi-onnx-offline-20250420)                                                                                                                                                                |
| k2transducer-zipformer-ctc-zh-onnx-offline-20250703           | 非流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-zh-onnx-offline-20250703) [github](https://github.moeyy.xyz/https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/sherpa-onnx-zipformer-ctc-zh-int8-2025-07-03.tar.bz2) |
| k2transducer-zipformer-ctc-small-zh-onnx-offline-20250716     | 非流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-small-zh-onnx-offline-20250716)                                                                                                                                                      |

***

## MedAsr 系列

> **说明**
>
> - 模型架构：基于 **Conformer** 架构，由 Google Health 推出医疗场景专用语音识别模型
> - 适用场景：适合放射科口述、医患对话、医学病历转录等医疗听写任务
> - 支持语种：仅 **英语**（美式英语为主）
> - 模型特点：经约5000小时医疗语音数据预训练，医学专业术语识别能力强；对非标准药名、日期时间类结构化数据识别存在波动，适合二次微调适配业务场景

| 模型名称        | 类型  | 支持语种 | 标点 | 时间戳 | 下载地址                                                                |
| ----------- | --- | ---- | -- | --- | ------------------------------------------------------------------- |
| medasr-onnx | 非流式 | 英语   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/medasr-onnx) |

***

## moonshine 系列

### moonshine-tiny 模型

| 模型名称                        | 类型  | 支持语言 | 标点 | 时间戳 | 下载地址                                                                            |
| --------------------------- | --- | ---- | -- | --- | ------------------------------------------------------------------------------- |
| moonshine-tiny-onnx         | 非流式 | 英文   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-onnx)         |
| moonshine-tiny-int8-onnx    | 非流式 | 英文   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-int8-onnx)    |
| moonshine-tiny-en-onnx      | 非流式 | 英文   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-en-onnx)      |
| moonshine-tiny-zh-onnx      | 非流式 | 中文   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-zh-onnx)      |
| moonshine-tiny-zh-int8-onnx | 非流式 | 中文   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-zh-int8-onnx) |
| moonshine-tiny-vi-onnx      | 非流式 | 越南语  | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-vi-onnx)      |
| moonshine-tiny-vi-int8-onnx | 非流式 | 越南语  | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-vi-int8-onnx) |
| moonshine-tiny-uk-onnx      | 非流式 | 乌克兰语 | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-uk-onnx)      |
| moonshine-tiny-uk-int8-onnx | 非流式 | 乌克兰语 | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-uk-int8-onnx) |
| moonshine-tiny-ko-onnx      | 非流式 | 韩语   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ko-onnx)      |
| moonshine-tiny-ko-int8-onnx | 非流式 | 韩语   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ko-int8-onnx) |
| moonshine-tiny-ja-onnx      | 非流式 | 日语   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ja-onnx)      |
| moonshine-tiny-ja-int8-onnx | 非流式 | 日语   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ja-int8-onnx) |
| moonshine-tiny-ar-onnx      | 非流式 | 阿拉伯语 | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ar-onnx)      |
| moonshine-tiny-ar-int8-onnx | 非流式 | 阿拉伯语 | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ar-int8-onnx) |
| moonshine-tiny-fr-onnx      | 非流式 | 法语   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-fr-onnx)      |
| moonshine-tiny-fr-int8-onnx | 非流式 | 法语   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-fr-int8-onnx) |

### moonshine-base 模型

| 模型名称                        | 类型  | 支持语言 | 标点 | 时间戳 | 下载地址                                                                             |
| --------------------------- | --- | ---- | -- | --- | -------------------------------------------------------------------------------- |
| moonshine-base-onnx         | 非流式 | 英文   | 是  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/moonshine-base-onnx)      |
| moonshine-base-int8-onnx    | 非流式 | 英文   | 是  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/moonshine-base-int8-onnx) |
| moonshine-base-en-onnx      | 非流式 | 英文   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-en-onnx)       |
| moonshine-base-zh-onnx      | 非流式 | 中文   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-zh-onnx)       |
| moonshine-base-zh-int8-onnx | 非流式 | 中文   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-zh-int8-onnx)  |
| moonshine-base-vi-onnx      | 非流式 | 越南语  | 是  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/moonshine-base-vi-onnx)   |
| moonshine-base-vi-int8-onnx | 非流式 | 越南语  | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-vi-int8-onnx)  |
| moonshine-base-uk-onnx      | 非流式 | 乌克兰语 | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-uk-onnx)       |
| moonshine-base-uk-int8-onnx | 非流式 | 乌克兰语 | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-uk-int8-onnx)  |
| moonshine-base-ko-onnx      | 非流式 | 韩语   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ko-onnx)       |
| moonshine-base-ko-int8-onnx | 非流式 | 韩语   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ko-int8-onnx)  |
| moonshine-base-ja-onnx      | 非流式 | 日语   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ja-onnx)       |
| moonshine-base-ja-int8-onnx | 非流式 | 日语   | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ja-int8-onnx)  |
| moonshine-base-ar-onnx      | 非流式 | 阿拉伯语 | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ar-onnx)       |
| moonshine-base-ar-int8-onnx | 非流式 | 阿拉伯语 | 是  | 否   | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ar-int8-onnx)  |

***

## WeNet 系列

### 流式模型

| 模型名称                                                       | 类型 | 支持语言 | 标点 | 时间戳 | 下载地址                                                                                                               |
| ---------------------------------------------------------- | -- | ---- | -- | --- | ------------------------------------------------------------------------------------------------------------------ |
| wenet-u2pp-conformer-aishell-onnx-online-20210601          | 流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-aishell-onnx-online-20210601)          |
| wenet-u2pp-conformer-wenetspeech-onnx-online-20220506      | 流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-onnx-online-20220506)      |
| wenet-u2pp-conformer-wenetspeech-int8-onnx-online-20220506 | 流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-int8-onnx-online-20220506) |
| wenet-u2pp-conformer-gigaspeech-onnx-online-20210728       | 流式 | 英文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-gigaspeech-onnx-online-20210728)       |

### 非流式模型

| 模型名称                                                        | 类型  | 支持语言 | 标点 | 时间戳 | 下载地址                                                                                                                |
| ----------------------------------------------------------- | --- | ---- | -- | --- | ------------------------------------------------------------------------------------------------------------------- |
| wenet-u2pp-conformer-aishell-onnx-offline-20210601          | 非流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-aishell-onnx-offline-20210601)          |
| wenet-u2pp-conformer-wenetspeech-onnx-offline-20220506      | 非流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-onnx-offline-20220506)      |
| wenet-u2pp-conformer-wenetspeech-int8-onnx-offline-20220506 | 非流式 | 中文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-int8-onnx-offline-20220506) |
| wenet-u2pp-conformer-gigaspeech-onnx-offline-20210728       | 非流式 | 英文   | 否  | 否   | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-gigaspeech-onnx-offline-20210728)       |

***

## Whisper 系列

> **说明**
>
> 1. 后缀带 `-kv` 代表启用 KV Cache 推理加速
> 2. 全系模型**支持标点、支持时间戳**，默认输出段落级时间戳，可通过参数开启词级时间戳
> 3. 语种范围：
>    - 标准多语言版（tiny/small/medium/large-v1/large-v2）：共支持 **99 种语言**（含中文、粤语、英语、日语、韩语、俄语、阿拉伯语、越南语、乌克兰语等全球主流语种）
>    - large-v3 / large-v3-turbo 系列：在99种语言基础上扩充低资源语种，总计约 **106 种**，新增：**祖鲁语（zu）、毛利语（mi）、斯瓦希里语（sw）、豪萨语（ha）** 等，对应语种识别效果显著增强
>    - 完整语种及代码：
>
> ```
> af(南非荷兰语), am(阿姆哈拉语), ar(阿拉伯语), as(阿萨姆语), az(阿塞拜疆语), 
> ba(巴什基尔语), be(白俄罗斯语), bg(保加利亚语), bn(孟加拉语), bo(藏语), br(布列塔尼语), bs(波斯尼亚语), 
> ca(加泰罗尼亚语), cs(捷克语), cy(威尔士语), 
> da(丹麦语), de(德语), 
> el(希腊语), en(英语), es(西班牙语), et(爱沙尼亚语), eu(巴斯克语), 
> fa(波斯语), fi(芬兰语), fo(法罗语), fr(法语), 
> ga(爱尔兰语), gl(加利西亚语), gu(古吉拉特语), 
> ha(豪萨语), haw(夏威夷语), he(希伯来语), hi(印地语), hr(克罗地亚语), hu(匈牙利语), hy(亚美尼亚语), 
> id(印度尼西亚语), ig(伊博语), is(冰岛语), it(意大利语), 
> ja(日语), jv(爪哇语), 
> ka(格鲁吉亚语), kk(哈萨克语), km(高棉语), kn(卡纳达语), ko(韩语), ku(库尔德语), ky(吉尔吉斯语), 
> la(拉丁语), lb(卢森堡语), lg(卢干达语), lt(立陶宛语), lv(拉脱维亚语), 
> mai(迈蒂利语), mg(马达加斯加语), mi(毛利语), mk(马其顿语), ml(马拉雅拉姆语), mn(蒙古语), mr(马拉地语), ms(马来语), mt(马耳他语), my(缅甸语), 
> ne(尼泊尔语), nl(荷兰语), no(挪威语), nso(北索托语), ny(齐切瓦语), 
> oc(奥克语), om(奥罗莫语), or(奥里亚语), 
> pa(旁遮普语), pl(波兰语), ps(普什图语), pt(葡萄牙语), 
> ro(罗马尼亚语), ru(俄语), rw(卢旺达语), 
> sa(梵语), sd(信德语), si(僧伽罗语), sk(斯洛伐克语), sl(斯洛文尼亚语), sm(萨摩亚语), sn(绍纳语), so(索马里语), sq(阿尔巴尼亚语), sr(塞尔维亚语), ss(斯瓦蒂语), st(南索托语), su(巽他语), sv(瑞典语), sw(斯瓦希里语), 
> ta(泰米尔语), te(泰卢固语), tg(塔吉克语), th(泰语), ti(提格雷尼亚语), tk(土库曼语), tl(他加禄语), tn(茨瓦纳语), to(汤加语), tr(土耳其语), ts(聪加语), tt(鞑靼语), tw(特维语), 
> ug(维吾尔语), uk(乌克兰语), ur(乌尔都语), uz(乌兹别克语), 
> ve(文达语), vi(越南语), vo(沃拉普克语), 
> wa(瓦隆语), wo(沃洛夫语), 
> xh(科萨语), 
> yi(意第绪语), yo(约鲁巴语), 
> zh(中文), yue(粤语), zu(祖鲁语)
> ```
>
> - 语种代码简写：
>
> ```
> af, am, ar, as, az,
> ba, be, bg, bn, bo, br, bs,
> ca, cs, cy,
> da, de, el, en, es, et, eu,
> fa, fi, fo, fr, ga, gl, gu,
> ha, haw, he, hi, hr, hu, hy,
> id, ig, is, it,
> ja, jv,
> ka, kk, km, kn, ko, ku, ky,
> la, lb, lg, lt, lv,
> mai, mg, mi, mk, ml, mn, mr, ms, mt, my,
> ne, nl, no, nso, ny,
> oc, om, or,
> pa, pl, ps, pt,
> ro, ru, rw,
> sa, sd, si, sk, sl, sm, sn, so, sq, sr, ss, st, su, sv, sw,
> ta, te, tg, th, ti, tk, tl, tn, to, tr, ts, tt, tw,
> ug, uk, ur, uz,
> ve, vi, vo,
> wa, wo, xh,
> yi, yo,
> zh, yue, zu
> ```

### whisper-tiny 模型

| 模型名称                 | 类型  | 支持语种   | 标点 | 时间戳 | KV | 下载地址                                                                         |
| -------------------- | --- | ------ | -- | --- | -- | ---------------------------------------------------------------------------- |
| whisper-tiny-onnx    | 非流式 | 99种多语言 | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-onnx)    |
| whisper-tiny-onnx-kv | 非流式 | 99种多语言 | 是  | 是   | 是  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-onnx-kv) |
| whisper-tiny-en-onnx | 非流式 | 英语     | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-en-onnx) |

### whisper-small 模型

| 模型名称                         | 类型  | 支持语种     | 标点 | 时间戳 | KV | 下载地址                                                                                 |
| ---------------------------- | --- | -------- | -- | --- | -- | ------------------------------------------------------------------------------------ |
| whisper-small-onnx           | 非流式 | 99种多语言   | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-onnx)           |
| whisper-small-en-onnx        | 非流式 | 英语       | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-en-onnx)        |
| whisper-small-cantonese-onnx | 非流式 | 粤语、中文、英语 | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-cantonese-onnx) |

### whisper-medium 模型

| 模型名称                            | 类型  | 支持语种   | 标点 | 时间戳 | KV | 下载地址                                                                                    |
| ------------------------------- | --- | ------ | -- | --- | -- | --------------------------------------------------------------------------------------- |
| whisper-medium-onnx             | 非流式 | 99种多语言 | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-onnx)             |
| whisper-medium-int8-onnx-kv     | 非流式 | 99种多语言 | 是  | 是   | 是  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-int8-onnx-kv)     |
| whisper-medium-en-onnx          | 非流式 | 英语     | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-en-onnx)          |
| whisper-medium-yue-onnx-kv      | 非流式 | 粤语     | 是  | 是   | 是  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-yue-onnx-kv)      |
| whisper-medium-yue-int8-onnx-kv | 非流式 | 粤语     | 是  | 是   | 是  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-yue-int8-onnx-kv) |

### whisper-large 模型

| 模型名称                                                  | 类型  | 支持语种     | 标点 | 时间戳 | KV | 下载地址                                                                                                          |
| ----------------------------------------------------- | --- | -------- | -- | --- | -- | ------------------------------------------------------------------------------------------------------------- |
| whisper-large-v1-onnx                                 | 非流式 | 99种多语言   | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v1-onnx)                                 |
| whisper-large-v2-onnx                                 | 非流式 | 99种多语言   | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v2-onnx)                                 |
| whisper-large-v3-onnx                                 | 非流式 | 约106种多语言 | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-onnx)                                 |
| whisper-large-v3-turbo-onnx                           | 非流式 | 约106种多语言 | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-onnx)                           |
| whisper-large-v3-turbo-zh-onnx                        | 非流式 | 中文       | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-zh-onnx)                        |
| whisper-large-v3-turbo-zh-int8-onnx-kv-belle-20241016 | 非流式 | 中文       | 是  | 是   | 是  | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-zh-int8-onnx-kv-belle-20241016) |

### Distil-Whisper 模型

| 模型名称                                                  | 类型  | 支持语种         | 标点 | 时间戳 | KV | 下载地址                                                                                                          |
| ----------------------------------------------------- | --- | ------------ | -- | --- | -- | ------------------------------------------------------------------------------------------------------------- |
| distil-whisper-small-en-onnx                          | 非流式 | 英语           | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-small-en-onnx)                          |
| distil-whisper-medium-en-onnx                         | 非流式 | 英语           | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-medium-en-onnx)                         |
| distil-whisper-large-v2-en-onnx                       | 非流式 | 英语           | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v2-en-onnx)                       |
| distil-whisper-large-v3-en-onnx                       | 非流式 | 英语           | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v3-en-onnx)                       |
| distil-whipser-large-v3.5-en-onnx                     | 非流式 | 英语           | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whipser-large-v3.5-en-onnx)                     |
| distil-whisper-large-v2-multi-hans-onnx               | 非流式 | 中文（兼容99种多语言） | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v2-multi-hans-onnx)               |
| distil-whisper-small-cantonese-onnx-alvanlii-20240404 | 非流式 | 粤语、中文、英语     | 是  | 是   | 否  | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-small-cantonese-onnx-alvanlii-20240404) |

***

> **通用说明**
>
> - `int8` = 量化版，体积更小、速度更快
> - `kv` / `selfcrosskv` / `selfcrosskvstack` / `opt` = 推理优化版本
> - 部分模型提供 HuggingFace 或 GitHub 下载源，详见各表
