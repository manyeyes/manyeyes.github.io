# 第一次使用

## 交互模式（推荐新手）

双击运行 `manyspeech-cli.exe`，进入交互模式：

```cmd
=====================================
请输入命令 (输入 'exit' 退出，直接回车显示帮助):

# 1. 选择语言（首次运行）
请选择语言: 1. 中文; 2. English;
1

# 2. 输入识别命令
> asr -t offline -f D:\test.wav

# 程序自动下载模型并开始识别
```

## 命令行模式

```bash
# 打开 cmd 或 PowerShell
cd D:\Tools\ManySpeech

# 识别单个文件
manyspeech asr -t offline -f test.wav

# 麦克风实时识别（按 ESC 退出）
manyspeech asr -t online -i mic
```

## 首次运行说明

- 首次运行会自动生成配置文件 `manyspeech.json`
- 首次使用某模型时，程序会自动下载
- 模型较大，请耐心等待下载完成

## 最简命令体验

```bash
# 使用默认测试音频
manyspeech asr -t offline

# 麦克风实时识别
manyspeech asr -t online -i mic
```
