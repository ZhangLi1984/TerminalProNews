// ==========================================
// 行业研究导航（深度融合版） - 2026年6月17日
// 融合：行研总监全市场行业汇总 + CIO买方深度投研内参
// ==========================================

const INDUSTRY_NAV_CONFIG_0617 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'i_sec1', label: '智能座舱显示' },
      { id: 'i_sec2', label: '半导体先进封装' },
      { id: 'i_sec3', label: 'AIDC电力与热管理' },
      { id: 'i_sec4', label: '重组胶原蛋白医美' },
      { id: 'i_sec5', label: 'siRNA心血管药物' }
    ]
  },
  {
    title: '跨赛道暗线与二阶博弈',
    links: [
      { id: 'i_sec6', label: 'SOFC爆发' },
      { id: 'i_sec7', label: '中压设备话语权内移' },
      { id: 'i_sec8', label: '肉奶周期共振' },
      { id: 'i_sec9', label: '安防存储' },
      { id: 'i_sec10', label: '消费级安防AOV' },
      { id: 'i_sec11', label: '香精香料弹性' }
    ]
  },
  {
    title: '预期差与困境反转',
    links: [
      { id: 'i_sec12', label: '房地产高能级城市' },
      { id: 'i_sec13', label: '煤炭焦煤无烟煤' },
      { id: 'i_sec14', label: '锂盐低库存弹性' }
    ]
  },
  {
    title: '高确定性底仓资产',
    links: [
      { id: 'i_sec15', label: '贵金属流模式' },
      { id: 'i_sec16', label: '纺织高端消费' },
      { id: 'i_sec17', label: '食品饮料大众品' },
      { id: 'i_sec18', label: '医疗器械创新' }
    ]
  },
  {
    title: '大宗商品量价监测',
    links: [
      { id: 'i_sec19', label: '能源金属化工' },
      { id: 'i_sec20', label: '农产品周期' }
    ]
  },
  {
    title: '独立板块',
    links: [
      { id: 'i_sec21', label: 'CIO仓位建议' },
      { id: 'i_sec22', label: '行研数据监测表' }
    ]
  }
];

function renderIndustryNav_0617() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0617.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `<button onclick="scrollToSection('${link.id}')" class="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-700 transition-colors">${link.label}</button>`).join('')}
      </div>
    </div>
  `).join('');
}
