// ==========================================
// 券商晨报导航 - 2026-06-09
// ==========================================

const BROKER_NAV_CONFIG_0609 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '3分钟速读' },
      { id: 'b_sec2', label: '市场共识' }
    ]
  },
  {
    title: '宏观策略',
    links: [
      { id: 'b_sec3', label: '五大券商观点' },
      { id: 'b_sec4', label: '仓位建议' }
    ]
  },
  {
    title: '热门行业',
    links: [
      { id: 'b_sec5', label: '推荐次数统计' },
      { id: 'b_sec6', label: 'TOP10 行业' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec7', label: '金股 TOP10' },
      { id: 'b_sec8', label: '重点关注个股' }
    ]
  },
  {
    title: '行业详解',
    links: [
      { id: 'b_sec9', label: 'AI/算力产业链' },
      { id: 'b_sec10', label: '半导体/电子' },
      { id: 'b_sec11', label: '煤炭/电力' },
      { id: 'b_sec12', label: '黄金珠宝' },
      { id: 'b_sec13', label: '电网设备' },
      { id: 'b_sec14', label: '北交所/商业航天' }
    ]
  },
  {
    title: '风险与附录',
    links: [
      { id: 'b_sec15', label: '风险提示与分歧' },
      { id: 'b_sec16', label: '券商来源明细' }
    ]
  }
];

function renderBrokerNav_0609() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0609.map(group => `
    <div>
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'});"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-red-500"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
