# Performance Optimization

## Thread Tuning

```bash
# Auto-detect CPU cores (Recommended)
manyspeech --threads 0 asr -t offline -f audio.wav

# Manual set (e.g., 8 cores)
manyspeech --threads 8 asr -t offline -f audio.wav
```

## Model Precision

| Precision | Speed | Accuracy | Memory |
|------|------|------|------|
| `int8` | Fast | High | Low |
| `fp32` | Slow | Highest | High |

```bash
# Use int8 (Default, Recommended)
manyspeech asr -t offline --accuracy int8 -f audio.wav

# Use fp32 (Higher Accuracy)
manyspeech asr -t offline --accuracy fp32 -f audio.wav
```

## Processing Method

| Method | Memory | Latency | Use Case |
|------|----------|------|------|
| `one` | High | High (Wait for end) | Short audio (<30s) |
| `chunk` | Low | Low (Streaming) | Long audio, Real-time |

```bash
# Chunk recommended for long audio
manyspeech asr -t offline -m chunk -f long_audio.wav
```

## VAD Optimization

Use Silero-VAD in noisy environments:

```bash
manyspeech --vad silero-vad-v6-onnx asr -t online -i mic
```

## Testing Tips

- Use `--debug` for timing details.
- Increase `--threads` to find optimal value (usually = CPU cores).
- `chunk` saves more memory than `one` for long audio.
