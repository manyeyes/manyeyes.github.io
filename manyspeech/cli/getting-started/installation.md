# 安装指南

## 系统要求

| 平台      | 版本要求          | 其他                      |
| ------- | ------------- | ----------------------- |
| Windows | 10 / 11 (64位) | 建议 4GB 以上内存，麦克风（如需实时识别） |

## Windows 安装指南

### 方式一：一键安装包（推荐）

**下载安装包**（任选一个源）：

- **ModelScope 镜像**：[manyspeech-cli-1.0.0-preview.9.17-win-x64-setup.exe](https://modelscope.cn/models/manyeyes/manyspeech-cli/resolve/master/manyspeech-cli-1.0.0-preview.9.17-win-x64-setup.exe)
- **GitHub Releases**：[manyspeech-cli-1.0.0-preview.9.17-win-x64-setup.exe](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.17/manyspeech-cli-1.0.0-preview.9.17-win-x64-setup.exe)

**安装步骤**：

1. 双击运行安装程序，按向导提示完成安装。
2. 安装完成后，打开 **命令提示符(cmd)** 或 **PowerShell**，输入以下命令验证：

   ```bash
   manyspeech --help
   ```

### 方式二：免安装绿色版

**下载压缩包**（任选一个源）：

- **ModelScope 镜像**：[manyspeech-cli-1.0.0-preview.9.17-win-x64.zip](https://modelscope.cn/models/manyeyes/manyspeech-cli/file/view/master/manyspeech-cli-1.0.0-preview.9.17-win-x64.zip)
- **GitHub Releases**：[manyspeech-cli-1.0.0-preview.9.17-win-x64.zip](https://github.com/manyeyes/manyeyes.github.io/releases/download/v1.0.0-preview.9.17/manyspeech-cli-1.0.0-preview.9.17-win-x64.zip)

**安装步骤**：

1. 解压到任意目录（例如 `D:\Tools\ManySpeech`）。

2. 进入该目录，双击 `manyspeech-cli.exe` 即可运行。

   > 💡 **提示**：如需在任意位置打开 cmd 后直接调用 `manyspeech`，请将解压目录添加到系统 **PATH** 环境变量中（双击运行目录中的 `install.bat` 即可自动完成此操作）。如需干净卸载，运行 `uninstall.bat` 即可。

3. 验证安装：

   ```bash
   manyspeech --help
   ```

   如果显示帮助信息，说明安装成功。
