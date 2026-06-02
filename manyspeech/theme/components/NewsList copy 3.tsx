import React, { useState, useEffect } from 'react';

interface Post {
  name: string;
  label: string;
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

  if (loading)
    return (
      <div style={{
        textAlign: 'center',
        padding: '3rem 1rem',
        fontSize: '1rem',
        color: 'var(--rp-c-text-2)',
      }}>
        ⏳ 加载文章中...
      </div>
    );

  if (posts.length === 0) return null;

  return (
    <div style={{
      maxWidth: '1152px',
      margin: '4rem auto',
      padding: '0 2rem',
    }}>
      {/* 标题区域 */}
      <div style={{
        textAlign: 'center',
        marginBottom: '2.5rem',
      }}>
        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: 600,
          margin: 0,
          color: 'var(--rp-c-text-1)',
        }}>
          📖 最新文章
        </h2>
        {/* <div style={{
          width: '50px',
          height: '3px',
          background: 'var(--rp-c-brand)',
          margin: '12px auto 0',
          borderRadius: '3px',
        }} /> */}
      </div>

      {/* 文章列表 - 卡片式 + 动效 */}
      <ul style={{
        listStyle: 'none',
        padding: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1rem',
      }}>
        {posts.map(post => (
          <li key={post.name} style={{
            padding: '1.2rem 1.4rem',
            borderRadius: '12px',
            border: '1px solid var(--rp-c-line)',
            transition: 'all 0.2s ease',
            background: 'var(--rp-c-bg)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <a
              href={`/blog/${post.name}`}
              style={{
                color: 'var(--rp-c-text-1)',
                fontSize: '1.05rem',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'block',
              }}
            >
              {post.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;