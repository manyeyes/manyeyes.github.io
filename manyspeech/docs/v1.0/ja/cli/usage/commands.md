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
