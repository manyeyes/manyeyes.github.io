# 配置管理命令

## 查看配置

```bash
manyspeech --show-config
```

输出示例：

```
当前配置信息:
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

## 保存默认配置

```bash
# 将当前命令的参数保存为默认值
manyspeech asr -t offline -m chunk --threads 4 --save-default

# 之后直接运行，自动使用保存的默认值
manyspeech asr -f test.wav
```

## 重置配置

```bash
manyspeech --reset-config
```

输出：

```
✅ 配置已重置为默认值
```

## 配置优先级演示

```bash
# 命令行参数覆盖配置文件
manyspeech asr -t offline --threads 8 -f test.wav

# 使用保存的默认配置
manyspeech asr -t offline --save-default
manyspeech asr -f test.wav   # 会使用之前保存的 --threads 值
```
