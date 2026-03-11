// ==========================================
// 投资决策内参导航 - 2026 年 3 月 11 日
// ==========================================

const DECISION_NAV_CONFIG_0311 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线与关键推演' },
      { id: 'sec2', label: '操作方向建议' }
    ]
  },
  {
    title: '重大事件推演',
    links: [
      { id: 'sec3', label: '美伊冲突缓和信号' },
      { id: 'sec4', label: 'OpenClaw 智能体浪潮' },
      { id: 'sec5', label: '存储芯片涨价周期' }
    ]
  },
  {
    title: '行业催化追踪',
    links: [
      { id: 'sec6', label: '科技/AI/半导体' },
      { id: 'sec7', label: '新能源/电力' },
      { id: 'sec8', label: '政策宏观' }
    ]
  },
  {
    title: '热点赛道与传导',
    links: [
      { id: 'sec9', label: '热点赛道追踪' },
      { id: 'sec10', label: '跨赛道传导分析' }
    ]
  },
  {
    title: '明日关注与风险',
    links: [
      { id: 'sec11', label: '明日重点事件' },
      { id: 'sec12', label: '风险提示与证伪' }
    ]
  }
];

function renderDecisionNav_0311() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0311.map(section => `
    <div class="nav-section">
      <h4 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">${section.title}</h4>
      <div class="space-y-1.5">
        ${section.links.map(link => `
          <button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}')"
                  data-section="${link.id}"
                  class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 transition-all duration-200 flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-slate-400"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
