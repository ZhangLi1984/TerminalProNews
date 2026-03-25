// ==========================================
// 宏观研究导航模块 - 2026 年 3 月 26 日
// ==========================================

const MACRO_NAV_CONFIG_0326 = [
  {
    title: '核心指标',
    links: [
      { id: 'm_sec1', label: '经济增长指标' },
      { id: 'm_sec2', label: '通胀指标' },
      { id: 'm_sec3', label: '金融与流动性' }
    ]
  },
  {
    title: '机构观点',
    links: [
      { id: 'm_sec4', label: '经济增长预期' },
      { id: 'm_sec5', label: '货币政策展望' },
      { id: 'm_sec6', label: '财政政策方向' },
      { id: 'm_sec7', label: '海外宏观环境' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'm_sec8', label: '预期差分析' },
      { id: 'm_sec9', label: '大类资产配置' },
      { id: 'm_sec10', label: '行业轮动与宏观映射' },
      { id: 'm_sec11', label: '主题投资主线' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec12', label: '外部风险' },
      { id: 'm_sec13', label: '内部风险' },
      { id: 'm_sec14', label: '证伪指标' }
    ]
  }
];

function renderMacroNav_0326() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  let html = '';
  MACRO_NAV_CONFIG_0326.forEach((section, index) => {
    html += `<div class="space-y-2">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider px-3 py-2">${section.title}</h3>
      <div class="space-y-1">`;
    section.links.forEach(link => {
      html += `<button onclick="scrollToSection('macro', '${link.id}')"
          class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group"
          data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-red-400"></div>
        <span class="text-slate-600 group-hover:text-slate-900">${link.label}</span>
      </button>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
