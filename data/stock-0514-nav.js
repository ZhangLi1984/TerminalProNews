// 个股研报导航模块 - 2026-05-14
const STOCK_NAV_CONFIG_0514 = [
  {
    title: '核心推荐',
    links: [
      { id: 's_sec1', label: '今日研报摘要' },
      { id: 's_sec2', label: 'S级标的深度剖析' }
    ]
  },
  {
    title: 'S级标的',
    links: [
      { id: 's_sec3', label: '三美股份 (603379)' },
      { id: 's_sec4', label: '永和股份 (605020)' },
      { id: 's_sec5', label: '长电科技 (600584)' },
      { id: 's_sec6', label: '时代电气 (688187)' },
      { id: 's_sec7', label: '万辰集团 (300972)' }
    ]
  },
  {
    title: 'A级标的',
    links: [
      { id: 's_sec8', label: '药康生物 (688046)' },
      { id: 's_sec9', label: '卓越新能 (688196)' },
      { id: 's_sec10', label: '华源控股 (002787)' },
      { id: 's_sec11', label: '华康股份 (605077)' },
      { id: 's_sec12', label: '新泉股份 (603179)' },
      { id: 's_sec13', label: '西麦食品 (002956)' },
      { id: 's_sec14', label: '智微智能 (001339)' },
      { id: 's_sec15', label: '铂科新材 (300811)' },
      { id: 's_sec16', label: '百济神州 (688235)' },
      { id: 's_sec17', label: '山金国际 (000975)' },
      { id: 's_sec18', label: '新开源 (300109)' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec19', label: '完整评级汇总表' },
      { id: 's_sec20', label: '评级说明与免责声明' }
    ]
  }
];

function renderStockNav_0514() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0514.map(group => `
    <div class="mb-6">
      <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <a href="#${link.id}" class="nav-btn flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
