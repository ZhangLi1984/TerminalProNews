// ==========================================
// Industry Nav Config: 2026-03-22
// ==========================================

const INDUSTRY_NAV_CONFIG_0322 = [
  {
    title: '核心赛道',
    links: [
      { id: 'sec1', label: 'AI 算力基础设施' },
      { id: 'sec2', label: '人形机器人' },
      { id: 'sec3', label: 'EDA/半导体' }
    ]
  },
  {
    title: '周期资源',
    links: [
      { id: 'sec4', label: '大宗商品监测' },
      { id: 'sec5', label: '建材/电子' },
      { id: 'sec6', label: '机械/工程机械' }
    ]
  },
  {
    title: '大金融',
    links: [
      { id: 'sec7', label: '银行' },
      { id: 'sec8', label: '证券' }
    ]
  },
  {
    title: '大消费',
    links: [
      { id: 'sec9', label: '汽车/锂电' },
      { id: 'sec10', label: '食品/餐饮' },
      { id: 'sec11', label: '医药生物' }
    ]
  },
  {
    title: '新能源',
    links: [
      { id: 'sec12', label: '光伏' },
      { id: 'sec13', label: '储能' }
    ]
  },
  {
    title: '策略配置',
    links: [
      { id: 'sec14', label: '产业链估值监测' },
      { id: 'sec15', label: 'CIO 配置建议' }
    ]
  }
];

function renderIndustryNav_0322() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  let html = '';
  INDUSTRY_NAV_CONFIG_0322.forEach((category, idx) => {
    html += `
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center">
          <span class="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
          ${category.title}
        </h3>
        <div class="space-y-2">
          ${category.links.map(link => `
            <a href="#industry-sec${idx + 1}-${link.id}" class="block px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors duration-200">
              ${link.label}
            </a>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}
