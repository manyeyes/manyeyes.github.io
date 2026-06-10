# FireRedASR2-AED: Lightweight High-Precision Chinese-English Bilingual Speech Recognition Model

## 1. Model Overview

FireRedASR2-AED is a second-generation industrial-grade speech recognition model developed by the FireRedTeam at Xiaohongshu. It serves as the core ASR module of the integrated system FireRedASR2S. As one of two variants in the FireRedASR2 series, the AED version adopts an **Attention-based Encoder-Decoder (AED)** architecture with approximately 1B+ parameters, offering a lightweight alternative to the larger FireRedASR2-LLM (8B+ parameters) model.

Built upon the first generation, FireRedASR2 significantly improves recognition accuracy and is designed to meet the dual requirements of superior performance and optimal efficiency across diverse scenarios.

## 2. Core Architecture Design

Based on the technical report of the first-generation FireRedASR-AED (arXiv:2501.14350), the core architecture of FireRedASR2-AED is as follows:

### 2.1 Encoder-Decoder Structure

The model employs the classic combination of a **Conformer encoder** and a **Transformer decoder**:

- **Conformer Encoder**: Integrates multi-head self-attention with convolution modules to capture both global dependencies of speech signals and fine-grained local acoustic features.
- **Transformer Decoder**: Achieves efficient sequence transformation via cross-attention mechanisms, supporting autoregressive decoding.

### 2.2 Subsampling Strategy

The encoder front-end performs subsampling on the input speech using **two convolutional layers (stride 2, kernel size 3)**, reducing the temporal resolution from 10ms to 40ms. This effectively lowers computational complexity while retaining critical acoustic information.

### 2.3 Tokenization Strategy

A **hybrid tokenization strategy** is adopted: character-level tokenization for Chinese and Byte Pair Encoding (BPE) for English, with a **total vocabulary size of 7,832**, naturally supporting recognition of mixed Chinese-English input.

### 2.4 Input Length Limits (Official Specification)

- **FireRedASR2-AED**: Supports audio input up to **60 seconds**. Exceeding 60 seconds may cause hallucinations; exceeding 200 seconds will trigger positional encoding errors.
- **FireRedASR2-LLM**: Supports up to **40 seconds** of audio input (longer inputs not tested).

## 3. Training Data and Strategy

According to the first-generation FireRedASR-AED technical report (arXiv:2501.14350), its training data is as follows:

- **Mandarin Corpus**: Approximately **70,000 hours** of professionally transcribed high-quality speech data, primarily human-annotated.
- **English Data**: Approximately **11,000 hours** of supplementary training data to ensure bilingual recognition capability.

Training employs a progressive regularization strategy, gradually introducing Dropout and SpecAugment to ensure convergence stability.

## 4. Core Performance and Comparative Advantages

### 4.1 Official Evaluation Summary

FireRedASR2 was comprehensively evaluated on **24 public test sets**, covering Mandarin (4), dialects/accents (19), and singing (1). The official evaluation results are as follows:

| Model               | Overall Avg. CER (%) | Mandarin Avg. CER (%) | Dialect Avg. CER (%) |
| ------------------- | -------------------- | --------------------- | -------------------- |
| **FireRedASR2-LLM** | **9.67**             | **2.89**              | **11.55**            |
| **FireRedASR2-AED** | **9.80**             | **3.05**              | **11.67**            |
| Doubao-ASR          | 12.98                | 3.69                  | 15.39                |
| Qwen3-ASR-1.7B      | 10.12                | 3.76                  | 11.85                |
| Fun-ASR             | 10.92                | 4.16                  | 12.76                |
| Fun-ASR-Nano-2512   | -                    | 4.55                  | 15.07                |

### 4.2 Detailed Results on Mandarin Test Sets (4)

| ID | Test Set   | FireRedASR2-LLM | FireRedASR2-AED | Doubao-ASR | Qwen3-ASR | Fun-ASR |
| -- | ---------- | --------------- | --------------- | ---------- | --------- | ------- |
| 1  | aishell1   | 0.64            | **0.57**        | 1.52       | 1.48      | 1.64    |
| 2  | aishell2   | 2.15            | 2.51            | 2.77       | 2.71      | 2.38    |
| 3  | ws-net     | 4.44            | 4.57            | 5.73       | 4.97      | 6.85    |
| 4  | ws-meeting | 4.32            | 4.53            | 4.74       | 5.88      | 5.78    |

### 4.3 Detailed Results on Dialect/Accent Test Sets (19)

> Note: ws = WenetSpeech, md = MagicData, conv = conversation, daily = daily

| ID | Test Set (Dialect/Accent)                          | FRASR2-LLM | FRASR2-AED | Doubao-ASR | Qwen3-ASR | Fun-ASR |
| -- | -------------------------------------------------- | ---------- | ---------- | ---------- | --------- | ------- |
| 5  | kespeech (8 dialects combined)                     | 3.08       | 3.60       | 5.38       | 5.10      | 5.36    |
| 6  | ws-yue-short (Cantonese short)                     | 5.14       | 5.15       | 10.51      | 5.82      | 7.34    |
| 7  | ws-yue-long (Cantonese long)                       | 8.71       | 8.54       | 11.39      | 8.85      | 10.14   |
| 8  | ws-chuan-easy (Sichuanese easy)                    | 10.90      | 10.60      | 11.33      | 11.99     | 12.46   |
| 9  | ws-chuan-hard (Sichuanese hard)                    | 20.71      | 21.35      | 20.77      | 21.63     | 22.49   |
| 10 | md-heavy                                           | 7.42       | 7.43       | 7.69       | 8.02      | 9.13    |
| 11 | md-yue-conv (Cantonese conversation)               | 12.23      | 11.66      | 26.25      | 9.76      | 33.71   |
| 12 | md-yue-daily (Cantonese daily)                     | 3.61       | 3.35       | 12.82      | 3.66      | 2.69    |
| 13 | md-yue-vehicle (Cantonese in-vehicle)              | 4.50       | 4.83       | 8.66       | 4.28      | 6.00    |
| 14 | md-chuan-conv (Sichuanese conversation)            | 13.18      | 13.07      | 11.77      | 14.35     | 14.01   |
| 15 | md-chuan-daily (Sichuanese daily)                  | 4.90       | 5.17       | 3.90       | 4.93      | 3.98    |
| 16 | md-shanghai-conv (Shanghainese conversation)       | 28.70      | 27.02      | 45.15      | 29.77     | 25.49   |
| 17 | md-shanghai-daily (Shanghainese daily)             | 24.94      | 24.18      | 44.06      | 23.93     | 12.55   |
| 18 | md-wu (Wu dialect)                                 | 7.15       | 7.14       | 7.70       | 7.57      | 10.63   |
| 19 | md-zhengzhou-conv (Zhengzhou dialect conversation) | 10.20      | 10.65      | 9.83       | 9.55      | 10.85   |
| 20 | md-zhengzhou-daily (Zhengzhou dialect daily)       | 5.80       | 6.26       | 5.77       | 5.88      | 6.29    |
| 21 | md-wuhan (Wuhan dialect)                           | 9.60       | 10.81      | 9.94       | 10.22     | 4.34    |
| 22 | md-tianjin (Tianjin dialect)                       | 15.45      | 15.30      | 15.79      | 16.16     | 19.27   |
| 23 | md-changsha (Changsha dialect)                     | 23.18      | 25.64      | 23.76      | 23.70     | 25.66   |

### 4.4 Singing Test Set (1)

| ID | Test Set                         | FRASR2-LLM | FRASR2-AED | Doubao-ASR | Qwen3-ASR | Fun-ASR |
| -- | -------------------------------- | ---------- | ---------- | ---------- | --------- | ------- |
| 24 | opencpop (Chinese singing voice) | **1.12**   | **1.17**   | 4.36       | 2.57      | 3.05    |

### 4.5 Supported Dialects/Accents List (Official Complete List)

FireRedASR2-AED supports **20+ Chinese dialects/accents**. The officially listed specific ones include:

> Cantonese (Hong Kong and Guangdong), Sichuanese, Shanghainese, Wu dialect, Southern Min, Anhui dialect, Fujian dialect, Gansu dialect, Guizhou dialect, Hebei dialect, Henan dialect, Hubei dialect, Hunan dialect, Jiangxi dialect, Liaoning dialect, Ningxia dialect, Shaanxi dialect, Shanxi dialect, Shandong dialect, Tianjin dialect, Yunnan dialect, etc.

## 5. ONNX Model Series and Inference Deployment (Community Deployment Option)

### 5.1 Community-Contributed ONNX Models (manyeyes)

To meet the needs of the C# ecosystem and cross-platform deployment, community developer **manyeyes** exported FireRedASR2-AED to ONNX format. These ONNX models were not officially exported by FireRedTeam but are third-party contributions from the manyeyes community, publicly released on the ModelScope platform. All models support character-level timestamp output and have been optimized with INT8 quantization, significantly lowering the deployment barrier.

**Complete ONNX Model List** (source: [https://modelscope.cn/profile/manyeyes?tab=model](https://modelscope.cn/profile/manyeyes?tab=model)):

| Model Name                                                              | Precision | Size   | Timestamps | Features                                                     |
| ----------------------------------------------------------------------- | --------- | ------ | ---------- | ------------------------------------------------------------ |
| fireredasr2-aed-large-zh-en-onnx-offline-20260212                       | FP32      | 4.73GB | Supported  | Base ONNX version                                            |
| fireredasr2-aed-large-zh-en-int8-onnx-offline-20260212                  | INT8      | 1.76GB | Supported  | INT8 quantized, \~62% size reduction                         |
| fireredasr2-aed-large-zh-en-onnx-selfcrosskv-offline-20260212           | FP32      | 4.73GB | Supported  | KV cache optimized                                           |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212      | INT8      | 1.76GB | Supported  | INT8 quantization + KV cache optimization                    |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskvstack-offline-20260212 | INT8      | 1.76GB | Supported  | INT8 quantization + KV cache optimization + parameter fusion |

### 5.2 manyspeech-cli One-Click Command Line Tool

manyspeech-cli is a local, no-installation command-line speech recognition tool developed by the manyeyes community. It supports local audio file recognition, real-time microphone streaming, SRT subtitle generation, and multiple output formats such as JSON. manyspeech-cli has integrated the above ONNX models, allowing users to perform offline recognition and subtitle generation with a single command:

```bash
manyspeech asr -t offline --model fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212 -m chunk --format srt --threads 2 -i file -f "/path/to/0.wav"
```

Example output (31-second audio, SRT subtitles):

```
0
00:00:00,490 -> 00:00:03,820
Whenever the New Year's bell rings,

1
00:00:03,820 -> 00:00:06,850
I always close my eyes and make a silent wish.

2
00:00:06,850 -> 00:00:10,980
Sometimes I also set New Year's resolutions for myself.

3
00:00:10,990 -> 00:00:14,280
And when I hear the New Year's bell,

4
00:00:14,280 -> 00:00:17,130
I feel a sense of regret in my heart.

5
00:00:17,200 -> 00:00:20,370
I lament how quickly time passes,

6
00:00:20,370 -> 00:00:24,420
and that my wishes from previous years have yet to come true. Nevertheless,

7
00:00:24,570 -> 00:00:28,230
after the baptism of time, I have grown up and matured,

8
00:00:28,230 -> 00:00:31,120
learning to bravely face everything in reality.
```

## 6. Quick Start Guide (Official Deployment Option)

> The following content is based on the FireRedASR2S official code repository (GitHub: FireRedTeam/FireRedASR2S), using the official PyTorch models.

### 6.1 Environment Setup

```bash
# Create Python environment (requires Python 3.10)
conda create --name fireredasr2s python=3.10
conda activate fireredasr2s

# Clone official repository
git clone https://github.com/FireRedTeam/FireRedASR2S.git
cd FireRedASR2S

# Install dependencies
pip install -r requirements.txt

# Set environment variables
export PATH=$PWD/fireredasr2s/:$PATH
export PYTHONPATH=$PWD/:$PYTHONPATH
```

### 6.2 Model Download (Official PyTorch Models)

**Domestic users (ModelScope recommended)**:

```bash
modelscope download --model xukaituo/FireRedASR2-AED --local_dir ./pretrained_models/FireRedASR2-AED
```

**International users (Hugging Face)**:

```bash
huggingface-cli download FireRedTeam/FireRedASR2-AED --local-dir ./pretrained_models/FireRedASR2-AED
```

### 6.3 Audio Format Requirements

The official model only supports **16kHz, 16-bit, mono, PCM WAV** format. For conversion, use FFmpeg:

```bash
ffmpeg -i input.mp3 -ar 16000 -ac 1 -acodec pcm_s16le -f wav output.wav
```

### 6.4 Basic Usage: ASR Module (Python API)

Call only the ASR module for speech recognition, with character-level timestamp output.

```python
from fireredasr2s.fireredasr2 import FireRedAsr2, FireRedAsr2Config

# Configure ASR parameters
asr_config = FireRedAsr2Config(
    use_gpu=True,           # Whether to use GPU
    use_half=False,         # Whether to use half precision
    beam_size=3,            # Beam search width
    nbest=1,                # Number of best candidates to return
    decode_max_len=0,       # Maximum decoding length (0 = auto)
    softmax_smoothing=1.25, # Softmax smoothing coefficient
    aed_length_penalty=0.6, # Length penalty coefficient
    eos_penalty=1.0,        # End-of-sentence penalty
    return_timestamp=True   # Return character-level timestamps
)

# Load model
model = FireRedAsr2.from_pretrained("aed", "./pretrained_models/FireRedASR2-AED", asr_config)

# Perform recognition
results = model.transcribe(["utt1", "utt2"], ["test1.wav", "test2.wav"])
for res in results:
    print(f"Text: {res['text']}")
    print(f"Confidence: {res['confidence']}")
    print(f"Character-level timestamps: {res['timestamp']}")  # format: [('你', 0.42, 0.66), ...]
```

### 6.5 Advanced Usage: Integrated System (with VAD+LID+Punc)

Automatically performs voice activity detection, language identification, speech recognition, and punctuation prediction in one pipeline.

```python
from fireredasr2s import FireRedAsr2System, FireRedAsr2SystemConfig

# Initialize with default configuration (automatically loads VAD, LID, ASR, Punc modules)
asr_system_config = FireRedAsr2SystemConfig() 
asr_system = FireRedAsr2System(asr_system_config)

# Process a single audio file
result = asr_system.process("test.wav")

print(f"Full text: {result['text']}")          # Text with punctuation
print(f"Sentence-level info: {result['sentences']}")   # Start/end times, language, confidence per sentence
print(f"VAD segments: {result['vad_segments_ms']}") # Start/end times of speech segments (ms)
print(f"Character-level timestamps: {result['words']}")       # Start/end times per character
```

### 6.6 Command Line Tool (Official CLI)

FireRedASR2S provides a command-line tool `fireredasr2s-cli` for batch processing.

```bash
# Process one or more audio files, output JSONL format results
fireredasr2s-cli --wav_paths "hello_zh.wav" "hello_en.wav" --outdir output

# View results
cat output/result.jsonl
```

Example output:

```json
{"uttid": "hello_zh", "text": "Hello world.", "sentences": [{"start_ms": 440, "end_ms": 1820, "text": "Hello world.", "asr_confidence": 0.868, "lang": "zh mandarin", "lang_confidence": 0.999}], "vad_segments_ms": [[440, 1820]], "dur_s": 2.32, "words": [{"start_ms": 540, "end_ms": 700, "text": "你"}, {"start_ms": 700, "end_ms": 1100, "text": "好"}, {"start_ms": 1100, "end_ms": 1300, "text": "世"}, {"start_ms": 1300, "end_ms": 1765, "text": "界"}], "wav_path": "assets/hello_zh.wav"}
```

### 6.7 TensorRT-LLM Acceleration

FireRedASR2-AED supports TensorRT-LLM inference acceleration. On the AISHELL-1 test set, a single H20 GPU achieves a **12.7x** speedup over the PyTorch baseline.

## 7. Open Source Access Channels

- **Open Source License**: Apache-2.0
- **Code Repository**: [https://github.com/FireRedTeam/FireRedASR2S](https://github.com/FireRedTeam/FireRedASR2S)
- **Technical Paper**: [https://arxiv.org/abs/2603.10420](https://arxiv.org/abs/2603.10420)
- **Online Demo**: [https://huggingface.co/spaces/FireRedTeam/FireRedASR](https://huggingface.co/spaces/FireRedTeam/FireRedASR)
- **Official Models (PyTorch)**: ModelScope search `xukaituo/FireRedASR2-AED` | Hugging Face: `FireRedTeam/FireRedASR2-AED`
- **Community ONNX Models (manyeyes)**: ModelScope platform search `manyeyes` | Project page: [https://modelscope.cn/profile/manyeyes?tab=model](https://modelscope.cn/profile/manyeyes?tab=model)
- **manyspeech-cli Tool**: [https://modelscope.cn/models/manyeyes/manyspeech-cli](https://modelscope.cn/models/manyeyes/manyspeech-cli)

## 8. Applicable Scenarios

| Scenario                        | Recommended Reasons                            |
| ------------------------------- | ---------------------------------------------- |
| Real-time live subtitles        | Character-level timestamps + streaming VAD     |
| Voice search/commands           | Chinese-English mixed input + 20+ dialects     |
| Meeting recording transcription | Music filtering (mVAD)                         |
| Edge deployment                 | 1B+ lightweight parameters + INT8 quantization |
| Singing/lyrics recognition      | CER of only 1.17% on opencpop test set         |
| Offline subtitle generation     | One-click SRT output via manyspeech-cli        |
