# 环境变量配置

通过环境变量可以预设全局参数，避免每次输入。

## Windows (cmd)

```cmd
set MANYSPEECH_TYPE=online
set MANYSPEECH_METHOD=chunk
set MANYSPEECH_THREADS=4
set MANYSPEECH_FORMAT=srt
set MANYSPEECH_OUTPUT=D:\Output
manyspeech asr -i mic
```

## Windows (PowerShell)

```powershell
$env:MANYSPEECH_TYPE="online"
$env:MANYSPEECH_METHOD="chunk"
$env:MANYSPEECH_THREADS="4"
$env:MANYSPEECH_FORMAT="srt"
$env:MANYSPEECH_OUTPUT="D:\Output"
manyspeech asr -i mic
```

## Linux/macOS

```bash
export MANYSPEECH_TYPE=online
export MANYSPEECH_METHOD=chunk
export MANYSPEECH_THREADS=4
manyspeech asr -i mic
```

## 支持的环境变量

| 变量名                   | 对应参数           | 说明    |
| --------------------- | -------------- | ----- |
| `MANYSPEECH_BASE`     | `--base`       | 模型根目录 |
| `MANYSPEECH_OUTPUT`   | `--output`     | 输出目录  |
| `MANYSPEECH_THREADS`  | `--threads`    | 线程数   |
| `MANYSPEECH_ACCURACY` | `--accuracy`   | 精度    |
| `MANYSPEECH_TYPE`     | `-t, --type`   | 识别类型  |
| `MANYSPEECH_METHOD`   | `-m, --method` | 处理方式  |
| `MANYSPEECH_INPUT`    | `-i, --input`  | 输入源   |
| `MANYSPEECH_FORMAT`   | `--format`     | 输出格式  |
| `MANYSPEECH_MODEL`    | `-md, --model` | 主模型   |
| `MANYSPEECH_MODEL2`   | `--model2`     | 副模型   |
| `MANYSPEECH_VAD`      | `--vad`        | VAD模型 |
| `MANYSPEECH_PUNC`     | `--punc`       | 标点模型  |

> 💡 **优先级**：命令行参数 > 环境变量 > 配置文件
