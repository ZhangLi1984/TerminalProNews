// ==========================================
// 宏观研究导航配置 - 2026 年 4 月 7 日
// ==========================================

const MACRO_NAV_CONFIG_0407 = [
  {
    title: '宏观策略',
    links: [
      { id: 'm_sec1', label: '核心观点' },
      { id: 'm_sec2', label: '全球宏观' },
      { id: 'm_sec3', label: '国内政策' }
    ]
  },
  {
    title: '市场分析',
    links: [
      { id: 'm_sec4', label: '大类资产' },
      { id: 'm_sec5', label: '资金流向' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'm_sec6', label: '配置策略' }
    ]
  }
];

function renderMacroNav_0407() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  const navHtml = MACRO_NAV_CONFIG_0407.map(cat => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${cat.title}</h3>
      <div class="space-y-1">
        ${cat.links.map(link => `
          <button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
            data-section="${link.id}"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition-all flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors ${link.id === 'm_sec1' ? 'bg-red-500' : 'bg-transparent group-hover:bg-slate-300'}"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  container.innerHTML = navHtml;
}
