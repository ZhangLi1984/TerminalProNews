// ==========================================
// Macro Nav Config: 2026-06-29
// ==========================================

const MACRO_NAV_CONFIG_0629 = [
  {
    title: '核心宏观判断',
    links: [
      { id: 'm_sec1', label: '经济增长' },
      { id: 'm_sec2', label: '通胀预期' },
      { id: 'm_sec3', label: '周期位置' }
    ]
  },
  {
    title: '货币政策与流动性',
    links: [
      { id: 'm_sec4', label: '政策 stance' },
      { id: 'm_sec5', label: '工具预判' },
      { id: 'm_sec6', label: '流动性环境' }
    ]
  },
  {
    title: '财政政策与产业政策',
    links: [
      { id: 'm_sec7', label: '财政力度' },
      { id: 'm_sec8', label: '产业方向' }
    ]
  },
  {
    title: '资产配置建议',
    links: [
      { id: 'm_sec9', label: '核心输出表' }
    ]
  },
  {
    title: '行业轮动与宏观映射',
    links: [
      { id: 'm_sec10', label: 'AI算力基础设施' },
      { id: 'm_sec11', label: '上游资源品' },
      { id: 'm_sec12', label: '新能源车出口' },
      { id: 'm_sec13', label: '服务消费' },
      { id: 'm_sec14', label: '城市更新/地下管网' },
      { id: 'm_sec15', label: '承压行业回避' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec16', label: '外部风险' },
      { id: 'm_sec17', label: '内部风险' },
      { id: 'm_sec18', label: '证伪指标' }
    ]
  }
];

function renderMacroNav_0629() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0629.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <ul class="space-y-1">
        ${section.links.map(l => `<li><a href="#${l.id}" onclick="scrollToSection('${l.id}')" class="block px-3 py-2 text-sm text-slate-700 hover:bg-red-50 rounded-lg transition-colors border-l-2 border-transparent hover:border-red-500">${l.label}</a></li>`).join('')}
      </ul>
    </div>
  `).join('');
}
