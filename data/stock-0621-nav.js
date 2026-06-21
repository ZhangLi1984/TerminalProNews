// ==========================================
// 个股研报导航 - 2026 年 6 月 21 日
// ==========================================

const STOCK_NAV_CONFIG_0621 = [
  {
    title: '核心摘要',
    links: [
      { id: 's_sec1', label: '评级概览' }
    ]
  },
  {
    title: 'S 级标的',
    links: [
      { id: 's_sec2', label: '海思科' },
      { id: 's_sec3', label: '联瑞新材' }
    ]
  },
  {
    title: 'A 级标的 - AI算力',
    links: [
      { id: 's_sec4', label: '同星科技' },
      { id: 's_sec5', label: '航天电器' },
      { id: 's_sec6', label: '杰华特' },
      { id: 's_sec7', label: '芯原股份' }
    ]
  },
  {
    title: 'A 级标的 - 高端材料',
    links: [
      { id: 's_sec8', label: '瑞联新材' },
      { id: 's_sec9', label: '钧达股份' },
      { id: 's_sec10', label: '隆华科技' },
      { id: 's_sec11', label: '泛亚微透' }
    ]
  },
  {
    title: 'B 级标的',
    links: [
      { id: 's_sec12', label: '上海银行' },
      { id: 's_sec13', label: '兰花科创' },
      { id: 's_sec14', label: '城发环境' },
      { id: 's_sec15', label: '其他B级标的' }
    ]
  },
  {
    title: '附录',
    links: [
      { id: 's_sec16', label: '完整评级汇总表' }
    ]
  }
];

function renderStockNav_0621() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0621.map(section => `
    <div class="nav-section">
      <h4 class="text-xs font-black text-purple-500 uppercase tracking-widest mb-3">${section.title}</h4>
      <div class="space-y-1.5">
        ${section.links.map(link => `
          <button onclick="scrollToSection('stock', '${link.id}'); updateActiveNav('${link.id}')"
                  data-section="${link.id}"
                  class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 transition-all duration-200 flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-purple-400"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
