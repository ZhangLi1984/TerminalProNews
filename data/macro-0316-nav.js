// truncated=================================
// 宏观研究导航模块 - 2026 年 3 月 16 日
// ==========================================

const MACRO_NAV_CONFIG_0316 = [
  {
    title: '周期定位',
    links: [
      { id: 'm_sec1', label: '核心宏观判断' },
      { id: 'm_sec2', label: '经济增长' },
      { id: 'm_sec3', label: '通胀预期' },
      { id: 'm_sec4', label: '周期位置' }
    ]
  },
  {
    title: '政策分析',
    links: [
      { id: 'm_sec5', label: '货币政策' },
      { id: 'm_sec6', label: '财政政策' },
      { id: 'm_sec7', label: '产业政策' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec8', label: '大类资产配置' },
      { id: 'm_sec9', label: '权益市场策略' }
    ]
  },
  {
    title: '行业轮动',
    links: [
      { id: 'm_sec10', label: '受益行业分析' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec11', label: '宏观风险' },
      { id: 'm_sec12', label: '证伪指标' }
    ]
  }
];

function renderMacroNav_0316() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0316.map((section, index) => `
    <div class="space-y-2">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider px-2">${section.title}</h3>
      ${section.links.map(link => `
        <button onclick="scrollToSection('macro', '${link.id}'); return false;"
          class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group"
          data-section="${link.id}">
          <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-slate-400"></div>
          <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
        </button>
      `).join('')}
    </div>
  `).join('');
}
