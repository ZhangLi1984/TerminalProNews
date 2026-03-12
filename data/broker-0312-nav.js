// ==========================================
// 券商晨报导航 - 2026-03-12
// ==========================================

const BROKER_NAV_CONFIG_0312 = [
  {
    title: '晨报精华',
    links: [
      { id: 'b_sec1', label: '核心观点汇总' },
      { id: 'b_sec2', label: '机构策略' }
    ]
  },
  {
    title: '行业聚焦',
    links: [
      { id: 'b_sec3', label: '医药生物' },
      { id: 'b_sec4', label: '半导体' },
      { id: 'b_sec5', label: '低空经济' },
      { id: 'b_sec6', label: '量子计算' }
    ]
  },
  {
    title: '主题投资',
    links: [
      { id: 'b_sec7', label: 'AI 算力' },
      { id: 'b_sec8', label: '国防军工' },
      { id: 'b_sec9', label: '新能源' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec10', label: '宏观风险' },
      { id: 'b_sec11', label: '交易层面风险' }
    ]
  }
];

function renderBrokerNav_0312() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0312.map(section => `
    <div class="space-y-2">
      <div class="text-xs font-black text-slate-500 uppercase tracking-widest px-3 py-2">${section.title}</div>
      ${section.links.map(link => `
        <button onclick="scrollToSection('broker', '${link.id}')"
                class="nav-btn w-full flex items-center px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                data-section="${link.id}">
          <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors"></div>
          ${link.label}
        </button>
      `).join('')}
    </div>
  `).join('');
}
