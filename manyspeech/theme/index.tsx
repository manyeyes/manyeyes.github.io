import './index.css';

import { Layout as BasicLayout, HomeLayout as BasicHomeLayout, HomeHero as BasicHomeHero } from '@rspress/core/theme-original';
import type { HomeHeroProps } from '@rspress/core/theme-original';
import React from 'react';
import { usePageData, useLocation } from '@rspress/core/runtime';
import NewsList from './components/NewsList';
import CommandPanel from '../components/CommandPanel';

// 全局布局（保持不变）
const Layout = () => {
  return <BasicLayout />;
};

// 首页布局（保持不变）
const HomeLayout = () => {
  return (
    <BasicHomeLayout
      afterFeatures={<NewsList />}
    />
  );
};

// 自定义 Hero 组件：替换默认的 image 区域为 CommandPanel
const HomeHero = (props: HomeHeroProps) => {
  return (
    <BasicHomeHero
      {...props}
      image={<CommandPanel />}
    />
  );
};

// 导出覆盖后的组件
export { Layout, HomeLayout, HomeHero };
export * from '@rspress/core/theme-original';