// 宏观研究导航模块 - 2026-05-12
const MACRO_NAV_CONFIG_0512 = [
  {
    title: '宏观概览',
    links: [
      { id: 'm_sec1', label: '执行摘要' },
      { id: 'm_sec2', label: '经济增长数据' },
      { id: 'm_sec3', label: '通胀与货币' }
    ]
  },
  {
    title: '核心变量',
    links: [
      { id: 'm_sec4', label: '地缘与大宗商品' },
      { id: 'm_sec5', label: '出口与产业竞争力' },
      { id: 'm_sec6', label: '国内政策走向' },
      { id: 'm_sec7', label: '海外宏观与美联储' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'm_sec8', label: '交叉验证分析' },
      { id: 'm_sec9', label: '大类资产配置' },
      { id: 'm_sec10', label: '行业轮动与事件驱动' },
      { id: 'm_sec11', label: '风险提示与证伪' }
    ]
  }
];

function renderMacroNav_0512() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0512.map(group => `
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
