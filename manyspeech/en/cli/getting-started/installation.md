# Installation Guide

## System Requirements

| Platform | Version Requirements | Others                                                              |
| -------- | -------------------- | ------------------------------------------------------------------- |
| Windows  | 10 / 11 (64-bit)     | 4GB+ RAM recommended; microphone required for real‑time recognition |

## Windows Installation Guide

### Method 1: One‑click Installer (Recommended)

**Download the installer** (choose either source):

- **ModelScope Mirror**: [manyspeech-cli-1.0.0-preview.9.19-win-x64-setup.exe](https://modelscope.cn/models/manyeyes/manyspeech-cli/resolve/master/manyspeech-cli-1.0.0-preview.9.19-win-x64-setup.exe)
- **GitHub Releases**: [manyspeech-cli-1.0.0-preview.9.19-win-x64-setup.exe](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.19/manyspeech-cli-1.0.0-preview.9.19-win-x64-setup.exe)

**Installation steps**:

1. Double‑click the installer and follow the wizard to complete the installation.
2. After installation, open **Command Prompt (cmd)** or **PowerShell** and verify the installation with:

   ```bash
   manyspeech --help
   ```

### Method 2: Portable (No‑install) Version

**Download the archive** (choose either source):

- **ModelScope Mirror**: [manyspeech-cli-1.0.0-preview.9.19-win-x64.zip](https://modelscope.cn/models/manyeyes/manyspeech-cli/file/view/master/manyspeech-cli-1.0.0-preview.9.19-win-x64.zip)
- **GitHub Releases**: [manyspeech-cli-1.0.0-preview.9.19-win-x64.zip](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.19/manyspeech-cli-1.0.0-preview.9.19-win-x64.zip)

**Installation steps**:

1. Extract the archive to any directory (e.g., `D:\Tools\ManySpeech`).

2. Enter that directory and double‑click `manyspeech-cli.exe` to run it.

   > 💡 **Tip**: To invoke `manyspeech` directly from any location in Command Prompt, add the extracted directory to your system **PATH** environment variable (double‑click `install.bat` in the extracted folder to do this automatically). To cleanly uninstall, run `uninstall.bat`.

3. Verify the installation:

   ```bash
   manyspeech --help
   ```

   If the help information is displayed, the installation succeeded.
