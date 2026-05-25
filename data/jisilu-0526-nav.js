// ==========================================
// 集思录投资洞察 - 导航配置 2026-05-26
// ==========================================
const JISILU_NAV_CONFIG_0526 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '龙大美食违约风险' },
      { id: 'j_sec2', label: '科技股 vs 老登股分化' },
      { id: 'j_sec3', label: '闻泰科技/闻泰转债' },
      { id: 'j_sec4', label: '黄金/大宗商品期权' },
      { id: 'j_sec5', label: 'ST/重整套利' }
    ]
  },
  {
    title: '方法论',
    links: [
      { id: 'j_sec6', label: '低风险策略精粹' },
      { id: 'j_sec7', label: '资产配置框架' }
    ]
  },
  {
    title: '市场',
    links: [
      { id: 'j_sec8', label: '热议标的清单' },
      { id: 'j_sec9', label: '情绪与风险' },
      { id: 'j_sec10', label: '争议与下周关注' }
    ]
  }
];

function renderJisiluNav_0526() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  container.innerHTML = JISILU_NAV_CONFIG_0526.map((group) => `
    <div>
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
            class="nav-btn w-full text-left px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors flex items-center"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
