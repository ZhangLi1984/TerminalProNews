// ==========================================
// 宏观研究导航配置 - 2026-05-22
// ==========================================

const MACRO_NAV_CONFIG_0522 = [
  {
    title: '核心观点',
    links: [
      { id: 'm_sec1', label: '核心摘要' },
      { id: 'm_sec2', label: '三大分化格局' }
    ]
  },
  {
    title: '宏观数据',
    links: [
      { id: 'm_sec3', label: '经济增长' },
      { id: 'm_sec4', label: '通胀与价格' },
      { id: 'm_sec5', label: '信贷与流动性' },
      { id: 'm_sec6', label: '财政数据' }
    ]
  },
  {
    title: '预期差与博弈',
    links: [
      { id: 'm_sec7', label: '市场共识 vs 实际' },
      { id: 'm_sec8', label: '关键博弈节点' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec9', label: '大类资产配置矩阵' },
      { id: 'm_sec10', label: '股票配置方向' },
      { id: 'm_sec11', label: '债券与汇率' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec12', label: '风险预警' },
      { id: 'm_sec13', label: '证伪指标' }
    ]
  }
];

function renderMacroNav_0522() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0522.map(group => `
    <div>
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button class="nav-btn w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
                  data-section="${link.id}"
                  onclick="updateActiveNav('${link.id}')">
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
