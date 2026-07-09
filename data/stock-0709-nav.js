const STOCK_NAV_CONFIG_0709 = [
  {
    title: 'S 级标的',
    links: [
      { id: 's_sec1', label: '西部矿业' }
    ]
  },
  {
    title: 'A 级标的（上）',
    links: [
      { id: 'a_sec1', label: '雅化集团' },
      { id: 'a_sec2', label: '九号公司' },
      { id: 'a_sec3', label: '博源化工' },
      { id: 'a_sec4', label: '特锐德' },
      { id: 'a_sec5', label: '恒逸石化' },
      { id: 'a_sec6', label: '诺德股份' },
      { id: 'a_sec7', label: '嘉元科技' },
      { id: 'a_sec8', label: '乔锋智能' },
      { id: 'a_sec9', label: '三祥新材' },
      { id: 'a_sec10', label: '鼎龙股份' }
    ]
  },
  {
    title: 'A 级标的（下）',
    links: [
      { id: 'a_sec11', label: '浪潮信息' },
      { id: 'a_sec12', label: '锐捷网络' },
      { id: 'a_sec13', label: '藏格矿业' },
      { id: 'a_sec14', label: '国城矿业' },
      { id: 'a_sec15', label: '奥来德' },
      { id: 'a_sec16', label: '雷赛智能' },
      { id: 'a_sec17', label: '并行科技' },
      { id: 'a_sec18', label: '微导纳米' },
      { id: 'a_sec19', label: '晶方科技' },
      { id: 'a_sec20', label: '江丰电子' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 'summary_sec', label: '完整评级榜单' }
    ]
  }
];

function renderStockNav_0709() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  const navHtml = STOCK_NAV_CONFIG_0709.map(cat => `
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
