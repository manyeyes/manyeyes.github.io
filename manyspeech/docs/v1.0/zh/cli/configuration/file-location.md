# 配置文件位置

首次运行程序时，会在以下位置自动生成配置文件：

| 类型 | Windows 路径 | 优先级 | 说明 |
|------|-------------|--------|------|
| **本地配置** | 程序目录 `manyspeech.json` | **最高** | 便携版配置，随程序移动 |
| **用户配置** | `%USERPROFILE%\.manyspeech\manyspeech.json` | 中 | 用户个性化设置 |
| **系统配置** | `%PROGRAMDATA%\ManySpeech\manyspeech.json` | 低 | 系统级默认配置 |

## 示例

```cmd
# 查看本地配置（如果存在）
type "D:\Tools\ManySpeech\manyspeech.json"

# 查看用户配置
type "%USERPROFILE%\.manyspeech\manyspeech.json"

# 查看系统配置
type "%PROGRAMDATA%\ManySpeech\manyspeech.json"
```

> 💡 **提示**：配置优先级高的文件会覆盖优先级低的文件中的相同字段。
