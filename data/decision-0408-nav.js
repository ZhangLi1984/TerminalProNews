// truncated=================================
// 智研金融 Terminal Pro - 投资决策导航 2026-04-08
// ==========================================

const DECISION_NAV_CONFIG_0408 = [
  {
    title: '核心焦点',
    links: [
      { id: 'sec1', label: '中东停火协议' },
      { id: 'sec2', label: 'A 股暴力反弹' },
      { id: 'sec3', label: '全球市场共振' }
    ]
  },
  {
    title: '主线机会',
    links: [
      { id: 'sec4', label: '半导体存储' },
      { id: 'sec5', label: '贵金属黄金' },
      { id: 'sec6', label: '航空机场' }
    ]
  },
  {
    title: '资金动向',
    links: [
      { id: 'sec7', label: 'ETF 资金流' },
      { id: 'sec8', label: '连板股追踪' }
    ]
  }
];

function renderDecisionNav_0408() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0408.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent inline-block mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
