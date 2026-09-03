HISTORIA V8.0 · FINAL RELEASE

这是当前整合后的最终发行版，可直接替换现有 GitHub Pages 版本。

核心功能
- 36 道情境题
- 120 位中外历史人物原型
- 中国 / 外国 / 中外混合模式
- 六维行为向量与雷达图
- Top 5 历史原型
- 真实历史人物肖像 / 历史画像
- 杂志式结果页
- 真实肖像分享海报
- 手机 H5 / PWA / 添加到桌面
- 查看上次结果
- 关于测试 / 隐私说明 / 图片与资料来源

人物肖像性能优化
- Wikipedia 查询使用轻量 pageimages 接口
- 主肖像优先 640px 缩略图
- 最后 6 题提前预加载高概率候选人物
- 第 35 题额外预加载当前第一名候选
- Top 5 延迟加载，不抢主肖像带宽
- 人物 -> 图片地址在浏览器中缓存 30 天
- Service Worker 直接缓存 Wikipedia API 与 Wikimedia 图片
- 外部图片第一次成功加载后，后续同一资源优先本地缓存
- 主肖像 3.2 秒超时自动回退，不会长期卡在加载状态
- HTML 仍使用 network-first，今后更新版本不会再次长期卡旧缓存

GitHub 替换方法
直接把下面 6 个文件覆盖到 historia-test 仓库根目录：
index.html
sw.js
manifest.webmanifest
icon-192.png
icon-512.png
apple-touch-icon.png

提交后等待 GitHub Pages 部署变为绿色勾。

首次访问推荐：
https://xuqinyu2123-cmd.github.io/historia-test/?v=8.0

之后继续使用原网址即可：
https://xuqinyu2123-cmd.github.io/historia-test/

长期正式商用建议
当前 V8 已尽可能降低 Wikipedia / Wikimedia 外链的首次载入成本，并将成功加载后的资源缓存在用户设备上。
若未来访问量较大，最彻底的性能方案仍是将 120 张已确认授权的 WebP/AVIF 人物肖像放入你自己的站点 portraits/ 目录，实现完全自托管。
