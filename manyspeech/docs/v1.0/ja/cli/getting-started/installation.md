# インストールガイド

## システム要件

| プラットフォーム | 要件 | 備考 |
|------|----------|------|
| Windows | 10 / 11 (64bit) | メモリ 4GB 以上推奨、マイク（リアルタイム認識時） |

## Windows インストール

### 方法1：インストーラ（推奨）

ダウンロード候補:
- ModelScope ミラー: [manyspeech-cli-1.0.0-preview.9.17-win-x64-setup.exe](https://modelscope.cn/models/manyeyes/manyspeech-cli/resolve/master/manyspeech-cli-1.0.0-preview.9.17-win-x64-setup.exe)
- GitHub Releases: [manyspeech-cli-1.0.0-preview.9.17-win-x64-setup.exe](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.17/manyspeech-cli-1.0.0-preview.9.17-win-x64-setup.exe)

インストール手順:
1. インストーラをダブルクリックしウィザードに従う
2. インストール後、コマンドプロンプトまたは PowerShell で以下を実行して確認:

```bash
manyspeech --help
```

### 方法2：ポータブル版（インストール不要）

ダウンロード候補:
- ModelScope ミラー: [manyspeech-cli-1.0.0-preview.9.17-win-x64.zip](https://modelscope.cn/models/manyeyes/manyspeech-cli/file/view/master/manyspeech-cli-1.0.0-preview.9.17-win-x64.zip)
- GitHub Releases: [manyspeech-cli-1.0.0-preview.9.17-win-x64.zip](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.17/manyspeech-cli-1.0.0-preview.9.17-win-x64.zip)

手順:
1. 任意のディレクトリに解凍（例: D:\Tools\ManySpeech）
2. ディレクトリへ移動して manyspeech-cli.exe をダブルクリックで実行

> 💡 ヒント：任意の場所から manyspeech を呼び出したい場合は解凍先を PATH に追加してください（install.bat を実行すると自動で追加できます）。アンインストールは uninstall.bat を実行。

検証:
```bash
manyspeech --help
```
