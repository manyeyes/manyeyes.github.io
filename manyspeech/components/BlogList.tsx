// components/BlogList.tsx
import React, { useState, useEffect } from 'react';
import { useLang, useLocation } from '@rspress/core/runtime';
import { useI18n } from '../hooks/useI18n';

const POSTS_PER_PAGE = 6;

const BlogList: React.FC = () => {
  const i18n = useI18n();
  const lang = useLang();                  // 当前语言，如 'zh', 'en', 'ja'
  const { pathname } = useLocation();      // 监听路由变化，切换语言时刷新
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // 动态加载对应语言的 _meta.json
  useEffect(() => {
    const base = import.meta.env.BASE_URL || '/';
    // 中文无语言前缀，其他语言添加前缀（如 en/）
    const langPath = lang === 'zh' ? '' : `${lang}/`;
    const url = `${base}/${lang}/blog/_meta.json`.replace(/\/+/g, '/');
    console.log('BlogList fetching:', url);

    setLoading(true);
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        // 解析数据，与原来的结构保持一致
        const parsed = data.map((item: any) => {
          const [date, ...titleParts] = item.label.split(' - ');
          const title = titleParts.join(' - ');
          return {
            title,
            date,
            link: `${base}/${langPath}blog/${item.name}`,
            excerpt: item.excerpt || i18n.noExcerpt,
            tags: item.tags || [],
          };
        });
        setPosts(parsed);
        setLoading(false);
      })
      .catch(err => {
        console.error('加载博客列表失败:', err);
        setLoading(false);
      });
  }, [lang, pathname]);  // 语言或路由变化时重新加载

  if (loading) {
    return <div className="blog-list-container" style={{ textAlign: 'center', padding: '2rem' }}>加载中...</div>;
  }

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // 生成分页页码（最多7个，以当前页为中心，左右各3个）
  const getPageNumbers = (): number[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    let start = Math.max(1, currentPage - 3);
    let end = Math.min(totalPages, currentPage + 3);
    if (start === 1) {
      end = Math.min(totalPages, 7);
    } else if (end === totalPages) {
      start = Math.max(1, totalPages - 6);
    }
    const pages: number[] = [];
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  const visiblePages = getPageNumbers();

  return (
    <div className="blog-list-container">
      <h1 className="blog-title">{i18n.blogTitle}</h1>
      <div className="blog-list">
        {currentPosts.map((post, idx) => (
          <article key={idx} className="blog-card">
            <h3><a href={post.link}>{post.title}</a></h3>
            <div className="blog-meta">
              <span>{post.date}</span>
              {post.tags.map((tag: string) => (
                <span key={tag} className="blog-tag">#{tag}</span>
              ))}
            </div>
            <p className="blog-excerpt">{post.excerpt}</p>
            <a href={post.link} className="read-more">{i18n.readMore}</a>
          </article>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>
            {i18n.prevPage}
          </button>
          {visiblePages.map(page => (
            <button key={page} className={currentPage === page ? 'active' : ''} onClick={() => setCurrentPage(page)}>
              {page}
            </button>
          ))}
          <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>
            {i18n.nextPage}
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;