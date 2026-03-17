// ==========================================
// 行业研究导航模块 - 2026-03-17
// 深度整合行研总监 + CIO 报告
// ==========================================

const INDUSTRY_NAV_CONFIG_0317 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'sec1', label: 'AI 算力与光通信' },
      { id: 'sec2', label: '人形机器人' },
      { id: 'sec3', label: '储能与锂电' },
      { id: 'sec4', label: '脑机接口' },
      { id: 'sec5', label: '半导体/存储芯片' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'sec6', label: '中东地缘→油价传导' },
      { id: 'sec7', label: 'AI 挤占→被动元件涨价' },
      { id: 'sec8', label: '算力→电力→虚拟电厂' },
      { id: 'sec9', label: '存储→先进封装' },
      { id: 'sec10', label: '海风出海链' }
    ]
  },
  {
    title: '预期差与反转',
    links: [
      { id: 'sec11', label: '氢能商业化' },
      { id: 'sec12', label: '白酒底部信号' },
      { id: 'sec13', label: '光伏周期底部' },
      { id: 'sec14', label: '维生素/手套' },
      { id: 'sec15', label: '创新药出海' }
    ]
  },
  {
    title: '景气延续底仓',
    links: [
      { id: 'sec16', label: '券商' },
      { id: 'sec17', label: '银行' },
      { id: 'sec18', label: '电力设备出海' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'sec19', label: '大宗商品监测表' },
      { id: 'sec20', label: '产业链估值表' },
      { id: 'sec21', label: 'CIO 仓位建议' }
    ]
  }
];

function renderIndustryNav_0317() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0317.map(section => `
    <div class="nav-section">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('industry', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-blue-400 transition-colors mr-2.5"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
