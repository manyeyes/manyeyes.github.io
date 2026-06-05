# Installation Guide

## System Requirements

| Platform | Version Requirements | Other                                                        |
| -------- | -------------------- | ------------------------------------------------------------ |
| Windows  | 10 / 11 (64-bit)     | 4GB+ RAM recommended, microphone (for real-time recognition) |

## Windows Installation

### Method 1: Installer (Recommended)

**Download the installer** (choose either source):

- **ModelScope Mirror**: [manyspeech-cli-1.0.0-preview.9.19-win-x64-setup.exe](https://modelscope.cn/models/manyeyes/manyspeech-cli/resolve/master/manyspeech-cli-1.0.0-preview.9.19-win-x64-setup.exe)
- **GitHub Releases**: [manyspeech-cli-1.0.0-preview.9.19-win-x64-setup.exe](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.19/manyspeech-cli-1.0.0-preview.9.19-win-x64-setup.exe)

**Installation steps**:

1. Double-click the installer and follow the wizard to complete installation.
2. After installation, open **Command Prompt (cmd)** or **PowerShell** and verify with:

   ```bash
   manyspeech --help
   ```

### Method 2: Portable (No installation)

**Download the archive** (choose either source):

- **ModelScope Mirror**: [manyspeech-cli-1.0.0-preview.9.19-win-x64.zip](https://modelscope.cn/models/manyeyes/manyspeech-cli/file/view/master/manyspeech-cli-1.0.0-preview.9.19-win-x64.zip)
- **GitHub Releases**: [manyspeech-cli-1.0.0-preview.9.19-win-x64.zip](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.19/manyspeech-cli-1.0.0-preview.9.19-win-x64.zip)

**Installation steps**:

1. Extract to any directory (e.g., `D:\Tools\ManySpeech`).
2. Enter that directory and double-click `manyspeech-cli.exe` to run.

   > 💡 **Tip**: To call `manyspeech` directly from any command prompt, add the extracted directory to your system **PATH** environment variable (double-click `install.bat` in the directory to do this automatically). To cleanly uninstall, run `uninstall.bat`.

## Linux Installation

### Method 1: AppImage (Single file)

1. Download `manyspeech-cli-1.0.0-preview.9.19-linux-x64.AppImage`

   - [ModelScope Download](https://modelscope.cn/models/manyeyes/manyspeech-cli/resolve/master/manyspeech-cli-1.0.0-preview.9.19-linux-x64.AppImage)

   ```bash
   wget https://modelscope.cn/models/manyeyes/manyspeech-cli/resolve/master/manyspeech-cli-1.0.0-preview.9.19-linux-x64.tar.gz
   ```

   - [GitHub Download](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.19/manyspeech-cli-1.0.0-preview.9.19-linux-x64.AppImage)

   ```bash
   wget https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.19/manyspeech-cli-1.0.0-preview.9.19-linux-x64.AppImage
   ```

2. Make it executable:
   ```bash
   chmod +x manyspeech-cli-1.0.0-preview.9.19-linux-x64.AppImage
   ```

3. Run directly:

   ```bash
   ./manyspeech-cli-1.0.0-preview.9.19-linux-x64.AppImage
   ```

   > 📝 **Note**: If your system lacks FUSE, you can extract and run with the `--appimage-extract` option, or use `--help` to see other options.

### Method 2: Portable (tar.gz)

1. Download `manyspeech-cli-1.0.0-preview.9.19-linux-x64.tar.gz`

   - [ModelScope Download](https://modelscope.cn/models/manyeyes/manyspeech-cli/resolve/master/manyspeech-cli-1.0.0-preview.9.19-linux-x64.tar.gz)

   ```bash
   wget https://modelscope.cn/models/manyeyes/manyspeech-cli/resolve/master/manyspeech-cli-1.0.0-preview.9.19-linux-x64.tar.gz
   ```

   - [GitHub Download](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.19/manyspeech-cli-1.0.0-preview.9.19-linux-x64.tar.gz)

   ```bash
   wget https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.19/manyspeech-cli-1.0.0-preview.9.19-linux-x64.tar.gz
   ```

2. Extract the archive:
   ```bash
   tar -xzvf manyspeech-cli-1.0.0-preview.9.19-linux-x64.tar.gz
   ```

3. Enter the extracted directory:
   ```bash
   cd manyspeech-cli-1.0.0-preview.9.19-linux-x64
   ```

4. Make it executable and run:
   ```bash
   chmod +x manyspeech-cli
   ./manyspeech-cli
   ```

## Verify Installation

```bash
manyspeech --help
```

If help information is displayed, installation succeeded.

> 💡 **General tip**: The first time you run the program, it will automatically download the required speech recognition model files. Please be patient and ensure a working internet connection.
