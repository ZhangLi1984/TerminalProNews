const DECISION_NAV_CONFIG_0415 = [
  { title: '核心摘要', links: [{ id: 'sec1', label: '全局叙事速读' }] },
  { title: '重大事件', links: [
    { id: 'sec2', label: '美伊冲突缓和' },
    { id: 'sec3', label: '关税退款启动' },
    { id: 'sec4', label: '创新药定价改革' }
  ]},
  { title: '行业催化', links: [
    { id: 'sec5', label: 'AI/半导体/算力链' },
    { id: 'sec6', label: '商业航天' },
    { id: 'sec7', label: '新能源/锂电' },
    { id: 'sec8', label: '机器人/具身智能' },
    { id: 'sec9', label: '房地产' },
    { id: 'sec10', label: '医药生物' }
  ]},
  { title: '热点追踪', links: [
    { id: 'sec11', label: '赛道景气度追踪' },
    { id: 'sec12', label: '跨赛道传导分析' }
  ]},
  { title: '明日关注', links: [{ id: 'sec13', label: '关键事件日历' }] },
  { title: '风险提示', links: [
    { id: 'sec14', label: '逻辑证伪' },
    { id: 'sec15', label: '传闻预警' },
    { id: 'sec16', label: '宏观风险' }
  ]}
];

function renderDecisionNav_0415() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0415.map(cat => `
    <div>
      <h4 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">${cat.title}</h4>
      <div class="space-y-1">
        ${cat.links.map(l => `
          <button onclick="scrollToSection('decision', '${l.id}')" data-section="${l.id}"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition-all flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent transition-colors flex-shrink-0"></div>
            <span class="truncate">${l.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
