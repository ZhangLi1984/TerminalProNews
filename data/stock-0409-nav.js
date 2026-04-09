// ==========================================
// 个股研报导航配置 - 2026 年 4 月 9 日
// ==========================================

const STOCK_NAV_CONFIG_0409 = [
  {
    title: 'S 级标的',
    links: [
      { id: 's_sec1', label: '璞泰来' }
    ]
  },
  {
    title: 'A 级标的',
    links: [
      { id: 'a_sec1', label: '中际旭创' },
      { id: 'a_sec2', label: '天孚通信' },
      { id: 'a_sec3', label: '牧原股份' },
      { id: 'a_sec4', label: '千里科技' },
      { id: 'a_sec5', label: '确成股份' },
      { id: 'a_sec6', label: '福斯特' }
    ]
  },
  {
    title: 'B 级精选',
    links: [
      { id: 'b_sec1', label: '扬农化工' },
      { id: 'b_sec2', label: '盐湖股份' },
      { id: 'b_sec3', label: '东方财富' },
      { id: 'b_sec4', label: '金山办公' },
      { id: 'b_sec5', label: '迈瑞医疗' },
      { id: 'b_sec6', label: '圣邦股份' },
      { id: 'b_sec7', label: '上海医药' },
      { id: 'b_sec8', label: '丽珠集团' },
      { id: 'b_sec9', label: '安井食品' },
      { id: 'b_sec10', label: '四方股份' },
      { id: 'b_sec11', label: '中航沈飞' },
      { id: 'b_sec12', label: '兴发集团' },
      { id: 'b_sec13', label: '奥特维' },
      { id: 'b_sec14', label: '天润乳业' },
      { id: 'b_sec15', label: '天马新材' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 'summary_sec', label: '完整榜单' },
      { id: 'advice_sec', label: '配置建议' }
    ]
  }
];

function renderStockNav_0409() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  const navHtml = STOCK_NAV_CONFIG_0409.map(cat => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${cat.title}</h3>
      <div class="space-y-1">
        ${cat.links.map(link => `
          <button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
            data-section="${link.id}"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition-all flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors ${link.id.startsWith('s_sec') ? 'bg-purple-500' : link.id.startsWith('a_sec') ? 'bg-blue-500' : link.id.startsWith('b_sec') ? 'bg-emerald-500' : 'bg-transparent group-hover:bg-slate-300'}"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = navHtml;
}
