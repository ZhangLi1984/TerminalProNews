// ==========================================
// 个股研报导航配置 - 2026 年 3 月 24 日
// ==========================================

const STOCK_NAV_CONFIG_0324 = [
  {
    title: '核心摘要',
    links: [
      { id: 's_sec1', label: '今日概览' }
    ]
  },
  {
    title: 'S 级标的',
    links: [
      { id: 's_sec2', label: '寒武纪 (9.8 分)' },
      { id: 's_sec3', label: '紫金矿业 (9.8 分)' },
      { id: 's_sec4', label: '福耀玻璃 (9.7 分)' },
      { id: 's_sec5', label: '中国中免 (9.5 分)' },
      { id: 's_sec6', label: '中金黄金 (9.5 分)' },
      { id: 's_sec7', label: '璞泰来 (9.4 分)' },
      { id: 's_sec8', label: '万辰集团 (9.2 分)' },
      { id: 's_sec9', label: '香农芯创 (9.1 分)' }
    ]
  },
  {
    title: 'A 级标的',
    links: [
      { id: 's_sec10', label: '贵州茅台 (9.0 分)' },
      { id: 's_sec11', label: '道通科技 (8.8 分)' },
      { id: 's_sec12', label: '华润三九 (8.7 分)' },
      { id: 's_sec13', label: '苑东生物 (8.6 分)' },
      { id: 's_sec14', label: '东阿阿胶 (8.4 分)' },
      { id: 's_sec15', label: '昆药集团 (8.4 分)' },
      { id: 's_sec16', label: '南钢股份 (8.3 分)' },
      { id: 's_sec17', label: '天味食品 (8.3 分)' },
      { id: 's_sec18', label: '路维光电 (8.3 分)' },
      { id: 's_sec19', label: '瑞达期货 (8.2 分)' },
      { id: 's_sec20', label: '聚灿光电 (8.2 分)' },
      { id: 's_sec21', label: '嘉泽新能 (8.2 分)' },
      { id: 's_sec22', label: '金雷股份 (8.1 分)' },
      { id: 's_sec23', label: '华润江中 (8.1 分)' },
      { id: 's_sec24', label: '中信银行 (8.1 分)' },
      { id: 's_sec25', label: '湘财股份 (7.9 分)' }
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec26', label: '完整评级表' },
      { id: 's_sec27', label: '评级分布' },
      { id: 's_sec28', label: '风险提示' }
    ]
  }
];

function renderStockNav_0324() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0324.map(section => `
    <div class="nav-section">
      <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">${section.title}</h4>
      <ul class="space-y-0.5">
        ${section.links.map(link => `
          <li>
            <button onclick="scrollToSection('stock', '${link.id}')"
              class="nav-btn w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors duration-150 text-slate-700 hover:bg-slate-100 hover:text-slate-900 truncate"
              data-section="${link.id}">
              ${link.label}
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
