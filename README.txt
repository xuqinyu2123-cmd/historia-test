AEVEMORA V9.1 · 答题页视觉修正版

修复你截图中两个明确问题：

1. 左侧人物为什么变成了抽象人头
V9.0 为了保证本地加载，我临时用了手工 SVG 占位雕塑，所以实际效果和概念图差距很大。
V9.1 已改为从确认过的最终概念视觉中裁出的高质量古典雕塑素材 dossier-statue.jpg。

2. 为什么题目往后背景没变化
V9.0 的逻辑写成 Math.floor(index/6)，因此第 1~6 题共用同一张背景。
V9.1 改成 index % 6：
Q1 背景1
Q2 背景2
Q3 背景3
Q4 背景4
Q5 背景5
Q6 背景6
Q7 再从背景1开始循环
所以现在每点击“下一题”，背景都会变化。

左侧 dossier 文案仍保持每 6 题切换一个章节，这部分不会每题乱跳。

另外：
- 提高了历史背景可见度，不会再接近纯黑。
- 背景切换增加淡出/淡入过渡。
- 雕塑区域重新调了裁切、对比度和暗角。
- V8.9 的结果页与分享海报继续保留。

GitHub 需要覆盖：
index.html
sw.js
manifest.webmanifest
icon-192.png
icon-512.png
apple-touch-icon.png
dossier-statue.jpg
quiz-bg-1.svg
quiz-bg-2.svg
quiz-bg-3.svg
quiz-bg-4.svg
quiz-bg-5.svg
quiz-bg-6.svg

注意：V9.1 不再需要 dossier-statue.svg；如果仓库里还有这个旧文件，留着也不会被调用，但可以删除。

首次测试：
https://xuqinyu2123-cmd.github.io/historia-test/?v=9.1
