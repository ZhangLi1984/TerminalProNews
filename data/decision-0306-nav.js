// ==========================================
// 投资决策内参导航配置 - 2026-03-06
// ==========================================

const DECISION_NAV_CONFIG_0306 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线与全局叙事' },
      { id: 'sec2', label: '关键推演与操作方向' }
    ]
  },
  {
    title: 'S 级重大事件',
    links: [
      { id: 'sec3', label: 'S1. 政府工作报告发布' },
      { id: 'sec4', label: 'S2. 中东冲突升级' },
      { id: 'sec5', label: 'S3. 证监会政策表态' }
    ]
  },
  {
    title: 'A 级行业催化',
    links: [
      { id: 'sec6', label: 'AI/Micro LED CPO' },
      { id: 'sec7', label: '机器人融资热潮' },
      { id: 'sec8', label: '创新药 BD 爆发' },
      { id: 'sec9', label: '电力设备出海' },
      { id: 'sec10', label: '房地产政策' }
    ]
  },
  {
    title: '赛道全景追踪',
    links: [
      { id: 'sec11', label: 'AI/算力产业链' },
      { id: 'sec12', label: '机器人产业链' },
      { id: 'sec13', label: '新能源产业链' },
      { id: 'sec14', label: '半导体产业链' }
    ]
  },
  {
    title: '二阶传导分析',
    links: [
      { id: 'sec15', label: 'AI→电力危机→设备出海' },
      { id: 'sec16', label: '中东→能源通胀→货币政策' },
      { id: 'sec17', label: '政策→资金流向→估值重塑' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec18', label: '核心事件日历' },
      { id: 'sec19', label: '风险提示与证伪' }
    ]
  }
];

function renderDecisionNav_0306() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0306.map((group, idx) => `
    <div class="animate-in slide-left" style="animation-delay: ${idx * 80}ms; animation-fill-mode: both;">
      <h4 class="text-[12px] font-black text-slate-800 uppercase tracking-widest mb-2.5 pl-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            onclick="scrollToElement('${link.id}'); updateActiveNav('${link.id}');"
            class="nav-btn w-full flex items-center px-3 py-2 rounded-xl text-sm font-bold transition-all duration-200 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors bg-transparent"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
