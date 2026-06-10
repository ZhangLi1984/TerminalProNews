// ==========================================
// 券商晨报导航 - 2026年6月10日
// ==========================================

const BROKER_NAV_CONFIG_0610 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '市场共识' },
      { id: 'b_sec2', label: '热门赛道TOP5' },
      { id: 'b_sec3', label: '金股TOP10' }
    ]
  },
  {
    title: '行业观点',
    links: [
      { id: 'b_sec4', label: 'AI/算力/半导体' },
      { id: 'b_sec5', label: '电子化学品/CPO' },
      { id: 'b_sec6', label: '人形机器人' },
      { id: 'b_sec7', label: '磷化工/战略资源' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec8', label: '东兴六月金股' },
      { id: 'b_sec9', label: '中银六月金股' },
      { id: 'b_sec10', label: '重点个股逻辑' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec11', label: '风险与分歧' }
    ]
  }
];

function renderBrokerNav_0610() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0610.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <ul class="space-y-1">
        ${section.links.map(link => `
          <li>
            <a href="#${link.id}" data-section="${link.id}" class="nav-btn block px-3 py-2 text-sm rounded-lg text-slate-700 hover:bg-slate-100 transition-colors" onclick="updateActiveNav('${link.id}')">
              <div class="flex items-center">
                <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
                <span>${link.label}</span>
              </div>
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
