// truncated=================================
// 智研金融 Terminal Pro - 期货市场导航 2026-04-08
// ==========================================

const FUTURES_NAV_CONFIG_0408 = [
  {
    title: '行情追踪',
    links: [
      { id: 'f_sec1', label: '能源化工' },
      { id: 'f_sec2', label: '有色金属' }
    ]
  },
  {
    title: '品种分析',
    links: [
      { id: 'f_sec3', label: '原油策略' },
      { id: 'f_sec4', label: '黄金策略' },
      { id: 'f_sec5', label: '电解铝' }
    ]
  },
  {
    title: '交易机会',
    links: [
      { id: 'f_sec6', label: '做多机会' },
      { id: 'f_sec7', label: '做空机会' }
    ]
  }
];

function renderFuturesNav_0408() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0408.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('${link.id}')" class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent inline-block mr-2"></div>${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
