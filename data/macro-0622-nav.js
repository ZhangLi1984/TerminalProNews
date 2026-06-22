// ==========================================
// 宏观研究导航配置 - 2026-06-22
// ==========================================

const MACRO_NAV_CONFIG_0622 = [
  {
    title: '核心宏观判断',
    links: [
      { id: 'sec1', label: '经济增长与周期定位' },
      { id: 'sec2', label: '通胀预期' }
    ]
  },
  {
    title: '货币与财政政策',
    links: [
      { id: 'sec3', label: '货币政策 stance' },
      { id: 'sec4', label: '财政政策与产业政策' }
    ]
  },
  {
    title: '资产配置建议',
    links: [
      { id: 'sec5', label: '股票/债券/商品/现金' }
    ]
  },
  {
    title: '行业轮动',
    links: [
      { id: 'sec6', label: '受益行业映射' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec7', label: '外部风险' },
      { id: 'sec8', label: '内部风险' },
      { id: 'sec9', label: '证伪指标' }
    ]
  }
];

function renderMacroNav_0622() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0622.map(group => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-3">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('${link.id}', 'macro')"
                  data-section="${link.id}"
                  class="nav-btn w-full text-left px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors flex items-center group">
            <span class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 group-hover:bg-red-500 transition-colors"></span>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
