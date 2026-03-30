// ==========================================
// 券商晨报导航配置 - 2026-03-31
// ==========================================

const BROKER_NAV_CONFIG_0331 = [
  {
    title: '晨会精华',
    links: [
      { id: 'b_sec1', label: '核心观点摘要' },
      { id: 'b_sec2', label: '重点推荐' }
    ]
  },
  {
    title: '市场策略',
    links: [
      { id: 'b_sec3', label: 'A 股策略' },
      { id: 'b_sec4', label: '港股策略' }
    ]
  },
  {
    title: '行业聚焦',
    links: [
      { id: 'b_sec5', label: '热门行业点评' }
    ]
  },
  {
    title: '公司研究',
    links: [
      { id: 'b_sec6', label: '重点公司评级' }
    ]
  }
];

function renderBrokerNav_0331() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  let html = '';
  BROKER_NAV_CONFIG_0331.forEach((category, idx) => {
    html += `<div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${category.title}</h3>
      <div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
                class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center group hover:bg-slate-100"
                data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-slate-400"></div>
        <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
      </button>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
