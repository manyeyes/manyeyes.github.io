# Changelog

## 2026-05-23

- Refactored CLI architecture to subcommand mode
  - `asr` - Speech Recognition (online/offline/2pass)
  - `vad` - Voice Activity Detection
  - `punc` - Punctuation Restoration
- Added `--debug` mode

## 2026-05-21

- Added standalone VAD command: `vad`

## 2026-05-19

- Added standalone Punctuation command: `punc`

## 2026-05-12

- Added config file management for persistence

## 2026-05-11

- Refactored CLI parsing with smart completion

## 2026-05-08

- Added more model support
- Optimized terminal output

## 2025-09-22

- Support for `fsmn-vad` / `silero-vad` switching

## 2025-09-09

- Added `2pass` recognition mode for better timestamps

## 2025-09-05

- Support for SRT, JSON, Text outputs

## 2025-08-29

- Initial release of `manyspeech-cli`
