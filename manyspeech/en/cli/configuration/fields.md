# Config Fields

Example `manyspeech.json`:

```json
{
  "version": "1.0.0",
  "defaults": {
    "method": "chunk",
    "input": "file",
    "format": "text",
    "threads": 2,
    "accuracy": "int8",
    "model": "",
    "model2": "",
    "vad": "alifsmnvad-onnx",
    "punc": "alicttransformerpunc-zh-en-mge-int8-onnx",
    "base": "",
    "output": ""
  }
}
```

## Field Descriptions

| Field      | Description           | CLI Arg        | Default                                    |
| ---------- | --------------------- | -------------- | ------------------------------------------ |
| `method`   | Processing method     | `-m, --method` | `chunk`                                    |
| `input`    | Input source          | `-i, --input`  | `file`                                     |
| `format`   | Output format         | `--format`     | `text`                                     |
| `threads`  | Thread count (0=Auto) | `--threads`    | `2`                                        |
| `accuracy` | Model precision       | `--accuracy`   | `int8`                                     |
| `model`    | Main model name       | `-md, --model` | `""` (Auto)                                |
| `model2`   | 2pass secondary model | `--model2`     | `""` (Auto)                                |
| `vad`      | VAD model name        | `--vad`        | `alifsmnvad-onnx`                          |
| `punc`     | Punctuation model     | `--punc`       | `alicttransformerpunc-zh-en-mge-int8-onnx` |
| `base`     | Model root dir        | `-b, --base`   | `""` (Program Dir)                         |
| `output`   | Working dir           | `-o, --output` | `""` (Current Dir)                         |
