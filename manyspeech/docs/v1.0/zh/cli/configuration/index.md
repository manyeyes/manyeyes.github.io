# 配置管理

ManySpeech-CLI 支持多级配置文件管理，让你可以持久化常用参数。

## 配置文件优先级

```
命令行参数（最高优先级）
        ↓
    --save-default 保存的参数
        ↓
    本地配置文件（程序目录/manyspeech.json）
        ↓
    用户配置文件（%USERPROFILE%\.manyspeech\manyspeech.json）
        ↓
    系统配置文件（%PROGRAMDATA%\ManySpeech\manyspeech.json）
        ↓
    环境变量（MANYSPEECH_*）
        ↓
    程序内置默认值（最低优先级）
```

## 快速使用

```bash
# 查看当前配置
manyspeech --show-config

# 保存当前参数为默认配置
manyspeech asr -t offline -m chunk --format srt --threads 4 --save-default
✅ 当前参数已保存为默认配置

# 之后直接运行，自动使用保存的默认值（-m chunk --format srt --threads 4）
manyspeech asr -t offline -f test.wav

# 重置配置
manyspeech --reset-config
```

## 下一步

- [配置文件位置详解](./file-location)
- [配置字段说明](./fields)
- [配置管理命令](./commands)
