// 券商晨报导航 - 2026-04-22
const BROKER_NAV_CONFIG_0422 = [
  { title: '市场大势', links: [
    { id: 'b_sec1', label: '核心数据速览' },
    { id: 'b_sec2', label: '券商大势研判' },
    { id: 'b_sec3', label: '买方综合研判' }
  ] },
  { title: '行业推荐', links: [
    { id: 'b_sec4', label: '高共识行业排序' },
    { id: 'b_sec5', label: '重点行业逻辑展开' }
  ] },
  { title: '金股池', links: [
    { id: 'b_sec6', label: '跨券商共振个股' },
    { id: 'b_sec7', label: '重点个股速览' }
  ] },
  { title: '券商观点', links: [
    { id: 'b_sec8', label: '各券商核心观点' }
  ] },
  { title: '策略建议', links: [
    { id: 'b_sec9', label: '买方操作建议' },
    { id: 'b_sec10', label: '风险提示与关注' }
  ] }
];

function renderBrokerNav_0422() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0422.map(group => `
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
