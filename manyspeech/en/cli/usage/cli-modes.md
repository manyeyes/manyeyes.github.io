# CLI Mode vs Interactive Mode

## Interactive Mode

Provides a command prompt for entering commands one by one. Ideal for manual testing.

```bash
# Start
manyspeech
```

Inside:

```cmd
> asr -t offline -f test.wav
> vad -t online -i mic
> exit
```

**Pros**:

- No need to type `manyspeech` every time
- Command history (Up/Down arrows)
- Tab completion

## CLI Mode

Ideal for scripting and automation.

```bash
manyspeech asr -t offline -f test.wav
manyspeech vad -t online -i mic
```

**Pros**:

- Embeddable in Batch/PowerShell scripts
- Supports piping and redirection
- Easy CI/CD integration

## Quick Switch

In interactive mode, use `!` to execute system commands temporarily:

```cmd
> !dir
> !manyspeech asr -t offline -f other.wav
```
