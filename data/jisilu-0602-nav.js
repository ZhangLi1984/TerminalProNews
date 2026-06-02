// ==========================================
// 集思录投资洞察 - 导航配置 (2026-06-02)
// ==========================================

const JISILU_NAV_CONFIG_0602 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '闻泰转债风暴' },
      { id: 'j_sec2', label: '腾讯涨停' },
      { id: 'j_sec3', label: '老登股vs科技股' },
      { id: 'j_sec4', label: '价值投资10年实验' },
      { id: 'j_sec5', label: '可转债策略' },
      { id: 'j_sec6', label: '科技股止盈困境' },
      { id: 'j_sec7', label: '北交所打新' },
      { id: 'j_sec8', label: '白酒底部判断' },
      { id: 'j_sec9', label: '美股估值/QDII' },
      { id: 'j_sec10', label: '低风险投资者困境' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec11', label: '双低轮动策略' },
      { id: 'j_sec12', label: '价值投资三年估值法' },
      { id: 'j_sec13', label: '股息+网格复合策略' },
      { id: 'j_sec14', label: '北交所打新策略' },
      { id: 'j_sec15', label: '配债策略' }
    ]
  },
  {
    title: '热议标的',
    links: [
      { id: 'j_sec16', label: '腾讯控股' },
      { id: 'j_sec17', label: '闻泰转债' },
      { id: 'j_sec18', label: '五粮液' },
      { id: 'j_sec19', label: '强赎预警转债' }
    ]
  },
  {
    title: '市场情绪',
    links: [
      { id: 'j_sec20', label: '情绪观察' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'j_sec21', label: '六大风险提示' }
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
