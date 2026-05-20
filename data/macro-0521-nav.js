// 宏观研究导航 - 2026-05-21
const MACRO_NAV_CONFIG_0521 = [
  { title: '执行摘要', links: [
    { id: 'm_sec1', label: '核心判断与预期差' },
    { id: 'm_sec2', label: '政策定调' },
  ]},
  { title: '经济数据全景', links: [
    { id: 'm_sec3', label: '经济增长指标' },
    { id: 'm_sec4', label: '需求端指标' },
    { id: 'm_sec5', label: '通胀指标' },
    { id: 'm_sec6', label: '金融与货币' },
  ]},
  { title: '研报观点汇总', links: [
    { id: 'm_sec7', label: '4月经济数据解读' },
    { id: 'm_sec8', label: '中美经贸与地缘政治' },
    { id: 'm_sec9', label: '美联储与全球流动性' },
    { id: 'm_sec10', label: 'AI产业宏观影响' },
    { id: 'm_sec11', label: '国内宏观政策预期' },
  ]},
  { title: '交叉验证', links: [
    { id: 'm_sec12', label: '一致性验证' },
    { id: 'm_sec13', label: '核心预期差' },
    { id: 'm_sec14', label: '数据预警信号' },
  ]},
  { title: '买方策略', links: [
    { id: 'm_sec15', label: '资产配置建议' },
    { id: 'm_sec16', label: '行业配置方向' },
    { id: 'm_sec17', label: '交易策略' },
  ]},
  { title: '数据亮点与预警', links: [
    { id: 'm_sec18', label: '五大数据亮点' },
    { id: 'm_sec19', label: '七大预警信号' },
    { id: 'm_sec20', label: '关键监测证伪指标' },
  ]},
];

function renderMacroNav_0521() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0521.map((cat, ci) => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">${cat.title}</h4>
      <div class="space-y-1">
        ${cat.links.map(link => `
          <button onclick="scrollToSection('${link.id}', 'macro'); updateActiveNav('${link.id}')"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
