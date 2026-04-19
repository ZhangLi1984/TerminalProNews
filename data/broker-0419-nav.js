// ==========================================
// 券商晨报导航模块 - 2026-04-19
// ==========================================

const BROKER_NAV_CONFIG_0419 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '3分钟速读' },
      { id: 'b_sec2', label: '热门赛道TOP5' },
      { id: 'b_sec3', label: '金股TOP10' }
    ]
  },
  {
    title: '策略观点',
    links: [
      { id: 'b_sec4', label: '大盘共识与仓位' },
      { id: 'b_sec5', label: '关键变量追踪' }
    ]
  },
  {
    title: '行业推荐',
    links: [
      { id: 'b_sec6', label: 'AI算力/半导体' },
      { id: 'b_sec7', label: '军工/商业航天' },
      { id: 'b_sec8', label: '储能/新能源' },
      { id: 'b_sec9', label: '创新药/CXO' },
      { id: 'b_sec10', label: '人形机器人' },
      { id: 'b_sec11', label: '房地产' },
      { id: 'b_sec12', label: '化工/石化' },
      { id: 'b_sec13', label: '电力设备/电网' },
      { id: 'b_sec14', label: '消费/食品饮料' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec15', label: '主要分歧' },
      { id: 'b_sec16', label: '共同风险' },
      { id: 'b_sec17', label: '买方操作建议' }
    ]
  }
];

function renderBrokerNav_0419() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0419.map(group => `
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
