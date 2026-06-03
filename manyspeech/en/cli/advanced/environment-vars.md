# Environment Variables

Pre-set global parameters via environment variables.

## Windows (cmd)

```cmd
set MANYSPEECH_TYPE=online
set MANYSPEECH_METHOD=chunk
set MANYSPEECH_THREADS=4
set MANYSPEECH_FORMAT=srt
manyspeech asr -i mic
```

## Windows (PowerShell)

```powershell
$env:MANYSPEECH_TYPE="online"
$env:MANYSPEECH_METHOD="chunk"
$env:MANYSPEECH_THREADS="4"
$env:MANYSPEECH_FORMAT="srt"
manyspeech asr -i mic
```

## Linux/macOS

```bash
export MANYSPEECH_TYPE=online
export MANYSPEECH_METHOD=chunk
export MANYSPEECH_THREADS=4
manyspeech asr -i mic
```

## Supported Variables

| Variable              | CLI Arg        | Description       |
| --------------------- | -------------- | ----------------- |
| `MANYSPEECH_BASE`     | `--base`       | Model root dir    |
| `MANYSPEECH_OUTPUT`   | `--output`     | Output dir        |
| `MANYSPEECH_THREADS`  | `--threads`    | Thread count      |
| `MANYSPEECH_ACCURACY` | `--accuracy`   | Precision         |
| `MANYSPEECH_TYPE`     | `-t, --type`   | Recognition type  |
| `MANYSPEECH_METHOD`   | `-m, --method` | Processing method |
| `MANYSPEECH_INPUT`    | `-i, --input`  | Input source      |
| `MANYSPEECH_FORMAT`   | `--format`     | Output format     |
| `MANYSPEECH_MODEL`    | `-md, --model` | Main model        |
| `MANYSPEECH_MODEL2`   | `--model2`     | Secondary model   |
| `MANYSPEECH_VAD`      | `--vad`        | VAD model         |
| `MANYSPEECH_PUNC`     | `--punc`       | Punctuation model |

> 💡 **Priority**: CLI Args > Env Vars > Config Files
