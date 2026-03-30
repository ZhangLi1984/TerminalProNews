// ==========================================
// 券商晨报导航配置 - 2026-03-31
// ==========================================

const BROKER_NAV_CONFIG_0331 = [
  {
    title: '晨会精华',
    links: [
      { id: 'b_sec1', label: '核心摘要' },
      { id: 'b_sec2', label: '仓位建议' },
      { id: 'b_sec3', label: '热门赛道 TOP5' },
      { id: 'b_sec4', label: '金股 TOP10' }
    ]
  },
  {
    title: '宏观策略',
    links: [
      { id: 'b_sec5', label: '13 家券商策略汇总' }
    ]
  },
  {
    title: '行业聚焦',
    links: [
      { id: 'b_sec6', label: '热门行业推荐榜' },
      { id: 'b_sec7', label: '各行业详细观点' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec8', label: '多券商联荐个股' },
      { id: 'b_sec9', label: '各券商重点金股' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'b_sec10', label: '短期策略' },
      { id: 'b_sec11', label: '中期策略' },
      { id: 'b_sec12', label: '长期配置' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec13', label: '主要分歧点' },
      { id: 'b_sec14', label: '共同风险' }
    ]
  }
];

function renderBrokerNav_0331() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  let html = '';
  BROKER_NAV_CONFIG_0331.forEach((category, idx) => {
    html += `<div class="mb-6">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${category.title}</h3>
      <div class="space-y-1">`;
    category.links.forEach(link => {
      html += `<button onclick="scrollToSection('${link.id}'); updateActiveNav('${link.id}');"
                class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center group hover:bg-slate-100"
                data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 transition-colors group-hover:bg-slate-400"></div>
        <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
      </button>`;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}
