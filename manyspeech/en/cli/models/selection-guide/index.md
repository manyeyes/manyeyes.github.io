# Model Selection Guide

Faced with an ever‑growing list of models, you don't need to memorise every name. This guide teaches you **how to read the key metrics of each model**, then match them to your own needs – language, real‑time requirement, hardware, timestamps … filter step by step, and only a handful of models will remain.

> 📌 All models are in ONNX format. When you use them for the first time in `manyspeech`, they are downloaded automatically.

## I. ASR (Speech Recognition) Models

### 1. Six Key Metrics: Understand the Model, Then Write the Command

Every model table contains these columns. Once you understand them, you'll know what to choose and how to write the command.

| Metric               | Values                                      | Meaning                                  | CLI Argument                               | How to Use This Metric                                          |
| -------------------- | ------------------------------------------- | ---------------------------------------- | ------------------------------------------ | --------------------------------------------------------------- |
| **Type**             | `Streaming` / `Non‑streaming`               | Can it produce words in real time?       | `-t online` / `-t offline`                 | Microphone → `online`, file → `offline`                         |
| **Languages**        | Chinese, English, Cantonese, multilingual … | Which languages the model specialises in | via `--model`                              | The better the match, the higher the accuracy                   |
| **Punctuation**      | `Yes` / `No`                                | Does the output include punctuation?     | Not important because `--punc` restores it | Ignore this metric – the program adds punctuation automatically |
| **Timestamps**       | `Yes` / `No`                                | Does it include time information?        | `--format srt` / `--format vtt`            | Must be `Yes` if you need subtitles                             |
| **KV**               | `✅` / `❌`                                   | Does it have inference acceleration?     | Enabled automatically                      | Prefer `✅` – decoding is 20‑50% faster                          |
| **Precision suffix** | `int8` / `fp32`                             | Is it a quantised version?               | `--accuracy int8`                          | Choose `int8` – smaller size, faster speed                      |

**Why can you ignore punctuation?** (for Chinese/English scenarios)

- Because regardless of whether the model natively outputs punctuation, `manyspeech` by default calls a punctuation restoration model (`--punc`) to add punctuation to the output. You don't need to worry about `Punctuation = No`.

**Microphone → `online`, file → `offline`**\
This is the recommended configuration in most cases. You can also mix them:

```bash
# Use an online model on a file – benefits: low resource usage, what you see is what you get.
# Drawback: accuracy may be slightly lower than using a dedicated offline model under the same conditions.
manyspeech asr -t online -m chunk -i file --files file1.wav file2.wav file3.wav

# Use an offline model on a microphone – benefit: better accuracy.
# Drawback: you must wait until the end of an utterance to see the result, and resource usage is slightly higher than with an online model.
manyspeech asr -t offline -m chunk -i mic
```

**A very basic command example** (assuming you have already chosen a model called `some-model`):

```bash
# Recognise a file (note that `-i file` cannot be omitted)
manyspeech asr -t offline -i file --files "meeting.wav" --model some-model

# Real‑time microphone recognition
manyspeech asr -t online -i mic --model some-model
```

> ⚠️ The `asr` subcommand must include `-i`, either `-i file` or `-i mic`. It cannot be omitted. If you omit `--model`, the program uses a built‑in default model, which may not be suitable for your scenario – we recommend always specifying a model.

***

### 2. More Information Is Encoded in the Model Name

The model name itself is a “mini spec sheet”. Besides the metrics in the table, the name reveals additional details.

| Name Fragment                                                  | Meaning                                                                                                    |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `online` / `offline`                                           | Streaming / non‑streaming                                                                                  |
| `zh` / `en` / `yue` / `ja` / `ko` / `multi`                    | Languages supported (Chinese / English / Cantonese / Japanese / Korean / multilingual)                     |
| `tiny` / `small` / `base` / `large` / `xlarge`                 | Model size (bigger = more accurate, but slower and more resource‑hungry)                                   |
| `int8` / `fp32`                                                | Quantised version / high‑precision version                                                                 |
| `timestamp`                                                    | Supports output timestamps (for subtitles)                                                                 |
| `kv` / `selfcrosskv`                                           | Enables KV‑cache acceleration                                                                              |
| `ctc`                                                          | Uses the CTC decoding architecture (usually faster)                                                        |
| `turbo`                                                        | Accelerated distilled version from the Whisper family                                                      |
| `distil`                                                       | Distilled version (Distil‑Whisper), smaller and faster than the original                                   |
| `finetune` / specific suffixes (e.g. `-belle`, `-wenetspeech`) | Fine‑tuned on a particular dataset; may perform better on specific domains (dialects, conversations, etc.) |
| `seaco`                                                        | Supports hotword customisation                                                                             |
| `llm`                                                          | Enhanced with a large language model                                                                       |
| `opt`                                                          | Optimised version (preferred when available)                                                               |

> When you see `distil-whisper-xxx`, it is faster and smaller than a `whisper-xxx` of the same size – ideal for resource‑constrained scenarios.\
> When you see `xxx-cantonese-onnx` or `xxx-wenetspeech-yue`, it has been fine‑tuned for Cantonese and will be more accurate than a general model.\
> When you see `xxx-onnx-opt`, it usually performs better than `xxx-onnx`.

***

### 3. Four‑Step Selection: Filter According to Your Needs

#### Step 1: What language(s) do you mainly speak?

Look at the `Languages` column in the tables and filter for models that include your required language(s).

- **Mandarin**: Prefer models tagged with `zh` or `Chinese`
- **Code‑switching Chinese/English**: Look for `zh-en` or `Chinese/English`
- **Cantonese**: Look for `yue` or `Cantonese` (or names containing `cantonese` / `yue`)
- **English**: Look for `en` or `English`, or `distil-whisper-*-en` etc.
- **Japanese/Korean/Thai/Russian etc.**: Find models with the corresponding language tags (e.g. `ja`, `ko`, `th`, `ru`)
- **Many languages worldwide**: Look for `multilingual`, `multi`, or models supporting many languages (e.g. Whisper series supports 99‑106 languages)

> A model that is specifically designed for a given language will usually achieve higher accuracy on that language. Multilingual models are convenient but may be slightly less accurate than dedicated ones.\
> If you see `finetune` or a specific suffix like `-belle` or `-wenetspeech`, it means the model has been fine‑tuned for a vertical domain (medical, conversation, dialect). If your scenario matches, give it priority.

#### Step 2: Real‑time or offline?

Check the `Type` column:

| Your need                                                | Choose type   | `-t` argument                                                              |
| -------------------------------------------------------- | ------------- | -------------------------------------------------------------------------- |
| Real‑time conversation, live subtitles, microphone input | Streaming     | `-t online`                                                                |
| Processing audio files, no real‑time requirement         | Non‑streaming | `-t offline`                                                               |
| Real‑time preview plus final refinement                  | Both          | `-t 2pass` (you need a primary online model and a secondary offline model) |

#### Step 3: What is your hardware level?

Look at the `Precision suffix` and the `size` encoded in the model name:

| Hardware situation                            | Prefer                                         | Command suggestion                                                                                             |
| --------------------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Server (8+ cores, 8+ GB RAM)                  | `fp32` or non‑quantised, size `large`/`xlarge` | default or `--accuracy fp32`                                                                                   |
| Ordinary PC (4 cores, 4 GB RAM)               | `int8` quantised, size `base`/`large`          | `--accuracy int8`                                                                                              |
| Raspberry Pi, old laptop, embedded device     | `int8` quantised, size `tiny`/`small`          | Pick a model with `tiny` and `int8` in its name, e.g. `moonshine-tiny-*-int8` or `distil-whisper-small-*-int8` |
| Speed is top priority, accuracy can be traded | `int8` + `ctc`, size `small`                   | Choose a model containing `ctc` and `int8`                                                                     |

> `int8` quantised versions reduce size by 50‑75%, increase speed by 2‑4x, and typically lose less than 1% accuracy – strongly recommended.\
> `distil-*` models are faster and smaller than the original of the same size – also good for resource‑constrained scenarios.

#### Step 4: Do you need to generate subtitles?

**Without using a VAD model**:

- **Need SRT/VTT subtitles** → You must select a model with `Timestamps = Yes` (the column marked `Yes`, or a name containing `timestamp`)
- **No subtitles needed** → Ignore the timestamp metric; any model works

**When using a VAD model**:

- The model's timestamp metric is not required. You can even use only an online model and still generate subtitles with timestamps.

> You don't need to worry about punctuation – the program adds it automatically. So the `Punctuation` column can be completely ignored.

**Extra requirement: Hotword customisation**\
If you want to improve recognition of specific terms (brand names, person names, technical terms), look for models with `seaco` in their name (SeACo‑Paraformer). They support hotword boosting.

***

### 4. Common Command Templates (just fill in the model you selected)

```bash
# Offline file recognition
manyspeech asr -t offline -i file --files "your_audio.wav" --model your_chosen_model

# Real‑time microphone
manyspeech asr -t online -i mic --model your_chosen_model

# 2‑pass mode
manyspeech asr -t 2pass -i mic \
  --model streaming_model_name \
  --model2 offline_model_name

# Output subtitles (only if the model supports timestamps)
manyspeech asr -t offline -i file --files "audio.wav" \
  --format srt --model model_name

# Force use of int8 quantisation (if the model has an int8 version)
manyspeech asr -t offline -i file --files "audio.wav" \
  --accuracy int8 --model model_name

# Low‑end device: limit threads + lightweight model
manyspeech --threads 1 asr -t offline -i file --files "audio.wav" \
  --model lightweight_model_name

# Switch VAD (use silero in noisy environments)
manyspeech --vad silero-vad-v6-onnx asr -t online -i mic --model your_chosen_model
```

***

## II. VAD (Voice Activity Detection) Models

### 1. Available Models

| Model Name                  | Characteristics                   | Use Case                         | CLI                        |
| --------------------------- | --------------------------------- | -------------------------------- | -------------------------- |
| `alifsmnvad-onnx` (default) | Balanced accuracy and speed       | Meeting rooms, quiet recordings  | `--vad alifsmnvad-onnx`    |
| `silero-vad-v6-onnx`        | More robust in noisy environments | Phone calls, outdoors, far‑field | `--vad silero-vad-v6-onnx` |

### 2. Selection Advice

- **Quiet environment**: Use the default `alifsmnvad-onnx`.
- **Noisy environment** (fan, traffic, multiple people chatting): Switch to `silero-vad-v6-onnx`.

### 3. Common Commands

```bash
# Specify a VAD model during ASR
manyspeech --vad silero-vad-v6-onnx asr -t online -i mic --model your_model

# Use the vad subcommand alone to detect speech segments
manyspeech vad -t offline -i file --files "recording.wav" --vad silero-vad-v6-onnx
```

***

## III. Punctuation Restoration Models

### 1. Available Model

| Model Name                                 | Description                                                       |
| ------------------------------------------ | ----------------------------------------------------------------- |
| `alicttransformerpunc-zh-en-mge-int8-onnx` | Chinese‑English punctuation, INT8 quantised, lightweight and fast |

### 2. Notes

- By default, ASR automatically enables this model to add punctuation to recognition results. Usually no manual intervention is needed.
- If you want to call it manually or test it, you can use the `punc` subcommand.

### 3. Common Commands

```bash
# Manually restore punctuation for a text without punctuation
manyspeech punc --text "today is a nice day lets go for a picnic"

# Disable punctuation restoration in ASR (to test the model's native output)
manyspeech --punc "" asr -t offline -i file --files "audio.wav" --model model_name
```

***

## IV. AudioSep Audio Separation Models (planned)

> This feature is under development. No models are available yet. The following is a preview of selection dimensions.

### 4.1 Future Available Models (example)

- Vocals separation models (e.g. ONNX versions of Demucs, Spleeter)
- Accompaniment / instrument separation models

### 4.2 Selection Dimensions (planned)

| Dimension         | Options                                    | Description                                                          |
| ----------------- | ------------------------------------------ | -------------------------------------------------------------------- |
| Separation target | Vocals / accompaniment / drums / bass etc. | Choose the output stem according to your need                        |
| Model size        | Lightweight / high‑precision               | Lightweight for real‑time, high‑precision for offline processing     |
| Output format     | Separate audio files / masks               | Separate files are immediately usable; masks require post‑processing |

### 4.3 Placeholder Command (future implementation)

```bash
# Example (future)
manyspeech audiosep -i file --files "mix.wav" --target vocals --output vocals.wav
```

***

## V. Frequently Asked Questions

**Q: In the ASR table, Punctuation says “No”. Will the output have punctuation?**\
A: Yes. Because the program by default calls punctuation restoration (`--punc`). You don't need to worry about whether the model itself outputs punctuation.

**Q: Can KV acceleration and int8 be used together?**\
A: Yes. Models whose names contain both `int8` and `kv`/`selfcrosskv` support that combination.

**Q: What is the difference between distil‑whisper and regular whisper?**\
A: distil‑whisper is a distilled version – smaller, faster, slightly lower accuracy but usually sufficient. It is suitable for resource‑constrained scenarios.

**Q: How can I tell whether a model supports my language?**\
A: Look at the `Languages` column in the table, or infer from language codes in the model name (zh / yue / en / ja / ko etc.).

**Q: What if downloading is too slow?**\
A: Download manually from [ModelScope](https://modelscope.cn/profile/manyeyes?tab=model) and place the files in your `--base` directory (by default, `models/` under the program directory).

***

## VI. Summary: Selecting a Model Means Selecting Metrics

| Model Type   | Core Selection Dimensions                                              | Advice                                            |
| ------------ | ---------------------------------------------------------------------- | ------------------------------------------------- |
| **ASR**      | Language → real‑time requirement → hardware → subtitle need → hotwords | Prefer `int8` + `kv` versions; ignore punctuation |
| **VAD**      | Ambient noise level                                                    | Quiet → default; noisy → `silero-vad`             |
| **Punc**     | No selection needed                                                    | Default works; can also be called manually        |
| **AudioSep** | Separation target, precision (planned)                                 | To be supported in a future release               |

Follow this order to filter models in the list, put the resulting model name after `--model`, and run the command. If the result is not satisfactory, adjust the filters and try another batch of models.
