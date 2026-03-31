// ==========================================
// 投资决策内参导航 - 2026年3月31日
// ==========================================

const DECISION_NAV_CONFIG_0331 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线与关键推演' },
      { id: 'sec2', label: '操作方向建议' }
    ]
  },
  {
    title: '重大事件推演',
    links: [
      { id: 'sec3', label: '中东冲突升级' },
      { id: 'sec4', label: '铝产业链供应冲击' },
      { id: 'sec5', label: '茅台首次提价' }
    ]
  },
  {
    title: '重要新闻分类',
    links: [
      { id: 'sec6', label: '科技/半导体' },
      { id: 'sec7', label: '商业航天' },
      { id: 'sec8', label: '创新药' },
      { id: 'sec9', label: '新能源' }
    ]
  },
  {
    title: '热点赛道追踪',
    links: [
      { id: 'sec10', label: '赛道景气度' }
    ]
  },
  {
    title: '跨赛道传导分析',
    links: [
      { id: 'sec11', label: '地缘→能源→通胀链' },
      { id: 'sec12', label: '铝供应→制造成本链' },
      { id: 'sec13', label: '存储价格→AI算力链' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec14', label: '宏观数据与事件' },
      { id: 'sec15', label: '公司事件与政策' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec16', label: '逻辑证伪' },
      { id: 'sec17', label: '传闻预警' },
      { id: 'sec18', label: '地缘尾部风险' }
    ]
  },
  {
    title: '策略总结',
    links: [
      { id: 'sec19', label: '核心判断与配置' }
    ]
  }
];

function renderDecisionNav_0331() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';

  DECISION_NAV_CONFIG_0331.forEach((group, groupIndex) => {
    html += `
      <div class="nav-group">
        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">${group.title}</h3>
        <div class="space-y-1">
          ${group.links.map((link, linkIndex) => `
            <button
              class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${linkIndex === 0 && groupIndex === 0 ? 'bg-slate-900 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'}"
              data-section="${link.id}"
              onclick="scrollToSection('decision', '${link.id}')"
            >
              <span>${link.label}</span>
              <div class="w-1.5 h-1.5 rounded-full ${linkIndex === 0 && groupIndex === 0 ? 'bg-red-500' : 'bg-transparent'} group-hover:bg-red-400 transition-colors"></div>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}
