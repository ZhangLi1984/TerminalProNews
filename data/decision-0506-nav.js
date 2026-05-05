// Decision Nav Module for 2026-05-06
const DECISION_NAV_CONFIG_0506 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '全局叙事与核心主线' },
      { id: 'sec2', label: '操作方向与仓位建议' }
    ]
  },
  {
    title: '重大事件推演',
    links: [
      { id: 'sec3', label: '美伊霍尔木兹海峡博弈' },
      { id: 'sec4', label: '存储芯片超级周期' },
      { id: 'sec5', label: 'A股一季报与锂电业绩' }
    ]
  },
  {
    title: '行业催化与资金博弈',
    links: [
      { id: 'sec6', label: '科技/AI/半导体' },
      { id: 'sec7', label: '新能源/锂电/储能' },
      { id: 'sec8', label: '地缘/宏观/政策' },
      { id: 'sec9', label: '商业航天' },
      { id: 'sec10', label: '其他重要事件' }
    ]
  },
  {
    title: '跨市场传导分析',
    links: [
      { id: 'sec11', label: '传导链条一：欧洲制造替代' },
      { id: 'sec12', label: '传导链条二：半导体全产业链' },
      { id: 'sec13', label: '传导链条三：实物资产重估' },
      { id: 'sec14', label: '传导链条四：AIDC电力需求' }
    ]
  },
  {
    title: '明日策略与风险',
    links: [
      { id: 'sec15', label: '开盘预判与策略建议' },
      { id: 'sec16', label: '逻辑证伪与传闻预警' },
      { id: 'sec17', label: '个股避雷' }
    ]
  }
];

function renderDecisionNav_0506() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0506.map(group => `
    <div>
      <div class="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</div>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center" data-section="${link.id}" onclick="scrollToSection('decision','${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
