// ==========================================
// 宏观研究模块 - 导航配置 (2026-05-28)
// ==========================================

const MACRO_NAV_CONFIG_0528 = [
  { title: '宏观概览', links: [
    { id: 'm_sec1', label: '执行摘要' },
    { id: 'm_sec2', label: '核心宏观判断' }
  ]},
  { title: '政策与流动性', links: [
    { id: 'm_sec3', label: '货币政策分析' },
    { id: 'm_sec4', label: '财政与产业政策' }
  ]},
  { title: '海外与地缘', links: [
    { id: 'm_sec5', label: '美联储与美伊局势' }
  ]},
  { title: '配置建议', links: [
    { id: 'm_sec6', label: '资产配置策略' },
    { id: 'm_sec7', label: '行业轮动方向' }
  ]},
  { title: '经济数据', links: [
    { id: 'm_sec8', label: '核心经济数据表' },
    { id: 'm_sec9', label: '利率与流动性' }
  ]},
  { title: '风险与日历', links: [
    { id: 'm_sec10', label: '宏观风险提示' },
    { id: 'm_sec11', label: '关键跟踪日历' }
  ]}
];

function renderMacroNav_0528() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;
  container.innerHTML = MACRO_NAV_CONFIG_0528.map(cat => `
    <div class="mb-4">
      <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${cat.title}</div>
      <div class="space-y-0.5">
        ${cat.links.map(link => `
          <button class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all flex items-center group"
                  data-section="${link.id}" onclick="updateActiveNav('${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
