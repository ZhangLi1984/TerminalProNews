// ==========================================
// 券商晨报导航配置 - 2026 年 4 月 7 日
// ==========================================

const BROKER_NAV_CONFIG_0407 = [
  {
    title: '晨会精华',
    links: [
      { id: 'b_sec1', label: '核心观点' },
      { id: 'b_sec2', label: '重点推荐' }
    ]
  },
  {
    title: '行业精选',
    links: [
      { id: 'b_sec3', label: '券商 1 季报' },
      { id: 'b_sec4', label: '保险 NBV' }
    ]
  },
  {
    title: '公司跟踪',
    links: [
      { id: 'b_sec5', label: '华泰证券' },
      { id: 'b_sec6', label: '中信建投' }
    ]
  }
];

function renderBrokerNav_0407() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  const navHtml = BROKER_NAV_CONFIG_0407.map(cat => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${cat.title}</h3>
      <div class="space-y-1">
        ${cat.links.map(link => `
          <button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
            data-section="${link.id}"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition-all flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors ${link.id === 'b_sec1' ? 'bg-red-500' : 'bg-transparent group-hover:bg-slate-300'}"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = navHtml;
}
