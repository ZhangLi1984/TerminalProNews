// ==========================================
// 券商晨报模块 - 导航配置 (2026-06-02)
// ==========================================

const BROKER_NAV_CONFIG_0602 = [
  {
    title: '市场总览',
    links: [
      { id: 'b_sec1', label: '大盘判断共识' },
      { id: 'b_sec2', label: '券商策略观点' },
      { id: 'b_sec3', label: '宏观关键数据' }
    ]
  },
  {
    title: '行业共识',
    links: [
      { id: 'b_sec4', label: '行业推荐热度榜 TOP 15' },
      { id: 'b_sec5', label: '热门赛道逻辑深度梳理' }
    ]
  },
  {
    title: '金股共识',
    links: [
      { id: 'b_sec6', label: '多券商共同推荐个股' },
      { id: 'b_sec7', label: '各券商金股组合' },
      { id: 'b_sec8', label: '热门个股推荐汇总' }
    ]
  },
  {
    title: '券商摘要',
    links: [
      { id: 'b_sec9', label: '五大核心券商观点速览' }
    ]
  },
  {
    title: '买方操作',
    links: [
      { id: 'b_sec10', label: '基于共识度的操作建议' },
      { id: 'b_sec11', label: '风险提示' },
      { id: 'b_sec12', label: '6月关键时间节点' }
    ]
  }
];

function renderBrokerNav_0602() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0602.map(group => `
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
