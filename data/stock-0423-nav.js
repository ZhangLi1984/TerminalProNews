const STOCK_NAV_CONFIG_0423 = [
  { title: '核心摘要', links: [{ id: 's_sec1', label: '研报总览' }] },
  { title: 'A 级标的', links: [
    { id: 's_sec2', label: '海光信息(688041)' },
    { id: 's_sec3', label: '中矿资源(002738)' },
    { id: 's_sec4', label: '东方雨虹(002271)' },
    { id: 's_sec5', label: '众鑫股份(603091)' },
    { id: 's_sec6', label: '宁德时代(300750)' },
    { id: 's_sec7', label: '福耀玻璃(600660)' },
    { id: 's_sec8', label: '行动教育(605098)' },
    { id: 's_sec9', label: '华鲁恒升(600426)' },
    { id: 's_sec10', label: '鼎龙股份(300054)' },
    { id: 's_sec11', label: '百亚股份(003006)' },
    { id: 's_sec12', label: '新凤鸣(603225)' },
    { id: 's_sec13', label: '博众精工(688097)' },
    { id: 's_sec14', label: '铜陵有色(000630)' },
    { id: 's_sec15', label: '英维克(002837)' }
  ]},
  { title: '评级汇总', links: [{ id: 's_sec16', label: '完整评级汇总表' }] },
  { title: '行业分布', links: [{ id: 's_sec17', label: '行业赛道资金分布' }] },
  { title: '方法论', links: [{ id: 's_sec18', label: '评级方法论' }] }
];

function renderStockNav_0423() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0423.map(group => `
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
