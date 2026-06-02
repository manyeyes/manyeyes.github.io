import React from 'react';
import { useI18n } from '../hooks/useI18n';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const i18n = useI18n();
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <nav className="pagination" aria-label="分页导航">
      {/* 上一页按钮 */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label={i18n.prevPage}
        aria-disabled={currentPage === 1}
      >
        {i18n.prevPage}
      </button>

      {/* 页码按钮和省略号 */}
      {getPageNumbers().map((page, idx) =>
        typeof page === 'number' ? (
          <button
            key={idx}
            onClick={() => onPageChange(page)}
            className={currentPage === page ? 'active' : ''}
            aria-label={`第 ${page} 页`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        ) : (
          <span key={idx} className="pagination-ellipsis" aria-hidden="true">
            {page}
          </span>
        )
      )}

      {/* 下一页按钮 */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label={i18n.nextPage}
        aria-disabled={currentPage === totalPages}
      >
        {i18n.nextPage}
      </button>
    </nav>
  );
};

export default Pagination;