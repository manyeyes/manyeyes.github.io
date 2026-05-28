# 模型管理

ManySpeech-CLI 内置智能模型管理机制，自动检测并下载所需模型，无需手动配置。

## 模型自动下载

当使用未下载的模型时，程序会自动从 ModelScope 下载：

```bash
manyspeech asr -t offline --model paraformer-large-zh-en-int8-onnx-offline -f test.wav
# 如果模型不存在，自动下载
```

## 模型存储位置

默认模型根目录为程序所在目录下的 `models/` 文件夹。

可通过 `--base` 参数指定：

```bash
manyspeech --base D:\MyModels asr -t offline -f test.wav
```

## 下一步

- [自动下载机制](./auto-download) - 下载流程详解
- [手动指定模型](./manual-specify) - 高级用法
- [支持的模型列表](./selection-guide) - 模型选型指南
