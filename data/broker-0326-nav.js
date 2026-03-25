// ==========================================
// 券商晨报模块 - 导航配置 (2026 年 3 月 26 日)
// ==========================================

const BROKER_NAV_CONFIG_0326 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '市场共识与仓位建议' },
      { id: 'b_sec2', label: '热门赛道 TOP5' },
      { id: 'b_sec3', label: '金股 TOP10' }
    ]
  },
  {
    title: '策略汇总',
    links: [
      { id: 'b_sec4', label: '宏观策略汇总' },
      { id: 'b_sec5', label: '核心观点' }
    ]
  },
  {
    title: '行业配置',
    links: [
      { id: 'b_sec6', label: '热门行业推荐榜' },
      { id: 'b_sec7', label: 'AI/算力/半导体' },
      { id: 'b_sec8', label: '新能源/锂电' },
      { id: 'b_sec9', label: '医药生物' },
      { id: 'b_sec10', label: '高股息/红利' },
      { id: 'b_sec11', label: '石油石化/黄金' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec12', label: '券商金股组合' }
    ]
  },
  {
    title: '行业观点',
    links: [
      { id: 'b_sec13', label: '科技/TMT' },
      { id: 'b_sec14', label: '新能源' },
      { id: 'b_sec15', label: '消费' },
      { id: 'b_sec16', label: '周期' },
      { id: 'b_sec17', label: '金融' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec18', label: '分歧点与风险' },
      { id: 'b_sec19', label: '配置建议' }
    ]
  }
];

function renderBrokerNav_0326() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0326.map((section, idx) => `
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
