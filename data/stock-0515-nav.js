// ==========================================
// 个股研报导航模块 - 2026-05-15
// ==========================================

const STOCK_NAV_CONFIG_0515 = [
  { title: '核心摘要', links: [
    { id: 's_sec0', label: '今日研报概览' }
  ]},
  { title: 'S级标的', links: [
    { id: 's_sec1', label: '鼎龙股份 (300054)' }
  ]},
  { title: 'A级标的', links: [
    { id: 's_sec2', label: '盟固利/长电科技/电光科技' },
    { id: 's_sec3', label: '圣晖集成/超卓航科/晨光生物' },
    { id: 's_sec4', label: '泽璟制药/金沃股份/蓝思科技' },
    { id: 's_sec5', label: '兴福电子/时代电气' }
  ]},
  { title: '评级汇总', links: [
    { id: 's_sec6', label: '完整评级汇总表（100只）' },
    { id: 's_sec7', label: '评级体系说明' },
    { id: 's_sec8', label: '风险提示' }
  ]}
];

function renderStockNav_0515() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0515.map(group => `
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
