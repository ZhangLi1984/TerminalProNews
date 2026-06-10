// ==========================================
// 期货市场导航 - 2026年6月10日
// ==========================================

const FUTURES_NAV_CONFIG_0610 = [
  {
    title: '市场行情',
    links: [
      { id: 'f_sec1', label: '主要品种行情' },
      { id: 'f_sec2', label: '板块涨跌概览' }
    ]
  },
  {
    title: '品种分析',
    links: [
      { id: 'f_sec3', label: '能源化工' },
      { id: 'f_sec4', label: '有色金属' },
      { id: 'f_sec5', label: '黑色系' },
      { id: 'f_sec6', label: '农产品' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'f_sec7', label: '做多机会' },
      { id: 'f_sec8', label: '做空机会' },
      { id: 'f_sec9', label: '风险提示' }
    ]
  }
];

function renderFuturesNav_0610() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  container.innerHTML = FUTURES_NAV_CONFIG_0610.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <ul class="space-y-1">
        ${section.links.map(link => `
          <li>
            <a href="#${link.id}" data-section="${link.id}" class="nav-btn block px-3 py-2 text-sm rounded-lg text-slate-700 hover:bg-slate-100 transition-colors" onclick="updateActiveNav('${link.id}')">
              <div class="flex items-center">
                <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
                <span>${link.label}</span>
              </div>
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
