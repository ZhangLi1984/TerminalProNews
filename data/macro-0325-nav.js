// ==========================================
// 宏观研究 - 导航配置 (2026-03-25)
// ==========================================

const MACRO_NAV_CONFIG_0325 = [
  {
    title: '宏观概览',
    links: [
      { id: 'm_sec1', label: '核心宏观判断' },
      { id: 'm_sec2', label: '货币政策分析' },
      { id: 'm_sec3', label: '财政与产业政策' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec4', label: '大类资产配置' },
      { id: 'm_sec5', label: '行业轮动映射' }
    ]
  },
  {
    title: '风险与数据',
    links: [
      { id: 'm_sec6', label: '宏观风险提示' },
      { id: 'm_sec7', label: '经济指标速览' },
      { id: 'm_sec8', label: '市场预期差' }
    ]
  }
];

function renderMacroNav_0325() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  let html = '';

  MACRO_NAV_CONFIG_0325.forEach(group => {
    html += `<div class="nav-group">`;
    html += `<h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2">${group.title}</h3>`;
    html += `<div class="space-y-1">`;

    group.links.forEach(link => {
      html += `<button
        class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 flex items-center"
        data-section="${link.id}"
        onclick="scrollToSection('macro', '${link.id}')"
      >
        <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors bg-transparent"></div>
        ${link.label}
      </button>`;
    });

    html += `</div>`;
    html += `</div>`;
  });

  container.innerHTML = html;
}