# 設定ファイルの配置

初回実行時、以下の場所に自動で設定ファイルが生成されます:

| 種類         | Windows パス                                  | 優先度    | 説明                   |
| ---------- | ------------------------------------------- | ------ | -------------------- |
| **ローカル設定** | プログラムディレクトリ `manyspeech.json`               | **最高** | ポータブル設定（プログラムと一緒に移動） |
| **ユーザー設定** | `%USERPROFILE%\.manyspeech\manyspeech.json` | 中      | ユーザー個別設定             |
| **システム設定** | `%PROGRAMDATA%\ManySpeech\manyspeech.json`  | 低      | システム全体のデフォルト設定       |

例:

```cmd
# ローカル設定を確認（存在する場合）
type "D:\Tools\ManySpeech\manyspeech.json"

# ユーザー設定
type "%USERPROFILE%\.manyspeech\manyspeech.json"

# システム設定
type "%PROGRAMDATA%\ManySpeech\manyspeech.json"
```

> 💡 ヒント：優先度が高い設定が低い設定の同名フィールドを上書きします。
