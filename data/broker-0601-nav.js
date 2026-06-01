// ==========================================
// 券商晨报模块 - 导航配置 (2026-06-01)
// ==========================================

const BROKER_NAV_CONFIG_0601 = [
  {
    title: '市场总览',
    links: [
      { id: 'b_sec1', label: '宏观与市场走势' },
      { id: 'b_sec2', label: '策略观点汇总' }
    ]
  },
  {
    title: '行业共识',
    links: [
      { id: 'b_sec3', label: '行业推荐排名 TOP 12' },
      { id: 'b_sec4', label: '重点行业深度观点' }
    ]
  },
  {
    title: '金股共识',
    links: [
      { id: 'b_sec5', label: '金股共识 TOP 15' },
      { id: 'b_sec6', label: '各券商金股组合' }
    ]
  },
  {
    title: '券商摘要',
    links: [
      { id: 'b_sec7', label: '十大券商观点' }
    ]
  },
  {
    title: '买方操作',
    links: [
      { id: 'b_sec8', label: '仓位与配置建议' },
      { id: 'b_sec9', label: '风险提示与跟踪指标' }
    ]
  }
];

function renderBrokerNav_0601() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0601.map(group => `
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
