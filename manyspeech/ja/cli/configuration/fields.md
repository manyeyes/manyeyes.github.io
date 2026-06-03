# 設定フィールド説明

設定ファイル `manyspeech.json` の例:

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

## フィールド説明

| フィールド      | 説明            | 対応 CLI 引数      | デフォルト                                      |
| ---------- | ------------- | -------------- | ------------------------------------------ |
| `method`   | 処理方式          | `-m, --method` | `chunk`                                    |
| `input`    | 入力ソース         | `-i, --input`  | `file`                                     |
| `format`   | 出力形式          | `--format`     | `text`                                     |
| `threads`  | スレッド数（0=自動検出） | `--threads`    | `2`                                        |
| `accuracy` | モデル精度         | `--accuracy`   | `int8`                                     |
| `model`    | メインモデル名       | `-md, --model` | `""`（自動マッチ）                                |
| `model2`   | 2pass の副モデル   | `--model2`     | `""`（自動マッチ）                                |
| `vad`      | VAD モデル名      | `--vad`        | `alifsmnvad-onnx`                          |
| `punc`     | 句読点モデル名       | `--punc`       | `alicttransformerpunc-zh-en-mge-int8-onnx` |
| `base`     | モデルルートディレクトリ  | `-b, --base`   | `""`（プログラムディレクトリ）                          |
| `output`   | ワークディレクトリ     | `-o, --output` | `""`（カレントディレクトリ）                           |
