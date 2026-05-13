// 宏观研究导航模块 - 2026-05-14
const MACRO_NAV_CONFIG_0514 = [
  {
    title: '宏观概览',
    links: [
      { id: 'm_sec1', label: '补库元年与通胀双轨' },
      { id: 'm_sec2', label: '美联储：沃什时代开启' },
      { id: 'm_sec3', label: '中国货币政策转向' }
    ]
  },
  {
    title: '全球变量',
    links: [
      { id: 'm_sec4', label: '中东地缘与能源供应链' },
      { id: 'm_sec5', label: '中美科技关系缓和' },
      { id: 'm_sec6', label: '全球通胀K型分化' }
    ]
  },
  {
    title: 'A股策略',
    links: [
      { id: 'm_sec7', label: '市场情绪与流动性' },
      { id: 'm_sec8', label: '外资观点与目标位' },
      { id: 'm_sec9', label: '配置方向建议' }
    ]
  }
];

function renderMacroNav_0514() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0514.map(group => `
    <div class="mb-6">
      <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <a href="#${link.id}" class="nav-btn flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
