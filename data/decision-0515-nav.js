const DECISION_NAV_CONFIG_0515 = [
  { title: '全局导航', links: [
    { id: 'sec1', label: '核心摘要与全局叙事' },
    { id: 'sec2', label: '中美元首历史性会晤' },
    { id: 'sec3', label: 'Cerebras IPO引爆' },
    { id: 'sec4', label: '美联储换帅' },
    { id: 'sec5', label: '4月金融数据' },
  ]},
  { title: '行业催化', links: [
    { id: 'sec6', label: 'AI/算力/半导体' },
    { id: 'sec7', label: '新能源/汽车' },
    { id: 'sec8', label: '大宗商品/资源品' },
    { id: 'sec9', label: '宏观/政策' },
  ]},
  { title: '赛道追踪', links: [
    { id: 'sec10', label: '热点赛道追踪' },
    { id: 'sec11', label: '跨赛道传导分析' },
  ]},
  { title: '关注清单', links: [
    { id: 'sec12', label: '明日关注清单' },
    { id: 'sec13', label: '风险提示与证伪区' },
  ]},
];

function renderDecisionNav_0515() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  let html = '';
  DECISION_NAV_CONFIG_0515.forEach(group => {
    html += `<div class="mb-2">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${group.title}</h3>
      <nav class="space-y-1">`;
    group.links.forEach(link => {
      html += `<a href="javascript:void(0)" onclick="updateActiveNav('${link.id}');document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
        class="nav-btn flex items-center w-full text-left text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100" data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full mr-2 transition-colors duration-200 bg-transparent"></div>
        <span class="truncate">${link.label}</span>
      </a>`;
    });
    html += `</nav></div>`;
  });
  container.innerHTML = html;
}
