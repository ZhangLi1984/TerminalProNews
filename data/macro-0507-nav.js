// ==========================================
// 宏观研究导航配置 - 2026年5月7日
// ==========================================

const MACRO_NAV_CONFIG_0507 = [
  {
    title: '核心概览',
    links: [
      { id: 'm_sec1', label: '宏观经济数据快照' },
      { id: 'm_sec2', label: '核心宏观观点' }
    ]
  },
  {
    title: '预期差',
    links: [
      { id: 'm_sec3', label: '四大预期差识别' }
    ]
  },
  {
    title: '买方策略',
    links: [
      { id: 'm_sec4', label: '大类资产配置' },
      { id: 'm_sec5', label: '行业配置三梯队' },
      { id: 'm_sec6', label: '风格配置' }
    ]
  },
  {
    title: '风险与跟踪',
    links: [
      { id: 'm_sec7', label: '风险预警' },
      { id: 'm_sec8', label: '核心证伪指标' },
      { id: 'm_sec9', label: '经济数据汇总表' }
    ]
  }
];

function renderMacroNav_0507() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0507.map(group => `
    <div>
      <h4 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('macro', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center"
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
