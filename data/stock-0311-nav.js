// ==========================================
// 个股研报导航 - 2026 年 3 月 11 日
// ==========================================

const STOCK_NAV_CONFIG_0311 = [
  {
    title: '核心摘要',
    links: [
      { id: 's_sec1', label: '评级概览' }
    ]
  },
  {
    title: 'S 级标的',
    links: [
      { id: 's_sec2', label: '思源电气' },
      { id: 's_sec3', label: '佛塑科技' },
      { id: 's_sec4', label: '涛涛车业' },
      { id: 's_sec5', label: '新乳业' },
      { id: 's_sec6', label: '华泰证券' }
    ]
  },
  {
    title: 'A 级标的',
    links: [
      { id: 's_sec7', label: '瑞芯微' },
      { id: 's_sec8', label: '石头科技' },
      { id: 's_sec9', label: '伟明环保' },
      { id: 's_sec10', label: '鹏鼎控股' },
      { id: 's_sec11', label: '更多 A 级' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec12', label: '完整评级汇总表' }
    ]
  }
];

function renderStockNav_0311() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0311.map(section => `
    <div class="nav-section">
      <h4 class="text-xs font-black text-purple-500 uppercase tracking-widest mb-3">${section.title}</h4>
      <div class="space-y-1.5">
        ${section.links.map(link => `
          <button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}')"
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
