// ==========================================
// 宏观研究导航配置 - 2026-03-19
// ==========================================

const MACRO_NAV_CONFIG_0319 = [
  {
    title: '核心结论',
    links: [
      { id: 'm_sec1', label: '核心摘要' }
    ]
  },
  {
    title: '数据解读',
    links: [
      { id: 'm_sec2', label: '经济增长' },
      { id: 'm_sec3', label: '通胀预期' },
      { id: 'm_sec4', label: '金融数据' }
    ]
  },
  {
    title: '研报观点',
    links: [
      { id: 'm_sec5', label: '观点共识' },
      { id: 'm_sec6', label: '政策预判' },
      { id: 'm_sec7', label: '行业热度' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'm_sec8', label: '周期定位' },
      { id: 'm_sec9', label: '资产配置' },
      { id: 'm_sec10', label: '行业轮动' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec11', label: '外部风险' },
      { id: 'm_sec12', label: '内部风险' },
      { id: 'm_sec13', label: '数据日历' }
    ]
  }
];

function renderMacroNav_0319() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0319.map((section, idx) => `
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
