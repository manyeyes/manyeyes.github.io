# cohere-transcribe: 2B-Parameter High-Performance Multilingual Speech Recognition Model

## 1. Project Background & Research Team

cohere-transcribe (`cohere-transcribe-03-2026`) is a dedicated end-to-end Automatic Speech Recognition (ASR) model released by **Cohere and Cohere Labs** on **March 26, 2026**. It is open-sourced under the **Apache 2.0 license**, permitting commercial use, modification and redistribution. The model is trained from scratch purely for speech-to-text tasks. After release, it topped the HuggingFace Open ASR leaderboard, achieving leading recognition accuracy on real-world spoken scenarios such as meetings, podcasts and long recordings, while delivering excellent inference throughput. It is designed for production-grade offline speech transcription.

The Cohere Labs team has long been dedicated to large language models and speech technologies. cohere-transcribe marks Cohere’s first open-source speech model. Positioned as a **specialized ASR model**, it is not fine-tuned from an existing large language model. Its training objective focuses on reducing Word Error Rate (WER) while taking engineering deployment efficiency into account.

## 2. Model Overview & Language Capabilities

The model has a total of **2 billion (2B)** parameters and natively supports **14 languages**, covering Europe, Asia-Pacific and the Middle East:

- Europe: English, French, German, Italian, Spanish, Portuguese, Greek, Dutch, Polish
- Asia-Pacific: Mandarin Chinese, Japanese, Korean, Vietnamese
- Middle East: Arabic

> Full list of supported languages and locale codes:

```
zh-CN: Mandarin Chinese
en-US: English (US), en-GB: English (UK)
fr-FR: French (France)
de-DE: German (Germany)
it-IT: Italian (Italy)
es-ES: Spanish (Spain)
pt-PT: Portuguese (Portugal)
el-GR: Greek (Greece)
nl-NL: Dutch (Netherlands)
pl-PL: Polish (Poland)
ja-JP: Japanese
ko-KR: Korean
vi-VN: Vietnamese
ar-GLA: Arabic, ar-MA: Arabic (Morocco), ar-SA: Arabic (Saudi Arabia), ar-EG: Arabic (Egypt), ar-KW: Arabic (Kuwait), ar-LY: Arabic (Libya), ar-JO: Arabic (Jordan), ar-AE: Arabic (UAE), ar-LVT: Arabic (Levant)
```

**Officially Stated Boundaries of Capabilities (Important)**

- Punctuation: The model outputs text with built-in punctuation; punctuation can be toggled on/off via inference parameters.
- Timestamps & Speaker Diarization: **The native model does not output word/segment timestamps and does not support speaker diarization**. Such features need to be implemented separately in upper-layer applications if required.
- Language Detection: **There is no built-in automatic language identification**. The target language must be manually specified before inference, and recognition stability degrades for code-switching mixed-language audio.
- Audio Limitation: Single file upload limit is 25 MB. It has built-in long audio chunking to support transcription of hour-long recordings.
- Deployment Variants: Official PyTorch weights are provided. A community third-party INT8 quantized ONNX version is available for edge CPU and offline GPU inference (unofficial).

**Use Cases**: Podcast transcription, meeting minutes, long audio archive, multilingual course subtitles, interview transcription.

## 3. Core Architecture & Capabilities

### 3.1 Conformer Encoder + Lightweight Transformer Decoder Architecture

cohere-transcribe adopts an **Encoder-Decoder end-to-end ASR architecture**:

1. **Conformer Encoder**: Accounts for most model parameters. It extracts robust acoustic features from raw waveforms, combining advantages of CNN and Transformer to adapt to varying speaking speeds, accents and acoustic environments.
2. **Lightweight Transformer Decoder**: Autoregressively generates text tokens. Its streamlined design reduces computational overhead during decoding.
3. Training Objective: Standard supervised cross-entropy loss. **Trained from scratch**, it directly maps speech waveforms to text.

Audio preprocessing workflow: Raw audio is automatically resampled to 16 kHz. Multi-channel stereo is averaged into mono channel and converted to log-Mel spectrogram as model input. Built-in long-audio chunking automatically splits audio exceeding segment limits and concatenates complete text after inference, natively supporting transcription of hour-long recordings.

### 3.2 Core Capability Matrix

| Capability                   | Description                                                                                                                                                                                                                             |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Multilingual Recognition** | 14 languages covering mainstream languages in Europe, Asia and the Middle East                                                                                                                                                          |
| **Punctuation Restoration**  | Punctuation output enabled by default; can be disabled via parameters                                                                                                                                                                   |
| **Long Audio Transcription** | Automatic chunking + text reassembly, supports hour-long recordings                                                                                                                                                                     |
| **Inference Efficiency**     | Among models of equivalent parameter size, real-time factor can reach up to 3× that of comparable models                                                                                                                                |
| **Limitations**              | No automatic language detection, no native timestamps, no speaker diarization; silence/background noise may trigger text hallucinations. VAD (Voice Activity Detection) preprocessing is strongly recommended for production deployment |

## 4. Training Data & Training Strategy

### 4.1 Training Data Scale

The model is trained from scratch on a training set containing **500,000 hours of high-quality curated audio-text paired data**, rigorously cleaned and filtered with priority placed on data quality. Synthetic data including noise mixing, speed perturbation and accent augmentation is added to improve robustness in real-world environments.

> Note: Official documentation does not disclose detailed breakdowns of data composition, pseudo-labeling or TTS synthetic data. No extra descriptions of data not mentioned in the model card are added.

### 4.2 Training Strategy

A **single-stage supervised training scheme** is adopted with standard cross-entropy loss for token prediction, focusing on optimizing transcription accuracy. The model design balances inference performance, lowering autoregressive decoding compute cost while preserving high recognition accuracy to achieve high-throughput offline transcription.

## 5. Core Performance Metrics

### 5.1 HuggingFace Open ASR Leaderboard Benchmark (2026.03.26)

The model achieves an overall **WER of 5.42%** on English benchmark sets and tops the HuggingFace Open ASR leaderboard, outperforming mainstream dedicated ASR models including Whisper Large v3, ElevenLabs Scribe v2 and Qwen3-ASR-1.7B.

| Model             | Overall WER | AMI Meeting Set | Earnings22 Long Financial Call | Gigaspeech Podcast |
| :---------------- | :---------: | :-------------: | :----------------------------: | :----------------: |
| Cohere Transcribe |     5.42    |       8.15      |              10.84             |        9.33        |
| Whisper Large v3  |     7.44    |      15.95      |              11.29             |        10.02       |

> AMI: Multi-party meeting recordings; Earnings22: Long-duration earnings conference calls representing long audio scenarios; Gigaspeech: Real spoken podcast audio.
> Note: The 5.42% WER value is for the **English leaderboard benchmark**. For other languages (Mandarin, Japanese, Arabic, etc.), the official release only states solid performance without publishing complete public cross-model benchmark tables. No fabricated WER values for other languages are included.

### 5.2 Summary of Cross-Model Comparison

✅ Strengths

1. High inference throughput at the same parameter scale, leading English accuracy on real spoken scenarios such as meetings, long recordings and podcasts.
2. Covers 14 commercially useful languages; Apache 2.0 license with no commercial restrictions.
3. Built-in automatic long audio chunking, suitable for offline archiving of long recordings.

⚠️ Weaknesses

1. Lacks automatic language detection; target language must be manually specified.
2. The model **does not output word/segment timestamps and does not support speaker diarization**. Subtitle and speaker attribution functions must be implemented via upper-layer components.
3. Silence and background noise may lead to text hallucinations; VAD preprocessing is required.
4. Mixed-language recognition performance is unstable; best results are achieved with single-language input.

## 6. Inference & Deployment

### 6.1 Official Native Deployment (PyTorch)

Natively built on HuggingFace `transformers` library, supporting offline GPU inference on single machines and high-performance serving with vLLM. Native support for MLX, Rust and WebGPU ecosystems allows execution on Apple Silicon and browser WebGPU environments.

> Reminder: HuggingFace weights are gated; login and license acceptance are required before downloading.

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

### 6.2 Community Deployment: ONNX Quantized Version (ManySpeech-CLI)

Community members exported an INT8 quantized ONNX model based on official weights: `cohere-transcribe-03-2026-int8-onnx`, hosted in the manyeyes ModelScope repository.

- Quantization benefit: Greatly reduced VRAM footprint, compatible with CPU devices.
- Inference mode: Non-streaming inference, combined with VAD chunking for near real-time processing.
- CLI quick invocation example:

```cmd
manyspeech asr -t offline -m chunk --format txt --threads 4 -i file -files "meeting.wav" --model cohere-transcribe-03-2026-int8-onnx --language zh
```

> Model file list: encoder.int8.onnx, decoder.int8.onnx, asr.yaml, conf.json, tokens.txt
> Important notice: The ONNX quantized model is a **third-party community export and not officially released by Cohere**.

## 7. Open Source Resources

| Resource                                    | Link                                                                                                                                                                                                                                                                                                               |
| :------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Official Model Repository (HF Mirror)       | \[[https://huggingface.co/CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026)]\([https://hf-mirror.com/CohereLabs/cohere-transcribe-03-2026](https://hf-mirror.com/CohereLabs/cohere-transcribe-03-2026))                                                           |
| Community ONNX Quantized Model (ModelScope) | \[[https://modelscope.cn/models/manyeyes/cohere-transcribe-03-2026-int8-onnx](https://modelscope.cn/models/manyeyes/cohere-transcribe-03-2026-int8-onnx)]\([https://modelscope.cn/models/manyeyes/cohere-transcribe-03-2026-int8-onnx](https://modelscope.cn/models/manyeyes/cohere-transcribe-03-2026-int8-onnx)) |
| Cohere Official Tech Blog                   | \[[https://cohere.com/blog/transcribe](https://cohere.com/blog/transcribe)]\([https://cohere.com/blog/transcribe](https://cohere.com/blog/transcribe))                                                                                                                                                             |
| HuggingFace Online Demo                     | \[[https://huggingface.co/spaces/CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/spaces/CohereLabs/cohere-transcribe-03-2026)]\([https://huggingface.co/spaces/CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/spaces/CohereLabs/cohere-transcribe-03-2026))                             |

## 8. Copyright

cohere-transcribe is open-sourced by the Cohere Labs team under the **Apache 2.0 license**. It can be freely used, modified and redistributed for academic research and commercial products. BibTeX citation:

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

## 9. Citation Statement

The training scale of **500,000 hours of human-curated audio-text paired data** for the cohere-transcribe-03-2026 model was publicly announced by the Cohere research team upon official release. This parameter is **not documented in the original Cohere official blog post** but is formally recorded and verified in authoritative industry technical reviews.

The training dataset is augmented with synthetic noise ranging from 0–30 dB SNR to improve environmental robustness. Detailed dataset composition, language-hour distribution, and data source proportions are not officially disclosed by Cohere.

### Reference

1. AI Wiki. 2026. Cohere Transcribe. Retrieved September 24, 2026 from [https://aiwiki.ai/wiki/cohere\_transcribe](https://aiwiki.ai/wiki/cohere_transcribe)

### BibTeX

```bibtex
@online{aiwiki2026cohere,
  title={Cohere Transcribe},
  author={{AI Wiki}},
  year={2026},
  url={[https://aiwiki.ai/wiki/cohere_transcribe](https://aiwiki.ai/wiki/cohere_transcribe)},
  urldate={2026-09-24}
}
```

> **Note**: The official release is PyTorch weights. The community ONNX quantized version is exported by third parties and suitable for offline deployment on low-compute devices. The model itself only performs speech-to-text conversion. Timestamps, speaker diarization and automatic language detection must be implemented separately in upper-layer applications.
