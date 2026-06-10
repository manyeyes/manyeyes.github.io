# FireRedASR2-AED：軽量高精度中英バイリンガル音声認識モデル

## 一、モデル概要

FireRedASR2-AEDは、小红书のFireRedTeamが発表した第2世代産業グレード音声認識モデルであり、統合システムFireRedASR2Sの中核ASRモジュールです。FireRedASR2シリーズの2つの変種のうち、AEDバージョンは **Attention-based Encoder-Decoder（AED）** アーキテクチャを採用しており、パラメータ数は約1B+です。これは、FireRedASR2-LLM（8B+パラメータ）大規模モデルの軽量な代替手段です。

FireRedASR2は、初代FireRedASRをベースに認識精度を全面的に向上させ、優れたパフォーマンスと最適な効率の両方を異なるシーンで実現するように設計されています。

## 二、コアアーキテクチャ設計

初代FireRedASR-AEDの技術文書（arXiv:2501.14350）に基づく、FireRedASR2-AEDの中核アーキテクチャは以下の通りです。

### 2.1 エンコーダ-デコーダ構造

**Conformerエンコーダ＋Transformerデコーダ** の古典的な組み合わせを採用：

- **Conformerエンコーダ**：マルチヘッド自己注意機構と畳み込みモジュールを組み合わせることで、音声信号の大局的依存関係と局所的な音響特徴の詳細なモデリングを両立。
- **Transformerデコーダ**：交差注意機構を介して効率的な系列変換を実現し、自己回帰デコードをサポート。

### 2.2 サブサンプリング戦略

エンコーダ前端は **2層の畳み込み（ストライド2、カーネルサイズ3）** により入力音声をサブサンプリングし、時間分解能を10msから40msに低減。重要な音響情報を保持しつつ計算複雑性を効果的に削減します。

### 2.3 トークナイゼーション戦略

**ハイブリッドトークナイゼーション戦略** を採用：中国語は文字レベル、英語はByte Pair Encoding（BPE）を使用。**総語彙サイズ7,832** であり、中英混合入力の認識シーンに自然に対応します。

### 2.4 入力長の制限（公式仕様）

- **FireRedASR2-AED**：最大 **60秒** の音声入力をサポート。60秒を超えると幻覚が発生する可能性があり、200秒を超えると位置エンコーディングエラーが発生します。
- **FireRedASR2-LLM**：最大 **40秒** の音声入力をサポート（より長い入力は未テスト）。

## 三、学習データと戦略

初代FireRedASR-AEDの技術文書（arXiv:2501.14350）によると、学習データは以下の通りです。

- **普通話コーパス**：約 **70,000時間** の専門家による書き起こし高品質音声データ。主に人手アノテーション。
- **英語データ**：約 **11,000時間** の補足学習データ。バイリンガル認識能力を確保。

学習にはプログレッシブ正則化戦略を採用し、DropoutとSpecAugmentを徐々に導入して収束の安定性を確保しています。

## 四、コア性能と比較優位性

### 4.1 公式評価概要

FireRedASR2は **24の公開テストセット** で包括的に評価され、普通話（4）、方言/アクセント（19）、歌声（1）をカバーしています。公式評価結果は以下の通りです。

| モデル                 | 全シーン平均CER(%) | 普通話平均CER(%) | 方言平均CER(%) |
| ------------------- | ------------ | ----------- | ---------- |
| **FireRedASR2-LLM** | **9.67**     | **2.89**    | **11.55**  |
| **FireRedASR2-AED** | **9.80**     | **3.05**    | **11.67**  |
| Doubao-ASR          | 12.98        | 3.69        | 15.39      |
| Qwen3-ASR-1.7B      | 10.12        | 3.76        | 11.85      |
| Fun-ASR             | 10.92        | 4.16        | 12.76      |
| Fun-ASR-Nano-2512   | -            | 4.55        | 15.07      |

### 4.2 普通話テストセット（4）詳細結果

| ID | テストセット     | FireRedASR2-LLM | FireRedASR2-AED | Doubao-ASR | Qwen3-ASR | Fun-ASR |
| -- | ---------- | --------------- | --------------- | ---------- | --------- | ------- |
| 1  | aishell1   | 0.64            | **0.57**        | 1.52       | 1.48      | 1.64    |
| 2  | aishell2   | 2.15            | 2.51            | 2.77       | 2.71      | 2.38    |
| 3  | ws-net     | 4.44            | 4.57            | 5.73       | 4.97      | 6.85    |
| 4  | ws-meeting | 4.32            | 4.53            | 4.74       | 5.88      | 5.78    |

### 4.3 方言/アクセントテストセット（19）詳細結果

> 注：ws = WenetSpeech、md = MagicData、conv = 会話、daily = 日常

| ID | テストセット（方言/アクセント）          | FRASR2-LLM | FRASR2-AED | Doubao-ASR | Qwen3-ASR | Fun-ASR |
| -- | ------------------------- | ---------- | ---------- | ---------- | --------- | ------- |
| 5  | kespeech（8方言総合）           | 3.08       | 3.60       | 5.38       | 5.10      | 5.36    |
| 6  | ws-yue-short（粤語短）         | 5.14       | 5.15       | 10.51      | 5.82      | 7.34    |
| 7  | ws-yue-long（粤語長）          | 8.71       | 8.54       | 11.39      | 8.85      | 10.14   |
| 8  | ws-chuan-easy（四川話簡単）      | 10.90      | 10.60      | 11.33      | 11.99     | 12.46   |
| 9  | ws-chuan-hard（四川話困難）      | 20.71      | 21.35      | 20.77      | 21.63     | 22.49   |
| 10 | md-heavy                  | 7.42       | 7.43       | 7.69       | 8.02      | 9.13    |
| 11 | md-yue-conv（粤語会話）         | 12.23      | 11.66      | 26.25      | 9.76      | 33.71   |
| 12 | md-yue-daily（粤語日常）        | 3.61       | 3.35       | 12.82      | 3.66      | 2.69    |
| 13 | md-yue-vehicle（粤語車載）      | 4.50       | 4.83       | 8.66       | 4.28      | 6.00    |
| 14 | md-chuan-conv（四川話会話）      | 13.18      | 13.07      | 11.77      | 14.35     | 14.01   |
| 15 | md-chuan-daily（四川話日常）     | 4.90       | 5.17       | 3.90       | 4.93      | 3.98    |
| 16 | md-shanghai-conv（上海話会話）   | 28.70      | 27.02      | 45.15      | 29.77     | 25.49   |
| 17 | md-shanghai-daily（上海話日常）  | 24.94      | 24.18      | 44.06      | 23.93     | 12.55   |
| 18 | md-wu（呉語）                 | 7.15       | 7.14       | 7.70       | 7.57      | 10.63   |
| 19 | md-zhengzhou-conv（鄭州話会話）  | 10.20      | 10.65      | 9.83       | 9.55      | 10.85   |
| 20 | md-zhengzhou-daily（鄭州話日常） | 5.80       | 6.26       | 5.77       | 5.88      | 6.29    |
| 21 | md-wuhan（武漢話）             | 9.60       | 10.81      | 9.94       | 10.22     | 4.34    |
| 22 | md-tianjin（天津話）           | 15.45      | 15.30      | 15.79      | 16.16     | 19.27   |
| 23 | md-changsha（長沙話）          | 23.18      | 25.64      | 23.76      | 23.70     | 25.66   |

### 4.4 歌声テストセット（1）

| ID | テストセット          | FRASR2-LLM | FRASR2-AED | Doubao-ASR | Qwen3-ASR | Fun-ASR |
| -- | --------------- | ---------- | ---------- | ---------- | --------- | ------- |
| 24 | opencpop（中国語歌声） | **1.12**   | **1.17**   | 4.36       | 2.57      | 3.05    |

### 4.5 サポートされる方言/アクセントのリスト（公式完全リスト）

FireRedASR2-AEDは **20以上の中国方言/アクセント** をサポートします。公式に挙げられている具体的なものは以下の通りです。

> 粤語（香港と広東）、四川話、上海話、呉語、閩南語、安徽話、福建話、甘粛話、貴州話、河北話、河南話、湖北話、湖南話、江西話、遼寧話、寧夏話、陝西話、山西話、山東話、天津話、雲南話など。

## 五、ONNXモデルシリーズと推論デプロイ（コミュニティデプロイ）

### 5.1 コミュニティ提供のONNXモデル（manyeyes）

C#エコシステムやクロスプラットフォームデプロイのニーズに応えるため、コミュニティ開発者 **manyeyes** がFireRedASR2-AEDをONNX形式にエクスポートしました。これらのONNXモデルはFireRedTeam公式によるものではなく、manyeyesコミュニティが提供するサードパーティ版であり、ModelScopeプラットフォームで公開されています。すべてのモデルは文字レベルのタイムスタンプ出力をサポートし、INT8量子化による最適化が施されており、デプロイのハードルを大幅に下げています。

**完全なONNXモデルリスト**（出典：[https://modelscope.cn/profile/manyeyes?tab=model）：](https://modelscope.cn/profile/manyeyes?tab=model）：)

| モデル名                                                                    | 精度   | サイズ    | タイムスタンプ | 特徴                         |
| ----------------------------------------------------------------------- | ---- | ------ | ------- | -------------------------- |
| fireredasr2-aed-large-zh-en-onnx-offline-20260212                       | FP32 | 4.73GB | サポート    | ベースONNX版                   |
| fireredasr2-aed-large-zh-en-int8-onnx-offline-20260212                  | INT8 | 1.76GB | サポート    | INT8量子化、サイズ約62％削減          |
| fireredasr2-aed-large-zh-en-onnx-selfcrosskv-offline-20260212           | FP32 | 4.73GB | サポート    | KVキャッシュ最適化                 |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212      | INT8 | 1.76GB | サポート    | INT8量子化＋KVキャッシュ最適化         |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskvstack-offline-20260212 | INT8 | 1.76GB | サポート    | INT8量子化＋KVキャッシュ最適化＋パラメータ統合 |

### 5.2 manyspeech-cli ワンコマンドラインツール

manyspeech-cliはmanyeyesコミュニティが開発した、インストール不要のローカルコマンドライン音声認識ツールです。ローカル音声ファイル認識、マイクリアルタイムストリーミング、SRT字幕生成、JSONなど複数形式の出力をサポートします。manyspeech-cliは上記のONNXモデルを統合しており、ユーザーは以下のコマンド一つでオフライン認識と字幕生成を実行できます。

```bash
manyspeech asr -t offline --model fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212 -m chunk --format srt --threads 2 -i file -f "/path/to/0.wav"
```

実際の実行例（31秒音声、SRT字幕出力）：

```
0
00:00:00,490 -> 00:00:03,820
毎年、除夜の鐘が鳴るとき、

1
00:00:03,820 -> 00:00:06,850
私はいつも目を閉じて、静かに願い事をします。

2
00:00:06,850 -> 00:00:10,980
時には新年の目標を自分に課すこともあります。

3
00:00:10,990 -> 00:00:14,280
また、除夜の鐘を聞くと、

4
00:00:14,280 -> 00:00:17,130
心に一抹の憾念がわいてきます。

5
00:00:17,200 -> 00:00:20,370
時が経つのはこんなにも早いのかと感慨にふけり、

6
00:00:20,370 -> 00:00:24,420
去年の願いがまだ叶えられていないことに気づきます。それでもなお、

7
00:00:24,570 -> 00:00:28,230
歳月の洗礼を経て、私は成長し、成熟しました。

8
00:00:28,230 -> 00:00:31,120
現実の全てに勇敢に向き合うことを学びました。
```

## 六、クイックスタートガイド（公式デプロイ）

> 以下はFireRedASR2S公式コードリポジトリ（GitHub: FireRedTeam/FireRedASR2S）に基づき、公式PyTorchモデルを使用します。

### 6.1 環境準備

```bash
# Python環境の作成（Python 3.10が必要）
conda create --name fireredasr2s python=3.10
conda activate fireredasr2s

# 公式リポジトリのクローン
git clone https://github.com/FireRedTeam/FireRedASR2S.git
cd FireRedASR2S

# 依存関係のインストール
pip install -r requirements.txt

# 環境変数の設定
export PATH=$PWD/fireredasr2s/:$PATH
export PYTHONPATH=$PWD/:$PYTHONPATH
```

### 6.2 モデルのダウンロード（公式PyTorchモデル）

**国内ユーザー（ModelScope推奨）**：

```bash
modelscope download --model xukaituo/FireRedASR2-AED --local_dir ./pretrained_models/FireRedASR2-AED
```

**国際ユーザー（Hugging Face）**：

```bash
huggingface-cli download FireRedTeam/FireRedASR2-AED --local-dir ./pretrained_models/FireRedASR2-AED
```

### 6.3 音声フォーマット要件

公式モデルは **16kHz、16-bit、モノラル、PCM WAV** フォーマットのみをサポートします。変換にはFFmpegを使用してください。

```bash
ffmpeg -i input.mp3 -ar 16000 -ac 1 -acodec pcm_s16le -f wav output.wav
```

### 6.4 基本使用法：ASRモジュール（Python API）

ASRモジュールのみを呼び出して音声認識を実行し、文字レベルタイムスタンプを出力します。

```python
from fireredasr2s.fireredasr2 import FireRedAsr2, FireRedAsr2Config

# ASRパラメータの設定
asr_config = FireRedAsr2Config(
    use_gpu=True,           # GPUを使用するか
    use_half=False,         # 半精度を使用するか
    beam_size=3,            # ビームサーチ幅
    nbest=1,                # 返す最良候補数
    decode_max_len=0,       # 最大デコード長（0=自動）
    softmax_smoothing=1.25, # Softmax平滑化係数
    aed_length_penalty=0.6, # 長さペナルティ係数
    eos_penalty=1.0,        # 終端記号ペナルティ
    return_timestamp=True   # 文字レベルタイムスタンプを返す
)

# モデルのロード
model = FireRedAsr2.from_pretrained("aed", "./pretrained_models/FireRedASR2-AED", asr_config)

# 認識の実行
results = model.transcribe(["utt1", "utt2"], ["test1.wav", "test2.wav"])
for res in results:
    print(f"テキスト: {res['text']}")
    print(f"信頼度: {res['confidence']}")
    print(f"文字レベルタイムスタンプ: {res['timestamp']}")  # 形式: [('你', 0.42, 0.66), ...]
```

### 6.5 高度な使用法：統合システム（VAD＋LID＋Punc搭載）

音声活動検出、言語識別、音声認識、句読点予測を自動的に一貫して実行します。

```python
from fireredasr2s import FireRedAsr2System, FireRedAsr2SystemConfig

# デフォルト設定で初期化（VAD、LID、ASR、Puncモジュールを自動ロード）
asr_system_config = FireRedAsr2SystemConfig() 
asr_system = FireRedAsr2System(asr_system_config)

# 単一の音声ファイルを処理
result = asr_system.process("test.wav")

print(f"完全なテキスト: {result['text']}")          # 句読点付きテキスト
print(f"文レベル情報: {result['sentences']}")   # 各文の開始・終了時間、言語、信頼度
print(f"VADセグメント: {result['vad_segments_ms']}") # 音声セグメントの開始・終了時間（ミリ秒）
print(f"文字レベルタイムスタンプ: {result['words']}")       # 各文字の開始・終了時間
```

### 6.6 コマンドラインツール（公式CLI）

FireRedASR2Sはコマンドラインツール `fireredasr2s-cli` を提供し、バッチ処理をサポートします。

```bash
# 単一または複数の音声ファイルを処理し、JSONL形式で結果を出力
fireredasr2s-cli --wav_paths "hello_zh.wav" "hello_en.wav" --outdir output

# 結果の表示
cat output/result.jsonl
```

出力例：

```json
{"uttid": "hello_zh", "text": "こんにちは世界。", "sentences": [{"start_ms": 440, "end_ms": 1820, "text": "こんにちは世界。", "asr_confidence": 0.868, "lang": "zh mandarin", "lang_confidence": 0.999}], "vad_segments_ms": [[440, 1820]], "dur_s": 2.32, "words": [{"start_ms": 540, "end_ms": 700, "text": "こ"}, {"start_ms": 700, "end_ms": 1100, "text": "ん"}, {"start_ms": 1100, "end_ms": 1300, "text": "に"}, {"start_ms": 1300, "end_ms": 1765, "text": "ちは"}], "wav_path": "assets/hello_zh.wav"}
```

### 6.7 TensorRT-LLM高速化

FireRedASR2-AEDはTensorRT-LLM推論高速化をサポートしています。AISHELL-1テストセットにおいて、単一のH20 GPUでPyTorchベースライン比 **12.7倍** の速度向上を実現しています。

## 七、オープンソース入手先

- **オープンソースライセンス**：Apache-2.0
- **コードリポジトリ**：[https://github.com/FireRedTeam/FireRedASR2S](https://github.com/FireRedTeam/FireRedASR2S)
- **技術論文**：[https://arxiv.org/abs/2603.10420](https://arxiv.org/abs/2603.10420)
- **オンラインデモ**：[https://huggingface.co/spaces/FireRedTeam/FireRedASR](https://huggingface.co/spaces/FireRedTeam/FireRedASR)
- **公式モデル（PyTorch）** ：ModelScopeで `xukaituo/FireRedASR2-AED` を検索 | Hugging Face: `FireRedTeam/FireRedASR2-AED`
- **コミュニティONNXモデル（manyeyes）** ：ModelScopeプラットフォームで `manyeyes` を検索 | プロジェクトページ：[https://modelscope.cn/profile/manyeyes?tab=model](https://modelscope.cn/profile/manyeyes?tab=model)
- **manyspeech-cliツール**：[https://modelscope.cn/models/manyeyes/manyspeech-cli](https://modelscope.cn/models/manyeyes/manyspeech-cli)

## 八、適用シーン

| シーン       | 推奨理由                       |
| --------- | -------------------------- |
| リアルタイム字幕  | 文字レベルタイムスタンプ＋ストリーミングVAD    |
| 音声検索/コマンド | 中英混在入力＋20以上の方言             |
| 会議録音書き起こし | 歌声/音楽フィルタリング（mVAD）         |
| エッジデプロイ   | 1B+軽量パラメータ＋INT8量子化         |
| 歌声・歌詞認識   | opencpopテストセットでCERわずか1.17％ |
| オフライン字幕生成 | manyspeech-cliでワンコマンドSRT出力 |
