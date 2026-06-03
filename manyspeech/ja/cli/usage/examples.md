# 典型的な使用例

## 長時間オフラインストリーミング認識・字幕生成

```cmd
# FireRedASR 大モデル（中国語に最適、高精度）
manyspeech asr -t offline -m chunk --format srt --threads 4 -f "D:\audio\0.wav" --model fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212

# FunASR 軽量モデル（高速、低リソース）
manyspeech asr -t offline -m chunk --format srt --threads 2 -f "D:\audio\0.wav" --model Fun-ASR-Nano-2512-LLM-int8-onnx
```

## マイクのリアルタイム認識

```cmd
# ストリーミングモデル + マイク（最小遅延）
manyspeech asr -t online -i mic

# オフラインモデル + マイク（精度重視）
manyspeech asr -t offline -m chunk -i mic

# 2pass モード + マイク（リアルタイムと精度の両立）
manyspeech asr -t 2pass -i mic
```

## 2pass 二重ストリーム融合認識

```cmd
# Paraformer 2pass
manyspeech asr -t 2pass -i mic --model paraformer-large-zh-en-int8-onnx-online --model2 paraformer-seaco-large-zh-timestamp-int8-onnx-offline

# K2Transducer 2pass
manyspeech asr -t 2pass -i mic --model k2transducer-zipformer-ctc-large-zh-onnx-online-yuekai-20250630 --model2 k2transducer-zipformer-ctc-small-zh-int8-onnx-offline-20250716
```

## VAD 音声端点検出

```cmd
# マイクのオンライン検出
manyspeech vad -t online -i mic

# 音声ファイルのオフライン検出（無音除去）
manyspeech vad -t offline -f meeting.wav

# 出力形式指定
manyspeech vad -t offline --format wav -f noisy_speech.wav
```

## 句読点復元

```cmd
# テキストを直接入力
manyspeech punc --text "今日はいい天気一緒にピクニックに行こう"

# ファイルから読み込み
manyspeech punc -f transcript.txt

# JSON 出力を指定
manyspeech punc --text "hello world" --format json
```
