const BROKER_NAV_CONFIG_0709 = [
  { title: '核心摘要', links: [
    { id: 'b_sec1', label: '市场共识与仓位建议' },
    { id: 'b_sec2', label: '热门赛道 TOP5' }
  ] },
  { title: '宏观策略', links: [
    { id: 'b_sec3', label: '券商大势研判汇总' }
  ] },
  { title: '行业推荐', links: [
    { id: 'b_sec4', label: '热门行业推荐榜' },
    { id: 'b_sec5', label: '各行业详细观点' }
  ] },
  { title: '金股池', links: [
    { id: 'b_sec6', label: '跨券商共振个股' }
  ] },
  { title: '风险提示', links: [
    { id: 'b_sec7', label: '分歧与共同风险' }
  ] }
];

function renderBrokerNav_0709() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0709.map(group => `
    <div>
      <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('broker','${link.id}')" data-section="${link.id}"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-all flex items-start gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mt-1.5 flex-shrink-0"></div>
            <span class="leading-tight">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
