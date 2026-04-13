// ==========================================
// 智研金融 Terminal Pro - 宏观研究导航 2026-04-13
// ==========================================

const MACRO_NAV_CONFIG_0413 = [
  {
    title: '核心总览',
    links: [
      { id: 'm_sec1', label: '一句话核心判断' },
      { id: 'm_sec2', label: '经济周期定位' }
    ]
  },
  {
    title: '关键数据',
    links: [
      { id: 'm_sec3', label: '通胀分析 CPI/PPI' },
      { id: 'm_sec4', label: '货币与财政政策' },
      { id: 'm_sec5', label: '产业政策方向' }
    ]
  },
  {
    title: '地缘政治',
    links: [
      { id: 'm_sec6', label: '美伊局势时间轴' },
      { id: 'm_sec7', label: '油价与美债死亡循环' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec8', label: '八大资产配置建议' },
      { id: 'm_sec9', label: '综合配置排序' }
    ]
  },
  {
    title: '行业方向',
    links: [
      { id: 'm_sec10', label: 'AI算力/半导体' },
      { id: 'm_sec11', label: '有色/稀有金属' },
      { id: 'm_sec12', label: '猪肉/农业' },
      { id: 'm_sec13', label: '军工/医药/石油' }
    ]
  },
  {
    title: '风险管理',
    links: [
      { id: 'm_sec14', label: '外部风险' },
      { id: 'm_sec15', label: '内部风险' },
      { id: 'm_sec16', label: '证伪指标' }
    ]
  },
  {
    title: '跟踪日历',
    links: [
      { id: 'm_sec17', label: '未来两周关键事件' }
    ]
  }
];

function renderMacroNav_0413() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0413.map(section => `
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
