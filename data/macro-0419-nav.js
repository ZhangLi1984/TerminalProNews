// ==========================================
// 宏观研究导航配置 - 2026-04-19
// ==========================================

const MACRO_NAV_CONFIG_0419 = [
  {
    title: '核心观点',
    links: [
      { id: 'm_sec1', label: '执行摘要' }
    ]
  },
  {
    title: '经济数据',
    links: [
      { id: 'm_sec2', label: '经济增长全景' },
      { id: 'm_sec3', label: '通胀数据' },
      { id: 'm_sec4', label: '金融数据' },
      { id: 'm_sec5', label: '房地产市场' }
    ]
  },
  {
    title: '研报观点',
    links: [
      { id: 'm_sec6', label: '增长主题' },
      { id: 'm_sec7', label: '通胀主题' },
      { id: 'm_sec8', label: '金融与货币' },
      { id: 'm_sec9', label: '贸易与出口' },
      { id: 'm_sec10', label: '地缘政治' },
      { id: 'm_sec11', label: '资产配置' }
    ]
  },
  {
    title: '预期差分析',
    links: [
      { id: 'm_sec12', label: '市场共识 vs 实际' },
      { id: 'm_sec13', label: 'PPI含金量' },
      { id: 'm_sec14', label: '中国替代效应' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'm_sec15', label: '大类资产配置' },
      { id: 'm_sec16', label: '行业轮动映射' }
    ]
  },
  {
    title: '风险与跟踪',
    links: [
      { id: 'm_sec17', label: '外部风险' },
      { id: 'm_sec18', label: '内部风险' },
      { id: 'm_sec19', label: '证伪指标' }
    ]
  }
];

function renderMacroNav_0419() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0419.map(group => `
    <div class="mb-6">
      <h3 class="text-xs font-black uppercase tracking-wider text-slate-500 mb-3 px-3">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('macro', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}">
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
