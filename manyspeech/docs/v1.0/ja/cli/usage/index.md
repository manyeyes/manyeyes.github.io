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
