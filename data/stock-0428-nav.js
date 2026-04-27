const STOCK_NAV_CONFIG_0428 = [
  { title: '核心摘要', links: [{ id: 's_sec1', label: '研报总览' }] },
  { title: 'S 级标的', links: [
    { id: 's_sec2', label: '中孚实业(600595)' },
    { id: 's_sec3', label: '赣锋锂业(002460)' },
    { id: 's_sec4', label: '华凯易佰(300592)' },
    { id: 's_sec5', label: '长川科技(300604)' },
    { id: 's_sec6', label: '紫金矿业(601899)' },
    { id: 's_sec7', label: '江淮汽车(600418)' },
    { id: 's_sec8', label: '骄成超声(688392)' }
  ]},
  { title: 'A 级标的', links: [
    { id: 's_sec9', label: '三全食品(002216)' },
    { id: 's_sec10', label: '盘江股份(600395)' },
    { id: 's_sec11', label: '广发证券(000776)' },
    { id: 's_sec12', label: '贝泰妮(300957)' },
    { id: 's_sec13', label: '雅化集团(002497)' },
    { id: 's_sec14', label: '东方证券(600958)' },
    { id: 's_sec15', label: '科华数据(002335)' },
    { id: 's_sec16', label: '聚星科技(920111)' },
    { id: 's_sec17', label: '建邦科技(920242)' },
    { id: 's_sec18', label: '中盐化工(600328)' },
    { id: 's_sec19', label: '三峡旅游(002627)' },
    { id: 's_sec20', label: '水星家纺(603365)' },
    { id: 's_sec21', label: '艾迪精密(603638)' },
    { id: 's_sec22', label: '热景生物(688068)' },
    { id: 's_sec23', label: '和顺科技(301237)' }
  ]},
  { title: '评级汇总', links: [
    { id: 's_sec24', label: '全量评级汇总表' },
    { id: 's_sec25', label: 'C 级规避标的' }
  ]},
  { title: '行业分布', links: [
    { id: 's_sec26', label: '行业赛道分布' },
    { id: 's_sec27', label: '资金主攻方向' }
  ]},
  { title: '配置建议', links: [{ id: 's_sec28', label: '核心仓位组合' }] }
];

function renderStockNav_0428() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0428.map(group => `
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
