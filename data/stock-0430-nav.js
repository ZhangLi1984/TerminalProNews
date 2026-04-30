const STOCK_NAV_CONFIG_0430 = [
  { title: '核心摘要', links: [{ id: 's_sec1', label: '研报总览' }] },
  { title: 'A 级标的', links: [
    { id: 's_sec2', label: '恺英网络(002517)' },
    { id: 's_sec3', label: '永和股份(605020)' },
    { id: 's_sec4', label: '工业富联(601138)' },
    { id: 's_sec5', label: '吉比特(603444)' },
    { id: 's_sec6', label: '三夫户外(002780)' },
    { id: 's_sec7', label: '招商南油(601975)' },
    { id: 's_sec8', label: '德方纳米(300769)' },
    { id: 's_sec9', label: '拓普集团(601689)' },
    { id: 's_sec10', label: '赛轮轮胎(601058)' },
    { id: 's_sec11', label: '华新水泥(600801)' },
    { id: 's_sec12', label: '芯碁微装(688630)' },
    { id: 's_sec13', label: '恒力石化(600346)' },
    { id: 's_sec14', label: '中曼石油(603619)' },
    { id: 's_sec15', label: '桐昆股份(601233)' },
    { id: 's_sec16', label: '日联科技(688531)' }
  ]},
  { title: 'B 级标的', links: [
    { id: 's_sec17', label: 'B 级概览' }
  ]},
  { title: '评级汇总', links: [
    { id: 's_sec18', label: '全量评级汇总表' }
  ]},
  { title: '行业分布', links: [
    { id: 's_sec19', label: '赛道分布' },
    { id: 's_sec20', label: '资金主攻方向' }
  ]}
];

function renderStockNav_0430() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0430.map(group => `
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
