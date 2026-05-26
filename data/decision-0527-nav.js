// ==========================================
// 投资决策内参 - 导航配置 2026-05-27
// ==========================================
const DECISION_NAV_CONFIG_0527 = [
  {
    title: '核心摘要',
    links: [
      { id: 'd_sec1', label: '核心要闻速读' }
    ]
  },
  {
    title: '重大新闻',
    links: [
      { id: 'd_sec2', label: '华为"韬定律"引爆半导体' },
      { id: 'd_sec3', label: '美伊谈判破裂地缘升级' },
      { id: 'd_sec4', label: '美光市值破万亿存储周期' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'd_sec5', label: '半导体/先进封装' },
      { id: 'd_sec6', label: '存储芯片' },
      { id: 'd_sec7', label: '人形机器人' },
      { id: 'd_sec8', label: '铝/有色金属' },
      { id: 'd_sec9', label: '商业航天' }
    ]
  },
  {
    title: '操作策略',
    links: [
      { id: 'd_sec10', label: '跨赛道传导分析' },
      { id: 'd_sec11', label: '明日关注与风险提示' }
    ]
  }
];

function renderDecisionNav_0527() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0527.map((group) => `
    <div>
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
            class="nav-btn w-full text-left px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors flex items-center"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
