// 行业研究导航模块 - 2026-05-13
const INDUSTRY_NAV_CONFIG_0513 = [
  {
    title: '高景气赛道',
    links: [
      { id: 'sec1', label: 'AI算力：CPU超级周期' },
      { id: 'sec2', label: '锂电储能：涨价主升浪' },
      { id: 'sec3', label: '非银金融：量价齐升' }
    ]
  },
  {
    title: '周期反转',
    links: [
      { id: 'sec4', label: '风电海风：范式转换' },
      { id: 'sec5', label: '电网设备：特高压加速' },
      { id: 'sec6', label: '工程机械：三重共振' }
    ]
  },
  {
    title: '供给冲击',
    links: [
      { id: 'sec7', label: '化工：蛋氨酸暴涨链' },
      { id: 'sec8', label: '煤炭：能源安全底仓' },
      { id: 'sec9', label: '黄金有色：牛市中段' }
    ]
  },
  {
    title: '困境反转',
    links: [
      { id: 'sec10', label: '白酒：底部出清期' },
      { id: 'sec11', label: '医药生物：底部企稳' },
      { id: 'sec12', label: '生猪养殖：去产能阶段' }
    ]
  },
  {
    title: '数据与策略',
    links: [
      { id: 'sec13', label: '大宗商品监测表' },
      { id: 'sec14', label: '产业链周期与估值表' },
      { id: 'sec15', label: '本期配置建议' }
    ]
  }
];

function renderIndustryNav_0513() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0513.map(group => `
    <div class="mb-6">
      <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <a href="#${link.id}" class="nav-btn flex items-center px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
