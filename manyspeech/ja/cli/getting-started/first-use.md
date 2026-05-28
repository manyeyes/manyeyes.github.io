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
