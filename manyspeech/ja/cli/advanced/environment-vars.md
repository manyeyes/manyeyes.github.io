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

| 変数名                  | 対応引数         | 説明       |
| -------------------- | ------------ | -------- |
| MANYSPEECH\_BASE     | --base       | モデルルート   |
| MANYSPEECH\_OUTPUT   | --output     | 出力ディレクトリ |
| MANYSPEECH\_THREADS  | --threads    | スレッド数    |
| MANYSPEECH\_ACCURACY | --accuracy   | 精度       |
| MANYSPEECH\_TYPE     | -t, --type   | 認識タイプ    |
| MANYSPEECH\_METHOD   | -m, --method | 処理方式     |
| MANYSPEECH\_INPUT    | -i, --input  | 入力       |
| MANYSPEECH\_FORMAT   | --format     | 出力形式     |
| MANYSPEECH\_MODEL    | -md, --model | メインモデル   |
| MANYSPEECH\_MODEL2   | --model2     | 副モデル     |
| MANYSPEECH\_VAD      | --vad        | VAD モデル  |
| MANYSPEECH\_PUNC     | --punc       | 句読点モデル   |

> 💡 優先順位: コマンドライン > 環境変数 > 設定ファイル
