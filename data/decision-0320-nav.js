// ==========================================
// 投资决策内参导航配置 - 2026-03-20
// ==========================================

const DECISION_NAV_CONFIG_0320 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '执行摘要' }
    ]
  },
  {
    title: '宏观环境',
    links: [
      { id: 'sec2', label: '政策动态' },
      { id: 'sec3', label: '流动性' },
      { id: 'sec4', label: '外围市场' }
    ]
  },
  {
    title: '行业配置',
    links: [
      { id: 'sec5', label: '超配方向' },
      { id: 'sec6', label: '低配方向' },
      { id: 'sec7', label: '主题投资' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec8', label: '主要风险' },
      { id: 'sec9', label: '跟踪指标' }
    ]
  }
];

function renderDecisionNav_0320() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0320.map((section, idx) => `
    <div class="space-y-3">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider px-3">${section.title}</h3>
      <nav class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('decision', '${link.id}'); return false;"
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
