// ==========================================
// 宏观研究导航配置 - 2026 年 3 月 23 日
// ==========================================

const MACRO_NAV_CONFIG_0323 = [
  {
    title: '核心宏观',
    links: [
      { id: 'm_sec1', label: '核心宏观判断与周期定位' },
      { id: 'm_sec2', label: '货币政策与流动性' }
    ]
  },
  {
    title: '政策分析',
    links: [
      { id: 'm_sec3', label: '财政政策与产业政策' },
      { id: 'm_sec4', label: '资产配置建议' }
    ]
  },
  {
    title: '行业映射',
    links: [
      { id: 'm_sec5', label: '行业轮动与宏观映射' },
      { id: 'm_sec6', label: '宏观风险提示' }
    ]
  },
  {
    title: '策略总结',
    links: [
      { id: 'm_sec7', label: '投资策略总结' },
      { id: 'm_sec8', label: '经济数据汇总' }
    ]
  }
];

function renderMacroNav_0323() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0323.map((group, groupIndex) => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-3">${group.title}</h3>
      <nav class="space-y-1">
        ${group.links.map(link => `
          <button
            onclick="scrollToMacroSection('${link.id}')"
            class="nav-btn w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 text-slate-700 hover:bg-slate-100"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');

  setTimeout(() => updateActiveNav('m_sec1'), 100);
}

function scrollToMacroSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerOffset = 140;
    const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    updateActiveNav(sectionId);
  }
}
