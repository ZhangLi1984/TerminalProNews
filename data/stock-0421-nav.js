// ==========================================
// 个股研报导航 - 2026-04-21
// ==========================================
const STOCK_NAV_CONFIG_0421 = [
  { title: '核心摘要', links: [
    { id: 's_sec1', label: '研报总览' }
  ]},
  { title: 'S 级标的', links: [
    { id: 's_sec2', label: '纽威股份' }
  ]},
  { title: 'A 级标的', links: [
    { id: 's_sec3', label: '先导智能' },
    { id: 's_sec4', label: '中际联合' },
    { id: 's_sec5', label: '云图控股' },
    { id: 's_sec6', label: '奕瑞科技' },
    { id: 's_sec7', label: '密尔克卫' },
    { id: 's_sec8', label: '恒力石化' }
  ]},
  { title: '评级汇总', links: [
    { id: 's_sec9', label: 'B 级标的汇总（15只）' },
    { id: 's_sec10', label: 'C 级标的汇总（77只）' }
  ]}
];

function renderStockNav_0421() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0421.map(group => `
    <div>
      <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('stock','${link.id}')" data-section="${link.id}"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-all flex items-start gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mt-1.5 flex-shrink-0"></div>
            <span class="leading-tight">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
