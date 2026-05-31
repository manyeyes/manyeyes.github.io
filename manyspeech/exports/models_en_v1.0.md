## v1.0/en/models/getting-started/index.md

# Getting Started

This section is under construction. Content will be added soon.


---

## v1.0/en/models/asr/index.md

# Speech Recognition Models

Welcome to the speech recognition model catalog. Select a model series from the left sidebar.

> **Note**  
> - `int8` = quantized version, smaller size, faster speed  
> - `kv` / `selfcrosskv` / `selfcrosskvstack` / `opt` = inference optimization versions  
> - Some models provide HuggingFace or GitHub sources; see each table.


---

## v1.0/en/models/asr/dolphin.md

# DolphinAsr Series

> **Notes**  
> - License: Apache 2.0
> - `opt`: Optimized version, moves audio feature extraction module out of the model to reduce inference overhead  
> - Full language and region code mapping:
> ```
> zh-CN: Chinese (Mandarin), zh-TW: Chinese (Taiwan), zh-WU: Chinese (Wu), zh-SICHUAN: Chinese (Sichuan), zh-SHANXI: Chinese (Shanxi), zh-ANHUI: Chinese (Anhui), zh-TIANJIN: Chinese (Tianjin), zh-NINGXIA: Chinese (Ningxia), zh-SHAANXI: Chinese (Shaanxi), zh-HEBEI: Chinese (Hebei), zh-SHANDONG: Chinese (Shandong), zh-GUANGDONG: Chinese (Guangdong), zh-SHANGHAI: Chinese (Shanghai), zh-HUBEI: Chinese (Hubei), zh-LIAONING: Chinese (Liaoning), zh-GANSU: Chinese (Gansu), zh-FUJIAN: Chinese (Fujian), zh-HUNAN: Chinese (Hunan), zh-HENAN: Chinese (Henan), zh-YUNNAN: Chinese (Yunnan), zh-MINNAN: Chinese (Minnan), zh-WENZHOU: Chinese (Wenzhou)
> ja-JP: Japanese, th-TH: Thai, ru-RU: Russian, ko-KR: Korean, id-ID: Indonesian, vi-VN: Vietnamese
> ct-NULL: Cantonese, ct-HK: Cantonese (Hong Kong), ct-GZ: Cantonese (Guangdong)
> hi-IN: Hindi, ur-IN: Urdu (India), ur-PK: Urdu, ms-MY: Malay, uz-UZ: Uzbek
> ar-MA: Arabic (Morocco), ar-GLA: Arabic, ar-SA: Arabic (Saudi Arabia), ar-EG: Arabic (Egypt), ar-KW: Arabic (Kuwait), ar-LY: Arabic (Libya), ar-JO: Arabic (Jordan), ar-AE: Arabic (UAE), ar-LVT: Arabic (Levant)
> fa-IR: Persian, bn-BD: Bengali
> ta-SG: Tamil (Singapore), ta-LK: Tamil (Sri Lanka), ta-IN: Tamil (India), ta-MY: Tamil (Malaysia)
> te-IN: Telugu, ug-NULL: Uyghur, ug-CN: Uyghur, gu-IN: Gujarati
> my-MM: Burmese, tl-PH: Tagalog, kk-KZ: Kazakh, or-IN: Odia, ne-NP: Nepali
> mn-MN: Mongolian, km-KH: Khmer, jv-ID: Javanese, lo-LA: Lao, si-LK: Sinhala
> fil-PH: Filipino, ps-AF: Pashto, pa-IN: Punjabi, kab-NULL: Kabyle
> ba-NULL: Bashkir, ks-IN: Kashmiri, tg-TJ: Tajik, su-ID: Sundanese
> mr-IN: Marathi, ky-KG: Kyrgyz, az-AZ: Azerbaijani
> ```

### DolphinAsr-base Models

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| DolphinAsr-base-onnx | Non-streaming | Multilingual | No | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-onnx) |
| DolphinAsr-base-int8-onnx | Non-streaming | Multilingual | No | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-int8-onnx) |
| DolphinAsr-base-onnx-opt | Non-streaming | Multilingual | No | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-onnx-opt) |
| DolphinAsr-base-int8-onnx-opt | Non-streaming | Multilingual | No | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-int8-onnx-opt) |

### DolphinAsr-small Models

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| DolphinAsr-small-onnx | Non-streaming | Multilingual | No | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-onnx) |
| DolphinAsr-small-int8-onnx | Non-streaming | Multilingual | No | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-int8-onnx) |
| DolphinAsr-small-onnx-opt | Non-streaming | Multilingual | No | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-onnx-opt) |
| DolphinAsr-small-int8-onnx-opt | Non-streaming | Multilingual | No | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-int8-onnx-opt) |


---

## v1.0/en/models/asr/funasr.md

# FunASR Series

### Paraformer Chinese-English Models

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| paraformer-large-zh-en-onnx-offline | Non-streaming | Chinese (zh), English (en) | No | No | [huggingface](https://huggingface.co/manyeyes/speech_paraformer-large_asr_nat-zh-cn-16k-common-vocab8404-onnx), [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-onnx-offline) |
| paraformer-large-zh-en-timestamp-onnx-offline | Non-streaming | Chinese, English | No | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-timestamp-onnx-offline) |
| paraformer-large-en-onnx-offline | Non-streaming | English | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-en-onnx-offline) |
| paraformer-large-zh-en-onnx-online | Streaming | Chinese, English | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-onnx-online) |

### Paraformer Cantonese/Chinese/English Multilingual Models

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| paraformer-large-zh-yue-en-timestamp-onnx-offline-dengcunqin-20240805 | Non-streaming | Chinese, Cantonese, English | No | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-timestamp-onnx-offline-dengcunqin-20240805) |
| paraformer-large-zh-yue-en-onnx-offline-dengcunqin-20240805 | Non-streaming | Chinese, Cantonese, English | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-onnx-offline-dengcunqin-20240805) |
| paraformer-large-zh-yue-en-onnx-online-dengcunqin-20240208 | Streaming | Chinese, Cantonese, English | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-onnx-online-dengcunqin-20240208) |

### SeACo-Paraformer Hotword Customization Model

SeACoParaformer is a next-generation non-autoregressive speech recognition model with hotword customization, proposed by Alibaba Speech Lab. Compared to the previous CLAS-based hotword customization solution, SeACoParaformer decouples the hotword module from the ASR model and performs hotword boosting via posterior probability fusion, making the boosting process visible and controllable, while significantly improving hotword recall.

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| paraformer-seaco-large-zh-timestamp-onnx-offline | Non-streaming | Chinese, supports hotword customization | No | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-seaco-large-zh-timestamp-onnx-offline) |

### SenseVoice Models

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| sensevoice-small-onnx | Non-streaming | Chinese, Cantonese, English, Japanese, Korean | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-onnx) |
| sensevoice-small-int8-onnx | Non-streaming | Chinese, Cantonese, English, Japanese, Korean | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-int8-onnx) |
| sensevoice-small-wenetspeech-yue-onnx | Non-streaming | Cantonese, Chinese, English, Japanese, Korean | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-wenetspeech-yue-onnx) |
| sensevoice-small-wenetspeech-yue-int8-onnx | Non-streaming | Cantonese, Chinese, English, Japanese, Korean | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-wenetspeech-yue-int8-onnx) |
| sensevoice-small-split-embed-onnx | Non-streaming | Chinese, Cantonese, English, Japanese, Korean | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-split-embed-onnx) |


---

## v1.0/en/models/asr/fun-asr.md

# Fun-ASR Series

> **Notes**  
> - Model background: **End-to-end speech recognition foundation model** released by Tongyi Lab. Pre-trained on tens of millions of hours of real speech data, featuring strong contextual understanding and domain adaptability  
> - Features: All models are **non-streaming**, support **punctuation**, support **timestamps**. Support low-latency real-time transcription, with recognition accuracy reaching 93% in far-field, high-noise environments  
> - Version identifier meanings:  
>   - `int8`: INT8 quantized version, smaller size, faster inference, suitable for edge deployment  
>   - `LLM`: Large model enhanced version, stronger context understanding, suppresses recognition hallucinations  
>   - `CTC`: Lightweight classic CTC architecture version, lightweight inference  
>   - `MLT`: Multilingual general-purpose version, covers 31 languages  
>   - `split-adaptor`: Version with feature adaptation module deployed separately  
> - Language and capability notes:  
>   - **Fun-ASR-Nano**: Supports Chinese, English, Japanese; 7 dialects (Wu, Cantonese, Min, Hakka, Gan, Xiang, Jin); 26 regional accents (Henan, Shanxi, Hubei, Sichuan, Chongqing, Yunnan, Guizhou, Guangdong, Guangxi, Shaanxi, Hebei, Shandong, Anhui, Tianjin, Ningxia, Liaoning, Gansu, Hunan, Heilongjiang, Jilin, Inner Mongolia, Jiangsu, Zhejiang, Fujian, Jiangxi, Hainan); additionally supports lyrics recognition and rap speech recognition  
>   - **Fun-ASR-MLT-Nano**: Supports 31 languages total: Chinese, English, Cantonese, Japanese, Korean, Vietnamese, Indonesian, Thai, Malay, Filipino, Arabic, Hindi, Bulgarian, Croatian, Czech, Danish, Dutch, Estonian, Finnish, Greek, Hungarian, Irish, Latvian, Lithuanian, Maltese, Polish, Portuguese, Romanian, Slovak, Slovenian, Swedish  
> - Domain advantages: Excellent performance in vertical fields such as education and finance, accurately recognizes domain-specific terminology, effectively suppresses hallucinations and language confusion

### Fun-ASR-Nano Models

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Fun-ASR-Nano-2512-LLM-onnx | Non-streaming | Chinese, English, Japanese; 7 dialects + 26 regional accents, lyrics/rap recognition | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-onnx) |
| Fun-ASR-Nano-2512-LLM-int8-onnx | Non-streaming | Same as above | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-int8-onnx) |
| Fun-ASR-Nano-2512-LLM-split-adaptor-onnx | Non-streaming | Same as above | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-split-adaptor-onnx) |
| Fun-ASR-Nano-2512-LLM-split-adaptor-int8-onnx | Non-streaming | Same as above | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-split-adaptor-int8-onnx) |
| Fun-ASR-Nano-2512-CTC-onnx | Non-streaming | Same as above | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-CTC-onnx) |
| Fun-ASR-Nano-2512-CTC-int8-onnx | Non-streaming | Same as above | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-CTC-int8-onnx) |

### Fun-ASR-MLT-Nano Models

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Fun-ASR-MLT-Nano-2512-onnx | Non-streaming | 31 languages | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-MLT-Nano-2512-onnx) |
| Fun-ASR-MLT-Nano-2512-int8-onnx | Non-streaming | 31 languages | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-MLT-Nano-2512-int8-onnx) |


---

## v1.0/en/models/asr/k2.md

# K2TransducerAsr Series

### Streaming Models

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| k2transducer-lstm-en-onnx-online-csukuangfj-20220903 | Streaming | English | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-lstm-en-onnx-online-csukuangfj-20220903) |
| k2transducer-lstm-zh-onnx-online-csukuangfj-20221014 | Streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-lstm-zh-onnx-online-csukuangfj-20221014) |
| k2transducer-zipformer-en-onnx-online-weijizhuang-20221202 | Streaming | English | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-en-onnx-online-weijizhuang-20221202) |
| k2transducer-zipformer-en-onnx-online-zengwei-20230517 | Streaming | English | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-en-onnx-online-zengwei-20230517) |
| k2transducer-zipformer-multi-zh-hans-onnx-online-20231212 | Streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-multi-zh-hans-onnx-online-20231212) |
| k2transducer-zipformer-ko-onnx-online-johnbamma-20240612 | Streaming | Korean | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ko-onnx-online-johnbamma-20240612) |
| k2transducer-zipformer-ctc-small-zh-onnx-online-20250401 | Streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-small-zh-onnx-online-20250401) |
| k2transducer-zipformer-large-zh-onnx-online-yuekai-20250630 | Streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-large-zh-onnx-online-yuekai-20250630) |
| k2transducer-zipformer-xlarge-zh-onnx-online-yuekai-20250630 | Streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-xlarge-zh-onnx-online-yuekai-20250630) |
| k2transducer-zipformer-ctc-large-zh-onnx-online-yuekai-20250630 | Streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-large-zh-onnx-online-yuekai-20250630) |
| k2transducer-zipformer-ctc-xlarge-zh-onnx-online-yuekai-20250630 | Streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-xlarge-zh-onnx-online-yuekai-20250630) |

### Non-streaming Models

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| k2transducer-conformer-en-onnx-offline-csukuangfj-20220513 | Non-streaming | English | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-conformer-en-onnx-offline-csukuangfj-20220513) |
| k2transducer-conformer-zh-onnx-offline-luomingshuang-20220727 | Non-streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-conformer-zh-onnx-offline-luomingshuang-20220727) |
| k2transducer-zipformer-en-onnx-offline-yfyeung-20230417 | Non-streaming | English | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-en-onnx-offline-yfyeung-20230417) |
| k2transducer-zipformer-large-en-onnx-offline-zengwei-20230516 | Non-streaming | English | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-large-en-onnx-offline-zengwei-20230516) |
| k2transducer-zipformer-small-en-onnx-offline-zengwei-20230516 | Non-streaming | English | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-small-en-onnx-offline-zengwei-20230516) |
| k2transducer-zipformer-zh-onnx-offline-wenetspeech-20230615 | Non-streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-zh-onnx-offline-wenetspeech-20230615) |
| k2transducer-zipformer-zh-onnx-offline-multi-zh-hans-20230902 | Non-streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-zh-onnx-offline-multi-zh-hans-20230902) |
| k2transducer-zipformer-zh-en-onnx-offline-20231122 | Non-streaming | Chinese, English | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-zh-en-onnx-offline-20231122) |
| k2transducer-zipformer-cantonese-onnx-offline-20240313 | Non-streaming | Cantonese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-cantonese-onnx-offline-20240313) |
| k2transducer-zipformer-th-onnx-offline-yfyeung-20240620 | Non-streaming | Thai | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-th-onnx-offline-yfyeung-20240620) |
| k2transducer-zipformer-ja-onnx-offline-reazonspeech-20240801 | Non-streaming | Japanese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ja-onnx-offline-reazonspeech-20240801) |
| k2transducer-zipformer-ru-onnx-offline-20240918 | Non-streaming | Russian | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ru-onnx-offline-20240918) |
| k2transducer-zipformer-vi-onnx-offline-20250420 | Non-streaming | Vietnamese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-vi-onnx-offline-20250420) |
| k2transducer-zipformer-ctc-zh-onnx-offline-20250703 | Non-streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-zh-onnx-offline-20250703) [github](https://github.moeyy.xyz/https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/sherpa-onnx-zipformer-ctc-zh-int8-2025-07-03.tar.bz2) |
| k2transducer-zipformer-ctc-small-zh-onnx-offline-20250716 | Non-streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-small-zh-onnx-offline-20250716) |


---

## v1.0/en/models/asr/fireredasr.md

# FireRedAsr Series

### FireRedAsr-AED Chinese-English Model (v1)

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| fireredasr-aed-large-zh-en-onnx-offline-20250124 | Non-streaming | Chinese, English | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr-aed-large-zh-en-onnx-offline-20250124) |

### FireRedAsr2-AED Chinese-English Model (v2)

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| fireredasr2-aed-large-zh-en-onnx-offline-20260212 | Non-streaming | Chinese, English | No | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-onnx-offline-20260212) |
| fireredasr2-aed-large-zh-en-int8-onnx-offline-20260212 | Non-streaming | Chinese, English | No | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-int8-onnx-offline-20260212) |
| fireredasr2-aed-large-zh-en-onnx-selfcrosskv-offline-20260212 | Non-streaming | Chinese, English | No | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-onnx-selfcrosskv-offline-20260212) |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212 | Non-streaming | Chinese, English | No | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212) |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskvstack-offline-20260212 | Non-streaming | Chinese, English | No | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskvstack-offline-20260212) |


---

## v1.0/en/models/asr/medasr.md

# MedAsr Series

> **Notes**  
> - Model architecture: Based on **Conformer**, a medical-domain speech recognition model released by Google Health  
> - Application scenarios: Suitable for radiology dictation, doctor-patient dialogue, medical transcription, etc.  
> - Supported languages: **English only** (primarily American English)  
> - Model characteristics: Pre-trained on approximately 5,000 hours of medical speech data, strong recognition of medical terminology. Performance on non-standard drug names and structured data such as dates/times may vary, suitable for fine-tuning to adapt to specific business scenarios

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| medasr-onnx | Non-streaming | English | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/medasr-onnx) |


---

## v1.0/en/models/asr/moonshine.md

# moonshine Series

### moonshine-tiny Models

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| moonshine-tiny-onnx | Non-streaming | English | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-onnx) |
| moonshine-tiny-int8-onnx | Non-streaming | English | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-int8-onnx) |
| moonshine-tiny-en-onnx | Non-streaming | English | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-en-onnx) |
| moonshine-tiny-zh-onnx | Non-streaming | Chinese | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-zh-onnx) |
| moonshine-tiny-zh-int8-onnx | Non-streaming | Chinese | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-zh-int8-onnx) |
| moonshine-tiny-vi-onnx | Non-streaming | Vietnamese | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-vi-onnx) |
| moonshine-tiny-vi-int8-onnx | Non-streaming | Vietnamese | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-vi-int8-onnx) |
| moonshine-tiny-uk-onnx | Non-streaming | Ukrainian | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-uk-onnx) |
| moonshine-tiny-uk-int8-onnx | Non-streaming | Ukrainian | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-uk-int8-onnx) |
| moonshine-tiny-ko-onnx | Non-streaming | Korean | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ko-onnx) |
| moonshine-tiny-ko-int8-onnx | Non-streaming | Korean | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ko-int8-onnx) |
| moonshine-tiny-ja-onnx | Non-streaming | Japanese | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ja-onnx) |
| moonshine-tiny-ja-int8-onnx | Non-streaming | Japanese | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ja-int8-onnx) |
| moonshine-tiny-ar-onnx | Non-streaming | Arabic | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ar-onnx) |
| moonshine-tiny-ar-int8-onnx | Non-streaming | Arabic | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ar-int8-onnx) |
| moonshine-tiny-fr-onnx | Non-streaming | French | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-fr-onnx) |
| moonshine-tiny-fr-int8-onnx | Non-streaming | French | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-fr-int8-onnx) |

### moonshine-base Models

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| moonshine-base-onnx | Non-streaming | English | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/moonshine-base-onnx) |
| moonshine-base-int8-onnx | Non-streaming | English | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/moonshine-base-int8-onnx) |
| moonshine-base-en-onnx | Non-streaming | English | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-en-onnx) |
| moonshine-base-zh-onnx | Non-streaming | Chinese | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-zh-onnx) |
| moonshine-base-zh-int8-onnx | Non-streaming | Chinese | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-zh-int8-onnx) |
| moonshine-base-vi-onnx | Non-streaming | Vietnamese | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/moonshine-base-vi-onnx) |
| moonshine-base-vi-int8-onnx | Non-streaming | Vietnamese | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-vi-int8-onnx) |
| moonshine-base-uk-onnx | Non-streaming | Ukrainian | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-uk-onnx) |
| moonshine-base-uk-int8-onnx | Non-streaming | Ukrainian | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-uk-int8-onnx) |
| moonshine-base-ko-onnx | Non-streaming | Korean | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ko-onnx) |
| moonshine-base-ko-int8-onnx | Non-streaming | Korean | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ko-int8-onnx) |
| moonshine-base-ja-onnx | Non-streaming | Japanese | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ja-onnx) |
| moonshine-base-ja-int8-onnx | Non-streaming | Japanese | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ja-int8-onnx) |
| moonshine-base-ar-onnx | Non-streaming | Arabic | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ar-onnx) |
| moonshine-base-ar-int8-onnx | Non-streaming | Arabic | Yes | No | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ar-int8-onnx) |


---

## v1.0/en/models/asr/parakeet.md

# Parakeet Series

> **General Notes**  
> - `int8` = quantized version, smaller size, faster inference  
> - `selfcrosskv` / `selfcrosskvstack` = inference optimization variants (not applicable to Parakeet series)  
> - Some models provide HuggingFace or GitHub download sources; refer to each table

## Parakeet Series

> **Notes**  
> - Model architecture: NVIDIA **FastConformer-TDT-CTC** (Hybrid architecture)  
> - Series composition:  
>   - `tdt-0.6b`: standard TDT model, 0.6B parameters, supports punctuation, capitalization, timestamps  
>   - `tdt_ctc`: CTC‑combined TDT models (110M / 0.6B parameters); the 110M English and 0.6B Japanese models support punctuation  
> - Version identifiers:  
>   - `v2`: English model, supports punctuation, capitalization, timestamps  
>   - `v3` / `multilingual`: multilingual model, supports 25 European languages, automatic language detection, punctuation, capitalization, timestamps  
> - License: v2 and v3 models use **CC-BY-4.0**; CTC models mostly use Apache License 2.0 (check each model page)  
> - Use cases: high‑throughput speech transcription, multilingual conversational AI, subtitle generation, voice analytics, etc.

### 1. Parakeet-TDT English Model (v2)

> **Detailed Features**  
> - **Supported language**: English  
> - **Punctuation & Capitalization**: outputs punctuation and correct capitalization  
> - **Timestamps**: supports accurate word‑level, character‑level, and segment‑level timestamp prediction  
> - **Long audio**: full attention allows single‑pass transcription of up to 24 minutes of audio  
> - **Architecture**: FastConformer encoder + TDT decoder, 600M parameters  
> - **Input**: 16 kHz mono‑channel .wav or .flac  
> - **Output**: text string with punctuation and capitalization  
> - **Performance**: RTFx of 3380 on the Hugging Face ASR leaderboard  
> - **Release**: 2025-05-01  
> - **License**: CC-BY-4.0, commercial and non‑commercial use allowed  

| Model Name | Type | Supported Language | Punctuation | Timestamp | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| parakeet-tdt-0.6b-v2-en-onnx | offline | English | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt-0.6b-v2-en-onnx) |
| parakeet-tdt-0.6b-v2-en-int8-onnx | offline | English | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt-0.6b-v2-en-int8-onnx) |

### 2. Parakeet-TDT Multilingual Model (v3)

> **Detailed Features**  
> - **Supported languages** (25 European languages): Bulgarian (bg), Croatian (hr), Czech (cs), Danish (da), Dutch (nl), English (en), Estonian (et), Finnish (fi), French (fr), German (de), Greek (el), Hungarian (hu), Italian (it), Latvian (lv), Lithuanian (lt), Maltese (mt), Polish (pl), Portuguese (pt), Romanian (ro), Slovak (sk), Slovenian (sl), Spanish (es), Swedish (sv), Russian (ru), Ukrainian (uk)  
> - **Automatic language detection**: no extra prompt needed, the model automatically identifies the audio language  
> - **Punctuation & Capitalization**: outputs punctuation and correct capitalization  
> - **Timestamps**: supports accurate word‑level and segment‑level timestamps  
> - **Long audio**: on A100 80GB, full attention handles up to 24 minutes; local attention handles up to 3 hours  
> - **Architecture**: FastConformer encoder + TDT decoder, 600M parameters, trained on Granary dataset (670k+ hours)  
> - **Input**: 16 kHz mono‑channel .wav or .flac  
> - **Output**: text string with punctuation and capitalization  
> - **Release**: 2025-08-14 (Hugging Face)  
> - **License**: CC-BY-4.0, commercial and non‑commercial use allowed  

| Model Name | Type | Supported Language | Punctuation | Timestamp | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| parakeet-tdt-0.6b-v3-multilingual-onnx | offline | 25 European languages (see above) | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt-0.6b-v3-multilingual-onnx) |
| parakeet-tdt-0.6b-v3-multilingual-int8-onnx | offline | 25 European languages (see above) | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt-0.6b-v3-multilingual-int8-onnx) |

### 3. Parakeet-TDT-CTC English Model (110M)

> **Detailed Features**  
> - **Model development**: jointly developed by NVIDIA NeMo and Suno.ai teams  
> - **Architecture**: Hybrid FastConformer-TDT-CTC, approx. **114M parameters**  
> - **Supported language**: English  
> - **Punctuation & Capitalization**: ✅ supports Punctuations and Capitalizations (PnC)  
> - **Timestamps**: default TDT decoder outputs timestamps; switching to CTC decoder outputs text only (no timestamps)  
> - **Long audio**: full attention, up to **20 minutes** in a single pass  
> - **Performance**: average RTFx ~5300 on Hugging Face ASR evaluation sets (A100)  
> - **Input**: 16 kHz mono‑channel .wav or .flac  
> - **Output**: text string with punctuation and capitalization  
> - **License**: Apache License 2.0  

| Model Name | Type | Supported Language | Punctuation | Timestamp | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| parakeet-tdt_ctc-110m-en-onnx | offline | English | Yes | Yes (TDT decoder) | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt_ctc-110m-en-onnx) |
| parakeet-tdt_ctc-110m-en-int8-onnx | offline | English | Yes | Yes (TDT decoder) | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt_ctc-110m-en-int8-onnx) |

> **Note**: ONNX exported versions may default to the TDT decoder, hence timestamps are supported. To switch to CTC decoder, refer to the native NeMo model usage instructions.

### 4. Parakeet-TDT-CTC Japanese Model (0.6B)

> **Detailed Features**  
> - **Model development**: developed by NVIDIA NeMo team  
> - **Architecture**: Hybrid FastConformer-TDT-CTC, **approx. 0.6B (600M) parameters**  
>   - FastConformer: 8× depthwise‑separable convolution downsampling for faster inference  
>   - TDT (Token‑and‑Duration Transducer): jointly predicts tokens and durations, skipping most blank predictions (duration up to 4 frames for this model), significantly speeding up inference  
> - **Supported language**: Japanese  
> - **Punctuation**: ✅ supports punctuation  
> - **Timestamps**: default TDT decoder outputs timestamps  
> - **Long audio**: not explicitly specified  
> - **Input**: 16 kHz mono‑channel .wav or .flac  
> - **Output**: text string with punctuation  
> - **License**: Apache License 2.0  

| Model Name | Type | Supported Language | Punctuation | Timestamp | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| parakeet-tdt_ctc-0.6b-ja-onnx | offline | Japanese | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt_ctc-0.6b-ja-onnx) |
| parakeet-tdt_ctc-0.6b-ja-int8-onnx | offline | Japanese | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt_ctc-0.6b-ja-int8-onnx) |

---

> **Additional Notes**  
> - Summary of punctuation & timestamp support:  
>   - ✅ **v2 English model**: punctuation, capitalization, timestamps  
>   - ✅ **v3 multilingual model**: punctuation, capitalization, timestamps  
>   - ✅ **CTC 110M English model**: punctuation, capitalization; timestamps via TDT decoder  
>   - ✅ **CTC 0.6B Japanese model**: punctuation; timestamps via TDT decoder  
> - All ONNX models are suitable for edge and cloud deployment; int8 versions are smaller and faster  
> - Licenses: v2/v3 recommend CC-BY-4.0; CTC models mostly Apache 2.0 – check each model page  
> - The Japanese model’s TDT duration of 4 frames provides significant inference speedup; see NVIDIA official documentation for detailed performance metrics

---

## v1.0/en/models/asr/wenet.md

# WeNet Series

### Streaming Models

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| wenet-u2pp-conformer-aishell-onnx-online-20210601 | Streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-aishell-onnx-online-20210601) |
| wenet-u2pp-conformer-wenetspeech-onnx-online-20220506 | Streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-onnx-online-20220506) |
| wenet-u2pp-conformer-wenetspeech-int8-onnx-online-20220506 | Streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-int8-onnx-online-20220506) |
| wenet-u2pp-conformer-gigaspeech-onnx-online-20210728 | Streaming | English | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-gigaspeech-onnx-online-20210728) |

### Non-streaming Models

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| wenet-u2pp-conformer-aishell-onnx-offline-20210601 | Non-streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-aishell-onnx-offline-20210601) |
| wenet-u2pp-conformer-wenetspeech-onnx-offline-20220506 | Non-streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-onnx-offline-20220506) |
| wenet-u2pp-conformer-wenetspeech-int8-onnx-offline-20220506 | Non-streaming | Chinese | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-int8-onnx-offline-20220506) |
| wenet-u2pp-conformer-gigaspeech-onnx-offline-20210728 | Non-streaming | English | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-gigaspeech-onnx-offline-20210728) |


---

## v1.0/en/models/asr/whisper.md

# Whisper Series

> **Notes**  
> 1. Models with `-kv` suffix have KV Cache inference acceleration enabled  
> 2. All models support **punctuation** and **timestamps**. Output paragraph-level timestamps by default, can enable word-level timestamps via parameters  
> 3. Language coverage:  
>    - Standard multilingual versions (tiny/small/medium/large-v1/large-v2): Support **99 languages** (including Chinese, Cantonese, English, Japanese, Korean, Russian, Arabic, Vietnamese, Ukrainian, and other major world languages)  
>    - large-v3 / large-v3-turbo series: Extend low-resource languages beyond the 99, total approximately **106 languages**. New additions include **Zulu (zu), Maori (mi), Swahili (sw), Hausa (ha)**, etc., with significantly improved language identification  

### whisper-tiny Models

| Model Name | Type | Languages | Punctuation | Timestamps | KV | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| whisper-tiny-onnx | Non-streaming | 99 multilingual | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-onnx) |
| whisper-tiny-onnx-kv | Non-streaming | 99 multilingual | Yes | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-onnx-kv) |
| whisper-tiny-en-onnx | Non-streaming | English | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-en-onnx) |

### whisper-small Models

| Model Name | Type | Languages | Punctuation | Timestamps | KV | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| whisper-small-onnx | Non-streaming | 99 multilingual | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-onnx) |
| whisper-small-en-onnx | Non-streaming | English | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-en-onnx) |
| whisper-small-cantonese-onnx | Non-streaming | Cantonese, Chinese, English | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-cantonese-onnx) |

### whisper-medium Models

| Model Name | Type | Languages | Punctuation | Timestamps | KV | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| whisper-medium-onnx | Non-streaming | 99 multilingual | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-onnx) |
| whisper-medium-int8-onnx-kv | Non-streaming | 99 multilingual | Yes | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-int8-onnx-kv) |
| whisper-medium-en-onnx | Non-streaming | English | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-en-onnx) |
| whisper-medium-yue-onnx-kv | Non-streaming | Cantonese | Yes | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-yue-onnx-kv) |
| whisper-medium-yue-int8-onnx-kv | Non-streaming | Cantonese | Yes | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-yue-int8-onnx-kv) |

### whisper-large Models

| Model Name | Type | Languages | Punctuation | Timestamps | KV | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| whisper-large-v1-onnx | Non-streaming | 99 multilingual | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v1-onnx) |
| whisper-large-v2-onnx | Non-streaming | 99 multilingual | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v2-onnx) |
| whisper-large-v3-onnx | Non-streaming | ~106 multilingual | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-onnx) |
| whisper-large-v3-turbo-onnx | Non-streaming | ~106 multilingual | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-onnx) |
| whisper-large-v3-turbo-zh-onnx | Non-streaming | Chinese | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-zh-onnx) |
| whisper-large-v3-turbo-zh-int8-onnx-kv-belle-20241016 | Non-streaming | Chinese | Yes | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-zh-int8-onnx-kv-belle-20241016) |

### Distil-Whisper Models

| Model Name | Type | Languages | Punctuation | Timestamps | KV | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| distil-whisper-small-en-onnx | Non-streaming | English | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-small-en-onnx) |
| distil-whisper-medium-en-onnx | Non-streaming | English | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-medium-en-onnx) |
| distil-whisper-large-v2-en-onnx | Non-streaming | English | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v2-en-onnx) |
| distil-whisper-large-v3-en-onnx | Non-streaming | English | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v3-en-onnx) |
| distil-whipser-large-v3.5-en-onnx | Non-streaming | English | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whipser-large-v3.5-en-onnx) |
| distil-whisper-large-v2-multi-hans-onnx | Non-streaming | Chinese (compatible with 99 languages) | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v2-multi-hans-onnx) |
| distil-whisper-small-cantonese-onnx-alvanlii-20240404 | Non-streaming | Cantonese, Chinese, English | Yes | Yes | No | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-small-cantonese-onnx-alvanlii-20240404) |


---

## v1.0/en/models/vad/index.md

# Voice Activity Detection (VAD) Models

VAD (Voice Activity Detection) is used to detect human speech segments in audio streams, reducing ASR computation and improving real-time performance.


---

## v1.0/en/models/vad/fsmn-vad.md

# FSMN-VAD Series

> **Notes**  
> - Model background: An industrial‑grade Voice Activity Detection (VAD) model developed by Alibaba DAMO Academy. Built on the FSMN‑Monophone architecture, it is a 16k general‑purpose Chinese VAD model, natively compatible with the FunASR framework and Paraformer‑large for long‑audio scenarios.
> - Features: Leverages the FSMN structure to fully utilise contextual information, providing fast inference and controllable latency. Uses Monophone fine‑grained modelling units to improve feature discrimination and reduce recognition errors. Supports various inputs: audio files, URLs, binary streams, audio arrays, wav.scp lists, etc. Allows customisation of tail silence duration, voice/noise thresholds, and other parameters. Fully compatible with Linux‑x86_64, macOS, and Windows. Can be freely combined with ASR and punctuation modules.
> - Open source repository: https://github.com/modelscope/FunASR

### Model List

| Model Name | Description | Download Link |
| ---- | ---- | ---- |
| alifsmnvad-onnx | General standard version, well‑balanced performance, default recommendation | [modelscope](https://modelscope.cn/models/manyeyes/alifsmnvad-onnx) |


---

## v1.0/en/models/vad/silero-vad.md

# Silero-VAD Series

> **Notes**  
> - Model background: A deep learning‑based VAD model released by the open‑source community `snakers4`. A mainstream open‑source VAD solution, designed for 16kHz audio input.
> - Features: Applies pre‑processing steps (pre‑emphasis, framing, windowing) to the audio, then learns voice features through a neural network to accurately distinguish speech from non‑speech segments. Adaptively adjusts detection thresholds based on the noise environment, performing particularly well in noisy scenes. Iterative versions continuously improve noise robustness.
> - Open source repository: https://github.com/snakers4/silero-vad

### Model List

| Model Name | Description | Download Link |
| ---- | ---- | ---- |
| silero-vad-onnx | Base version, suitable for general‑purpose scenarios | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-onnx) |
| silero-vad-v5-onnx | V5 iterative version, optimised for noisy environments | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-v5-onnx) |
| silero-vad-v6-onnx | V6 latest version, best detection performance in noisy scenes | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-v6-onnx) |


---

## v1.0/en/models/punc/index.md

# Punctuation Restoration Models

Punctuation models are used for post-processing ASR results to restore punctuation in text, improving readability.


---

## v1.0/en/models/punc/firered-punc.md

# FireRedPunc Series

> **Notes**  
> - Model background: FireRedPunc is an independent punctuation prediction module within the **FireRedASR2S** integrated speech system. Built on the BERT architecture, it is designed for ASR post‑processing scenarios and supports Chinese‑English bilingual punctuation restoration.
> - Features: The model achieves SOTA performance in the industry, with an **average F1 score of 78.90%**. It performs excellently across multiple domains for both Chinese and English datasets, adapting to various offline and real‑time transcription tasks.
> - Open source repository: https://github.com/FireRedTeam/FireRedASR2S

### Model List
| Model Name | Description | Download Link |
| ---- | ---- | ---- |
| FireRedPunc-zh-en-onnx | General Chinese‑English punctuation prediction model, excellent overall accuracy, SOTA‑level performance | [modelscope](https://modelscope.cn/models/manyeyes/FireRedPunc-zh-en-onnx) |


---

## v1.0/en/models/punc/ct-transformer-punc.md

# CT-Transformer Series

> **Notes**  
> - Model background: Punctuation model open-sourced by Alibaba DAMO Academy, built on the **Controllable Time-delay Transformer (CT-Transformer)** architecture. Designed primarily for post-processing of ASR results to predict and restore punctuation in text.
> - Features: The model consists of three parts: **Embedding, Encoder, Predictor**. Embedding fuses word vectors and positional vectors; Encoder supports various network structures such as Transformer and Conformer; Predictor predicts punctuation type per token. To address the issues of high inference latency and frequent punctuation flickering in traditional Transformers, CT-Transformer achieves **controllable inference latency** while maintaining accuracy, making it suitable for real‑time business scenarios. Test results on general domain business datasets: Precision 53.8%, Recall 60.0%, F1 score 56.5%. Total training samples: approximately 33 million.
> - Open source repository: https://github.com/modelscope/FunASR

**Terminology explanations**
- `int8`: INT8 quantised version, reduces model size and speeds up inference, with a small loss in accuracy
- `mge`: Targeted quantisation optimisation for core layers (MatMul, Gather, Embed). Further reduces model size, improves loading and inference speed; accuracy may degrade slightly

### Model List
| Model Name | Vocabulary Size | Description | Download Link |
| ---- | ---- | ---- | ---- |
| alicttransformerpunc-zh-en-onnx | 272,727 | Standard original version, general Chinese‑English punctuation model | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-onnx) |
| alicttransformerpunc-zh-en-int8-onnx | 272,727 | Standard version INT8 quantised, smaller size, faster inference | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-int8-onnx) |
| alicttransformerpunc-zh-en-mge-int8-onnx | 272,727 | Standard version + core‑layer MGE optimisation + INT8 quantisation, further improved loading and inference speed, slightly lower accuracy | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-mge-int8-onnx) |
| alicttransformerpunc-large-zh-en-onnx | 471,067 | Large-parameter original version, higher punctuation recognition accuracy | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-onnx) |
| alicttransformerpunc-large-zh-en-int8-onnx | 471,067 | Large-parameter version INT8 quantised, balancing accuracy and inference speed | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-int8-onnx) |
| alicttransformerpunc-large-zh-en-mge-int8-onnx | 471,067 | Large-parameter version + core‑layer MGE optimisation + INT8 quantisation, best overall runtime efficiency, slightly lower accuracy | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-mge-int8-onnx) |


---

## v1.0/en/models/tts/index.md

# Tts

This section is under construction. Content will be added soon.


---

## v1.0/en/models/tts/kokoro.md

# Kokoro

TODO: Add content for kokoro.


---

## v1.0/en/models/tts/vits.md

# Vits

TODO: Add content for vits.


---

## v1.0/en/models/tts/indextts.md

# Indextts

TODO: Add content for indextts.


---

## v1.0/en/models/audio-sep/index.md

# Audio Sep

This section is under construction. Content will be added soon.


---

## v1.0/en/models/audio-sep/mossformer.md

# Mossformer

TODO: Add content for mossformer.


---

## v1.0/en/models/audio-sep/splitter-voiceprint-sep.md

# Splitter Voiceprint Sep

TODO: Add content for splitter-voiceprint-sep.


---

