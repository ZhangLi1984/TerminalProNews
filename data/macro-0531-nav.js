const MACRO_NAV_CONFIG_0531 = [
  { title: '宏观指标', links: [
    { id: 'm_sec1', label: '核心指标速览' },
    { id: 'm_sec2', label: '经济数据亮点' }
  ]},
  { title: '研报共识', links: [
    { id: 'm_sec3', label: '国内经济 K 型分化' },
    { id: 'm_sec4', label: '海外宏观再通胀' },
    { id: 'm_sec5', label: '地缘政治变量' },
    { id: 'm_sec6', label: 'AI 产业主线' },
    { id: 'm_sec7', label: '政策展望' }
  ]},
  { title: '核心矛盾', links: [
    { id: 'm_sec8', label: '四大矛盾与预期差' }
  ]},
  { title: '配置建议', links: [
    { id: 'm_sec9', label: '大类资产配置' },
    { id: 'm_sec10', label: '行业轮动映射' }
  ]},
  { title: '风险与策略', links: [
    { id: 'm_sec11', label: '重点风险提示' },
    { id: 'm_sec12', label: '一周操作策略' }
  ]}
];

function renderMacroNav_0531() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0531.map(group =>
    `<div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">${group.title}</h4>
      <div class="space-y-0.5">
        ${group.links.map(link =>
          `<button class="nav-btn w-full text-left text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group" data-section="${link.id}" onclick="updateActiveNav('${link.id}')">
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
            ${link.label}
          </button>`
        ).join('')}
      </div>
    </div>`
  ).join('');
}
