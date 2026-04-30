// truncated=================================
// 行业研究导航模块 - 2026 年 3 月 16 日
// ==========================================

const INDUSTRY_NAV_CONFIG_0316 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'i_sec1', label: 'AI 算力与光通信' },
      { id: 'i_sec2', label: '存储芯片' },
      { id: 'i_sec3', label: '国防军工' },
      { id: 'i_sec4', label: '人形机器人' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'i_sec5', label: '天然气发电设备' },
      { id: 'i_sec6', label: '中东冲突→化工收缩' },
      { id: 'i_sec7', label: '比亚迪刀片→设备更新' },
      { id: 'i_sec8', label: '维生素涨价传导链' }
    ]
  },
  {
    title: '预期差与反转',
    links: [
      { id: 'i_sec9', label: '生猪养殖' },
      { id: 'i_sec10', label: '光伏供给侧改革' },
      { id: 'i_sec11', label: '白酒底部信号' }
    ]
  },
  {
    title: '景气延续',
    links: [
      { id: 'i_sec12', label: '煤炭' },
      { id: 'i_sec13', label: '有色金属' },
      { id: 'i_sec14', label: '工程机械' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec15', label: '大宗商品量价表' },
      { id: 'i_sec16', label: '产业链估值表' }
    ]
  }
];

function renderIndustryNav_0316() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0316.map((section, index) => `
    <div class="space-y-2">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider px-2">${section.title}</h3>
      ${section.links.map(link => `
        <button onclick="scrollToSection('industry', '${link.id}'); return false;"
          class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group"
          data-section="${link.id}">
          <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-slate-400"></div>
          <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
        </button>
      `).join('')}
    </div>
  `).join('');
}
