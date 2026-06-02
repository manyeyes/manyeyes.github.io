// hooks/useI18n.ts
import { useLang } from '@rspress/core/runtime';
import zh from '../i18n/zh.json';
import en from '../i18n/en.json';
import ja from '../i18n/ja.json';

const locales: Record<string, any> = { zh, en, ja };

export const useI18n = () => {
  const lang = useLang(); // 'zh', 'en', 'ja'
  return locales[lang] || locales.zh;
};