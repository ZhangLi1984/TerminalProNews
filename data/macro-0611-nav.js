// ==========================================
// 宏观研究导航 - 2026年6月11日
// ==========================================

const MACRO_NAV_CONFIG_0611 = [
  {
    title: '核心研判',
    links: [
      { id: 'm_sec1', label: '核心宏观判断' },
      { id: 'm_sec2', label: '周期定位' }
    ]
  },
  {
    title: '通胀分析',
    links: [
      { id: 'm_sec3', label: '中国通胀' },
      { id: 'm_sec4', label: '美国通胀' }
    ]
  },
  {
    title: '政策分析',
    links: [
      { id: 'm_sec5', label: '货币政策' },
      { id: 'm_sec6', label: '财政政策' },
      { id: 'm_sec7', label: '产业政策' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec8', label: '大类资产配置' },
      { id: 'm_sec9', label: '行业轮动' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec10', label: '外部风险' },
      { id: 'm_sec11', label: '内部风险' },
      { id: 'm_sec12', label: '证伪指标' }
    ]
  }
];

function renderMacroNav_0611() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0611.map(section => `
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
