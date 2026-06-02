// components/SearchBar.tsx
import React, { useState, useEffect } from 'react';

interface SearchResult {
  title: string;
  path: string;
  content: string;
}

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleSearch = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }
      
      // 使用 Rspress 内置搜索 API
      if (window.__SEARCH_INDEX__) {
        const searchIndex = window.__SEARCH_INDEX__;
        const matched = searchIndex.filter((item: any) => 
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.content.toLowerCase().includes(query.toLowerCase())
        );
        setResults(matched.slice(0, 10));
      }
    };
    
    const debounce = setTimeout(handleSearch, 300);
    return () => clearTimeout(debounce);
  }, [query]);
  
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="搜索文章... (⌘K)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsOpen(true)}
        className="search-input"
      />
      
      {isOpen && results.length > 0 && (
        <div className="search-results">
          {results.map((result, idx) => (
            <a key={idx} href={result.path} className="search-result-item">
              <h4>{result.title}</h4>
              <p>{result.content.slice(0, 100)}...</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;