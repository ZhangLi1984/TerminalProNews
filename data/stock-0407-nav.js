// truncated=================================
// 个股研报导航配置 - 2026 年 4 月 7 日
// ==========================================

const STOCK_NAV_CONFIG_0407 = [
  {
    title: 'S 级标的',
    links: [
      { id: 's_sec1', label: '暂无 S 级' }
    ]
  },
  {
    title: 'A 级标的',
    links: [
      { id: 's_sec2', label: '洛阳钼业' },
      { id: 's_sec3', label: '春立医疗' },
      { id: 's_sec4', label: '理邦仪器' },
      { id: 's_sec5', label: '盛合晶微' }
    ]
  },
  {
    title: 'B 级标的',
    links: [
      { id: 's_sec6', label: '华域汽车' },
      { id: 's_sec7', label: '三环集团' },
      { id: 's_sec8', label: '东鹏饮料' },
      { id: 's_sec9', label: '开特股份' },
      { id: 's_sec10', label: '中国广核' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec11', label: '完整榜单' },
      { id: 's_sec12', label: '配置建议' }
    ]
  }
];

function renderStockNav_0407() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  const navHtml = STOCK_NAV_CONFIG_0407.map(cat => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${cat.title}</h3>
      <div class="space-y-1">
        ${cat.links.map(link => `
          <button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
            data-section="${link.id}"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition-all flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors ${link.id === 's_sec2' ? 'bg-blue-500' : 'bg-transparent group-hover:bg-slate-300'}"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = navHtml;
}
