// ==========================================
// 行业研究导航配置 - 2026-03-19
// ==========================================

const INDUSTRY_NAV_CONFIG_0319 = [
  {
    title: '高胜率赛道',
    links: [
      { id: 'i_sec1', label: '半导体/存储芯片' },
      { id: 'i_sec2', label: '储能/锂电' },
      { id: 'i_sec3', label: '维生素/化工' },
      { id: 'i_sec4', label: 'AI算力产业链' },
      { id: 'i_sec5', label: '人形机器人' },
      { id: 'i_sec6', label: '脑机接口' },
      { id: 'i_sec7', label: '游戏/传媒' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'i_sec8', label: 'AI工厂电力需求' },
      { id: 'i_sec9', label: '玻璃基板革命' },
      { id: 'i_sec10', label: '煤化工盈利修复' },
      { id: 'i_sec11', label: '核能复兴' }
    ]
  },
  {
    title: '预期差反转',
    links: [
      { id: 'i_sec12', label: '生猪养殖' },
      { id: 'i_sec13', label: '半导体模拟芯片' },
      { id: 'i_sec14', label: '券商板块' },
      { id: 'i_sec15', label: '原料药' }
    ]
  },
  {
    title: '底仓资产',
    links: [
      { id: 'i_sec16', label: '核电/黄金/保险/银行' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec17', label: '大宗商品量价表' },
      { id: 'i_sec18', label: '产业链估值监测' },
      { id: 'i_sec19', label: 'CIO策略建议' }
    ]
  }
];

function renderIndustryNav_0319() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0319.map((section, idx) => `
    <div class="space-y-3">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider px-3">${section.title}</h3>
      <nav class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('industry', '${link.id}'); return false;"
            class="nav-btn w-full flex items-center px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-all duration-200"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors"></div>
            <span>${link.label}</span>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}