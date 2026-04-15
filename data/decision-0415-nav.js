// ==========================================
// 智研金融 Terminal Pro - 投资决策内参导航 2026-04-15
// ==========================================

const DECISION_NAV_CONFIG_0415 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '全局叙事速读' },
      { id: 'sec2', label: '关键推演与操作' }
    ]
  },
  {
    title: '重大事件推演',
    links: [
      { id: 'sec3', label: '美伊冲突暂停键' },
      { id: 'sec4', label: '美国关税退款' },
      { id: 'sec5', label: '创新药定价改革' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec6', label: 'AI/半导体/算力' },
      { id: 'sec7', label: '商业航天' },
      { id: 'sec8', label: '新能源/锂电' },
      { id: 'sec9', label: '机器人/具身智能' },
      { id: 'sec10', label: '房地产' },
      { id: 'sec11', label: '医药生物' }
    ]
  },
  {
    title: '赛道追踪',
    links: [
      { id: 'sec12', label: '热点赛道追踪表' }
    ]
  },
  {
    title: '传导分析',
    links: [
      { id: 'sec13', label: '跨赛道二阶传导' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec14', label: '关键事件日历' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec15', label: '逻辑证伪与避雷' }
    ]
  }
];

function renderDecisionNav_0415() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0415.map(group => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">${group.title}</h4>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button onclick="scrollToSection('decision','${link.id}')" data-section="${link.id}" class="nav-btn w-full text-left px-2 py-1.5 text-sm rounded-lg transition-all text-slate-700 hover:bg-slate-100">
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
