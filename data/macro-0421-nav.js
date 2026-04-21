// ==========================================
// 宏观研究导航配置 - 2026-04-21
// ==========================================
const MACRO_NAV_CONFIG_0421 = [
  { title: '经济数据总览', links: [
    { id: 'm_sec1', label: '关键指标速览' },
    { id: 'm_sec2', label: '经济增长：Q1开门红' },
    { id: 'm_sec3', label: '通胀：PPI时隔41个月转正' },
    { id: 'm_sec4', label: '金融数据：信用扩张放缓' }
  ]},
  { title: '研报核心观点', links: [
    { id: 'm_sec5', label: '东方金诚 & 开源证券' },
    { id: 'm_sec6', label: '西南期货 & 东吴证券' },
    { id: 'm_sec7', label: '浦银国际 & 中银国际' },
    { id: 'm_sec8', label: 'LPR点评 & 资产配置' }
  ]},
  { title: '交叉验证', links: [
    { id: 'm_sec9', label: '市场共识六大判断' },
    { id: 'm_sec10', label: '核心分歧点' },
    { id: 'm_sec11', label: '需要警惕的信号' }
  ]},
  { title: '买方策略建议', links: [
    { id: 'm_sec12', label: '大类资产配置矩阵' },
    { id: 'm_sec13', label: 'A股行业配置建议' },
    { id: 'm_sec14', label: '本周操作策略' }
  ]},
  { title: '风险提示', links: [
    { id: 'm_sec15', label: '四大预期差来源' },
    { id: 'm_sec16', label: '核心风险矩阵' },
    { id: 'm_sec17', label: '证伪指标' }
  ]}
];

function renderMacroNav_0421() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0421.map(group => `
    <div>
      <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('macro', '${link.id}')"
            class="nav-btn w-full text-left text-sm px-3 py-1.5 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
