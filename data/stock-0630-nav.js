// ==========================================
// 个股研报导航模块 - 2026 年 6 月 30 日
// ==========================================

const STOCK_NAV_CONFIG_0630 = [
  {
    title: 'S级标的',
    links: [
      { id: 's_sec1', label: '卫星化学' },
      { id: 's_sec2', label: '鸿富瀚' },
      { id: 's_sec3', label: '恒誉环保' },
      { id: 's_sec4', label: '奥普特' },
      { id: 's_sec5', label: '兆易创新' },
      { id: 's_sec6', label: '德业股份' },
      { id: 's_sec7', label: '世纪华通' },
      { id: 's_sec8', label: '泽璟制药' },
      { id: 's_sec9', label: '长川科技' }
    ]
  },
  {
    title: 'A级标的',
    links: [
      { id: 'bc_summary', label: 'B/C级汇总' },
      { id: 'full_list', label: '全量清单' }
    ]
  }
];

function renderStockNav_0630() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = `
    <nav class="space-y-6">
      ${STOCK_NAV_CONFIG_0630.map(section => `
        <div>
          <h3 class="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 px-4">${section.title}</h3>
          <ul class="space-y-1">
            ${section.links.map(link => `
              <li>
                <a href="#${link.id}" onclick="scrollToSection('${link.id}')"
                   class="block px-4 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg transition-colors">
                  ${link.label}
                </a>
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('')}
    </nav>
  `;
}
