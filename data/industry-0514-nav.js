// 行业研究导航模块 - 2026-05-14
const INDUSTRY_NAV_CONFIG_0514 = [
  {
    title: '核心高胜率赛道',
    links: [
      { id: 'i_sec1', label: 'AI算力产业链' },
      { id: 'i_sec2', label: '电解铝' },
      { id: 'i_sec3', label: '人形机器人' },
      { id: 'i_sec4', label: '储能' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'i_sec5', label: '能源通胀传导链' },
      { id: 'i_sec6', label: 'AI算力→能源端反向传导' },
      { id: 'i_sec7', label: '反内卷与供给纪律回归' },
      { id: 'i_sec8', label: '汽车轻量化→机器人材料跨界' }
    ]
  },
  {
    title: '预期差与困境反转',
    links: [
      { id: 'i_sec9', label: '白酒：现金流已转正' },
      { id: 'i_sec10', label: '房地产：真实企稳临界点' },
      { id: 'i_sec11', label: 'CXO/创新药：BD爆发' },
      { id: 'i_sec12', label: '生猪养殖：产能去化左侧' },
      { id: 'i_sec13', label: '线下药店：极低估值修复' }
    ]
  },
  {
    title: '高确定性与景气延续',
    links: [
      { id: 'i_sec14', label: '造船：订单锁定至2030' },
      { id: 'i_sec15', label: '银行：净息差企稳' },
      { id: 'i_sec16', label: '燃气轮机/电力设备' },
      { id: 'i_sec17', label: '潮玩/新消费' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec18', label: '大宗商品量价监测表' },
      { id: 'i_sec19', label: '产业链周期与估值监测' }
    ]
  },
  {
    title: '配置建议',
    links: [
      { id: 'i_sec20', label: 'CIO哑铃策略配置' },
      { id: 'i_sec21', label: '预期分歧点交叉验证' },
      { id: 'i_sec22', label: '风险提示与关键事件' }
    ]
  }
];

function renderIndustryNav_0514() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0514.map(group => `
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
