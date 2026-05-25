# Model Management

ManySpeech-CLI features intelligent model management, auto-detecting and downloading required models.

## Auto-Download

When using a missing model, it downloads automatically from ModelScope:

```bash
manyspeech asr -t offline --model paraformer-large-zh-en-int8-onnx-offline -f test.wav
# Downloads if not present
```

## Model Storage

Default root is `models/` in the program directory.

Specify via `--base`:

```bash
manyspeech --base D:\MyModels asr -t offline -f test.wav
```

## Next Steps

- [Supported Models](./supported-models)
- [Auto-Download Mechanism](./auto-download)
- [Manual Specification](./manual-specify)
