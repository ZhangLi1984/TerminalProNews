# 智研金融 Terminal Pro - 模块化项目结构

## 项目说明

这是一个基于原生 HTML/CSS/JavaScript 和 Tailwind CSS 的金融行业研报展示平台。项目采用模块化设计，方便后续内容拓展和维护。

## 目录结构

```
modules/
├── index.html              # 主入口文件
├── css/
│   └── styles.css         # 自定义样式（动画、滚动条等）
└── js/
    ├── utils.js           # 工具函数库（图标、辅助函数）
    ├── components.js      # 通用 UI 组件库
    ├── decision-nav.js    # 投资决策内参 - 导航配置
    ├── decision-content.js # 投资决策内参 - 内容渲染
    ├── industry-nav.js    # 行业汇总 - 导航配置
    ├── industry-content.js # 行业汇总 - 内容渲染
    └── app.js             # 主应用入口（状态管理、初始化）
```

## 模块说明

### 1. 工具函数 (utils.js)
- **Icons**: SVG 图标映射表，包含所有用到的图标
- **createIcon()**: 创建 SVG 图标元素
- **createElement()**: 创建 HTML 元素
- **joinHTML()**: 数组转 HTML 字符串
- **scrollToElement()**: 平滑滚动到指定元素
- **formatTime()**: 格式化时间
- **updateClock()**: 更新时钟显示

### 2. UI 组件库 (components.js)
可复用的 UI 组件，所有组件都返回 HTML 字符串：

| 组件名 | 说明 | 参数 |
|--------|------|------|
| `InteractiveCard` | 交互卡片，带悬停效果 | children, className, onClick |
| `SectionHeader` | 章节标题，带图标 | title, icon |
| `DateSeparator` | 日期分割线 | date, isLatest |
| `PolicyCard` | 政策卡片 | category, title, stocks |
| `NewsItem` | 新闻条目 | text, impact, focus, isNegative, isNeutral |
| `TimelineItem` | 时间线条目 | time, event, level |
| `LogicFlowCard` | 逻辑流程卡片 | title, steps, result, color |
| `TrackCard` | 赛道追踪卡片 | title, logic, stocks, children |
| `SecondaryPlayCard` | 二阶博弈卡片 | event, result, logic, cognitive, stocks |
| `TableRow` | 表格行（估值监测） | name, change, trend, phase, val, stocks |
| `TableRow2` | 表格行（大宗商品） | name, price, trend, isUp, isDown, desc, stocks |

### 3. 文档模块

#### 投资决策内参 (decision-*.js)
- `decision-nav.js`: 导航配置（全局视野、S 级推演、A 级事件等）
- `decision-content.js`: 内容渲染函数
  - `renderCoreSummary()`: 核心摘要
  - `renderSMajorEvents()`: S 级重大事件
  - `renderANews()`: A 级重要新闻
  - `renderHotTracks()`: 热点赛道追踪
  - `renderCrossTrackAnalysis()`: 跨赛道分析
  - `renderRiskControl()`: 风控与日程

#### 行业汇总 (industry-*.js)
- `industry-nav.js`: 导航配置（确信推荐、深度挖掘、数据追踪）
- `industry-content.js`: 内容渲染函数
  - `renderHighWinRateTracks()`: 高胜率赛道
  - `renderCoreAssets()`: 底仓资产
  - `renderSecondaryPlays()`: 二阶博弈
  - `renderContrarianPlays()`: 困境反转
  - `renderCommoditiesTable()`: 大宗商品表格
  - `renderValuationTable()`: 估值监测表格
  - `renderDivergencePoints()`: 分歧点说明
  - `renderSummary()`: 配置总结

### 4. 主应用 (app.js)
- **AppState**: 应用状态管理
- **updateActiveNav()**: 更新活动导航项
- **switchTab()**: 切换文档 Tab
- **initTabs()**: 初始化 Tab 事件
- **initClock()**: 初始化时钟
- **initScrollSpy()**: 初始化滚动监听
- **initApp()**: 应用入口

## 拓展指南

### 添加新的文档类型

1. 创建导航配置文件 `js/newdoc-nav.js`:
```javascript
const NEWDOC_NAV_CONFIG = [
  { title: '分组标题', links: [{ id: 'sec1', label: '章节名' }] }
];

function renderNewdocNav() {
  const container = document.getElementById('newdoc-nav-content');
  if (!container) return;
  container.innerHTML = NEWDOC_NAV_CONFIG.map(...).join('');
}
```

2. 创建内容渲染文件 `js/newdoc-content.js`:
```javascript
function renderNewdocContent() {
  return `
    ${DateSeparator({ date: '2026-03-04', isLatest: true })}
    <div class="space-y-3 mb-8 text-center">...</div>
    <div class="space-y-10">
      ${renderSection1()}
      ${renderSection2()}
    </div>
  `;
}
```

3. 在 `index.html` 中添加新的文档容器和脚本引用

4. 在 `app.js` 中添加渲染函数和 Tab 切换逻辑

### 添加新的 UI 组件

在 `js/components.js` 中添加新组件函数：

```javascript
function NewComponent({ prop1, prop2, children }) {
  return InteractiveCard({
    className: 'custom-class',
    children: `
      <div class="...">${prop1}</div>
      <div class="...">${prop2}</div>
      ${children}
    `
  });
}
```

### 添加新的图标

在 `js/utils.js` 的 `Icons` 对象中添加 SVG 路径：

```javascript
const Icons = {
  // ...现有图标
  NewIcon: '<path d="..." />'  // 只需添加路径数据
};
```

## 技术特点

- **零依赖**: 仅使用 Tailwind CDN，无需构建工具
- **模块化**: 每个功能独立成文件，便于维护
- **组件化**: 可复用的 UI 组件，提高开发效率
- **响应式**: 完美支持桌面和移动端
- **高性能**: 原生 JS，无框架开销

## 使用方法

直接用浏览器打开 `modules/index.html` 即可预览。

如需本地开发，可使用任意 HTTP 服务器：
```bash
# Python 3
python -m http.server 8000

# Node.js (需安装 http-server)
npx http-server -p 8000
```

然后访问 `http://localhost:8000/modules/index.html`
