// ==========================================
// 投资决策内参导航模块 - 2026-03-17
// ==========================================

const DECISION_NAV_CONFIG_0317 = [
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
      { id: 'sec4', label: '英伟达 GTC 大会' },
      { id: 'sec5', label: '霍尔木兹海峡封锁' },
      { id: 'sec6', label: '氢能试点政策' }
    ]
  },
  {
    title: '新闻分类',
    links: [
      { id: 'sec7', label: '政策宏观' },
      { id: 'sec8', label: '产业动态' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'sec9', label: 'AI/算力链' },
      { id: 'sec10', label: '半导体' },
      { id: 'sec11', label: '新能源' },
      { id: 'sec12', label: '机器人/脑机接口' }
    ]
  },
  {
    title: '传导分析',
    links: [
      { id: 'sec13', label: '算电协同' },
      { id: 'sec14', label: '航运替代' },
      { id: 'sec15', label: '存储涨价链' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec16', label: '重要数据/事件' },
      { id: 'sec17', label: '财报密集期' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec18', label: '逻辑证伪区' },
      { id: 'sec19', label: '传闻预警' },
      { id: 'sec20', label: '黑天鹅监测' }
    ]
  }
];

function renderDecisionNav_0317() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0317.map(section => `
    <div class="nav-section">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('decision', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-red-400 transition-colors mr-2.5"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
