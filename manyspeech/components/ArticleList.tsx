import React, { useState, useEffect } from 'react';
import { useLang, useLocation } from '@rspress/core/runtime';
import { useI18n } from '../hooks/useI18n';

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
    fetch(`${base}blog/_meta.json`)
      .then(res => res.json())
      .then(data => {
        // 按 label 倒序排序
        const sorted = [...data].sort((a, b) => b.label.localeCompare(a.label));
        setPosts(sorted.slice(0, 6));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ textAlign: 'center', padding: '2rem' }}>加载中...</div>;
  if (posts.length === 0) return null;

  return (
    <div className="latest-posts" style={{ maxWidth: '1152px', margin: '2rem auto', padding: '0 2rem' }}>
      <h2>📖 最新文章</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map(post => (
          <li key={post.name} style={{ margin: '0.75rem 0' }}>
            <a href={`/blog/${post.name}`} style={{ color: 'var(--rp-c-brand)', textDecoration: 'none' }}>
              {post.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;