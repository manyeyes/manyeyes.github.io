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
