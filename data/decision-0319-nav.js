// ==========================================
// 投资决策内参导航配置 - 2026-03-19
// ==========================================

const DECISION_NAV_CONFIG_0319 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线' },
      { id: 'sec2', label: '关键推演' },
      { id: 'sec3', label: '操作方向' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec4', label: '中东冲突升级' },
      { id: 'sec5', label: '美联储议息会议' },
      { id: 'sec6', label: '存储芯片短缺' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec7', label: 'AI/算力/通信' },
      { id: 'sec8', label: '新能源' },
      { id: 'sec9', label: '半导体' },
      { id: 'sec10', label: '机器人' },
      { id: 'sec11', label: '医药' },
      { id: 'sec12', label: '宏观政策' }
    ]
  },
  {
    title: '深度分析',
    links: [
      { id: 'sec13', label: '跨赛道传导分析' },
      { id: 'sec14', label: '热点赛道追踪' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec15', label: '关键事件日历' },
      { id: 'sec16', label: '风险提示' }
    ]
  }
];

function renderDecisionNav_0319() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0319.map((section, idx) => `
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
