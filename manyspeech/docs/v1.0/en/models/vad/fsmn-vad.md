# FSMN-VAD Series

> **Notes**  
> - Model background: An industrial‑grade Voice Activity Detection (VAD) model developed by Alibaba DAMO Academy. Built on the FSMN‑Monophone architecture, it is a 16k general‑purpose Chinese VAD model, natively compatible with the FunASR framework and Paraformer‑large for long‑audio scenarios.
> - Features: Leverages the FSMN structure to fully utilise contextual information, providing fast inference and controllable latency. Uses Monophone fine‑grained modelling units to improve feature discrimination and reduce recognition errors. Supports various inputs: audio files, URLs, binary streams, audio arrays, wav.scp lists, etc. Allows customisation of tail silence duration, voice/noise thresholds, and other parameters. Fully compatible with Linux‑x86_64, macOS, and Windows. Can be freely combined with ASR and punctuation modules.
> - Open source repository: https://github.com/modelscope/FunASR

### Model List

| Model Name | Description | Download Link |
| ---- | ---- | ---- |
| alifsmnvad-onnx | General standard version, well‑balanced performance, default recommendation | [modelscope](https://modelscope.cn/models/manyeyes/alifsmnvad-onnx) |
