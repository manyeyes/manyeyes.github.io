import * as path from 'node:path';
// rspress.config.ts
import { defineConfig } from '@rspress/core';
import { normalizeImagePath } from '@rspress/core/runtime'; // [reference:10]

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/manyspeech/',
  // 顶层配置：所有语言共用
  icon: normalizeImagePath('/manyspeech/manyspeech-icon.png'),      // ✅ 提到顶层
  logo: {
    light: normalizeImagePath('/manyspeech-light-logo.png'),
    dark: normalizeImagePath('/manyspeech-dark-logo.png'),
  },
  
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/manyeyes/manyspeech',
      },
    ],
  },
  
  // 语言配置
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'ManySpeech',
      description: 'Lightweight Local Speech Recognition Tool',
      // icon 不能放这里
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: 'ManySpeech',
      description: '轻量化本地语音识别工具',
      // icon 不能放这里
    },
  ],
  
  lang: 'zh',  // 默认语言

  multiVersion: {
    default: 'v1.0',        // 默认项目（可省略前缀）
    versions: ['v1.0'], // 所有项目列表
  },
});