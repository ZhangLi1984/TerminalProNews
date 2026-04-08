// ==========================================
// 智研金融 Terminal Pro - 宏观研究导航 2026-04-08
// ==========================================

const MACRO_NAV_CONFIG_0408 = [
  {
    title: '核心判断',
    links: [
      { id: 'm_sec1', label: '经济增长' },
      { id: 'm_sec2', label: '通胀预期' },
      { id: 'm_sec3', label: '周期定位' }
    ]
  },
  {
    title: '政策分析',
    links: [
      { id: 'm_sec4', label: '货币政策' },
      { id: 'm_sec5', label: '财政政策' },
      { id: 'm_sec6', label: '产业政策' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec7', label: '配置建议' },
      { id: 'm_sec8', label: '细分观点' }
    ]
  },
  {
    title: '行业映射',
    links: [
      { id: 'm_sec9', label: '受益行业' },
      { id: 'm_sec10', label: '谨慎行业' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec11', label: '宏观风险' },
      { id: 'm_sec12', label: '证伪指标' },
      { id: 'm_sec13', label: '下周关注' }
    ]
  }
];

function renderMacroNav_0408() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0408.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('macro', '${link.id}')" class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent inline-block mr-2"></div>${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
