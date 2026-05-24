// ==========================================
// 券商晨报买方汇总 - 导航配置 2026-05-24
// ==========================================
const BROKER_NAV_CONFIG_0524 = [
  {
    title: '市场总览',
    links: [
      { id: 'b_sec1', label: '最新市场表现' },
      { id: 'b_sec2', label: '券商大盘判断共识' },
      { id: 'b_sec3', label: '核心宏观数据' },
      { id: 'b_sec4', label: '海外关键变量' }
    ]
  },
  {
    title: '行业推荐',
    links: [
      { id: 'b_sec5', label: '共识行业推荐 TOP 10' },
      { id: 'b_sec6', label: '热门投资主题' }
    ]
  },
  {
    title: '金股与个股',
    links: [
      { id: 'b_sec7', label: '中银/东兴金股组合' },
      { id: 'b_sec8', label: '重点推荐个股汇总' }
    ]
  },
  {
    title: '策略与风险',
    links: [
      { id: 'b_sec9', label: '买方策略建议' },
      { id: 'b_sec10', label: '仓位与风格配置' },
      { id: 'b_sec11', label: '重点配置方向' },
      { id: 'b_sec12', label: '风险提示' }
    ]
  }
];

function renderBrokerNav_0524() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0524.map((group) => `
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
