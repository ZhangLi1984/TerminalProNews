// ==========================================
// 集思录投资洞察 - 导航配置 (2026-05-31)
// ==========================================

const JISILU_NAV_CONFIG_0531 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '闻泰转债风暴' },
      { id: 'j_sec2', label: 'AI泡沫论' },
      { id: 'j_sec3', label: '老登股vs小登股' },
      { id: 'j_sec4', label: '国家队减持' },
      { id: 'j_sec5', label: '北交所打新' },
      { id: 'j_sec6', label: '长鑫科技IPO' }
    ]
  },
  {
    title: '方法论',
    links: [
      { id: 'j_sec7', label: '投资方法论精粹' }
    ]
  },
  {
    title: '热议标的',
    links: [
      { id: 'j_sec8', label: '热议标的清单' }
    ]
  },
  {
    title: '情绪与风险',
    links: [
      { id: 'j_sec9', label: '市场情绪观察' },
      { id: 'j_sec10', label: '风险提示' },
      { id: 'j_sec11', label: '核心人物追踪' }
    ]
  }
];

function renderJisiluNav_0531() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  container.innerHTML = JISILU_NAV_CONFIG_0531.map(group => `
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
