// ==========================================
// 券商晨报买方汇总 - 导航配置 2026-05-27
// ==========================================
const BROKER_NAV_CONFIG_0527 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '市场共识与金股' }
    ]
  },
  {
    title: '宏观策略',
    links: [
      { id: 'b_sec2', label: '10家券商策略汇总' }
    ]
  },
  {
    title: '热门行业',
    links: [
      { id: 'b_sec3', label: 'AI算力/光通信' },
      { id: 'b_sec4', label: '人形机器人' },
      { id: 'b_sec5', label: '煤炭/焦煤' },
      { id: 'b_sec6', label: '生猪养殖' },
      { id: 'b_sec7', label: '绿电/算电协同' },
      { id: 'b_sec8', label: '房地产/消费' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec9', label: '多券商联荐金股' },
      { id: 'b_sec10', label: '各券商金股组合' }
    ]
  },
  {
    title: '事件与风险',
    links: [
      { id: 'b_sec11', label: '重大事件催化' },
      { id: 'b_sec12', label: '分歧与风险提示' }
    ]
  }
];

function renderBrokerNav_0527() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0527.map((group) => `
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
