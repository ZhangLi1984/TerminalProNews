// ==========================================
// 集思录导航模块 - 2026 年 3 月 27 日
// ==========================================

const JISILU_NAV_CONFIG_0327 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: 'TOP1 生猪周期布局' },
      { id: 'j_sec2', label: 'TOP2 转债溢价转股争议' },
      { id: 'j_sec3', label: 'TOP3 如何在集思录学习' },
      { id: 'j_sec4', label: 'TOP4 恒生科技亏损回本' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec5', label: '生猪周期布局策略' },
      { id: 'j_sec6', label: '可转债双低 + 轮动' },
      { id: 'j_sec7', label: '券商合并套利策略' },
      { id: 'j_sec8', label: '高股息 + 低估值策略' }
    ]
  },
  {
    title: '热议标的',
    links: [
      { id: 'j_sec9', label: '牧原/温氏/生猪期货' },
      { id: 'j_sec10', label: '白酒 (泸老窖/五粮液)' },
      { id: 'j_sec11', label: '中金/信达/东兴证券' },
      { id: 'j_sec12', label: '锂矿 (中矿/天齐)' }
    ]
  },
  {
    title: '市场情绪',
    links: [
      { id: 'j_sec13', label: '情绪评分 5.5/10' },
      { id: 'j_sec14', label: '风险提示' }
    ]
  }
];

function renderJisiluNav_0327() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0327.map(section => `
    <div class="nav-section">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('jisilu', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-amber-400 transition-colors mr-2.5"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
