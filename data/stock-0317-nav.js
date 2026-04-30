// truncated=================================
// 个股研报导航模块 - 2026-03-17
// ==========================================

const STOCK_NAV_CONFIG_0317 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心摘要' }
    ]
  },
  {
    title: 'A 级标的',
    links: [
      { id: 'sec2', label: '滨江集团' },
      { id: 'sec3', label: '智家' },
      { id: 'sec4', label: '崇德科技' },
      { id: 'sec5', label: '宁德时代' },
      { id: 'sec6', label: '同力股份' },
      { id: 'sec7', label: '中触媒' },
      { id: 'sec8', label: '迈普医学' },
      { id: 'sec9', label: '彤程新材' },
      { id: 'sec10', label: '安孚科技' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 'sec11', label: '完整评级表' },
      { id: 'sec12', label: '评级说明' }
    ]
  }
];

function renderStockNav_0317() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0317.map(section => `
    <div class="nav-section">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('stock', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-purple-400 transition-colors mr-2.5"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
