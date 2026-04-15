const BROKER_NAV_CONFIG_0415 = [
  {
    title: '市场共识概览',
    links: [
      { id: 'b_sec1', label: '核心宏观数据' },
      { id: 'b_sec2', label: '各券商核心观点' },
      { id: 'b_sec3', label: '市场情绪总结' }
    ]
  },
  {
    title: '金股共识池',
    links: [
      { id: 'b_sec4', label: '中银证券4月金股' },
      { id: 'b_sec5', label: '东兴证券4月金股' },
      { id: 'b_sec6', label: '跨券商高频推荐个股' }
    ]
  },
  {
    title: '行业推荐共识',
    links: [
      { id: 'b_sec7', label: '推荐频次TOP10' },
      { id: 'b_sec8', label: 'AI算力/半导体' },
      { id: 'b_sec9', label: '新能源(锂电/储能)' },
      { id: 'b_sec10', label: '军工/商业航天' },
      { id: 'b_sec11', label: 'CPO/光模块/覆铜板' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec12', label: '六大风险提示' }
    ]
  },
  {
    title: '买方策略',
    links: [
      { id: 'b_sec13', label: '仓位与风格建议' },
      { id: 'b_sec14', label: '进攻方向配置' },
      { id: 'b_sec15', label: '防御方向配置' },
      { id: 'b_sec16', label: '本周关注事件' }
    ]
  }
];

function renderBrokerNav_0415() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0415.map((group, gi) => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-3">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center"
            data-section="${link.id}"
            onclick="scrollToSection('broker', '${link.id}')"
          >
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 bg-transparent"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
