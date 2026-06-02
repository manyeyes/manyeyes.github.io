import React, { useState, useEffect } from 'react';

interface Post {
  name: string;
  label: string;
  excerpt?: string;
  tags?: string[];
}

const ArticleList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("----------------");
    const base = import.meta.env.BASE_URL || '/';
    console.log(base);
    fetch(`${base}/blog/_meta.json`)
      .then(res => res.json())
      .then(data => {
        const sorted = [...data].sort((a, b) => b.label.localeCompare(a.label));
        setPosts(sorted.slice(0, 6));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // 计算三个月前的日期（UTC 当天开始）
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
  threeMonthsAgo.setHours(0, 0, 0, 0);

  // 解析日期并筛选最近三个月的文章
  const filteredPosts = posts.filter(post => {
    // 尝试从 label 开头提取日期（格式 YYYY-MM-DD）
    const dateMatch = post.label.match(/^(\d{4}-\d{2}-\d{2})/);
    if (!dateMatch) return false; // 没有日期前缀，不显示
    const postDate = new Date(dateMatch[1]);
    return postDate >= threeMonthsAgo;
  });

  if (loading) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '3rem 1rem',
          fontSize: '1rem',
          color: 'var(--rp-c-text-soft)',
        }}
      >
        ⏳ 加载文章中...
      </div>
    );
  }

  // 如果没有文章（或过滤后无文章），不显示组件
  if (posts.length === 0 || filteredPosts.length === 0) return null;

  // 安全解析 label 为日期和标题（如果包含 " - "）
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
      excerpt: post.excerpt || '点击阅读全文',
      tags: Array.isArray(post.tags) ? post.tags : [],
    };
  });

  return (
    <div
      style={{
        maxWidth: '1152px',
        margin: '4rem auto',
        padding: '0 2rem',
      }}
    >
      {/* 标题区域 */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '2.5rem',
        }}
      >
        <h2
          style={{
            fontSize: '1.8rem',
            fontWeight: 600,
            margin: 0,
            color: 'var(--rp-c-text)',
          }}
        >
          📖 最新文章
        </h2>
      </div>

      {/* 卡片网格 */}
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
            {/* 日期（如果存在） */}
            {post.date && (
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'var(--rp-c-brand)',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {post.date}
              </div>
            )}
            {/* 标题 */}
            <h3
              style={{
                margin: '0 0 0.75rem',
                fontSize: '1.25rem',
                fontWeight: 600,
                lineHeight: 1.4,
              }}
            >
              <a
                href={`/manyspeech/blog/${post.name}`}
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
            {/* 摘要 */}
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
            {/* 标签（如果存在） */}
            {post.tags.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
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
            {/* 阅读链接 */}
            <a
              href={`/manyspeech/blog/${post.name}`}
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
              阅读全文 <span>→</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;