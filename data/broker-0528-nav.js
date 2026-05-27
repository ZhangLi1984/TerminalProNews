// ==========================================
// 券商晨报买方汇总 - 导航配置 2026-05-28
// ==========================================
const BROKER_NAV_CONFIG_0528 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '市场概览与核心观点' },
      { id: 'b_sec2', label: '券商共识推荐行业' },
      { id: 'b_sec3', label: '多券商联荐个股' }
    ]
  },
  {
    title: '行业深度',
    links: [
      { id: 'b_sec4', label: 'AI算力基础设施' },
      { id: 'b_sec5', label: '半导体/芯片' },
      { id: 'b_sec6', label: '有色金属/贵金属' },
      { id: 'b_sec7', label: '煤炭' },
      { id: 'b_sec8', label: '锂电/储能' },
      { id: 'b_sec9', label: '游戏传媒' },
      { id: 'b_sec10', label: '人形机器人' },
      { id: 'b_sec11', label: '消费/食品饮料' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec12', label: '各券商金股汇总' },
      { id: 'b_sec13', label: '金股集中度分析' }
    ]
  },
  {
    title: '券商摘要',
    links: [
      { id: 'b_sec14', label: '11家券商晨报摘要' }
    ]
  },
  {
    title: '分歧与风险',
    links: [
      { id: 'b_sec15', label: '四大分歧维度' },
      { id: 'b_sec16', label: '共同风险提示' }
    ]
  }
];

function renderBrokerNav_0528() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0528.map((group) => `
    <div>
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
            class="nav-btn w-full text-left px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors flex items-center"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
