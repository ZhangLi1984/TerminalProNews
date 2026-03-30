// ==========================================
// 宏观研究导航配置 - 2026-03-31
// ==========================================

const MACRO_NAV_CONFIG_0331 = [
  {
    title: '核心判断',
    links: [
      { id: 'm_sec1', label: '经济增长与周期定位' },
      { id: 'm_sec2', label: '通胀预期与拐点' }
    ]
  },
  {
    title: '政策分析',
    links: [
      { id: 'm_sec3', label: '货币政策与流动性' },
      { id: 'm_sec4', label: '财政政策与产业政策' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec5', label: '大类资产配置建议' },
      { id: 'm_sec6', label: '黄金专题判断' }
    ]
  },
  {
    title: '行业轮动',
    links: [
      { id: 'm_sec7', label: '六大受益行业' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec8', label: '宏观风险与证伪指标' },
      { id: 'm_sec9', label: '下周关注事项' }
    ]
  }
];

function renderMacroNav_0331() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  let html = '';
  MACRO_NAV_CONFIG_0331.forEach((category, idx) => {
    html += `<div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${category.title}</h3>
      <div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
                class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center group hover:bg-slate-100"
                data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-slate-400"></div>
        <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
      </button>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
