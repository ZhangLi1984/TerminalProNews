// ==========================================
// 个股研报导航配置 - 2026 年 3 月 27 日
// ==========================================

const STOCK_NAV_CONFIG_0327 = [
  {
    title: '核心评级',
    links: [
      { id: 'sec1', label: '核心摘要' },
      { id: 'sec2', label: 'S 级标的 (5 只)' },
      { id: 'sec3', label: 'A 级标的 (12 只)' }
    ]
  },
  {
    title: 'S 级深度剖析',
    links: [
      { id: 'sec4', label: '紫金矿业 (9.2 分)' },
      { id: 'sec5', label: '海星股份 (9.0 分)' },
      { id: 'sec6', label: '若羽臣 (8.8 分)' },
      { id: 'sec7', label: '协创数据 (8.7 分)' },
      { id: 'sec8', label: '深南电路 (8.6 分)' }
    ]
  },
  {
    title: 'A 级重点叙述',
    links: [
      { id: 'sec9', label: '华勤技术' },
      { id: 'sec10', label: '万辰集团' },
      { id: 'sec11', label: '山金国际' },
      { id: 'sec12', label: '卫星化学' },
      { id: 'sec13', label: '金山办公' },
      { id: 'sec14', label: '中国人寿' },
      { id: 'sec15', label: '麦加芯彩' },
      { id: 'sec16', label: '华阳股份' },
      { id: 'sec17', label: '景津装备' },
      { id: 'sec18', label: '陕西旅游' },
      { id: 'sec19', label: '海螺水泥' },
      { id: 'sec20', label: '民爆光电' }
    ]
  },
  {
    title: '完整评级汇总',
    links: [
      { id: 'sec21', label: '评级汇总表' },
      { id: 'sec22', label: '评级方法论' }
    ]
  }
];

function renderStockNav_0327() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0327.map(section => `
    <div class="nav-section">
      <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">${section.title}</h4>
      <nav class="space-y-0.5">
        ${section.links.map(link => `
          <button onclick="scrollToSection('stock-doc', '${link.id}')"
            data-section="${link.id}"
            class="nav-btn w-full text-left px-2 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 group-hover:bg-red-400 transition-colors"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
