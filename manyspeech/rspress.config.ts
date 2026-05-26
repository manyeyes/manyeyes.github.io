import * as path from 'node:path';
// rspress.config.ts
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/manyspeech/',
  llms: true, // 开启 SSG-MD
  llmsUI: {
    placement: 'outline', // 将按钮显示在右侧大纲面板中
  },
  // 顶层配置：所有语言共用
  icon: '/manyspeech/manyspeech-icon.webp',
  logo: {  
    light: '/manyspeech/manyspeech-light-logo.webp',
    dark: '/manyspeech/manyspeech-dark-logo.webp',
  },
  
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/manyeyes/manyspeech',  
      },
    ],
    // 3. 全局页脚（版权 + Powered by + Sitemap链接）
    footer: {
      message:
        '© 2026 ManySpeech, Powered by Rspress<br/>Site last updated 2026-05-26,',
    },
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
  builderConfig: {
    html: {
      tags: [
        {
          tag: 'script',
          attrs: { src: '/scripts/analytics.js' }, 
          head: true, 
          append: false
        },
      ],
    },
  },
});