// ==========================================
// 个股研报导航配置 - 2026 年 3 月 23 日
// ==========================================

const STOCK_NAV_CONFIG_0323 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '今日概览' }
    ]
  },
  {
    title: 'A 级标的',
    links: [
      { id: 'sec2', label: '藏格矿业 (8.5 分)' },
      { id: 'sec3', label: '工业富联 (8.5 分)' },
      { id: 'sec4', label: '万辰集团 (8.0 分)' },
      { id: 'sec5', label: '海通发展 (8.0 分)' },
      { id: 'sec6', label: '香农芯创 (8.0 分)' },
      { id: 'sec7', label: '比亚迪 (8.0 分)' },
      { id: 'sec8', label: '亚虹医药 (7.5 分)' },
      { id: 'sec9', label: '中材科技 (7.5 分)' },
      { id: 'sec10', label: '航天电器 (7.5 分)' },
      { id: 'sec11', label: '中国汽研 (7.5 分)' },
      { id: 'sec12', label: '湘财股份 (7.0 分)' },
      { id: 'sec13', label: '中国巨石 (7.0 分)' },
      { id: 'sec14', label: '璞泰来 (7.0 分)' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 'sec15', label: '完整评级表' },
      { id: 'sec16', label: '评级分布' },
      { id: 'sec17', label: '重点赛道' }
    ]
  }
];

function renderStockNav_0323() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0323.map(section => `
    <div class="nav-section">
      <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">${section.title}</h4>
      <ul class="space-y-0.5">
        ${section.links.map(link => `
          <li>
            <button onclick="scrollToSection('stock', '${link.id}')"
              class="nav-btn w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors duration-150 text-slate-700 hover:bg-slate-100 hover:text-slate-900 truncate"
              data-section="${link.id}">
              ${link.label}
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
