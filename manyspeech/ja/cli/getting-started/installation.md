# インストールガイド

## システム要件

| プラットフォーム | バージョン要件         | その他                        |
| -------- | --------------- | -------------------------- |
| Windows  | 10 / 11 (64ビット) | 4GB以上のRAM推奨、マイク（リアルタイム認識時） |

## Windows へのインストール

### 方法1: インストーラ（推奨）

**インストーラをダウンロード**（いずれかのソースを選択）：

- **ModelScope ミラー**: [manyspeech-cli-1.0.0-preview.9.19-win-x64-setup.exe](https://modelscope.cn/models/manyeyes/manyspeech-cli/resolve/master/manyspeech-cli-1.0.0-preview.9.19-win-x64-setup.exe)
- **GitHub Releases**: [manyspeech-cli-1.0.0-preview.9.19-win-x64-setup.exe](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.19/manyspeech-cli-1.0.0-preview.9.19-win-x64-setup.exe)

**インストール手順**：

1. インストーラをダブルクリックし、ウィザードに従ってインストールを完了します。
2. インストール後、**コマンドプロンプト(cmd)** または **PowerShell** を開き、以下のコマンドで確認します：

   ```bash
   manyspeech --help
   ```

### 方法2: ポータブル版（インストール不要）

**アーカイブをダウンロード**（いずれかのソースを選択）：

- **ModelScope ミラー**: [manyspeech-cli-1.0.0-preview.9.19-win-x64.zip](https://modelscope.cn/models/manyeyes/manyspeech-cli/file/view/master/manyspeech-cli-1.0.0-preview.9.19-win-x64.zip)
- **GitHub Releases**: [manyspeech-cli-1.0.0-preview.9.19-win-x64.zip](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.19/manyspeech-cli-1.0.0-preview.9.19-win-x64.zip)

**インストール手順**：

1. 任意のディレクトリ（例：`D:\Tools\ManySpeech`）に解凍します。
2. そのディレクトリに移動し、`manyspeech-cli.exe` をダブルクリックして実行します。

   > 💡 **ヒント**：任意のコマンドプロンプトから直接 `manyspeech` を呼び出すには、解凍したディレクトリをシステムの **PATH** 環境変数に追加してください（ディレクトリ内の `install.bat` をダブルクリックすると自動で設定できます）。完全にアンインストールするには `uninstall.bat` を実行します。

## Linux へのインストール

### 方法1: AppImage（単一ファイル）

1. `manyspeech-cli-1.0.0-preview.9.19-linux-x64.AppImage` をダウンロード

   - [ModelScope ダウンロード](https://modelscope.cn/models/manyeyes/manyspeech-cli/resolve/master/manyspeech-cli-1.0.0-preview.9.19-linux-x64.AppImage)

   ```bash
   wget https://modelscope.cn/models/manyeyes/manyspeech-cli/resolve/master/manyspeech-cli-1.0.0-preview.9.19-linux-x64.tar.gz
   ```

   - [GitHub ダウンロード](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.19/manyspeech-cli-1.0.0-preview.9.19-linux-x64.AppImage)

   ```bash
   wget https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.19/manyspeech-cli-1.0.0-preview.9.19-linux-x64.AppImage
   ```

2. 実行権限を付与：
   ```bash
   chmod +x manyspeech-cli-1.0.0-preview.9.19-linux-x64.AppImage
   ```

3. 直接実行：

   ```bash
   ./manyspeech-cli-1.0.0-preview.9.19-linux-x64.AppImage
   ```

   > 📝 **注記**：システムに FUSE ライブラリがない場合は、`--appimage-extract` オプションを指定して解凍後に実行するか、`--help` で他のオプションを確認してください。

### 方法2: ポータブル版（tar.gz）

1. `manyspeech-cli-1.0.0-preview.9.19-linux-x64.tar.gz` をダウンロード

   - [ModelScope ダウンロード](https://modelscope.cn/models/manyeyes/manyspeech-cli/resolve/master/manyspeech-cli-1.0.0-preview.9.19-linux-x64.tar.gz)

   ```bash
   wget https://modelscope.cn/models/manyeyes/manyspeech-cli/resolve/master/manyspeech-cli-1.0.0-preview.9.19-linux-x64.tar.gz
   ```

   - [GitHub ダウンロード](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.19/manyspeech-cli-1.0.0-preview.9.19-linux-x64.tar.gz)

   ```bash
   wget https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.19/manyspeech-cli-1.0.0-preview.9.19-linux-x64.tar.gz
   ```

2. アーカイブを解凍：
   ```bash
   tar -xzvf manyspeech-cli-1.0.0-preview.9.19-linux-x64.tar.gz
   ```

3. 解凍したディレクトリに移動：
   ```bash
   cd manyspeech-cli-1.0.0-preview.9.19-linux-x64
   ```

4. 実行権限を付与して実行：
   ```bash
   chmod +x manyspeech-cli
   ./manyspeech-cli
   ```

## インストールの確認

```bash
manyspeech --help
```

ヘルプ情報が表示されればインストール成功です。

> 💡 **一般ヒント**：初回起動時、必要な音声認識モデルファイルが自動的にダウンロードされます。インターネット接続を確保し、しばらくお待ちください。
