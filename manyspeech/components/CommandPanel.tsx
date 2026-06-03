import React, { useState, useEffect } from 'react';
import { usePageData } from '@rspress/core/runtime';
import { useI18n } from '../hooks/useI18n'; // 统一使用项目的 i18n Hook
import './CommandPanel.css';

const CommandPanel: React.FC = () => {
  const { page } = usePageData();
  const i18n = useI18n(); // 获取多语言翻译对象
  const [copySuccess, setCopySuccess] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  // 只在首页显示
  if (page.pageType !== 'home') return null;

  // 监听窗口宽度变化
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1000);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('manyspeech asr -t offline -i mic');
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  // 小屏幕时直接显示原始图片
  if (!isLargeScreen) {
    return (
      <img
        src="/manyspeech/manyspeech-icon-512.webp"
        alt="ManySpeech"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    );
  }

  // 大屏幕：显示命令行面板
  return (
    <aside className="command-panel">
      <div className="command-panel-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 17L10 11L4 5M12 19H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h3>{i18n.terminalTitle}</h3>
      </div>
      <div className="command-line">
        <span className="prompt">$</span>
        <code className="command-code">manyspeech asr -t offline -i mic</code>
        <button className="copy-button" onClick={handleCopy}>
          {copySuccess ? i18n.copied : i18n.copy}
        </button>
      </div>
      <div className="command-output">
        <p>{i18n.outputText}</p>
      </div>
      <div className="command-panel-footer">
        <img
          src="/manyspeech/manyspeech-icon-512.webp"
          alt="ManySpeech"
          className="footer-logo"
        />
        <span className="footer-text">ManySpeech CLI</span>
      </div>
    </aside>
  );
};

export default CommandPanel;