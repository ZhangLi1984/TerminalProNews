// ==========================================
// Decision Nav Config: 2026-03-22
// ==========================================

const DECISION_NAV_CONFIG_0322 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '市场概览' },
      { id: 'sec2', label: '资金主攻赛道' }
    ]
  },
  {
    title: 'S 级赛道',
    links: [
      { id: 'sec3', label: '通信/AI 算力' },
      { id: 'sec4', label: '电子/建材' },
      { id: 'sec5', label: '机械/工程机械' },
      { id: 'sec6', label: '银行/证券' },
      { id: 'sec7', label: '汽车/锂电' },
      { id: 'sec8', label: '光伏/新能源' },
      { id: 'sec9', label: '食品/消费' }
    ]
  },
  {
    title: 'A 级赛道',
    links: [
      { id: 'sec10', label: '证券/医药' },
      { id: 'sec11', label: '半导体/通信' },
      { id: 'sec12', label: '汽车/光伏' }
    ]
  },
  {
    title: '策略观点',
    links: [
      { id: 'sec13', label: '宏观策略' },
      { id: 'sec14', label: '行业轮动' }
    ]
  }
];

function renderDecisionNav_0322() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';
  DECISION_NAV_CONFIG_0322.forEach((category, idx) => {
    html += `
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center">
          <span class="w-2 h-2 rounded-full bg-red-600 mr-2"></span>
          ${category.title}
        </h3>
        <div class="space-y-2">
          ${category.links.map(link => `
            <a href="#decision-sec${idx + 1}-${link.id}" class="block px-3 py-2 text-sm text-slate-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors duration-200">
              ${link.label}
            </a>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}
