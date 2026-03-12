// ==========================================
// 投资决策内参 - 2026-03-13 导航配置
// ==========================================

const DECISION_NAV_CONFIG_0313 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线与关键推演' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec2', label: '伊朗强硬表态与霍尔木兹封锁' },
      { id: 'sec3', label: '寒武纪首次年度盈利' },
      { id: 'sec4', label: 'T1200碳纤维全球首发' }
    ]
  },
  {
    title: '重要新闻',
    links: [
      { id: 'sec5', label: '能源/化工行业催化' },
      { id: 'sec6', label: '科技/AI行业动态' },
      { id: 'sec7', label: '金融/监管政策' },
      { id: 'sec8', label: '政策/宏观要闻' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'sec9', label: 'AI算力/碳纤维/风电/能源' }
    ]
  },
  {
    title: '跨赛道传导',
    links: [
      { id: 'sec10', label: '能源危机传导路径' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec11', label: '宏观数据与政策事件' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec12', label: '逻辑证伪与风险预警' }
    ]
  }
];

function renderDecisionNav_0313() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0313.map(category => `
    <div class="nav-category">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">${category.title}</h3>
      <ul class="space-y-1">
        ${category.links.map(link => `
          <li>
            <button
              class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors flex items-center"
              data-section="${link.id}"
              onclick="scrollToSection('decision', '${link.id}')"
            >
              <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 flex-shrink-0 transition-colors"></div>
              ${link.label}
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}