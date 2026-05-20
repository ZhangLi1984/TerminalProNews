// 期货市场导航 - 2026-05-21
const FUTURES_NAV_CONFIG_0521 = [
  { title: '价格行情', links: [
    { id: 'f_sec1', label: '能源化工板块' },
    { id: 'f_sec2', label: '金属板块' },
    { id: 'f_sec3', label: '农产品板块' },
  ]},
  { title: '品种分析', links: [
    { id: 'f_sec4', label: '原油/燃油' },
    { id: 'f_sec5', label: '煤炭/焦煤/焦炭' },
    { id: 'f_sec6', label: '黄金/白银' },
    { id: 'f_sec7', label: '铜/铝' },
    { id: 'f_sec8', label: '生猪/豆粕' },
    { id: 'f_sec9', label: '天然气/化工品' },
  ]},
  { title: '策略与建议', links: [
    { id: 'f_sec10', label: '新闻热点' },
    { id: 'f_sec11', label: '做多/做空机会' },
    { id: 'f_sec12', label: '风险提示' },
  ]},
];

function renderFuturesNav_0521() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0521.map((cat) => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">${cat.title}</h4>
      <div class="space-y-1">
        ${cat.links.map(link => `
          <button onclick="scrollToSection('${link.id}', 'futures'); updateActiveNav('${link.id}')"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-orange-500 transition-colors flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
