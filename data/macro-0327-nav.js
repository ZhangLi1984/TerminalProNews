// ==========================================
// 宏观研究导航配置 - 2026 年 3 月 27 日
// ==========================================

const MACRO_NAV_CONFIG_0327 = [
  {
    title: '核心宏观判断',
    links: [
      { id: 'm_sec1', label: '经济增长' },
      { id: 'm_sec2', label: '通胀预期' },
      { id: 'm_sec3', label: '周期位置' }
    ]
  },
  {
    title: '政策分析',
    links: [
      { id: 'm_sec4', label: '货币政策' },
      { id: 'm_sec5', label: '财政政策' },
      { id: 'm_sec6', label: '产业政策' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec7', label: '配置建议' },
      { id: 'm_sec8', label: '细分策略' }
    ]
  },
  {
    title: '行业轮动',
    links: [
      { id: 'm_sec9', label: '上游资源品' },
      { id: 'm_sec10', label: '新质生产力' },
      { id: 'm_sec11', label: '高股息防御' },
      { id: 'm_sec12', label: '地产链修复' },
      { id: 'm_sec13', label: '出口受益链' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec14', label: '外部风险' },
      { id: 'm_sec15', label: '内部风险' },
      { id: 'm_sec16', label: '证伪指标' }
    ]
  }
];

function renderMacroNav_0327() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0327.map((section, idx) => `
    <div class="space-y-2">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider px-3 py-2">${section.title}</h3>
      <nav class="space-y-1">
        ${section.links.map(link => `
          <button
            onclick="scrollToSection('macro', '${link.id}'); updateActiveNav('${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group hover:bg-slate-100"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-slate-400"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
