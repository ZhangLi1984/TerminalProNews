// ==========================================
// 智研金融 Terminal Pro - 券商晨报导航 2026-04-08
// ==========================================

const BROKER_NAV_CONFIG_0408 = [
  {
    title: '晨会要点',
    links: [
      { id: 'b_sec1', label: '策略观点' },
      { id: 'b_sec2', label: '行业配置' }
    ]
  },
  {
    title: '重点推荐',
    links: [
      { id: 'b_sec3', label: '金股组合' },
      { id: 'b_sec4', label: '主题机会' }
    ]
  },
  {
    title: '数据追踪',
    links: [
      { id: 'b_sec5', label: '资金流向' },
      { id: 'b_sec6', label: '涨停复盘' }
    ]
  }
];

function renderBrokerNav_0408() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0408.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('${link.id}')" class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent inline-block mr-2"></div>${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
