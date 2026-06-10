// ==========================================
// 投资决策导航配置 - 2026年6月10日
// ==========================================

const DECISION_NAV_CONFIG_0610 = [
  {
    title: '宏观要闻',
    links: [
      { id: 'sec1', label: '美国CPI超预期' },
      { id: 'sec2', label: '中东局势升级' },
      { id: 'sec3', label: '国内政策动态' }
    ]
  },
  {
    title: '产业聚焦',
    links: [
      { id: 'sec4', label: 'AI与通信芯片' },
      { id: 'sec5', label: '存储与半导体' },
      { id: 'sec6', label: '光伏与新能源' }
    ]
  },
  {
    title: '公司动态',
    links: [
      { id: 'sec7', label: '上市公司公告' },
      { id: 'sec8', label: '资本市场动向' }
    ]
  },
  {
    title: '市场观察',
    links: [
      { id: 'sec9', label: '资金流向' },
      { id: 'sec10', label: '风险提示' }
    ]
  }
];

function renderDecisionNav_0610() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0610.map(category => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-3">${category.title}</h3>
      <div class="space-y-1">
        ${category.links.map(link => `
          <button
            data-section="${link.id}"
            onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}').scrollIntoView({ behavior: 'smooth', block: 'start' });"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center group"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 group-hover:bg-red-400 transition-colors"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
