// 宏观研究导航模块 - 2026-05-14
const MACRO_NAV_CONFIG_0514 = [
  {
    title: '核心判断',
    links: [
      { id: 'm_sec1', label: '核心宏观判断摘要' },
      { id: 'm_sec2', label: '关键经济数据' }
    ]
  },
  {
    title: '观点汇总',
    links: [
      { id: 'm_sec3', label: '通胀趋势：输入性主导' },
      { id: 'm_sec4', label: '美国CPI与非农' },
      { id: 'm_sec5', label: '中东地缘与大宗商品' },
      { id: 'm_sec6', label: '货币政策与利率' },
      { id: 'm_sec7', label: '进出口与外贸' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'm_sec8', label: '预期差与风险提示' },
      { id: 'm_sec9', label: '大类资产配置' },
      { id: 'm_sec10', label: '行业轮动与宏观映射' },
      { id: 'm_sec11', label: '操作建议' },
      { id: 'm_sec12', label: '下周关注事项' }
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
