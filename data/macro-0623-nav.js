// ==========================================
// 宏观研究导航配置 - 2026-06-23
// ==========================================

const MACRO_NAV_CONFIG_0623 = [
  {
    title: '核心判断',
    links: [
      { id: 'm_sec1', label: '核心宏观判断' },
      { id: 'm_sec2', label: '周期定位' }
    ]
  },
  {
    title: '货币政策',
    links: [
      { id: 'm_sec3', label: '政策立场' },
      { id: 'm_sec4', label: '流动性分析' },
      { id: 'm_sec5', label: '工具预判' }
    ]
  },
  {
    title: '财政与产业',
    links: [
      { id: 'm_sec6', label: '财政政策' },
      { id: 'm_sec7', label: '产业政策' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec8', label: '配置建议' },
      { id: 'm_sec9', label: '行业轮动' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec10', label: '外部风险' },
      { id: 'm_sec11', label: '内部风险' },
      { id: 'm_sec12', label: '证伪指标' }
    ]
  }
];

function renderMacroNav_0623() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0623.map((section, idx) => `
    <div class="space-y-3">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider px-3">${section.title}</h3>
      <nav class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('macro', '${link.id}'); return false;"
            class="nav-btn w-full flex items-center px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-all duration-200"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
