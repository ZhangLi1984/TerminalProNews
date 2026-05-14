// ==========================================
// 券商晨报导航模块 - 2026-05-15
// ==========================================

const BROKER_NAV_CONFIG_0515 = [
  { title: '市场共识', links: [
    { id: 'b_sec1', label: '市场共识概览' },
    { id: 'b_sec2', label: '宏观关键变量' }
  ]},
  { title: '行业共识', links: [
    { id: 'b_sec3', label: '热门行业 TOP 10' },
    { id: 'b_sec4', label: '金股汇总与多券商共识' }
  ]},
  { title: '买方策略', links: [
    { id: 'b_sec5', label: '仓位与风格建议' },
    { id: 'b_sec6', label: '核心配置主线' },
    { id: 'b_sec7', label: '短期交易机会与回避方向' }
  ]},
  { title: '风险提示', links: [
    { id: 'b_sec8', label: '共同风险因素' },
    { id: 'b_sec9', label: '主要分歧点' }
  ]}
];

function renderBrokerNav_0515() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0515.map(group => `
    <div class="space-y-1.5">
      <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2">${group.title}</p>
      ${group.links.map(link => `
        <button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
          onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'});">
          <div class="w-1 h-1 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
          <span class="truncate">${link.label}</span>
        </button>
      `).join('')}
    </div>
  `).join('');
}
