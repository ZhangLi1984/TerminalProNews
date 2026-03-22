// ==========================================
// Stock Nav Config: 2026-03-22
// ==========================================

const STOCK_NAV_CONFIG_0322 = [
  {
    title: 'A 级标的',
    links: [
      { id: 'sec1', label: '深南电路 (002916)' },
      { id: 'sec2', label: '万辰集团 (300972)' },
      { id: 'sec3', label: '璞泰来 (603659)' },
      { id: 'sec4', label: '宝丰能源 (600989)' },
      { id: 'sec5', label: '福耀玻璃 (600660)' },
      { id: 'sec6', label: '上海新阳 (300236)' },
      { id: 'sec7', label: '中国中免 (601888)' },
      { id: 'sec8', label: '焦点科技 (002315)' }
    ]
  },
  {
    title: 'B 级精选',
    links: [
      { id: 'sec9', label: 'B 级标的精选' }
    ]
  },
  {
    title: 'C 级风险',
    links: [
      { id: 'sec10', label: 'C 级标的风险提示' }
    ]
  },
  {
    title: '完整评级',
    links: [
      { id: 'sec11', label: '完整评级汇总表' }
    ]
  }
];

function renderStockNav_0322() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  let html = '';
  STOCK_NAV_CONFIG_0322.forEach((category, idx) => {
    html += `
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center">
          <span class="w-2 h-2 rounded-full bg-purple-600 mr-2"></span>
          ${category.title}
        </h3>
        <div class="space-y-2">
          ${category.links.map(link => `
            <a href="#stock-${link.id}" class="block px-3 py-2 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors duration-200">
              ${link.label}
            </a>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}
