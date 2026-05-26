# 命令行模式 vs 交互模式

## 交互模式

启动交互模式后，程序会提供一个命令行提示符，可以逐条输入命令，适合手动测试和探索功能。

```bash
# 启动
manyspeech
```

进入后：

```cmd
> asr -t offline -f test.wav
> vad -t online -i mic
> exit
```

**优点**：

- 无需每次输入 `manyspeech`
- 支持命令历史（方向键上下）
- 参数补全（Tab键）

## 命令行模式

适合脚本调用、自动化流程。

```bash
manyspeech asr -t offline -f test.wav
manyspeech vad -t online -i mic
```

**优点**：

- 可嵌入批处理、PowerShell 脚本
- 支持管道和重定向
- 便于集成到 CI/CD 流程

## 快速切换

在交互模式下，也可以临时使用 `!` 执行系统命令：

```cmd
> !dir
> !manyspeech asr -t offline -f other.wav
```
