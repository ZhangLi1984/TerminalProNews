// ==========================================
// 券商晨报导航模块 - 2026 年 6 月 3 日
// ==========================================

const BROKER_NAV_CONFIG_0603 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '宏观判断' },
      { id: 'b_sec2', label: '大盘展望' },
      { id: 'b_sec3', label: '仓位建议' },
      { id: 'b_sec4', label: '行业热度 TOP13' },
      { id: 'b_sec5', label: '金股 TOP12' }
    ]
  },
  {
    title: '重点观点',
    links: [
      { id: 'b_sec6', label: '东吴证券' },
      { id: 'b_sec7', label: '开源证券' },
      { id: 'b_sec8', label: '中银证券' },
      { id: 'b_sec9', label: '国信证券' },
      { id: 'b_sec10', label: '华源证券' },
      { id: 'b_sec11', label: '第一创业' },
      { id: 'b_sec12', label: '万联/金元' }
    ]
  },
  {
    title: '投资策略',
    links: [
      { id: 'b_sec13', label: '核心进攻方向' },
      { id: 'b_sec14', label: '结构性机会' },
      { id: 'b_sec15', label: '事件驱动' },
      { id: 'b_sec16', label: '回避方向' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec17', label: '风险矩阵' }
    ]
  }
];

function renderBrokerNav_0603() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0603.map(section => `
    <div class="mb-6">
      <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">${section.title}</h4>
      <nav class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('broker', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-red-500 mr-2.5 transition-colors"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
