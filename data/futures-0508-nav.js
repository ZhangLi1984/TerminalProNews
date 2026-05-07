// ==========================================
// 期货市场导航配置 - 2026-05-08
// ==========================================

const FUTURES_NAV_CONFIG_0508 = [
  { title: '期货概览', links: [
    { id: 'sec1', label: '今日期货市场摘要' }
  ]}
];

function renderFuturesNav_0508() {
  const container = document.getElementById('futures-nav-content');
  if (!container) return;

  container.innerHTML = FUTURES_NAV_CONFIG_0508.map(group => `
    <div>
      <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('futures', '${link.id}')"
            class="nav-btn w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center"
            data-section="${link.id}"
          >
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
