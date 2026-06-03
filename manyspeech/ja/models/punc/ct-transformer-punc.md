# CT-Transformer シリーズ

> **説明**
>
> - モデル背景：アリババダモアカデミーがオープンソース化した句読点モデル。**Controllable Time-delay Transformer（CT-Transformer）** アーキテクチャをベースに、主に音声認識結果の後処理、テキストへの句読点予測と復元を目的として開発されました。
> - 機能特性：モデルは **Embedding、Encoder、Predictor** の3部分で構成されます。Embedding は単語ベクトルと位置ベクトルを融合。Encoder は Transformer、Conformer など複数のネットワーク構造に対応。Predictor はトークンごとに句読点タイプを予測します。従来の Transformer が抱える推論遅延の高さや句読点結果の頻繁な書き換えといった問題に対し、CT-Transformer は精度を維持しつつ**制御可能な推論遅延**を実現し、リアルタイム業務シナリオに適応します。汎用領域の業務データセットでのテスト結果：適合率 53.8%、再現率 60.0%、F1値 56.5%。学習サンプル総数は約3300万件。
> - オープンソースリポジトリ：[https://github.com/modelscope/FunASR](https://github.com/modelscope/FunASR)

**用語解説**

- `int8`：INT8量子化バージョン。モデルサイズを圧縮し推論速度を向上させるが、わずかな精度低下を伴う
- `mge`：MatMul、Gather、Embed のコアレイヤーに特化した量子化最適化。モデルサイズをさらに縮小し、ロードと推論速度を向上させる。精度はやや低下する可能性がある

## モデル一覧

| モデル名                                           | 語彙数    | 説明                                                     | ダウンロード先                                                                                            |
| ---------------------------------------------- | ------ | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| alicttransformerpunc-zh-en-onnx                | 272727 | 標準オリジナル版。中英語汎用句読点モデル                                   | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-onnx)                |
| alicttransformerpunc-zh-en-int8-onnx           | 272727 | 標準版のINT8量子化。サイズ削減、推論高速化                                | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-int8-onnx)           |
| alicttransformerpunc-zh-en-mge-int8-onnx       | 272727 | 標準版 + コアレイヤーMGE最適化 + INT8量子化。ロード・推論速度がさらに向上。精度はやや低下    | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-zh-en-mge-int8-onnx)       |
| alicttransformerpunc-large-zh-en-onnx          | 471067 | 大パラメータオリジナル版。句読点認識精度がより高い                              | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-onnx)          |
| alicttransformerpunc-large-zh-en-int8-onnx     | 471067 | 大パラメータ版のINT8量子化。精度と推論速度の両立                             | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-int8-onnx)     |
| alicttransformerpunc-large-zh-en-mge-int8-onnx | 471067 | 大パラメータ版 + コアレイヤーMGE最適化 + INT8量子化。総合的な実行効率が最も高い。精度はやや低下 | [modelscope](https://modelscope.cn/models/manyeyes/alicttransformerpunc-large-zh-en-mge-int8-onnx) |
