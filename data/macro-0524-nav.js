// ==========================================
// 宏观研究内参 - 导航配置 2026-05-24
// ==========================================
const MACRO_NAV_CONFIG_0524 = [
  {
    title: '宏观环境',
    links: [
      { id: 'm_sec1', label: '三股力量撕裂格局' },
      { id: 'm_sec2', label: '风险偏好与资金流向' }
    ]
  },
  {
    title: '策略配置',
    links: [
      { id: 'm_sec3', label: '杠铃配置策略' },
      { id: 'm_sec4', label: '仓位建议结构' }
    ]
  },
  {
    title: '跟踪节点',
    links: [
      { id: 'm_sec5', label: '关键时间节点' },
      { id: 'm_sec6', label: '核心风险提示' }
    ]
  }
];

function renderMacroNav_0524() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0524.map((group) => `
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
