# Silero-VAD Series

> **Notes**
>
> - Model background: A deep learning‑based VAD model released by the open‑source community `snakers4`. A mainstream open‑source VAD solution, designed for 16kHz audio input.
> - Features: Applies pre‑processing steps (pre‑emphasis, framing, windowing) to the audio, then learns voice features through a neural network to accurately distinguish speech from non‑speech segments. Adaptively adjusts detection thresholds based on the noise environment, performing particularly well in noisy scenes. Iterative versions continuously improve noise robustness.
> - Open source repository: [https://github.com/snakers4/silero-vad](https://github.com/snakers4/silero-vad)

### Model List

| Model Name         | Description                                                   | Download Link                                                          |
| ------------------ | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| silero-vad-onnx    | Base version, suitable for general‑purpose scenarios          | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-onnx)    |
| silero-vad-v5-onnx | V5 iterative version, optimised for noisy environments        | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-v5-onnx) |
| silero-vad-v6-onnx | V6 latest version, best detection performance in noisy scenes | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-v6-onnx) |
