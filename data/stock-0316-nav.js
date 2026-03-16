// ==========================================
// 个股研报导航模块 - 2026 年 3 月 16 日
// ==========================================

const STOCK_NAV_CONFIG_0316 = [
  {
    title: '🏆 S 级标的',
    links: [
      { id: 'sec1', label: '燕麦科技 - FPC 测试龙头' },
      { id: 'sec2', label: '宁德时代 - 锂电全球龙头' },
      { id: 'sec3', label: '连城数控 - 光伏设备出海' },
      { id: 'sec4', label: '北矿检测 - 有色金属检测权威' }
    ]
  },
  {
    title: '🎯 A 级标的',
    links: [
      { id: 'sec5', label: 'TCL 智家 - 业绩稳健增长' }
    ]
  },
  {
    title: '📋 评级汇总表',
    links: [
      { id: 'sec6', label: '完整评级榜单 (100 篇)' }
    ]
  }
];

function renderStockNav_0316() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0316.map(section => `
    <div class="mb-5">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button class="nav-btn w-full flex items-center px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded-md transition-all" data-section="${link.id}" onclick="document.getElementById('${link.id}').scrollIntoView({behavior:'smooth',block:'start'})">
            <div class="w-1 h-1 rounded-full bg-transparent mr-2"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
