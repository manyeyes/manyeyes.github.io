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
- ModelScope ミラー: [manyspeech-cli-1.0.0-preview.9.19-win-x64-setup.exe](https://modelscope.cn/models/manyeyes/manyspeech-cli/resolve/master/manyspeech-cli-1.0.0-preview.9.19-win-x64-setup.exe)
- GitHub Releases: [manyspeech-cli-1.0.0-preview.9.19-win-x64-setup.exe](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.19/manyspeech-cli-1.0.0-preview.9.19-win-x64-setup.exe)

インストール手順:
1. インストーラをダブルクリックしウィザードに従う
2. インストール後、コマンドプロンプトまたは PowerShell で以下を実行して確認:

```bash
manyspeech --help
```

### 方法2：ポータブル版（インストール不要）

ダウンロード候補:
- ModelScope ミラー: [manyspeech-cli-1.0.0-preview.9.19-win-x64.zip](https://modelscope.cn/models/manyeyes/manyspeech-cli/resolve/master/manyspeech-cli-1.0.0-preview.9.19-win-x64.zip)
- GitHub Releases: [manyspeech-cli-1.0.0-preview.9.19-win-x64.zip](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.19/manyspeech-cli-1.0.0-preview.9.19-win-x64.zip)

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
> asr -t offline -i file -f D:\test.wav

# プログラムが自動でモデルをダウンロードして認識を開始します
```

## コマンドラインモード

```bash
# コマンドプロンプトまたは PowerShell を開く
cd D:\Tools\ManySpeech

# ファイル1件を認識
manyspeech asr -t offline -i file -f test.wav

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
manyspeech asr -t offline -i file

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

## v1.0/ja/cli/models/selection-guide/index.md

# モデル選定ガイド
更新が続くモデルリストについて、すべての名称を暗記する必要はありません。本ガイドでは**各モデルの主要指標の読み方**を解説し、使用言語・リアルタイム性・動作環境・タイムスタンプなどの要件に基づいて適切なモデルを選定する方法を紹介します。

> 📌 すべてのモデルはONNX形式です。`manyspeech` 初回利用時に自動でダウンロードされます。

## 一、音声認識（ASR）モデル
### 1. 6つの主要指標：モデルとコマンドの理解
各モデル表に記載されている項目を理解すれば、用途に合ったモデル選びとコマンド作成が可能になります。

| 指標 | 値 | 意味 | コマンドライン引数 | 活用方法 |
|------|----|------|------------------|----------|
| **種別** | `オンライン` / `オフライン` | リアルタイム文字出力の可否 | `-t online` / `-t offline` | マイク利用時は`online`、音声ファイル処理時は`offline`を選択 |
| **対応言語** | 中国語、英語、広東語、多言語 など | モデルが得意とする言語 | `--model`で指定 | 使用言語に一致するほど認識精度が向上 |
| **句読点** | `有` / `無` | 出力結果への句読点付加の可否 | 特に指定不要（`--punc`で後付け可能） | 本項目は無視可能。プログラム側で自動的に句読点を補完 |
| **タイムスタンプ** | `有` / `無` | 時間情報出力の可否 | `--format srt` / `--format vtt` | 字幕作成時は「有」を選択 |
| **KVキャッシュ** | `✅` / `❌` | 推論高速化機能の有無 | 自動で有効化 | `✅`を優先推奨。デコード速度が20%～50%向上 |
| **精度形式** | `int8` / `fp32` | 量子化モデルの可否 | `--accuracy int8` | `int8`を推奨。ファイルサイズ削減・処理高速化が実現 |

**句読点項目を無視できる理由（中日英共通環境）**
モデル本体に句読点機能が搭載されているかに関わらず、`manyspeech` は標準で句読点補完モデル（`--punc`）を呼び出し、出力結果に句読点を付加します。モデル側の句読点機能有無を気にする必要はありません。

**マイクは`online`、ファイルは`offline`が基本**
基本的に上記の使い分けを推奨します。以下の組み合わせも利用可能です。
```bash
# オンラインモデルで音声ファイルを認識：リソース消費が少ない。同一環境下ではオフラインモデルより精度が若干低下
manyspeech asr -t online -m chunk -i file --files file1.wav file2.wav file3.wav

# オフラインモデルでマイク入力を認識：精度が高い。発話終了まで結果が表示されず、リソース消費も若干増加
manyspeech asr -t offline -m chunk -i mic
```

**基本的なコマンド例**（`some-model` を選定したモデル名に置き換え）
```bash
# 音声ファイル認識（-i file は必須）
manyspeech asr -t offline -i file --files "会議録音.wav" --model some-model

# マイクリアルタイム認識
manyspeech asr -t online -i mic --model some-model
```

> ⚠️ `asr` サブコマンドには `-i` 引数が必須です。`-i file` または `-i mic` のいずれかを指定してください。`--model` を省略した場合、標準モデルが使用されますが、用途に適さない可能性があるため、手動で指定することを推奨します。

### 2. モデル名から読み取れる情報
モデル名自体が簡易仕様書となっています。表の指標以外にも、名称から各種仕様を確認できます。

| 名称の一部 | 意味 |
|-----------|------|
| `online` / `offline` | オンライン（ストリーミング）/ オフライン |
| `zh` / `en` / `yue` / `ja` / `ko` / `multi` | 対応言語（中国語/英語/広東語/日本語/韓国語/多言語） |
| `tiny` / `small` / `base` / `large` / `xlarge` | モデル規模（規模が大きいほど精度が高く、処理速度・リソース消費が増加） |
| `int8` / `fp32` | 量子化版 / 高精度版 |
| `timestamp` | タイムスタンプ出力対応（字幕作成用） |
| `kv` / `selfcrosskv` | KVキャッシュによる推論高速化対応 |
| `ctc` | CTCデコーディング構造（一般的に高速） |
| `turbo` | Whisperシリーズの蒸留高速化版 |
| `distil` | モデル蒸留版。元モデルより軽量・高速 |
| `finetune` / 固有接尾辞（`-belle`、`-wenetspeech` など） | 特定データセットでファインチューニング済み。方言・対話シーンなど特定用途に最適化 |
| `seaco` | 単語ホットワード設定機能対応 |
| `llm` | 大規模言語モデル連携強化版 |
| `opt` | 最適化版（優先利用推奨） |

> `distil-whisper-xxx` は同規模の標準 `whisper-xxx` より軽量・高速で、リソースが限られた環境に適します。
> `xxx-cantonese-onnx`・`xxx-wenetspeech-yue` は広東語向けに調整されており、汎用モデルより精度が高くなります。
> `xxx-onnx-opt` は通常の `xxx-onnx` より総合的な性能に優れます。

### 3. 4ステップによるモデル選定フロー
#### 手順1：使用言語を確認
対応言語列から、利用する言語に対応したモデルを絞り込みます。
- **北京語**：`zh`・中国語と記載のモデルを優先
- **中日英混在**：`zh-en`・中日英対応のモデルを選択
- **広東語**：`yue`・広東語、または名称に`cantonese`/`yue`を含むモデルを選択
- **英語**：`en`・英語、または`distil-whisper-*-en`系モデルを選択
- **日本語・韓国語・タイ語・ロシア語 など**：`ja`・`ko`・`th`・`ru` など各言語コードのモデルを選択
- **複数言語対応**：多言語・`multi`、または対応言語数の多いモデル（Whisperシリーズなど）を選択

> 特定言語に特化したモデルは、該当言語の認識精度が高くなります。多言語対応モデルは汎用性に優れますが、単一言語専用モデルに比べ精度が若干低下する場合があります。
> `finetune`や固有接尾辞を持つモデルは、医療・対話・方言など特定シーン向けに調整済みのため、用途が一致する場合は優先してください。

#### 手順2：リアルタイム処理の要否を選択
種別列を参照してください。

| 要件 | 推奨種別 | コマンド `-t` 引数 |
|------|----------|-------------------|
| リアルタイム会話、生配信字幕、マイク入力 | オンライン | `-t online` |
| 音声ファイル処理、リアルタイム出力不要 | オフライン | `-t offline` |
| リアルタイムプレビュー＋最終結果の高精度修正 | 両方併用 | `-t 2pass`（オンライン＋オフラインモデルをそれぞれ指定） |

#### 手順3：動作環境（ハードウェア）に合わせる
精度形式とモデル規模を確認して選択します。

| ハードウェア環境 | 推奨設定 | コマンド推奨 |
|------------------|----------|--------------|
| サーバー（8コア以上、メモリ8GB以上） | `fp32` 非量子化、`large`/`xlarge`クラス | 標準設定 または `--accuracy fp32` |
| 一般PC（4コア、メモリ4GB） | `int8`量子化、`base`/`large`クラス | `--accuracy int8` |
| Raspberry Pi、古いノートPC、組み込み機器 | `int8`量子化、`tiny`/`small`クラス | 名称に`tiny`・`int8`を含むモデルを選択（例：`moonshine-tiny-*-int8`） |
| 処理速度優先、精度は許容範囲内 | `int8`＋`ctc`、`small`クラス | `ctc`・`int8`を含むモデルを選択 |

> `int8`量子化によりファイルサイズが50%～75%削減、処理速度が2～4倍向上し、精度低下は通常1%未満のため、広く推奨できます。
> `distil-`接頭辞のモデルも軽量・高速なため、リソース不足環境に適します。

#### 手順4：字幕作成の要否を確認
VAD未使用時
- **SRT/VTT字幕を作成する場合** → タイムスタンプ「有」のモデル（表記が「有」または名称に`timestamp`を含む）を選択
- **字幕不要** → タイムスタンプ項目を無視し、任意のモデルを使用可能

VAD使用時
- モデルのタイムスタンプ機能は必須ではありません。オンラインモデルのみでもタイムスタンプ付き字幕を生成可能です。

> 句読点はプログラム側で自動補完されるため、モデルの句読点機能は考慮不要です。

**追加要件：ホットワード設定**
固有名詞・専門用語など特定単語の認識率を高めたい場合は、名称に`seaco`を含むモデル（SeACo-Paraformer）を選択してください。ホットワード機能に対応しています。

### 4. 汎用コマンドテンプレート
選定したモデル名を記入して利用してください。
```bash
# オフラインで音声ファイルを認識
manyspeech asr -t offline -i file --files "音声ファイル.wav" --model 選定したモデル名

# マイクでリアルタイム認識
manyspeech asr -t online -i mic --model 選定したモデル名

# 2passモード
manyspeech asr -t 2pass -i mic \
  --model オンラインモデル名 \
  --model2 オフラインモデル名

# 字幕出力（モデルがタイムスタンプ対応の場合）
manyspeech asr -t offline -i file --files "音声ファイル.wav" \
  --format srt --model モデル名

# int8量子化を強制適用（量子化版が存在する場合）
manyspeech asr -t offline -i file --files "音声ファイル.wav" \
  --accuracy int8 --model モデル名

# 低スペック機器向け：スレッド数制限＋軽量モデル
manyspeech --threads 1 asr -t offline -i file --files "音声ファイル.wav" \
  --model 軽量モデル名

# VADを切り替え（騒音環境ではsileroを使用）
manyspeech --vad silero-vad-v6-onnx asr -t online -i mic --model 選定したモデル名
```

## 二、音声区間検出（VAD）モデル
### 1. 利用可能なモデル
| モデル名 | 特徴 | 適用シーン | コマンド |
|----------|------|------------|----------|
| `alifsmnvad-onnx`（標準） | 精度と速度のバランスに優れる | 会議室、静かな環境での録音 | `--vad alifsmnvad-onnx` |
| `silero-vad-v6-onnx` | 騒音環境に強い耐性を持つ | 通話、屋外、遠距離収音 | `--vad silero-vad-v6-onnx` |

### 2. 選定推奨
- **静かな環境**：標準の `alifsmnvad-onnx` を使用してください。
- **騒音環境**（ファン音、車道騒音、複数人の雑談など）：`silero-vad-v6-onnx` に切り替えてください。

### 3. 汎用コマンド
```bash
# ASR実行時にVADを指定
manyspeech --vad silero-vad-v6-onnx asr -t online -i mic --model 選定したモデル名

# VAD単体で音声区間を検出
manyspeech vad -t offline -i file --files "録音ファイル.wav" --vad silero-vad-v6-onnx
```

## 三、句読点補完（Punc）モデル
### 1. 利用可能なモデル
| モデル名 | 説明 |
|----------|------|
| `alicttransformerpunc-zh-en-mge-int8-onnx` | 中日英対応の句読点補完モデル。INT8量子化により軽量かつ高速 |

### 2. 補足説明
ASR実行時は標準で本モデルが自動呼び出しされ、認識結果に句読点が付加されるため、通常手動で設定する必要はありません。
個別に動作確認・利用する場合は `punc` サブコマンドを使用してください。

### 3. 汎用コマンド
```bash
# 任意のテキストに句読点を補完
manyspeech punc --text "今天天气不错一起去郊游吧"

# ASR実行時に句読点補完を無効化（モデル標準出力を確認する場合）
manyspeech --punc "" asr -t offline -i file --files "音声ファイル.wav" --model モデル名
```

## 四、音声分離（AudioSep）モデル（開発予定）
> 本機能は現在開発中で、利用可能なモデルは存在しません。今後の選定軸を事前に記載します。

### 4.1 今後の予定モデル（例）
- 人声分離モデル（Demucs、Spleeter のONNX版など）
- 伴奏・楽器音分離モデル

### 4.2 選定軸（予定）
| 軸 | 選択肢 | 説明 |
|----|--------|------|
| 分離対象 | 人声 / 伴奏 / ドラム / ベース など | 出力トラックを用途に応じて選択 |
| モデル規模 | 軽量版 / 高精度版 | 軽量版はリアルタイム処理向け、高精度版はオフライン処理向け |
| 出力形式 | 独立音声ファイル / マスクデータ | 独立ファイルはそのまま利用可能、マスクデータは後処理が必要 |

### 4.3 コマンド例（実装予定）
```bash
# 参考（今後実装）
manyspeech audiosep -i file --files "混合音声.wav" --target vocals --output 人声.wav
```

## 五、よくある質問
**Q：ASRモデルの句読点項目が「無」になっている場合、出力に句読点は付加されますか？**
A：付加されます。プログラム標準で句読点補完機能（`--punc`）が有効になっているため、モデル本体の機能有無を気にする必要はありません。

**Q：KVキャッシュ高速化とint8量子化は併用できますか？**
A：可能です。モデル名に`int8`と`kv`/`selfcrosskv`の両方を含むモデルが該当します。

**Q：distil-whisper と標準の whisper の違いは？**
A：distil-whisperはモデル蒸留による軽量版で、ファイルサイズが小さく処理が高速です。精度はわずかに低下しますが、一般的な用途では十分な性能を発揮し、リソース不足環境に適します。

**Q：使用言語に対応したモデルか確認する方法は？**
A：表の「対応言語」列を参照するか、モデル名内の言語コード（zh/yue/en/ja/ko など）から判断してください。

**Q：モデルのダウンロード速度が遅い場合は？**
A：[ModelScope](https://modelscope.cn/profile/manyeyes?tab=model) から手動でモデルをダウンロードし、`--base` で指定したディレクトリ（標準はプログラム配下の `models/` フォルダ）に配置してください。

## 六、まとめ：指標に基づくモデル選定
| モデル種別 | 主要選定軸 | 推奨事項 |
|------------|------------|----------|
| **ASR 音声認識** | 使用言語 → リアルタイム性 → ハードウェア → 字幕要否 → ホットワード | `int8`＋`kv` 搭載モデルを優先。句読点項目は無視 |
| **VAD 音声区間検出** | 周囲の騒音レベル | 静環境は標準モデル、騒音環境はsilero-vadを使用 |
| **Punc 句読点補完** | 特に選定不要 | 標準設定のまま利用、必要に応じて単体実行 |
| **AudioSep 音声分離** | 分離対象・精度（開発予定） | 今後のバージョンにて対応 |

上記の順序でモデルを絞り込み、選定したモデル名を `--model` 引数に指定してコマンドを実行してください。
動作結果が想定通りでない場合は、選定条件を調整し別のモデルを試してください。

## 次のステップ
- [モデルライブラリ](/models/getting-started) - モデルの詳細説明

---

## v1.0/ja/cli/models/selection-guide/asr.md

# ASR モデル
## DolphinAsr シリーズ

> **説明**  
> - License: Apache 2.0
> - `opt`：最適化バージョン。オーディオ特徴抽出モジュールをモデルから分離し、推論オーバーヘッドを低減  
> - 完全対応言語および地域コード対応表：
> ```
> zh-CN: 中国語(普通話)，zh-TW: 中国語(台湾)，zh-WU: 中国語(呉語)，zh-SICHUAN: 中国語(四川話)，zh-SHANXI: 中国語(山西話)，zh-ANHUI: 中国語(安徽話)，zh-TIANJIN: 中国語(天津話)，zh-NINGXIA: 中国語(寧夏話)，zh-SHAANXI: 中国語(陝西話)，zh-HEBEI: 中国語(河北話)，zh-SHANDONG: 中国語(山東話)，zh-GUANGDONG: 中国語(広東話)，zh-SHANGHAI: 中国語(上海話)，zh-HUBEI: 中国語(湖北話)，zh-LIAONING: 中国語(遼寧話)，zh-GANSU: 中国語(甘粛話)，zh-FUJIAN: 中国語(福建話)，zh-HUNAN: 中国語(湖南話)，zh-HENAN: 中国語(河南話)，zh-YUNNAN: 中国語(雲南話)，zh-MINNAN: 中国語(閩南語)，zh-WENZHOU: 中国語(温州話)
> ja-JP: 日本語，th-TH: タイ語，ru-RU: ロシア語，ko-KR: 韓国語，id-ID: インドネシア語，vi-VN: ベトナム語
> ct-NULL: 広東語，ct-HK: 広東語(香港)，ct-GZ: 広東語(広東)
> hi-IN: ヒンディー語，ur-IN: ウルドゥー語(インド)，ur-PK: ウルドゥー語，ms-MY: マレー語，uz-UZ: ウズベク語
> ar-MA: アラビア語(モロッコ)，ar-GLA: アラビア語，ar-SA: アラビア語(サウジアラビア)，ar-EG: アラビア語(エジプト)，ar-KW: アラビア語(クウェート)，ar-LY: アラビア語(リビア)，ar-JO: アラビア語(ヨルダン)，ar-AE: アラビア語(アラブ首長国連邦)，ar-LVT: アラビア語(レバント)
> fa-IR: ペルシア語，bn-BD: ベンガル語
> ta-SG: タミル語(シンガポール)，ta-LK: タミル語(スリランカ)，ta-IN: タミル語(インド)，ta-MY: タミル語(マレーシア)
> te-IN: テルグ語，ug-NULL: ウイグル語，ug-CN: ウイグル語，gu-IN: グジャラート語
> my-MM: ビルマ語，tl-PH: タガログ語，kk-KZ: カザフ語，or-IN: オリヤー語，ne-NP: ネパール語
> mn-MN: モンゴル語，km-KH: クメール語，jv-ID: ジャワ語，lo-LA: ラオ語，si-LK: シンハラ語
> fil-PH: フィリピノ語，ps-AF: パシュトー語，pa-IN: パンジャブ語，kab-NULL: カビル語
> ba-NULL: バシキール語，ks-IN: カシミール語，tg-TJ: タジク語，su-ID: スンダ語
> mr-IN: マラーティー語，ky-KG: キルギス語，az-AZ: アゼルバイジャン語
> ```

### DolphinAsr-base モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| DolphinAsr-base-onnx | 非ストリーミング | 多言語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-onnx) |
| DolphinAsr-base-int8-onnx | 非ストリーミング | 多言語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-int8-onnx) |
| DolphinAsr-base-onnx-opt | 非ストリーミング | 多言語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-onnx-opt) |
| DolphinAsr-base-int8-onnx-opt | 非ストリーミング | 多言語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-int8-onnx-opt) |

### DolphinAsr-small モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| DolphinAsr-small-onnx | 非ストリーミング | 多言語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-onnx) |
| DolphinAsr-small-int8-onnx | 非ストリーミング | 多言語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-int8-onnx) |
| DolphinAsr-small-onnx-opt | 非ストリーミング | 多言語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-onnx-opt) |
| DolphinAsr-small-int8-onnx-opt | 非ストリーミング | 多言語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-int8-onnx-opt) |

---

## FireRedAsr シリーズ

### FireRedAsr-AED 中英モデル（v1）

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| fireredasr-aed-large-zh-en-onnx-offline-20250124 | 非ストリーミング | 中国語、英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr-aed-large-zh-en-onnx-offline-20250124) |

### FireRedAsr2-AED 中英モデル（v2）

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| fireredasr2-aed-large-zh-en-onnx-offline-20260212 | 非ストリーミング | 中国語、英語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-onnx-offline-20260212) |
| fireredasr2-aed-large-zh-en-int8-onnx-offline-20260212 | 非ストリーミング | 中国語、英語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-int8-onnx-offline-20260212) |
| fireredasr2-aed-large-zh-en-onnx-selfcrosskv-offline-20260212 | 非ストリーミング | 中国語、英語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-onnx-selfcrosskv-offline-20260212) |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212 | 非ストリーミング | 中国語、英語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212) |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskvstack-offline-20260212 | 非ストリーミング | 中国語、英語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskvstack-offline-20260212) |

---

## Fun-ASR シリーズ

> **説明**  
> - モデル背景：通義実験室が発表した**エンドツーエンド音声認識大モデル**。数千万時間の実音声データで事前学習され、強力な文脈理解と業界適応能力を持つ  
> - 機能特性：全シリーズ**非ストリーミング、句読点対応、タイムスタンプ対応**。低遅延リアルタイム書き起こしをサポートし、遠距離・高騒音環境での認識精度は93%に達する  
> - バージョン識別子の説明：  
>   - `int8`：INT8量子化バージョン。サイズが小さく、推論速度が高速で、エッジ展開に適する  
>   - `LLM`：大モデル強化版。文脈理解がより強力で、認識幻覚を抑制  
>   - `CTC`：古典的なCTCアーキテクチャの軽量版。推論が軽量  
>   - `MLT`：多言語汎用版。31言語をカバー  
>   - `split-adaptor`：特徴適応モジュールを分離して展開するバージョン  
> - 言語と能力の説明：  
>   - **Fun-ASR-Nano**：中国語、英語、日本語に対応。7つの方言（呉語、広東語、閩語、客家語、贛語、湘語、晋語）。26の地方訛り（河南、山西、湖北、四川、重慶、雲南、貴州、広東、広西、陝西、河北、山東、安徽、天津、寧夏、遼寧、甘粛、湖南、黒竜江、吉林、内モンゴル、江蘇、浙江、福建、江西、海南）。歌詞認識、ラップ音声認識もサポート  
>   - **Fun-ASR-MLT-Nano**：合計31言語に対応：中国語、英語、広東語、日本語、韓国語、ベトナム語、インドネシア語、タイ語、マレー語、フィリピノ語、アラビア語、ヒンディー語、ブルガリア語、クロアチア語、チェコ語、デンマーク語、オランダ語、エストニア語、フィンランド語、ギリシャ語、ハンガリー語、アイルランド語、ラトビア語、リトアニア語、マルタ語、ポーランド語、ポルトガル語、ルーマニア語、スロバキア語、スロベニア語、スウェーデン語  
> - 業界優位性：教育、金融などの垂直領域で優れた性能を発揮し、専門用語を正確に認識し、幻覚生成や言語混同の問題を効果的に抑制

### Fun-ASR-Nano モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Fun-ASR-Nano-2512-LLM-onnx | 非ストリーミング | 中・英・日、7方言+26地方訛り、歌詞/ラップ認識を含む | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-onnx) |
| Fun-ASR-Nano-2512-LLM-int8-onnx | 非ストリーミング | 同上 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-int8-onnx) |
| Fun-ASR-Nano-2512-LLM-split-adaptor-onnx | 非ストリーミング | 同上 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-split-adaptor-onnx) |
| Fun-ASR-Nano-2512-LLM-split-adaptor-int8-onnx | 非ストリーミング | 同上 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-split-adaptor-int8-onnx) |
| Fun-ASR-Nano-2512-CTC-onnx | 非ストリーミング | 同上 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-CTC-onnx) |
| Fun-ASR-Nano-2512-CTC-int8-onnx | 非ストリーミング | 同上 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-CTC-int8-onnx) |

### Fun-ASR-MLT-Nano モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Fun-ASR-MLT-Nano-2512-onnx | 非ストリーミング | 31言語の多言語 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-MLT-Nano-2512-onnx) |
| Fun-ASR-MLT-Nano-2512-int8-onnx | 非ストリーミング | 31言語の多言語 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-MLT-Nano-2512-int8-onnx) |

---

## FunASR シリーズ

### Paraformer 中英モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| paraformer-large-zh-en-onnx-offline | 非ストリーミング | 中国語(zh), 英語(en) | なし | なし | [huggingface](https://huggingface.co/manyeyes/speech_paraformer-large_asr_nat-zh-cn-16k-common-vocab8404-onnx), [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-onnx-offline) |
| paraformer-large-zh-en-timestamp-onnx-offline | 非ストリーミング | 中国語、英語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-timestamp-onnx-offline) |
| paraformer-large-en-onnx-offline | 非ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-en-onnx-offline) |
| paraformer-large-zh-en-onnx-online | ストリーミング | 中国語、英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-onnx-online) |

### Paraformer 粤/中英多言語モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| paraformer-large-zh-yue-en-timestamp-onnx-offline-dengcunqin-20240805 | 非ストリーミング | 中、広東語、英 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-timestamp-onnx-offline-dengcunqin-20240805) |
| paraformer-large-zh-yue-en-onnx-offline-dengcunqin-20240805 | 非ストリーミング | 中、広東語、英 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-onnx-offline-dengcunqin-20240805) |
| paraformer-large-zh-yue-en-onnx-online-dengcunqin-20240208 | ストリーミング | 中、広東語、英 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-onnx-online-dengcunqin-20240208) |

### SeACo-Paraformer ホットワードカスタマイズモデル

SeACoParaformerは、アリババ音声実験室が提案した次世代のホットワードカスタマイズ非自己回帰音声認識モデルです。従来のCLASベースのホットワードカスタマイズ方式と比較して、ホットワードモジュールとASRモデルを分離し、事後確率融合によりホットワードを促進することで、促進プロセスを可視化・制御可能にし、ホットワードの再現率を大幅に向上させています。

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| paraformer-seaco-large-zh-timestamp-onnx-offline | 非ストリーミング | 中国語、ホットワードカスタマイズ対応 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-seaco-large-zh-timestamp-onnx-offline) |

### SenseVoice モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| sensevoice-small-onnx | 非ストリーミング | 中、広東語、英、日、韓 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-onnx) |
| sensevoice-small-int8-onnx | 非ストリーミング | 中、広東語、英、日、韓 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-int8-onnx) |
| sensevoice-small-wenetspeech-yue-onnx | 非ストリーミング | 広東語、中、英、日、韓 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-wenetspeech-yue-onnx) |
| sensevoice-small-wenetspeech-yue-int8-onnx | 非ストリーミング | 広東語、中、英、日、韓 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-wenetspeech-yue-int8-onnx) |
| sensevoice-small-split-embed-onnx | 非ストリーミング | 中、広東語、英、日、韓 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-split-embed-onnx) |

---

## K2TransducerAsr シリーズ

### ストリーミングモデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| k2transducer-lstm-en-onnx-online-csukuangfj-20220903 | ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-lstm-en-onnx-online-csukuangfj-20220903) |
| k2transducer-lstm-zh-onnx-online-csukuangfj-20221014 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-lstm-zh-onnx-online-csukuangfj-20221014) |
| k2transducer-zipformer-en-onnx-online-weijizhuang-20221202 | ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-en-onnx-online-weijizhuang-20221202) |
| k2transducer-zipformer-en-onnx-online-zengwei-20230517 | ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-en-onnx-online-zengwei-20230517) |
| k2transducer-zipformer-multi-zh-hans-onnx-online-20231212 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-multi-zh-hans-onnx-online-20231212) |
| k2transducer-zipformer-ko-onnx-online-johnbamma-20240612 | ストリーミング | 韓国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ko-onnx-online-johnbamma-20240612) |
| k2transducer-zipformer-ctc-small-zh-onnx-online-20250401 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-small-zh-onnx-online-20250401) |
| k2transducer-zipformer-large-zh-onnx-online-yuekai-20250630 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-large-zh-onnx-online-yuekai-20250630) |
| k2transducer-zipformer-xlarge-zh-onnx-online-yuekai-20250630 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-xlarge-zh-onnx-online-yuekai-20250630) |
| k2transducer-zipformer-ctc-large-zh-onnx-online-yuekai-20250630 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-large-zh-onnx-online-yuekai-20250630) |
| k2transducer-zipformer-ctc-xlarge-zh-onnx-online-yuekai-20250630 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-xlarge-zh-onnx-online-yuekai-20250630) |

### 非ストリーミングモデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| k2transducer-conformer-en-onnx-offline-csukuangfj-20220513 | 非ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-conformer-en-onnx-offline-csukuangfj-20220513) |
| k2transducer-conformer-zh-onnx-offline-luomingshuang-20220727 | 非ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-conformer-zh-onnx-offline-luomingshuang-20220727) |
| k2transducer-zipformer-en-onnx-offline-yfyeung-20230417 | 非ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-en-onnx-offline-yfyeung-20230417) |
| k2transducer-zipformer-large-en-onnx-offline-zengwei-20230516 | 非ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-large-en-onnx-offline-zengwei-20230516) |
| k2transducer-zipformer-small-en-onnx-offline-zengwei-20230516 | 非ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-small-en-onnx-offline-zengwei-20230516) |
| k2transducer-zipformer-zh-onnx-offline-wenetspeech-20230615 | 非ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-zh-onnx-offline-wenetspeech-20230615) |
| k2transducer-zipformer-zh-onnx-offline-multi-zh-hans-20230902 | 非ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-zh-onnx-offline-multi-zh-hans-20230902) |
| k2transducer-zipformer-zh-en-onnx-offline-20231122 | 非ストリーミング | 中英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-zh-en-onnx-offline-20231122) |
| k2transducer-zipformer-cantonese-onnx-offline-20240313 | 非ストリーミング | 広東語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-cantonese-onnx-offline-20240313) |
| k2transducer-zipformer-th-onnx-offline-yfyeung-20240620 | 非ストリーミング | タイ語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-th-onnx-offline-yfyeung-20240620) |
| k2transducer-zipformer-ja-onnx-offline-reazonspeech-20240801 | 非ストリーミング | 日本語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ja-onnx-offline-reazonspeech-20240801) |
| k2transducer-zipformer-ru-onnx-offline-20240918 | 非ストリーミング | ロシア語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ru-onnx-offline-20240918) |
| k2transducer-zipformer-vi-onnx-offline-20250420 | 非ストリーミング | ベトナム語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-vi-onnx-offline-20250420) |
| k2transducer-zipformer-ctc-zh-onnx-offline-20250703 | 非ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-zh-onnx-offline-20250703) [github](https://github.moeyy.xyz/https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/sherpa-onnx-zipformer-ctc-zh-int8-2025-07-03.tar.bz2) |
| k2transducer-zipformer-ctc-small-zh-onnx-offline-20250716 | 非ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-small-zh-onnx-offline-20250716) |

---

## MedAsr シリーズ

> **説明**  
> - モデルアーキテクチャ：**Conformer** ベース。Google Health が発表した医療シーン向け音声認識モデル  
> - 適用シーン：放射線科の口述、医師と患者の対話、医学文書の書き起こしなど、医療向けディクテーションタスクに適合  
> - 対応言語：**英語のみ**（主に米国英語）  
> - モデル特徴：約5000時間の医療音声データで事前学習され、医学専門用語の認識に強い。非標準的な薬品名や日時といった構造化データの認識にはばらつきがあるため、業務シーンに合わせた追加のファインチューニングを推奨

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| medasr-onnx | 非ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/medasr-onnx) |

---

## moonshine シリーズ

### moonshine-tiny モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| moonshine-tiny-onnx | 非ストリーミング | 英語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-onnx) |
| moonshine-tiny-int8-onnx | 非ストリーミング | 英語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-int8-onnx) |
| moonshine-tiny-en-onnx | 非ストリーミング | 英語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-en-onnx) |
| moonshine-tiny-zh-onnx | 非ストリーミング | 中国語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-zh-onnx) |
| moonshine-tiny-zh-int8-onnx | 非ストリーミング | 中国語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-zh-int8-onnx) |
| moonshine-tiny-vi-onnx | 非ストリーミング | ベトナム語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-vi-onnx) |
| moonshine-tiny-vi-int8-onnx | 非ストリーミング | ベトナム語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-vi-int8-onnx) |
| moonshine-tiny-uk-onnx | 非ストリーミング | ウクライナ語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-uk-onnx) |
| moonshine-tiny-uk-int8-onnx | 非ストリーミング | ウクライナ語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-uk-int8-onnx) |
| moonshine-tiny-ko-onnx | 非ストリーミング | 韓国語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ko-onnx) |
| moonshine-tiny-ko-int8-onnx | 非ストリーミング | 韓国語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ko-int8-onnx) |
| moonshine-tiny-ja-onnx | 非ストリーミング | 日本語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ja-onnx) |
| moonshine-tiny-ja-int8-onnx | 非ストリーミング | 日本語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ja-int8-onnx) |
| moonshine-tiny-ar-onnx | 非ストリーミング | アラビア語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ar-onnx) |
| moonshine-tiny-ar-int8-onnx | 非ストリーミング | アラビア語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ar-int8-onnx) |
| moonshine-tiny-fr-onnx | 非ストリーミング | フランス語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-fr-onnx) |
| moonshine-tiny-fr-int8-onnx | 非ストリーミング | フランス語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-fr-int8-onnx) |

### moonshine-base モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| moonshine-base-onnx | 非ストリーミング | 英語 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/moonshine-base-onnx) |
| moonshine-base-int8-onnx | 非ストリーミング | 英語 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/moonshine-base-int8-onnx) |
| moonshine-base-en-onnx | 非ストリーミング | 英語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-en-onnx) |
| moonshine-base-zh-onnx | 非ストリーミング | 中国語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-zh-onnx) |
| moonshine-base-zh-int8-onnx | 非ストリーミング | 中国語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-zh-int8-onnx) |
| moonshine-base-vi-onnx | 非ストリーミング | ベトナム語 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/moonshine-base-vi-onnx) |
| moonshine-base-vi-int8-onnx | 非ストリーミング | ベトナム語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-vi-int8-onnx) |
| moonshine-base-uk-onnx | 非ストリーミング | ウクライナ語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-uk-onnx) |
| moonshine-base-uk-int8-onnx | 非ストリーミング | ウクライナ語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-uk-int8-onnx) |
| moonshine-base-ko-onnx | 非ストリーミング | 韓国語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ko-onnx) |
| moonshine-base-ko-int8-onnx | 非ストリーミング | 韓国語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ko-int8-onnx) |
| moonshine-base-ja-onnx | 非ストリーミング | 日本語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ja-onnx) |
| moonshine-base-ja-int8-onnx | 非ストリーミング | 日本語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ja-int8-onnx) |
| moonshine-base-ar-onnx | 非ストリーミング | アラビア語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ar-onnx) |
| moonshine-base-ar-int8-onnx | 非ストリーミング | アラビア語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ar-int8-onnx) |

---

## WeNet シリーズ

### ストリーミングモデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| wenet-u2pp-conformer-aishell-onnx-online-20210601 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-aishell-onnx-online-20210601) |
| wenet-u2pp-conformer-wenetspeech-onnx-online-20220506 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-onnx-online-20220506) |
| wenet-u2pp-conformer-wenetspeech-int8-onnx-online-20220506 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-int8-onnx-online-20220506) |
| wenet-u2pp-conformer-gigaspeech-onnx-online-20210728 | ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-gigaspeech-onnx-online-20210728) |

### 非ストリーミングモデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| wenet-u2pp-conformer-aishell-onnx-offline-20210601 | 非ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-aishell-onnx-offline-20210601) |
| wenet-u2pp-conformer-wenetspeech-onnx-offline-20220506 | 非ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-onnx-offline-20220506) |
| wenet-u2pp-conformer-wenetspeech-int8-onnx-offline-20220506 | 非ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-int8-onnx-offline-20220506) |
| wenet-u2pp-conformer-gigaspeech-onnx-offline-20210728 | 非ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-gigaspeech-onnx-offline-20210728) |

---

## Whisper シリーズ

> **説明**  
> 1. 末尾に `-kv` が付くものは、KV Cache推論高速化を有効にしたバージョン  
> 2. 全シリーズ**句読点対応、タイムスタンプ対応**。デフォルトで段落レベルのタイムスタンプを出力し、パラメータで単語レベルのタイムスタンプも有効化可能  
> 3. 言語範囲：  
>    - 標準多言語版（tiny/small/medium/large-v1/large-v2）：合計 **99言語**（中国語、広東語、英語、日本語、韓国語、ロシア語、アラビア語、ベトナム語、ウクライナ語など世界の主要言語を含む）  
>    - large-v3 / large-v3-turbo シリーズ：99言語に加え低リソース言語を拡張し、合計約 **106言語**。新たに追加されたもの：**ズールー語（zu）、マオリ語（mi）、スワヒリ語（sw）、ハウサ語（ha）** など。言語識別効果が顕著に向上  
>    - 完全な言語一覧とコード：
> ```
> af(アフリカーンス語), am(アムハラ語), ar(アラビア語), as(アッサム語), az(アゼルバイジャン語), 
> ba(バシキール語), be(ベラルーシ語), bg(ブルガリア語), bn(ベンガル語), bo(チベット語), br(ブルトン語), bs(ボスニア語), 
> ca(カタルーニャ語), cs(チェコ語), cy(ウェールズ語), 
> da(デンマーク語), de(ドイツ語), 
> el(ギリシャ語), en(英語), es(スペイン語), et(エストニア語), eu(バスク語), 
> fa(ペルシア語), fi(フィンランド語), fo(フェロー語), fr(フランス語), 
> ga(アイルランド語), gl(ガリシア語), gu(グジャラート語), 
> ha(ハウサ語), haw(ハワイ語), he(ヘブライ語), hi(ヒンディー語), hr(クロアチア語), hu(ハンガリー語), hy(アルメニア語), 
> id(インドネシア語), ig(イボ語), is(アイスランド語), it(イタリア語), 
> ja(日本語), jv(ジャワ語), 
> ka(グルジア語), kk(カザフ語), km(クメール語), kn(カンナダ語), ko(韓国語), ku(クルド語), ky(キルギス語), 
> la(ラテン語), lb(ルクセンブルク語), lg(ガンダ語), lt(リトアニア語), lv(ラトビア語), 
> mai(マイティリー語), mg(マダガスカル語), mi(マオリ語), mk(マケドニア語), ml(マラヤーラム語), mn(モンゴル語), mr(マラーティー語), ms(マレー語), mt(マルタ語), my(ビルマ語), 
> ne(ネパール語), nl(オランダ語), no(ノルウェー語), nso(北ソト語), ny(ニャンジャ語), 
> oc(オック語), om(オロモ語), or(オリヤー語), 
> pa(パンジャブ語), pl(ポーランド語), ps(パシュトー語), pt(ポルトガル語), 
> ro(ルーマニア語), ru(ロシア語), rw(ルワンダ語), 
> sa(サンスクリット語), sd(シンド語), si(シンハラ語), sk(スロバキア語), sl(スロベニア語), sm(サモア語), sn(ショナ語), so(ソマリ語), sq(アルバニア語), sr(セルビア語), ss(スワジ語), st(南ソト語), su(スンダ語), sv(スウェーデン語), sw(スワヒリ語), 
> ta(タミル語), te(テルグ語), tg(タジク語), th(タイ語), ti(ティグリニア語), tk(トルクメン語), tl(タガログ語), tn(ツワナ語), to(トンガ語), tr(トルコ語), ts(ツォンガ語), tt(タタール語), tw(トウィ語), 
> ug(ウイグル語), uk(ウクライナ語), ur(ウルドゥー語), uz(ウズベク語), 
> ve(ベンダ語), vi(ベトナム語), vo(ヴォラピュク語), 
> wa(ワロン語), wo(ウォロフ語), 
> xh(コサ語), 
> yi(イディッシュ語), yo(ヨルバ語), 
> zh(中国語), yue(広東語), zu(ズールー語)
> ```
>    - 言語コード省略形：
> ```
> af, am, ar, as, az,
> ba, be, bg, bn, bo, br, bs,
> ca, cs, cy,
> da, de, el, en, es, et, eu,
> fa, fi, fo, fr, ga, gl, gu,
> ha, haw, he, hi, hr, hu, hy,
> id, ig, is, it,
> ja, jv,
> ka, kk, km, kn, ko, ku, ky,
> la, lb, lg, lt, lv,
> mai, mg, mi, mk, ml, mn, mr, ms, mt, my,
> ne, nl, no, nso, ny,
> oc, om, or,
> pa, pl, ps, pt,
> ro, ru, rw,
> sa, sd, si, sk, sl, sm, sn, so, sq, sr, ss, st, su, sv, sw,
> ta, te, tg, th, ti, tk, tl, tn, to, tr, ts, tt, tw,
> ug, uk, ur, uz,
> ve, vi, vo,
> wa, wo, xh,
> yi, yo,
> zh, yue, zu
> ```

### whisper-tiny モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | KV | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| whisper-tiny-onnx | 非ストリーミング | 99言語の多言語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-onnx) |
| whisper-tiny-onnx-kv | 非ストリーミング | 99言語の多言語 | あり | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-onnx-kv) |
| whisper-tiny-en-onnx | 非ストリーミング | 英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-en-onnx) |

### whisper-small モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | KV | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| whisper-small-onnx | 非ストリーミング | 99言語の多言語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-onnx) |
| whisper-small-en-onnx | 非ストリーミング | 英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-en-onnx) |
| whisper-small-cantonese-onnx | 非ストリーミング | 広東語、中国語、英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-cantonese-onnx) |

### whisper-medium モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | KV | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| whisper-medium-onnx | 非ストリーミング | 99言語の多言語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-onnx) |
| whisper-medium-int8-onnx-kv | 非ストリーミング | 99言語の多言語 | あり | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-int8-onnx-kv) |
| whisper-medium-en-onnx | 非ストリーミング | 英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-en-onnx) |
| whisper-medium-yue-onnx-kv | 非ストリーミング | 広東語 | あり | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-yue-onnx-kv) |
| whisper-medium-yue-int8-onnx-kv | 非ストリーミング | 広東語 | あり | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-yue-int8-onnx-kv) |

### whisper-large モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | KV | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| whisper-large-v1-onnx | 非ストリーミング | 99言語の多言語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v1-onnx) |
| whisper-large-v2-onnx | 非ストリーミング | 99言語の多言語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v2-onnx) |
| whisper-large-v3-onnx | 非ストリーミング | 約106言語の多言語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-onnx) |
| whisper-large-v3-turbo-onnx | 非ストリーミング | 約106言語の多言語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-onnx) |
| whisper-large-v3-turbo-zh-onnx | 非ストリーミング | 中国語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-zh-onnx) |
| whisper-large-v3-turbo-zh-int8-onnx-kv-belle-20241016 | 非ストリーミング | 中国語 | あり | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-zh-int8-onnx-kv-belle-20241016) |

### Distil-Whisper モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | KV | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| distil-whisper-small-en-onnx | 非ストリーミング | 英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-small-en-onnx) |
| distil-whisper-medium-en-onnx | 非ストリーミング | 英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-medium-en-onnx) |
| distil-whisper-large-v2-en-onnx | 非ストリーミング | 英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v2-en-onnx) |
| distil-whisper-large-v3-en-onnx | 非ストリーミング | 英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v3-en-onnx) |
| distil-whipser-large-v3.5-en-onnx | 非ストリーミング | 英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whipser-large-v3.5-en-onnx) |
| distil-whisper-large-v2-multi-hans-onnx | 非ストリーミング | 中国語（99言語の多言語互換） | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v2-multi-hans-onnx) |
| distil-whisper-small-cantonese-onnx-alvanlii-20240404 | 非ストリーミング | 広東語、中国語、英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-small-cantonese-onnx-alvanlii-20240404) |

---


> **共通説明**  
> - `int8` = 量子化版。サイズが小さく、速度が高速  
> - `kv` / `selfcrosskv` / `selfcrosskvstack` / `opt` = 推論最適化バージョン  
> - 一部のモデルは HuggingFace または GitHub のソースを提供しています。各表を参照してください



---

## v1.0/ja/cli/models/selection-guide/vad.md

# VAD モデル
## FSMN-VAD シリーズ
> **説明**
> - モデル背景：アリババダモアカデミーが開発した産業レベルの音声活性検出（VAD）モデル。FSMN-Monophone アーキテクチャをベースに設計された、16k 向け中国語汎用 VAD モデルで、FunASR フレームワークおよび Paraformer-large の長音声シナリオにネイティブ対応。
> - 機能特性：FSMN構造によりコンテキスト情報を効果的に活用し、推論速度が速く、遅延を制御可能。Monophone による細分化されたモデリングユニットにより特徴の識別能力を高め、認識エラーを低減。オーディオファイル、URL、バイナリストリーム、オーディオ配列、wav.scp リストなど多様な入力に対応。末尾の無音時間、音声／雑音のしきい値などをカスタマイズ可能。Linux-x86_64、macOS、Windows と互換性があり、ASR や句読点モジュールと自由に組み合わせて使用できる。
> - オープンソースリポジトリ：https://github.com/modelscope/FunASR

### モデル一覧
| モデル名 | 説明 | ダウンロード先 |
| ---- | ---- | ---- |
| alifsmnvad-onnx | 汎用標準版。総合的にバランスが良く、デフォルトで推奨 | [modelscope](https://modelscope.cn/models/manyeyes/alifsmnvad-onnx) |

---

## Silero-VAD シリーズ
> **説明**
> - モデル背景：オープンソースコミュニティ snakers4 が発表したディープラーニングベースの音声活性検出モデル。主流のオープンソース VAD ソリューションであり、16kHz オーディオ入力に適合。
> - 機能特性：プリエンファシス、フレーム分割、窓関数などの前処理を音声に施した後、ニューラルネットワークで音声特徴を学習し、音声区間と非音声区間を正確に判別。雑音環境に応じて検出しきい値を適応的に調整でき、騒がしいシーンで優れた性能を発揮。反復バージョンにより耐雑音性を継続的に向上。
> - オープンソースリポジトリ：https://github.com/snakers4/silero-vad

### モデル一覧
| モデル名 | 説明 | ダウンロード先 |
| ---- | ---- | ---- |
| silero-vad-onnx | ベースバージョン。一般的な汎用シーン向け | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-onnx) |
| silero-vad-v5-onnx | V5 反復版。雑音環境への適応能力を最適化 | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-v5-onnx) |
| silero-vad-v6-onnx | V6 最新バージョン。騒がしい環境での検出性能がさらに向上 | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-v6-onnx) |

---

## v1.0/ja/cli/models/selection-guide/punc.md

# Punc モデル
## CT-Transformer シリーズ
> **説明**
> - モデル背景：アリババダモアカデミーがオープンソース化した句読点モデル。**Controllable Time-delay Transformer（CT-Transformer）** アーキテクチャをベースに、主に音声認識結果の後処理、テキストへの句読点予測と復元を目的として開発されました。
> - 機能特性：モデルは **Embedding、Encoder、Predictor** の3部分で構成されます。Embedding は単語ベクトルと位置ベクトルを融合。Encoder は Transformer、Conformer など複数のネットワーク構造に対応。Predictor はトークンごとに句読点タイプを予測します。従来の Transformer が抱える推論遅延の高さや句読点結果の頻繁な書き換えといった問題に対し、CT-Transformer は精度を維持しつつ**制御可能な推論遅延**を実現し、リアルタイム業務シナリオに適応します。汎用領域の業務データセットでのテスト結果：適合率 53.8%、再現率 60.0%、F1値 56.5%。学習サンプル総数は約3300万件。
> - オープンソースリポジトリ：https://github.com/modelscope/FunASR

**用語解説**
- `int8`：INT8量子化バージョン。モデルサイズを圧縮し推論速度を向上させるが、わずかな精度低下を伴う
- `mge`：MatMul、Gather、Embed のコアレイヤーに特化した量子化最適化。モデルサイズをさらに縮小し、ロードと推論速度を向上させる。精度はやや低下する可能性がある

### モデル一覧
| モデル名 | 語彙数 | 説明 | ダウンロード先 |
| ---- | ---- | ---- | ---- |
| alicttransformerpunc-zh-en-onnx | 272727 | 標準オリジナル版。中英語汎用句読点モデル | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-onnx) |
| alicttransformerpunc-zh-en-int8-onnx | 272727 | 標準版のINT8量子化。サイズ削減、推論高速化 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-int8-onnx) |
| alicttransformerpunc-zh-en-mge-int8-onnx | 272727 | 標準版 + コアレイヤーMGE最適化 + INT8量子化。ロード・推論速度がさらに向上。精度はやや低下 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-mge-int8-onnx) |
| alicttransformerpunc-large-zh-en-onnx | 471067 | 大パラメータオリジナル版。句読点認識精度がより高い | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-onnx) |
| alicttransformerpunc-large-zh-en-int8-onnx | 471067 | 大パラメータ版のINT8量子化。精度と推論速度の両立 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-int8-onnx) |
| alicttransformerpunc-large-zh-en-mge-int8-onnx | 471067 | 大パラメータ版 + コアレイヤーMGE最適化 + INT8量子化。総合的な実行効率が最も高い。精度はやや低下 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-mge-int8-onnx) |

---

## FireRedPunc シリーズ
> **説明**
> - モデル背景：FireRedPunc は **FireRedASR2S** 統合音声システムに含まれる独立した句読点予測モジュールです。BERT アーキテクチャをベースに開発され、音声認識の後処理シナリオに特化しており、中英バイリンガルの句読点復元をサポートします。
> - 機能特性：このモデルの総合性能は業界 SOTA 水準に達しており、**平均 F1 スコア 78.90%** を記録。多分野の中英文データセットで優れた性能を発揮し、さまざまなオフライン・リアルタイム音声書き起こし業務に適応します。
> - オープンソースリポジトリ：https://github.com/FireRedTeam/FireRedASR2S

### モデル一覧
| モデル名 | 説明 | ダウンロード先 |
| ---- | ---- | ---- |
| FireRedPunc-zh-en-onnx | 中英語汎用句読点予測モデル。総合精度に優れ、SOTAレベルの性能 | [modelscope](https://modelscope.cn/models/manyeyes/FireRedPunc-zh-en-onnx) |


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

