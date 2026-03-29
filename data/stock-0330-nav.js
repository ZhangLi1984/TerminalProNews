// ==========================================
// 个股研报导航 - 2026年3月30日
// ==========================================

const STOCK_NAV_CONFIG_0330 = [
  {
    title: '核心摘要',
    links: [
      { id: 's_sec1', label: '今日研报概览' }
    ]
  },
  {
    title: 'S级标的',
    links: [
      { id: 's_sec2', label: '鼎泰高科 (9.2分)' },
      { id: 's_sec3', label: '龙佰集团 (8.8分)' },
      { id: 's_sec4', label: '宁波银行 (8.6分)' }
    ]
  },
  {
    title: 'A级标的',
    links: [
      { id: 's_sec5', label: '中国海油 (8.2分)' },
      { id: 's_sec6', label: '中国平安 (7.9分)' },
      { id: 's_sec7', label: '中国太保 (7.8分)' },
      { id: 's_sec8', label: '中信证券 (7.7分)' },
      { id: 's_sec9', label: '赤峰黄金 (7.6分)' },
      { id: 's_sec10', label: '东方电缆 (7.5分)' },
      { id: 's_sec11', label: '比亚迪 (7.4分)' },
      { id: 's_sec12', label: '金山办公 (7.3分)' },
      { id: 's_sec13', label: '海南矿业 (7.2分)' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec14', label: '完整评级表 (100只)' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 's_sec15', label: '投资风险警示' }
    ]
  }
];

function renderStockNav_0330() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  let html = '';

  STOCK_NAV_CONFIG_0330.forEach((group, groupIndex) => {
    html += `
      <div class="nav-group">
        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">${group.title}</h3>
        <div class="space-y-1">
          ${group.links.map((link, linkIndex) => `
            <button
              class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${linkIndex === 0 && groupIndex === 0 ? 'bg-slate-900 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'}"
              data-section="${link.id}"
              onclick="scrollToSection('stock', '${link.id}')"
            >
              <span>${link.label}</span>
              <div class="w-1.5 h-1.5 rounded-full ${linkIndex === 0 && groupIndex === 0 ? 'bg-red-500' : 'bg-transparent'} group-hover:bg-red-400 transition-colors"></div>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}