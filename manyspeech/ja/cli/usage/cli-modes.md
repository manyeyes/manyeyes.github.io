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
