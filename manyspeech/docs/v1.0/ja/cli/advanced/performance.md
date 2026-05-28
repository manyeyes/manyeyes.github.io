# パフォーマンス最適化

## スレッド数の調整

```bash
# CPU コア数を自動検出（推奨）
manyspeech --threads 0 asr -t offline -f audio.wav

# 手動設定（例: 8 コア）
manyspeech --threads 8 asr -t offline -f audio.wav
```

## モデル精度の選択

| 精度 | 速度 | 精度 | メモリ |
|------|------|------|------|
| `int8` | 速い | 高め | 低 |
| `fp32` | 遅い | 最高 | 高 |

```bash
# int8（デフォルト）
manyspeech asr -t offline --accuracy int8 -f audio.wav

# fp32（精度優先）
manyspeech asr -t offline --accuracy fp32 -f audio.wav
```

## 処理方式の選択

| 方式 | メモリ | レイテンシ | 適用 |
|------|----------|------|------|
| `one` | 高 | 高（全体終了後出力） | 短い音声（<30秒） |
| `chunk` | 低 | 低（ストリーミング出力） | 長時間音声・リアルタイム |

```bash
# 長時間音声には chunk を推奨
manyspeech asr -t offline -m chunk -f long_audio.wav
```

## VAD の最適化

騒音環境では Silero-VAD を推奨:

```bash
manyspeech --vad silero-vad-v6-onnx asr -t online -i mic
```

## ベンチマークの推奨

- `--debug` で詳細な処理時間を確認
- `--threads` を段階的に増やして最適値（通常は CPU コア数）を探す
- 長時間音声は `chunk` がメモリ効率良好
