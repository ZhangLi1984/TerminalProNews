// ==========================================
// Industry Nav Config: 2026-03-23
// 行业研究汇总 - 导航配置
// ==========================================

const INDUSTRY_NAV_CONFIG_0323 = [
  {
    title: '券商晨报行业共识',
    links: [
      { id: 'i_sec1', label: '行业推荐共识 TOP10' },
      { id: 'i_sec2', label: '金股组合推荐' }
    ]
  },
  {
    title: '重点赛道解析',
    links: [
      { id: 'i_sec3', label: 'AI 算力与液冷' },
      { id: 'i_sec4', label: '锂电周期 + 固态电池' },
      { id: 'i_sec5', label: '能源安全与抗通胀' },
      { id: 'i_sec6', label: '生猪产能去化' }
    ]
  },
  {
    title: '宏观策略',
    links: [
      { id: 'i_sec7', label: '仓位建议' },
      { id: 'i_sec8', label: '风险提示' }
    ]
  }
];

function renderIndustryNav_0323() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  let html = '';
  INDUSTRY_NAV_CONFIG_0323.forEach((category) => {
    html += `
      <div class="mb-6">
        <h3 class="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center">
          <span class="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
          ${category.title}
        </h3>
        <div class="space-y-2">
          ${category.links.map(link => `
            <a href="#${link.id}" onclick="scrollToSection('industry', '${link.id}')" class="nav-btn block px-3 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors duration-200">
              ${link.label}
            </a>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}
