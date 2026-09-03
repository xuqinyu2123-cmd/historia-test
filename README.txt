HISTORIA V6.1 · 缓存修复版

为什么你部署 V6 后仍看到旧的剪影页面：
上一版 Service Worker 对 index.html 使用了 cache-first。
因此 GitHub Pages 已经更新成功，但浏览器仍可能优先读取旧缓存的 V5 页面。

V6.1 修复：
- HTML 页面改为 network-first
- 每次打开优先读取 GitHub Pages 上的最新 index.html
- 新 Service Worker 接管后自动刷新一次
- 旧缓存会在 activate 阶段自动删除
- 人物真实肖像 / 历史画像系统保持不变

上传 GitHub 时覆盖：
index.html
sw.js
manifest.webmanifest
icon-192.png
icon-512.png
apple-touch-icon.png

上传后首次请打开：
https://xuqinyu2123-cmd.github.io/historia-test/?v=6.1

这个带 ?v=6.1 的地址会绕开旧缓存键。新 Service Worker 接管后，以后再打开原网址即可。
