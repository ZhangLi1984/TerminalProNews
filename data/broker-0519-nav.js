// ==========================================
// 券商晨报模块 - 导航配置 (2026 年 5 月 19 日)
// ==========================================

const BROKER_NAV_CONFIG_0519 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '大盘指数与市场共识' },
      { id: 'b_sec2', label: '各券商策略对比' },
      { id: 'b_sec3', label: '热门行业 TOP5' }
    ]
  },
  {
    title: '金股共识',
    links: [
      { id: 'b_sec4', label: '金股共识 TOP10' },
      { id: 'b_sec5', label: '5 月金股组合' }
    ]
  },
  {
    title: '行业深度',
    links: [
      { id: 'b_sec6', label: 'AI/算力/半导体' },
      { id: 'b_sec7', label: '机器人/人形机器人' },
      { id: 'b_sec8', label: '新能源/储能/锂电' },
      { id: 'b_sec9', label: '医药/创新药' },
      { id: 'b_sec10', label: '传媒/游戏/AI 应用' },
      { id: 'b_sec11', label: '煤炭/能源' },
      { id: 'b_sec12', label: '商业航天/卫星' }
    ]
  },
  {
    title: '分歧与预期差',
    links: [
      { id: 'b_sec13', label: '主要分歧' },
      { id: 'b_sec14', label: '预期差关注' }
    ]
  },
  {
    title: '风险与策略',
    links: [
      { id: 'b_sec15', label: '风险提示' },
      { id: 'b_sec16', label: '买方配置建议' },
      { id: 'b_sec17', label: '近期催化剂' }
    ]
  }
];

function renderBrokerNav_0519() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0519.map((section) => `
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
