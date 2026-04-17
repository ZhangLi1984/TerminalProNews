// ==========================================
// 宏观研究导航配置 - 2026-04-17
// ==========================================

const MACRO_NAV_CONFIG_0417 = [
  {
    title: '核心观点',
    links: [
      { id: 'm_sec1', label: '核心观点摘要' }
    ]
  },
  {
    title: '经济数据',
    links: [
      { id: 'm_sec2', label: '宏观经济指标' },
      { id: 'm_sec3', label: '增长/通胀/贸易' },
      { id: 'm_sec4', label: '金融/房地产' }
    ]
  },
  {
    title: '研报观点',
    links: [
      { id: 'm_sec5', label: '经济增长研判' },
      { id: 'm_sec6', label: '通胀与中东冲突' },
      { id: 'm_sec7', label: '贸易与金融数据' },
      { id: 'm_sec8', label: '货币政策判断' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'm_sec9', label: '资产配置方向' },
      { id: 'm_sec10', label: '六大行业方向' },
      { id: 'm_sec11', label: '回避方向' }
    ]
  },
  {
    title: '跟踪与风险',
    links: [
      { id: 'm_sec12', label: '关键跟踪指标' },
      { id: 'm_sec13', label: '政策催化剂日历' },
      { id: 'm_sec14', label: '风险提示' }
    ]
  }
];

function renderMacroNav_0417() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0417.map(group => `
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
