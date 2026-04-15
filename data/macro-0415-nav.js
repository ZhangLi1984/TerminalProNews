// ==========================================
// 智研金融 Terminal Pro - 宏观研究导航 2026-04-15
// ==========================================

const MACRO_NAV_CONFIG_0415 = [
  {
    title: '核心总览',
    links: [
      { id: 'm_sec1', label: '一句话核心判断' },
      { id: 'm_sec2', label: '宏观经济周期定位' }
    ]
  },
  {
    title: '关键数据',
    links: [
      { id: 'm_sec3', label: '通胀分析 CPI/PPI' },
      { id: 'm_sec4', label: '金融数据 社融/信贷' },
      { id: 'm_sec5', label: '外贸数据 出口/进口' }
    ]
  },
  {
    title: '研报观点',
    links: [
      { id: 'm_sec6', label: '地缘政治与输入型通胀' },
      { id: 'm_sec7', label: '国内货币政策与流动性' },
      { id: 'm_sec8', label: '房地产周期' },
      { id: 'm_sec9', label: '海外宏观与美联储' }
    ]
  },
  {
    title: '交叉验证',
    links: [
      { id: 'm_sec10', label: '共振点确认' },
      { id: 'm_sec11', label: '分歧点跟踪' },
      { id: 'm_sec12', label: '预期差提示' }
    ]
  },
  {
    title: '买方策略',
    links: [
      { id: 'm_sec13', label: '宏观四维框架' },
      { id: 'm_sec14', label: '资产配置建议' },
      { id: 'm_sec15', label: '行业轮动方向' }
    ]
  },
  {
    title: '风险管理',
    links: [
      { id: 'm_sec16', label: '外部风险' },
      { id: 'm_sec17', label: '内部风险' },
      { id: 'm_sec18', label: '核心证伪指标' }
    ]
  },
  {
    title: '数据仪表盘',
    links: [
      { id: 'm_sec19', label: '中国宏观仪表盘' },
      { id: 'm_sec20', label: '全球宏观仪表盘' },
      { id: 'm_sec21', label: '经济数据快照' }
    ]
  }
];

function renderMacroNav_0415() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0415.map(section => `
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
