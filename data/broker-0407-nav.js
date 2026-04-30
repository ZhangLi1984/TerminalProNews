// truncated=================================
// 券商晨报导航配置 - 2026 年 04 月 07 日
// ==========================================

const BROKER_NAV_CONFIG_0407 = [
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
    title: '策略汇总',
    links: [
      { id: 'b_sec5', label: '宏观策略' },
      { id: 'b_sec6', label: '行业推荐' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec7', label: '多券商金股' },
      { id: 'b_sec8', label: '券商月度金股' }
    ]
  },
  {
    title: '行业观点',
    links: [
      { id: 'b_sec9', label: '半导体/电子' },
      { id: 'b_sec10', label: 'AI/算力' },
      { id: 'b_sec11', label: '医药生物' },
      { id: 'b_sec12', label: '高股息' },
      { id: 'b_sec13', label: '化工/周期' },
      { id: 'b_sec14', label: '消费' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec15', label: '主要分歧' },
      { id: 'b_sec16', label: '共同风险' },
      { id: 'b_sec17', label: '关键指标' }
    ]
  },
  {
    title: '附录',
    links: [
      { id: 'b_sec18', label: '公司公告' }
    ]
  }
];

function renderBrokerNav_0407() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0407.map(section => `
    <div class="space-y-2">
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-2">${section.title}</h3>
      ${section.links.map(link => `
        <button onclick="scrollToSection('broker', '${link.id}'); return false;"
          class="nav-btn w-full flex items-center px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition-all group"
          data-section="${link.id}">
          <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors group-hover:bg-red-400"></div>
          <span>${link.label}</span>
        </button>
      `).join('')}
    </div>
  `).join('');
}
