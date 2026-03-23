// ==========================================
// 宏观研究导航配置 - 2026 年 3 月 24 日
// ==========================================

const MACRO_NAV_CONFIG_0324 = [
  {
    title: '核心宏观判断',
    links: [
      { id: 'm_sec1', label: '经济增长' },
      { id: 'm_sec2', label: '通胀预期' },
      { id: 'm_sec3', label: '周期定位' }
    ]
  },
  {
    title: '政策分析',
    links: [
      { id: 'm_sec4', label: '货币政策' },
      { id: 'm_sec5', label: '财政与产业政策' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec6', label: '大类资产配置' },
      { id: 'm_sec7', label: '股票细分配置' }
    ]
  },
  {
    title: '行业映射',
    links: [
      { id: 'm_sec8', label: '行业轮动机会' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec9', label: '外部风险' },
      { id: 'm_sec10', label: '内部风险' },
      { id: 'm_sec11', label: '证伪指标' }
    ]
  },
  {
    title: '关注重点',
    links: [
      { id: 'm_sec12', label: '一周关注' },
      { id: 'm_sec13', label: '核心结论' }
    ]
  }
];

function renderMacroNav_0324() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0324.map((section, idx) => `
    <div class="nav-section">
      <h4 class="nav-section-title">${section.title}</h4>
      <ul class="nav-list space-y-1.5">
        ${section.links.map(link => `
          <li>
            <button onclick="scrollToSection('macro', '${link.id}')"
              class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 flex items-center group"
              data-section="${link.id}">
              <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 group-hover:bg-red-400 transition-colors"></div>
              <span class="text-slate-600 group-hover:text-slate-900 font-medium">${link.label}</span>
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
