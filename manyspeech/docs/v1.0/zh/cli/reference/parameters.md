# 完整参数说明

## 全局选项

| 参数 | 说明 | 默认值 | 环境变量 |
|------|------|--------|----------|
| `-b, --base <路径>` | 模型根目录 | 程序目录 | `MANYSPEECH_BASE` |
| `-o, --output <目录>` | 工作目录 | 当前目录 | `MANYSPEECH_OUTPUT` |
| `--accuracy <fp32/int8>` | 模型推理精度 | `int8` | `MANYSPEECH_ACCURACY` |
| `--threads <数量>` | 推理线程数，0=自动检测 | `2` | `MANYSPEECH_THREADS` |
| `--debug` | 启用调试输出模式 | — | — |
| `--save-default` | 保存当前参数为默认配置 | — | — |
| `--show-config` | 显示当前配置信息 | — | — |
| `--reset-config` | 重置配置为默认值 | — | — |

## asr 子命令选项

| 参数 | 说明 | 默认值 | 环境变量 |
|------|------|--------|----------|
| `-t, --type <online/offline/2pass>` | 识别类型（必选） | — | `MANYSPEECH_TYPE` |
| `-m, --method <one/batch/chunk>` | 处理方式 | `chunk` | `MANYSPEECH_METHOD` |
| `-i, --input <file/mic>` | 输入源 | `file` | `MANYSPEECH_INPUT` |
| `--format <json/text/srt/vtt>` | 输出格式 | `text` | `MANYSPEECH_FORMAT` |
| `-f, --files <文件...>` | 待识别音频文件（支持多文件） | — | — |
| `-md, --model <名称>` | 主模型名称 | 自动匹配 | `MANYSPEECH_MODEL` |
| `--model2 <名称>` | 2pass 副模型名称 | 自动匹配 | `MANYSPEECH_MODEL2` |
| `--vad <名称>` | VAD模型名称 | `alifsmnvad-onnx` | `MANYSPEECH_VAD` |
| `--punc <名称>` | 标点模型名称 | `alicttransformerpunc-zh-en-mge-int8-onnx` | `MANYSPEECH_PUNC` |

## vad 子命令选项

| 参数 | 说明 | 默认值 |
|------|------|--------|
| `-t, --type <online/offline>` | 检测类型（必选） | — |
| `-m, --method <one/batch/chunk>` | 处理方式 | `chunk` |
| `-i, --input <file/mic>` | 输入源 | `file` |
| `--format <wav/pcm/raw>` | 输出格式 | `wav` |
| `-f, --files <文件...>` | 输入音频文件列表 | — |
| `--vad <名称>` | VAD模型名称 | `alifsmnvad-onnx` |

## punc 子命令选项

| 参数 | 说明 | 默认值 |
|------|------|--------|
| `--text <文本>` | 需要添加标点的文本 | — |
| `-f, --files <文件...>` | 输入文件列表 | — |
| `--split <数量>` | 文本分片大小 | `15` |
| `--format <json/text>` | 输出格式 | `text` |
| `--punc <名称>` | 标点模型名称 | `alicttransformerpunc-zh-en-mge-int8-onnx` |
