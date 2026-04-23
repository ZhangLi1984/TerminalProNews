const STOCK_NAV_CONFIG_0424 = [
  { title: '核心摘要', links: [{ id: 's_sec1', label: '研报总览' }] },
  { title: 'S 级标的', links: [
    { id: 's_sec2', label: '芭田股份(002170)' },
    { id: 's_sec3', label: '瑞芯微(603893)' },
    { id: 's_sec4', label: '湖南裕能(301358)' },
    { id: 's_sec5', label: '北方华创(002371)' },
    { id: 's_sec6', label: '江海股份(002484)' }
  ]},
  { title: 'A 级标的', links: [
    { id: 's_sec7', label: '中际旭创(300308)' },
    { id: 's_sec8', label: '同花顺(300033)' },
    { id: 's_sec9', label: '中控技术(688777)' },
    { id: 's_sec10', label: '巨化股份(600160)' },
    { id: 's_sec11', label: '恩捷股份(002812)' },
    { id: 's_sec12', label: '达梦数据(688692)' },
    { id: 's_sec13', label: '龙净环保(600388)' },
    { id: 's_sec14', label: '厦钨新能(688778)' },
    { id: 's_sec15', label: '紫金矿业(601899)' },
    { id: 's_sec16', label: '迎驾贡酒(603198)' },
    { id: 's_sec17', label: '山西汾酒(600809)' },
    { id: 's_sec18', label: '信德新材(301349)' }
  ]},
  { title: 'B/C 级概览', links: [
    { id: 's_sec19', label: 'B 级代表标的' },
    { id: 's_sec20', label: 'C 级规避标的' }
  ]},
  { title: '评级汇总', links: [{ id: 's_sec21', label: '全量评级汇总表' }] },
  { title: '行业分布', links: [{ id: 's_sec22', label: '行业赛道分布' }] },
  { title: '配置建议', links: [
    { id: 's_sec23', label: '仓位配置建议' },
    { id: 's_sec24', label: '今日关注方向' }
  ]},
  { title: '方法论', links: [{ id: 's_sec25', label: '评级方法论' }] }
];

function renderStockNav_0424() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0424.map(group => `
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
