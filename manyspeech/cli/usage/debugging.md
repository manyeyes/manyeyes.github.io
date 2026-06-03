# 调试模式

## 启用调试模式

```bash
# 命令行模式
manyspeech --debug asr -t online -i mic

# 交互模式
> --debug
```

## 调试输出示例

```
[DEBUG] 调试模式已通过子命令启用
[DEBUG] 执行命令: asr
[DEBUG] 全局参数 - basePath: D:\Tools\ManySpeech, outputDir: D:\Tools\ManySpeech\output
[DEBUG] 全局参数 - threads: 2, accuracy: int8, saveAsDefault: False
[DEBUG] ASR 参数 - method: one, model: , model2: , vad: alifsmnvad-onnx, punc: alicttransformerpunc-zh-en-mge-int8-onnx, format: text
[DEBUG] 使用命令行指定的模型目录: D:\Tools\ManySpeech
[DEBUG] 准备执行处理器
...
```

## 适用场景

- 排查参数解析问题
- 查看程序执行流程
- 调试配置文件加载
- 分析模型路径解析
- 验证环境变量是否生效

> 💡 **提示**：调试输出会包含敏感路径信息，分享日志时请注意脱敏。
