// ==========================================
// 券商晨报买方汇总 - 导航配置 2026-05-28
// ==========================================

const BROKER_NAV_CONFIG_0528 = [
  {
    title: '市场概览',
    links: [
      { id: 'b_sec1', label: '市场数据与核心判断' },
      { id: 'b_sec2', label: '券商共识推荐行业' },
      { id: 'b_sec3', label: '券商共识推荐个股' },
    ]
  },
  {
    title: '行业观点',
    links: [
      { id: 'b_sec4', label: 'AI/算力基础设施（9家）' },
      { id: 'b_sec5', label: '半导体/芯片（7家）' },
      { id: 'b_sec6', label: '有色/贵金属（6家）' },
      { id: 'b_sec7', label: '锂电/储能 & 煤炭 & 游戏' },
    ]
  },
  {
    title: '金股与风险',
    links: [
      { id: 'b_sec8', label: '金股组合汇总' },
      { id: 'b_sec9', label: '分歧点与风险提示' },
    ]
  },
];

function renderBrokerNav_0528() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0528.map(cat => `
    <div class="mb-4">
      <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${cat.title}</div>
      <div class="space-y-0.5">
        ${cat.links.map(link => `
          <button class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all flex items-center group"
                  data-section="${link.id}" onclick="updateActiveNav('${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
