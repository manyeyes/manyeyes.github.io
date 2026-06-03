# Debugging Mode

## Enable Debug Mode

```bash
# CLI Mode
manyspeech --debug asr -t online -i mic

# Interactive Mode
> --debug
```

## Debug Output Example

```
[DEBUG] Debug mode enabled via subcommand
[DEBUG] Executing command: asr
[DEBUG] Global Params - basePath: D:\Tools\ManySpeech, outputDir: D:\Tools\ManySpeech\output
[DEBUG] Global Params - threads: 2, accuracy: int8, saveAsDefault: False
[DEBUG] ASR Params - method: one, model: , model2: , vad: alifsmnvad-onnx, punc: alicttransformerpunc-zh-en-mge-int8-onnx, format: text
[DEBUG] Using model directory specified by CLI: D:\Tools\ManySpeech
[DEBUG] Preparing executor...
...
```

## Use Cases

- Troubleshooting parameter parsing
- Viewing execution flow
- Debugging config loading
- Analyzing model path resolution
- Verifying environment variables

> 💡 **Tip**: Debug output contains sensitive path info. Sanitize logs before sharing.
