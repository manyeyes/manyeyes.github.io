# cohere-transcribe Series

> **Notes**
>
> - License: Apache 2.0, available for commercial use and redistribution
> - Base model sourced from [`CohereLabs/cohere-transcribe-03-2026`](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026), a **2B-parameter Conformer encoder + lightweight Transformer decoder**. Trained from scratch on 500k hours of high-quality audio-text pairs. It delivers up to 3× higher inference throughput compared to other ASR models of similar parameter size.
> - Input preprocessing: Audio is automatically resampled to 16kHz; multi-channel stereo inputs are averaged to mono and converted to log-Mel spectrograms. Long audio is automatically chunked and reassembled, supporting hour-long transcription tasks.
> - Output features: **Punctuation is enabled by default and can be disabled via parameter**.
> - Limitations: **No built-in timestamps, speaker diarization, or automatic language detection**. The target language must be manually specified before inference. Performance is unstable on code-switched audio. Background noise may be hallucinated as transcribed text; VAD (Voice Activity Detection) is recommended as a preprocessing step.
> - Model performance: Achieves an overall average WER of 5.42% on the official ASR leaderboard. It delivers strong accuracy for meeting recordings and long-form audio, outperforming mainstream open-source ASR models such as Whisper Large v3.
> - Ecosystem support: Natively compatible with Transformers, vLLM, MLX, Rust and WebGPU. Deployable on web browsers, Apple Silicon, servers and other platforms.

Full supported language & locale mapping:

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

### cohere-transcribe Models

| Model Name                          | Type          | Supported Languages | Punctuation | Timestamps | Download Link                                                                           |
| ----------------------------------- | ------------- | ------------------- | ----------- | ---------- | --------------------------------------------------------------------------------------- |
| cohere-transcribe-03-2026-int8-onnx | Non-streaming | 14 languages        | Toggleable  | No         | [modelscope](https://modelscope.cn/models/manyeyes/cohere-transcribe-03-2026-int8-onnx) |
