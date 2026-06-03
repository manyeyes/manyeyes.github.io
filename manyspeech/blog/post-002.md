# Fun-ASR-Nano-2512：千万小时真实语音训练的800M参数语音识别大模型

## 模型背景

Fun-ASR-Nano-2512 是由 **通义实验室（Tongyi Lab）** 于 **2025 年 12 月** 正式发布的端到端语音识别大模型。该模型是 Fun-ASR 系列的核心成员之一，基于数千万小时的真实语音数据训练而成，具备强大的上下文理解能力和行业适应性。它支持低延迟实时转录，并针对中文方言、口音以及音乐背景下的歌词识别等复杂场景进行了深度优化。

## 作者与团队

Fun-ASR-Nano-2512 由 **通义实验室（Tongyi Lab）** 的研究团队开发。相关技术细节在论文 **《Fun-ASR Technical Report》**（arXiv:2509.12508，2025）中进行了系统阐述，作者包括 Keyu An、Yanni Chen、Chong Deng、Changfeng Gao、Zhifu Gao、Bo Gong、Xiangang Li、Yabin Li、Xiang Lv、Yunjie Ji 等。

## 核心特性

| 特性类别         | 具体能力                                                              |
| :----------- | :---------------------------------------------------------------- |
| **参数规模**     | **8 亿（800M）**，轻量高效                                                |
| **支持语言**     | 中文、英语、日语（中文覆盖 7 大方言 + 26 种区域口音）                                   |
| **远场高噪识别**   | 远距离拾音、高噪声场景（会议室、车载、工业现场）准确率提升至 **93%**                            |
| **方言与口音**    | 吴语、粤语、闽语、客家话、赣语、湘语、晋语等 7 大方言；河南、陕西、湖北、四川、重庆、云南、贵州、广东、广西等 26 种区域口音 |
| **多语言混合**    | 支持中、英、日及各自口音的自由切换与混合识别                                            |
| **音乐背景歌词识别** | 在音乐干扰下准确识别歌词内容                                                    |
| **实时转录**     | 支持低延迟实时语音转录                                                       |
| **行业定制**     | 适配教育、金融等垂直领域，准确识别专业术语，有效减少“幻觉”生成和语种混淆                             |

## 性能评估

在多个开源基准和行业测试集上，Fun-ASR-Nano-2512 展现了领先的性能。例如：

- **AIShell1**：字错误率（WER）1.80%
- **Fleurs-zh**：WER 2.56%
- **Librispeech-clean**：WER 1.76%
- **中文方言测试集**：WER 28.18%，显著优于 Whisper-large-v3（66.14%）和 GLM-ASR-Nano（54.21%）
- **远场测试集**：WER 5.79%，优于 Paraformer v2（9.55%）和 Kimi-Audio（10.95%）

> 详细对比数据可参见原始 README 中的性能表格。

## 模型系列与变体

| 模型名称                      | 参数   | 支持语言                                            |
| :------------------------ | :--- | :---------------------------------------------- |
| **Fun-ASR-Nano-2512**     | 800M | 中文（含方言/口音）、英语、日语                                |
| **Fun-ASR-MLT-Nano-2512** | 800M | 31 种语言（含中、英、粤、日、韩、越南、印尼、泰、马来、菲律宾、阿拉伯、印地及多数欧洲语言） |
| **Fun-ASR**（7.7B）         | 7.7B | 未开源，性能最优（平均 WER 12.70%）                         |

## 使用方式

### 环境安装

```bash
git clone https://github.com/FunAudioLLM/Fun-ASR.git
cd Fun-ASR
pip install -r requirements.txt
```

### 推理示例（funasr 方式）

```python
from funasr import AutoModel

model = AutoModel(
    model="FunAudioLLM/Fun-ASR-Nano-2512",
    trust_remote_code=True,
    remote_code="./model.py",
    device="cuda:0"
)

res = model.generate(
    input=["path/to/audio.mp3"],
    language="中文",
    itn=True
)
print(res[0]["text"])
```

### 直接推理（自定义模型类）

```python
from model import FunASRNano

m, kwargs = FunASRNano.from_pretrained(model="FunAudioLLM/Fun-ASR-Nano-2512", device="cuda:0")
m.eval()
res = m.inference(data_in=["path/to/audio.mp3"], **kwargs)
print(res[0][0]["text"])
```

## 可用资源

- **模型仓库**：[ModelScope](https://www.modelscope.cn/models/FunAudioLLM/Fun-ASR-Nano-2512) | [Hugging Face](https://huggingface.co/FunAudioLLM/Fun-ASR-Nano-2512)
- **在线体验**：[ModelScope Space](https://modelscope.cn/studios/FunAudioLLM/Fun-ASR-Nano) | [Hugging Face Space](https://huggingface.co/spaces/FunAudioLLM/Fun-ASR-Nano)
- **项目主页**：[FunAudioLLM/funasr](https://funaudiollm.github.io/funasr)
- **论文**：[arXiv:2509.12508](https://arxiv.org/abs/2509.12508)

## 总结

Fun-ASR-Nano-2512 以仅 **800M 参数** 的轻量体量，实现了对中文方言、口音、多语言混合、远场噪声及音乐背景等复杂场景的高精度识别。其开源、低延迟、可定制的特性，使其成为教育、金融、车载、会议等行业的理想语音识别基座模型。未来版本还将支持时间戳、说话人日志和模型训练等功能。
