# FireRedASR2-AED：轻量高精度中英双语语音识别模型

## 一、模型概述

FireRedASR2-AED是小红书FireRedTeam推出的第二代工业级语音识别模型，属于一体化系统FireRedASR2S的核心ASR模块。作为FireRedASR2系列的两个变体之一，AED版本采用**Attention-based Encoder-Decoder（AED）** 架构，参数量约1B+，是FireRedASR2-LLM（8B+参数）大模型的轻量级替代方案。

FireRedASR2在FireRedASR第一代基础上全面提升了识别精度，设计目标是满足不同场景对卓越性能和最优效率的双重需求。

## 二、核心架构设计

根据第一代FireRedASR-AED的技术文档（arXiv:2501.14350），FireRedASR2-AED的核心架构如下：

### 2.1 编码器-解码器结构

模型采用**Conformer编码器 + Transformer解码器**的经典组合：

- **Conformer编码器**：通过多头自注意力机制与卷积模块的有机结合，兼顾语音信号的全局依赖关系和局部声学特征的精细化建模
- **Transformer解码器**：通过交叉注意力机制实现高效的序列转换，支持自回归解码

### 2.2 子采样策略

编码器前端通过**两层卷积（步长2、卷积核大小3）** 对输入语音进行子采样，将时间分辨率从10ms降低至40ms，在保留关键声学信息的同时有效降低计算复杂度。

### 2.3 分词策略

采用**混合分词策略**：中文使用字符级分词，英文使用Byte Pair Encoding（BPE）分词，**总词表量7,832**，天然支持中英文混合输入的识别场景。

### 2.4 输入长度限制（官方说明）

- FireRedASR2-AED：支持最长**60秒**的音频输入。超过60秒可能引发幻觉问题，超过200秒将触发位置编码错误。
- FireRedASR2-LLM：支持最长**40秒**音频输入（更长输入未测试）。

## 三、训练数据与策略

根据第一代FireRedASR-AED的技术文档（arXiv:2501.14350），其训练数据如下：

- **普通话语料**：约**70,000小时**专业转录的高质量语音数据，以人工标注为主
- **英语数据**：约**11,000小时**补充训练数据，保障双语识别能力

训练采用渐进正则化策略，逐步引入Dropout和SpecAugment，确保收敛稳定性。

## 四、核心性能与对比优势

### 4.1 官方评估总览

FireRedASR2在**24个公开测试集**上进行了全面评估，涵盖普通话（4个）、方言/口音（19个）和歌唱（1个）。官方评测结果如下：

| 模型                  | 全场景平均CER(%) | 普通话平均CER(%) | 方言平均CER(%) |
| ------------------- | ----------- | ----------- | ---------- |
| **FireRedASR2-LLM** | **9.67**    | **2.89**    | **11.55**  |
| **FireRedASR2-AED** | **9.80**    | **3.05**    | **11.67**  |
| Doubao-ASR          | 12.98       | 3.69        | 15.39      |
| Qwen3-ASR-1.7B      | 10.12       | 3.76        | 11.85      |
| Fun-ASR             | 10.92       | 4.16        | 12.76      |
| Fun-ASR-Nano-2512   | -           | 4.55        | 15.07      |

### 4.2 普通话测试集（4个）详细结果

| ID | 测试集        | FireRedASR2-LLM | FireRedASR2-AED | Doubao-ASR | Qwen3-ASR | Fun-ASR |
| -- | ---------- | --------------- | --------------- | ---------- | --------- | ------- |
| 1  | aishell1   | 0.64            | **0.57**        | 1.52       | 1.48      | 1.64    |
| 2  | aishell2   | 2.15            | 2.51            | 2.77       | 2.71      | 2.38    |
| 3  | ws-net     | 4.44            | 4.57            | 5.73       | 4.97      | 6.85    |
| 4  | ws-meeting | 4.32            | 4.53            | 4.74       | 5.88      | 5.78    |

### 4.3 方言/口音测试集（19个）详细结果

> 注：ws = WenetSpeech，md = MagicData，conv = 对话，daily = 日常

| ID | 测试集（方言/口音）                | FRASR2-LLM | FRASR2-AED | Doubao-ASR | Qwen3-ASR | Fun-ASR |
| -- | ------------------------- | ---------- | ---------- | ---------- | --------- | ------- |
| 5  | kespeech（8种方言综合）          | 3.08       | 3.60       | 5.38       | 5.10      | 5.36    |
| 6  | ws-yue-short（粤语短）         | 5.14       | 5.15       | 10.51      | 5.82      | 7.34    |
| 7  | ws-yue-long（粤语长）          | 8.71       | 8.54       | 11.39      | 8.85      | 10.14   |
| 8  | ws-chuan-easy（四川话简单）      | 10.90      | 10.60      | 11.33      | 11.99     | 12.46   |
| 9  | ws-chuan-hard（四川话困难）      | 20.71      | 21.35      | 20.77      | 21.63     | 22.49   |
| 10 | md-heavy                  | 7.42       | 7.43       | 7.69       | 8.02      | 9.13    |
| 11 | md-yue-conv（粤语对话）         | 12.23      | 11.66      | 26.25      | 9.76      | 33.71   |
| 12 | md-yue-daily（粤语日常）        | 3.61       | 3.35       | 12.82      | 3.66      | 2.69    |
| 13 | md-yue-vehicle（粤语车载）      | 4.50       | 4.83       | 8.66       | 4.28      | 6.00    |
| 14 | md-chuan-conv（四川话对话）      | 13.18      | 13.07      | 11.77      | 14.35     | 14.01   |
| 15 | md-chuan-daily（四川话日常）     | 4.90       | 5.17       | 3.90       | 4.93      | 3.98    |
| 16 | md-shanghai-conv（上海话对话）   | 28.70      | 27.02      | 45.15      | 29.77     | 25.49   |
| 17 | md-shanghai-daily（上海话日常）  | 24.94      | 24.18      | 44.06      | 23.93     | 12.55   |
| 18 | md-wu（吴语）                 | 7.15       | 7.14       | 7.70       | 7.57      | 10.63   |
| 19 | md-zhengzhou-conv（郑州话对话）  | 10.20      | 10.65      | 9.83       | 9.55      | 10.85   |
| 20 | md-zhengzhou-daily（郑州话日常） | 5.80       | 6.26       | 5.77       | 5.88      | 6.29    |
| 21 | md-wuhan（武汉话）             | 9.60       | 10.81      | 9.94       | 10.22     | 4.34    |
| 22 | md-tianjin（天津话）           | 15.45      | 15.30      | 15.79      | 16.16     | 19.27   |
| 23 | md-changsha（长沙话）          | 23.18      | 25.64      | 23.76      | 23.70     | 25.66   |

### 4.4 歌唱测试集（1个）

| ID | 测试集            | FRASR2-LLM | FRASR2-AED | Doubao-ASR | Qwen3-ASR | Fun-ASR |
| -- | -------------- | ---------- | ---------- | ---------- | --------- | ------- |
| 24 | opencpop（中文歌声） | **1.12**   | **1.17**   | 4.36       | 2.57      | 3.05    |

### 4.5 支持的方言/口音列表（官方完整清单）

FireRedASR2-AED支持**20+种中国方言/口音**，官方列出的具体包括：

> 粤语（香港与广东）、四川话、上海话、吴语、闽南语、安徽话、福建话、甘肃话、贵州话、河北话、河南话、湖北话、湖南话、江西话、辽宁话、宁夏话、陕西话、山西话、山东话、天津话、云南话等。

## 五、ONNX模型系列与推理部署(社区部署方案)

### 5.1 社区贡献的ONNX模型（manyeyes）

为满足C#生态及跨平台部署需求，社区开发者 **manyeyes** 将FireRedASR2-AED导出为ONNX格式。这些ONNX模型并非由FireRedTeam官方导出，而是由manyeyes社区贡献的第三方版本，已在ModelScope平台公开发布。所有模型均支持字级时间戳输出，且经过INT8量化优化，显著降低部署门槛。

**完整ONNX模型列表**（来源：[https://modelscope.cn/profile/manyeyes?tab=model）：](https://modelscope.cn/profile/manyeyes?tab=model）：)

| 模型名称                                                                    | 精度   | 大小     | 时间戳 | 特点                     |
| ----------------------------------------------------------------------- | ---- | ------ | --- | ---------------------- |
| fireredasr2-aed-large-zh-en-onnx-offline-20260212                       | FP32 | 4.73GB | 支持  | 基础ONNX版本               |
| fireredasr2-aed-large-zh-en-int8-onnx-offline-20260212                  | INT8 | 1.76GB | 支持  | INT8量化，体积减小约62%        |
| fireredasr2-aed-large-zh-en-onnx-selfcrosskv-offline-20260212           | FP32 | 4.73GB | 支持  | KV缓存优化                 |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212      | INT8 | 1.76GB | 支持  | INT8量化 + KV缓存优化        |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskvstack-offline-20260212 | INT8 | 1.76GB | 支持  | INT8量化 + KV缓存优化 + 参数合并 |

### 5.2 manyspeech-cli 一键命令行工具

manyspeech-cli是一款由manyeyes社区开发的免安装本地命令行语音识别工具，支持本地音频文件识别、麦克风实时流式识别、SRT字幕生成和JSON等多格式结果输出。manyspeech-cli已集成上述ONNX模型，用户可通过以下命令一键完成离线识别与字幕生成：

```bash
manyspeech asr -t offline --model fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212 -m chunk --format srt --threads 2 -i file -f "/path/to/0.wav"
```

实际运行效果（31秒音频，输出SRT字幕）：

```
0
00:00:00,490 -> 00:00:03,820
每当新年的钟声敲响的时候。

1
00:00:03,820 -> 00:00:06,850
我总会闭起眼睛，静静的许愿。

2
00:00:06,850 -> 00:00:10,980
有时也会给自己定下新年的奋斗目标。

3
00:00:10,990 -> 00:00:14,280
还有时听到新年的钟声时。

4
00:00:14,280 -> 00:00:17,130
我的心里会有一种遗憾的感觉。

5
00:00:17,200 -> 00:00:20,370
感慨时光过得如此匆匆。

6
00:00:20,370 -> 00:00:24,420
而自己往年的愿望还没达成。尽管如此。

7
00:00:24,570 -> 00:00:28,230
经过岁月的洗礼，我已长大成熟。

8
00:00:28,230 -> 00:00:31,120
学会了勇敢地面对现实的一切。
```

## 六、快速上手指南（官方部署方案）

> 以下内容基于FireRedASR2S官方代码库（GitHub: FireRedTeam/FireRedASR2S），使用官方PyTorch模型。

### 6.1 环境准备

```bash
# 创建Python环境（要求Python 3.10）
conda create --name fireredasr2s python=3.10
conda activate fireredasr2s

# 克隆官方仓库
git clone https://github.com/FireRedTeam/FireRedASR2S.git
cd FireRedASR2S

# 安装依赖
pip install -r requirements.txt

# 设置环境变量
export PATH=$PWD/fireredasr2s/:$PATH
export PYTHONPATH=$PWD/:$PYTHONPATH
```

### 6.2 模型下载（官方PyTorch模型）

**国内用户（推荐ModelScope）**：

```bash
modelscope download --model xukaituo/FireRedASR2-AED --local_dir ./pretrained_models/FireRedASR2-AED
```

**国际用户（Hugging Face）**：

```bash
huggingface-cli download FireRedTeam/FireRedASR2-AED --local-dir ./pretrained_models/FireRedASR2-AED
```

### 6.3 音频格式要求

官方模型仅支持**16kHz、16-bit、单声道、PCM WAV**格式。如需转换，请使用FFmpeg：

```bash
ffmpeg -i input.mp3 -ar 16000 -ac 1 -acodec pcm_s16le -f wav output.wav
```

### 6.4 基础使用：ASR模块（Python API）

仅调用ASR模块进行语音识别，支持字级时间戳输出。

```python
from fireredasr2s.fireredasr2 import FireRedAsr2, FireRedAsr2Config

# 配置ASR参数
asr_config = FireRedAsr2Config(
    use_gpu=True,           # 是否使用GPU
    use_half=False,         # 是否使用半精度
    beam_size=3,            # 束搜索宽度
    nbest=1,                # 返回的最佳候选数
    decode_max_len=0,       # 最大解码长度（0=自动）
    softmax_smoothing=1.25, # Softmax平滑系数
    aed_length_penalty=0.6, # 长度惩罚系数
    eos_penalty=1.0,        # 结束符惩罚
    return_timestamp=True   # 返回字级时间戳
)

# 加载模型
model = FireRedAsr2.from_pretrained("aed", "./pretrained_models/FireRedASR2-AED", asr_config)

# 执行识别
results = model.transcribe(["utt1", "utt2"], ["test1.wav", "test2.wav"])
for res in results:
    print(f"文本: {res['text']}")
    print(f"置信度: {res['confidence']}")
    print(f"字级时间戳: {res['timestamp']}")  # 格式: [('你', 0.42, 0.66), ...]
```

### 6.5 高级使用：一体化系统（含VAD+LID+Punc）

自动完成语音活动检测、语种识别、语音识别和标点预测的全流程。

```python
from fireredasr2s import FireRedAsr2System, FireRedAsr2SystemConfig

# 使用默认配置初始化（自动加载VAD、LID、ASR、Punc模块）
asr_system_config = FireRedAsr2SystemConfig() 
asr_system = FireRedAsr2System(asr_system_config)

# 处理单个音频文件
result = asr_system.process("test.wav")

print(f"完整文本: {result['text']}")          # 带标点的文本
print(f"句子级信息: {result['sentences']}")   # 每句起止时间、语种、置信度
print(f"VAD片段: {result['vad_segments_ms']}") # 语音片段起止时间（毫秒）
print(f"字级时间戳: {result['words']}")       # 每个字的起止时间
```

### 6.6 命令行工具（官方CLI）

FireRedASR2S提供了命令行工具 `fireredasr2s-cli`，支持批量处理。

```bash
# 处理单个或多个音频文件，输出JSONL格式结果
fireredasr2s-cli --wav_paths "hello_zh.wav" "hello_en.wav" --outdir output

# 查看结果
cat output/result.jsonl
```

输出示例：

```json
{"uttid": "hello_zh", "text": "你好世界。", "sentences": [{"start_ms": 440, "end_ms": 1820, "text": "你好世界。", "asr_confidence": 0.868, "lang": "zh mandarin", "lang_confidence": 0.999}], "vad_segments_ms": [[440, 1820]], "dur_s": 2.32, "words": [{"start_ms": 540, "end_ms": 700, "text": "你"}, {"start_ms": 700, "end_ms": 1100, "text": "好"}, {"start_ms": 1100, "end_ms": 1300, "text": "世"}, {"start_ms": 1300, "end_ms": 1765, "text": "界"}], "wav_path": "assets/hello_zh.wav"}
```

### 6.7 TensorRT-LLM加速

FireRedASR2-AED已支持TensorRT-LLM推理加速。在AISHELL-1测试集上，单张H20 GPU实现**12.7倍**于PyTorch基线的速度提升。

## 七、开源与获取渠道

- **开源协议**：Apache-2.0
- **代码仓库**：[https://github.com/FireRedTeam/FireRedASR2S](https://github.com/FireRedTeam/FireRedASR2S)
- **技术论文**：[https://arxiv.org/abs/2603.10420](https://arxiv.org/abs/2603.10420)
- **在线Demo**：[https://huggingface.co/spaces/FireRedTeam/FireRedASR](https://huggingface.co/spaces/FireRedTeam/FireRedASR)
- **官方模型（PyTorch）** ：ModelScope搜索 `xukaituo/FireRedASR2-AED` | Hugging Face: `FireRedTeam/FireRedASR2-AED`
- **社区ONNX模型（manyeyes）** ：ModelScope平台搜索 `manyeyes` | 项目主页：[https://modelscope.cn/profile/manyeyes?tab=model](https://modelscope.cn/profile/manyeyes?tab=model)
- **manyspeech-cli工具**：[https://modelscope.cn/models/manyeyes/manyspeech-cli](https://modelscope.cn/models/manyeyes/manyspeech-cli)

## 八、适用场景

| 场景      | 推荐理由                  |
| ------- | --------------------- |
| 实时语音字幕  | 支持字级时间戳 + 流式VAD       |
| 语音搜索/指令 | 中英混输 + 20+方言          |
| 会议录音转写  | 歌声/音乐过滤（mVAD）         |
| 边缘端部署   | 1B+轻量参数 + INT8量化      |
| 歌唱歌词识别  | opencpop测试集CER仅1.17%  |
| 离线字幕生成  | manyspeech-cli一键SRT输出 |
