## v1.0/ja/cli/getting-started/index.md

# クイックスタート

ManySpeech-CLI へようこそ！このガイドで素早く始められます。

## 二つの配布方式

| バージョン | 特徴 | 適用シーン |
|---------|---------|---------|
| **ポータブル（インストール不要）** | 解凍してすぐ実行、レジストリ痕跡なし | 一時利用、携帯配布 |
| **インストーラ版** | ウィザード形式でインストール、PATH 追加など自動設定 | 日常的に利用する場合 |

> 💡 推奨：インストーラ版を使えばインストール後にターミナルで直接 `manyspeech` を実行できます。

## 二つの利用モード

| モード | 起動方法 | 適用シーン |
|------|----------|----------|
| **インタラクティブ** | exe をダブルクリック、または `manyspeech` を実行 | 手動テスト・機能探索 |
| **コマンドライン** | `manyspeech <サブコマンド> [パラメータ]` | スクリプト実行・自動化 |

次へ:
- [インストール](./installation)
- [初回利用](./first-use)


---

## v1.0/ja/cli/getting-started/installation.md

# インストールガイド

## システム要件

| プラットフォーム | 要件 | 備考 |
|------|----------|------|
| Windows | 10 / 11 (64bit) | メモリ 4GB 以上推奨、マイク（リアルタイム認識時） |

## Windows インストール

### 方法1：インストーラ（推奨）

ダウンロード候補:
- ModelScope ミラー: [manyspeech-cli-1.0.0-preview.9.17-win-x64-setup.exe](https://modelscope.cn/models/manyeyes/manyspeech-cli/resolve/master/manyspeech-cli-1.0.0-preview.9.17-win-x64-setup.exe)
- GitHub Releases: [manyspeech-cli-1.0.0-preview.9.17-win-x64-setup.exe](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.17/manyspeech-cli-1.0.0-preview.9.17-win-x64-setup.exe)

インストール手順:
1. インストーラをダブルクリックしウィザードに従う
2. インストール後、コマンドプロンプトまたは PowerShell で以下を実行して確認:

```bash
manyspeech --help
```

### 方法2：ポータブル版（インストール不要）

ダウンロード候補:
- ModelScope ミラー: [manyspeech-cli-1.0.0-preview.9.17-win-x64.zip](https://modelscope.cn/models/manyeyes/manyspeech-cli/file/view/master/manyspeech-cli-1.0.0-preview.9.17-win-x64.zip)
- GitHub Releases: [manyspeech-cli-1.0.0-preview.9.17-win-x64.zip](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.17/manyspeech-cli-1.0.0-preview.9.17-win-x64.zip)

手順:
1. 任意のディレクトリに解凍（例: D:\Tools\ManySpeech）
2. ディレクトリへ移動して manyspeech-cli.exe をダブルクリックで実行

> 💡 ヒント：任意の場所から manyspeech を呼び出したい場合は解凍先を PATH に追加してください（install.bat を実行すると自動で追加できます）。アンインストールは uninstall.bat を実行。

検証:
```bash
manyspeech --help
```


---

## v1.0/ja/cli/getting-started/first-use.md

# 初回の使い方

## インタラクティブモード（初心者向け）

manyspeech-cli.exe をダブルクリックしてインタラクティブモードに入ります:

```cmd
=====================================
入力コマンドを入力（'exit' で終了、空行でヘルプ表示）:

# 1. 初回は言語選択
言語を選択: 1. 日本語; 2. English;
1

# 2. 認識コマンドを入力
> asr -t offline -f D:\test.wav

# プログラムが自動でモデルをダウンロードして認識を開始します
```

## コマンドラインモード

```bash
# コマンドプロンプトまたは PowerShell を開く
cd D:\Tools\ManySpeech

# ファイル1件を認識
manyspeech asr -t offline -f test.wav

# マイクのリアルタイム認識（ESC で終了）
manyspeech asr -t online -i mic
```

初回動作事項:
- 初回実行時に設定ファイル manyspeech.json を自動生成
- 初めて使うモデルは自動でダウンロードされる
- モデルは大きい場合があるためダウンロード完了まで待つ必要あり

最小コマンド例:

```bash
# テスト用デフォルト音声を使う
manyspeech asr -t offline

# マイクでリアルタイム
manyspeech asr -t online -i mic
```


---

## v1.0/ja/cli/usage/index.md

# 使用ガイド

ManySpeech-CLI は以下の主要なサブコマンドを提供します：

## サブコマンド概要

| サブコマンド | 機能 | サポートタイプ |
|--------|------|----------|
| `asr` | 音声認識 | online / offline / 2pass |
| `vad` | 音声端点検出 | online / offline |
| `punc` | 句読点復元 | - |

## コマンド構造

```bash
manyspeech <サブコマンド> [パラメータ...]
```

> 💡 ヒント：グローバルオプション（`--base`、`--vad`、`--output`、`--debug` 等）はコマンドラインの任意の位置に置けます。

## クイック例

```bash
# 音声認識
manyspeech asr -t offline -f audio.wav

# VAD 検出
manyspeech vad -t online -i mic

# 句読点復元
manyspeech punc --text "こんにちは世界"
```

ナビゲーション:
- [コマンドラインモード vs インタラクティブモード](./cli-modes)
- [サブコマンド詳細](./commands)
- [典型的な使用例](./examples)
- [デバッグ](./debugging)


---

## v1.0/ja/cli/usage/cli-modes.md

# コマンドラインモード 対 インタラクティブモード
## インタラクティブモード
インタラクティブモードを起動すると、コマンドラインプロンプトが表示され、コマンドを1行ずつ入力できます。手動での動作確認や機能の試用に適しています。

```bash
# 起動方法
manyspeech
```

起動後の操作例：
```cmd
> asr -t offline -f test.wav
> vad -t online -i mic
> exit
```

**メリット**
- 毎回 `manyspeech` コマンドを入力する必要がない
- コマンド履歴を利用可能（上下キーで呼び出し）
- Tabキーによるパラメータ補完に対応

## コマンドラインモード
スクリプト呼び出しや自動化処理に適しています。

```bash
manyspeech asr -t offline -f test.wav
manyspeech vad -t online -i mic
```

**メリット**
- バッチファイルやPowerShellスクリプトに埋め込み可能
- パイプやリダイレクトに対応
- CI/CDフローへの連携が容易

## 簡単な切り替え
インタラクティブモード中に `!` を先頭に入力すると、一時的にシステムコマンドを実行できます。

```cmd
> !dir
> !manyspeech asr -t offline -f other.wav
```

---

## v1.0/ja/cli/usage/commands.md

# サブコマンド詳細

## asr - 音声認識

### 認識タイプ

| タイプ | 説明 | 適用シーン |
|------|------|----------|
| `online` | リアルタイムストリーミング認識、録音しつつ逐次出力 | マイク、配信、低遅延用途 |
| `offline` | 非ストリーミングでファイル全体を処理 | ファイル認識、長時間音声 |
| `2pass` | 二重ストリーム融合（リアルタイム + 後処理） | リアルタイムと精度の両立 |

### 基本的な使い方

```bash
# ファイル認識（オフライン）
manyspeech asr -t offline -f audio.wav

# マイク認識（オンライン）
manyspeech asr -t online -i mic

# 2pass 認識
manyspeech asr -t 2pass -i mic
```

### 出力フォーマット

| フォーマット | 説明 |
|------|------|
| `text` | プレーンテキスト（デフォルト） |
| `json` | タイムスタンプ付きの JSON |
| `srt` | SubRip 字幕 |
| `vtt` | WebVTT 字幕 |

```bash
manyspeech asr -t offline --format srt -f audio.wav
```

---

## vad - 音声端点検出

### 検出タイプ

| タイプ | 説明 | 適用シーン |
|------|------|----------|
| `online` | リアルタイムストリーミング検出 | マイクのリアルタイムVAD |
| `offline` | 非ストリーミングでファイルを処理 | 音声ファイルの無音除去 |

### 基本的な使い方

```bash
# マイクのオンライン検出
manyspeech vad -t online -i mic

# 音声ファイルのオフライン検出
manyspeech vad -t offline -f audio.wav

# 出力形式指定
manyspeech vad -t offline --format wav -f audio.wav
```

### 出力フォーマット

| フォーマット | 説明 |
|------|------|
| `wav` | 音声（デフォルト） |
| `pcm` | 音声 |
| `raw` | 音声 |

---

## punc - 句読点復元

### 基本的な使い方

```bash
# テキスト入力
manyspeech punc --text "今日はいい天気一緒に出かけよう"

# ファイルから読み込み
manyspeech punc -f text.txt

# インタラクティブモード
manyspeech punc
> 入力テキスト
```

### 出力フォーマット

| フォーマット | 説明 |
|------|------|
| `txt` | テキスト（デフォルト） |


---

## v1.0/ja/cli/usage/examples.md

# 典型的な使用例

## 長時間オフラインストリーミング認識・字幕生成

```cmd
# FireRedASR 大モデル（中国語に最適、高精度）
manyspeech asr -t offline -m chunk --format srt --threads 4 -f "D:\audio\0.wav" --model fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212

# FunASR 軽量モデル（高速、低リソース）
manyspeech asr -t offline -m chunk --format srt --threads 2 -f "D:\audio\0.wav" --model Fun-ASR-Nano-2512-LLM-int8-onnx
```

## マイクのリアルタイム認識

```cmd
# ストリーミングモデル + マイク（最小遅延）
manyspeech asr -t online -i mic

# オフラインモデル + マイク（精度重視）
manyspeech asr -t offline -m chunk -i mic

# 2pass モード + マイク（リアルタイムと精度の両立）
manyspeech asr -t 2pass -i mic
```

## 2pass 二重ストリーム融合認識

```cmd
# Paraformer 2pass
manyspeech asr -t 2pass -i mic --model paraformer-large-zh-en-int8-onnx-online --model2 paraformer-seaco-large-zh-timestamp-int8-onnx-offline

# K2Transducer 2pass
manyspeech asr -t 2pass -i mic --model k2transducer-zipformer-ctc-large-zh-onnx-online-yuekai-20250630 --model2 k2transducer-zipformer-ctc-small-zh-int8-onnx-offline-20250716
```

## VAD 音声端点検出

```cmd
# マイクのオンライン検出
manyspeech vad -t online -i mic

# 音声ファイルのオフライン検出（無音除去）
manyspeech vad -t offline -f meeting.wav

# 出力形式指定
manyspeech vad -t offline --format wav -f noisy_speech.wav
```

## 句読点復元

```cmd
# テキストを直接入力
manyspeech punc --text "今日はいい天気一緒にピクニックに行こう"

# ファイルから読み込み
manyspeech punc -f transcript.txt

# JSON 出力を指定
manyspeech punc --text "hello world" --format json
```


---

## v1.0/ja/cli/usage/debugging.md

# デバッグモード

## デバッグを有効にする

```bash
# CLI モード
manyspeech --debug asr -t online -i mic

# インタラクティブモード
> --debug
```

## デバッグ出力例

```
[DEBUG] デバッグモードがサブコマンドで有効化されました
[DEBUG] 実行コマンド: asr
[DEBUG] グローバルパラメータ - basePath: D:\Tools\ManySpeech, outputDir: D:\Tools\ManySpeech\output
[DEBUG] グローバルパラメータ - threads: 2, accuracy: int8, saveAsDefault: False
[DEBUG] ASR パラメータ - method: one, model: , model2: , vad: alifsmnvad-onnx, punc: alicttransformerpunc-zh-en-mge-int8-onnx, format: text
[DEBUG] コマンドラインで指定されたモデルディレクトリを使用: D:\Tools\ManySpeech
[DEBUG] プロセッサを準備しています
...
```

適用シーン:
- パラメータ解析のトラブルシュート
- 実行フローの確認
- 設定ファイルの読み込みデバッグ
- モデルパス解決の分析
- 環境変数の有効性確認

> 💡 注意：デバッグ出力にはパスなどの機微情報が含まれるため、ログを共有する際はマスキングしてください。


---

## v1.0/ja/cli/configuration/index.md

# 設定管理

ManySpeech-CLI は多階層の設定ファイルをサポートし、よく使うパラメータを永続化できます。

## 設定ファイルの優先順位

```
コマンドライン引数（最優先）
        ↓
    --save-default に保存された値
        ↓
    ローカル設定（プログラムディレクトリ/manyspeech.json）
        ↓
    ユーザー設定（%USERPROFILE%\.manyspeech\manyspeech.json）
        ↓
    システム設定（%PROGRAMDATA%\ManySpeech\manyspeech.json）
        ↓
    環境変数（MANYSPEECH_*）
        ↓
    プログラム内のデフォルト（最下位）
```

## クイック使用例

```bash
# 現在の設定を表示
manyspeech --show-config

# 現在のコマンドのパラメータをデフォルトとして保存
manyspeech asr -t offline -m chunk --format srt --threads 4 --save-default
✅ 設定がデフォルトとして保存されました

# その後は保存されたデフォルト値が適用されます
manyspeech asr -t offline -f test.wav

# 設定リセット
manyspeech --reset-config
```

次へ:
- [設定ファイルの配置](./file-location)
- [設定フィールド一覧](./fields)
- [設定管理コマンド](./commands)


---

## v1.0/ja/cli/configuration/file-location.md

# 設定ファイルの配置

初回実行時、以下の場所に自動で設定ファイルが生成されます:

| 種類 | Windows パス | 優先度 | 説明 |
|------|-------------|--------|------|
| **ローカル設定** | プログラムディレクトリ `manyspeech.json` | **最高** | ポータブル設定（プログラムと一緒に移動） |
| **ユーザー設定** | `%USERPROFILE%\.manyspeech\manyspeech.json` | 中 | ユーザー個別設定 |
| **システム設定** | `%PROGRAMDATA%\ManySpeech\manyspeech.json` | 低 | システム全体のデフォルト設定 |

例:

```cmd
# ローカル設定を確認（存在する場合）
type "D:\Tools\ManySpeech\manyspeech.json"

# ユーザー設定
type "%USERPROFILE%\.manyspeech\manyspeech.json"

# システム設定
type "%PROGRAMDATA%\ManySpeech\manyspeech.json"
```

> 💡 ヒント：優先度が高い設定が低い設定の同名フィールドを上書きします。


---

## v1.0/ja/cli/configuration/fields.md

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

| フィールド | 説明 | 対応 CLI 引数 | デフォルト |
|------|------|----------------|--------|
| `method` | 処理方式 | `-m, --method` | `chunk` |
| `input` | 入力ソース | `-i, --input` | `file` |
| `format` | 出力形式 | `--format` | `text` |
| `threads` | スレッド数（0=自動検出） | `--threads` | `2` |
| `accuracy` | モデル精度 | `--accuracy` | `int8` |
| `model` | メインモデル名 | `-md, --model` | `""`（自動マッチ） |
| `model2` | 2pass の副モデル | `--model2` | `""`（自動マッチ） |
| `vad` | VAD モデル名 | `--vad` | `alifsmnvad-onnx` |
| `punc` | 句読点モデル名 | `--punc` | `alicttransformerpunc-zh-en-mge-int8-onnx` |
| `base` | モデルルートディレクトリ | `-b, --base` | `""`（プログラムディレクトリ） |
| `output` | ワークディレクトリ | `-o, --output` | `""`（カレントディレクトリ） |


---

## v1.0/ja/cli/configuration/commands.md

# 設定管理コマンド

## 設定表示

```bash
manyspeech --show-config
```

出力例:

```
現在の設定:
  version: 1.0.0
  defaults:
    method: chunk
    input: file
    format: text
    threads: 2
    accuracy: int8
    model:
    model2:
    vad: alifsmnvad-onnx
    punc: alicttransformerpunc-zh-en-mge-int8-onnx
    base: D:\Tools\ManySpeech
    output: D:\Tools\ManySpeech\output
```

## デフォルト設定を保存

```bash
# 現在のコマンドパラメータをデフォルトとして保存
manyspeech asr -t offline -m chunk --threads 4 --save-default

# 以降、自動的に保存されたデフォルトが使用される
manyspeech asr -f test.wav
```

## 設定リセット

```bash
manyspeech --reset-config
```

出力:
```
✅ 設定がデフォルトにリセットされました
```

## 優先度のデモ

```bash
# コマンドラインが設定ファイルを上書き
manyspeech asr -t offline --threads 8 -f test.wav

# 保存されたデフォルトを利用
manyspeech asr -t offline --save-default
manyspeech asr -f test.wav   # 保存した --threads が使用される
```


---

## v1.0/ja/cli/models/index.md

# モデル管理

ManySpeech-CLI はスマートなモデル管理を内蔵し、必要なモデルを自動検出・ダウンロードしてローカルで推論します。

## モデルの自動ダウンロード

未ダウンロードのモデルを指定した場合、ModelScope から自動でダウンロードされます:

```bash
manyspeech asr -t offline --model paraformer-large-zh-en-int8-onnx-offline -f test.wav
# モデルが存在しない場合、自動でダウンロードされます
```

## モデル保存場所

デフォルトのモデルルートはプログラムディレクトリ内の `models/` フォルダです。

`--base` で指定可能:

```bash
manyspeech --base D:\MyModels asr -t offline -f test.wav
```

次へ:
- [サポートモデル一覧](./supported-models)
- [自動ダウンロードの仕組み](./auto-download)
- [手動でモデルを指定する方法](./manual-specify)


---

## v1.0/ja/cli/models/supported-models.md

# サポートモデル一覧

## ASR モデル

| モデルファミリ | 説明 | サポート |
|---------|------|----------|
| **AliParaformerAsr** | Paraformer 系列 | online/offline/2pass |
| **FireRedAsr** | FireRed 大モデル（中国語向け、最高精度） | offline |
| **K2TransducerAsr** | K2 系列 | online/offline/2pass |
| **WhisperAsr** | OpenAI Whisper 系列 | offline |
| **MoonshineAsr** | 軽量英語モデル | offline |
| **WenetAsr** | Wenet | online/offline |
| **DolphinAsr** | Dolphin 系列 | offline |
| **OmniAsr** | オールラウンド | online |
| **Fun-ASR-Nano-2512** | Fun-ASR-Nano | offline |

## VAD モデル

| モデル名 | 説明 |
|---------|------|
| `alifsmnvad-onnx` | FSMN-VAD（デフォルト、汎用） |
| `silero-vad-v6-onnx` | Silero-VAD（騒音環境で優位） |

## 句読点モデル

| モデル名 | 説明 |
|---------|------|
| `alicttransformerpunc-zh-en-mge-int8-onnx` | CT-Transformer（デフォルト） |

詳細:
- [AliParaformerAsr リポジトリ](https://github.com/manyeyes/ManySpeech/blob/master/docs/readme/AliParaformerAsr/README.zh_CN.md)
- [FireRedAsr リポジトリ](https://github.com/manyeyes/ManySpeech/blob/master/docs/readme/FireRedAsr/README.zh_CN.md)
- [K2TransducerAsr リポジトリ](https://github.com/manyeyes/ManySpeech/blob/master/docs/readme/K2TransducerAsr/README.zh_CN.md)

さらに詳しくは ModelScope の manyeyes ページへ。


---

## v1.0/ja/cli/models/auto-download.md

# 自動ダウンロードの仕組み

## ダウンロードトリガー

認識コマンドで指定したモデルがローカルに存在しない場合、自動ダウンロードが開始されます。

```bash
manyspeech asr -t offline --model fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212 -f test.wav
```

## ダウンロードフロー

1. ローカルモデルディレクトリにモデルが存在するか確認
2. 存在しない場合、ModelScope からダウンロード
3. 解凍してモデルディレクトリへ配置
4. 認識処理を継続

## 進捗表示

```
モデルをダウンロード中: fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212
[===============>       ] 65%  128MB/197MB
ダウンロード完了、モデルをロード中...
```

## 再開（断点続行）

断点続行は未サポートです。ネットワーク断が発生した場合はモデルファイルを削除して再度コマンドを実行してください。

## 手動ダウンロード

ネットワークが不安定な場合は手動でモデルをダウンロードし、`models/` に置いてください。


---

## v1.0/ja/cli/models/manual-specify.md

# 手動でモデルを指定する

## メインモデル指定

```bash
# FireRedASR を使用
manyspeech asr -t offline --model fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212 -f meeting.wav

# Whisper tiny を使用
manyspeech asr -t offline --model whisper-tiny-en-onnx -f english.wav
```

## VAD モデル指定

```bash
# Silero VAD へ切替
manyspeech --vad silero-vad-v6-onnx asr -t online -i mic

# VAD を無効化
manyspeech --vad "" asr -t offline -f audio.wav
```

## 句読点モデル指定

```bash
# デフォルトの句読点モデルを使用
manyspeech --punc alicttransformerpunc-zh-en-mge-int8-onnx asr -t offline -f audio.wav

# 句読点を無効化
manyspeech --punc "" asr -t offline -f audio.wav
```

## 2pass モードで副モデルを指定

```bash
manyspeech asr -t 2pass -i mic --model paraformer-large-zh-en-int8-onnx-online --model2 paraformer-seaco-large-zh-timestamp-int8-onnx-offline
```


---

## v1.0/ja/cli/advanced/index.md

# 高度な使い方

この章では ManySpeech-CLI の高度な設定や統合テクニックを紹介します。

内容:
- [環境変数設定](./environment-vars) - 環境変数でパラメータを事前設定
- [バッチ処理スクリプト](./batch-processing) - 大量ファイルの自動処理
- [パフォーマンス最適化](./performance) - 推論速度と精度のチューニング

適用シーン:
- CI/CD 統合
- 大規模文字起こし
- サーバー運用
- カスタムワークフロー


---

## v1.0/ja/cli/advanced/environment-vars.md

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


---

## v1.0/ja/cli/advanced/batch-processing.md

# バッチ処理スクリプト

## Windows バッチ

```batch
@echo off
set INPUT_DIR=D:\audio
set OUTPUT_DIR=D:\output

for %%f in ("%INPUT_DIR%\*.wav") do (
    echo Processing %%f...
    manyspeech --output "%OUTPUT_DIR%" asr -t offline -m chunk --format srt --threads 4 -f "%%f"
)
echo Done!
pause
```

## PowerShell スクリプト

```powershell
# batch-process.ps1
param(
    [string]$inputDir = "D:\audio",
    [string]$outputDir = "D:\output"
)

Get-ChildItem $inputDir -Filter *.wav | ForEach-Object {
    Write-Host "Processing $($_.Name)..." -ForegroundColor Green
    & manyspeech --output $outputDir asr -t offline -m chunk --format srt --threads 4 -f $_.FullName
}

Write-Host "All files processed!" -ForegroundColor Green
```

## 並列処理（上級）

PowerShell の並列処理を利用:

```powershell
$files = Get-ChildItem "D:\audio" -Filter *.wav
$files | ForEach-Object -Parallel {
    & manyspeech asr -t offline -f $_.FullName
} -ThrottleLimit 4
```

## ffmpeg と組み合わせた前処理

```batch
for %%f in ("*.mp4") do (
    ffmpeg -i "%%f" -vn -acodec pcm_s16le -ar 16000 -ac 1 "temp.wav"
    manyspeech asr -t offline -f temp.wav --format srt > "%%~nf.srt"
    del temp.wav
)
```


---

## v1.0/ja/cli/advanced/performance.md

# パフォーマンス最適化

## スレッド数の調整

```bash
# CPU コア数を自動検出（推奨）
manyspeech --threads 0 asr -t offline -f audio.wav

# 手動設定（例: 8 コア）
manyspeech --threads 8 asr -t offline -f audio.wav
```

## モデル精度の選択

| 精度 | 速度 | 精度 | メモリ |
|------|------|------|------|
| `int8` | 速い | 高め | 低 |
| `fp32` | 遅い | 最高 | 高 |

```bash
# int8（デフォルト）
manyspeech asr -t offline --accuracy int8 -f audio.wav

# fp32（精度優先）
manyspeech asr -t offline --accuracy fp32 -f audio.wav
```

## 処理方式の選択

| 方式 | メモリ | レイテンシ | 適用 |
|------|----------|------|------|
| `one` | 高 | 高（全体終了後出力） | 短い音声（<30秒） |
| `chunk` | 低 | 低（ストリーミング出力） | 長時間音声・リアルタイム |

```bash
# 長時間音声には chunk を推奨
manyspeech asr -t offline -m chunk -f long_audio.wav
```

## VAD の最適化

騒音環境では Silero-VAD を推奨:

```bash
manyspeech --vad silero-vad-v6-onnx asr -t online -i mic
```

## ベンチマークの推奨

- `--debug` で詳細な処理時間を確認
- `--threads` を段階的に増やして最適値（通常は CPU コア数）を探す
- 長時間音声は `chunk` がメモリ効率良好


---

## v1.0/ja/cli/reference/index.md

# 参考資料

この章はコマンドリファレンスと更新履歴を提供します。

内容:
- [全パラメータ説明](./parameters) - 全ての CLI 引数の詳細
- [更新ログ](./changelog) - バージョン履歴

クイック検索:
```bash
manyspeech --help
manyspeech asr --help
manyspeech vad --help
manyspeech punc --help
```


---

## v1.0/ja/cli/reference/parameters.md

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


---

## v1.0/ja/cli/reference/changelog.md

# 更新ログ

## 2026-05-23

- CLI アーキテクチャをリファクタ、サブコマンド方式に
  - `asr` - 音声認識（online/offline/2pass をサポート）
  - `vad` - 音声端点検出
  - `punc` - 句読点復元
- `--debug` デバッグモードを追加

## 2026-05-21

- 独立した音声端点検出コマンド `vad` を追加

## 2026-05-19

- 独立した句読点復元コマンド `punc` を追加

## 2026-05-12

- 設定ファイル管理とパラメータ永続化を追加

## 2026-05-11

- コマンドライン解析をリファクタし、スマート補完をサポート

## 2026-05-08

- モデルサポートを追加
- ターミナル出力を改善

## 2025-09-22

- `fsmn-vad` / `silero-vad` の切替サポートを追加

## 2025-09-09

- `2pass` 認識モード追加、タイムスタンプ精度を改善

## 2025-09-05

- SRT/JSON/テキスト等の出力形式をサポート

## 2025-08-29

- `manyspeech-cli` を初公開


---

