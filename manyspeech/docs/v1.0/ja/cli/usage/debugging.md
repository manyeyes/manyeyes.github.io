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
