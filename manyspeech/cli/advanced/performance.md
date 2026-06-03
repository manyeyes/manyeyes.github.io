# 性能优化

## 线程数调优

```bash
# 自动检测CPU核心数（推荐）
manyspeech --threads 0 asr -t offline -f audio.wav

# 手动设置（例如8核）
manyspeech --threads 8 asr -t offline -f audio.wav
```

## 模型精度选择

| 精度     | 速度 | 精度 | 内存 |
| ------ | -- | -- | -- |
| `int8` | 快  | 较高 | 低  |
| `fp32` | 慢  | 最高 | 高  |

```bash
# 使用 int8（默认，推荐）
manyspeech asr -t offline --accuracy int8 -f audio.wav

# 使用 fp32（更高精度）
manyspeech asr -t offline --accuracy fp32 -f audio.wav
```

## 处理方式选择

| 方式      | 内存占用 | 延迟       | 适用         |
| ------- | ---- | -------- | ---------- |
| `one`   | 高    | 高（等整体结束） | 短音频（\<30秒） |
| `chunk` | 低    | 低（流式输出）  | 长音频、实时     |

```bash
# 长音频推荐 chunk
manyspeech asr -t offline -m chunk -f long_audio.wav
```

## VAD 优化

嘈杂环境使用 Silero-VAD：

```bash
manyspeech --vad silero-vad-v6-onnx asr -t online -i mic
```

## 性能测试建议

- 使用 `--debug` 查看详细耗时
- 逐步增加 `--threads` 找到最佳值（通常 = CPU核心数）
- 对于长音频，`chunk` 方式比 `one` 更省内存
