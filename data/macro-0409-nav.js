// ==========================================
// 智研金融 Terminal Pro - 宏观研究导航 2026-04-09
// ==========================================

const MACRO_NAV_CONFIG_0409 = [
  {
    title: '核心判断',
    links: [
      { id: 'm_sec1', label: '执行摘要' },
      { id: 'm_sec2', label: '经济增长' },
      { id: 'm_sec3', label: '通胀预期' }
    ]
  },
  {
    title: '国际宏观',
    links: [
      { id: 'm_sec4', label: '地缘政治' },
      { id: 'm_sec5', label: '美国经济' },
      { id: 'm_sec6', label: '全球能源格局' }
    ]
  },
  {
    title: '国内宏观',
    links: [
      { id: 'm_sec7', label: '货币政策' },
      { id: 'm_sec8', label: '财政政策' },
      { id: 'm_sec9', label: '房地产' },
      { id: 'm_sec10', label: '产业政策' }
    ]
  },
  {
    title: '数据与分歧',
    links: [
      { id: 'm_sec11', label: '核心指标' },
      { id: 'm_sec12', label: '预期分歧' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec13', label: '配置矩阵' },
      { id: 'm_sec14', label: '四大方向' }
    ]
  },
  {
    title: '操作策略',
    links: [
      { id: 'm_sec15', label: '仓位与节奏' },
      { id: 'm_sec16', label: '操作建议' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec17', label: '外部风险' },
      { id: 'm_sec18', label: '内部风险' },
      { id: 'm_sec19', label: '证伪指标' }
    ]
  }
];

function renderMacroNav_0409() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0409.map(section => `
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
