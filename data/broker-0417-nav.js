// ==========================================
// 券商晨报导航模块 - 2026-04-17
// ==========================================

const BROKER_NAV_CONFIG_0417 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '3分钟速读' },
      { id: 'b_sec2', label: '金股TOP7' }
    ]
  },
  {
    title: '策略观点',
    links: [
      { id: 'b_sec3', label: '大盘共识与仓位' },
      { id: 'b_sec4', label: '关键变量追踪' }
    ]
  },
  {
    title: '行业推荐',
    links: [
      { id: 'b_sec5', label: 'AI算力/半导体' },
      { id: 'b_sec6', label: '新能源/储能' },
      { id: 'b_sec7', label: '化工/炼化' },
      { id: 'b_sec8', label: '工程机械' },
      { id: 'b_sec9', label: '消费/服务' },
      { id: 'b_sec10', label: '医药/创新药' },
      { id: 'b_sec11', label: '低空经济/航天' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec12', label: '中银4月金股' },
      { id: 'b_sec13', label: '多券商共识金股' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec14', label: '分歧与风险点' },
      { id: 'b_sec15', label: '买方操作建议' }
    ]
  }
];

function renderBrokerNav_0417() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0417.map(group => `
    <div>
      <h6 class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">${group.title}</h6>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('broker', '${link.id}')"
            class="nav-btn w-full text-left text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 flex-shrink-0 transition-colors"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
