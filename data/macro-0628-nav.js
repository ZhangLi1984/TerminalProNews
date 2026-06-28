// ==========================================
// Macro Nav Config: 2026-06-28
// ==========================================

const MACRO_NAV_CONFIG_0628 = [
  {
    title: '宏观判断与周期定位',
    links: [
      { id: 'sec1', label: '经济增长与通胀预期' },
      { id: 'sec2', label: '货币政策与流动性' }
    ]
  },
  {
    title: '政策与资产配置',
    links: [
      { id: 'sec3', label: '财政政策与产业政策' },
      { id: 'sec4', label: '资产配置建议' },
      { id: 'sec5', label: '行业轮动与宏观映射' },
      { id: 'sec6', label: '宏观风险提示' }
    ]
  }
];

function renderMacroNav_0628() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0628.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <a href="#${link.id}" class="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-colors truncate" title="${link.label}">
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
