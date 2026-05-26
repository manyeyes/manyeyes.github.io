# Config File Locations

Config files are automatically generated at first run:

| Type       | Windows Path                                | Priority    | Description                     |
| ---------- | ------------------------------------------- | ----------- | ------------------------------- |
| **Local**  | Program Dir `manyspeech.json`               | **Highest** | Portable config, moves with app |
| **User**   | `%USERPROFILE%\.manyspeech\manyspeech.json` | Medium      | User-specific settings          |
| **System** | `%PROGRAMDATA%\ManySpeech\manyspeech.json`  | Low         | System-wide defaults            |

## Examples

```cmd
# View local config (if exists)
type "D:\Tools\ManySpeech\manyspeech.json"

# View user config
type "%USERPROFILE%\.manyspeech\manyspeech.json"

# View system config
type "%PROGRAMDATA%\ManySpeech\manyspeech.json"
```

> 💡 **Tip**: Higher priority files override identical fields in lower priority files.
