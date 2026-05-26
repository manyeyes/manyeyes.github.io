# Configuration Management

ManySpeech-CLI supports multi-level configuration files to persist common parameters.

## Configuration Priority

```
CLI Arguments (Highest)
        ↓
    Parameters saved via --save-default
        ↓
    Local Config (Program Dir/manyspeech.json)
        ↓
    User Config (%USERPROFILE%\.manyspeech\manyspeech.json)
        ↓
    System Config (%PROGRAMDATA%\ManySpeech\manyspeech.json)
        ↓
    Environment Variables (MANYSPEECH_*)
        ↓
    Built-in Defaults (Lowest)
```

## Quick Usage

```bash
# View current config
manyspeech --show-config

# Save current params as default
manyspeech asr -t offline --threads 4 --save-default

# Reset config
manyspeech --reset-config
```

## Next Steps

- [Config File Locations](/manyspeech/en/cli/configuration/file-location.md)
- [Config Fields](/manyspeech/en/cli/configuration/fields.md)
- [Config Commands](/manyspeech/en/cli/configuration/commands.md)
