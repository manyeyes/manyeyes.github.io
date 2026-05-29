# VAD モデル
## FSMN-VAD シリーズ
> **説明**
> - モデル背景：アリババダモアカデミーが開発した産業レベルの音声活性検出（VAD）モデル。FSMN-Monophone アーキテクチャをベースに設計された、16k 向け中国語汎用 VAD モデルで、FunASR フレームワークおよび Paraformer-large の長音声シナリオにネイティブ対応。
> - 機能特性：FSMN構造によりコンテキスト情報を効果的に活用し、推論速度が速く、遅延を制御可能。Monophone による細分化されたモデリングユニットにより特徴の識別能力を高め、認識エラーを低減。オーディオファイル、URL、バイナリストリーム、オーディオ配列、wav.scp リストなど多様な入力に対応。末尾の無音時間、音声／雑音のしきい値などをカスタマイズ可能。Linux-x86_64、macOS、Windows と互換性があり、ASR や句読点モジュールと自由に組み合わせて使用できる。
> - オープンソースリポジトリ：https://github.com/modelscope/FunASR

### モデル一覧
| モデル名 | 説明 | ダウンロード先 |
| ---- | ---- | ---- |
| alifsmnvad-onnx | 汎用標準版。総合的にバランスが良く、デフォルトで推奨 | [modelscope](https://modelscope.cn/models/manyeyes/alifsmnvad-onnx) |

---

## Silero-VAD シリーズ
> **説明**
> - モデル背景：オープンソースコミュニティ snakers4 が発表したディープラーニングベースの音声活性検出モデル。主流のオープンソース VAD ソリューションであり、16kHz オーディオ入力に適合。
> - 機能特性：プリエンファシス、フレーム分割、窓関数などの前処理を音声に施した後、ニューラルネットワークで音声特徴を学習し、音声区間と非音声区間を正確に判別。雑音環境に応じて検出しきい値を適応的に調整でき、騒がしいシーンで優れた性能を発揮。反復バージョンにより耐雑音性を継続的に向上。
> - オープンソースリポジトリ：https://github.com/snakers4/silero-vad

### モデル一覧
| モデル名 | 説明 | ダウンロード先 |
| ---- | ---- | ---- |
| silero-vad-onnx | ベースバージョン。一般的な汎用シーン向け | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-onnx) |
| silero-vad-v5-onnx | V5 反復版。雑音環境への適応能力を最適化 | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-v5-onnx) |
| silero-vad-v6-onnx | V6 最新バージョン。騒がしい環境での検出性能がさらに向上 | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-v6-onnx) |