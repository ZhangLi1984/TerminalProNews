# 智研金融 Terminal Pro — 研报展示网页

数据驱动的静态站点。**每天发布只做两件事：生成当天的模块 JS + 把日期放进 `data/dates.js` 第一位。**
index.html / app.js / styles.css 都不需要为新日期改动。

---

## 一、目录结构

```
index.html          页面骨架（静态，日期无关，不要为新日期加 <script>）
css/styles.css      设计令牌 + 全部样式（改配色只改 :root / [data-theme="dark"]）
js/markdown.js      轻量 Markdown 渲染器（零依赖）
js/app.js           主逻辑：日期加载、Tab、目录、搜索、主题
js/_deprecated/     早期手写组件库，已无引用，仅留档
data/dates.js       日期列表；AVAILABLE_DATES[0] = 站点当前日期（唯一真值）
data/{模块}-{MMDD}-content.js   每天每模块一个文件
```

模块共 7 个：`decision` 决策内参 / `industry` 行业汇总 / `macro` 宏观 / `broker` 券商 /
`stock` 个股 / `jisilu` 集思录 / `futures` 期货。

---

## 二、数据契约

### v2（当前，推荐）—— 正文写 Markdown

```js
// data/decision-0720-content.js
registerReport('decision', '0720', {
  title: '2026-07-20 投资决策内参 | 全局新闻深度推演',
  subtitle: '投资决策内参',
  date: '2026-07-20',
  markdown: `## 一、核心摘要
- **核心主线**：……
`
});
```

- **不需要 nav 文件**：侧边目录由 `##` / `###` 标题自动生成。
- **不需要写 HTML / Tailwind 类**：排版全由 `css/styles.css` 统一负责，明暗主题都已适配。
- 文件由 `scripts/build_web_modules.js` 从当天的报告 Markdown 自动编译，**不要手工编辑**。

### v1（历史文件，只读兼容）

老文件定义全局函数 `render{Cap}Content_{MMDD}()` / `render{Cap}Nav_{MMDD}()`，
返回内联 Tailwind 类的 HTML。app.js 仍然认，`css/styles.css` 里有一层
「历史内容兼容层」负责把它们的观感对齐并适配暗色。**新报告不要再用这种格式。**

---

## 三、支持的 Markdown 写法

标准 GFM（标题 / 列表（可嵌套）/ 有序列表 / 表格（支持对齐）/ 引用 / 代码 / 链接 / 加粗）之外，另有两项增强：

**1. 涨跌自动着色**（A 股习惯：红涨绿跌）
`+14.35%` → 红；`-10.78%` → 绿；「涨停/净流入/超预期」「跌停/净流出/不及预期」同理。

**2. 提示块 callout**

````markdown
::: cio 半导体·预期差
市场一致预期 2026 年供给过剩，但我们认为 HBM 挤出效应被低估。
- 证伪指标：月度出货
:::
````

可用类型：`cio`（CIO 洞察）、`tip`、`info`、`risk`、`bull` 利好、`bear` 利空、
`hot` 热门话题、`target` 交易机会、`s` S 级标的、`a` A 级标的、`quote` 观点摘录。
`:::` 后的第一行是标题，省略则用类型默认名。

标题后可写 `{#自定义锚点}` 固定 id，一般不需要。

---

## 四、发布流程

```bash
# 1. 从当天的 .md 报告编译出模块（自动更新 dates.js）
node scripts/build_web_modules.js 2026-07-20 --prune

# 2. 自检（模块是否生成、JS 是否可解析、dates.js 是否正确）
node scripts/build_web_modules.js --verify 2026-07-20

# 3. 推送
git -C modules add -A
git -C modules commit -m "2026-07-20 update: decision+industry+macro+..."
git -C modules push --force-with-lease origin main
```

常用参数：`--only decision,macro` 只跑部分模块、`--dry-run` 预览、`--prune` 清理 100 天前的旧数据。

---

## 五、页面功能

| 功能 | 说明 |
|---|---|
| 日期切换 | 顶栏日期按钮，按月分组、可搜索；数据按需动态注入，不预加载 |
| 侧边目录 | 自动生成，滚动高亮当前小节；窄屏折叠为抽屉（左上角 ☰） |
| 全文搜索 | 顶栏搜索框（`⌘K`），高亮当前报告命中处，回车逐个跳转 |
| 明/暗主题 | 跟随系统，可手动切换并记忆；历史内容也已适配 |
| 阅读进度 | 顶栏底部进度条 + 右下角回到顶部 |
| 键盘 | `←/→` 或 `1–7` 切模块，`[` / `]` 切日期，`⌘K` 搜索，`Esc` 清空 |
| 深链 | `#tab=stock&date=2026-07-16` 可直接定位 |
| 打印 | 顶栏打印按钮，导出时自动去掉导航与背景 |
| 空模块提示 | 当天没有数据的 Tab 会置灰并标点 |

---

## 六、改动须知

- **配色/字号**：只改 `css/styles.css` 顶部的 `:root` 与 `[data-theme="dark"]` 变量。
- **加模块**：在 `index.html` 补一组 `{mod}-doc` / `{mod}-content` / `{mod}-nav-content` 容器，
  在 `js/app.js` 的 `TABS`、`TAB_LABELS` 与 `scripts/build_web_modules.js` 的 `MODULES` 各加一项。
- **禁止**：在 `app.js` 里写 `if (date === '...')` 分支；为新日期手工往 `index.html` 加 `<script>`；
  手工同步多处日期（当前日期只由 `data/dates.js` 的第一项决定）。
