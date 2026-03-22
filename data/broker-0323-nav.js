// ==========================================
// 券商晨报导航配置 - 2026 年 3 月 23 日
// ==========================================

const BROKER_NAV_CONFIG_0323 = [
  {
    title: '核心观点',
    links: [
      { id: 'b_sec1', label: '执行摘要' },
      { id: 'b_sec2', label: '券商观点汇总' }
    ]
  },
  {
    title: '配置建议',
    links: [
      { id: 'b_sec3', label: '行业推荐共识' },
      { id: 'b_sec4', label: '个股推荐共识' }
    ]
  },
  {
    title: '策略指导',
    links: [
      { id: 'b_sec5', label: '投资策略建议' },
      { id: 'b_sec6', label: '分歧点汇总' }
    ]
  }
];

function renderBrokerNav_0323() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0323.map((section, idx) => `
    <div class="nav-section">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-2">
        ${section.title}
      </h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button
            onclick="scrollToSection('broker', '${link.id}'); updateActiveNav('${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100"
            data-section="${link.id}"
          >
            <div class="flex items-center">
              <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors"></div>
              <span>${link.label}</span>
            </div>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
