// ==========================================
// 投资决策内参 - 导航配置 (2026-06-02)
// ==========================================

const DECISION_NAV_CONFIG_0602 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '3分钟速读' }
    ]
  },
  {
    title: '重大新闻',
    links: [
      { id: 'sec2', label: 'AI军备竞赛' },
      { id: 'sec3', label: '美伊谈判' },
      { id: 'sec4', label: '宇树科技IPO' }
    ]
  },
  {
    title: '新闻分类',
    links: [
      { id: 'sec5', label: 'AI/半导体' },
      { id: 'sec6', label: '光通信/CPO' },
      { id: 'sec7', label: '港股科技' },
      { id: 'sec8', label: '新能源/锂电' },
      { id: 'sec9', label: '宏观/政策' },
      { id: 'sec10', label: '大宗商品' }
    ]
  },
  {
    title: '赛道追踪',
    links: [
      { id: 'sec11', label: 'AI/算力硬件' },
      { id: 'sec12', label: '人形机器人' },
      { id: 'sec13', label: 'MLCC/被动元件' },
      { id: 'sec14', label: '有色金属' }
    ]
  },
  {
    title: '深度分析',
    links: [
      { id: 'sec15', label: '跨赛道传导' },
      { id: 'sec16', label: '明日关注' },
      { id: 'sec17', label: '风险提示' }
    ]
  }
];

function renderDecisionNav_0602() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0602.map(group => `
    <div class="mb-5">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="flex flex-wrap gap-2">
        ${group.links.map(link => `
          <button onclick="window.scrollTo({top: document.getElementById('${link.id}').offsetTop - 100, behavior: 'smooth'}); updateActiveNav('${link.id}')"
            class="nav-btn px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all border border-slate-200"
            data-section="${link.id}">
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
