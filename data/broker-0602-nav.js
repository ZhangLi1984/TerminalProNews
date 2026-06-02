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
    title: '行业推荐',
    links: [
      { id: 'b_sec4', label: '行业推荐热度榜' },
      { id: 'b_sec5', label: '热门赛道逻辑' }
    ]
  },
  {
    title: '金股共识',
    links: [
      { id: 'b_sec6', label: '多券商推荐个股' },
      { id: 'b_sec7', label: '金股组合汇总' },
      { id: 'b_sec8', label: '热门个股汇总' }
    ]
  },
  {
    title: '券商观点',
    links: [
      { id: 'b_sec9', label: '开源证券' },
      { id: 'b_sec10', label: '华源证券' },
      { id: 'b_sec11', label: '东吴证券' },
      { id: 'b_sec12', label: '中银证券' },
      { id: 'b_sec13', label: '国信证券' }
    ]
  },
  {
    title: '操作建议',
    links: [
      { id: 'b_sec14', label: '买方操作建议' },
      { id: 'b_sec15', label: '风险提示' },
      { id: 'b_sec16', label: '6月关键节点' }
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
