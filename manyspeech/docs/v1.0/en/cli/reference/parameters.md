# Full Parameter Reference

## Global Options

| Option | Description | Default | Env Var |
|------|------|--------|----------|
| `-b, --base <path>` | Model root dir | Program Dir | `MANYSPEECH_BASE` |
| `-o, --output <dir>` | Working dir | Current Dir | `MANYSPEECH_OUTPUT` |
| `--accuracy <fp32/int8>` | Model precision | `int8` | `MANYSPEECH_ACCURACY` |
| `--threads <num>` | Inference threads, 0=Auto | `2` | `MANYSPEECH_THREADS` |
| `--debug` | Enable debug output | — | — |
| `--save-default` | Save params as default | — | — |
| `--show-config` | Show current config | — | — |
| `--reset-config` | Reset config to defaults | — | — |

## asr Subcommand Options

| Option | Description | Default | Env Var |
|------|------|--------|----------|
| `-t, --type <online/offline/2pass>` | Recognition type (Required) | — | `MANYSPEECH_TYPE` |
| `-m, --method <one/batch/chunk>` | Processing method | `chunk` | `MANYSPEECH_METHOD` |
| `-i, --input <file/mic>` | Input source | `file` | `MANYSPEECH_INPUT` |
| `--format <json/text/srt/vtt>` | Output format | `text` | `MANYSPEECH_FORMAT` |
| `-f, --files <files...>` | Audio files (Multi-support) | — | — |
| `-md, --model <name>` | Main model name | Auto | `MANYSPEECH_MODEL` |
| `--model2 <name>` | 2pass secondary model | Auto | `MANYSPEECH_MODEL2` |
| `--vad <name>` | VAD model name | `alifsmnvad-onnx` | `MANYSPEECH_VAD` |
| `--punc <name>` | Punctuation model | `alicttransformerpunc-zh-en-mge-int8-onnx` | `MANYSPEECH_PUNC` |

## vad Subcommand Options

| Option | Description | Default |
|------|------|--------|
| `-t, --type <online/offline>` | Detection type (Required) | — |
| `-m, --method <one/batch/chunk>` | Processing method | `chunk` |
| `-i, --input <file/mic>` | Input source | `file` |
| `--format <wav/pcm/raw>` | Output format | `wav` |
| `-f, --files <files...>` | Input audio files | — |
| `--vad <name>` | VAD model name | `alifsmnvad-onnx` |

## punc Subcommand Options

| Option | Description | Default |
|------|------|--------|
| `--text <text>` | Text to punctuate | — |
| `-f, --files <files...>` | Input text files | — |
| `--split <num>` | Text split size | `15` |
| `--format <json/text>` | Output format | `text` |
| `--punc <name>` | Punctuation model | `alicttransformerpunc-zh-en-mge-int8-onnx` |
