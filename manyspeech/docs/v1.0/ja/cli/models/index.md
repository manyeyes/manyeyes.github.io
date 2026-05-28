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
