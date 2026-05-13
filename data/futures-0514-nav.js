// ==========================================
// 期货市场导航模块 - 2026-05-14
// ==========================================

const FUTURES_NAV_CONFIG_0514 = [
  { title: '行情概览', links: [
    { id: 'f_sec1', label: '主要品种行情表' }
  ]},
  { title: '品种分析', links: [
    { id: 'f_sec2', label: '原油/能源' },
    { id: 'f_sec3', label: '有色金属（铜/铝）' },
    { id: 'f_sec4', label: '贵金属（黄金/白银）' },
    { id: 'f_sec5', label: '农产品（豆系/鸡蛋）' }
  ]},
  { title: '交易机会', links: [
    { id: 'f_sec6', label: '做多/做空机会' },
    { id: 'f_sec7', label: '风险提示' }
  ]}
];

function renderFuturesNav_0514() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0514.map(group => `
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
