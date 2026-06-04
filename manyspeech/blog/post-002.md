# Fun-ASR-Nano-2512：千万小时真实语音训练的800M参数语音识别大模型

## 一、项目背景与研发团队

Fun-ASR-Nano-2512 系列是由 **通义实验室（Tongyi Lab）** 于 **2025 年 12 月** 正式发布的端到端语音识别轻量大模型。该系列基于数千万小时真实语音数据训练而成，具备强大的上下文理解能力和行业适应性。相关技术细节在论文 **《Fun-ASR Technical Report》**（arXiv:2509.12508，2025）中系统阐述，作者包括 Keyu An、Yanni Chen、Chong Deng、Changfeng Gao、Zhifu Gao、Bo Gong、Xiangang Li、Yabin Li、Xiang Lv、Yunjie Ji 等。

## 二、模型整体概述

该系列包含两个核心版本，参数量均为 **8 亿（800M）**，轻量高效：

| 模型名称                      | 参数量  | 支持语言范围               | 核心特色                        |
| :------------------------ | :--- | :------------------- | :-------------------------- |
| **Fun-ASR-Nano-2512**     | 800M | 中文（7大方言+26种口音）、英语、日语 | 深度优化中文方言、口音、音乐背景歌词识别、说唱语音识别 |
| **Fun-ASR-MLT-Nano-2512** | 800M | 31 种语言               | 多语言自由切换与混合识别                |

全系列支持低延迟实时转录、标点符号恢复、时间戳输出，并通过 ONNX 格式提供多种优化变体，适配云端 GPU 与边缘 CPU 部署。

## 三、核心架构与核心能力

### 核心架构

- 端到端语音识别架构，基于 Encoder-Decoder + CTC/LLM 分支
- 提供 LLM 增强版（更强上下文、抑制幻觉）和 CTC 轻量版（速度优先）
- ONNX 导出支持 INT8 量化，体积压缩约 70%，显存可降至 2.5GB

### 核心能力（全系列通用）

| 能力               | 说明                                |
| :--------------- | :-------------------------------- |
| **远场高噪识别**       | 会议室、车载、工业现场准确率提升至 **93%**         |
| **标点恢复**         | 自动添加句号、逗号等，提升可读性                  |
| **时间戳**          | 输出词级/句级时间戳，便于字幕生成                 |
| **逆文本正则化 (ITN)** | 口语数字/日期转书面格式（如“十二点三十分” → “12:30”） |
| **热词增强**         | 支持指定热词提升专业术语识别率                   |
| **多语种混合**        | MLT 版支持 31 种语言自动识别与混合内容           |

## 四、核心性能数据（行业基准测试）

在多个开源基准和行业测试集上，Fun-ASR-Nano-2512（中英日版）表现领先：

| 测试集                                | 字错误率 (WER %) |
| :--------------------------------- | :----------- |
| AIShell1                           | 1.80         |
| Fleurs-zh                          | 2.56         |
| Librispeech-clean                  | 1.76         |
| 中文方言测试集                            | 28.18        |
| 远场测试集                              | 5.79         |
| 行业数据集平均（近场/远场/复杂背景/英文/方言/口音/歌词/说唱） | 16.72        |

> 对比：中文方言测试集上 Whisper-large-v3 为 66.14%，GLM-ASR-Nano 为 54.21%；远场测试集上 Paraformer v2 为 9.55%，Kimi-Audio 为 10.95%。

## 五、已导出的 ONNX 模型介绍

全系列提供 ONNX 格式，支持 INT8 量化与分离式适配器部署，**均非流式**（可通过分块实现准实时），**均内置标点恢复与时间戳**。

### Fun-ASR-Nano（中英日专精版）ONNX 模型

| 模型名称                                          | INT8量化 | 部署形式 |
| :-------------------------------------------- | :----: | :--: |
| Fun-ASR-Nano-2512-LLM-onnx                    |    ❌   |  一体式 |
| Fun-ASR-Nano-2512-LLM-int8-onnx               |    ✅   |  一体式 |
| Fun-ASR-Nano-2512-LLM-split-adaptor-onnx      |    ❌   |  分离式 |
| Fun-ASR-Nano-2512-LLM-split-adaptor-int8-onnx |    ✅   |  分离式 |
| Fun-ASR-Nano-2512-CTC-onnx                    |    ❌   |  一体式 |
| Fun-ASR-Nano-2512-CTC-int8-onnx               |    ✅   |  一体式 |

### Fun-ASR-MLT-Nano（31 语通用版）ONNX 模型

| 模型名称                            | INT8量化 |
| :------------------------------ | :----: |
| Fun-ASR-MLT-Nano-2512-onnx      |    ❌   |
| Fun-ASR-MLT-Nano-2512-int8-onnx |    ✅   |

> 模型下载：在 [ModelScope manyeyes 空间](https://www.modelscope.cn/models/manyeyes) 搜索对应名称。

## 六、推理部署

### 1. 官方推理（PyTorch 原版）

使用通义实验室官方发布的 PyTorch 模型（非 ONNX），需配合 `funasr` 库和 `remote_code`。

```python
from funasr import AutoModel

# 加载官方 PyTorch 模型
model = AutoModel(
    model="FunAudioLLM/Fun-ASR-Nano-2512",  # 或 FunAudioLLM/Fun-ASR-MLT-Nano-2512
    trust_remote_code=True,
    remote_code="./model.py",  # 需从 GitHub 仓库获取 model.py
    device="cuda:0"  # 或 "cpu"
)

res = model.generate(
    input=["path/to/audio.mp3"],
    language="中文",          # MLT 版可省略或设为 "auto"
    itn=True,                 # 逆文本正则化
    hotwords=["开放时间"],     # 热词列表
    cache={}                  # 可选缓存
)
print(res[0]["text"])
```

> **注意**：官方模型支持完整的标点恢复、时间戳（需在 `generate` 中设置 `output_timestamp=True`）、ITN 和热词功能。`remote_code` 需指向从 [Fun-ASR 仓库](https://github.com/FunAudioLLM/Fun-ASR) 下载的 `model.py`。

### 2. 极简推理：ManySpeech-CLI 命令行（基于 ONNX）

`manyspeech-cli` 封装了 ONNX 模型的下载、音频处理和输出格式化，无需编写代码即可快速体验。

安装 `manyspeech-cli`：[安装指南](https://manyeyes.github.io/manyspeech/cli/getting-started/installation.html)

#### 识别本地音频文件

```cmd
# 基本用法（生成字幕 SRT）
manyspeech asr -t offline -m chunk --format srt --threads 2 -i file -files "D:\audio\lecture.wav" --model Fun-ASR-Nano-2512-LLM-int8-onnx

# 指定语言、热词
manyspeech asr -t offline -m chunk -i file -files "meeting.wav" --model Fun-ASR-Nano-2512-LLM-int8-onnx --language 中文 --hotwords "深度学习,通义实验室"

# 输出 JSON 格式（含时间戳）
manyspeech asr -t offline -m chunk --format json -i file -files "audio.wav" --model Fun-ASR-MLT-Nano-2512-int8-onnx
```

#### 麦克风实时识别

```cmd
# 准实时模式（分块处理）
manyspeech asr -t offline -m chunk -i mic --model Fun-ASR-Nano-2512-LLM-int8-onnx

# 2pass 模式（更低延迟：先用 CTC 实时响应，后台 LLM 修正）
manyspeech asr -t 2pass -i mic --model Fun-ASR-Nano-2512-CTC-int8-onnx --model2 Fun-ASR-Nano-2512-LLM-int8-onnx
```

> **参数说明**：`-i file` 必须配合 `-files "音频路径"`；`-i mic` 无需文件参数。首次运行自动下载 ONNX 模型并缓存。
> 如果使用的是绿色版，启动程序后，无需输入主命令 manyspeech, 直接以子命令开始即可，如：asr -t offline -m chunk -i mic --model Fun-ASR-Nano-2512-LLM-int8-onnx

## 七、开源获取渠道

- **官方 PyTorch 模型**：[ModelScope](https://www.modelscope.cn/models/FunAudioLLM/Fun-ASR-Nano-2512) | [Hugging Face](https://huggingface.co/FunAudioLLM/Fun-ASR-Nano-2512)
- **ONNX 模型仓库**：[manyeyes 空间](https://www.modelscope.cn/models/manyeyes)（包含所有 ONNX 变体）
- **在线体验**：[ModelScope Space](https://modelscope.cn/studios/FunAudioLLM/Fun-ASR-Nano) | [Hugging Face Space](https://huggingface.co/spaces/FunAudioLLM/Fun-ASR-Nano)
- **项目主页**：[FunAudioLLM/funasr](https://funaudiollm.github.io/funasr)
- **论文**：[arXiv:2509.12508](https://arxiv.org/abs/2509.12508)

## 八、致谢与版权

感谢通义实验室研究团队的开源贡献。Fun-ASR 系列基于 Apache 2.0 许可证开源，可免费用于学术及商业用途。欢迎在论文中引用：

```bibtex
@article{an2025fun,
  title={Fun-ASR Technical Report},
  author={An, Keyu and Chen, Yanni and Deng, Chong and Gao, Changfeng and Gao, Zhifu and Gong, Bo and Li, Xiangang and Li, Yabin and Lv, Xiang and Ji, Yunjie and others},
  journal={arXiv preprint arXiv:2509.12508},
  year={2025}
}
```

> **说明**：官方推理使用原始 PyTorch 模型，需依赖 `funasr` 库和 `remote_code`；ManySpeech-CLI 基于 ONNX 模型，提供更轻量便捷的体验。两者均可实现高精度语音识别。
