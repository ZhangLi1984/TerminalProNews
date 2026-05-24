// ==========================================
// 期货分析报告 - 导航配置 2026-05-24
// ==========================================
const FUTURES_NAV_CONFIG_0524 = [
  {
    title: '行情总览',
    links: [
      { id: 'f_sec1', label: '板块价格行情' },
      { id: 'f_sec2', label: '宏观与市场环境' }
    ]
  },
  {
    title: '品种分析',
    links: [
      { id: 'f_sec3', label: '能源化工（原油/化工品）' },
      { id: 'f_sec4', label: '黑色系（煤焦钢矿）' },
      { id: 'f_sec5', label: '有色金属（铜铝金银）' },
      { id: 'f_sec6', label: '农产品与生猪' }
    ]
  },
  {
    title: '新闻与热点',
    links: [
      { id: 'f_sec7', label: '重要新闻热点' },
      { id: 'f_sec8', label: '美伊局势与地缘溢价' }
    ]
  },
  {
    title: '交易策略',
    links: [
      { id: 'f_sec9', label: '做多/做空机会' },
      { id: 'f_sec10', label: '风险提示与证伪指标' }
    ]
  }
];

function renderFuturesNav_0524() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0524.map((group) => `
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
