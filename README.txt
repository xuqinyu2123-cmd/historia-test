HISTORIA · 手机 H5 / PWA 成品版 V4

本版是在 V3（120 位人物 / 36 题 / 中国/外国/混合模式 / 分享海报）的基础上封装的手机端正式版。

新增功能：
1. 手机端 H5 专项布局
   - 100svh 首屏
   - 底部固定开始按钮
   - 触控区域与安全区适配
   - 更接近小红书 / 抖音测试页的移动端视觉节奏

2. 启动页
   - 打开页面时显示 HISTORIA 启动动画
   - 安装为 PWA 后也会以独立应用窗口启动

3. “添加到桌面”
   - Android Chrome / Edge：HTTPS 部署后可触发系统安装
   - iPhone / iPad：提供 Safari“分享 → 添加到主屏幕”引导
   - 已配置 manifest、图标、iOS PWA meta

4. 离线支持
   - sw.js 会缓存核心文件
   - 第一次在线加载后，PWA 可在无网络情况下继续打开
   - 注意：Service Worker 只能在 HTTPS 或 localhost 下工作，直接 file:// 双击时不会启用

5. 分享
   - 手机支持系统分享面板
   - 部署为网址后可直接分享链接
   - 原有测试结果 PNG 海报功能保留

文件：
- index.html
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png
- apple-touch-icon.png

本地电脑预览：
双击 index.html 即可测试主要页面和答题功能。

真正“添加到桌面 / PWA 安装”：
需要把整个文件夹部署到 HTTPS 网站（如 GitHub Pages / Netlify / Vercel / 自己的 HTTPS 服务器）。
