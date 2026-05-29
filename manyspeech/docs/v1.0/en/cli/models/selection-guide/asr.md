# ASR Models
## DolphinAsr Series

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

## FireRedAsr Series

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

## Fun-ASR Series

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

## FunASR Series

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

## K2TransducerAsr Series

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

## MedAsr Series

> **Notes**  
> - Model architecture: Based on **Conformer**, a medical-domain speech recognition model released by Google Health  
> - Application scenarios: Suitable for radiology dictation, doctor-patient dialogue, medical transcription, etc.  
> - Supported languages: **English only** (primarily American English)  
> - Model characteristics: Pre-trained on approximately 5,000 hours of medical speech data, strong recognition of medical terminology. Performance on non-standard drug names and structured data such as dates/times may vary, suitable for fine-tuning to adapt to specific business scenarios

| Model Name | Type | Languages | Punctuation | Timestamps | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| medasr-onnx | Non-streaming | English | No | No | [modelscope](https://www.modelscope.cn/models/manyeyes/medasr-onnx) |

---

## moonshine Series

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

## WeNet Series

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

## Whisper Series

> **Notes**  
> 1. Models with `-kv` suffix have KV Cache inference acceleration enabled  
> 2. All models support **punctuation** and **timestamps**. Output paragraph-level timestamps by default, can enable word-level timestamps via parameters  
> 3. Language coverage:  
>    - Standard multilingual versions (tiny/small/medium/large-v1/large-v2): Support **99 languages** (including Chinese, Cantonese, English, Japanese, Korean, Russian, Arabic, Vietnamese, Ukrainian, and other major world languages)  
>    - large-v3 / large-v3-turbo series: Extend low-resource languages beyond the 99, total approximately **106 languages**. New additions include **Zulu (zu), Maori (mi), Swahili (sw), Hausa (ha)**, etc., with significantly improved language identification  
>    - Full language list and codes:
> ```
> af(Afrikaans), am(Amharic), ar(Arabic), as(Assamese), az(Azerbaijani), 
> ba(Bashkir), be(Belarusian), bg(Bulgarian), bn(Bengali), bo(Tibetan), br(Breton), bs(Bosnian), 
> ca(Catalan), cs(Czech), cy(Welsh), 
> da(Danish), de(German), 
> el(Greek), en(English), es(Spanish), et(Estonian), eu(Basque), 
> fa(Persian), fi(Finnish), fo(Faroese), fr(French), 
> ga(Irish), gl(Galician), gu(Gujarati), 
> ha(Hausa), haw(Hawaiian), he(Hebrew), hi(Hindi), hr(Croatian), hu(Hungarian), hy(Armenian), 
> id(Indonesian), ig(Igbo), is(Icelandic), it(Italian), 
> ja(Japanese), jv(Javanese), 
> ka(Georgian), kk(Kazakh), km(Khmer), kn(Kannada), ko(Korean), ku(Kurdish), ky(Kyrgyz), 
> la(Latin), lb(Luxembourgish), lg(Ganda), lt(Lithuanian), lv(Latvian), 
> mai(Maithili), mg(Malagasy), mi(Maori), mk(Macedonian), ml(Malayalam), mn(Mongolian), mr(Marathi), ms(Malay), mt(Maltese), my(Burmese), 
> ne(Nepali), nl(Dutch), no(Norwegian), nso(Northern Sotho), ny(Chichewa), 
> oc(Occitan), om(Oromo), or(Odia), 
> pa(Punjabi), pl(Polish), ps(Pashto), pt(Portuguese), 
> ro(Romanian), ru(Russian), rw(Kinyarwanda), 
> sa(Sanskrit), sd(Sindhi), si(Sinhala), sk(Slovak), sl(Slovenian), sm(Samoan), sn(Shona), so(Somali), sq(Albanian), sr(Serbian), ss(Swati), st(Southern Sotho), su(Sundanese), sv(Swedish), sw(Swahili), 
> ta(Tamil), te(Telugu), tg(Tajik), th(Thai), ti(Tigrinya), tk(Turkmen), tl(Tagalog), tn(Tswana), to(Tongan), tr(Turkish), ts(Tsonga), tt(Tatar), tw(Twi), 
> ug(Uyghur), uk(Ukrainian), ur(Urdu), uz(Uzbek), 
> ve(Venda), vi(Vietnamese), vo(Volapük), 
> wa(Walloon), wo(Wolof), 
> xh(Xhosa), 
> yi(Yiddish), yo(Yoruba), 
> zh(Chinese), yue(Cantonese), zu(Zulu)
> ```
>    - Language code short form:
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


> **General Notes**  
> - `int8` = quantized version, smaller size, faster speed  
> - `kv` / `selfcrosskv` / `selfcrosskvstack` / `opt` = inference optimization versions  
> - Some models provide HuggingFace or GitHub sources; see each table
