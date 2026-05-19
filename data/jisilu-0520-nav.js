// ==========================================
// 集思录投资洞察 - 导航配置 - 2026-05-20
// ==========================================

const JISILU_NAV_CONFIG_0520 = [
  { title: '热门话题', links: [
    { id: 'j_sec1', label: '可转债"四傻"困境博弈' },
    { id: 'j_sec2', label: '老登股困境与价值质疑' },
    { id: 'j_sec3', label: 'AI科技牛市与踏空焦虑' },
    { id: 'j_sec4', label: '低风险投资"至暗时刻"' },
    { id: 'j_sec5', label: '北交所打新热度飙升' },
    { id: 'j_sec6', label: '期权卖方策略实盘' },
    { id: 'j_sec7', label: '持有封基健康关注' },
    { id: 'j_sec8', label: 'ETF申赎套利' },
  ]},
  { title: '投资方法论', links: [
    { id: 'j_sec9', label: '六大投资策略精粹' },
  ]},
  { title: '热议标的', links: [
    { id: 'j_sec10', label: '热议标的清单' },
  ]},
  { title: '情绪与风控', links: [
    { id: 'j_sec11', label: '市场情绪观察' },
    { id: 'j_sec12', label: '五大风险提示' },
  ]},
];

function renderJisiluNav_0520() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  let html = '';
  JISILU_NAV_CONFIG_0520.forEach(group => {
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
