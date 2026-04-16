// ==========================================
// 宏观研究导航模块 - 2026-04-16
// ==========================================

const MACRO_NAV_CONFIG_0416 = [
  {
    title: '核心摘要',
    links: [
      { id: 'm_sec1', label: '执行摘要' },
      { id: 'm_sec2', label: '宏观四维框架' }
    ]
  },
  {
    title: '经济数据',
    links: [
      { id: 'm_sec3', label: '经济增长与结构分化' },
      { id: 'm_sec4', label: '通胀预期（PPI转正）' },
      { id: 'm_sec5', label: '金融条件与信用传导' }
    ]
  },
  {
    title: '研报观点',
    links: [
      { id: 'm_sec6', label: '美伊冲突共识与分歧' },
      { id: 'm_sec7', label: '供应链重构分析' },
      { id: 'm_sec8', label: '资产配置观点汇总' }
    ]
  },
  {
    title: '投资策略',
    links: [
      { id: 'm_sec9', label: '大类资产配置矩阵' },
      { id: 'm_sec10', label: '行业轮动与宏观映射' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec11', label: '内外风险与证伪指标' },
      { id: 'm_sec12', label: '一周关注日历' }
    ]
  }
];

function renderMacroNav_0416() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0416.map(group => `
    <div>
      <h6 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">${group.title}</h6>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('macro', '${link.id}')"
            class="nav-btn w-full text-left text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 flex-shrink-0 transition-colors"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
