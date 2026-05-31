## v1.0/ja/models/getting-started/index.md

# クイックスタート

このセクションは準備中です。近日中にコンテンツを追加します。


---

## v1.0/ja/models/asr/index.md

# 音声認識モデル

音声認識モデルカタログへようこそ。左サイドバーからモデルシリーズを選択してください。

> **注意**  
> - `int8` = 量子化バージョン。サイズが小さく、速度が高速  
> - `kv` / `selfcrosskv` / `selfcrosskvstack` / `opt` = 推論最適化バージョン  
> - 一部のモデルは HuggingFace または GitHub ソースを提供しています。各表を参照してください。


---

## v1.0/ja/models/asr/dolphin.md

# DolphinAsr シリーズ

> **説明**  
> - License: Apache 2.0
> - `opt`：最適化バージョン。オーディオ特徴抽出モジュールをモデルから分離し、推論オーバーヘッドを低減  
> - 完全対応言語および地域コード対応表：
> ```
> zh-CN: 中国語(普通話)，zh-TW: 中国語(台湾)，zh-WU: 中国語(呉語)，zh-SICHUAN: 中国語(四川話)，zh-SHANXI: 中国語(山西話)，zh-ANHUI: 中国語(安徽話)，zh-TIANJIN: 中国語(天津話)，zh-NINGXIA: 中国語(寧夏話)，zh-SHAANXI: 中国語(陝西話)，zh-HEBEI: 中国語(河北話)，zh-SHANDONG: 中国語(山東話)，zh-GUANGDONG: 中国語(広東話)，zh-SHANGHAI: 中国語(上海話)，zh-HUBEI: 中国語(湖北話)，zh-LIAONING: 中国語(遼寧話)，zh-GANSU: 中国語(甘粛話)，zh-FUJIAN: 中国語(福建話)，zh-HUNAN: 中国語(湖南話)，zh-HENAN: 中国語(河南話)，zh-YUNNAN: 中国語(雲南話)，zh-MINNAN: 中国語(閩南語)，zh-WENZHOU: 中国語(温州話)
> ja-JP: 日本語，th-TH: タイ語，ru-RU: ロシア語，ko-KR: 韓国語，id-ID: インドネシア語，vi-VN: ベトナム語
> ct-NULL: 広東語，ct-HK: 広東語(香港)，ct-GZ: 広東語(広東)
> hi-IN: ヒンディー語，ur-IN: ウルドゥー語(インド)，ur-PK: ウルドゥー語，ms-MY: マレー語，uz-UZ: ウズベク語
> ar-MA: アラビア語(モロッコ)，ar-GLA: アラビア語，ar-SA: アラビア語(サウジアラビア)，ar-EG: アラビア語(エジプト)，ar-KW: アラビア語(クウェート)，ar-LY: アラビア語(リビア)，ar-JO: アラビア語(ヨルダン)，ar-AE: アラビア語(アラブ首長国連邦)，ar-LVT: アラビア語(レバント)
> fa-IR: ペルシア語，bn-BD: ベンガル語
> ta-SG: タミル語(シンガポール)，ta-LK: タミル語(スリランカ)，ta-IN: タミル語(インド)，ta-MY: タミル語(マレーシア)
> te-IN: テルグ語，ug-NULL: ウイグル語，ug-CN: ウイグル語，gu-IN: グジャラート語
> my-MM: ビルマ語，tl-PH: タガログ語，kk-KZ: カザフ語，or-IN: オリヤー語，ne-NP: ネパール語
> mn-MN: モンゴル語，km-KH: クメール語，jv-ID: ジャワ語，lo-LA: ラオ語，si-LK: シンハラ語
> fil-PH: フィリピノ語，ps-AF: パシュトー語，pa-IN: パンジャブ語，kab-NULL: カビル語
> ba-NULL: バシキール語，ks-IN: カシミール語，tg-TJ: タジク語，su-ID: スンダ語
> mr-IN: マラーティー語，ky-KG: キルギス語，az-AZ: アゼルバイジャン語
> ```

## DolphinAsr-base モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| DolphinAsr-base-onnx | 非ストリーミング | 多言語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-onnx) |
| DolphinAsr-base-int8-onnx | 非ストリーミング | 多言語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-int8-onnx) |
| DolphinAsr-base-onnx-opt | 非ストリーミング | 多言語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-onnx-opt) |
| DolphinAsr-base-int8-onnx-opt | 非ストリーミング | 多言語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-int8-onnx-opt) |

## DolphinAsr-small モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| DolphinAsr-small-onnx | 非ストリーミング | 多言語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-onnx) |
| DolphinAsr-small-int8-onnx | 非ストリーミング | 多言語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-int8-onnx) |
| DolphinAsr-small-onnx-opt | 非ストリーミング | 多言語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-onnx-opt) |
| DolphinAsr-small-int8-onnx-opt | 非ストリーミング | 多言語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-int8-onnx-opt) |


---

## v1.0/ja/models/asr/funasr.md

# FunASR シリーズ

## Paraformer 中英モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| paraformer-large-zh-en-onnx-offline | 非ストリーミング | 中国語(zh), 英語(en) | なし | なし | [huggingface](https://huggingface.co/manyeyes/speech_paraformer-large_asr_nat-zh-cn-16k-common-vocab8404-onnx), [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-onnx-offline) |
| paraformer-large-zh-en-timestamp-onnx-offline | 非ストリーミング | 中国語、英語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-timestamp-onnx-offline) |
| paraformer-large-en-onnx-offline | 非ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-en-onnx-offline) |
| paraformer-large-zh-en-onnx-online | ストリーミング | 中国語、英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-en-onnx-online) |

## Paraformer 粤/中英多言語モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| paraformer-large-zh-yue-en-timestamp-onnx-offline-dengcunqin-20240805 | 非ストリーミング | 中、広東語、英 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-timestamp-onnx-offline-dengcunqin-20240805) |
| paraformer-large-zh-yue-en-onnx-offline-dengcunqin-20240805 | 非ストリーミング | 中、広東語、英 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-onnx-offline-dengcunqin-20240805) |
| paraformer-large-zh-yue-en-onnx-online-dengcunqin-20240208 | ストリーミング | 中、広東語、英 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-large-zh-yue-en-onnx-online-dengcunqin-20240208) |

## SeACo-Paraformer ホットワードカスタマイズモデル

SeACoParaformerは、アリババ音声実験室が提案した次世代のホットワードカスタマイズ非自己回帰音声認識モデルです。従来のCLASベースのホットワードカスタマイズ方式と比較して、ホットワードモジュールとASRモデルを分離し、事後確率融合によりホットワードを促進することで、促進プロセスを可視化・制御可能にし、ホットワードの再現率を大幅に向上させています。

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| paraformer-seaco-large-zh-timestamp-onnx-offline | 非ストリーミング | 中国語、ホットワードカスタマイズ対応 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/paraformer-seaco-large-zh-timestamp-onnx-offline) |

## SenseVoice モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| sensevoice-small-onnx | 非ストリーミング | 中、広東語、英、日、韓 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-onnx) |
| sensevoice-small-int8-onnx | 非ストリーミング | 中、広東語、英、日、韓 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-int8-onnx) |
| sensevoice-small-wenetspeech-yue-onnx | 非ストリーミング | 広東語、中、英、日、韓 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-wenetspeech-yue-onnx) |
| sensevoice-small-wenetspeech-yue-int8-onnx | 非ストリーミング | 広東語、中、英、日、韓 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-wenetspeech-yue-int8-onnx) |
| sensevoice-small-split-embed-onnx | 非ストリーミング | 中、広東語、英、日、韓 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/sensevoice-small-split-embed-onnx) |


---

## v1.0/ja/models/asr/fun-asr.md

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


---

## v1.0/ja/models/asr/k2.md

# K2TransducerAsr シリーズ

## ストリーミングモデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| k2transducer-lstm-en-onnx-online-csukuangfj-20220903 | ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-lstm-en-onnx-online-csukuangfj-20220903) |
| k2transducer-lstm-zh-onnx-online-csukuangfj-20221014 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-lstm-zh-onnx-online-csukuangfj-20221014) |
| k2transducer-zipformer-en-onnx-online-weijizhuang-20221202 | ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-en-onnx-online-weijizhuang-20221202) |
| k2transducer-zipformer-en-onnx-online-zengwei-20230517 | ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-en-onnx-online-zengwei-20230517) |
| k2transducer-zipformer-multi-zh-hans-onnx-online-20231212 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-multi-zh-hans-onnx-online-20231212) |
| k2transducer-zipformer-ko-onnx-online-johnbamma-20240612 | ストリーミング | 韓国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ko-onnx-online-johnbamma-20240612) |
| k2transducer-zipformer-ctc-small-zh-onnx-online-20250401 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-small-zh-onnx-online-20250401) |
| k2transducer-zipformer-large-zh-onnx-online-yuekai-20250630 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-large-zh-onnx-online-yuekai-20250630) |
| k2transducer-zipformer-xlarge-zh-onnx-online-yuekai-20250630 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-xlarge-zh-onnx-online-yuekai-20250630) |
| k2transducer-zipformer-ctc-large-zh-onnx-online-yuekai-20250630 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-large-zh-onnx-online-yuekai-20250630) |
| k2transducer-zipformer-ctc-xlarge-zh-onnx-online-yuekai-20250630 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-xlarge-zh-onnx-online-yuekai-20250630) |

## 非ストリーミングモデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| k2transducer-conformer-en-onnx-offline-csukuangfj-20220513 | 非ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-conformer-en-onnx-offline-csukuangfj-20220513) |
| k2transducer-conformer-zh-onnx-offline-luomingshuang-20220727 | 非ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-conformer-zh-onnx-offline-luomingshuang-20220727) |
| k2transducer-zipformer-en-onnx-offline-yfyeung-20230417 | 非ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-en-onnx-offline-yfyeung-20230417) |
| k2transducer-zipformer-large-en-onnx-offline-zengwei-20230516 | 非ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-large-en-onnx-offline-zengwei-20230516) |
| k2transducer-zipformer-small-en-onnx-offline-zengwei-20230516 | 非ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-small-en-onnx-offline-zengwei-20230516) |
| k2transducer-zipformer-zh-onnx-offline-wenetspeech-20230615 | 非ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-zh-onnx-offline-wenetspeech-20230615) |
| k2transducer-zipformer-zh-onnx-offline-multi-zh-hans-20230902 | 非ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-zh-onnx-offline-multi-zh-hans-20230902) |
| k2transducer-zipformer-zh-en-onnx-offline-20231122 | 非ストリーミング | 中英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-zh-en-onnx-offline-20231122) |
| k2transducer-zipformer-cantonese-onnx-offline-20240313 | 非ストリーミング | 広東語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-cantonese-onnx-offline-20240313) |
| k2transducer-zipformer-th-onnx-offline-yfyeung-20240620 | 非ストリーミング | タイ語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-th-onnx-offline-yfyeung-20240620) |
| k2transducer-zipformer-ja-onnx-offline-reazonspeech-20240801 | 非ストリーミング | 日本語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ja-onnx-offline-reazonspeech-20240801) |
| k2transducer-zipformer-ru-onnx-offline-20240918 | 非ストリーミング | ロシア語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ru-onnx-offline-20240918) |
| k2transducer-zipformer-vi-onnx-offline-20250420 | 非ストリーミング | ベトナム語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-vi-onnx-offline-20250420) |
| k2transducer-zipformer-ctc-zh-onnx-offline-20250703 | 非ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-zh-onnx-offline-20250703) [github](https://github.moeyy.xyz/https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/sherpa-onnx-zipformer-ctc-zh-int8-2025-07-03.tar.bz2) |
| k2transducer-zipformer-ctc-small-zh-onnx-offline-20250716 | 非ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/k2transducer-zipformer-ctc-small-zh-onnx-offline-20250716) |


---

## v1.0/ja/models/asr/fireredasr.md

# FireRedAsr シリーズ

## FireRedAsr-AED 中英モデル（v1）

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| fireredasr-aed-large-zh-en-onnx-offline-20250124 | 非ストリーミング | 中国語、英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr-aed-large-zh-en-onnx-offline-20250124) |

## FireRedAsr2-AED 中英モデル（v2）

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| fireredasr2-aed-large-zh-en-onnx-offline-20260212 | 非ストリーミング | 中国語、英語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-onnx-offline-20260212) |
| fireredasr2-aed-large-zh-en-int8-onnx-offline-20260212 | 非ストリーミング | 中国語、英語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-int8-onnx-offline-20260212) |
| fireredasr2-aed-large-zh-en-onnx-selfcrosskv-offline-20260212 | 非ストリーミング | 中国語、英語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-onnx-selfcrosskv-offline-20260212) |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212 | 非ストリーミング | 中国語、英語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskv-offline-20260212) |
| fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskvstack-offline-20260212 | 非ストリーミング | 中国語、英語 | なし | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/fireredasr2-aed-large-zh-en-int8-onnx-selfcrosskvstack-offline-20260212) |


---

## v1.0/ja/models/asr/medasr.md

# MedAsr シリーズ

> **説明**  
> - モデルアーキテクチャ：**Conformer** ベース。Google Health が発表した医療シーン向け音声認識モデル  
> - 適用シーン：放射線科の口述、医師と患者の対話、医学文書の書き起こしなど、医療向けディクテーションタスクに適合  
> - 対応言語：**英語のみ**（主に米国英語）  
> - モデル特徴：約5000時間の医療音声データで事前学習され、医学専門用語の認識に強い。非標準的な薬品名や日時といった構造化データの認識にはばらつきがあるため、業務シーンに合わせた追加のファインチューニングを推奨

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| medasr-onnx | 非ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/medasr-onnx) |


---

## v1.0/ja/models/asr/moonshine.md

# moonshine シリーズ

## moonshine-tiny モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| moonshine-tiny-onnx | 非ストリーミング | 英語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-onnx) |
| moonshine-tiny-int8-onnx | 非ストリーミング | 英語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-int8-onnx) |
| moonshine-tiny-en-onnx | 非ストリーミング | 英語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-en-onnx) |
| moonshine-tiny-zh-onnx | 非ストリーミング | 中国語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-zh-onnx) |
| moonshine-tiny-zh-int8-onnx | 非ストリーミング | 中国語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-zh-int8-onnx) |
| moonshine-tiny-vi-onnx | 非ストリーミング | ベトナム語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-vi-onnx) |
| moonshine-tiny-vi-int8-onnx | 非ストリーミング | ベトナム語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-vi-int8-onnx) |
| moonshine-tiny-uk-onnx | 非ストリーミング | ウクライナ語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-uk-onnx) |
| moonshine-tiny-uk-int8-onnx | 非ストリーミング | ウクライナ語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-uk-int8-onnx) |
| moonshine-tiny-ko-onnx | 非ストリーミング | 韓国語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ko-onnx) |
| moonshine-tiny-ko-int8-onnx | 非ストリーミング | 韓国語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ko-int8-onnx) |
| moonshine-tiny-ja-onnx | 非ストリーミング | 日本語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ja-onnx) |
| moonshine-tiny-ja-int8-onnx | 非ストリーミング | 日本語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ja-int8-onnx) |
| moonshine-tiny-ar-onnx | 非ストリーミング | アラビア語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ar-onnx) |
| moonshine-tiny-ar-int8-onnx | 非ストリーミング | アラビア語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-ar-int8-onnx) |
| moonshine-tiny-fr-onnx | 非ストリーミング | フランス語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-fr-onnx) |
| moonshine-tiny-fr-int8-onnx | 非ストリーミング | フランス語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-tiny-fr-int8-onnx) |

## moonshine-base モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| moonshine-base-onnx | 非ストリーミング | 英語 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/moonshine-base-onnx) |
| moonshine-base-int8-onnx | 非ストリーミング | 英語 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/moonshine-base-int8-onnx) |
| moonshine-base-en-onnx | 非ストリーミング | 英語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-en-onnx) |
| moonshine-base-zh-onnx | 非ストリーミング | 中国語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-zh-onnx) |
| moonshine-base-zh-int8-onnx | 非ストリーミング | 中国語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-zh-int8-onnx) |
| moonshine-base-vi-onnx | 非ストリーミング | ベトナム語 | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/moonshine-base-vi-onnx) |
| moonshine-base-vi-int8-onnx | 非ストリーミング | ベトナム語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-vi-int8-onnx) |
| moonshine-base-uk-onnx | 非ストリーミング | ウクライナ語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-uk-onnx) |
| moonshine-base-uk-int8-onnx | 非ストリーミング | ウクライナ語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-uk-int8-onnx) |
| moonshine-base-ko-onnx | 非ストリーミング | 韓国語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ko-onnx) |
| moonshine-base-ko-int8-onnx | 非ストリーミング | 韓国語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ko-int8-onnx) |
| moonshine-base-ja-onnx | 非ストリーミング | 日本語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ja-onnx) |
| moonshine-base-ja-int8-onnx | 非ストリーミング | 日本語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ja-int8-onnx) |
| moonshine-base-ar-onnx | 非ストリーミング | アラビア語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ar-onnx) |
| moonshine-base-ar-int8-onnx | 非ストリーミング | アラビア語 | あり | なし | [modelscope](https://modelscope.cn/models/manyeyes/moonshine-base-ar-int8-onnx) |


---

## v1.0/ja/models/asr/wenet.md

# WeNet シリーズ

## ストリーミングモデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| wenet-u2pp-conformer-aishell-onnx-online-20210601 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-aishell-onnx-online-20210601) |
| wenet-u2pp-conformer-wenetspeech-onnx-online-20220506 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-onnx-online-20220506) |
| wenet-u2pp-conformer-wenetspeech-int8-onnx-online-20220506 | ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-int8-onnx-online-20220506) |
| wenet-u2pp-conformer-gigaspeech-onnx-online-20210728 | ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-gigaspeech-onnx-online-20210728) |

## 非ストリーミングモデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| wenet-u2pp-conformer-aishell-onnx-offline-20210601 | 非ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-aishell-onnx-offline-20210601) |
| wenet-u2pp-conformer-wenetspeech-onnx-offline-20220506 | 非ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-onnx-offline-20220506) |
| wenet-u2pp-conformer-wenetspeech-int8-onnx-offline-20220506 | 非ストリーミング | 中国語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-wenetspeech-int8-onnx-offline-20220506) |
| wenet-u2pp-conformer-gigaspeech-onnx-offline-20210728 | 非ストリーミング | 英語 | なし | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/wenet-u2pp-conformer-gigaspeech-onnx-offline-20210728) |


---

## v1.0/ja/models/asr/whisper.md

# Whisper シリーズ

> **説明**  
> 1. 末尾に `-kv` が付くものは、KV Cache推論高速化を有効にしたバージョン  
> 2. 全シリーズ**句読点対応、タイムスタンプ対応**。デフォルトで段落レベルのタイムスタンプを出力し、パラメータで単語レベルのタイムスタンプも有効化可能  
> 3. 言語範囲：  
>    - 標準多言語版（tiny/small/medium/large-v1/large-v2）：合計 **99言語**（中国語、広東語、英語、日本語、韓国語、ロシア語、アラビア語、ベトナム語、ウクライナ語など世界の主要言語を含む）  
>    - large-v3 / large-v3-turbo シリーズ：99言語に加え低リソース言語を拡張し、合計約 **106言語**。新たに追加されたもの：**ズールー語（zu）、マオリ語（mi）、スワヒリ語（sw）、ハウサ語（ha）** など。言語識別効果が顕著に向上  

## whisper-tiny モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | KV | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| whisper-tiny-onnx | 非ストリーミング | 99言語の多言語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-onnx) |
| whisper-tiny-onnx-kv | 非ストリーミング | 99言語の多言語 | あり | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-onnx-kv) |
| whisper-tiny-en-onnx | 非ストリーミング | 英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-tiny-en-onnx) |

## whisper-small モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | KV | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| whisper-small-onnx | 非ストリーミング | 99言語の多言語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-onnx) |
| whisper-small-en-onnx | 非ストリーミング | 英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-en-onnx) |
| whisper-small-cantonese-onnx | 非ストリーミング | 広東語、中国語、英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-small-cantonese-onnx) |

## whisper-medium モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | KV | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| whisper-medium-onnx | 非ストリーミング | 99言語の多言語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-onnx) |
| whisper-medium-int8-onnx-kv | 非ストリーミング | 99言語の多言語 | あり | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-int8-onnx-kv) |
| whisper-medium-en-onnx | 非ストリーミング | 英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-en-onnx) |
| whisper-medium-yue-onnx-kv | 非ストリーミング | 広東語 | あり | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-yue-onnx-kv) |
| whisper-medium-yue-int8-onnx-kv | 非ストリーミング | 広東語 | あり | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-medium-yue-int8-onnx-kv) |

## whisper-large モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | KV | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| whisper-large-v1-onnx | 非ストリーミング | 99言語の多言語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v1-onnx) |
| whisper-large-v2-onnx | 非ストリーミング | 99言語の多言語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v2-onnx) |
| whisper-large-v3-onnx | 非ストリーミング | 約106言語の多言語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-onnx) |
| whisper-large-v3-turbo-onnx | 非ストリーミング | 約106言語の多言語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-onnx) |
| whisper-large-v3-turbo-zh-onnx | 非ストリーミング | 中国語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-zh-onnx) |
| whisper-large-v3-turbo-zh-int8-onnx-kv-belle-20241016 | 非ストリーミング | 中国語 | あり | あり | あり | [modelscope](https://www.modelscope.cn/models/manyeyes/whisper-large-v3-turbo-zh-int8-onnx-kv-belle-20241016) |

## Distil-Whisper モデル

| モデル名 | タイプ | 対応言語 | 句読点 | タイムスタンプ | KV | ダウンロード先 |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| distil-whisper-small-en-onnx | 非ストリーミング | 英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-small-en-onnx) |
| distil-whisper-medium-en-onnx | 非ストリーミング | 英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-medium-en-onnx) |
| distil-whisper-large-v2-en-onnx | 非ストリーミング | 英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v2-en-onnx) |
| distil-whisper-large-v3-en-onnx | 非ストリーミング | 英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v3-en-onnx) |
| distil-whipser-large-v3.5-en-onnx | 非ストリーミング | 英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whipser-large-v3.5-en-onnx) |
| distil-whisper-large-v2-multi-hans-onnx | 非ストリーミング | 中国語（99言語の多言語互換） | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-large-v2-multi-hans-onnx) |
| distil-whisper-small-cantonese-onnx-alvanlii-20240404 | 非ストリーミング | 広東語、中国語、英語 | あり | あり | なし | [modelscope](https://www.modelscope.cn/models/manyeyes/distil-whisper-small-cantonese-onnx-alvanlii-20240404) |


---

## v1.0/ja/models/vad/index.md

# 音声端点検出 (VAD) モデル

VAD (Voice Activity Detection) は、オーディオストリームから音声区間を検出し、ASR の計算量を削減してリアルタイム性能を向上させるために使用されます。


---

## v1.0/ja/models/vad/fsmn-vad.md

# FSMN-VAD シリーズ
> **説明**
> - モデル背景：アリババダモアカデミーが開発した産業レベルの音声活性検出（VAD）モデル。FSMN-Monophone アーキテクチャをベースに設計された、16k 向け中国語汎用 VAD モデルで、FunASR フレームワークおよび Paraformer-large の長音声シナリオにネイティブ対応。
> - 機能特性：FSMN構造によりコンテキスト情報を効果的に活用し、推論速度が速く、遅延を制御可能。Monophone による細分化されたモデリングユニットにより特徴の識別能力を高め、認識エラーを低減。オーディオファイル、URL、バイナリストリーム、オーディオ配列、wav.scp リストなど多様な入力に対応。末尾の無音時間、音声／雑音のしきい値などをカスタマイズ可能。Linux-x86_64、macOS、Windows と互換性があり、ASR や句読点モジュールと自由に組み合わせて使用できる。
> - オープンソースリポジトリ：https://github.com/modelscope/FunASR

## モデル一覧
| モデル名 | 説明 | ダウンロード先 |
| ---- | ---- | ---- |
| alifsmnvad-onnx | 汎用標準版。総合的にバランスが良く、デフォルトで推奨 | [modelscope](https://modelscope.cn/models/manyeyes/alifsmnvad-onnx) |


---

## v1.0/ja/models/vad/silero-vad.md

# Silero-VAD シリーズ
> **説明**
> - モデル背景：オープンソースコミュニティ snakers4 が発表したディープラーニングベースの音声活性検出モデル。主流のオープンソース VAD ソリューションであり、16kHz オーディオ入力に適合。
> - 機能特性：プリエンファシス、フレーム分割、窓関数などの前処理を音声に施した後、ニューラルネットワークで音声特徴を学習し、音声区間と非音声区間を正確に判別。雑音環境に応じて検出しきい値を適応的に調整でき、騒がしいシーンで優れた性能を発揮。反復バージョンにより耐雑音性を継続的に向上。
> - オープンソースリポジトリ：https://github.com/snakers4/silero-vad

## モデル一覧
| モデル名 | 説明 | ダウンロード先 |
| ---- | ---- | ---- |
| silero-vad-onnx | ベースバージョン。一般的な汎用シーン向け | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-onnx) |
| silero-vad-v5-onnx | V5 反復版。雑音環境への適応能力を最適化 | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-v5-onnx) |
| silero-vad-v6-onnx | V6 最新バージョン。騒がしい環境での検出性能がさらに向上 | [modelscope](https://modelscope.cn/models/manyeyes/silero-vad-v6-onnx) |


---

## v1.0/ja/models/punc/index.md

# 句読点復元モデル

句読点モデルは、ASR 結果の後処理に使用され、テキストに句読点を復元して可読性を向上させます。


---

## v1.0/ja/models/punc/firered-punc.md

# FireRedPunc シリーズ
> **説明**
> - モデル背景：FireRedPunc は **FireRedASR2S** 統合音声システムに含まれる独立した句読点予測モジュールです。BERT アーキテクチャをベースに開発され、音声認識の後処理シナリオに特化しており、中英バイリンガルの句読点復元をサポートします。
> - 機能特性：このモデルの総合性能は業界 SOTA 水準に達しており、**平均 F1 スコア 78.90%** を記録。多分野の中英文データセットで優れた性能を発揮し、さまざまなオフライン・リアルタイム音声書き起こし業務に適応します。
> - オープンソースリポジトリ：https://github.com/FireRedTeam/FireRedASR2S

## モデル一覧
| モデル名 | 説明 | ダウンロード先 |
| ---- | ---- | ---- |
| FireRedPunc-zh-en-onnx | 中英語汎用句読点予測モデル。総合精度に優れ、SOTAレベルの性能 | [modelscope](https://modelscope.cn/models/manyeyes/FireRedPunc-zh-en-onnx) |


---

## v1.0/ja/models/punc/ct-transformer-punc.md

# CT-Transformer シリーズ
> **説明**
> - モデル背景：アリババダモアカデミーがオープンソース化した句読点モデル。**Controllable Time-delay Transformer（CT-Transformer）** アーキテクチャをベースに、主に音声認識結果の後処理、テキストへの句読点予測と復元を目的として開発されました。
> - 機能特性：モデルは **Embedding、Encoder、Predictor** の3部分で構成されます。Embedding は単語ベクトルと位置ベクトルを融合。Encoder は Transformer、Conformer など複数のネットワーク構造に対応。Predictor はトークンごとに句読点タイプを予測します。従来の Transformer が抱える推論遅延の高さや句読点結果の頻繁な書き換えといった問題に対し、CT-Transformer は精度を維持しつつ**制御可能な推論遅延**を実現し、リアルタイム業務シナリオに適応します。汎用領域の業務データセットでのテスト結果：適合率 53.8%、再現率 60.0%、F1値 56.5%。学習サンプル総数は約3300万件。
> - オープンソースリポジトリ：https://github.com/modelscope/FunASR

**用語解説**
- `int8`：INT8量子化バージョン。モデルサイズを圧縮し推論速度を向上させるが、わずかな精度低下を伴う
- `mge`：MatMul、Gather、Embed のコアレイヤーに特化した量子化最適化。モデルサイズをさらに縮小し、ロードと推論速度を向上させる。精度はやや低下する可能性がある

## モデル一覧
| モデル名 | 語彙数 | 説明 | ダウンロード先 |
| ---- | ---- | ---- | ---- |
| alicttransformerpunc-zh-en-onnx | 272727 | 標準オリジナル版。中英語汎用句読点モデル | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-onnx) |
| alicttransformerpunc-zh-en-int8-onnx | 272727 | 標準版のINT8量子化。サイズ削減、推論高速化 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-int8-onnx) |
| alicttransformerpunc-zh-en-mge-int8-onnx | 272727 | 標準版 + コアレイヤーMGE最適化 + INT8量子化。ロード・推論速度がさらに向上。精度はやや低下 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-mge-int8-onnx) |
| alicttransformerpunc-large-zh-en-onnx | 471067 | 大パラメータオリジナル版。句読点認識精度がより高い | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-onnx) |
| alicttransformerpunc-large-zh-en-int8-onnx | 471067 | 大パラメータ版のINT8量子化。精度と推論速度の両立 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-int8-onnx) |
| alicttransformerpunc-large-zh-en-mge-int8-onnx | 471067 | 大パラメータ版 + コアレイヤーMGE最適化 + INT8量子化。総合的な実行効率が最も高い。精度はやや低下 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-mge-int8-onnx) |


---

## v1.0/ja/models/tts/index.md

# 音声生成

このセクションは準備中です。近日中にコンテンツを追加します。


---

## v1.0/ja/models/tts/kokoro.md

# Kokoro

TODO: Kokoro のコンテンツを追加してください。


---

## v1.0/ja/models/tts/vits.md

# Vits

TODO: Vits のコンテンツを追加してください。


---

## v1.0/ja/models/tts/indextts.md

# Indextts

TODO: Indextts のコンテンツを追加してください。


---

## v1.0/ja/models/audio-sep/index.md

# 音声分離と強調

このセクションは準備中です。近日中にコンテンツを追加します。


---

## v1.0/ja/models/audio-sep/mossformer.md

# Mossformer

TODO: Mossformer のコンテンツを追加してください。


---

## v1.0/ja/models/audio-sep/splitter-voiceprint-sep.md

# Splitter Voiceprint Sep

TODO: Splitter Voiceprint Sep のコンテンツを追加してください。


---

## v1.0/ja/models/asr/parakeet.md

# Parakeet Series

> **General Notes**  
> - `int8` = quantized version, smaller size, faster inference  
> - `selfcrosskv` / `selfcrosskvstack` = inference optimization variants (not applicable to Parakeet series)  
> - Some models provide HuggingFace or GitHub download sources; refer to each table

## Parakeet Series

> **Notes**  
> - Model architecture: NVIDIA **FastConformer-TDT-CTC** (Hybrid architecture)  
> - Series composition:  
>   - `tdt-0.6b`: standard TDT model, 0.6B parameters, supports punctuation, capitalization, timestamps  
>   - `tdt_ctc`: CTC‑combined TDT models (110M / 0.6B parameters); the 110M English and 0.6B Japanese models support punctuation  
> - Version identifiers:  
>   - `v2`: English model, supports punctuation, capitalization, timestamps  
>   - `v3` / `multilingual`: multilingual model, supports 25 European languages, automatic language detection, punctuation, capitalization, timestamps  
> - License: v2 and v3 models use **CC-BY-4.0**; CTC models mostly use Apache License 2.0 (check each model page)  
> - Use cases: high‑throughput speech transcription, multilingual conversational AI, subtitle generation, voice analytics, etc.

### 1. Parakeet-TDT English Model (v2)

> **Detailed Features**  
> - **Supported language**: English  
> - **Punctuation & Capitalization**: outputs punctuation and correct capitalization  
> - **Timestamps**: supports accurate word‑level, character‑level, and segment‑level timestamp prediction  
> - **Long audio**: full attention allows single‑pass transcription of up to 24 minutes of audio  
> - **Architecture**: FastConformer encoder + TDT decoder, 600M parameters  
> - **Input**: 16 kHz mono‑channel .wav or .flac  
> - **Output**: text string with punctuation and capitalization  
> - **Performance**: RTFx of 3380 on the Hugging Face ASR leaderboard  
> - **Release**: 2025-05-01  
> - **License**: CC-BY-4.0, commercial and non‑commercial use allowed  

| Model Name | Type | Supported Language | Punctuation | Timestamp | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| parakeet-tdt-0.6b-v2-en-onnx | offline | English | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt-0.6b-v2-en-onnx) |
| parakeet-tdt-0.6b-v2-en-int8-onnx | offline | English | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt-0.6b-v2-en-int8-onnx) |

### 2. Parakeet-TDT Multilingual Model (v3)

> **Detailed Features**  
> - **Supported languages** (25 European languages): Bulgarian (bg), Croatian (hr), Czech (cs), Danish (da), Dutch (nl), English (en), Estonian (et), Finnish (fi), French (fr), German (de), Greek (el), Hungarian (hu), Italian (it), Latvian (lv), Lithuanian (lt), Maltese (mt), Polish (pl), Portuguese (pt), Romanian (ro), Slovak (sk), Slovenian (sl), Spanish (es), Swedish (sv), Russian (ru), Ukrainian (uk)  
> - **Automatic language detection**: no extra prompt needed, the model automatically identifies the audio language  
> - **Punctuation & Capitalization**: outputs punctuation and correct capitalization  
> - **Timestamps**: supports accurate word‑level and segment‑level timestamps  
> - **Long audio**: on A100 80GB, full attention handles up to 24 minutes; local attention handles up to 3 hours  
> - **Architecture**: FastConformer encoder + TDT decoder, 600M parameters, trained on Granary dataset (670k+ hours)  
> - **Input**: 16 kHz mono‑channel .wav or .flac  
> - **Output**: text string with punctuation and capitalization  
> - **Release**: 2025-08-14 (Hugging Face)  
> - **License**: CC-BY-4.0, commercial and non‑commercial use allowed  

| Model Name | Type | Supported Language | Punctuation | Timestamp | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| parakeet-tdt-0.6b-v3-multilingual-onnx | offline | 25 European languages (see above) | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt-0.6b-v3-multilingual-onnx) |
| parakeet-tdt-0.6b-v3-multilingual-int8-onnx | offline | 25 European languages (see above) | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt-0.6b-v3-multilingual-int8-onnx) |

### 3. Parakeet-TDT-CTC English Model (110M)

> **Detailed Features**  
> - **Model development**: jointly developed by NVIDIA NeMo and Suno.ai teams  
> - **Architecture**: Hybrid FastConformer-TDT-CTC, approx. **114M parameters**  
> - **Supported language**: English  
> - **Punctuation & Capitalization**: ✅ supports Punctuations and Capitalizations (PnC)  
> - **Timestamps**: default TDT decoder outputs timestamps; switching to CTC decoder outputs text only (no timestamps)  
> - **Long audio**: full attention, up to **20 minutes** in a single pass  
> - **Performance**: average RTFx ~5300 on Hugging Face ASR evaluation sets (A100)  
> - **Input**: 16 kHz mono‑channel .wav or .flac  
> - **Output**: text string with punctuation and capitalization  
> - **License**: Apache License 2.0  

| Model Name | Type | Supported Language | Punctuation | Timestamp | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| parakeet-tdt_ctc-110m-en-onnx | offline | English | Yes | Yes (TDT decoder) | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt_ctc-110m-en-onnx) |
| parakeet-tdt_ctc-110m-en-int8-onnx | offline | English | Yes | Yes (TDT decoder) | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt_ctc-110m-en-int8-onnx) |

> **Note**: ONNX exported versions may default to the TDT decoder, hence timestamps are supported. To switch to CTC decoder, refer to the native NeMo model usage instructions.

### 4. Parakeet-TDT-CTC Japanese Model (0.6B)

> **Detailed Features**  
> - **Model development**: developed by NVIDIA NeMo team  
> - **Architecture**: Hybrid FastConformer-TDT-CTC, **approx. 0.6B (600M) parameters**  
>   - FastConformer: 8× depthwise‑separable convolution downsampling for faster inference  
>   - TDT (Token‑and‑Duration Transducer): jointly predicts tokens and durations, skipping most blank predictions (duration up to 4 frames for this model), significantly speeding up inference  
> - **Supported language**: Japanese  
> - **Punctuation**: ✅ supports punctuation  
> - **Timestamps**: default TDT decoder outputs timestamps  
> - **Long audio**: not explicitly specified  
> - **Input**: 16 kHz mono‑channel .wav or .flac  
> - **Output**: text string with punctuation  
> - **License**: Apache License 2.0  

| Model Name | Type | Supported Language | Punctuation | Timestamp | Download Link |
| ---- | ---- | ---- | ---- | ---- | ---- |
| parakeet-tdt_ctc-0.6b-ja-onnx | offline | Japanese | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt_ctc-0.6b-ja-onnx) |
| parakeet-tdt_ctc-0.6b-ja-int8-onnx | offline | Japanese | Yes | Yes | [modelscope](https://www.modelscope.cn/models/manyeyes/parakeet-tdt_ctc-0.6b-ja-int8-onnx) |

---

> **Additional Notes**  
> - Summary of punctuation & timestamp support:  
>   - ✅ **v2 English model**: punctuation, capitalization, timestamps  
>   - ✅ **v3 multilingual model**: punctuation, capitalization, timestamps  
>   - ✅ **CTC 110M English model**: punctuation, capitalization; timestamps via TDT decoder  
>   - ✅ **CTC 0.6B Japanese model**: punctuation; timestamps via TDT decoder  
> - All ONNX models are suitable for edge and cloud deployment; int8 versions are smaller and faster  
> - Licenses: v2/v3 recommend CC-BY-4.0; CTC models mostly Apache 2.0 – check each model page  
> - The Japanese model’s TDT duration of 4 frames provides significant inference speedup; see NVIDIA official documentation for detailed performance metrics

---

