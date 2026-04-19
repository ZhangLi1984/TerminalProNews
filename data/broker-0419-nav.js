// ==========================================
// 券商晨报导航模块 - 2026-04-19
// ==========================================
const BROKER_NAV_CONFIG_0419 = [
  { title: '核心摘要', links: [
    { id: 'b_sec1', label: '市场共识' },
    { id: 'b_sec2', label: '仓位建议' }
  ]},
  { title: '热门赛道', links: [
    { id: 'b_sec3', label: 'TOP5 赛道' },
    { id: 'b_sec4', label: '金股 TOP10' }
  ]},
  { title: '宏观策略', links: [
    { id: 'b_sec5', label: '12券商策略汇总' }
  ]},
  { title: '行业推荐', links: [
    { id: 'b_sec6', label: 'AI/算力/半导体' },
    { id: 'b_sec7', label: '军工/商业航天' },
    { id: 'b_sec8', label: '储能/新能源' },
    { id: 'b_sec9', label: '创新药/CXO' },
    { id: 'b_sec10', label: '人形机器人' },
    { id: 'b_sec11', label: '房地产' },
    { id: 'b_sec12', label: '化工/石化' },
    { id: 'b_sec13', label: '电力设备/电网' },
    { id: 'b_sec14', label: '消费/食品饮料' }
  ]},
  { title: '金股组合', links: [
    { id: 'b_sec15', label: '中银证券金股' },
    { id: 'b_sec16', label: '东兴证券金股' }
  ]},
  { title: '风险与分歧', links: [
    { id: 'b_sec17', label: '主要分歧' },
    { id: 'b_sec18', label: '共同风险' }
  ]}
];

function renderBrokerNav_0419() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0419.map(group => `
    <div>
      <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('broker', '${link.id}')"
            class="nav-btn w-full text-left text-sm px-3 py-1.5 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
