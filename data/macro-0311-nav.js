// ==========================================
// 宏观研究导航 - 2026 年 3 月 11 日
// ==========================================

const MACRO_NAV_CONFIG_0311 = [
  {
    title: '宏观周期定位',
    links: [
      { id: 'm_sec1', label: '核心宏观判断' },
      { id: 'm_sec2', label: '美林时钟定位' }
    ]
  },
  {
    title: '政策分析',
    links: [
      { id: 'm_sec3', label: '货币政策' },
      { id: 'm_sec4', label: '财政政策' },
      { id: 'm_sec5', label: '产业政策' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec6', label: '配置建议总览' },
      { id: 'm_sec7', label: '行业轮动与映射' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec8', label: '宏观风险' },
      { id: 'm_sec9', label: '策略总结' }
    ]
  }
];

function renderMacroNav_0311() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0311.map(section => `
    <div class="nav-section">
      <h4 class="text-xs font-black text-emerald-500 uppercase tracking-widest mb-3">${section.title}</h4>
      <div class="space-y-1.5">
        ${section.links.map(link => `
          <button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}')"
                  data-section="${link.id}"
                  class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 transition-all duration-200 flex items-center group">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-emerald-400"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
