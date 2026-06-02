// components/BackButton.tsx
import React from 'react';
import { useLocation, useLang } from '@rspress/core/runtime';
import { useI18n } from '../hooks/useI18n';

const BackButton: React.FC = () => {
  const { pathname } = useLocation();
  const lang = useLang();
  const i18n = useI18n();

  // 判断是否为博客文章页（路径包含 /blog/post- 或 /blog/generated-post-，且不是 /blog/ 本身）
  const isBlogPost = /\/blog\/(generated-)?post-/.test(pathname) && !pathname.endsWith('/blog/');

  if (!isBlogPost) return null;

  // 构建返回博客列表的链接，根据当前语言添加前缀
  const base = import.meta.env.BASE_URL || '/';
  const langPath = lang === 'zh' ? '' : `${lang}/`;
  const blogListUrl = `${base}/${langPath}/blog/`.replace(/\/+/g, '/');

  return (
    <div className="back-to-list" style={{ textAlign: 'right', margin: '3rem 3rem 2rem' }}>
      <a
        href={blogListUrl}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.2rem 0.5rem',
          backgroundColor: 'var(--rp-c-brand, #112dad)',
          color: 'white',
          borderRadius: '9999px',
          textDecoration: 'none',
          fontWeight: 500,
          transition: 'all 0.2s ease',
          fontSize: '0.875rem',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--rp-c-brand-dark, #2563eb)';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--rp-c-brand, #3b82f6)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {i18n.backToBlogList}
      </a>
    </div>
  );
};

export default BackButton;