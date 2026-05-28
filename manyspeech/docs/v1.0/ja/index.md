---
pageType: home

hero:
  name: "ManySpeech"
  text: "軽量型ローカル音声 AI"
  tagline: ネイティブでオフライン＆リアルタイムのストリーミング認識をサポート、クラウド不要・追加設定不要
  actions:
    - theme: brand
      text: クイックスタート
      link: /cli/getting-started/
    - theme: alt
      text: GitHub
      link: https://github.com/manyeyes/ManySpeech
  image:
    src: /manyspeech/manyspeech-icon-512.webp
    alt: ManySpeech

features:
  - title: 🎯 デュアルコア駆動
    details: オフライン音声認識 + マイクのリアルタイムストリーミング認識で全シーンをカバー
  - title: 🤖 スマートモデル管理
    details: 必要なモデルを自動検出・ダウンロード、完全オフラインでローカル推論
  - title: 📝 複数フォーマット出力
    details: SRT字幕、JSON、プレーンテキスト等をサポート
  - title: ⚡ 高パフォーマンス
    details: マルチスレッド推論、CPUコア数の自動検出で最適化
  - title: 🔧 二つの利用モード
    details: インタラクティブモード + CLIモードで柔軟に運用可能
  - title: 📦 ゼロコンフィグで即利用
    details: 解凍してすぐ使える、複雑な環境構築は不要

    # SEO コア設定（Rspress が自動適用）
head:
  - [meta, { name: keywords, content: "ManySpeech,オフライン音声認識,ローカルASR,リアルタイム音声認識,音声→テキスト,マイク認識,動画字幕生成,OSS音声認識,ストリーミングASR,大規模モデル音声ツール,Agent音声プラグイン" }]
  - [meta, { name: description, content: "ManySpeech は無料オープンソースのローカルオフライン音声認識CLIツールです。マイクのリアルタイム認識、音声ファイルの文字起こし、SRT字幕自動生成をサポートし、大規模モデルやAIエージェントから直接利用可能です。ゼロコンフィグでそのまま利用できます。" }]
---

## ✨ 機能ハイライト

| 機能 | 説明 |
|------|------|
| **音声認識 (ASR)** | online / offline / 2pass の3つの認識モードをサポート |
| **音声端点検出 (VAD)** | online / offline をサポートし、無音を自動で除去 |
| **句読点復元 (PUNC)** | 認識結果に自動で句読点を付与 |

---

## 🚀 ワンライナーで体験

```bash
# マイクのリアルタイム認識
manyspeech asr -t online -i mic

# 音声ファイル認識
manyspeech asr -t offline -f test.wav
```

> 詳細は左のナビゲーションを参照してください

---