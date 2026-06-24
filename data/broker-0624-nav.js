// ==========================================
// 券商晨报导航配置 - 2026-06-24
// ==========================================

const BROKER_NAV_CONFIG_0624 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '当日核心共识' }
    ]
  },
  {
    title: '大势研判',
    links: [
      { id: 'sec2', label: '券商观点矩阵' }
    ]
  },
  {
    title: '热门行业',
    links: [
      { id: 'sec3', label: '行业共识榜' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'sec4', label: '金股共识榜' }
    ]
  },
  {
    title: '多空分歧',
    links: [
      { id: 'sec5', label: '主要分歧点' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec6', label: '分券商摘要' }
    ]
  }
];

function renderBrokerNav_0624() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0624.map(group => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-3">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('${link.id}', 'broker')"
                  data-section="${link.id}"
                  class="nav-btn w-full text-left px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors flex items-center group">
            <span class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 group-hover:bg-red-500 transition-colors"></span>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
