// ==========================================
// 投资决策内参导航配置 - 2026 年 3 月 18 日
// ==========================================

const DECISION_NAV_CONFIG_0318 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线' },
      { id: 'sec2', label: '关键推演' },
      { id: 'sec3', label: '操作方向' }
    ]
  },
  {
    title: '重大事件',
    links: [
      { id: 'sec4', label: '中东冲突升级' },
      { id: 'sec5', label: '英伟达 GTC 大会' },
      { id: 'sec6', label: 'OpenClaw 爆发' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec7', label: '科技/AI/半导体' },
      { id: 'sec8', label: '新能源/绿电' },
      { id: 'sec9', label: '政策宏观' },
      { id: 'sec10', label: '汽车/机器人' }
    ]
  },
  {
    title: '热点赛道',
    links: [
      { id: 'sec11', label: 'AI/算力' },
      { id: 'sec12', label: '机器人' },
      { id: 'sec13', label: '新能源' },
      { id: 'sec14', label: '半导体' }
    ]
  },
  {
    title: '深度分析',
    links: [
      { id: 'sec15', label: '跨赛道传导分析' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec16', label: '宏观数据' },
      { id: 'sec17', label: '产业事件' },
      { id: 'sec18', label: '公司公告' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'sec19', label: '逻辑证伪' },
      { id: 'sec20', label: '传闻预警' },
      { id: 'sec21', label: '业绩暴雷' },
      { id: 'sec22', label: '地缘黑天鹅' }
    ]
  }
];

function renderDecisionNav_0318() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  let html = '';
  DECISION_NAV_CONFIG_0318.forEach((section, index) => {
    html += `<div class="space-y-2">
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">${section.title}</h3>
      <div class="space-y-1">`;

    section.links.forEach(link => {
      html += `<button onclick="scrollToSection('decision', '${link.id}'); return false;"
        class="nav-btn w-full flex items-center px-2.5 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-all duration-200"
        data-section="${link.id}">
        <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 transition-colors"></div>
        ${link.label}
      </button>`;
    });

    html += `</div></div>`;
  });

  container.innerHTML = html;
}
