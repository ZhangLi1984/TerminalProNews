// ==========================================
// 券商晨报模块 - 导航配置 (2026-05-31)
// ==========================================

const BROKER_NAV_CONFIG_0531 = [
  {
    title: '市场共识',
    links: [
      { id: 'b_sec1', label: '整体情绪概览' },
      { id: 'b_sec2', label: '宏观背景共识' }
    ]
  },
  {
    title: '行业推荐',
    links: [
      { id: 'b_sec3', label: '行业推荐热度排名' },
      { id: 'b_sec4', label: '各券商核心观点' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec5', label: '共识金股 TOP 10' },
      { id: 'b_sec6', label: '各券商金股汇总' }
    ]
  },
  {
    title: '买方策略',
    links: [
      { id: 'b_sec7', label: '预期差与二阶博弈' },
      { id: 'b_sec8', label: '配置建议与风险' }
    ]
  }
];

function renderBrokerNav_0531() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0531.map(group => `
    <div class="mb-5">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="flex flex-wrap gap-2">
        ${group.links.map(link => `
          <button onclick="window.scrollTo({top: document.getElementById('${link.id}').offsetTop - 100, behavior: 'smooth'}); updateActiveNav('${link.id}')"
            class="nav-btn px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all border border-slate-200"
            data-section="${link.id}">
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
