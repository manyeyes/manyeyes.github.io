import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

// 定义 base 常量，方便统一管理
const BASE_URL = '/manyspeech/';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: BASE_URL,

  // 顶层配置：手动拼接 base 路径
  icon: `${BASE_URL}manyspeech-icon.png`,
  logo: {
    light: `${BASE_URL}manyspeech-light-logo.png`,
    dark: `${BASE_URL}manyspeech-dark-logo.png`,
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

  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'ManySpeech',
      description: 'Lightweight Local Speech Recognition Tool',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: 'ManySpeech',
      description: '轻量化本地语音识别工具',
    },
  ],

  lang: 'zh',

  multiVersion: {
    default: 'v1.0',
    versions: ['v1.0'],
  },
});