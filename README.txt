AEVEMORA V8.3 · 时间环启动动画版

本次只升级品牌启动动画，其他测试与结果功能保持 V8.2 不变。

新启动流程：
1. 黑金背景中出现时间环
2. 外环/内环绘制并缓慢旋转
3. 金色弧线像时间刻度扫过
4. 中心光点出现
5. 一条金色横线展开
6. AEVEMORA 从模糊到清晰渐显
7. 下方出现 HISTORICAL ARCHETYPE
8. 整体淡出进入首页

总时长约 1.85 秒，兼顾品牌感和打开速度。
支持 prefers-reduced-motion，系统减少动画时会自动显示静态版本。

GitHub 更新：
覆盖仓库根目录中的：
index.html
sw.js
manifest.webmanifest
icon-192.png
icon-512.png
apple-touch-icon.png

首次建议：
https://xuqinyu2123-cmd.github.io/historia-test/?v=8.3
