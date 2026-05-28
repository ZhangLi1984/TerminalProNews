// ==========================================
// 投资决策模块 - 导航配置 (2026-05-28)
// ==========================================

const DECISION_NAV_CONFIG_0528 = [
  {
    title: '核心摘要',
    links: [
      { id: 'd_sec1', label: '全局叙事与核心主线' },
      { id: 'd_sec2', label: '仓位建议与操作方向' },
    ]
  },
  {
    title: '重大事件推演',
    links: [
      { id: 'd_sec3', label: 'AI硬件通胀链全面爆发' },
      { id: 'd_sec4', label: '美伊冲突与能源博弈' },
      { id: 'd_sec5', label: '长鑫IPO+存储超级周期' },
    ]
  },
  {
    title: '行业信号追踪',
    links: [
      { id: 'd_sec6', label: 'AI/半导体/算力硬件' },
      { id: 'd_sec7', label: '新能源/储能' },
      { id: 'd_sec8', label: '政策/宏观/金融' },
    ]
  },
  {
    title: '赛道与传导',
    links: [
      { id: 'd_sec9', label: '热点赛道追踪' },
      { id: 'd_sec10', label: '跨赛道传导分析' },
    ]
  },
  {
    title: '明日关注与风控',
    links: [
      { id: 'd_sec11', label: '明日重要事件' },
      { id: 'd_sec12', label: '风险提示与证伪区' },
    ]
  },
];

function renderDecisionNav_0528() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0528.map(cat => `
    <div class="mb-4">
      <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${cat.title}</div>
      <div class="space-y-0.5">
        ${cat.links.map(link => `
          <button class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all flex items-center group"
                  data-section="${link.id}" onclick="updateActiveNav('${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
