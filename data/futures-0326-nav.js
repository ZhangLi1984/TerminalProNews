// ==========================================
// 期货市场导航配置 - 2026 年 3 月 26 日
// ==========================================

const FUTURES_NAV_CONFIG_0326 = [
  {
    title: '行情总览',
    links: [
      { id: 'f_sec1', label: '板块涨跌排行' },
      { id: 'f_sec2', label: '主力合约监测' }
    ]
  },
  {
    title: '品种分析',
    links: [
      { id: 'f_sec3', label: '能源化工' },
      { id: 'f_sec4', label: '黑色建材' },
      { id: 'f_sec5', label: '有色金属' },
      { id: 'f_sec6', label: '农产品' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'f_sec7', label: '交易机会' },
      { id: 'f_sec8', label: '风险提示' }
    ]
  }
];

function renderFuturesNav_0326() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  let html = '';
  FUTURES_NAV_CONFIG_0326.forEach((section, idx) => {
    html += `<div class="space-y-2">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider">${section.title}</h3>
      <nav class="space-y-1">`;
    section.links.forEach(link => {
      html += `<button onclick="scrollToSection('futures', '${link.id}')"
        class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group hover:bg-slate-100"
        data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-slate-400"></div>
        <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
      </button>`;
    });
    html += `</nav></div>`;
  });

  container.innerHTML = html;
}
