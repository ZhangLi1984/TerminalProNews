// ==========================================
// 个股研报模块 - 导航配置 (2026-05-28)
// ==========================================

const STOCK_NAV_CONFIG_0528 = [
  {
    title: 'S 级标的',
    links: [
      { id: 's_sec1', label: 'S 级·中际旭创（300308）' },
      { id: 's_sec2', label: 'S 级·天赐材料（002709）' },
    ]
  },
  {
    title: 'A 级标的',
    links: [
      { id: 's_sec3', label: 'A 级·新易盛（300502）' },
      { id: 's_sec4', label: 'A 级·大金重工（002487）' },
      { id: 's_sec5', label: 'A 级·生益科技（600183）' },
      { id: 's_sec6', label: 'A 级·科达利（002850）' },
    ]
  },
  {
    title: '评级汇总',
    links: [
      { id: 's_sec7', label: '完整评级汇总表（40 只）' },
      { id: 's_sec8', label: '评估维度说明' },
    ]
  },
];

function renderStockNav_0528() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0528.map(cat => `
    <div class="mb-4">
      <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${cat.title}</div>
      <div class="space-y-0.5">
        ${cat.links.map(link => `
          <button class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all flex items-center group"
                  data-section="${link.id}" onclick="updateActiveNav('${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
