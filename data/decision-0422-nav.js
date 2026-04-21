// ==========================================
// 投资决策内参导航 - 2026-04-22
// ==========================================

const DECISION_NAV_CONFIG_0422 = [
  { title: '核心摘要', links: [{ id: 'sec1', label: '全局叙事与操作方向' }] },
  { title: '重大事件', links: [
    { id: 'sec2', label: '美伊停火到期' },
    { id: 'sec3', label: '苹果CEO换帅' },
    { id: 'sec4', label: '沃什听证会' }
  ] },
  { title: '行业催化', links: [
    { id: 'sec5', label: '宁德时代钠电量产' },
    { id: 'sec6', label: '国务院服务业100万亿' },
    { id: 'sec7', label: 'AI算力产业链' },
    { id: 'sec8', label: '人形机器人' },
    { id: 'sec9', label: '商业航天' },
    { id: 'sec10', label: '猪周期' }
  ] },
  { title: '赛道跟踪', links: [{ id: 'sec11', label: '热点赛道追踪' }] },
  { title: '跨市场传导', links: [{ id: 'sec12', label: '二阶思维传导链' }] },
  { title: '明日关注', links: [{ id: 'sec13', label: '4月23日关键关注点' }] },
  { title: '风险提示', links: [{ id: 'sec14', label: '避雷针与逻辑证伪' }] }
];

function renderDecisionNav_0422() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0422.map((group, gi) => `
    <div>
      <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('decision','${link.id}')" data-section="${link.id}"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-all flex items-start gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mt-1.5 flex-shrink-0"></div>
            <span class="leading-tight">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
