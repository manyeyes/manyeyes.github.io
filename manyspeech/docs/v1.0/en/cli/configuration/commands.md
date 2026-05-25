# Config Management Commands

## View Config

```bash
manyspeech --show-config
```

Output:
```
Current Configuration:
  version: 1.0.0
  defaults:
    method: chunk
    input: file
    format: text
    threads: 2
    accuracy: int8
    ...
```

## Save Default Config

```bash
# Save current arguments as defaults
manyspeech asr -t offline -m chunk --threads 4 --save-default

# Run later without args, uses saved defaults
manyspeech asr -f test.wav
```

## Reset Config

```bash
manyspeech --reset-config
```

Output:
```
✅ Configuration reset to defaults
```

## Priority Demo

```bash
# CLI args override config
manyspeech asr -t offline --threads 8 -f test.wav

# Use saved defaults
manyspeech asr -t offline --save-default
manyspeech asr -f test.wav   # Uses saved --threads value
```
