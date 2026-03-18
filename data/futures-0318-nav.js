// ==========================================
// 期货市场导航配置 - 2026 年 3 月 18 日
// ==========================================

const FUTURES_NAV_CONFIG_0318 = [
  {
    title: '市场综述',
    links: [
      { id: 'f_sec1', label: '整体表现' },
      { id: 'f_sec2', label: '核心驱动因素' }
    ]
  },
  {
    title: '重点品种分析',
    links: [
      { id: 'f_sec3', label: '能源板块' },
      { id: 'f_sec4', label: '有色金属' },
      { id: 'f_sec5', label: '黑色系' },
      { id: 'f_sec6', label: '农产品' },
      { id: 'f_sec7', label: '化工品' }
    ]
  },
  {
    title: '跨品种关联',
    links: [
      { id: 'f_sec8', label: '原油 vs 能化' },
      { id: 'f_sec9', label: '美元 vs 贵金属' }
    ]
  },
  {
    title: '交易策略',
    links: [
      { id: 'f_sec10', label: '做多机会' },
      { id: 'f_sec11', label: '做空机会' },
      { id: 'f_sec12', label: '观望品种' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'f_sec13', label: '地缘政治风险' },
      { id: 'f_sec14', label: '政策风险' },
      { id: 'f_sec15', label: '市场风险' }
    ]
  }
];

function renderFuturesNav_0318() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  let html = '';
  FUTURES_NAV_CONFIG_0318.forEach((section, index) => {
    html += `<div class="space-y-2">
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">${section.title}</h3>
      <div class="space-y-1">`;

    section.links.forEach(link => {
      html += `<button onclick="scrollToSection('futures', '${link.id}'); return false;"
        class="nav-btn w-full flex items-center px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-all duration-200"
        data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 transition-colors"></div>
        ${link.label}
      </button>`;
    });

    html += `</div></div>`;
  });

  container.innerHTML = html;
}