// ==========================================
// 宏观研究导航配置 - 2026年5月6日
// ==========================================

const MACRO_NAV_CONFIG_0506 = [
  {
    title: '核心策略',
    links: [
      { id: 'm_sec1', label: '执行摘要' },
      { id: 'm_sec2', label: '大类资产配置' }
    ]
  },
  {
    title: '经济数据',
    links: [
      { id: 'm_sec3', label: 'GDP/PMI 增长' },
      { id: 'm_sec4', label: 'CPI/PPI 通胀' },
      { id: 'm_sec5', label: '货币与信贷' },
      { id: 'm_sec6', label: '外贸与财政' }
    ]
  },
  {
    title: '政策研判',
    links: [
      { id: 'm_sec7', label: '政治局会议解读' },
      { id: 'm_sec8', label: '美联储与海外' },
      { id: 'm_sec9', label: '经济周期定位' }
    ]
  },
  {
    title: '配置建议',
    links: [
      { id: 'm_sec10', label: '行业配置三梯队' },
      { id: 'm_sec11', label: '预期差分析' }
    ]
  },
  {
    title: '跟踪与风险',
    links: [
      { id: 'm_sec12', label: '风险提示' },
      { id: 'm_sec13', label: '证伪指标体系' },
      { id: 'm_sec14', label: '核心数据跟踪表' },
      { id: 'm_sec15', label: '5-6月事件日历' }
    ]
  }
];

function renderMacroNav_0506() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0506.map(group => `
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
