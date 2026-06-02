// ==========================================
// 集思录投资洞察 - 导航配置 (2026-06-02)
// ==========================================

const JISILU_NAV_CONFIG_0602 = [
  {
    title: '热门话题 TOP 10',
    links: [
      { id: 'j_sec1', label: '闻泰转债风暴' },
      { id: 'j_sec2', label: '腾讯涨停' },
      { id: 'j_sec3', label: '老登股vs科技股' },
      { id: 'j_sec4', label: '价值投资实盘' },
      { id: 'j_sec5', label: '可转债策略' },
      { id: 'j_sec6', label: '科技股止盈困境' },
      { id: 'j_sec7', label: '北交所打新' },
      { id: 'j_sec8', label: '白酒底部判断' },
      { id: 'j_sec9', label: '美股估值' },
      { id: 'j_sec10', label: '低风险困境' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec11', label: '转债双低轮动' },
      { id: 'j_sec12', label: '三年估值法' },
      { id: 'j_sec13', label: '股息+网格' },
      { id: 'j_sec14', label: '北交所打新' },
      { id: 'j_sec15', label: '配债策略' }
    ]
  },
  {
    title: '热议标的',
    links: [
      { id: 'j_sec16', label: '热议标的清单' }
    ]
  },
  {
    title: '情绪与风险',
    links: [
      { id: 'j_sec17', label: '市场情绪观察' },
      { id: 'j_sec18', label: '风险提示' }
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
