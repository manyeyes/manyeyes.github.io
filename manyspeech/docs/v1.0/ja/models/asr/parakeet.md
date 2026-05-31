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