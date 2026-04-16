// ==========================================
// 智研金融 Terminal Pro - 宏观研究导航 2026-04-16
// ==========================================

const MACRO_NAV_CONFIG_0416 = [
  {
    title: '执行摘要',
    links: [
      { id: 'm_sec1', label: '核心判断' }
    ]
  },
  {
    title: '宏观经济指标',
    links: [
      { id: 'm_sec2', label: '经济增长 GDP/PMI/出口' },
      { id: 'm_sec3', label: '通胀预期 CPI/PPI' },
      { id: 'm_sec4', label: '金融条件 社融/信贷/M1-M2' }
    ]
  },
  {
    title: '研报观点交叉验证',
    links: [
      { id: 'm_sec5', label: '美伊冲突与中东局势' },
      { id: 'm_sec6', label: '供应链重构' },
      { id: 'm_sec7', label: '资产配置观点汇总' }
    ]
  },
  {
    title: '投资策略建议',
    links: [
      { id: 'm_sec8', label: '宏观四维框架' },
      { id: 'm_sec9', label: '大类资产配置矩阵' },
      { id: 'm_sec10', label: 'AI算力与科技基建' },
      { id: 'm_sec11', label: '能源安全与煤化工替代' },
      { id: 'm_sec12', label: '出口结构升级与出海' },
      { id: 'm_sec13', label: '防御性高股息' }
    ]
  },
  {
    title: '风险管理',
    links: [
      { id: 'm_sec14', label: '外部风险' },
      { id: 'm_sec15', label: '内部风险' },
      { id: 'm_sec16', label: '证伪指标监控' }
    ]
  },
  {
    title: '一周关注',
    links: [
      { id: 'm_sec17', label: '关注日历' }
    ]
  }
];

function renderMacroNav_0416() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0416.map(section => `
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
