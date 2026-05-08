// ==========================================
// 宏观研究导航配置 - 2026-05-09
// ==========================================

const MACRO_NAV_CONFIG_0509 = [
  { title: '数据总览', links: [
    { id: 'm_sec1', label: '关键指标速查表' },
    { id: 'm_sec2', label: '49份研报交叉验证' }
  ]},
  { title: '政策分析', links: [
    { id: 'm_sec3', label: '国内政策三大主线' },
    { id: 'm_sec4', label: '海外央行集体按兵不动' }
  ]},
  { title: '大类资产', links: [
    { id: 'm_sec5', label: '美林时钟定位' },
    { id: 'm_sec6', label: '资产配置建议' },
    { id: 'm_sec7', label: '汇率研判' }
  ]},
  { title: '投资策略', links: [
    { id: 'm_sec8', label: '五大受益方向' },
    { id: 'm_sec9', label: '回避方向' },
    { id: 'm_sec10', label: '交易节奏建议' }
  ]},
  { title: '风险预警', links: [
    { id: 'm_sec11', label: '外部风险' },
    { id: 'm_sec12', label: '内部风险' },
    { id: 'm_sec13', label: '核心证伪指标' }
  ]},
  { title: '核心结论', links: [
    { id: 'm_sec14', label: '一页纸总结' }
  ]}
];

function renderMacroNav_0509() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0509.map(group => `
    <div>
      <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('macro', '${link.id}')"
            class="nav-btn w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center"
            data-section="${link.id}"
          >
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
