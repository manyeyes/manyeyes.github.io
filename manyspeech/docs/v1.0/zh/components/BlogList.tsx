// components/BlogList.tsx
import React, { useState } from 'react';
import meta from '../blog/_meta.json';   // 根据你的实际路径调整

const POSTS_PER_PAGE = 6;

// 适配新版 _meta.json：使用 label 和 name
const posts = meta.map(item => {
  const [date, ...titleParts] = item.label.split(' - ');
  const title = titleParts.join(' - ');
  return {
    title,
    date,
    link: `/manyspeech/blog/${item.name}`,          // 根据 name 构建链接
    excerpt: item.excerpt || '暂无摘要',
    tags: item.tags || [],
  };
});

const BlogList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
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
      <h1 className="blog-title">博客</h1>
      <div className="blog-list">
        {currentPosts.map((post, idx) => (
          <article key={idx} className="blog-card">
            <h3><a href={post.link}>{post.title}</a></h3>
            <div className="blog-meta">
              <span>{post.date}</span>
              {post.tags.map(tag => (
                <span key={tag} className="blog-tag">#{tag}</span>
              ))}
            </div>
            <p className="blog-excerpt">{post.excerpt}</p>
            <a href={post.link} className="read-more">阅读全文 →</a>
          </article>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>
            ← 上一页
          </button>
          {visiblePages.map(page => (
            <button key={page} className={currentPage === page ? 'active' : ''} onClick={() => setCurrentPage(page)}>
              {page}
            </button>
          ))}
          <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>
            下一页 →
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;