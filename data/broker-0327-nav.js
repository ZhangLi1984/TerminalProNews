// ==========================================
// 券商晨报模块 - 导航配置 (2026 年 3 月 27 日)
// ==========================================

const BROKER_NAV_CONFIG_0327 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '市场共识与仓位建议' },
      { id: 'b_sec2', label: '行业推荐热度榜' },
      { id: 'b_sec3', label: '跨券商共识个股' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec4', label: '中银证券 3 月金股' },
      { id: 'b_sec5', label: '东兴证券三月金股' },
      { id: 'b_sec6', label: '其他券商重点推荐' }
    ]
  },
  {
    title: '行业观点',
    links: [
      { id: 'b_sec7', label: '通信/光模块/CPO' },
      { id: 'b_sec8', label: '电力/算电协同' },
      { id: 'b_sec9', label: '半导体/存储芯片' },
      { id: 'b_sec10', label: '军工/航天' },
      { id: 'b_sec11', label: '银行/食品饮料' }
    ]
  },
  {
    title: '市场数据',
    links: [
      { id: 'b_sec12', label: 'A 股市场表现' },
      { id: 'b_sec13', label: '海外市场表现' },
      { id: 'b_sec14', label: '大宗商品' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec15', label: '共同风险因素' },
      { id: 'b_sec16', label: '行业特定风险' }
    ]
  }
];

function renderBrokerNav_0327() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0327.map((section, idx) => `
    <div class="nav-section">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-3">
        ${section.title}
      </h3>
      <ul class="space-y-1">
        ${section.links.map(link => `
          <li>
            <button
              onclick="scrollToSection('broker', '${link.id}'); return false;"
              class="nav-btn w-full flex items-center px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-all duration-200"
              data-section="${link.id}"
            >
              <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors"></div>
              <span>${link.label}</span>
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
