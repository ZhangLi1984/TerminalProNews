// ==========================================
// 宏观研究导航配置 - 2026年4月30日
// ==========================================

const MACRO_NAV_CONFIG_0430 = [
  {
    title: '核心策略',
    links: [
      { id: 'm_sec1', label: '核心结论与策略建议' },
      { id: 'm_sec2', label: '经济数据总览' }
    ]
  },
  {
    title: '政策研判',
    links: [
      { id: 'm_sec3', label: '4月政治局会议解读' },
      { id: 'm_sec4', label: '宏观周期定位' }
    ]
  },
  {
    title: '配置建议',
    links: [
      { id: 'm_sec5', label: '大类资产配置' },
      { id: 'm_sec6', label: '行业轮动与映射' },
      { id: 'm_sec7', label: '回避方向' }
    ]
  },
  {
    title: '跟踪与风险',
    links: [
      { id: 'm_sec8', label: '关键跟踪指标' },
      { id: 'm_sec9', label: '证伪指标' },
      { id: 'm_sec10', label: '经济数据快照' }
    ]
  }
];

function renderMacroNav_0430() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0430.map(group => `
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
