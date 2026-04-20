// ==========================================
// 券商晨报导航模块 - 2026年4月20日
// ==========================================
const BROKER_NAV_CONFIG_0420 = [
  { title: '市场共识', links: [
    { id: 'b_sec1', label: '大盘观点与核心驱动' },
    { id: 'b_sec2', label: '资金流向判断' }
  ]},
  { title: '行业推荐', links: [
    { id: 'b_sec3', label: 'TOP10 行业推荐' },
    { id: 'b_sec4', label: '其他关注方向' }
  ]},
  { title: '金股共识', links: [
    { id: 'b_sec5', label: 'TOP20 金股汇总' }
  ]},
  { title: '券商观点', links: [
    { id: 'b_sec6', label: '各券商核心观点摘要' }
  ]},
  { title: '热点板块', links: [
    { id: 'b_sec7', label: 'AI算力' },
    { id: 'b_sec8', label: '房地产' },
    { id: 'b_sec9', label: '创新药' },
    { id: 'b_sec10', label: '非银金融' },
    { id: 'b_sec11', label: '有色金属' }
  ]},
  { title: '策略建议', links: [
    { id: 'b_sec12', label: '仓位与行业配置' },
    { id: 'b_sec13', label: '操作性建议与本周事件' }
  ]},
  { title: '风险提示', links: [
    { id: 'b_sec14', label: '一致性风险与风险汇总' }
  ]}
];

function renderBrokerNav_0420() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0420.map(group =>
    `<div><h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">${group.title}</h4><div class="space-y-1">${group.links.map(link =>
      `<button onclick="scrollToSection('broker', '${link.id}')" class="nav-btn w-full text-left text-sm px-3 py-1.5 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="${link.id}"><div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>${link.label}</button>`
    ).join('')}</div></div>`
  ).join('');
}
