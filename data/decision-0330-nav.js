// ==========================================
// 投资决策内参导航 - 2026年3月30日
// ==========================================

const DECISION_NAV_CONFIG_0330 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '今日重大信号' },
      { id: 'sec2', label: '核心观点' }
    ]
  },
  {
    title: '重大新闻详解',
    links: [
      { id: 'sec3', label: '中东冲突升级' },
      { id: 'sec4', label: '群核科技IPO' },
      { id: 'sec5', label: '锂电板块异动' }
    ]
  },
  {
    title: '重要新闻分类',
    links: [
      { id: 'sec6', label: '宏观政策' },
      { id: 'sec7', label: '产业动态' },
      { id: 'sec8', label: '公司要闻' }
    ]
  },
  {
    title: '热点赛道追踪',
    links: [
      { id: 'sec9', label: 'AI与算力' },
      { id: 'sec10', label: '机器人' },
      { id: 'sec11', label: '新能源与锂电' },
      { id: 'sec12', label: '创新药' }
    ]
  },
  {
    title: '跨赛道传导分析',
    links: [
      { id: 'sec13', label: '能源冲击传导链' },
      { id: 'sec14', label: 'AI算力传导链' },
      { id: 'sec15', label: '避险资产传导链' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec16', label: '重要数据与事件' },
      { id: 'sec17', label: '重点公司动态' },
      { id: 'sec18', label: '板块轮动预判' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec19', label: '短期风险' },
      { id: 'sec20', label: '中期风险' },
      { id: 'sec21', label: '应对策略' }
    ]
  }
];

function renderDecisionNav_0330() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';

  DECISION_NAV_CONFIG_0330.forEach((group, groupIndex) => {
    html += `
      <div class="nav-group">
        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">${group.title}</h3>
        <div class="space-y-1">
          ${group.links.map((link, linkIndex) => `
            <button
              class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${linkIndex === 0 && groupIndex === 0 ? 'bg-slate-900 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'}"
              data-section="${link.id}"
              onclick="scrollToSection('decision', '${link.id}')"
            >
              <span>${link.label}</span>
              <div class="w-1.5 h-1.5 rounded-full ${linkIndex === 0 && groupIndex === 0 ? 'bg-red-500' : 'bg-transparent'} group-hover:bg-red-400 transition-colors"></div>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}