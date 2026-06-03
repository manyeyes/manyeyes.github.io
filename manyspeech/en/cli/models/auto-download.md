# Auto-Download Mechanism

## Trigger

Downloads start automatically if the specified model is missing locally.

```bash
manyspeech asr -t offline --model fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212 -f test.wav
```

## Process

1. Check local model directory.
2. If missing, download from ModelScope.
3. Extract to model directory.
4. Proceed with recognition.

## Progress

```
Downloading model: fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212
[===============>       ] 65%  128MB/197MB
Download complete, loading model...
```

## Resume Support

Supports resume from break. If network fails, it continues from where it left off next time.

## Manual Download

If network is poor, manually download and place in `models/`.
