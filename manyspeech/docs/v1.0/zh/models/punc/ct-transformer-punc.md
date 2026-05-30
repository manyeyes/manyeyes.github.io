# CT-Transformer 系列

> **说明**
> - 模型背景：由阿里巴巴达摩院开源的标点模型，基于 **Controllable Time-delay Transformer（CT-Transformer）** 架构打造，主要用于语音识别结果后处理，完成文本标点预测与恢复。
> - 功能特性：模型由 **Embedding、Encoder、Predictor** 三部分构成：Embedding 融合词向量与位置向量；Encoder 支持 Transformer、Conformer 等多种网络结构；Predictor 负责逐 Token 预测标点类型。针对传统 Transformer 推理时延高、标点结果反复刷新的问题，CT-Transformer 在保证精度不变的前提下实现**可控推理时延**，适配实时业务场景。基于通用领域业务数据集测试：精确率 53.8%、召回率 60.0%、F1 值 56.5%；训练样本总量约 3300 万条。
> - 开源仓库：https://github.com/modelscope/FunASR

**名词释义**
- `int8`：INT8 量化版本，压缩模型体积、加快推理速度，存在小幅精度损耗
- `mge`：针对 MatMul、Gather、Embed 核心层专项量化优化，进一步缩减模型体积，提升加载与推理速度，精度可能略有下降

### 模型列表
| 模型名称 | 词汇量 | 说明 | 下载地址 |
| ---- | ---- | ---- | ---- |
| alicttransformerpunc-zh-en-onnx | 272727 | 标准原版，中英文通用标点模型 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-onnx) |
| alicttransformerpunc-zh-en-int8-onnx | 272727 | 标准版 INT8 量化，体积更小、推理提速 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-int8-onnx) |
| alicttransformerpunc-zh-en-mge-int8-onnx | 272727 | 标准版 + 核心层MGE优化 + INT8量化，加载、推理速度进一步提升，精度略有下降 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-mge-int8-onnx) |
| alicttransformerpunc-large-zh-en-onnx | 471067 | 大参数量原版，标点识别精度更高 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-onnx) |
| alicttransformerpunc-large-zh-en-int8-onnx | 471067 | 大参数量版 INT8 量化，兼顾精度与推理速度 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-int8-onnx) |
| alicttransformerpunc-large-zh-en-mge-int8-onnx | 471067 | 大参数量版 + 核心层MGE优化 + INT8量化，综合运行效率最优，精度略有下降 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-mge-int8-onnx) |
