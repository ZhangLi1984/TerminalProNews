// ==========================================
// 行业研究导航模块 - 2026年4月20日
// ==========================================
const INDUSTRY_NAV_CONFIG_0420 = [
  { title: '核心赛道', links: [
    { id: 'i_sec1', label: 'AI算力基础设施' },
    { id: 'i_sec2', label: '人形机器人/具身智能' },
    { id: 'i_sec3', label: '非银金融/券商' },
    { id: 'i_sec4', label: '储能/锂电' },
    { id: 'i_sec5', label: '欧洲海上风电' }
  ]},
  { title: '跨赛道暗线', links: [
    { id: 'i_sec6', label: '中东冲突→煤化工' },
    { id: 'i_sec7', label: 'AI算力→电力重估' },
    { id: 'i_sec8', label: '智能驾驶渗透' },
    { id: 'i_sec9', label: '生猪亏损→产能去化' }
  ]},
  { title: '预期差挖掘', links: [
    { id: 'i_sec10', label: '煤炭资源重估' },
    { id: 'i_sec11', label: 'CXO订单验证' },
    { id: 'i_sec12', label: '光伏BC路线' },
    { id: 'i_sec13', label: '房地产企稳' },
    { id: 'i_sec14', label: '传媒游戏错杀' },
    { id: 'i_sec15', label: '白酒见底信号' },
    { id: 'i_sec16', label: '东南亚电动化' },
    { id: 'i_sec17', label: 'ADC创新药爆发' }
  ]},
  { title: '高确定底仓', links: [
    { id: 'i_sec18', label: '创新药产业链' },
    { id: 'i_sec19', label: '黄金' },
    { id: 'i_sec20', label: '铜' }
  ]},
  { title: '监测与总结', links: [
    { id: 'i_sec21', label: '大宗商品量价监测' },
    { id: 'i_sec22', label: '产业链周期估值' },
    { id: 'i_sec23', label: '预期分歧汇总' },
    { id: 'i_sec24', label: 'CIO仓位配置建议' }
  ]}
];

function renderIndustryNav_0420() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0420.map(group =>
    `<div><h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3><div class="space-y-1">${group.links.map(link =>
      `<button class="nav-btn w-full text-left px-3 py-2 text-sm rounded-lg transition-all text-slate-700 hover:bg-slate-100" data-section="${link.id}" onclick="scrollToSection('industry','${link.id}')">${link.label}</button>`
    ).join('')}</div></div>`
  ).join('');
}
