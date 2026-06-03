# DolphinAsr 系列

> **说明**
>
> - License: Apache 2.0
> - `opt`：优化版本，将音频特征提取模块移出模型，降低推理开销
> - 完整支持语言及区域编码对照：
>
> ```
> zh-CN: 中文(普通话)，zh-TW: 中文(台湾)，zh-WU: 中文(吴语)，zh-SICHUAN: 中文(四川话)，zh-SHANXI: 中文(山西话)，zh-ANHUI: 中文(安徽话)，zh-TIANJIN: 中文(天津话)，zh-NINGXIA: 中文(宁夏话)，zh-SHAANXI: 中文(陕西话)，zh-HEBEI: 中文(河北话)，zh-SHANDONG: 中文(山东话)，zh-GUANGDONG: 中文(广东话)，zh-SHANGHAI: 中文(上海话)，zh-HUBEI: 中文(湖北话)，zh-LIAONING: 中文(辽宁话)，zh-GANSU: 中文(甘肃话)，zh-FUJIAN: 中文(福建话)，zh-HUNAN: 中文(湖南话)，zh-HENAN: 中文(河南话)，zh-YUNNAN: 中文(云南话)，zh-MINNAN: 中文(闽南语)，zh-WENZHOU: 中文(温州话)
> ja-JP: 日语，th-TH: 泰语，ru-RU: 俄语，ko-KR: 韩语，id-ID: 印度尼西亚语，vi-VN: 越南语
> ct-NULL: 粤语，ct-HK: 粤语(香港)，ct-GZ: 粤语(广东)
> hi-IN: 印地语，ur-IN: 乌尔都语(印度)，ur-PK: 乌尔都语，ms-MY: 马来语，uz-UZ: 乌兹别克语
> ar-MA: 阿拉伯语(摩洛哥)，ar-GLA: 阿拉伯语，ar-SA: 阿拉伯语(沙特)，ar-EG: 阿拉伯语(埃及)，ar-KW: 阿拉伯语(科威特)，ar-LY: 阿拉伯语(利比亚)，ar-JO: 阿拉伯语(约旦)，ar-AE: 阿拉伯语(阿联酋)，ar-LVT: 阿拉伯语(黎凡特)
> fa-IR: 波斯语，bn-BD: 孟加拉语
> ta-SG: 泰米尔语(新加坡)，ta-LK: 泰米尔语(斯里兰卡)，ta-IN: 泰米尔语(印度)，ta-MY: 泰米尔语(马来西亚)
> te-IN: 泰卢固语，ug-NULL: 维吾尔语，ug-CN: 维吾尔语，gu-IN: 古吉拉特语
> my-MM: 缅甸语，tl-PH: 塔加洛语，kk-KZ: 哈萨克语，or-IN: 奥里亚语，ne-NP: 尼泊尔语
> mn-MN: 蒙古语，km-KH: 高棉语，jv-ID: 爪哇语，lo-LA: 老挝语，si-LK: 僧伽罗语
> fil-PH: 菲律宾语，ps-AF: 普什图语，pa-IN: 旁遮普语，kab-NULL: 卡拜尔语
> ba-NULL: 巴什基尔语，ks-IN: 克什米尔语，tg-TJ: 塔吉克语，su-ID: 巽他语
> mr-IN: 马拉地语，ky-KG: 吉尔吉斯语，az-AZ: 阿塞拜疆语
> ```

### DolphinAsr-base 模型

| 模型名称                          | 类型  | 支持语种 | 标点 | 时间戳 | 下载地址                                                                                  |
| ----------------------------- | --- | ---- | -- | --- | ------------------------------------------------------------------------------------- |
| DolphinAsr-base-onnx          | 非流式 | 多语种  | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-onnx)          |
| DolphinAsr-base-int8-onnx     | 非流式 | 多语种  | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-int8-onnx)     |
| DolphinAsr-base-onnx-opt      | 非流式 | 多语种  | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-onnx-opt)      |
| DolphinAsr-base-int8-onnx-opt | 非流式 | 多语种  | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-base-int8-onnx-opt) |

### DolphinAsr-small 模型

| 模型名称                           | 类型  | 支持语种 | 标点 | 时间戳 | 下载地址                                                                                   |
| ------------------------------ | --- | ---- | -- | --- | -------------------------------------------------------------------------------------- |
| DolphinAsr-small-onnx          | 非流式 | 多语种  | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-onnx)          |
| DolphinAsr-small-int8-onnx     | 非流式 | 多语种  | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-int8-onnx)     |
| DolphinAsr-small-onnx-opt      | 非流式 | 多语种  | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-onnx-opt)      |
| DolphinAsr-small-int8-onnx-opt | 非流式 | 多语种  | 否  | 是   | [modelscope](https://www.modelscope.cn/models/manyeyes/DolphinAsr-small-int8-onnx-opt) |
