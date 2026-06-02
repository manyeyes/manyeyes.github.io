import React, { useState, useEffect } from 'react';

const LatestPosts = ({ limit = 6 }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 关键：用 /blog/_meta.json，不要用相对路径
    fetch('/manyspeech/blog/_meta.json')
      .then(res => {
        if (!res.ok) throw new Error('not found');
        return res.json();
      })
      .then(meta => {
        // meta 是数组：[{name, label, ...}]
        const list = meta
          .filter(item => item.type === 'file') // 只取文章
          .map(item => ({
            name: item.name,
            title: item.label || item.name,
            link: `/blog/${item.name}`,
            // 暂时用固定日期，后面在文章里加 date 再改
            date: '2025-12-31',
          }));
        setPosts(list.slice(0, limit));
      })
      .catch(err => {
        console.error('读取 _meta.json 失败：', err);
        setPosts([]);
      })
      .finally(() => setLoading(false));
  }, [limit]);

  if (loading) return <div>加载中...</div>;
  if (posts.length === 0) return <div>暂无文章</div>;

  return (
    <div style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>📖 最新文章</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map(post => (
          <li key={post.name} style={{ margin: '0.8rem 0' }}>
            <a
              href={post.link}
              style={{ textDecoration: 'none', color: '#333', fontSize: '1.1rem' }}
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestPosts;