// 宏观研究导航模块 - 2026-05-13
const MACRO_NAV_CONFIG_0513 = [
  {
    title: '执行摘要',
    links: [
      { id: 'm_sec1', label: '核心观点速览' }
    ]
  },
  {
    title: '经济数据',
    links: [
      { id: 'm_sec2', label: '经济数据速览表' },
      { id: 'm_sec3', label: '输入性通胀主导' },
      { id: 'm_sec4', label: '中东地缘冲突演化' },
      { id: 'm_sec5', label: '出口韧性与AI产业链' },
      { id: 'm_sec6', label: '货币政策转向' },
      { id: 'm_sec7', label: '地产小阳春延续' }
    ]
  },
  {
    title: '预期差与配置',
    links: [
      { id: 'm_sec8', label: '预期差与博弈表' },
      { id: 'm_sec9', label: '大类资产配置建议' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec10', label: '五大核心风险' }
    ]
  }
];

function renderMacroNav_0513() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0513.map(group => `
    <div class="mb-6">
      <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <a href="#${link.id}" class="nav-btn flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
