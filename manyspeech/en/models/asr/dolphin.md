# DolphinAsr Series

> **Notes**
>
> - License: Apache 2.0
> - `opt`: Optimized version, moves audio feature extraction module out of the model to reduce inference overhead
> - Full language and region code mapping:
>
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

| Model Name                    | Type          | Languages    | Punctuation | Timestamps | Download Link                                                                         |
| ----------------------------- | ------------- | ------------ | ----------- | ---------- | ------------------------------------------------------------------------------------- |
| DolphinAsr-base-onnx          | Non-streaming | Multilingual | No          | Yes        | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-onnx)          |
| DolphinAsr-base-int8-onnx     | Non-streaming | Multilingual | No          | Yes        | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-int8-onnx)     |
| DolphinAsr-base-onnx-opt      | Non-streaming | Multilingual | No          | Yes        | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-onnx-opt)      |
| DolphinAsr-base-int8-onnx-opt | Non-streaming | Multilingual | No          | Yes        | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-int8-onnx-opt) |

### DolphinAsr-small Models

| Model Name                     | Type          | Languages    | Punctuation | Timestamps | Download Link                                                                          |
| ------------------------------ | ------------- | ------------ | ----------- | ---------- | -------------------------------------------------------------------------------------- |
| DolphinAsr-small-onnx          | Non-streaming | Multilingual | No          | Yes        | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-onnx)          |
| DolphinAsr-small-int8-onnx     | Non-streaming | Multilingual | No          | Yes        | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-int8-onnx)     |
| DolphinAsr-small-onnx-opt      | Non-streaming | Multilingual | No          | Yes        | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-onnx-opt)      |
| DolphinAsr-small-int8-onnx-opt | Non-streaming | Multilingual | No          | Yes        | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-int8-onnx-opt) |
