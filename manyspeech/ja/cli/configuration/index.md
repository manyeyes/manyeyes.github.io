# 設定管理

ManySpeech-CLI は多階層の設定ファイルをサポートし、よく使うパラメータを永続化できます。

## 設定ファイルの優先順位

```
コマンドライン引数（最優先）
        ↓
    --save-default に保存された値
        ↓
    ローカル設定（プログラムディレクトリ/manyspeech.json）
        ↓
    ユーザー設定（%USERPROFILE%\.manyspeech\manyspeech.json）
        ↓
    システム設定（%PROGRAMDATA%\ManySpeech\manyspeech.json）
        ↓
    環境変数（MANYSPEECH_*）
        ↓
    プログラム内のデフォルト（最下位）
```

## クイック使用例

```bash
# 現在の設定を表示
manyspeech --show-config

# 現在のコマンドのパラメータをデフォルトとして保存
manyspeech asr -t offline -m chunk --format srt --threads 4 --save-default
✅ 設定がデフォルトとして保存されました

# その後は保存されたデフォルト値が適用されます
manyspeech asr -t offline -f test.wav

# 設定リセット
manyspeech --reset-config
```

次へ:

- [設定ファイルの配置](/manyspeech/ja/cli/configuration/file-location.md)
- [設定フィールド一覧](/manyspeech/ja/cli/configuration/fields.md)
- [設定管理コマンド](/manyspeech/ja/cli/configuration/commands.md)
