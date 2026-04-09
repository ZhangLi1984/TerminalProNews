// ==========================================
// 智研金融 Terminal Pro - 宏观研究导航 2026-04-10
// ==========================================

const MACRO_NAV_CONFIG_0410 = [
  {
    title: '宏观总览',
    links: [
      { id: 'm_sec1', label: '核心判断' },
      { id: 'm_sec2', label: '经济数据总览' }
    ]
  },
  {
    title: '关键变量',
    links: [
      { id: 'm_sec3', label: '地缘政治' },
      { id: 'm_sec4', label: '货币政策' },
      { id: 'm_sec5', label: '通胀趋势' },
      { id: 'm_sec6', label: '经济增长结构' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec7', label: '配置总览' },
      { id: 'm_sec8', label: 'A股策略' },
      { id: 'm_sec9', label: '债券/商品/黄金/原油' }
    ]
  },
  {
    title: '行业方向',
    links: [
      { id: 'm_sec10', label: '第一梯队' },
      { id: 'm_sec11', label: '第二梯队' },
      { id: 'm_sec12', label: '规避方向' }
    ]
  },
  {
    title: '预期差',
    links: [
      { id: 'm_sec13', label: '市场共识 vs 预期差' },
      { id: 'm_sec14', label: '核心博弈点' }
    ]
  },
  {
    title: '操作建议',
    links: [
      { id: 'm_sec15', label: '一周策略' },
      { id: 'm_sec16', label: '关键窗口' },
      { id: 'm_sec17', label: '止损纪律' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec18', label: '四大风险' }
    ]
  }
];

function renderMacroNav_0410() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0410.map(section => `
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
