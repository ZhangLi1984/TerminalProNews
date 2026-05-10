// ==========================================
// 投资决策内参 - 导航配置 (2026-05-11)
// ==========================================

const DECISION_NAV_CONFIG_0511 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '3分钟速读' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec2', label: '中美经贸磋商' },
      { id: 'sec3', label: '美伊局势' },
      { id: 'sec4', label: 'DeepSeek融资' }
    ]
  },
  {
    title: '券商策略',
    links: [
      { id: 'sec5', label: '十大券商策略汇总' },
      { id: 'sec6', label: '核心配置方向' }
    ]
  },
  {
    title: '产业动态',
    links: [
      { id: 'sec7', label: 'AI算力/半导体' },
      { id: 'sec8', label: '新能源/锂电' },
      { id: 'sec9', label: '机器人/商业航天' },
      { id: 'sec10', label: '能源/大宗商品' }
    ]
  },
  {
    title: '市场观察',
    links: [
      { id: 'sec11', label: '美股与全球市场' },
      { id: 'sec12', label: 'A股市场' },
      { id: 'sec13', label: '重要公告' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec14', label: '地缘/流动性/泡沫' }
    ]
  }
];

function renderDecisionNav_0511() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';
  DECISION_NAV_CONFIG_0511.forEach(category => {
    html += `
      <div class="nav-category">
        <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">${category.title}</h3>
        <ul class="space-y-1">
          ${category.links.map((link, index) => `
            <li>
              <button
                onclick="scrollToSection('decision', '${link.id}')"
                class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${index === 0 ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}"
                data-section="${link.id}"
              >
                <div class="flex items-center justify-between">
                  <span>${link.label}</span>
                  <div class="w-1.5 h-1.5 rounded-full ${index === 0 ? 'bg-red-500' : 'bg-transparent'}"></div>
                </div>
              </button>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  });

  container.innerHTML = html;
}
