// ==========================================
// 期货市场导航 - 2026-04-21
// ==========================================

const FUTURES_NAV_CONFIG_0421 = [
  { title: '市场概览', links: [
    { id: 'f_sec1', label: '期货市场总览' }
  ] },
  { title: '板块分析', links: [
    { id: 'f_sec2', label: '能源化工板块' },
    { id: 'f_sec3', label: '有色金属板块' },
    { id: 'f_sec4', label: '贵金属板块' },
    { id: 'f_sec5', label: '农产品板块' }
  ] },
  { title: '新闻热点', links: [{ id: 'f_sec6', label: '重要新闻与观点' }] },
  { title: '交易机会', links: [{ id: 'f_sec7', label: '做多/做空机会' }] },
  { title: '风险提示', links: [{ id: 'f_sec8', label: '风险与对冲建议' }] }
];

function renderFuturesNav_0421() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  container.innerHTML = FUTURES_NAV_CONFIG_0421.map(group => `
    <div>
      <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('futures','${link.id}')" data-section="${link.id}"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-all flex items-start gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mt-1.5 flex-shrink-0"></div>
            <span class="leading-tight">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
