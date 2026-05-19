// ==========================================
// 券商晨报买方汇总 - 导航配置 - 2026-05-20
// ==========================================

const BROKER_NAV_CONFIG_0520 = [
  { title: '市场总览', links: [
    { id: 'b_sec1', label: '最新市场数据' },
    { id: 'b_sec2', label: '各券商大盘判断' },
    { id: 'b_sec3', label: '市场共识总结' },
  ]},
  { title: '行业共识推荐', links: [
    { id: 'b_sec4', label: '行业推荐热度统计' },
    { id: 'b_sec5', label: '半导体/存储芯片' },
    { id: 'b_sec6', label: 'AI算力/光模块' },
    { id: 'b_sec7', label: '机器人' },
    { id: 'b_sec8', label: '煤炭/能源' },
    { id: 'b_sec9', label: '其他重点行业' },
  ]},
  { title: '金股组合', links: [
    { id: 'b_sec10', label: '各券商金股汇总' },
    { id: 'b_sec11', label: '重点个股推荐' },
  ]},
  { title: '策略与风控', links: [
    { id: 'b_sec12', label: '仓位与节奏' },
    { id: 'b_sec13', label: '核心配置方向' },
    { id: 'b_sec14', label: '本周重点关注' },
    { id: 'b_sec15', label: '风险提示' },
  ]},
];

function renderBrokerNav_0520() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  let html = '';
  BROKER_NAV_CONFIG_0520.forEach(group => {
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
