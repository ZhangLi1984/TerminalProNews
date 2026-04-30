// truncated=================================
// 投资决策内参导航配置 - 2026 年 4 月 7 日
// ==========================================

const DECISION_NAV_CONFIG_0407 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线' },
      { id: 'sec2', label: '关键推演' },
      { id: 'sec3', label: '操作方向' }
    ]
  },
  {
    title: '重大新闻详解',
    links: [
      { id: 'sec4', label: '特朗普关税政策' },
      { id: 'sec5', label: '三星 Q1 利润暴增' },
      { id: 'sec6', label: '美伊紧张局势' }
    ]
  },
  {
    title: '热点赛道追踪',
    links: [
      { id: 'sec7', label: 'AI 算力产业链' },
      { id: 'sec8', label: '半导体国产替代' },
      { id: 'sec9', label: '创新药/医药' },
      { id: 'sec10', label: '资源品' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'sec11', label: '仓位建议' },
      { id: 'sec12', label: '行业配置' },
      { id: 'sec13', label: '重点跟踪组合' }
    ]
  }
];

function renderDecisionNav_0407() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  const navHtml = DECISION_NAV_CONFIG_0407.map(cat => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${cat.title}</h3>
      <div class="space-y-1">
        ${cat.links.map(link => `
          <button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
            data-section="${link.id}"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition-all flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors ${link.id === 'sec1' ? 'bg-red-500' : 'bg-transparent group-hover:bg-slate-300'}"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = navHtml;
}
