# 自动下载机制

## 下载触发条件

当执行识别命令时，如果指定的模型不存在于本地，程序会自动开始下载。

```bash
manyspeech asr -t offline --model fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212 -f test.wav
```

## 下载流程

1. 检查本地模型目录是否存在模型文件
2. 若不存在，从 ModelScope 下载模型包
3. 解压到模型目录
4. 继续执行识别任务

## 下载进度

```
正在下载模型: fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212
[===============>       ] 65%  128MB/197MB
下载完成，开始加载模型...
```

## 断点续传

支持断点续传，如果网络中断，下次运行会从上次中断处继续。

## 手动下载

如果网络环境不佳，也可以手动下载模型包并放置到 `models/` 目录下。
