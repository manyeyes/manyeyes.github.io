# Fun-ASR シリーズ

> **説明**  
> - モデル背景：通義実験室が発表した**エンドツーエンド音声認識大モデル**。数千万時間の実音声データで事前学習され、強力な文脈理解と業界適応能力を持つ  
> - 機能特性：全シリーズ**非ストリーミング、句読点対応、タイムスタンプ対応**。低遅延リアルタイム書き起こしをサポートし、遠距離・高騒音環境での認識精度は93%に達する  
> - バージョン識別子の説明：  
>   - `int8`：INT8量子化バージョン。サイズが小さく、推論速度が高速で、エッジ展開に適する  
>   - `LLM`：大モデル強化版。文脈理解がより強力で、認識幻覚を抑制  
>   - `CTC`：古典的なCTCアーキテクチャの軽量版。推論が軽量  
>   - `MLT`：多言語汎用版。31言語をカバー  
>   - `split-adaptor`：特徴適応モジュールを分離して展開するバージョン  
> - 言語と能力の説明：  
>   - **Fun-ASR-Nano**：中国語、英語、日本語に対応。7つの方言（呉語、広東語、閩語、客家語、贛語、湘語、晋語）。26の地方訛り（河南、山西、湖北、四川、重慶、雲南、貴州、広東、広西、陝西、河北、山東、安徽、天津、寧夏、遼寧、甘粛、湖南、黒竜江、吉林、内モンゴル、江蘇、浙江、福建、江西、海南）。歌詞認識、ラップ音声認識もサポート  
>   - **Fun-ASR-MLT-Nano**：合計31言語に対応：中国語、英語、広東語、日本語、韓国語、ベトナム語、インドネシア語、タイ語、マレー語、フィリピノ語、アラビア語、ヒンディー語、ブルガリア語、クロアチア語、チェコ語、デンマーク語、オランダ語、エストニア語、フィンランド語、ギリシャ語、ハンガリー語、アイルランド語、ラトビア語、リトアニア語、マルタ語、ポーランド語、ポルトガル語、ルーマニア語、スロバキア語、スロベニア語、スウェーデン語  
> - 業界優位性：教育、金融などの垂直領域で優れた性能を発揮し、専門用語を正確に認識し、幻覚生成や言語混同の問題を効果的に抑制

## Fun-ASR-Nano モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Fun-ASR-Nano-2512-LLM-onnx | 非ストリーミング | 中・英・日、7方言+26地方訛り、歌詞/ラップ認識を含む | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-onnx) |
| Fun-ASR-Nano-2512-LLM-int8-onnx | 非ストリーミング | 同上 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-int8-onnx) |
| Fun-ASR-Nano-2512-LLM-split-adaptor-onnx | 非ストリーミング | 同上 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-split-adaptor-onnx) |
| Fun-ASR-Nano-2512-LLM-split-adaptor-int8-onnx | 非ストリーミング | 同上 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-LLM-split-adaptor-int8-onnx) |
| Fun-ASR-Nano-2512-CTC-onnx | 非ストリーミング | 同上 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-CTC-onnx) |
| Fun-ASR-Nano-2512-CTC-int8-onnx | 非ストリーミング | 同上 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-Nano-2512-CTC-int8-onnx) |

## Fun-ASR-MLT-Nano モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Fun-ASR-MLT-Nano-2512-onnx | 非ストリーミング | 31言語の多言語 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-MLT-Nano-2512-onnx) |
| Fun-ASR-MLT-Nano-2512-int8-onnx | 非ストリーミング | 31言語の多言語 | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/Fun-ASR-MLT-Nano-2512-int8-onnx) |
