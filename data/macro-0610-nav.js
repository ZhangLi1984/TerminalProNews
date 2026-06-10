// ==========================================
// 宏观研究导航 - 2026年6月10日
// ==========================================

const MACRO_NAV_CONFIG_0610 = [
  {
    title: '核心研判',
    links: [
      { id: 'm_sec1', label: '执行摘要' },
      { id: 'm_sec2', label: '宏观经济数据速览' }
    ]
  },
  {
    title: '国内宏观',
    links: [
      { id: 'm_sec3', label: '通胀研判' },
      { id: 'm_sec4', label: '增长动能切换' },
      { id: 'm_sec5', label: '货币与流动性' },
      { id: 'm_sec6', label: '房地产风险' }
    ]
  },
  {
    title: '海外宏观',
    links: [
      { id: 'm_sec7', label: '美国就业市场' },
      { id: 'm_sec8', label: '美联储政策' },
      { id: 'm_sec9', label: '美国经济分化' }
    ]
  },
  {
    title: '配置建议',
    links: [
      { id: 'm_sec10', label: '债券策略' },
      { id: 'm_sec11', label: '权益配置' }
    ]
  }
];

function renderMacroNav_0610() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0610.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <ul class="space-y-1">
        ${section.links.map(link => `
          <li>
            <a href="#${link.id}" data-section="${link.id}" class="nav-btn block px-3 py-2 text-sm rounded-lg text-slate-700 hover:bg-slate-100 transition-colors" onclick="updateActiveNav('${link.id}')">
              <div class="flex items-center">
                <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
                <span>${link.label}</span>
              </div>
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
