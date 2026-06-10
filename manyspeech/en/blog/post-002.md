# Fun-ASR-Nano-2512: An 800M Parameter Speech Recognition Model Trained on Tens of Millions of Hours of Real-World Speech

## 1. Project Background and Research Team

The Fun-ASR-Nano-2512 series is a lightweight end-to-end speech recognition model officially released by **Tongyi Lab** on **December 15, 2025**. This series is a lightweight version within the Fun-ASR family specifically designed for low-compute deployment. It achieves comprehensive coverage of speech scenarios with only 800M parameters without sacrificing recognition accuracy.

Tongyi Lab's Fun team has accumulated deep technical expertise in the ASR field, having previously open-sourced several products including the industrial-grade ASR model **Paraformer** and the lightweight speech recognition model **SenseVoiceSmall**. The release of Fun-ASR-Nano represents the team's latest exploration in the technical direction of "lightweight + multilingual + industrial-grade robustness."

The core research paper, titled "Fun-ASR Technical Report," has been uploaded to arXiv (2509.12508), first submitted in September 2025 and subsequently revised four times (v4 released in December of the same year). It elaborates on multiple technical approaches including data scaling, model size scaling, deep integration with LLMs, and reinforcement learning. The paper has as many as 38 authors, covering multiple research fields such as speech recognition, large language models, and reinforcement learning.

## 2. Model Overview and Language Capabilities

This series includes two core versions, both with **800 million (800M) parameters**:

| Model Name                | Parameters | Supported Languages                                        | Core Features                                                                                               |
| :------------------------ | :--------- | :--------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| **Fun-ASR-Nano-2512**     | 800M       | Chinese (7 major dialects + 26 accents), English, Japanese | Deeply optimized for Chinese dialects, accents, music background lyrics recognition, rap speech recognition |
| **Fun-ASR-MLT-Nano-2512** | 800M       | 31 languages                                               | Seamless multilingual switching and mixed recognition                                                       |

The entire series supports low-latency real-time transcription, punctuation restoration, and timestamp output. **The official PyTorch models are provided**, and the community has additionally exported ONNX-format optimized variants based on the official models (see "Community Deployment Options" section), suitable for cloud GPU and edge CPU deployment.

### 2.1 Specialized Version Fun-ASR-Nano-2512: Multidimensional Optimization for Chinese Dialects, Accents, English, and Japanese

#### 2.1.1 Seven Major Dialect Families

The seven major dialects supported by Fun-ASR-Nano-2512 have significant differences in geographical distribution and phonetic characteristics:

| Dialect             | Geographic Distribution                                       | Typical Phonetic Features                                                                                           |
| :------------------ | :------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------ |
| **Wu**              | Shanghai, Zhejiang, Southern Jiangsu, Southeast Anhui, etc.   | Retains voiced initials and entering tone endings, complex tone system                                              |
| **Yue (Cantonese)** | Guangdong, parts of Guangxi, and overseas Chinese communities | Retains -p, -t, -k entering tone endings, up to 9 tones                                                             |
| **Min**             | Fujian, Taiwan, Hainan, and Chaoshan, Leizhou Peninsula       | Retains ancient sound features like light lip returning to heavy lip, rich literary-colloquial reading distinctions |
| **Hakka**           | Hakka聚居 areas in Guangdong, Fujian, Jiangxi, Taiwan           | Retains complete entering tone endings and rich ancient Chinese vocabulary                                          |
| **Gan**             | North-central Jiangxi, Eastern Hunan, parts of Hubei          | Most ancient voiced initials for stops and affricates are aspirated voiceless                                       |
| **Xiang**           | Xiang River basin in Hunan and surrounding areas              | Retains ancient voiced initial system, varying palatalization distinctions                                          |
| **Jin**             | Most of Shanxi, Northern Shaanxi, Central Inner Mongolia      | Retains entering tone, complex tone sandhi phenomena                                                                |

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

| Language Name    | Language Code | Application Scenarios                                                     |
| :--------------- | :-----------: | :------------------------------------------------------------------------ |
| Mandarin Chinese |       zh      | Daily conversation, meeting minutes, video subtitles                      |
| English          |       en      | International communication, English courses, business meetings           |
| Cantonese        |      yue      | Guangdong dialect, Cantonese song recognition                             |
| Japanese         |       ja      | Japanese learning, anime subtitles, Japanese corporate meetings           |
| Korean           |       ko      | Korean drama subtitles, Korean learning, business communication           |
| Spanish          |       es      | Spanish-speaking countries communication, learning material transcription |
| French           |       fr      | French courses, international conferences, business communication         |
| German           |       de      | German learning, technical documentation, business scenarios              |
| Italian          |       it      | Italian learning, cultural content recognition                            |
| Russian          |       ru      | Russian communication, technical documentation, news transcription        |
| Portuguese       |       pt      | Portuguese-speaking countries communication, business scenarios           |
| Arabic           |       ar      | Middle East communication, news transcription                             |
| Dutch            |       nl      | Dutch learning, business scenarios                                        |
| Turkish          |       tr      | Turkish communication, business scenarios                                 |
| Polish           |       pl      | Polish learning, business scenarios                                       |
| Swedish          |       sv      | Swedish learning, business scenarios                                      |
| Indonesian       |       id      | Indonesian communication, Southeast Asian business                        |
| Filipino         |      fil      | Filipino communication, Southeast Asian business                          |
| Malay            |       ms      | Malay communication, Southeast Asian business                             |
| Vietnamese       |       vi      | Vietnamese communication, Southeast Asian business                        |
| Thai             |       th      | Thai communication, Southeast Asian business                              |
| Hindi            |       hi      | Hindi communication, South Asian business                                 |
| Urdu             |       ur      | Urdu communication, South Asian business                                  |
| Persian          |       fa      | Persian communication, Middle Eastern business                            |
| Bengali          |       bn      | Bengali communication, South Asian business                               |
| Greek            |       el      | Greek learning, business scenarios                                        |
| Czech            |       cs      | Czech learning, business scenarios                                        |
| Finnish          |       fi      | Finnish learning, business scenarios                                      |
| Hungarian        |       hu      | Hungarian learning, business scenarios                                    |
| Romanian         |       ro      | Romanian learning, business scenarios                                     |
| Danish           |       da      | Danish learning, business scenarios                                       |

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

| Capability Dimension                    | Description                                                                                                  |
| :-------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| **Far-field Noisy Recognition**         | Accuracy improved to **93%** in conference rooms, vehicles, industrial sites                                 |
| **Chinese Dialects & Local Accents**    | Supports 7 major dialects + 26 accents, see sections 2.1 and 2.2                                             |
| **Seamless Multilingual Switching**     | Supports 31 languages with automatic language detection, see section 2.4                                     |
| **Music Background Lyrics Recognition** | Enhanced recognition performance under music background interference, supports accurate lyrics transcription |
| **Punctuation Restoration & ITN**       | Automatically adds punctuation, converts spoken numbers/dates to written format                              |
| **Timestamp Output**                    | Supports word-level/sentence-level timestamps for subtitle generation                                        |
| **Hotword Enhancement**                 | Supports up to **1000+** custom hotwords, improves domain-specific term recognition                          |

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

| Test Set                 | WER (%) | Description                                                           |
| :----------------------- | :-----: | :-------------------------------------------------------------------- |
| AIShell-1                |   1.80  | Mandarin Chinese academic benchmark                                   |
| Fleurs-zh                |   2.56  | Chinese subset of the multilingual Fleurs benchmark                   |
| Librispeech-clean        |   1.76  | English academic benchmark (clean test subset)                        |
| Chinese Dialect Test Set |  28.18  | Tongyi-built dialect evaluation set (Cantonese/Wu/Southern Min, etc.) |
| Far-field Test Set       |   5.79  | Indoor speech recognition under simulated far-field pickup conditions |

### 5.2 Industrial Real-World Test Sets

| Industrial Test Scenario | Coverage                                                  |
| :----------------------- | :-------------------------------------------------------- |
| Near-field Standard      | High SNR close-range recordings                           |
| Far-field Noisy          | Conference room distance, vehicle noise, industrial sites |
| Complex Background       | Street ambient sounds, music background interference      |
| English Recognition      | Chinese-English mixing, full English presentations        |
| Dialect Recognition      | Comprehensive evaluation across seven major dialects      |
| Regional Accents         | Independent evaluation of 26 local accents                |
| Lyrics Recognition       | Lyrics transcription under music background               |
| Rap Recognition          | Fast-paced, non-standard prosody speech transcription     |

**Average WER on Industry Datasets: 16.72%** (based on YouTube/Bilibili videos and real-scene recordings collected after June 30, 2025, to avoid train-test set overlap contamination).

### 5.3 Horizontal Model Comparisons

**Chinese Dialect Test Set:**

| Model             | Parameters |  WER (%)  |
| :---------------- | :--------: | :-------: |
| Fun-ASR-Nano-2512 |    0.8B    | **28.18** |
| GLM-ASR-Nano      |   \~0.8B   |   54.21   |
| Whisper-large-v3  |   \~1.5B   |   66.14   |

**Far-field Noisy Test Set:**

| Model             | Parameters |  WER (%) |
| :---------------- | :--------: | :------: |
| Fun-ASR-Nano-2512 |    0.8B    | **5.79** |
| Paraformer-v2     |   \~0.3B   |   9.55   |
| Kimi-Audio        |    \~7B    |   10.95  |

**Average on Industry Datasets:**

| Model             | Parameters | Avg. WER (%) |
| :---------------- | :--------: | :----------: |
| Fun-ASR-Nano-2512 |    0.8B    |   **9.38**   |
| Seed-ASR          |    \~12B   |     8.71     |

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

| Model Name                                    | Precision | Decoder |
| :-------------------------------------------- | :-------: | :------ |
| Fun-ASR-Nano-2512-LLM-onnx                    |    fp32   | LLM     |
| Fun-ASR-Nano-2512-LLM-int8-onnx               |    int8   | LLM     |
| Fun-ASR-Nano-2512-LLM-split-adaptor-onnx      |    fp32   | LLM     |
| Fun-ASR-Nano-2512-LLM-split-adaptor-int8-onnx |    int8   | LLM     |
| Fun-ASR-Nano-2512-CTC-onnx                    |    fp32   | CTC     |
| Fun-ASR-Nano-2512-CTC-int8-onnx               |    int8   | CTC     |

**Multilingual General ONNX Models:**

| Model Name                      | Precision | Decoder |
| :------------------------------ | :-------: | :------ |
| Fun-ASR-MLT-Nano-2512-onnx      |    fp32   | LLM     |
| Fun-ASR-MLT-Nano-2512-int8-onnx |    int8   | LLM     |

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

| Resource Type                                    | Link                                                                                                                             |
| :----------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| Official PyTorch Model (ModelScope)              | [https://www.modelscope.cn/models/FunAudioLLM/Fun-ASR-Nano-2512](https://www.modelscope.cn/models/FunAudioLLM/Fun-ASR-Nano-2512) |
| Official PyTorch Model (Hugging Face)            | [https://huggingface.co/FunAudioLLM/Fun-ASR-Nano-2512](https://huggingface.co/FunAudioLLM/Fun-ASR-Nano-2512)                     |
| Community ONNX Model Repository (ManyEyes Space) | [https://www.modelscope.cn/models/manyeyes](https://www.modelscope.cn/models/manyeyes)                                           |
| ModelScope Online Demo                           | [https://modelscope.cn/studios/FunAudioLLM/Fun-ASR-Nano](https://modelscope.cn/studios/FunAudioLLM/Fun-ASR-Nano)                 |
| Hugging Face Space Demo                          | [https://huggingface.co/spaces/FunAudioLLM/Fun-ASR-Nano](https://huggingface.co/spaces/FunAudioLLM/Fun-ASR-Nano)                 |
| Project Homepage                                 | [https://funaudiollm.github.io/funasr](https://funaudiollm.github.io/funasr)                                                     |
| Paper Link                                       | [https://arxiv.org/abs/2509.12508](https://arxiv.org/abs/2509.12508)                                                             |
| FunRL Reinforcement Learning Code                | [https://github.com/FunAudioLLM/Fun-ASR](https://github.com/FunAudioLLM/Fun-ASR)                                                 |

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
