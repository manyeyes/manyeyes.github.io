# 環境変数の設定

環境変数でグローバルパラメータを事前設定できます。

## Windows (cmd)

```cmd
set MANYSPEECH_TYPE=online
set MANYSPEECH_METHOD=chunk
set MANYSPEECH_THREADS=4
set MANYSPEECH_FORMAT=srt
set MANYSPEECH_OUTPUT=D:\Output
manyspeech asr -i mic
```

## Windows (PowerShell)

```powershell
$env:MANYSPEECH_TYPE="online"
$env:MANYSPEECH_METHOD="chunk"
$env:MANYSPEECH_THREADS="4"
$env:MANYSPEECH_FORMAT="srt"
$env:MANYSPEECH_OUTPUT="D:\Output"
manyspeech asr -i mic
```

## Linux/macOS

```bash
export MANYSPEECH_TYPE=online
export MANYSPEECH_METHOD=chunk
export MANYSPEECH_THREADS=4
manyspeech asr -i mic
```

サポートする環境変数一覧:

| 変数名 | 対応引数 | 説明 |
|--------|----------|------|
| MANYSPEECH_BASE | --base | モデルルート |
| MANYSPEECH_OUTPUT | --output | 出力ディレクトリ |
| MANYSPEECH_THREADS | --threads | スレッド数 |
| MANYSPEECH_ACCURACY | --accuracy | 精度 |
| MANYSPEECH_TYPE | -t, --type | 認識タイプ |
| MANYSPEECH_METHOD | -m, --method | 処理方式 |
| MANYSPEECH_INPUT | -i, --input | 入力 |
| MANYSPEECH_FORMAT | --format | 出力形式 |
| MANYSPEECH_MODEL | -md, --model | メインモデル |
| MANYSPEECH_MODEL2 | --model2 | 副モデル |
| MANYSPEECH_VAD | --vad | VAD モデル |
| MANYSPEECH_PUNC | --punc | 句読点モデル |

> 💡 優先順位: コマンドライン > 環境変数 > 設定ファイル
