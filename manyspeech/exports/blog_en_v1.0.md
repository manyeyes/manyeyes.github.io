## v1.0/en/blog/post-001.md

---
title: "X-ASR-zh-en: Lightweight High-Accuracy Bilingual Offline Streaming Speech Recognition Model"
date: "2026-06-02"
tags: ["ASR", "Speech Recognition", "Bilingual", "Open Source Model", "Lightweight Deployment"]
excerpt: "X-ASR-zh-en is an ultra-lightweight Chinese-English bilingual speech recognition model developed by Shanghai Jiao Tong University, Fudan University, and Huazhong University of Science and Technology. With only 0.16B parameters, it supports unified streaming/offline dual-mode inference, natively handles code-switching, automatic punctuation, and English case normalization. Pure CPU deployment, open-sourced under Apache 2.0, free for commercial use."
sidebar: false
---

# X-ASR-zh-en: Lightweight High-Accuracy Bilingual Offline Streaming Speech Recognition Model

## 1. Project Background and R&D Team

### 1.1 Industry R&D Background

Under the mainstream demands of local offline voice interaction, privacy-preserving real-time transcription, and mixed Chinese-English bilingual recognition, existing open-source ASR models generally have shortcomings: large-parameter models have high deployment costs and cannot be lightweighted, while lightweight models suffer from insufficient bilingual recognition accuracy, incompatibility between streaming and offline inference, and weak generalization. To address these core pain points, a multi-university research team jointly developed the **X-ASR-zh-en Chinese-English bilingual offline streaming unified ASR model**, featuring ultra-lightweight size, high accuracy, low latency, and unified dual-mode adaptation. It balances academic research and industrial lightweight deployment needs, providing developers with a low-cost, zero-threshold bilingual speech recognition solution.

### 1.2 R&D Team and Open Source Statement

**R&D Institution**: Led by Shanghai Jiao Tong University and Shanghai Innovation Institute, in collaboration with Fudan University and Huazhong University of Science and Technology. It is an open-source lightweight speech recognition achievement of industry-university-research integration.

**Open Source License**: The model is officially released under the **Apache 2.0 open source license**, with fully open weights, source code, and deployment resources. It supports **personal learning, academic research, and free commercial use** without additional licensing barriers.

## 2. Model Overview

X-ASR-zh-en is a lightweight unified Chinese-English bilingual speech recognition model built on the Icefall, K2 framework and Zipformer Transducer core architecture. Trained on **1 million hours** of open-source and collected bilingual speech data, it has only **0.16B ultra-small parameters**. The core breakthrough is **unified streaming real-time recognition and offline high-precision recognition dual-mode inference** in a single model, without switching weights or code logic.

The model natively supports multi-granularity low-latency inference, providing four standard chunk modes: 160ms / 480ms / 960ms / 1920ms, perfectly adapting to different latency requirement scenarios. It also natively supports mixed Chinese-English recognition, automatic punctuation insertion, and English case normalization. With ONNX quantization optimization, it achieves low-latency inference on pure CPU without GPU power or cloud data upload, balancing extreme lightweight deployment and high recognition accuracy, comprehensively outperforming peer open-source lightweight ASR models.

## 3. Core Architecture and Capabilities

### 3.1 Underlying Architecture Advantages

The model adopts the industry-leading Zipformer Transducer efficient时序 modeling architecture, which, compared to traditional CNN/RNN architectures, has stronger long-sequence contextual modeling capabilities, effectively optimizing recognition errors in long-form speech and complex environments. Combined with fine-grained training scheduling using the Icefall and K2 frameworks, it greatly improves training convergence stability and bilingual generalization ability, serving as the core architectural support for achieving high-precision dual-mode inference with a very small parameter count.

### 3.2 Core Feature Highlights

- **Unified Dual-Mode Inference**: A single model with one set of weights natively supports both real-time streaming decoding and offline full-sequence decoding, adapting to various speech recognition business scenarios.

- **Multi-Granularity Low-Latency Adaptation**: Built-in four inference chunk sizes (160ms, 480ms, 960ms, 1920ms) flexibly adapt to different scenarios such as ultra-low-latency live streaming, standard meeting transcription, and long-form batch recognition.

- **Native Bilingual Capability**: Unified bilingual modeling training accurately supports mixed Chinese-English speech recognition, automatically outputting standardized punctuation and English case formatting.

- **Zero-Compute Deployment**: With 0.16B ultra-light parameters, it supports pure CPU inference. With ONNX quantization optimization, it enables rapid lightweight deployment on both edge devices and servers.

- **Standardized Open-Source Deployment**: Natively adapted to the [Sherpa-ONNX](https://github.com/k2-fsa/sherpa-onnx) official deployment ecosystem, providing complete ONNX inference files, server scripts, and testing tools for out-of-the-box use and strong extensibility.

## 4. Core Performance Metrics (Industry Benchmarks)

All evaluations use greedy search decoding, with WER (Word Error Rate) and CER (Character Error Rate) as the core metrics. Lower values indicate higher recognition accuracy. All results are reproducible standard benchmark data.

### 4.1 Overall Performance on General Benchmarks

| Mode          | Chunk Size | LibriSpeech-Clean | LibriSpeech-Other | GigaSpeech | WenetSpeech-Net | WenetSpeech-Meeting |
|---------------|------------|-------------------|-------------------|------------|-----------------|---------------------|
| Streaming     | 160ms      | 3.91              | 10.17             | 10.97      | 9.45            | 12.04               |
| Streaming     | 480ms      | 3.14              | 7.57              | 9.77       | 7.38            | 9.31                |
| Streaming     | 960ms      | 3.12              | 7.22              | 9.62       | 6.96            | 8.84                |
| Streaming     | 1920ms     | 2.84              | 6.47              | 9.46       | 6.42            | 8.03                |
| Offline       | -          | **2.69**          | **5.76**          | **9.23**   | **5.96**        | **7.20**            |

*Note: Bold values indicate the best accuracy in the current test; offline mode achieves the global optimal results.*

### 4.2 Horizontal Comparison with Mainstream Open-Source Models

Under unified benchmark conditions, X-ASR-zh-en, with only 0.16B ultra-small parameters, achieves recognition accuracy far exceeding comparable lightweight models and significantly narrows the performance gap with large-parameter models. It achieves an extreme balance among computing cost, deployment barrier, and recognition accuracy, offering significant advantages for deployment. The comprehensive average error is the average result across the five general datasets; lower values indicate better performance.

| Rank | Model Name         | Parameters | Comprehensive Avg. Error | Core Features                                      |
|------|--------------------|------------|--------------------------|----------------------------------------------------|
| 1    | Qwen3-ASR          | 1.7B       | 4.882                    | Large-parameter high accuracy, high compute demand |
| 2    | Qwen3-ASR          | 0.6B       | 5.702                    | Balanced accuracy and compute                     |
| 3    | **X-ASR-zh-en (offline)** | **0.16B**  | **6.036**                | Ultra-light, bilingual unified, zero-GPU, all-scene |
| 4    | SenseVoice-small   | 0.234B     | 6.762                    | General scene adaptation, larger size, lower accuracy |
| 5    | VibeVoice-ASR      | 9B         | 9.792                    | Huge parameters, extremely high deployment barrier |

### 4.3 Vertical Domain Detailed Performance (Bilingual)

The model was evaluated on 12 vertical domains based on GigaSpeechBench, covering a wide range of specialized speech recognition scenarios. It performs stably in dense professional vocabulary scenarios, demonstrating excellent vertical domain adaptability and meeting high-precision requirements in specialized fields.

#### Chinese Vertical Domain CER (%)

| Mode   | Chunk | ARG | AIT | ART | BIO | ECM | ENG | ENT | FIN | HUM | LAW | MED | MIL |
|--------|-------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| Offline| -     | 6.56| 4.54| 2.77| 5.04| 2.99| 2.32| 6.02| 1.94| 7.64| 4.20| 2.90| 1.68|

#### English Vertical Domain WER (%)

| Mode   | Chunk | ARG | AIT | ART | BIO | ECM | ENG | ENT | FIN | HUM | LAW | MED | MIL |
|--------|-------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| Offline| -     | 4.09| 8.28| 6.73| 5.48| 4.12| 4.30|12.30| 4.94| 6.17|10.41| 5.35| 5.61|

## 5. Inference Deployment

The officially recommended runtime for X-ASR-zh-en is [**Sherpa-ONNX**](https://github.com/k2-fsa/sherpa-onnx). The model natively fits into this open-source deployment ecosystem, providing complete ONNX inference files, server scripts, and testing tools to meet professional developers' needs for project integration, batch inference, WebSocket streaming services, and other engineering scenarios. To accommodate different user needs, this section provides both the official standard deployment solution and a lightweight quick-experience solution, balancing engineering deployment and fast testing.

### 5.1 Official Standard Deployment: Sherpa-ONNX Engineering Deployment

The project repository includes complete Sherpa-ONNX deployment resources, including ONNX encoder, decoder, joiner weight files for multiple chunk-size models, and supporting inference scripts, enabling CPU lightweight streaming service deployment for rapid construction of real-time speech recognition services, suitable for secondary development and production deployment.

#### Environment Setup Steps

After downloading the complete project resources, navigate to the deployment directory, initialize a virtual environment, and install dependencies:

```bash
cd deployment
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

#### Start Streaming Inference Server

Using the 160ms low-latency model as an example, start the CPU streaming recognition service with customizable port, threads, and decoding parameters:

```bash
python infer_and_client/sherpa_streaming_server.py \
  --host 0.0.0.0 \
  --port 8766 \
  --tokens models/chunk-160ms-model/tokens.txt \
  --encoder models/chunk-160ms-model/encoder-160ms.onnx \
  --decoder models/chunk-160ms-model/decoder-160ms.onnx \
  --joiner models/chunk-160ms-model/joiner-160ms.onnx \
  --provider cpu \
  --sample-rate 16000 \
  --feature-dim 80 \
  --num-threads 1 \
  --decoding-method greedy_search \
  --model-type zipformer2 \
  --enable-endpoint-detection 0 \
  --text-format none
```

#### Test Inference with Audio File

After the server is running, use the client script to load a local WAV file and simulate real-time streaming inference:

```bash
python infer_and_client/sherpa_streaming_client.py \
  --server-uri ws://127.0.0.1:8766 \
  --wav /path/to/test.wav \
  --chunk-ms 100 \
  --simulate-realtime 1
```

### 5.2 Minimalist Inference: ManySpeech-CLI Command Line (Quick Experience)

**[ManySpeech](https://github.com/manyeyes/ManySpeech)** is an open-source speech AI model inference project that serves as a general ONNX speech model inference SDK, supporting secondary development and custom functional extensions by developers, adapting to various lightweight speech recognition model deployments. **ManySpeech-CLI** is a lightweight command-line tool built on the ManySpeech core. It removes complex development configurations and focuses on zero-threshold out-of-the-box use, suitable for ordinary users to quickly experience model capabilities and for developers to perform daily functional verification.

This tool is fully compatible with the entire X-ASR-zh-en model family, supporting microphone real-time capture, streaming real-time decoding, mixed Chinese-English recognition, automatic punctuation, and case normalization, without manually loading weights or complex engineering deployment. It is the optimal lightweight solution for quickly verifying model performance.

#### Using Real-time Microphone Inference in Terminal

After completing the [ManySpeech-CLI installation](https://manyeyes.github.io/manyspeech/cli/getting-started/installation.html), run the following command in the terminal to start low-latency real-time bilingual speech recognition:

```bash
manyspeech asr -t online -md k2transducer-zipformer-x-asr-zh-en-480ms-onnx-online-20260601 -m chunk -i mic
```

#### Explanation of Core Command Parameters

- **-t online**: Specifies real-time streaming inference mode, suitable for microphone live audio input, ensuring low-latency output.
- **-md k2transducer-zipformer-x-asr-zh-en-480ms-onnx-online-20260601**: Loads the 480ms balanced model, balancing recognition accuracy and inference latency, suitable for most daily and office scenarios.
- **-m chunk**: Enables chunk-based streaming inference mechanism, matching the model's native decoding architecture for smooth and stable recognition.
- **-i mic**: Specifies the microphone as the audio input source for real-time capture and instant transcription.

After running the command, the terminal continuously listens to microphone input and automatically performs mixed Chinese-English speech recognition, punctuation insertion, and English case normalization. Ordinary users can quickly experience the model's capabilities, and developers can perform secondary development based on the ManySpeech open-source core to quickly integrate the model's inference capabilities into their own projects.

## 6. Online Demo Experience

The project provides an official online demo based on Sherpa-ONNX deployment. Without local deployment or environment configuration, you can directly experience X-ASR-zh-en's bilingual streaming recognition in a web browser, intuitively feeling the model's low-latency, high-accuracy recognition ability.

**Online Demo URL**: [https://stream-asr.sjtuxlance.com/](https://stream-asr.sjtuxlance.com/)

The project also includes demo video resources to visually see the model's real-time recognition performance, helping users quickly understand the overall capability and interactive experience.

## 7. Open Source Access Channels

All model resources are fully open-sourced and released on multiple platforms, including the complete project source code, multi-size ONNX model weights, deployment scripts, test cases, bilingual documentation, and other files, adapting to users with different network environments:

- **[GitHub](https://github.com/Gilgamesh-J/X-ASR)**: Complete project source code, change logs, issue tracking, development documentation, and training reference resources, suitable for in-depth development and project follow-up.
- **[Hugging Face Hub](https://huggingface.co/GilgameshWind/X-ASR-zh-en)**: One-click download of model weights, adapted to HF ecosystem deployment, providing model cards and version management.
- **[ModelScope](https://www.modelscope.ai/Gilgamesh-J/X-ASR-zh-en)**: Domestic high-speed mirror site, resolving cross-border resource access limitations, suitable for domestic developers.
- **[Hugging Face Space](https://huggingface.co/spaces/chenxie95/X-ASR)**: Online interactive space supporting lightweight online testing.

## 8. Acknowledgments and Copyright

This model is trained and deployed based on the [Icefall](https://github.com/k2-fsa/icefall), K2, and [Sherpa-ONNX](https://github.com/k2-fsa/sherpa-onnx) open-source ecosystem. We thank the relevant open-source communities for their technical support. The model is open-sourced under the Apache 2.0 license, granting free commercial use and academic research rights. Community iteration, optimization, and secondary open-source contributions are welcome.

---

## v1.0/en/blog/post-002.md

---
title: "Fun-ASR-Nano-2512: An 800M Parameter Speech Recognition Model Trained on Tens of Millions of Hours of Real-World Speech"
date: "2026-06-04"
tags: ["ASR", "Speech Recognition", "Multilingual", "Open Source Model", "Tongyi Lab", "End-to-End Model"]
excerpt: "Fun-ASR-Nano-2512 is a lightweight end-to-end speech recognition model developed by Tongyi Lab. With only 800M parameters, it is trained on tens of millions of hours of real speech, supports Chinese, English, Japanese, 7 dialects and 26 accents, and is natively adapted for far-field noisy recognition, music background lyrics recognition, and low-latency real-time transcription. It can be flexibly deployed on pure GPU/CPU, is open-source and commercially usable, and delivers performance comparable to larger models."
sidebar: false
---

# Fun-ASR-Nano-2512: An 800M Parameter Speech Recognition Model Trained on Tens of Millions of Hours of Real-World Speech

## 1. Project Background and Research Team

The Fun-ASR-Nano-2512 series is a lightweight end-to-end speech recognition model officially released by **Tongyi Lab** on **December 15, 2025**. This series is a lightweight version within the Fun-ASR family specifically designed for low-compute deployment. It achieves comprehensive coverage of speech scenarios with only 800M parameters without sacrificing recognition accuracy.

Tongyi Lab's Fun team has accumulated deep technical expertise in the ASR field, having previously open-sourced several products including the industrial-grade ASR model **Paraformer** and the lightweight speech recognition model **SenseVoiceSmall**. The release of Fun-ASR-Nano represents the team's latest exploration in the technical direction of "lightweight + multilingual + industrial-grade robustness."

The core research paper, titled "Fun-ASR Technical Report," has been uploaded to arXiv (2509.12508), first submitted in September 2025 and subsequently revised four times (v4 released in December of the same year). It elaborates on multiple technical approaches including data scaling, model size scaling, deep integration with LLMs, and reinforcement learning. The paper has as many as 38 authors, covering multiple research fields such as speech recognition, large language models, and reinforcement learning.

## 2. Model Overview and Language Capabilities

This series includes two core versions, both with **800 million (800M) parameters**:

| Model Name | Parameters | Supported Languages | Core Features |
| :--- | :--- | :--- | :--- |
| **Fun-ASR-Nano-2512** | 800M | Chinese (7 major dialects + 26 accents), English, Japanese | Deeply optimized for Chinese dialects, accents, music background lyrics recognition, rap speech recognition |
| **Fun-ASR-MLT-Nano-2512** | 800M | 31 languages | Seamless multilingual switching and mixed recognition |

The entire series supports low-latency real-time transcription, punctuation restoration, and timestamp output. **The official PyTorch models are provided**, and the community has additionally exported ONNX-format optimized variants based on the official models (see "Community Deployment Options" section), suitable for cloud GPU and edge CPU deployment.

### 2.1 Specialized Version Fun-ASR-Nano-2512: Multidimensional Optimization for Chinese Dialects, Accents, English, and Japanese

#### 2.1.1 Seven Major Dialect Families

The seven major dialects supported by Fun-ASR-Nano-2512 have significant differences in geographical distribution and phonetic characteristics:

| Dialect | Geographic Distribution | Typical Phonetic Features |
| :--- | :--- | :--- |
| **Wu** | Shanghai, Zhejiang, Southern Jiangsu, Southeast Anhui, etc. | Retains voiced initials and entering tone endings, complex tone system |
| **Yue (Cantonese)** | Guangdong, parts of Guangxi, and overseas Chinese communities | Retains -p, -t, -k entering tone endings, up to 9 tones |
| **Min** | Fujian, Taiwan, Hainan, and Chaoshan, Leizhou Peninsula | Retains ancient sound features like light lip returning to heavy lip, rich literary-colloquial reading distinctions |
| **Hakka** | Hakka聚居 areas in Guangdong, Fujian, Jiangxi, Taiwan | Retains complete entering tone endings and rich ancient Chinese vocabulary |
| **Gan** | North-central Jiangxi, Eastern Hunan, parts of Hubei | Most ancient voiced initials for stops and affricates are aspirated voiceless |
| **Xiang** | Xiang River basin in Hunan and surrounding areas | Retains ancient voiced initial system, varying palatalization distinctions |
| **Jin** | Most of Shanxi, Northern Shaanxi, Central Inner Mongolia | Retains entering tone, complex tone sandhi phenomena |

The model achieves an **average recognition accuracy exceeding 85%** across these seven dialects, with accuracy for Cantonese, Hakka, and other dialects reaching over 90%. This benefits from the adoption of **dialect-aware acoustic modeling** during training—constructing a 32-dimensional phonetic feature space that includes distributions of retroflex vs. non-retroflex, front vs. back nasal endings, degree of entering tone retention, and more.

#### 2.1.2 Twenty-Six Local Accents

In addition to the seven major dialects, the model has been specifically trained for **26 types of Mandarin with local accents**. These accents are primarily distributed in the Central Plains Mandarin region (Henan), Southwestern Mandarin region (Sichuan, Chongqing, Yunnan, Guizhou, Hubei), Northwestern Mandarin region (Shaanxi), Southern China (Guangdong, Guangxi, Fujian, Hainan), and East/North China (Shandong, Jiangsu, Zhejiang, Hebei, etc.). After targeted training, the model achieves a **relative character error rate reduction of 56.2%** in accented scenarios, with **15 accents achieving recognition accuracy over 80%**.

#### 2.1.3 English and Japanese Recognition

The model's support for English and Japanese is not just about "hearing" but emphasizes accurate recognition:
- **English**: Achieves a word error rate as low as **1.76%** on the standard academic benchmark LibriSpeech-clean, and can handle non-standard accents such as Indian English and Singaporean English.
- **Japanese**: Supports standard Japanese and various regional accents, optimized for phenomena specific to Japanese such as morae and particle liaison.

The model uses a unified **Chinese-English-Japanese joint alignment training** architecture, establishing a shared acoustic representation space across languages, providing inherent advantages for realistic mixed-scenario recognition such as Chinese-English or Japanese-English code-switching.

### 2.2 Multidimensional Optimization of Fun-ASR-MLT-Nano-2512

#### 2.2.1 Support for 31 Languages

Fun-ASR-MLT-Nano-2512 supports speech recognition for 31 languages, with a focus on East and Southeast Asian languages. It allows seamless language switching and mixed recognition. The model has a built-in automatic language detection mechanism that can automatically identify the language in an audio stream without manual specification. The complete language list is as follows (ordered by language code):

| Language Name | Language Code | Application Scenarios |
| :--- | :---: | :--- |
| Mandarin Chinese | zh | Daily conversation, meeting minutes, video subtitles |
| English | en | International communication, English courses, business meetings |
| Cantonese | yue | Guangdong dialect, Cantonese song recognition |
| Japanese | ja | Japanese learning, anime subtitles, Japanese corporate meetings |
| Korean | ko | Korean drama subtitles, Korean learning, business communication |
| Spanish | es | Spanish-speaking countries communication, learning material transcription |
| French | fr | French courses, international conferences, business communication |
| German | de | German learning, technical documentation, business scenarios |
| Italian | it | Italian learning, cultural content recognition |
| Russian | ru | Russian communication, technical documentation, news transcription |
| Portuguese | pt | Portuguese-speaking countries communication, business scenarios |
| Arabic | ar | Middle East communication, news transcription |
| Dutch | nl | Dutch learning, business scenarios |
| Turkish | tr | Turkish communication, business scenarios |
| Polish | pl | Polish learning, business scenarios |
| Swedish | sv | Swedish learning, business scenarios |
| Indonesian | id | Indonesian communication, Southeast Asian business |
| Filipino | fil | Filipino communication, Southeast Asian business |
| Malay | ms | Malay communication, Southeast Asian business |
| Vietnamese | vi | Vietnamese communication, Southeast Asian business |
| Thai | th | Thai communication, Southeast Asian business |
| Hindi | hi | Hindi communication, South Asian business |
| Urdu | ur | Urdu communication, South Asian business |
| Persian | fa | Persian communication, Middle Eastern business |
| Bengali | bn | Bengali communication, South Asian business |
| Greek | el | Greek learning, business scenarios |
| Czech | cs | Czech learning, business scenarios |
| Finnish | fi | Finnish learning, business scenarios |
| Hungarian | hu | Hungarian learning, business scenarios |
| Romanian | ro | Romanian learning, business scenarios |
| Danish | da | Danish learning, business scenarios |

> **Language Code Note**: Uses ISO 639-1 two-letter codes. Mandarin Chinese is "zh", Cantonese is "yue" (model-specific identifier), case-insensitive.

**Automatic Language Detection Performance**: The model's built-in multilingual classifier achieves over **95%** recognition accuracy on single-language audio, with over **98%** for mainstream languages (Chinese, English), and approximately **90%** for dominant language identification in mixed-language scenarios.

## 3. Core Architecture and Capabilities

### 3.1 Four-Component End-to-End Architecture

Fun-ASR-Nano adopts an end-to-end speech recognition architecture consisting of four core components:

1. **Audio Encoder** (200M parameters): Extracts acoustic features from raw audio and models the temporal dependencies of speech sequences.
2. **CTC Decoder**: Serves as a parallel decoding branch, outputting preliminary transcription results and balancing real-time performance and accuracy.
3. **Adaptor Module**: Aligns the speech feature space with the text feature space, bridging the representation gap between speech and language modalities.
4. **LLM Decoder** (600M parameters): Implemented based on the **Qwen3-0.6B** language model, generating refined text by leveraging contextual semantic information on top of the CTC output.

This "lightweight encoder + compact decoder" design keeps the total model parameters precisely at **0.8B**.

### 3.2 LLM and CTC Dual-Branch Design

Fun-ASR-Nano includes two inference branch options for different usage scenarios:

- **LLM-enhanced branch**: Uses the LLM decoder as the primary output, offering stronger contextual understanding and hallucination suppression capabilities.
- **CTC lightweight branch**: Uses the CTC decoder as the primary output, offering faster inference speed, suitable for latency-sensitive and compute-constrained deployment environments.

### 3.3 Architectural Innovations

- **Text Knowledge Injection**: Initializes the encoder using layers from the pretrained text LLM Qwen3 during audio encoder pretraining, "injecting" linguistic knowledge from the text world into speech representation learning.
- **RAG Hotword Mechanism**: Dynamically introduces domain-specific keywords during inference, supporting up to **1000+** custom hotwords, significantly improving keyword recognition accuracy in specialized domains.

### 3.4 Core Capability Matrix

| Capability Dimension | Description |
| :--- | :--- |
| **Far-field Noisy Recognition** | Accuracy improved to **93%** in conference rooms, vehicles, industrial sites |
| **Chinese Dialects & Local Accents** | Supports 7 major dialects + 26 accents, see sections 2.1 and 2.2 |
| **Seamless Multilingual Switching** | Supports 31 languages with automatic language detection, see section 2.4 |
| **Music Background Lyrics Recognition** | Enhanced recognition performance under music background interference, supports accurate lyrics transcription |
| **Punctuation Restoration & ITN** | Automatically adds punctuation, converts spoken numbers/dates to written format |
| **Timestamp Output** | Supports word-level/sentence-level timestamps for subtitle generation |
| **Hotword Enhancement** | Supports up to **1000+** custom hotwords, improves domain-specific term recognition |

## 4. Training Data and Strategies

### 4.1 Data Scale

The pretraining phase used **tens of millions of hours** of audio data, covering both unlabeled real audio and labeled audio-text pairs. The supervised fine-tuning phase integrated **millions of hours** of multi-source data, including manual transcriptions, pseudo-labeling, environmental noise augmentation, TTS synthesis, simulated streaming, and hotword customization.

### 4.2 Data Sources and Domain Coverage

Real audio in the pretraining phase covers vertical industries such as **AI, e-commerce, education, and transportation**. Labeled audio-text pairs are primarily constructed for **Chinese and English**. The fine-tuning phase further expanded coverage and synthesized customized data for industrial scenarios such as **noise robustness, code-switching, and hotword customization**. Additionally, training on hundreds of millions of hours of audio covers professional terminology from **over a dozen industries** including internet, technology, home improvement, insurance, animal husbandry, and automotive.

### 4.3 Data Preprocessing and Labeling Strategy

- **Labeled Data Construction**: Used three independent ASR systems (Paraformer-V2, Whisper, SenseVoice) for parallel pseudo-labeling of raw audio, with high-confidence results selected through a consensus mechanism.
- **Data Filtering**: Used VAD to filter out silent segments and low-quality speech fragments.
- **Context Augmentation**: Used Qwen3 to automatically extract keywords from training text, constructing context-prompt training samples.
- **Data Augmentation**: Additionally constructed **110k hours of clean speech + 10k hours of noisy mixtures** as an augmented noise dataset; used CosyVoice3 TTS to synthesize accented speech, and superimposed six types of environmental noise (airport, station, etc.) onto clean speech.

### 4.4 Dialect and Accent Data Specialization

Dialects cover **Wu, Yue (Cantonese), Min, Hakka, Gan, Xiang, Jin** — seven major dialects. Accents cover 26 regions including **Henan, Shaanxi, Hubei, Sichuan, Chongqing, Yunnan, Guizhou, Guangdong, Guangxi**. Each dialect and accent category underwent dedicated collection and annotation.

### 4.5 Training Strategy

**Three-Stage Progressive Training:**

1. **Large-scale Pretraining**: Tens of millions of hours of data to build acoustic understanding and speech-text alignment capabilities.
2. **Multi-stage Supervised Fine-Tuning (SFT)** : Millions of hours of multi-source data for industrial scenario fine-tuning.
3. **Reinforcement Learning Fine-Tuning (RLHF)** : Using the **FunRL** framework, optimized on approximately 100k challenging samples. Reward functions designed for keyword recall, hallucination penalty, language consistency, etc., significantly reducing model hallucination rates.

**Specialized Training:**
- **Noise Robustness Training**: Brings approximately **13%** average relative performance improvement on complex noise environment test sets.
- **Streaming Capability Training**: Constructs training data that simulates the streaming decoding process, reducing the training-inference mismatch.

## 5. Core Performance Metrics

### 5.1 Open-Source Benchmarks

| Test Set | WER (%) | Description |
| :--- | :---: | :--- |
| AIShell-1 | 1.80 | Mandarin Chinese academic benchmark |
| Fleurs-zh | 2.56 | Chinese subset of the multilingual Fleurs benchmark |
| Librispeech-clean | 1.76 | English academic benchmark (clean test subset) |
| Chinese Dialect Test Set | 28.18 | Tongyi-built dialect evaluation set (Cantonese/Wu/Southern Min, etc.) |
| Far-field Test Set | 5.79 | Indoor speech recognition under simulated far-field pickup conditions |

### 5.2 Industrial Real-World Test Sets

| Industrial Test Scenario | Coverage |
| :--- | :--- |
| Near-field Standard | High SNR close-range recordings |
| Far-field Noisy | Conference room distance, vehicle noise, industrial sites |
| Complex Background | Street ambient sounds, music background interference |
| English Recognition | Chinese-English mixing, full English presentations |
| Dialect Recognition | Comprehensive evaluation across seven major dialects |
| Regional Accents | Independent evaluation of 26 local accents |
| Lyrics Recognition | Lyrics transcription under music background |
| Rap Recognition | Fast-paced, non-standard prosody speech transcription |

**Average WER on Industry Datasets: 16.72%** (based on YouTube/Bilibili videos and real-scene recordings collected after June 30, 2025, to avoid train-test set overlap contamination).

### 5.3 Horizontal Model Comparisons

**Chinese Dialect Test Set:**

| Model | Parameters | WER (%) |
| :--- | :---: | :---: |
| Fun-ASR-Nano-2512 | 0.8B | **28.18** |
| GLM-ASR-Nano | ~0.8B | 54.21 |
| Whisper-large-v3 | ~1.5B | 66.14 |

**Far-field Noisy Test Set:**

| Model | Parameters | WER (%) |
| :--- | :---: | :---: |
| Fun-ASR-Nano-2512 | 0.8B | **5.79** |
| Paraformer-v2 | ~0.3B | 9.55 |
| Kimi-Audio | ~7B | 10.95 |

**Average on Industry Datasets:**

| Model | Parameters | Avg. WER (%) |
| :--- | :---: | :---: |
| Fun-ASR-Nano-2512 | 0.8B | **9.38** |
| Seed-ASR | ~12B | 8.71 |

### 5.4 Dialect and Accent Specialized Evaluation

- Character error rate (CER) in dialect scenarios relatively decreased by **56.2%** (compared to baseline model without dialect-specific optimization).
- Recognition accuracy exceeded **90%** for 5 dialects and **80%** for 15 dialects/accents.

## 6. Inference and Deployment

### 1. Official Inference (PyTorch Original)

Use the official PyTorch model released by Tongyi Lab with the `funasr` library and `remote_code`.

```python
from funasr import AutoModel

model = AutoModel(
    model="FunAudioLLM/Fun-ASR-Nano-2512",  # or Fun-ASR-MLT-Nano-2512
    trust_remote_code=True,
    remote_code="./model.py",  # obtain from GitHub repo
    device="cuda:0"            # or "cpu"
)

res = model.generate(
    input=["path/to/audio.mp3"],
    language="Chinese",        # Set to "auto" for MLT version
    itn=True,
    hotwords=["custom hotword"],
    output_timestamp=True
)
print(res[0]["text"])
```

> **Note**: `remote_code` must point to `model.py` downloaded from the [Fun-ASR GitHub repository](https://github.com/FunAudioLLM/Fun-ASR). The official model supports full punctuation restoration, timestamps, ITN, and hotword functionality.

### 2. Community Deployment Option: ManySpeech-CLI

ManySpeech-CLI is a community tool that wraps **community-exported ONNX models**, audio processing, and output formatting, allowing a code-free quick experience.

#### 2.1 Community-Exported ONNX Models

The community has exported ONNX-format optimized variants based on the official PyTorch models and published them on the [ModelScope manyeyes space](https://www.modelscope.cn/models/manyeyes). These ONNX models **are not officially provided** but have been community-validated. They support int8 quantization, reducing model size by approximately 70% and GPU memory to 2.5GB. All ONNX models are non-streaming but can achieve near-real-time experience via VAD chunking.

**Specialized (Chinese/English/Japanese) ONNX Models:**

| Model Name | Precision | Decoder |
| :--- | :---: | :--- |
| Fun-ASR-Nano-2512-LLM-onnx | fp32 | LLM |
| Fun-ASR-Nano-2512-LLM-int8-onnx | int8 | LLM |
| Fun-ASR-Nano-2512-LLM-split-adaptor-onnx | fp32 | LLM |
| Fun-ASR-Nano-2512-LLM-split-adaptor-int8-onnx | int8 | LLM |
| Fun-ASR-Nano-2512-CTC-onnx | fp32 | CTC |
| Fun-ASR-Nano-2512-CTC-int8-onnx | int8 | CTC |

**Multilingual General ONNX Models:**

| Model Name | Precision | Decoder |
| :--- | :---: | :--- |
| Fun-ASR-MLT-Nano-2512-onnx | fp32 | LLM |
| Fun-ASR-MLT-Nano-2512-int8-onnx | int8 | LLM |

#### 2.2 ManySpeech-CLI Installation and Usage

**Installation**: Refer to the [installation guide](https://manyeyes.github.io/manyspeech/cli/getting-started/installation.html)

**Recognize Local Audio File:**
```cmd
# Generate subtitle SRT file
manyspeech asr -t offline -m chunk --format srt --threads 2 -i file -files "lecture.wav" --model Fun-ASR-Nano-2512-LLM-int8-onnx

# Specify language and hotwords
manyspeech asr -t offline -m chunk -i file -files "meeting.wav" --model Fun-ASR-Nano-2512-LLM-int8-onnx --language Chinese --hotwords "deep learning,Tongyi Lab"

# Recognize Spanish (multilingual version auto-detects)
manyspeech asr -t offline -m chunk --format json -i file -files "audio.wav" --model Fun-ASR-MLT-Nano-2512-int8-onnx
```

**Real-time Microphone Recognition:**
```cmd
# Near-real-time mode (chunked processing)
manyspeech asr -t offline -m chunk -i mic --model Fun-ASR-Nano-2512-CTC-int8-onnx
```

> **Parameter Note**: `-i file` must be accompanied by `-files "audio_path"`; `-i mic` does not require a file parameter. ONNX models are automatically downloaded and cached on first run. If using the portable version, start directly with the `asr` subcommand without the `manyspeech` main command prefix.

## 7. Open-Source Access Channels

| Resource Type | Link |
| :--- | :--- |
| Official PyTorch Model (ModelScope) | https://www.modelscope.cn/models/FunAudioLLM/Fun-ASR-Nano-2512 |
| Official PyTorch Model (Hugging Face) | https://huggingface.co/FunAudioLLM/Fun-ASR-Nano-2512 |
| Community ONNX Model Repository (ManyEyes Space) | https://www.modelscope.cn/models/manyeyes |
| ModelScope Online Demo | https://modelscope.cn/studios/FunAudioLLM/Fun-ASR-Nano |
| Hugging Face Space Demo | https://huggingface.co/spaces/FunAudioLLM/Fun-ASR-Nano |
| Project Homepage | https://funaudiollm.github.io/funasr |
| Paper Link | https://arxiv.org/abs/2509.12508 |
| FunRL Reinforcement Learning Code | https://github.com/FunAudioLLM/Fun-ASR |

## 8. Acknowledgments and License

Thanks to the research team at Tongyi Lab for their open-source contribution. The Fun-ASR series is open-sourced under the **Apache 2.0 License**, free for academic and commercial use. Please cite the following in your papers:

```bibtex
@article{an2025fun,
  title={Fun-ASR Technical Report},
  author={An, Keyu and Chen, Yanni and Deng, Chong and Gao, Changfeng and Gao, Zhifu and Gong, Bo and Li, Xiangang and Li, Yabin and Lv, Xiang and Ji, Yunjie and others},
  journal={arXiv preprint arXiv:2509.12508},
  year={2025}
}
```

> **Note**: Official inference uses the original PyTorch models with the `funasr` library and `remote_code`. The community deployment option (ManySpeech-CLI) is based on community-exported ONNX models, offering a lighter and more convenient experience. Both achieve high-accuracy speech recognition.

---

## v1.0/en/blog/post-003.md

---
title: "FireRedASR2-AED: Lightweight High-Precision Chinese-English Bilingual Speech Recognition Model"
date: "2026-06-05"
tags: ["ASR", "Speech Recognition", "Chinese-English Bilingual", "Open Source Model", "FireRedTeam", "End-to-End Model", "Dialect Recognition"]
excerpt: "FireRedASR2-AED is a second-generation industrial-grade speech recognition model developed by the FireRedTeam at Xiaohongshu. With just over 1B parameters, it is built on the Conformer-Transformer architecture, supports Mandarin, over 20 dialects/accents, English, and Chinese-English mixed input. It natively supports character-level timestamps and singing voice recognition. Achieves a CER of only 0.57% on AISHELL-1 and an average dialect CER of 11.67%. Official PyTorch models and community ONNX quantized versions are available, enabling flexible deployment on CPU/GPU. Open-source and commercially usable."
sidebar: false
---

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

| Model | Overall Avg. CER (%) | Mandarin Avg. CER (%) | Dialect Avg. CER (%) |
|-------|----------------------|-----------------------|----------------------|
| **FireRedASR2-LLM** | **9.67** | **2.89** | **11.55** |
| **FireRedASR2-AED** | **9.80** | **3.05** | **11.67** |
| Doubao-ASR | 12.98 | 3.69 | 15.39 |
| Qwen3-ASR-1.7B | 10.12 | 3.76 | 11.85 |
| Fun-ASR | 10.92 | 4.16 | 12.76 |
| Fun-ASR-Nano-2512 | - | 4.55 | 15.07 |

### 4.2 Detailed Results on Mandarin Test Sets (4)

| ID | Test Set | FireRedASR2-LLM | FireRedASR2-AED | Doubao-ASR | Qwen3-ASR | Fun-ASR |
|----|----------|----------------|----------------|------------|-----------|---------|
| 1 | aishell1 | 0.64 | **0.57** | 1.52 | 1.48 | 1.64 |
| 2 | aishell2 | 2.15 | 2.51 | 2.77 | 2.71 | 2.38 |
| 3 | ws-net | 4.44 | 4.57 | 5.73 | 4.97 | 6.85 |
| 4 | ws-meeting | 4.32 | 4.53 | 4.74 | 5.88 | 5.78 |

### 4.3 Detailed Results on Dialect/Accent Test Sets (19)

> Note: ws = WenetSpeech, md = MagicData, conv = conversation, daily = daily

| ID | Test Set (Dialect/Accent) | FRASR2-LLM | FRASR2-AED | Doubao-ASR | Qwen3-ASR | Fun-ASR |
|----|---------------------------|------------|------------|------------|-----------|---------|
| 5 | kespeech (8 dialects combined) | 3.08 | 3.60 | 5.38 | 5.10 | 5.36 |
| 6 | ws-yue-short (Cantonese short) | 5.14 | 5.15 | 10.51 | 5.82 | 7.34 |
| 7 | ws-yue-long (Cantonese long) | 8.71 | 8.54 | 11.39 | 8.85 | 10.14 |
| 8 | ws-chuan-easy (Sichuanese easy) | 10.90 | 10.60 | 11.33 | 11.99 | 12.46 |
| 9 | ws-chuan-hard (Sichuanese hard) | 20.71 | 21.35 | 20.77 | 21.63 | 22.49 |
| 10 | md-heavy | 7.42 | 7.43 | 7.69 | 8.02 | 9.13 |
| 11 | md-yue-conv (Cantonese conversation) | 12.23 | 11.66 | 26.25 | 9.76 | 33.71 |
| 12 | md-yue-daily (Cantonese daily) | 3.61 | 3.35 | 12.82 | 3.66 | 2.69 |
| 13 | md-yue-vehicle (Cantonese in-vehicle) | 4.50 | 4.83 | 8.66 | 4.28 | 6.00 |
| 14 | md-chuan-conv (Sichuanese conversation) | 13.18 | 13.07 | 11.77 | 14.35 | 14.01 |
| 15 | md-chuan-daily (Sichuanese daily) | 4.90 | 5.17 | 3.90 | 4.93 | 3.98 |
| 16 | md-shanghai-conv (Shanghainese conversation) | 28.70 | 27.02 | 45.15 | 29.77 | 25.49 |
| 17 | md-shanghai-daily (Shanghainese daily) | 24.94 | 24.18 | 44.06 | 23.93 | 12.55 |
| 18 | md-wu (Wu dialect) | 7.15 | 7.14 | 7.70 | 7.57 | 10.63 |
| 19 | md-zhengzhou-conv (Zhengzhou dialect conversation) | 10.20 | 10.65 | 9.83 | 9.55 | 10.85 |
| 20 | md-zhengzhou-daily (Zhengzhou dialect daily) | 5.80 | 6.26 | 5.77 | 5.88 | 6.29 |
| 21 | md-wuhan (Wuhan dialect) | 9.60 | 10.81 | 9.94 | 10.22 | 4.34 |
| 22 | md-tianjin (Tianjin dialect) | 15.45 | 15.30 | 15.79 | 16.16 | 19.27 |
| 23 | md-changsha (Changsha dialect) | 23.18 | 25.64 | 23.76 | 23.70 | 25.66 |

### 4.4 Singing Test Set (1)

| ID | Test Set | FRASR2-LLM | FRASR2-AED | Doubao-ASR | Qwen3-ASR | Fun-ASR |
|----|----------|------------|------------|------------|-----------|---------|
| 24 | opencpop (Chinese singing voice) | **1.12** | **1.17** | 4.36 | 2.57 | 3.05 |

### 4.5 Supported Dialects/Accents List (Official Complete List)

FireRedASR2-AED supports **20+ Chinese dialects/accents**. The officially listed specific ones include:

> Cantonese (Hong Kong and Guangdong), Sichuanese, Shanghainese, Wu dialect, Southern Min, Anhui dialect, Fujian dialect, Gansu dialect, Guizhou dialect, Hebei dialect, Henan dialect, Hubei dialect, Hunan dialect, Jiangxi dialect, Liaoning dialect, Ningxia dialect, Shaanxi dialect, Shanxi dialect, Shandong dialect, Tianjin dialect, Yunnan dialect, etc.

## 5. ONNX Model Series and Inference Deployment (Community Deployment Option)

### 5.1 Community-Contributed ONNX Models (manyeyes)

To meet the needs of the C# ecosystem and cross-platform deployment, community developer **manyeyes** exported FireRedASR2-AED to ONNX format. These ONNX models were not officially exported by FireRedTeam but are third-party contributions from the manyeyes community, publicly released on the ModelScope platform. All models support character-level timestamp output and have been optimized with INT8 quantization, significantly lowering the deployment barrier.

**Complete ONNX Model List** (source: https://modelscope.cn/profile/manyeyes?tab=model):

| Model Name | Precision | Size | Timestamps | Features |
|------------|-----------|------|-------------|----------|
| fireredasr2-aed-large-zh-en-onnx-offline-20260212 | FP32 | 4.73GB | Supported | Base ONNX version |
| fireredasr2-aed-large-zh-en-int8-onnx-offline-20260212 | INT8 | 1.76GB | Supported | INT8 quantized, ~62% size reduction |
| fireredasr2-aed-large-zh-en-onnx-selfcrosskv-offline-20260212 | FP32 | 4.73GB | Supported | KV cache optimized |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212 | INT8 | 1.76GB | Supported | INT8 quantization + KV cache optimization |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskvstack-offline-20260212 | INT8 | 1.76GB | Supported | INT8 quantization + KV cache optimization + parameter fusion |

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
- **Code Repository**: https://github.com/FireRedTeam/FireRedASR2S
- **Technical Paper**: https://arxiv.org/abs/2603.10420
- **Online Demo**: https://huggingface.co/spaces/FireRedTeam/FireRedASR
- **Official Models (PyTorch)**: ModelScope search `xukaituo/FireRedASR2-AED` | Hugging Face: `FireRedTeam/FireRedASR2-AED`
- **Community ONNX Models (manyeyes)**: ModelScope platform search `manyeyes` | Project page: https://modelscope.cn/profile/manyeyes?tab=model
- **manyspeech-cli Tool**: https://modelscope.cn/models/manyeyes/manyspeech-cli

## 8. Applicable Scenarios

| Scenario | Recommended Reasons |
|----------|---------------------|
| Real-time live subtitles | Character-level timestamps + streaming VAD |
| Voice search/commands | Chinese-English mixed input + 20+ dialects |
| Meeting recording transcription | Music filtering (mVAD) |
| Edge deployment | 1B+ lightweight parameters + INT8 quantization |
| Singing/lyrics recognition | CER of only 1.17% on opencpop test set |
| Offline subtitle generation | One-click SRT output via manyspeech-cli |

---

## v1.0/en/blog/index.mdx

---
title: All Blogs
pageType: custom
---
import BlogList from '../../../../components/BlogList';

<BlogList />


---

