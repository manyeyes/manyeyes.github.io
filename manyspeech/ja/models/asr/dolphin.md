# DolphinAsr シリーズ

> **説明**
>
> - License: Apache 2.0
> - `opt`：最適化バージョン。オーディオ特徴抽出モジュールをモデルから分離し、推論オーバーヘッドを低減
> - 完全対応言語および地域コード対応表：
>
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

| モデル名                          | タイプ      | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先                                                                               |
| ----------------------------- | -------- | ---- | --- | ------- | ------------------------------------------------------------------------------------- |
| DolphinAsr-base-onnx          | 非ストリーミング | 多言語  | なし  | あり      | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-onnx)          |
| DolphinAsr-base-int8-onnx     | 非ストリーミング | 多言語  | なし  | あり      | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-int8-onnx)     |
| DolphinAsr-base-onnx-opt      | 非ストリーミング | 多言語  | なし  | あり      | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-onnx-opt)      |
| DolphinAsr-base-int8-onnx-opt | 非ストリーミング | 多言語  | なし  | あり      | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-int8-onnx-opt) |

## DolphinAsr-small モデル

| モデル名                           | タイプ      | 対応言語 | 句読点 | タイムスタンプ | ダウンロード先                                                                                |
| ------------------------------ | -------- | ---- | --- | ------- | -------------------------------------------------------------------------------------- |
| DolphinAsr-small-onnx          | 非ストリーミング | 多言語  | なし  | あり      | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-onnx)          |
| DolphinAsr-small-int8-onnx     | 非ストリーミング | 多言語  | なし  | あり      | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-int8-onnx)     |
| DolphinAsr-small-onnx-opt      | 非ストリーミング | 多言語  | なし  | あり      | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-onnx-opt)      |
| DolphinAsr-small-int8-onnx-opt | 非ストリーミング | 多言語  | なし  | あり      | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-int8-onnx-opt) |
