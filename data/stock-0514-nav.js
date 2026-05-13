// ==========================================
// 个股研报导航模块 - 2026-05-14
// ==========================================

const STOCK_NAV_CONFIG_0514 = [
  { title: 'S级标的', links: [
    { id: 's_sec1', label: '三美股份' },
    { id: 's_sec2', label: '永和股份' },
    { id: 's_sec3', label: '长电科技' },
    { id: 's_sec4', label: '时代电气' },
    { id: 's_sec5', label: '万辰集团' }
  ]},
  { title: 'A级标的', links: [
    { id: 's_sec6', label: '药康生物/卓越新能' },
    { id: 's_sec7', label: '华源控股/华康股份' },
    { id: 's_sec8', label: '新泉股份/西麦食品' },
    { id: 's_sec9', label: '智微智能/铂科新材' },
    { id: 's_sec10', label: '百济神州/山金国际/新开源' }
  ]},
  { title: '评级汇总', links: [
    { id: 's_sec11', label: '完整评级汇总表（100只）' }
  ]}
];

function renderStockNav_0514() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0514.map(group => `
    <div class="space-y-1.5">
      <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2">${group.title}</p>
      ${group.links.map(link => `
        <button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
          onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'});">
          <div class="w-1 h-1 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
          <span class="truncate">${link.label}</span>
        </button>
      `).join('')}
    </div>
  `).join('');
}
