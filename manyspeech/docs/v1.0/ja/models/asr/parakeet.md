# Parakeet シリーズ

> **一般注記**  
> - `int8` = 量子化版、サイズが小さく推論が高速  
> - `selfcrosskv` / `selfcrosskvstack` = 推論最適化バリアント（Parakeetシリーズには該当なし）  
> - 一部モデルは HuggingFace または GitHub のダウンロードソースを提供、各表を参照

## Parakeet シリーズ

> **注記**  
> - モデルアーキテクチャ：NVIDIA **FastConformer-TDT-CTC**（ハイブリッドアーキテクチャ）  
> - シリーズ構成：  
>   - `tdt-0.6b`：標準 TDT モデル、0.6B パラメータ、句読点・大文字・タイムスタンプをサポート  
>   - `tdt_ctc`：CTC を組み合わせた TDT モデル（110M / 0.6B パラメータ）。110M 英語モデルと 0.6B 日本語モデルは句読点をサポート  
> - バージョン識別子：  
>   - `v2`：英語モデル、句読点・大文字・タイムスタンプをサポート  
>   - `v3` / `multilingual`：多言語モデル、欧州 25 言語をサポート、自動言語検出、句読点・大文字・タイムスタンプをサポート  
> - ライセンス：v2 および v3 モデルは **CC-BY-4.0** を使用。CTC シリーズは主に Apache License 2.0（各モデルページを確認）  
> - ユースケース：高スループットの音声文字起こし、多言語会話 AI、字幕生成、音声分析など

### 1. Parakeet-TDT 英語モデル（v2）

> **詳細特徴**  
> - **サポート言語**：英語  
> - **句読点と大文字**：句読点と正しい大文字小文字を出力  
> - **タイムスタンプ**：単語レベル、文字レベル、セグメントレベルの正確なタイムスタンプ予測をサポート  
> - **長音声**：フルアテンションにより、最大 24 分の音声を一度に文字起こし可能  
> - **アーキテクチャ**：FastConformer エンコーダ + TDT デコーダ、600M パラメータ  
> - **入力**：16 kHz モノラル .wav または .flac  
> - **出力**：句読点と大文字を含むテキスト文字列  
> - **パフォーマンス**：Hugging Face ASR リーダーボードで RTFx 3380  
> - **リリース日**：2025-05-01  
> - **ライセンス**：CC-BY-4.0、商用・非商用利用可能  

| モデル名 | タイプ | サポート言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| parakeet-tdt-0.6b-v2-en-onnx | 非ストリーミング | 英語 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt-0.6b-v2-en-onnx) |
| parakeet-tdt-0.6b-v2-en-int8-onnx | 非ストリーミング | 英語 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt-0.6b-v2-en-int8-onnx) |

### 2. Parakeet-TDT 多言語モデル（v3）

> **詳細特徴**  
> - **サポート言語**（欧州 25 言語）：ブルガリア語 (bg)、クロアチア語 (hr)、チェコ語 (cs)、デンマーク語 (da)、オランダ語 (nl)、英語 (en)、エストニア語 (et)、フィンランド語 (fi)、フランス語 (fr)、ドイツ語 (de)、ギリシャ語 (el)、ハンガリー語 (hu)、イタリア語 (it)、ラトビア語 (lv)、リトアニア語 (lt)、マルタ語 (mt)、ポーランド語 (pl)、ポルトガル語 (pt)、ルーマニア語 (ro)、スロバキア語 (sk)、スロベニア語 (sl)、スペイン語 (es)、スウェーデン語 (sv)、ロシア語 (ru)、ウクライナ語 (uk)  
> - **自動言語検出**：追加プロンプト不要、モデルが音声の言語を自動識別  
> - **句読点と大文字**：句読点と正しい大文字小文字を出力  
> - **タイムスタンプ**：正確な単語レベルおよびセグメントレベルのタイムスタンプをサポート  
> - **長音声**：A100 80GB でフルアテンション使用時 24 分まで、ローカルアテンション使用時 3 時間まで処理可能  
> - **アーキテクチャ**：FastConformer エンコーダ + TDT デコーダ、600M パラメータ、Granary データセット（670,000+ 時間）で学習  
> - **入力**：16 kHz モノラル .wav または .flac  
> - **出力**：句読点と大文字を含むテキスト文字列  
> - **リリース日**：2025-08-14（Hugging Face）  
> - **ライセンス**：CC-BY-4.0、商用・非商用利用可能  

| モデル名 | タイプ | サポート言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| parakeet-tdt-0.6b-v3-multilingual-onnx | 非ストリーミング | 欧州 25 言語（上記参照） | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt-0.6b-v3-multilingual-onnx) |
| parakeet-tdt-0.6b-v3-multilingual-int8-onnx | 非ストリーミング | 欧州 25 言語（上記参照） | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt-0.6b-v3-multilingual-int8-onnx) |

### 3. Parakeet-TDT-CTC 英語モデル（110M）

> **詳細特徴**  
> - **モデル開発**：NVIDIA NeMo と Suno.ai チームの共同開発  
> - **アーキテクチャ**：ハイブリッド FastConformer-TDT-CTC、約 **114M パラメータ**  
> - **サポート言語**：英語  
> - **句読点と大文字**：✅ 句読点と大文字（PnC）をサポート  
> - **タイムスタンプ**：デフォルトの TDT デコーダでタイムスタンプ出力可能。CTC デコーダに切り替えるとテキストのみ（タイムスタンプなし）  
> - **長音声**：フルアテンション、1 パスで最大 **20 分**  
> - **パフォーマンス**：Hugging Face ASR 評価セットでの平均 RTFx ~5300（A100）  
> - **入力**：16 kHz モノラル .wav または .flac  
> - **出力**：句読点と大文字を含むテキスト文字列  
> - **ライセンス**：Apache License 2.0  

| モデル名 | タイプ | サポート言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| parakeet-tdt_ctc-110m-en-onnx | 非ストリーミング | 英語 | あり | あり（TDTデコーダ） | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt_ctc-110m-en-onnx) |
| parakeet-tdt_ctc-110m-en-int8-onnx | 非ストリーミング | 英語 | あり | あり（TDTデコーダ） | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt_ctc-110m-en-int8-onnx) |

> **注記**：ONNX エクスポート版はデフォルトで TDT デコーダを使用するため、タイムスタンプをサポートします。CTC デコーダに切り替える場合は、ネイティブの NeMo モデルの使用説明を参照してください。

### 4. Parakeet-TDT-CTC 日本語モデル（0.6B）

> **詳細特徴**  
> - **モデル開発**：NVIDIA NeMo チームによる開発  
> - **アーキテクチャ**：ハイブリッド FastConformer-TDT-CTC、**約 0.6B（600M）パラメータ**  
>   - FastConformer：8 倍の depthwise 分離可能な畳み込みダウンサンプリングを使用し、推論を高速化  
>   - TDT（Token-and-Duration Transducer）：トークンと duration を同時予測することで、ほとんどの blank 予測をスキップ（本モデルの duration 最大 4 フレーム）、推論を大幅に高速化  
> - **サポート言語**：日本語  
> - **句読点**：✅ 句読点をサポート  
> - **タイムスタンプ**：デフォルトの TDT デコーダでタイムスタンプ出力可能  
> - **長音声**：明確な指定なし  
> - **入力**：16 kHz モノラル .wav または .flac  
> - **出力**：句読点を含むテキスト文字列  
> - **ライセンス**：Apache License 2.0  

| モデル名 | タイプ | サポート言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| parakeet-tdt_ctc-0.6b-ja-onnx | 非ストリーミング | 日本語 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt_ctc-0.6b-ja-onnx) |
| parakeet-tdt_ctc-0.6b-ja-int8-onnx | 非ストリーミング | 日本語 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt_ctc-0.6b-ja-int8-onnx) |

---

> **補足説明**  
> - 句読点とタイムスタンプのサポート状況まとめ：  
>   - ✅ **v2 英語モデル**：句読点・大文字・タイムスタンプ  
>   - ✅ **v3 多言語モデル**：句読点・大文字・タイムスタンプ  
>   - ✅ **CTC 110M 英語モデル**：句読点・大文字、タイムスタンプは TDT デコーダ経由  
>   - ✅ **CTC 0.6B 日本語モデル**：句読点、タイムスタンプは TDT デコーダ経由  
> - すべての ONNX モデルはエッジおよびクラウド展開に適しており、int8 バージョンはより小型で高速  
> - ライセンス：v2/v3 は CC-BY-4.0 推奨、CTC モデルは主に Apache 2.0 – 各モデルページを確認  
> - 日本語モデルの TDT duration は 4 フレームで、大幅な推論高速化を実現。詳細なパフォーマンス指標は NVIDIA 公式ドキュメントを参照