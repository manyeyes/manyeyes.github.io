import React, { useState, useEffect } from 'react';
import { useLang, useLocation } from '@rspress/core/runtime';
import { useI18n } from '../../hooks/useI18n';

interface Post {
  name: string;
  label: string;
  excerpt?: string;
  tags?: string[];
}

const ArticleList = () => {
  const i18n = useI18n();
  const lang = useLang();
  const { pathname } = useLocation();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // 获取基础路径和语言子路径
  const base = import.meta.env.BASE_URL || '/';
  const langPath = lang === 'zh' ? '' : `${lang}/`;
  const blogBaseUrl = `${base}/${langPath}blog/`.replace(/\/+/g, '/');

  useEffect(() => {
    const url = `${base}/${lang}/blog/_meta.json`.replace(/\/+/g, '/');
    console.log('Loading articles from:', url);

    setLoading(true);
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        const sorted = [...data].sort((a, b) => b.label.localeCompare(a.label));
        setPosts(sorted.slice(0, 6));
        setLoading(false);
      })
      .catch(err => {
        console.error('加载文章列表失败:', err);
        setLoading(false);
      });
  }, [blogBaseUrl, pathname]);

  // 三个月过滤逻辑
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
  threeMonthsAgo.setHours(0, 0, 0, 0);

  const filteredPosts = posts.filter(post => {
    const dateMatch = post.label.match(/^(\d{4}-\d{2}-\d{2})/);
    if (!dateMatch) return false;
    const postDate = new Date(dateMatch[1]);
    return postDate >= threeMonthsAgo;
  });

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--rp-c-text-soft)' }}>
        ⏳ {i18n.loading}
      </div>
    );
  }

  if (posts.length === 0 || filteredPosts.length === 0) return null;

  const parsedPosts = filteredPosts.map(post => {
    const separatorIndex = post.label.indexOf(' - ');
    let date = '';
    let title = post.label;
    if (separatorIndex !== -1) {
      date = post.label.slice(0, separatorIndex);
      title = post.label.slice(separatorIndex + 3);
    }
    return {
      ...post,
      date,
      title,
      excerpt: post.excerpt || i18n.excerptDefault,
      tags: Array.isArray(post.tags) ? post.tags : [],
      link: `${blogBaseUrl}${post.name}`.replace(/\/+/g, '/'),
    };
  });

  return (
    <div style={{ maxWidth: '1152px', margin: '4rem auto', padding: '0 1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 600, margin: 0, color: 'var(--rp-c-text)' }}>
          {i18n.latestArticles}
        </h2>
      </div>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {parsedPosts.map(post => (
          <li
            key={post.name}
            style={{
              background: 'var(--rp-c-bg-soft)',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid var(--rp-c-divider)',
              transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 24px -12px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.borderColor = 'var(--rp-c-brand-light)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'var(--rp-c-divider)';
            }}
          >
            {post.date && (
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'var(--rp-c-brand)',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                }}
              >
                {post.date}
              </div>
            )}
            <h3 style={{ margin: '0 0 0.75rem', fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.4 }}>
              <a
                href={post.link}
                style={{
                  color: 'var(--rp-c-text)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--rp-c-brand)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--rp-c-text)')}
              >
                {post.title}
              </a>
            </h3>
            <p
              style={{
                color: 'var(--rp-c-text-soft)',
                fontSize: '0.9rem',
                lineHeight: 1.5,
                margin: '0 0 1rem',
                flex: 1,
              }}
            >
              {post.excerpt}
            </p>
            {post.tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      background: 'var(--rp-c-bg-mute)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '2rem',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      color: 'var(--rp-c-text-soft)',
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            <a
              href={post.link}
              style={{
                color: 'var(--rp-c-brand)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                transition: 'gap 0.2s',
                marginTop: 'auto',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = '0.5rem')}
              onMouseLeave={(e) => (e.currentTarget.style.gap = '0.25rem')}
            >
              {i18n.readMore} <span></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;