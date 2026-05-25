# 配置字段说明

配置文件 `manyspeech.json` 内容示例：

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

## 字段说明

| 字段 | 说明 | 对应命令行参数 | 默认值 |
|------|------|----------------|--------|
| `method` | 处理方式 | `-m, --method` | `chunk` |
| `input` | 输入源 | `-i, --input` | `file` |
| `format` | 输出格式 | `--format` | `text` |
| `threads` | 线程数（0=自动检测） | `--threads` | `2` |
| `accuracy` | 模型精度 | `--accuracy` | `int8` |
| `model` | 主模型名称 | `-md, --model` | `""`（自动匹配） |
| `model2` | 2pass副模型 | `--model2` | `""`（自动匹配） |
| `vad` | VAD模型名称 | `--vad` | `alifsmnvad-onnx` |
| `punc` | 标点模型名称 | `--punc` | `alicttransformerpunc-zh-en-mge-int8-onnx` |
| `base` | 模型根目录 | `-b, --base` | `""`（程序目录） |
| `output` | 工作目录 | `-o, --output` | `""`（当前目录） |
