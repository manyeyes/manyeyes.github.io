import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  globalStyles: path.join(__dirname, 'styles/index.css'),
  globalUIComponents: [
    path.join(__dirname, 'components', 'BackButton.tsx'),   // 注册返回按钮组件
  ],
  base: '/manyspeech/',
  llms: true, // 开启 SSG-MD
  // llmsUI: {
  //   placement: 'outline', // 将按钮显示在右侧大纲面板中
  // },
  // 顶层配置：所有语言共用
  icon: '/manyspeech/manyspeech-icon.webp',
  logo: {  
    light: '/manyspeech/manyspeech-light-logo.webp',
    dark: '/manyspeech/manyspeech-dark-logo.webp',
  },
  // themeDir: path.join(__dirname, 'theme'),
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/manyeyes/manyspeech',  
      },
    ],
    // 全局页脚
    footer: {
      message:
        '© 2026 ManySpeech, Powered by Rspress<br/>Site last updated 2026-06-02',
    },
  },
  
  // 语言配置
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
    {
      lang: 'ja',
      label: '日本語',
      title: 'ManySpeech',
      description: '軽量なローカル音声認識ツール',
    },
  ],
  
  lang: 'zh',  // 默认语言

  multiVersion: {
    default: 'v1.0',    // 默认项目（可省略前缀）
    versions: ['v1.0'], // 所有项目列表
  },
  builderConfig: {
    html: {
      tags: [
        {
          tag: 'script',
          children: `var _hmt=_hmt||[];(function(){var h=document.createElement("script");h.src="https://hm.baidu.com/hm.js?c5cc9be664702972dd979661253d614b";var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(h,d);})();`,
          head: true,
        },
      ],
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, 'components'),
      },
    },
  },
  markdown: {
    link: {
      autoPrefix: true, // 开启自动前缀
    },
  },
});