import './index.css';

export * from '@rspress/core/theme-original';


// // theme/index.tsx
// import { HomeLayout as BasicHomeLayout } from '@rspress/core/theme-original';
// import ArticleList from '../components/ArticleList'; // 你的文章列表组件

// export default function HomeLayout() {
//   return (
//     <BasicHomeLayout
//       afterFeatures={<ArticleList />} // 通过 afterFeatures 插槽插入你的组件
//     />
//   );
// }

// // theme/index.tsx
// import { HomeLayout as BasicHomeLayout } from '@rspress/core/theme-original';
// import NewsList from './components/NewsList'; // 导入我们的新闻列表组件

// // 定义一个自定义的 HomeLayout，它包裹了 Rspress 原有的首页布局
// const HomeLayout = () => {
//   return (
//     <>
//       {/* 保留原有的首页核心功能，并通过 afterFeatures 插槽插入新闻列表 */}
//       <BasicHomeLayout afterFeatures={<NewsList />} />
//     </>
//   );
// };

// // 导出我们的自定义布局，用于覆盖默认布局
// export { HomeLayout as Layout };

// // 重新导出其他所有默认主题组件，确保主题其他部分正常工作
// export * from '@rspress/core/theme-original';

// theme/index.tsx
import { Layout as BasicLayout, HomeLayout as BasicHomeLayout } from '@rspress/core/theme-original';
import React from 'react';
import { usePageData, useLocation } from '@rspress/core/runtime';
import NewsList from './components/NewsList';  // 您的新闻列表组件
// 如果有其他全局组件，也导入...

// 全局布局（所有页面共享，包括导航栏、页脚等）
const Layout = () => {
  // 如果需要其他全局逻辑（如 banner、beforeNav 等），可在此添加
  return <BasicLayout />;
};

// 首页布局：使用 BasicHomeLayout 并利用插槽 afterFeatures 插入新闻列表
const HomeLayout = () => {
  return (
    <BasicHomeLayout
      afterFeatures={<NewsList />}   // 在 Features 区域之后显示新闻列表
    />
  );
};

// 导出：默认导出 Layout（会被自动用作全局布局），同时导出 HomeLayout（覆盖首页布局）
export { Layout, HomeLayout };

// 重新导出所有默认主题组件，确保其他功能正常
export * from '@rspress/core/theme-original';