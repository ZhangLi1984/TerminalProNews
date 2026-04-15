// ==========================================
// 智研金融 Terminal Pro - 行业研究导航 2026-04-15
// ==========================================

const INDUSTRY_NAV_CONFIG_0415 = [
  {
    title: '核心赛道',
    links: [
      { id: 'i_sec1', label: 'AI算力全产业链' },
      { id: 'i_sec2', label: '储能/锂电产业链' },
      { id: 'i_sec3', label: 'CXO医药研发外包' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'i_sec4', label: '中东冲击→日系减产→中国出海' },
      { id: 'i_sec5', label: '芯片功耗→液冷必选→跨界受益' },
      { id: 'i_sec6', label: '高油价→维生素涨价→饲料传导' },
      { id: 'i_sec7', label: '口蹄疫→原奶出清→乳企弹性' }
    ]
  },
  {
    title: '预期差博弈',
    links: [
      { id: 'i_sec8', label: 'AI算力结构分化' },
      { id: 'i_sec9', label: '生猪养殖十年左侧窗口' },
      { id: 'i_sec10', label: '工程机械情绪错杀' },
      { id: 'i_sec11', label: '维生素涨价刚启动' }
    ]
  },
  {
    title: '高确定性底仓',
    links: [
      { id: 'i_sec12', label: '电网投资/电力设备' },
      { id: 'i_sec13', label: '证券行业' },
      { id: 'i_sec14', label: '量贩零食' },
      { id: 'i_sec15', label: '黄金/贵金属' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec16', label: '大宗商品量价监测表' },
      { id: 'i_sec17', label: '产业链估值监测表' }
    ]
  },
  {
    title: '交易信号',
    links: [
      { id: 'i_sec18', label: '本周核心交易信号' },
      { id: 'i_sec19', label: 'CIO仓位配置建议' },
      { id: 'i_sec20', label: '跟踪清单与风险提示' }
    ]
  }
];

function renderIndustryNav_0415() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0415.map(group => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">${group.title}</h4>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button onclick="scrollToSection('industry','${link.id}')" data-section="${link.id}" class="nav-btn w-full text-left px-2 py-1.5 text-sm rounded-lg transition-all text-slate-700 hover:bg-slate-100">
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
