// ==========================================
// 宏观研究导航配置 - 2026-05-09
// ==========================================

const MACRO_NAV_CONFIG_0509 = [
  { title: '宏观总览', links: [
    { id: 'sec1', label: '关键指标速查表' },
    { id: 'sec2', label: '49份研报观点矩阵' },
    { id: 'sec3', label: '预期分歧与跟踪要点' }
  ]},
  { title: '政策面分析', links: [
    { id: 'sec4', label: '国内货币政策' },
    { id: 'sec5', label: '财政与产业政策' },
    { id: 'sec6', label: '资本市场制度' },
    { id: 'sec7', label: '海外央行动态' }
  ]},
  { title: '大类资产研判', links: [
    { id: 'sec8', label: '美林钟定位与周期' },
    { id: 'sec9', label: '资产配置建议' },
    { id: 'sec10', label: '汇率研判' }
  ]},
  { title: '投资策略', links: [
    { id: 'sec11', label: '出口链/制造业出海' },
    { id: 'sec12', label: '能源/煤化工替代链' },
    { id: 'sec13', label: '六网基建链' },
    { id: 'sec14', label: 'AI+半导体国产替代' },
    { id: 'sec15', label: '绿色生产力/环保' },
    { id: 'sec16', label: '回避方向' },
    { id: 'sec17', label: '交易节奏建议' }
  ]},
  { title: '风险提示', links: [
    { id: 'sec18', label: '外部风险' },
    { id: 'sec19', label: '内部风险' },
    { id: 'sec20', label: '核心证伪指标' }
  ]},
  { title: '结论', links: [
    { id: 'sec21', label: '一页纸核心结论' }
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
