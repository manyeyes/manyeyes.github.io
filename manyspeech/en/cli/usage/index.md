# Usage Guide

ManySpeech-CLI provides three core subcommands:

## Subcommands Overview

| Subcommand | Function                 | Supported Types          |
| ---------- | ------------------------ | ------------------------ |
| `asr`      | Speech Recognition       | online / offline / 2pass |
| `vad`      | Voice Activity Detection | online / offline         |
| `punc`     | Punctuation Restoration  | -                        |

## Command Structure

```bash
manyspeech <subcommand> [options...]
```

> 💡 **Tip**: Global options (`--base`, `--vad`, `--output`, `--debug`, etc.) can be placed **anywhere** in the command line.

## Quick Examples

```bash
# Speech Recognition
manyspeech asr -t offline -f audio.wav

# VAD Detection
manyspeech vad -t online -i mic

# Punctuation Restoration
manyspeech punc --text "hello world"
```

## Navigation

- [CLI vs Interactive Mode](/manyspeech/en/cli/usage/cli-modes.md)
- [Subcommand Details](/manyspeech/en/cli/usage/commands.md)
- [Typical Examples](/manyspeech/en/cli/usage/examples.md)
- [Debugging](/manyspeech/en/cli/usage/debugging.md)
