// ==========================================
// 个股研报导航配置 - 2026-05-12
// ==========================================

const STOCK_NAV_CONFIG_0512 = [
  { title: '核心摘要', links: [
    { id: 's_sec1', label: '评级统计概览' },
  ]},
  { title: 'S 级标的', links: [
    { id: 's_sec2', label: '欧科亿（688308）' },
    { id: 's_sec3', label: '东方铁塔（002545）' },
    { id: 's_sec4', label: '亚钾国际（000893）' },
    { id: 's_sec5', label: '固德威（688390）' },
  ]},
  { title: 'A 级标的', links: [
    { id: 's_sec6', label: '国轩高科/康冠科技' },
    { id: 's_sec7', label: '中化国际/视源股份' },
    { id: 's_sec8', label: '澜起科技/中国重汽' },
    { id: 's_sec9', label: '中国长城/可孚医疗' },
  ]},
  { title: '评级汇总', links: [
    { id: 's_sec10', label: '全量评级汇总表' },
    { id: 's_sec11', label: '评级分布统计' },
  ]},
];

function renderStockNav_0512() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0512.map((group) => `
    <div>
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('stock','${link.id}')" class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all flex items-center group" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 transition-colors group-hover:bg-red-500"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
