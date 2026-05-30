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
