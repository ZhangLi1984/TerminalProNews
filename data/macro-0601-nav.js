// ==========================================
// 宏观研究导航配置 - 2026-06-01
// ==========================================

const MACRO_NAV_CONFIG_0601 = [
  {
    title: '核心概览',
    links: [
      { id: 'm_sec1', label: '执行摘要' },
      { id: 'm_sec2', label: '经济数据解读' }
    ]
  },
  {
    title: '机构观点',
    links: [
      { id: 'm_sec3', label: '研报观点汇总' },
      { id: 'm_sec4', label: '交叉验证分析' }
    ]
  },
  {
    title: '买方策略',
    links: [
      { id: 'm_sec5', label: '资产配置建议' },
      { id: 'm_sec6', label: '风险提示' }
    ]
  }
];

function renderMacroNav_0601() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0601.map(group => `
    <div>
      <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">${group.title}</h4>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
            class="nav-btn w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100 transition-all flex items-center"
            data-section="${link.id}">
            <div class="w-1 h-1 rounded-full bg-transparent mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
