// ==========================================
// 期货市场导航 - 2026-04-23
// ==========================================

const FUTURES_NAV_CONFIG_0423 = [
  { title: '期货行情', links: [
    { id: 'f_sec1', label: '板块行情总览' },
  ]},
  { title: '品种分析', links: [
    { id: 'f_sec2', label: '能源化工' },
    { id: 'f_sec3', label: '有色金属' },
    { id: 'f_sec4', label: '农产品' },
    { id: 'f_sec5', label: '黑色系' },
  ]},
  { title: '策略与风险', links: [
    { id: 'f_sec6', label: '交易机会' },
    { id: 'f_sec7', label: '风险提示' },
  ]}
];

function renderFuturesNav_0423() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;
  container.innerHTML = FUTURES_NAV_CONFIG_0423.map(group =>
    `<div><h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h4>
     <ul class="space-y-1">${group.links.map(l =>
       `<li><button onclick="scrollToSection('futures','${l.id}')" class="nav-btn w-full text-left text-sm text-slate-700 hover:bg-slate-100 px-2 py-1.5 rounded-lg transition-all" data-section="${l.id}"><div class="inline-block w-1.5 h-1.5 rounded-full bg-transparent mr-1"></div>${l.label}</button></li>`
     ).join('')}</ul></div>`
  ).join('');
}
