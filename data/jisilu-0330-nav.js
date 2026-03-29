// ==========================================
// 集思录导航 - 2026年3月30日
// ==========================================

const JISILU_NAV_CONFIG_0330 = [
  {
    title: '热门话题 TOP 10',
    links: [
      { id: 'j_sec1', label: '北交所打新策略' },
      { id: 'j_sec2', label: '中东战争与投资' },
      { id: 'j_sec3', label: '可转债临期债风险' },
      { id: 'j_sec4', label: '中金三傻套利' },
      { id: 'j_sec5', label: '上海房地产走势' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec6', label: '可转债大饼策略' },
      { id: 'j_sec7', label: '北交所打新' },
      { id: 'j_sec8', label: 'ETF期权卖方' }
    ]
  },
  {
    title: '市场情绪',
    links: [
      { id: 'j_sec9', label: '热议标的' },
      { id: 'j_sec10', label: '风险提示' }
    ]
  }
];

function renderJisiluNav_0330() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  let html = '';

  JISILU_NAV_CONFIG_0330.forEach((group, groupIndex) => {
    html += `
      <div class="nav-group">
        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">${group.title}</h3>
        <div class="space-y-1">
          ${group.links.map((link, linkIndex) => `
            <button
              class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${linkIndex === 0 && groupIndex === 0 ? 'bg-slate-900 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'}"
              data-section="${link.id}"
              onclick="scrollToSection('jisilu', '${link.id}')"
            >
              <span>${link.label}</span>
              <div class="w-1.5 h-1.5 rounded-full ${linkIndex === 0 && groupIndex === 0 ? 'bg-red-500' : 'bg-transparent'} group-hover:bg-red-400 transition-colors"></div>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}