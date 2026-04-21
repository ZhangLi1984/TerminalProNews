// ==========================================
// 投资决策内参导航 - 2026-04-21
// ==========================================

const DECISION_NAV_CONFIG_0421 = [
  { title: '核心摘要', links: [{ id: 'sec1', label: '全局叙事与操作方向' }] },
  { title: '重大事件', links: [
    { id: 'sec2', label: '美伊停火倒计时' },
    { id: 'sec3', label: '液冷/CPO业绩杀' },
    { id: 'sec4', label: '锂矿超级周期确认' }
  ] },
  { title: '行业催化', links: [
    { id: 'sec5', label: '科技/AI/半导体' },
    { id: 'sec6', label: '新能源/电池' },
    { id: 'sec7', label: '商业航天' },
    { id: 'sec8', label: '人形机器人' },
    { id: 'sec9', label: '券商整合' },
    { id: 'sec10', label: '房地产' }
  ] },
  { title: '赛道跟踪', links: [{ id: 'sec11', label: '热门赛道深度跟踪' }] },
  { title: '跨市场传导', links: [{ id: 'sec12', label: '认知闭环分析' }] },
  { title: '明日关注', links: [{ id: 'sec13', label: '4月22日关键关注点' }] },
  { title: '风险提示', links: [{ id: 'sec14', label: '避雷针与交易纪律' }] }
];

function renderDecisionNav_0421() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0421.map((group, gi) => `
    <div class="nav-group">
      <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all flex items-center group"
            data-section="${link.id}"
            onclick="scrollToSection('decision', '${link.id}')"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 group-hover:bg-red-500 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
