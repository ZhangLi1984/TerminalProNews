// ==========================================
// 券商晨报买方汇总 - 导航配置 - 2026-05-21
// ==========================================

const BROKER_NAV_CONFIG_0521 = [
  { title: '市场共识', links: [
    { id: 'b_sec1', label: '大盘趋势与核心矛盾' },
    { id: 'b_sec2', label: '九家券商核心逻辑' },
  ]},
  { title: '行业推荐', links: [
    { id: 'b_sec3', label: '行业推荐频次汇总' },
  ]},
  { title: '金股组合', links: [
    { id: 'b_sec4', label: '重点推荐个股' },
    { id: 'b_sec5', label: '东兴五月金股' },
    { id: 'b_sec6', label: '中银五月金股' },
  ]},
  { title: '券商观点摘要', links: [
    { id: 'b_sec7', label: '华源证券' },
    { id: 'b_sec8', label: '东兴证券' },
    { id: 'b_sec9', label: '东吴证券' },
    { id: 'b_sec10', label: '开源证券' },
    { id: 'b_sec11', label: '中银证券' },
    { id: 'b_sec12', label: '万联/英大/第一创业/山西' },
  ]},
  { title: '操作建议', links: [
    { id: 'b_sec13', label: '仓位配置与交易策略' },
    { id: 'b_sec14', label: '重点跟踪催化事件' },
    { id: 'b_sec15', label: '风险提示' },
  ]},
];

function renderBrokerNav_0521() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0521.map((cat) => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">${cat.title}</h4>
      <div class="space-y-1">
        ${cat.links.map(link => `
          <button onclick="scrollToSection('${link.id}', 'broker'); updateActiveNav('${link.id}')"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-indigo-500 transition-colors flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
