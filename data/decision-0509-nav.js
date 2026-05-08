// ==========================================
// 决策导航配置 - 2026-05-09
// ==========================================

const DECISION_NAV_CONFIG_0509 = [
  { title: '核心摘要', links: [
    { id: 'sec1', label: '全局叙事与核心主线' },
    { id: 'sec2', label: '操作方向与仓位' }
  ]},
  { title: '重大事件推演', links: [
    { id: 'sec3', label: '美伊冲突与油价逼近100美元' },
    { id: 'sec4', label: 'AI算力瓶颈上移传导链' },
    { id: 'sec5', label: '人形机器人量产元年' }
  ]},
  { title: '重要新闻与行业催化', links: [
    { id: 'sec6', label: '科技/AI/半导体' },
    { id: 'sec7', label: '新能源/储能/锂电' },
    { id: 'sec8', label: '商业航天与量子计算' },
    { id: 'sec9', label: '政策与宏观数据' },
    { id: 'sec10', label: '医药/其他板块' }
  ]},
  { title: '风险与避雷', links: [
    { id: 'sec11', label: '逻辑证伪区' },
    { id: 'sec12', label: '传闻预警' }
  ]},
  { title: '跟踪要点', links: [
    { id: 'sec13', label: '明日/下周重点关注' }
  ]}
];

function renderDecisionNav_0509() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0509.map(group => `
    <div>
      <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('decision', '${link.id}')"
            class="nav-btn w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center"
            data-section="${link.id}"
          >
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
