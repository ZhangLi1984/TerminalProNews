// ==========================================
// 集思录投资洞察导航 - 2026年6月14日
// ==========================================

const JISILU_NAV_CONFIG_0614 = [
  {
    title: '热门话题 TOP 10',
    links: [
      { id: 'j_sec1', label: '券商合并维权' },
      { id: 'j_sec2', label: '老登股信仰辩论' },
      { id: 'j_sec3', label: '双创见顶论' },
      { id: 'j_sec4', label: '半导体吸血牛' },
      { id: 'j_sec5', label: '汇车退债博弈' }
    ]
  },
  {
    title: '更多热点',
    links: [
      { id: 'j_sec6', label: '*ST三房实地调研' },
      { id: 'j_sec7', label: '龙大转债违约' },
      { id: 'j_sec8', label: '五粮液ST风波' },
      { id: 'j_sec9', label: '孔曼子22.8%年化' },
      { id: 'j_sec10', label: '投资心态崩溃' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec11', label: '转债大饼策略' },
      { id: 'j_sec12', label: 'ST大饼+北证50' },
      { id: 'j_sec13', label: '要约收购套利' },
      { id: 'j_sec14', label: '银行股息锚定' },
      { id: 'j_sec15', label: '中性日历对角' }
    ]
  },
  {
    title: '热议标的与风险',
    links: [
      { id: 'j_sec16', label: '信达/中金/东兴' },
      { id: 'j_sec17', label: '五粮液' },
      { id: 'j_sec18', label: '*ST三房' },
      { id: 'j_sec19', label: '汇车退债' },
      { id: 'j_sec20', label: '闻泰转债' },
      { id: 'j_sec21', label: '龙大转债' }
    ]
  },
  {
    title: '市场情绪与风险',
    links: [
      { id: 'j_sec22', label: '情绪评分4/10' },
      { id: 'j_sec23', label: '下修风险' },
      { id: 'j_sec24', label: '转债违约风险' },
      { id: 'j_sec25', label: '双创见顶风险' },
      { id: 'j_sec26', label: 'ST退市风险' }
    ]
  }
];

function renderJisiluNav_0614() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0614.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <ul class="space-y-1">
        ${section.links.map(link => `
          <li>
            <a href="#${link.id}" data-section="${link.id}" class="nav-btn block px-3 py-2 text-sm rounded-lg text-slate-700 hover:bg-slate-100 transition-colors" onclick="updateActiveNav('${link.id}')">
              <div class="flex items-center">
                <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
                <span>${link.label}</span>
              </div>
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
