// ==========================================
// 券商晨报导航配置 - 2026-05-11
// ==========================================

const BROKER_NAV_CONFIG_0511 = [
  { title: '市场共识', links: [
    { id: 'b_sec1', label: '大盘走势判断' },
    { id: 'b_sec2', label: '各券商大盘观点汇总' }
  ]},
  { title: '行业排行', links: [
    { id: 'b_sec3', label: '行业推荐热度 TOP 13' }
  ]},
  { title: '金股榜单', links: [
    { id: 'b_sec4', label: '中银5月金股组合' },
    { id: 'b_sec5', label: '其他券商重点推荐' },
    { id: 'b_sec6', label: '跨券商共识金股' }
  ]},
  { title: '券商观点', links: [
    { id: 'b_sec7', label: '十大券商核心观点' }
  ]},
  { title: '策略与风险', links: [
    { id: 'b_sec8', label: '预期差与分歧点' },
    { id: 'b_sec9', label: '买方策略建议' }
  ]}
];

function renderBrokerNav_0511() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0511.map(group => `
    <div>
      <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('broker', '${link.id}')"
            class="nav-btn w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center"
            data-section="${link.id}"
          >
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
