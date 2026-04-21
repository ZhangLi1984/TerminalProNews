// ==========================================
// 券商晨报导航 - 2026-04-21
// ==========================================

const BROKER_NAV_CONFIG_0421 = [
  { title: '核心摘要', links: [
    { id: 'b_sec1', label: '市场共识与仓位' },
    { id: 'b_sec2', label: '热门赛道 TOP5' },
    { id: 'b_sec3', label: '金股 TOP10' }
  ] },
  { title: '宏观策略', links: [{ id: 'b_sec4', label: '8大券商策略汇总' }] },
  { title: '行业推荐', links: [
    { id: 'b_sec5', label: '行业推荐次数统计' },
    { id: 'b_sec6', label: 'AI/算力/半导体' },
    { id: 'b_sec7', label: '有色金属/贵金属' },
    { id: 'b_sec8', label: '创新药/医药' },
    { id: 'b_sec9', label: '新能源/储能/电力' },
    { id: 'b_sec10', label: '非银金融/券商' },
    { id: 'b_sec11', label: '交通运输/油运' },
    { id: 'b_sec12', label: '煤炭' }
  ] },
  { title: '金股组合', links: [{ id: 'b_sec13', label: '各券商金股名单' }] },
  { title: '投资策略', links: [
    { id: 'b_sec14', label: '杠铃策略配置' },
    { id: 'b_sec15', label: '重点关注事件' }
  ] },
  { title: '风险提示', links: [{ id: 'b_sec16', label: '分歧点与共同风险' }] },
  { title: '市场数据', links: [{ id: 'b_sec17', label: 'A股/海外/商品速览' }] }
];

function renderBrokerNav_0421() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0421.map(group => `
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
