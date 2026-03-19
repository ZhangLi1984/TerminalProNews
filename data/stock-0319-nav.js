// ==========================================
// 个股研报导航配置 - 2026-03-19
// ==========================================

const STOCK_NAV_CONFIG_0319 = [
  {
    title: '🏆 S 级标的',
    links: [
      { id: 's_sec1', label: '暂无 S 级标的' }
    ]
  },
  {
    title: '🎯 A 级标的',
    links: [
      { id: 's_sec2', label: '深南电路 - AI 算力 PCB 高增' },
      { id: 's_sec3', label: '比亚迪 - 高端化 + 全球化' },
      { id: 's_sec4', label: '万辰集团 - 业绩爆发 +358%' },
      { id: 's_sec5', label: '崇德科技 - 燃机轴承龙头' },
      { id: 's_sec6', label: '彤程新材 - 光刻胶国产化' },
      { id: 's_sec7', label: '藏格矿业 - 锂钾铜资源' },
      { id: 's_sec8', label: '新和成 - 蛋氨酸涨价' },
      { id: 's_sec9', label: '江苏银行 - 城商行龙头' }
    ]
  },
  {
    title: '📋 评级汇总表',
    links: [
      { id: 's_sec10', label: '完整评级榜单 (102 篇)' }
    ]
  },
  {
    title: '📊 行业分布',
    links: [
      { id: 's_sec11', label: '行业统计与风险提示' }
    ]
  }
];

function renderStockNav_0319() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0319.map(section => `
    <div class="mb-5">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-2 px-2">${section.title}</h3>
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
