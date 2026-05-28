# 全パラメータ説明

## グローバルオプション

| 引数 | 説明 | デフォルト | 環境変数 |
|------|------|--------|----------|
| `-b, --base <パス>` | モデルルートディレクトリ | プログラムディレクトリ | `MANYSPEECH_BASE` |
| `-o, --output <ディレクトリ>` | ワークディレクトリ | カレントディレクトリ | `MANYSPEECH_OUTPUT` |
| `--accuracy <fp32/int8>` | 推論精度 | `int8` | `MANYSPEECH_ACCURACY` |
| `--threads <数>` | 推論スレッド数（0=自動検出） | `2` | `MANYSPEECH_THREADS` |
| `--debug` | デバッグ出力を有効化 | — | — |
| `--save-default` | 現在のパラメータをデフォルトとして保存 | — | — |
| `--show-config` | 現在の設定を表示 | — | — |
| `--reset-config` | 設定をデフォルトにリセット | — | — |

## asr サブコマンドオプション

| 引数 | 説明 | デフォルト | 環境変数 |
|------|------|--------|----------|
| `-t, --type <online/offline/2pass>` | 認識タイプ（必須） | — | `MANYSPEECH_TYPE` |
| `-m, --method <one/batch/chunk>` | 処理方式 | `chunk` | `MANYSPEECH_METHOD` |
| `-i, --input <file/mic>` | 入力ソース | `file` | `MANYSPEECH_INPUT` |
| `--format <json/text/srt/vtt>` | 出力フォーマット | `text` | `MANYSPEECH_FORMAT` |
| `-f, --files <ファイル...>` | 音声ファイル一覧（複数可） | — | — |
| `-md, --model <名前>` | メインモデル名 | 自動マッチ | `MANYSPEECH_MODEL` |
| `--model2 <名前>` | 2pass 用副モデル名 | 自動マッチ | `MANYSPEECH_MODEL2` |
| `--vad <名前>` | VAD モデル名 | `alifsmnvad-onnx` | `MANYSPEECH_VAD` |
| `--punc <名前>` | 句読点モデル名 | `alicttransformerpunc-zh-en-mge-int8-onnx` | `MANYSPEECH_PUNC` |

## vad サブコマンドオプション

| 引数 | 説明 | デフォルト |
|------|------|--------|
| `-t, --type <online/offline>` | 検出タイプ（必須） | — |
| `-m, --method <one/batch/chunk>` | 処理方式 | `chunk` |
| `-i, --input <file/mic>` | 入力ソース | `file` |
| `--format <wav/pcm/raw>` | 出力フォーマット | `wav` |
| `-f, --files <ファイル...>` | 入力音声ファイル一覧 | — |
| `--vad <名前>` | VAD モデル名 | `alifsmnvad-onnx` |

## punc サブコマンドオプション

| 引数 | 説明 | デフォルト |
|------|------|--------|
| `--text <テキスト>` | 句読点を付けたいテキスト | — |
| `-f, --files <ファイル...>` | 入力ファイル一覧 | — |
| `--split <数>` | テキスト分割サイズ | `15` |
| `--format <json/text>` | 出力フォーマット | `text` |
| `--punc <名前>` | 句読点モデル名 | `alicttransformerpunc-zh-en-mge-int8-onnx` |
