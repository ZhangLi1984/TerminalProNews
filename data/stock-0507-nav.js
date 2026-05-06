// Stock Nav Module for 2026-05-07
const STOCK_NAV_CONFIG_0507 = [
  {
    title: '评级总览',
    links: [
      { id: 's_sec1', label: '评级分布与市场概况' },
      { id: 's_sec2', label: '全量 100 篇研报清单' }
    ]
  },
  {
    title: 'S 级标的',
    links: [
      { id: 's_sec3', label: '爱柯迪 (600933)' },
      { id: 's_sec4', label: '保隆科技 (603197)' },
      { id: 's_sec5', label: '国轩高科 (002074)' },
      { id: 's_sec6', label: '亚钾国际 (000893)' },
      { id: 's_sec7', label: '金银河 (300619)' },
      { id: 's_sec8', label: '若羽臣 (003010)' },
      { id: 's_sec9', label: '芭田股份 (002170)' },
      { id: 's_sec10', label: '盛达资源 (000603)' },
      { id: 's_sec11', label: '通富微电 (002156)' }
    ]
  },
  {
    title: 'A 级精选',
    links: [
      { id: 's_sec12', label: '半导体/算力设备链' },
      { id: 's_sec13', label: '新能源/汽车产业链' },
      { id: 's_sec14', label: '消费复苏' },
      { id: 's_sec15', label: '高股息/低估值防御' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 's_sec16', label: 'C 级标的回避名单' },
      { id: 's_sec17', label: 'B 级标的风险关注' }
    ]
  }
];

function renderStockNav_0507() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0507.map(group => `
    <div>
      <div class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="${link.id}" onclick="scrollToSection('stock','${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
