import React from 'react';
import { HomeHero as OriginalHomeHero } from '@rspress/core/theme-original';

// 自定义图片区域
function CustomImage() {
  return (
    <div style={{
      width: '100%',
      height: 280,
      background: 'linear-gradient(135deg, #409eff 0%, #667eea 100%)',
      borderRadius: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 20,
    }}>
      ✅ 官方标准自定义模块
    </div>
  );
}

// 官方 Wrap 模式：包装原组件，修改 props
export function CustomHomeHero(props: any) {
  const { hero = {}, ...rest } = props;

  // 如果开启 customImage，覆盖原生的 image
  const customHero = {
    ...hero,
    image: hero.customImage ? null : hero.image,
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* 原始组件 */}
      <OriginalHomeHero {...rest} hero={customHero} />

      {/* 自定义组件渲染在图片位置 */}
      {hero.customImage && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '50%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CustomImage />
        </div>
      )}
    </div>
  );
}