// truncated=================================
// 券商晨报导航配置 - 2026 年 4 月 8 日
// ==========================================

const BROKER_NAV_CONFIG_0408 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '市场共识' },
      { id: 'b_sec2', label: '仓位建议' },
      { id: 'b_sec3', label: '热门赛道 TOP5' },
      { id: 'b_sec4', label: '金股 TOP10' }
    ]
  },
  {
    title: '宏观策略',
    links: [
      { id: 'b_sec5', label: '券商宏观策略汇总' },
      { id: 'b_sec6', label: '宏观共识要点' }
    ]
  },
  {
    title: '行业研究',
    links: [
      { id: 'b_sec7', label: '热门行业推荐榜' },
      { id: 'b_sec8', label: '电子/半导体' },
      { id: 'b_sec9', label: '煤炭' },
      { id: 'b_sec10', label: 'AI/算力/科技' },
      { id: 'b_sec11', label: '交通运输' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec12', label: '中银证券 4 月金股' },
      { id: 'b_sec13', label: '其他券商重点推荐' }
    ]
  },
  {
    title: '行业观点',
    links: [
      { id: 'b_sec14', label: '医药生物' },
      { id: 'b_sec15', label: '食品饮料' },
      { id: 'b_sec16', label: '房地产' },
      { id: 'b_sec17', label: '电力/公用事业' },
      { id: 'b_sec18', label: '纺服行业' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec19', label: '主要分歧与风险' },
      { id: 'b_sec20', label: '核心监控指标' }
    ]
  },
  {
    title: '市场数据',
    links: [
      { id: 'b_sec21', label: '主要市场指数' },
      { id: 'b_sec22', label: '海外市场' },
      { id: 'b_sec23', label: '行业涨跌' }
    ]
  }
];

function renderBrokerNav_0408() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  let html = '';
  BROKER_NAV_CONFIG_0408.forEach((section, index) => {
    html += `<div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <nav class="space-y-1">`;
    section.links.forEach(link => {
      html += `<button onclick="scrollToSection('broker', '${link.id}'); event.stopPropagation();"
        class="nav-btn w-full flex items-center px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-all"
        data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 flex-shrink-0"></div>
        <span class="truncate">${link.label}</span>
      </button>`;
    });
    html += `</nav></div>`;
  });

  container.innerHTML = html;
}
