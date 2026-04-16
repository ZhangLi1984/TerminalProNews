// 个股研报导航配置 - 2026年4月16日
const STOCK_NAV_CONFIG_0416 = [
  { title: '核心摘要', links: [{ id: 's_sec1', label: '今日概览' }] },
  { title: 'S级标的', links: [
    { id: 's_sec2', label: '宁德时代·东吴证券' },
    { id: 's_sec3', label: '新锐股份·东吴证券' }
  ]},
  { title: 'A级标的', links: [
    { id: 's_sec4', label: '金山办公·群益证券' },
    { id: 's_sec5', label: '申通快递·群益证券' },
    { id: 's_sec6', label: '海光信息·太平洋证券' },
    { id: 's_sec7', label: '众鑫股份·信达证券' },
    { id: 's_sec8', label: '新天然气·中邮证券' },
    { id: 's_sec9', label: '神火股份·国金证券' },
    { id: 's_sec10', label: '龙源电力·开源证券' },
    { id: 's_sec11', label: '川恒股份·东吴证券' }
  ]},
  { title: '评级汇总', links: [
    { id: 's_sec12', label: '全量100只标的清单' },
    { id: 's_sec13', label: 'B级标的汇总' },
    { id: 's_sec14', label: 'C级标的汇总' }
  ]},
  { title: '行业分析', links: [
    { id: 's_sec15', label: '行业分布热力图' },
    { id: 's_sec16', label: '投资风险提示' }
  ]}
];

function renderStockNav_0416() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0416.map(group => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">${group.title}</h4>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            class="nav-btn w-full text-left text-sm py-1.5 px-3 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors truncate"
            data-section="${link.id}"
            onclick="scrollToSection('stock', '${link.id}')"
          >
            <div class="flex items-center">
              <div class="w-1 h-1 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
              <span class="truncate">${link.label}</span>
            </div>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
