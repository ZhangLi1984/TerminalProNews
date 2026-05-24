// ==========================================
// 宏观研究内参 - 导航配置 2026-05-24
// ==========================================
const MACRO_NAV_CONFIG_0524 = [
  {
    title: '宏观概览',
    links: [
      { id: 'm_sec1', label: '增长数据总览' },
      { id: 'm_sec2', label: '三大分化格局' }
    ]
  },
  {
    title: '交叉验证',
    links: [
      { id: 'm_sec3', label: '多机构一致共识' },
      { id: 'm_sec4', label: '核心预期分歧' },
      { id: 'm_sec5', label: '数据验证关键发现' }
    ]
  },
  {
    title: '核心观点',
    links: [
      { id: 'm_sec6', label: '周期定位：准滞胀' },
      { id: 'm_sec7', label: '四大核心矛盾' },
      { id: 'm_sec8', label: '政策预判' }
    ]
  },
  {
    title: '投资策略',
    links: [
      { id: 'm_sec9', label: '资产配置建议' },
      { id: 'm_sec10', label: '行业轮动方向' },
      { id: 'm_sec11', label: '债券策略' }
    ]
  },
  {
    title: '风险与操作',
    links: [
      { id: 'm_sec12', label: '外部风险' },
      { id: 'm_sec13', label: '内部风险' },
      { id: 'm_sec14', label: '核心证伪指标' },
      { id: 'm_sec15', label: '操作建议总结' }
    ]
  }
];

function renderMacroNav_0524() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0524.map(group => `
    <div>
      <h4 class="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2.5">${group.title}</h4>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}"
            onclick="scrollToSection('macro', '${link.id}')"
          >
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 bg-transparent group-hover:bg-slate-400 transition-colors flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
