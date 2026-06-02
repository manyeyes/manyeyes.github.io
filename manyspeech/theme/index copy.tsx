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

// export * from '@rspress/core/theme-original';

import { Layout as BasicLayout } from '@rspress/core/theme-original';
import React from 'react';
import { usePageData } from '@rspress/core/runtime';
import ArticleList from '../components/ArticleList';

const Layout = () => {
  console.log('Custom theme loaded');
  const { page } = usePageData();
  const isHome = page.pageType === 'home';

  // 如果是首页，在页面底部添加 ArticleList
  return (
    <BasicLayout>
      {isHome && <ArticleList />}
    </BasicLayout>
  );
};

export default Layout;