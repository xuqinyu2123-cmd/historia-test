AEVEMORA V9.3.1 · GitHub 网页上传精简版

这是 V9.3 多文明动态答题版的功能等价精简版本。

解决的问题：
GitHub 网页端一次上传最多 100 个文件，而 V9.3 加上 120 张人物肖像后超过限制。

处理方式：
- 120 张人物肖像全部内嵌到 index.html
- 删除 portraits/ 文件夹
- 多文明 backgrounds/ 与 dossiers/ 继续保留
- 答题、结果页、Top5、海报、人物肖像等功能保持不变

当前项目文件总数：49

GitHub 上传：
直接把本目录里的全部内容拖到仓库根目录即可，一次上传就能完成。

首次测试：
https://xuqinyu2123-cmd.github.io/historia-test/?v=9.3.1
