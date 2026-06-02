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