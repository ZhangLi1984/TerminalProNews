// 宏观研究导航 - 2026-04-24
const MACRO_NAV_CONFIG_0424 = [
  { title: '核心判断', links: [
    { id: 'm_sec1', label: '宏观四维框架' },
    { id: 'm_sec2', label: '经济增长' },
    { id: 'm_sec3', label: '通胀预期' },
    { id: 'm_sec4', label: '周期定位' }
  ] },
  { title: '政策分析', links: [
    { id: 'm_sec5', label: '货币政策' },
    { id: 'm_sec6', label: '工具预判' },
    { id: 'm_sec7', label: '财政政策与产业' }
  ] },
  { title: '资产配置', links: [
    { id: 'm_sec8', label: '配置矩阵' },
    { id: 'm_sec9', label: '行业轮动' },
    { id: 'm_sec10', label: '经济数据速查' }
  ] },
  { title: '风险提示', links: [
    { id: 'm_sec11', label: '外部风险' },
    { id: 'm_sec12', label: '内部风险' },
    { id: 'm_sec13', label: '预期分歧' },
    { id: 'm_sec14', label: '证伪指标' }
  ] }
];

function renderMacroNav_0424() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0424.map(group => `
    <div>
      <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('macro','${link.id}')" data-section="${link.id}"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-all flex items-start gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mt-1.5 flex-shrink-0"></div>
            <span class="leading-tight">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
