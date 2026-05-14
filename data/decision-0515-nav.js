// ==========================================
// 投资决策内参导航模块 - 2026-05-15
// ==========================================

const DECISION_NAV_CONFIG_0515 = [
  { title: '核心摘要', links: [
    { id: 'd_sec1', label: '全局叙事速读' }
  ]},
  { title: '重大事件', links: [
    { id: 'd_sec2', label: '中美元首会晤' },
    { id: 'd_sec3', label: 'Cerebras IPO引爆' },
    { id: 'd_sec4', label: '美联储换帅+鹰风' },
    { id: 'd_sec5', label: '4月金融数据' }
  ]},
  { title: '行业催化', links: [
    { id: 'd_sec6', label: 'AI/算力/半导体' },
    { id: 'd_sec7', label: '新能源/汽车' },
    { id: 'd_sec8', label: '大宗商品/资源' },
    { id: 'd_sec9', label: '宏观/政策' }
  ]},
  { title: '热点赛道', links: [
    { id: 'd_sec10', label: '六大赛道追踪' }
  ]},
  { title: '二阶思维', links: [
    { id: 'd_sec11', label: '五条传导链分析' }
  ]},
  { title: '明日关注', links: [
    { id: 'd_sec12', label: '事件/数据/财报' }
  ]},
  { title: '风险提示', links: [
    { id: 'd_sec13', label: '证伪区与避雷针' }
  ]}
];

function renderDecisionNav_0515() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0515.map(group => `
    <div class="space-y-1.5">
      <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2">${group.title}</p>
      ${group.links.map(link => `
        <button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
          onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'});">
          <div class="w-1 h-1 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
          <span class="truncate">${link.label}</span>
        </button>
      `).join('')}
    </div>
  `).join('');
}
