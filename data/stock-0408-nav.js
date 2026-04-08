// ==========================================
// 智研金融 Terminal Pro - 个股研报导航 2026-04-08
// ==========================================

const STOCK_NAV_CONFIG_0408 = [
  {
    title: '重点标的',
    links: [
      { id: 's_sec1', label: 'S 级标的' },
      { id: 's_sec2', label: 'A 级标的' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec3', label: '机构评级' },
      { id: 's_sec4', label: '业绩快报' }
    ]
  },
  {
    title: '主题追踪',
    links: [
      { id: 's_sec5', label: '连板股' },
      { id: 's_sec6', label: '复牌股' }
    ]
  }
];

function renderStockNav_0408() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0408.map(section => `
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
