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
