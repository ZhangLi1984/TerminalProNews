// ==========================================
// 个股研报导航配置 - 2026-05-11
// ==========================================

const STOCK_NAV_CONFIG_0511 = [
  { title: '评级汇总', links: [
    { id: 's_sec1', label: '买入评级标的' },
    { id: 's_sec2', label: '增持评级标的' },
    { id: 's_sec3', label: '评级汇总统计' },
  ]},
  { title: '重点行业个股', links: [
    { id: 's_sec4', label: '半导体/电子' },
    { id: 's_sec5', label: '医药医疗' },
    { id: 's_sec6', label: '新能源/储能' },
    { id: 's_sec7', label: '周期/资源' },
  ]},
  { title: '消费与制造', links: [
    { id: 's_sec8', label: '消费/家电' },
    { id: 's_sec9', label: '机械/制造' },
    { id: 's_sec10', label: '北交所精选' },
  ]},
];

function renderStockNav_0511() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0511.map((group, gi) => `
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
