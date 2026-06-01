// ==========================================
// 集思录投资洞察 - 导航配置 (2026-06-02)
// ==========================================

const JISILU_NAV_CONFIG_0602 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '券商合并投票' },
      { id: 'j_sec2', label: '可转债是否值得学习' },
      { id: 'j_sec3', label: '全A中位指数暴跌' },
      { id: 'j_sec4', label: '银行股与中特估' },
      { id: 'j_sec5', label: '中东局势与高油价' }
    ]
  },
  {
    title: '方法论',
    links: [
      { id: 'j_sec6', label: '量化轮动策略' },
      { id: 'j_sec7', label: '期货吃贴水' },
      { id: 'j_sec8', label: '合并套利策略' }
    ]
  },
  {
    title: '热议标的',
    links: [
      { id: 'j_sec9', label: '热议标的清单' }
    ]
  },
  {
    title: '情绪与风险',
    links: [
      { id: 'j_sec10', label: '市场情绪观察' },
      { id: 'j_sec11', label: '风险提示' }
    ]
  }
];

function renderJisiluNav_0602() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  container.innerHTML = JISILU_NAV_CONFIG_0602.map(group => `
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
