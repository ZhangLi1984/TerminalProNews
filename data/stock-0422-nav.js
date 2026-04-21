const STOCK_NAV_CONFIG_0422 = [
  { title: '核心摘要', links: [{ id: 's_sec1', label: '研报总览' }] },
  { title: 'S 级标的', links: [{ id: 's_sec2', label: '新乡化纤(000949)' }] },
  { title: 'A 级标的', links: [
    { id: 's_sec3', label: '先导智能(300450)' },
    { id: 's_sec4', label: '天孚通信(300394)' },
    { id: 's_sec5', label: '云图控股(002539)' },
    { id: 's_sec6', label: '杰瑞股份(002353)' },
    { id: 's_sec7', label: '万华化学(600309)' },
    { id: 's_sec8', label: '隆鑫通用(603766)' },
    { id: 's_sec9', label: '信立泰(002294)' },
    { id: 's_sec10', label: '中科曙光(603019)' },
    { id: 's_sec11', label: '中炬高新(600872)' },
    { id: 's_sec12', label: '恒立液压(601100)' },
    { id: 's_sec13', label: '百奥赛图(688796)' },
    { id: 's_sec14', label: '中矿资源(002738)' },
    { id: 's_sec15', label: '通富微电(002156)' }
  ]},
  { title: '评级汇总', links: [{ id: 's_sec16', label: '完整评级汇总表' }] },
  { title: '方法论', links: [{ id: 's_sec17', label: '评级方法论' }] }
];

function renderStockNav_0422() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0422.map(group => `
    <div>
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('stock', '${link.id}')" class="nav-btn w-full text-left text-sm px-2 py-1.5 rounded-lg transition-all text-slate-700 hover:bg-slate-100" data-section="${link.id}">
            <div class="w-1 h-1 rounded-full bg-transparent inline-block mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
