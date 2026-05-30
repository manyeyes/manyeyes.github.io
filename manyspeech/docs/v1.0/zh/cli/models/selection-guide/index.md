# 模型选型指南

面对不断更新的模型列表，记不住具体名字没关系。本文教你**看懂每个模型的关键指标**，然后根据自己的需求去匹配——语言、实时性、硬件、时间戳……筛一圈，能用的模型就那几个。

> 📌 所有模型都是 ONNX 格式，在 `manyspeech` 中首次使用时会自动下载。

## 一、ASR 语音识别模型
### 1. 六个关键指标：看懂模型，就会敲命令

每个模型表格里都有这几列。弄明白它们，你就知道该选什么、命令怎么写。

| 指标 | 取值 | 含义 | 命令行参数 | 怎么用这个指标 |
|------|------|------|--------------|----------------|
| **类型** | `流式` / `非流式` | 能不能实时出字 | `-t online` / `-t offline` | 麦克风选 `online`，文件选 `offline` |
| **支持语种** | 中文、英文、粤语、多语言... | 模型擅长什么语言 | 用 `--model` 指定 | 越匹配越准 |
| **标点** | `是` / `否` | 输出带不带标点 | 不重要，因为有 `--punc` 可恢复 | 忽略这个指标，程序会自动加标点 |
| **时间戳** | `是` / `否` | 带不带时间信息 | `--format srt` / `--format vtt` | 要做字幕必须选“是” |
| **KV** | `✅` / `❌` | 有没有推理加速 | 自动生效 | 优先选 `✅`，解码快 20%~50% |
| **精度后缀** | `int8` / `fp32` | 是不是量化版 | `--accuracy int8` | 选 `int8`，体积小、速度快 |

**标点为什么可以忽略？**  （中英文场景）
- 因为不管模型自带标点与否，`manyspeech` 默认都会调用标点恢复模型（`--punc`）给输出加上标点。你不需要为“标点=否”而担心。

**麦克风选 `online`，文件选 `offline`**
一般情况下，这样配置是推荐的。当然也可以这样搭配：
```bash
# 用online模型识别文件，好处是占用资源低，所见即所得，弊端是在同等条件下准确率比直接用offline模型会稍微差一点。
manyspeech asr -t online -m chunk -i file --files file1.wav file2.wav file3.wav
# 用offline模型识别麦克风，好处是可以获得更好的准确率，弊端是必须等待一句话说完才能看到结果，占用资源比直接用online模型稍微高一点。
manyspeech asr -t offline -m chunk -i mic
```

**一个最基础的命令例子**（假设你已经选好了一个叫 `some-model` 的模型）：
```bash
# 识别文件（注意 -i file 不能省）
manyspeech asr -t offline -i file --files "会议.wav" --model some-model

# 麦克风实时识别
manyspeech asr -t online -i mic --model some-model
```

> ⚠️ `asr` 子命令必须带 `-i`，要么 `-i file` 要么 `-i mic`，不能省略。不写 `--model` 时程序会用一个内置默认模型，不一定适合你的场景，建议手动指定。

---

### 2. 模型名称里还有更多信息

模型名称本身就是一份“迷你规格书”。除了表格里的指标，名称还会透露更多细节。

| 名称片段 | 含义 |
|----------|------|
| `online` / `offline` | 流式 / 非流式 |
| `zh` / `en` / `yue` / `ja` / `ko` / `multi` | 支持的语言（中文/英文/粤语/日语/韩语/多语言） |
| `tiny` / `small` / `base` / `large` / `xlarge` | 模型规模（越大越准，越慢越吃资源） |
| `int8` / `fp32` | 量化版 / 高精度版 |
| `timestamp` | 支持输出时间戳（做字幕用） |
| `kv` / `selfcrosskv` | 启用 KV 缓存加速 |
| `ctc` | 使用 CTC 解码架构（通常更快） |
| `turbo` | Whisper 系列的加速蒸馏版 |
| `distil` | 蒸馏版（Distil-Whisper），比原版小且快 |
| `finetune` / 特定后缀（如 `-belle`, `-wenetspeech`） | 在特定数据集上微调过的版本，对特定场景（如方言、对话）可能更好 |
| `seaco` | 支持热词定制 |
| `llm` | 大语言模型增强版 |
| `opt` | 优化版（优先选用） |

> 当你看到 `distil-whisper-xxx`，它比同规模的 `whisper-xxx` 更快、更小，适合资源受限场景。  
> 当你看到 `xxx-cantonese-onnx` 或 `xxx-wenetspeech-yue`，说明它在粤语上做过微调，比通用模型更准。
> 当你看到 `xxx-onnx-opt`，它通常比 `xxx-onnx` 表现更好。

---

### 3. 选型四步法：按你的需求筛选

#### 第一步：你主要说什么语言？

在表格里找到“支持语种”列，筛选出包含你所需语言的模型。

- **普通话**：优先找语种标记为 `zh` 或 `中文` 的模型
- **中英混杂**：找标记为 `zh-en` 或 `中英` 的模型
- **粤语**：找标记为 `yue` 或 `粤语` 的模型（或者名称里带 `cantonese` / `yue` 的）
- **英语**：找标记为 `en` 或 `英文` 的模型，或者 `distil-whisper-*-en` 等
- **日语/韩语/泰语/俄语等**：找对应语言标记的模型（如 `ja`, `ko`, `th`, `ru`）
- **全球多种语言**：找标记为 `多语言`、`multi` 或支持语种数量多的模型（如 Whisper 系列支持 99~106 种）

> 越是专门针对某语言的模型，在该语言上精度通常越高。多语言模型方便但可能略逊于专用模型。  
> 看到 `finetune` 或特定后缀（如 `-belle`、`-wenetspeech`），说明该模型在某个垂直领域（医疗、对话、方言）做过微调，如果你的场景匹配，优先考虑。

#### 第二步：要实时还是离线？

看“类型”列：

| 你的需求 | 选什么类型 | 命令中的 `-t` |
|----------|-----------|---------------|
| 实时对话、直播字幕、麦克风输入 | 流式 | `-t online` |
| 处理音频文件，不要求实时输出 | 非流式 | `-t offline` |
| 既要实时预览，又要最终精修 | 两个都要 | `-t 2pass`（需要指定主模型 online + 副模型 offline） |

#### 第三步：你的硬件什么水平？

看“精度后缀”和模型名称中的“规模”：

| 硬件情况 | 优先选择 | 命令建议 |
|----------|----------|----------|
| 服务器（8核+，8G+ 内存） | `fp32` 或非量化，规模 `large`/`xlarge` | 默认或 `--accuracy fp32` |
| 普通电脑（4核，4G 内存） | `int8` 量化，规模 `base`/`large` | `--accuracy int8` |
| 树莓派、老笔记本、嵌入式设备 | `int8` 量化，规模 `tiny`/`small` | 直接选名称带 `tiny` 和 `int8` 的模型，如 `moonshine-tiny-*-int8` 或 `distil-whisper-small-*-int8` |
| 只追求速度，精度可以次要 | `int8` + `ctc`，规模 `small` | 选名称含 `ctc` 和 `int8` 的模型 |

> `int8` 量化版体积减少 50%-75%，速度提升 2~4 倍，精度损失通常 <1%，强烈推荐。  
> `distil-` 模型比同规模原版更快更小，也是资源受限的好选择。

#### 第四步：需要生成字幕吗？
在不使用vad模型的情况下：
- **需要 SRT/VTT 字幕** → 必须选“时间戳 = 是”的模型（表格中该列标记为“是”，或名称含 `timestamp`）
- **不需要字幕** → 无视时间戳指标，任何模型都可以

在使用vad模型时：
- 模型的时间戳指标不是必需的，你甚至还可以仅用online模型，就可以生成带时间戳的字幕。

> 标点不需要你操心，程序会自动加上。所以“标点”这一列可以完全忽略。

**额外需求：热词定制**  
如果你希望提升某些特定词汇（品牌名、人名、专业术语）的识别率，可以找名称含 `seaco` 的模型（SeACo-Paraformer），它支持热词激励。

---

### 4. 常用命令模板（填上你选的模型就行）

```bash
# 离线识别文件
manyspeech asr -t offline -i file --files "你的音频.wav" --model 你选的模型名

# 实时麦克风
manyspeech asr -t online -i mic --model 你选的模型名

# 2pass 模式
manyspeech asr -t 2pass -i mic \
  --model 流式模型名 \
  --model2 离线模型名

# 输出字幕（仅当模型时间戳=是）
manyspeech asr -t offline -i file --files "音频.wav" \
  --format srt --model 模型名

# 强制使用 int8 量化（如果模型有 int8 版本）
manyspeech asr -t offline -i file --files "音频.wav" \
  --accuracy int8 --model 模型名

# 低配设备：限制线程数 + 轻量模型
manyspeech --threads 1 asr -t offline -i file --files "音频.wav" \
  --model 轻量模型名

# 切换 VAD（嘈杂环境换成 silero）
manyspeech --vad silero-vad-v6-onnx asr -t online -i mic --model 你选的模型名
```
---

## 二、VAD 语音活动检测模型

### 1 可用模型

| 模型名称 | 特点 | 适用场景 | 命令行 |
|----------|------|----------|--------|
| `alifsmnvad-onnx`（默认） | 平衡准确率与速度 | 会议室、安静录音 | `--vad alifsmnvad-onnx` |
| `silero-vad-v6-onnx` | 对嘈杂环境更鲁棒 | 电话、户外、远场 | `--vad silero-vad-v6-onnx` |

### 2 选型建议

- **安静环境**：使用默认 `alifsmnvad-onnx` 即可。  
- **嘈杂环境**（风扇、马路、多人杂谈）：切换为 `silero-vad-v6-onnx`。

### 3 常用命令

```bash
# 在 ASR 中指定 VAD
manyspeech --vad silero-vad-v6-onnx asr -t online -i mic --model 你的模型

# 单独使用 vad 子命令检测语音段
manyspeech vad -t offline -i file --files "录音.wav" --vad silero-vad-v6-onnx
```

---

## 三、Punc 标点恢复模型

### 1 可用模型

| 模型名称 | 说明 |
|----------|------|
| `alicttransformerpunc-zh-en-mge-int8-onnx` | 中英文标点，INT8 量化，轻量快速 |

### 2 说明

- ASR 中默认自动启用该模型为识别结果添加标点，通常无需手动干预。  
- 如需手动调用或测试，可使用 `punc` 子命令。

### 3 常用命令

```bash
# 手动对标点文本恢复标点
manyspeech punc --text "今天天气不错一起去郊游吧"

# 在 ASR 中禁用标点恢复（测试模型原生输出）
manyspeech --punc "" asr -t offline -i file --files "音频.wav" --model 模型名
```

---

## 四、AudioSep 音频分离模型（规划中）

> 该功能正在开发中，目前暂无可用模型。以下为选型维度预告。

### 4.1 未来可用模型（示例）

- 人声分离模型（如 Demucs、Spleeter 的 ONNX 版）  
- 伴奏/乐器分离模型  

### 4.2 选型维度（规划）

| 维度 | 选项 | 说明 |
|------|------|------|
| 分离目标 | 人声 / 伴奏 / 鼓 / 贝斯等 | 根据需求选择输出轨道 |
| 模型规模 | 轻量版 / 高精度版 | 轻量版适合实时，高精度版适合离线处理 |
| 输出格式 | 独立音频文件 / 掩码 | 独立文件直接可用，掩码需后处理 |

### 4.3 命令占位（后续实现）

```bash
# 示例（未来）
manyspeech audiosep -i file --files "混合音频.wav" --target vocals --output vocals.wav
```

---

## 五、常见问题

**问：ASR 表格里标点写“否”，输出会有标点吗？**  
答：会。因为程序默认调用了标点恢复（`--punc`）。你完全不用关心模型是否自带标点。

**问：KV 加速和 int8 能一起用吗？**  
答：能。名字里同时有 `int8` 和 `kv`/`selfcrosskv` 的模型就是。

**问：distil-whisper 和普通 whisper 有什么区别？**  
答：distil-whisper 是蒸馏版本，体积更小、速度更快，精度略低但通常够用，适合资源受限场景。

**问：怎么看模型是否支持我的语言？**  
答：看表格里的“支持语种”列，或从模型名称中的语言代码推断（zh/yue/en/ja/ko 等）。

**问：下载太慢怎么办？**  
答：从 [ModelScope](https://modelscope.cn/profile/manyeyes?tab=model) 手动下载，放到 `--base` 目录（默认是程序目录下的 `models/`）。

---

## 六、总结：选模型就是选指标

| 模型类型 | 核心选型维度 | 建议 |
|----------|--------------|------|
| **ASR** | 语言 → 实时性 → 硬件 → 字幕需求 → 热词 | 优先选 `int8` + `kv` 版本，标点忽略 |
| **VAD** | 环境噪声程度 | 安静用默认，嘈杂换 `silero-vad` |
| **Punc** | 无需选择 | 默认即可，也可手动调用 |
| **AudioSep** | 分离目标、精度（规划中） | 待后续版本支持 |

按这个顺序在模型列表里筛选，把筛选出的模型名填到 `--model` 后面，运行命令。如果效果不满意，再调整筛选条件换一批模型试。

## 下一步

- [模型库](/models/getting-started) - 详细的模型说明