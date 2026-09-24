# cohere-transcribe：2Bパラメータ高性能多言語音声認識モデル

## 1. プロジェクト背景と開発チーム

cohere-transcribe（`cohere-transcribe-03-2026`）は**CohereおよびCohere Labs**が**2026年3月26日**に公開した専用エンドツーエンド音声認識（ASR）モデルです。**Apache 2.0ライセンス**でオープンソースとして公開されており、商用利用、改変、再配布が許可されています。本モデルは音声テキスト変換タスクのためにゼロから学習されており、公開後はHuggingFace Open ASRランキングで首位を獲得。会議、ポッドキャスト、長時間録音などの実環境の音声シーンでトップクラスの認識精度を実現すると同時に、優れた推論処理能力を備え、本番環境向けオフライン音声書き起こしを目的に設計されています。

Cohere Labsチームは長年、大規模言語モデルと音声技術の研究開発に取り組んできました。cohere-transcribeはCohere初のオープンソース音声モデルであり、**専用ASRモデル**として位置づけられ、既存の大規模言語モデルからファインチューニングされたものではありません。学習目標は単語誤り率（WER）の低減に集中しつつ、実装時のデプロイ効率も考慮しています。

## 2. モデル概要と言語対応能力

モデルの総パラメータ数は**20億（2B）**&#x3067;、ヨーロッパ、アジア太平洋、中東の3地域にわたる**14言語**にネイティブ対応しています。

- ヨーロッパ：英語、フランス語、ドイツ語、イタリア語、スペイン語、ポルトガル語、ギリシャ語、オランダ語、ポーランド語
- アジア太平洋：中国語（普通話）、日本語、韓国語、ベトナム語
- 中東：アラビア語

> 対応言語とロケールコード一覧：

```
zh-CN: 中国語（普通話）
en-US: 英語（米国）、en-GB: 英語（英国）
fr-FR: フランス語（フランス）
de-DE: ドイツ語（ドイツ）
it-IT: イタリア語（イタリア）
es-ES: スペイン語（スペイン）
pt-PT: ポルトガル語（ポルトガル）
el-GR: ギリシャ語（ギリシャ）
nl-NL: オランダ語（オランダ）
pl-PL: ポーランド語（ポーランド）
ja-JP: 日本語
ko-KR: 韓国語
vi-VN: ベトナム語
ar-GLA: アラビア語、ar-MA: アラビア語（モロッコ）、ar-SA: アラビア語（サウジアラビア）、ar-EG: アラビア語（エジプト）、ar-KW: アラビア語（クウェート）、ar-LY: アラビア語（リビア）、ar-JO: アラビア語（ヨルダン）、ar-AE: アラビア語（UAE）、ar-LVT: アラビア語（レバント地域）
```

**公式が明示する機能の境界（重要）**

- 句読点：モデル出力テキストには標準で句読点が付与され、推論パラメータで句読点のオン・オフを制御可能。
- タイムスタンプと話者分離：**ネイティブのモデル単体では単語/文単位のタイムスタンプ出力および話者分離（diarization）に対応していません**。これらの機能が必要な場合は、上位アプリケーション側で別途実装する必要があります。
- 言語検出：**自動言語判別機能は搭載されていません**。推論実行前に対象言語を手動で指定する必要があり、言語切り替えが含まれる混合言語音声では認識の安定性が低下します。
- 音声ファイル制限：単一ファイルのアップロード上限は25MB。長時間音声の自動チャンク分割機能を内蔵し、1時間級の長尺録音の書き起こしに対応可能。
- デプロイ用バリエーション：公式PyTorch重みが提供されています。コミュニティによる第三者製INT8量子化ONNX版があり、CPUエッジデバイスおよびGPUオフライン推論に利用可能（非公式）。

**利用シーン**：ポッドキャスト書き起こし、会議議事録、長時間録音のアーカイブ、多言語講座の字幕作成、インタビュー録音の文字起こし。

## 3. コアアーキテクチャと機能

### 3.1 Conformerエンコーダ + 軽量Transformerデコーダアーキテクチャ

cohere-transcribeは**エンコーダ・デコーダ型エンドツーエンドASRアーキテクチャ**を採用しています。

1. **Conformerエンコーダ**：モデルの大部分のパラメータを占め、生の波形からロバストな音響特徴量を抽出します。CNNとTransformerの長所を組み合わせ、話速、アクセント、音響環境の変化に適応します。
2. **軽量Transformerデコーダ**：トークンを自己回帰的に生成。簡素化された設計により、デコード時の計算コストを削減します。
3. 学習目的：標準的な教師あり交差エントロピー損失。**ゼロから学習**され、音声波形を直接テキストへマッピングします。

音声前処理の流れ：生音声は自動的に16kHzにリサンプリングされます。マルチチャネルステレオ音声は平均処理によりモノラルに変換され、log-Melスペクトログラムがモデルの入力となります。長音声自動チャンク分割機能により、セグメント長を超える音声は自動分割され、推論完了後にテキストを結合することで、1時間級の長尺録音にネイティブ対応します。

### 3.2 コア機能一覧

| 機能区分           | 説明                                                                                            |
| :------------- | :-------------------------------------------------------------------------------------------- |
| **多言語認識**      | ヨーロッパ、アジア、中東の主要14言語に対応                                                                        |
| **句読点復元**      | 標準で句読点を出力。パラメータにより無効化可能                                                                       |
| **長時間音声書き起こし** | 自動チャンク分割＋テキスト再構成、1時間級録音に対応                                                                    |
| **推論効率**       | 同等パラメータ規模のモデルの中で、リアルタイム係数は同種モデルの最大3倍                                                          |
| **制限事項**       | 自動言語検出なし、ネイティブのタイムスタンプ・話者分離機能なし。無音・背景ノイズによるテキストハルシネーションが発生する場合がある。本番デプロイ時はVAD（音声区間検出）前処理を強く推奨 |

## 4. 学習データと学習方針

### 4.1 学習データ規模

本モデルはゼロから学習されており、**50万時間の高品質に精選された音声-テキストペアデータ**を含む学習セットを使用。厳密なクリーニングとフィルタリングを行い、データ品質を最優先しています。ノイズ付加、話速摂動、アクセント拡張などの合成データを追加し、実環境でのロバスト性を向上させています。

> 注記：公式ドキュメントにはデータ構成の詳細、擬似ラベリング、TTS合成データの詳細は開示されていません。モデルカードに記載のないデータに関する記述は追加しません。

### 4.2 学習方針

**単一段階の教師あり学習スキーム**を採用し、標準的な交差エントロピー損失によりトークン予測を行い、書き起こし精度の最適化に注力しています。モデル設計は推論性能を両立し、高い認識精度を保ちながら自己回帰デコードの計算コストを削減し、高スループットなオフライン書き起こしを実現します。

## 5. 主要性能指標

### 5.1 HuggingFace Open ASRランキングベンチマーク（2026.03.26）

英語ベンチマークセットで**全体WER 5.42%**&#x3092;達成し、HuggingFace Open ASRランキングで首位。Whisper Large v3、ElevenLabs Scribe v2、Qwen3-ASR-1.7Bなどの主流ASRモデルを上回ります。

| モデル               | 全体WER | AMI会議セット | Earnings22長時間決算電話 | Gigaspeechポッドキャスト |
| :---------------- | :---: | :------: | :---------------: | :---------------: |
| Cohere Transcribe |  5.42 |   8.15   |       10.84       |        9.33       |
| Whisper Large v3  |  7.44 |   15.95  |       11.29       |       10.02       |

> AMI：複数人の会議録音；Earnings22：長時間の決算電話会議で長尺音声の代表シナリオ；Gigaspeech：ポッドキャストの実音声。
> 注記：5.42%のWERは**英語ランキング向けベンチマーク**の値です。その他の言語（中国語、日本語、アラビア語など）については、公式は良好な性能であると述べているだけで、モデル横断の完全なベンチマーク表は公開されていません。他言語のWER値を捏造して記載することはありません。

### 5.2 モデル比較まとめ

✅ 長所

1. 同程度のパラメータ規模で推論処理能力が高く、会議、長時間録音、ポッドキャストといった実音声シーンにおける英語認識精度が優れている。
2. 商用でよく使われる14言語に対応。Apache 2.0ライセンスにより商用利用制限がない。
3. 長時間音声の自動チャンク分割を標準搭載、長尺録音のオフラインアーカイブに適している。

⚠️ 短所

1. 自動言語検出機能がなく、対象言語を手動で指定する必要がある。
2. モデル単体では**単語/文のタイムスタンプ出力、話者分離に対応していません**。字幕や話者の紐付け機能は上位コンポーネントで実装する必要がある。
3. 無音区間や背景ノイズによりテキストハルシネーションが発生するため、VAD前処理が必要。
4. 混合言語の認識性能は不安定。単一言語入力時に最良の結果が得られる。

## 6. 推論とデプロイ

### 6.1 公式ネイティブデプロイ（PyTorch）

HuggingFace `transformers`ライブラリを基盤とし、単一マシンでのGPUオフライン推論、vLLMによる高性能サービス提供に対応。MLX、Rust、WebGPUエコシステムにネイティブ対応し、Apple SiliconやブラウザWebGPU環境で実行可能です。

> 注意：HuggingFaceの重みはgatedモデルのため、ログインして利用規約に同意しないとダウンロードできません。

```python
from transformers import AutoProcessor, CohereAsrForConditionalGeneration
from transformers.audio_utils import load_audio

processor = AutoProcessor.from_pretrained("CohereLabs/cohere-transcribe-03-2026")
model = CohereAsrForConditionalGeneration.from_pretrained(
    "CohereLabs/cohere-transcribe-03-2026", 
    device_map="auto"
)

audio = load_audio("audio.wav", sampling_rate=16000)
inputs = processor(audio, sampling_rate=16000, return_tensors="pt", language="en")
inputs.to(model.device, dtype=model.dtype)

outputs = model.generate(**inputs, max_new_tokens=256)
text = processor.decode(outputs, skip_special_tokens=True)
print(text)
```

### 6.2 コミュニティ版デプロイ：ONNX量子化版（ManySpeech-CLI）

コミュニティが公式重みを元にエクスポートしたINT8量子化ONNXモデル：`cohere-transcribe-03-2026-int8-onnx`がModelScopeのmanyeyesリポジトリで公開されています。

- 量子化のメリット：VRAM使用量を大幅に削減、CPUデバイスで動作可能。
- 推論モード：非ストリーミング推論。VADチャンク分割と組み合わせることで準リアルタイム処理を実現。
- CLI実行例：

```cmd
manyspeech asr -t offline -m chunk --format txt --threads 4 -i file -files "meeting.wav" --model cohere-transcribe-03-2026-int8-onnx --language zh
```

> モデルファイル一覧：encoder.int8.onnx、decoder.int8.onnx、asr.yaml、conf.json、tokens.txt
> 重要な告知：ONNX量子化モデルは**コミュニティによる第三者のエクスポート成果物であり、Cohere公式のリリースではありません**。

## 7. オープンソース関連リソース

| リソース種別                       | リンク                                                                                                                                                                                                                                                                                                                |
| :--------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 公式モデルリポジトリ（HFミラー）            | \[[https://huggingface.co/CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026)]\([https://hf-mirror.com/CohereLabs/cohere-transcribe-03-2026](https://hf-mirror.com/CohereLabs/cohere-transcribe-03-2026))                                                           |
| コミュニティONNX量子化モデル（ModelScope） | \[[https://modelscope.cn/models/manyeyes/cohere-transcribe-03-2026-int8-onnx](https://modelscope.cn/models/manyeyes/cohere-transcribe-03-2026-int8-onnx)]\([https://modelscope.cn/models/manyeyes/cohere-transcribe-03-2026-int8-onnx](https://modelscope.cn/models/manyeyes/cohere-transcribe-03-2026-int8-onnx)) |
| Cohere公式技術ブログ                | \[[https://cohere.com/blog/transcribe](https://cohere.com/blog/transcribe)]\([https://cohere.com/blog/transcribe](https://cohere.com/blog/transcribe))                                                                                                                                                             |
| HuggingFaceオンラインデモ           | \[[https://huggingface.co/spaces/CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/spaces/CohereLabs/cohere-transcribe-03-2026)]\([https://huggingface.co/spaces/CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/spaces/CohereLabs/cohere-transcribe-03-2026))                             |

## 8. 著作権

cohere-transcribeはCohere Labsチームにより**Apache 2.0ライセンス**でオープンソース公開されています。学術研究および商用製品に対し、自由に使用、改変、再配布することが可能です。BibTeX引用：

```bibtex
@misc{cohere2026transcribe,
    author       = {Julian Mack and Ekagra Ranjan and Walter Beller-Morales and Bharat Venkitesh and Pierre Richemond},
    title        = {cohere-transcribe-03-2026},
    year         = {2026},
    url          = {[https://hf-mirror.com/CohereLabs/cohere-transcribe-03-2026](https://hf-mirror.com/CohereLabs/cohere-transcribe-03-2026)},
    doi          = {10.57967/hf/8653},
    publisher    = {Hugging Face}
}
```

## 九、引用注釈

cohere-transcribe-03-2026 の学習に用いられた**50万時間の精選音声対データ**は、Cohere 研究チームがモデル公開時に公表したパラメータであり、公式ブログには記載されていません。当該データは業界技術レビューサイト AI Wiki にて正式に記録・検証された公開情報です。

学習データには0–30dBのSNR合成ノイズによる拡張処理が施されています。データ詳細構成・言語別学習比率については公式未公開となります。

### 参考文献

\[1] AI Wiki. Cohere Transcribe\[EB/OL]. 2026-03-27. 閲覧 2026-09-24. [https://aiwiki.ai/wiki/cohere\_transcribe](https://aiwiki.ai/wiki/cohere_transcribe).

### BibTeX (ACM/NeurIPS Standard)

```bibtex
@online{aiwiki2026cohere,
  title={Cohere Transcribe},
  author={{AI Wiki}},
  year={2026},
  url={[https://aiwiki.ai/wiki/cohere_transcribe](https://aiwiki.ai/wiki/cohere_transcribe)},
  urldate={2026-09-24}
}
```

> **注記**：公式版はPyTorch重みです。コミュニティ製ONNX量子化版は第三者によるエクスポートで、計算資源の少ないデバイスのオフラインデプロイに適しています。モデル本体は音声からテキストへの変換のみを実行します。タイムスタンプ、話者分離、自動言語検出は上位アプリケーション側で別途実装する必要があります。
