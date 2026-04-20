// ==========================================
// 宏观研究导航配置 - 2026-04-20
// ==========================================
const MACRO_NAV_CONFIG_0420 = [
  { title: '经济数据速览', links: [
    { id: 'm_sec1', label: '核心宏观指标' },
    { id: 'm_sec2', label: '分产业GDP结构' },
    { id: 'm_sec3', label: '投资分项拆解' }
  ]},
  { title: '研报观点汇总', links: [
    { id: 'm_sec4', label: '经济增长' },
    { id: 'm_sec5', label: '通胀与价格' },
    { id: 'm_sec6', label: '货币政策与流动性' },
    { id: 'm_sec7', label: '消费与内需' },
    { id: 'm_sec8', label: '外贸与地缘政治' },
    { id: 'm_sec9', label: '房地产' }
  ]},
  { title: '共识与分歧', links: [
    { id: 'm_sec10', label: '市场共识七大判断' },
    { id: 'm_sec11', label: '核心分歧点' }
  ]},
  { title: '买方策略建议', links: [
    { id: 'm_sec12', label: '大类资产配置' },
    { id: 'm_sec13', label: '行业轮动与宏观映射' },
    { id: 'm_sec14', label: '组合构建建议' }
  ]},
  { title: '风险提示', links: [
    { id: 'm_sec15', label: '外部风险' },
    { id: 'm_sec16', label: '内部风险' },
    { id: 'm_sec17', label: '证伪指标' }
  ]}
];

function renderMacroNav_0420() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0420.map(group => `
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
