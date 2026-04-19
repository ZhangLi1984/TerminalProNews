// ==========================================
// 个股研报导航模块 - 2026-04-19
// ==========================================

const STOCK_NAV_CONFIG_0419 = [
  { title: '核心摘要', links: [{ id: 's_sec1', label: '今日概览' }] },
  {
    title: 'S级标的',
    links: [
      { id: 's_sec2', label: '中际旭创 (300308)' },
      { id: 's_sec3', label: '胜宏科技 (300476)' },
      { id: 's_sec4', label: '纽威股份 (603699)' },
      { id: 's_sec5', label: '凯莱英 (002821)' },
      { id: 's_sec6', label: '华友钴业 (603799)' }
    ]
  },
  {
    title: 'A级标的',
    links: [
      { id: 's_sec7', label: '昭衍新药/恒力石化' },
      { id: 's_sec8', label: '浙江鼎力/宁德时代' },
      { id: 's_sec9', label: '电投能源/春风动力' },
      { id: 's_sec10', label: '均胜电子/乖宝宠物' },
      { id: 's_sec11', label: '帝尔激光/藏格矿业' },
      { id: 's_sec12', label: '东方雨虹/迈瑞医疗' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec13', label: '完整评级汇总表' },
      { id: 's_sec14', label: '评级分布与行业热力' }
    ]
  },
  {
    title: '风险提示',
    links: [{ id: 's_sec15', label: '投资风险' }] }
];

function renderStockNav_0419() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0419.map(group => `
    <div>
      <h6 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">${group.title}</h6>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('stock', '${link.id}')"
            class="nav-btn w-full text-left text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 flex-shrink-0 transition-colors"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
