// ==========================================
// 个股研报导航配置 - 2026 年 3 月 18 日
// ==========================================

const STOCK_NAV_CONFIG_0318 = [
  {
    title: 'S 级标的',
    links: [
      { id: 'sec1', label: '深南电路 (002916.SZ)' },
      { id: 'sec2', label: '江苏银行 (600919.SH)' },
      { id: 'sec3', label: '芯碁微装 (688630.SH)' }
    ]
  },
  {
    title: 'A 级标的',
    links: [
      { id: 'sec4', label: '万华化学 (600309.SH)' },
      { id: 'sec5', label: '贵州茅台 (600519.SH)' },
      { id: 'sec6', label: '海能技术 (920476.BJ)' },
      { id: 'sec7', label: '西部超导 (688122.SH)' },
      { id: 'sec8', label: '中信证券 (600030.SH)' },
      { id: 'sec9', label: '中国人寿 (601628.SH)' },
      { id: 'sec10', label: '中信出版 (300788.SZ)' },
      { id: 'sec11', label: '天味食品 (603317.SH)' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 'sec12', label: '完整评级汇总表' }
    ]
  }
];

function renderStockNav_0318() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  let html = '';
  STOCK_NAV_CONFIG_0318.forEach((section, index) => {
    html += `<div class="mb-6">`;
    html += `<h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-3">${section.title}</h3>`;
    html += `<ul class="space-y-1">`;
    section.links.forEach(link => {
      html += `
        <li>
          <button onclick="scrollToSection('stock', '${link.id}')"
            class="nav-btn w-full flex items-center px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-all duration-200"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors"></div>
            <span>${link.label}</span>
          </button>
        </li>
      `;
    });
    html += `</ul></div>`;
  });

  container.innerHTML = html;
}
