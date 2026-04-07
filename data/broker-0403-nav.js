const BROKER_NAV_CONFIG_0403 = [
  {
    title: '晨会概览',
    links: [
      { id: 'b_sec1', label: '今日晨会总览' },
      { id: 'b_sec2', label: '机构覆盖统计' }
    ]
  },
  {
    title: '重点晨会',
    links: [
      { id: 'b_sec3', label: '金点策略：4 月 A 股开门红' },
      { id: 'b_sec4', label: '华源晨会精粹' },
      { id: 'b_sec5', label: '中银晨会聚焦' }
    ]
  },
  {
    title: '机构晨报汇编',
    links: [
      { id: 'b_sec6', label: '4 月 2 日晨报' },
      { id: 'b_sec7', label: '4 月 1 日晨报' },
      { id: 'b_sec8', label: '3 月 31 日晨报' }
    ]
  },
  {
    title: '策略建议',
    links: [
      { id: 'b_sec9', label: '综合观点汇总' },
      { id: 'b_sec10', label: '关注方向' }
    ]
  }
];

function renderBrokerNav_0403() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0403.map(group => `
    <div>
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">${group.title}</h3>
      <nav class="space-y-1">
        ${group.links.map(link => `
          <button
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-100 text-slate-700"
            data-section="${link.id}"
            onclick="scrollToSection('broker', '${link.id}')"
          >
            <div class="flex items-center">
              <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors flex-shrink-0"></div>
              <span>${link.label}</span>
            </div>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
