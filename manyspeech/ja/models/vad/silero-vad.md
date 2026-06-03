# Silero-VAD シリーズ

> **説明**
>
> - モデル背景：オープンソースコミュニティ snakers4 が発表したディープラーニングベースの音声活性検出モデル。主流のオープンソース VAD ソリューションであり、16kHz オーディオ入力に適合。
> - 機能特性：プリエンファシス、フレーム分割、窓関数などの前処理を音声に施した後、ニューラルネットワークで音声特徴を学習し、音声区間と非音声区間を正確に判別。雑音環境に応じて検出しきい値を適応的に調整でき、騒がしいシーンで優れた性能を発揮。反復バージョンにより耐雑音性を継続的に向上。
> - オープンソースリポジトリ：[https://github.com/snakers4/silero-vad](https://github.com/snakers4/silero-vad)

## モデル一覧

| モデル名               | 説明                            | ダウンロード先                                                                |
| ------------------ | ----------------------------- | ---------------------------------------------------------------------- |
| silero-vad-onnx    | ベースバージョン。一般的な汎用シーン向け          | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-onnx)    |
| silero-vad-v5-onnx | V5 反復版。雑音環境への適応能力を最適化         | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-v5-onnx) |
| silero-vad-v6-onnx | V6 最新バージョン。騒がしい環境での検出性能がさらに向上 | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-v6-onnx) |
