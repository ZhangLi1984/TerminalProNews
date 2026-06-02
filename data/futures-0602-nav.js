// ==========================================
// 期货市场 - 导航配置 (2026-06-02)
// ==========================================

const FUTURES_NAV_CONFIG_0602 = [
  {
    title: '品种概览',
    links: [
      { id: 'f_sec1', label: '板块行情' },
      { id: 'f_sec2', label: '有色金属' },
      { id: 'f_sec3', label: '能源化工' },
      { id: 'f_sec4', label: '农产品' },
      { id: 'f_sec5', label: '黑色金属' }
    ]
  },
  {
    title: '策略分析',
    links: [
      { id: 'f_sec6', label: '交易机会' },
      { id: 'f_sec7', label: '风险提示' }
    ]
  }
];

function renderFuturesNav_0602() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0602.map(group => `
    <div class="mb-5">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="flex flex-wrap gap-2">
        ${group.links.map(link => `
          <button onclick="window.scrollTo({top: document.getElementById('${link.id}').offsetTop - 100, behavior: 'smooth'}); updateActiveNav('${link.id}')"
            class="nav-btn px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all border border-slate-200"
            data-section="${link.id}">
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
