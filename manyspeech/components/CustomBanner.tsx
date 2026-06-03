import React from 'react'
export default function CustomBanner() {
  return (
    <div className="my-custom-banner">
      {/* 自定义内容：轮播/视频/多图/表单等任意DOM */}
      <video src="/banner.mp4" autoPlay muted loop />
      <p>自定义首页模块</p>
    </div>
  )
}