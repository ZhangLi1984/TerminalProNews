// ==========================================
// 券商晨报导航模块 - 2026-03-17
// ==========================================

const BROKER_NAV_CONFIG_0317 = [
  {
    title: '晨报摘要',
    links: [
      { id: 'sec1', label: '核心观点' },
      { id: 'sec2', label: '重点推荐' }
    ]
  },
  {
    title: '机构观点',
    links: [
      { id: 'sec3', label: '策略研判' },
      { id: 'sec4', label: '行业配置' }
    ]
  },
  {
    title: '个股评级',
    links: [
      { id: 'sec5', label: '首次覆盖' },
      { id: 'sec6', label: '评级上调' }
    ]
  }
];

function renderBrokerNav_0317() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0317.map(section => `
    <div class="nav-section">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('broker', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-cyan-400 transition-colors mr-2.5"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
