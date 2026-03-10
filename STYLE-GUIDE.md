# PPT 风格指南

## 布局规范
- **不要**把内容挤在屏幕正中间一小块
- 内容应该**占满 70-80% 的可视区域**
- 标题在顶部（距顶 80-100px）
- 内容区往上靠，利用整个高度

## 字号规范
- 页面标题：**56-64px**，font-weight 700
- 卡片标题/小标题：**24-28px**
- 正文/列表项：**20-24px**
- 次要文字（source、date）：**16px**
- 代码：**16-18px**

## 间距规范
- slide padding：**60px 80px**（比现在的小一点，内容可以更大）
- 卡片间距：**30-40px**
- 列表项间距：**16-20px**

## 颜色使用（CSS 变量）
- 主蓝：var(--accent-blue) #3B82F6
- 警告红：var(--accent-red) #EF4444
- 成功绿：var(--accent-green) #10B981
- 强调黄：var(--accent-amber) #F59E0B
- 主文字：var(--text-primary) #0F172A
- 次文字：var(--text-secondary) #64748B
- 背景：var(--bg-primary) #F8FAFC

## 卡片样式
- 圆角：16px
- 阴影：0 1px 3px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.05)
- 顶部彩色边：4px solid [accent color]

## 禁止
- 内容集中在屏幕中央一小块
- 字号小于 18px（次要信息除外）
- 下半屏大片空白

## 文件位置
- HTML：~/Projects/agent-skills-ppt/index.html
- CSS：~/Projects/agent-skills-ppt/css/theme.css
- 讲稿：~/Desktop/skill-workshop-research/25-full-script-final.md

## Git
每完成一个改动就 commit
