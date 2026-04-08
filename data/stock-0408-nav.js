// ==========================================
// 个股研报导航配置 - 2026 年 4 月 8 日
// ==========================================

const STOCK_NAV_CONFIG_0408 = [
  {
    title: 'S 级标的',
    links: [
      { id: 's_sec1', label: '洛阳钼业' },
      { id: 's_sec2', label: '春立医疗' },
      { id: 's_sec3', label: '璞泰来' }
    ]
  },
  {
    title: 'A 级标的',
    links: [
      { id: 'a_sec1', label: '兖矿能源' },
      { id: 'a_sec2', label: '鹏鼎控股' },
      { id: 'a_sec3', label: '赣锋锂业' },
      { id: 'a_sec4', label: '振江股份' },
      { id: 'a_sec5', label: '安琪酵母' },
      { id: 'a_sec6', label: '亿纬锂能' },
      { id: 'a_sec7', label: '中国广核' },
      { id: 'a_sec8', label: '三环集团' },
      { id: 'a_sec9', label: '东鹏饮料' },
      { id: 'a_sec10', label: '安井食品' },
      { id: 'a_sec11', label: '东方财富' },
      { id: 'a_sec12', label: '千里科技' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 'summary_sec', label: '完整榜单' },
      { id: 'advice_sec', label: '配置建议' }
    ]
  }
];

function renderStockNav_0408() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  const navHtml = STOCK_NAV_CONFIG_0408.map(cat => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${cat.title}</h3>
      <div class="space-y-1">
        ${cat.links.map(link => `
          <button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
            data-section="${link.id}"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition-all flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors ${link.id.startsWith('s_sec') ? 'bg-purple-500' : link.id.startsWith('a_sec') ? 'bg-blue-500' : 'bg-transparent group-hover:bg-slate-300'}"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = navHtml;
}
