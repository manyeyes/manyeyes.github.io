# VAD Models

## FSMN-VAD Series

> **Notes**
>
> - Model background: An industrial‑grade Voice Activity Detection (VAD) model developed by Alibaba DAMO Academy. Built on the FSMN‑Monophone architecture, it is a 16k general‑purpose Chinese VAD model, natively compatible with the FunASR framework and Paraformer‑large for long‑audio scenarios.
> - Features: Leverages the FSMN structure to fully utilise contextual information, providing fast inference and controllable latency. Uses Monophone fine‑grained modelling units to improve feature discrimination and reduce recognition errors. Supports various inputs: audio files, URLs, binary streams, audio arrays, wav.scp lists, etc. Allows customisation of tail silence duration, voice/noise thresholds, and other parameters. Fully compatible with Linux‑x86\_64, macOS, and Windows. Can be freely combined with ASR and punctuation modules.
> - Open source repository: [https://github.com/modelscope/FunASR](https://github.com/modelscope/FunASR)

### Model List

| Model Name      | Description                                                                 | Download Link                                                       |
| --------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| alifsmnvad-onnx | General standard version, well‑balanced performance, default recommendation | [modelscope](https://modelscope.cn/models/manyeyes/alifsmnvad-onnx) |

***

## Silero-VAD Series

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
