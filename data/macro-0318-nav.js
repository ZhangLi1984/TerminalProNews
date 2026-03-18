// ==========================================
// 宏观研究导航配置 - 2026 年 3 月 18 日
// ==========================================

const MACRO_NAV_CONFIG_0318 = [
  {
    title: '核心宏观判断',
    links: [
      { id: 'm_sec1', label: '经济增长与周期定位' },
      { id: 'm_sec2', label: '通胀预期与拐点判断' }
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
      { id: 'm_sec6', label: '行业轮动与宏观映射' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec7', label: '宏观风险提示' },
      { id: 'm_sec8', label: '关键数据速查' }
    ]
  }
];

function renderMacroNav_0318() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0318.map((section, index) => `
    <div class="space-y-3">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider px-3">${section.title}</h3>
      <nav class="space-y-1">
        ${section.links.map(link => `
          <button
            onclick="scrollToSection('macro', '${link.id}'); return false;"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group ${index === 0 && link.id === 'm_sec1' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'}"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors ${index === 0 && link.id === 'm_sec1' ? 'bg-red-500' : 'bg-transparent group-hover:bg-slate-400'}"></div>
            ${link.label}
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
