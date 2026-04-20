const DECISION_NAV_CONFIG_0420 = [
  { title: '核心摘要', links: [
    { id: 'sec1', label: '核心主线与操作方向' },
    { id: 'sec2', label: '跨市场传导推演' }
  ]},
  { title: '重大事件', links: [
    { id: 'sec3', label: '美伊谈判破裂' },
    { id: 'sec4', label: '荣耀机器人半马破纪录' },
    { id: 'sec5', label: 'AI算力链业绩兑现' }
  ]},
  { title: '重要新闻', links: [
    { id: 'sec6', label: '行业催化与资金博弈' }
  ]},
  { title: '热点赛道', links: [
    { id: 'sec7', label: 'AI/算力/光通信链' },
    { id: 'sec8', label: '人形机器人' },
    { id: 'sec9', label: '新能源/光伏' },
    { id: 'sec10', label: '能源/资源品' }
  ]},
  { title: '传导分析', links: [
    { id: 'sec11', label: '二阶思维传导推演' }
  ]},
  { title: '关注与风险', links: [
    { id: 'sec12', label: '明日及本周关键节点' },
    { id: 'sec13', label: '风险提示与证伪区' }
  ]}
];

function renderDecisionNav_0420() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0420.map(group =>
    `<div><h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3><div class="space-y-1">${group.links.map(link =>
      `<button class="nav-btn w-full text-left px-3 py-2 text-sm rounded-lg transition-all text-slate-700 hover:bg-slate-100" data-section="${link.id}" onclick="scrollToSection('decision','${link.id}')">${link.label}</button>`
    ).join('')}</div></div>`
  ).join('');
}
