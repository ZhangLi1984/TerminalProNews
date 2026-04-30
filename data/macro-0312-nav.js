// truncated=================================
// 宏观研究买方策略内参 - 导航配置 (2026-03-12)
// ==========================================

const MACRO_NAV_CONFIG_0312 = [
  {
    title: '核心宏观判断',
    links: [
      { id: 'm_sec1', label: '经济增长与周期定位' },
      { id: 'm_sec2', label: '货币政策与流动性' }
    ]
  },
  {
    title: '政策分析',
    links: [
      { id: 'm_sec3', label: '财政与产业政策' },
      { id: 'm_sec4', label: '资产配置建议' }
    ]
  },
  {
    title: '投资策略',
    links: [
      { id: 'm_sec5', label: '行业轮动与宏观映射' },
      { id: 'm_sec6', label: '风险提示与证伪指标' },
      { id: 'm_sec7', label: '投资策略总结' }
    ]
  }
];

function renderMacroNav_0312() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0312.map(category => `
    <div class="mb-6">
      <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">${category.title}</h4>
      <div class="space-y-1">
        ${category.links.map(link => `
          <button onclick="scrollToSection('macro', '${link.id}')"
                  class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center group"
                  data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-emerald-500"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
