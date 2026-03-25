// ==========================================
// 券商晨报 - 导航配置 (2026-03-25)
// ==========================================

const BROKER_NAV_CONFIG_0325 = [
  {
    title: '晨报概览',
    links: [
      { id: 'b_sec1', label: '宏观策略汇总' }
    ]
  },
  {
    title: '热门推荐',
    links: [
      { id: 'b_sec1', label: '热门赛道TOP5' },
      { id: 'b_sec1', label: '金股TOP10' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'b_sec1', label: '投资策略' },
      { id: 'b_sec1', label: '风险提示' }
    ]
  }
];

function renderBrokerNav_0325() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  let html = '';

  BROKER_NAV_CONFIG_0325.forEach(section => {
    html += `<div class="mb-6">
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">${section.title}</h4>
      <div class="space-y-1">`;

    section.links.forEach(link => {
      html += `<button
        class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
        data-section="${link.id}"
        onclick="scrollToSection('broker', '${link.id}')"
      >
        ${link.label}
      </button>`;
    });

    html += `</div>
    </div>`;
  });

  container.innerHTML = html;
}