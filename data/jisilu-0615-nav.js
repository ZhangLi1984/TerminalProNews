// ==========================================
// 集思录投资洞察导航 - 2026年6月15日
// ==========================================

const JISILU_NAV_CONFIG_0615 = [
  {
    title: '热门话题 TOP 10',
    links: [
      { id: 'j_sec1', label: '科技股吸血牛投降' },
      { id: 'j_sec2', label: '双创见顶之争' },
      { id: 'j_sec3', label: '闻泰转债下修博弈' },
      { id: 'j_sec4', label: '龙大转债无法兑付' },
      { id: 'j_sec5', label: '老登股信仰危机' }
    ]
  },
  {
    title: '更多热点',
    links: [
      { id: 'j_sec6', label: '医药白酒互联网抄底' },
      { id: 'j_sec7', label: '中金合并暗坑' },
      { id: 'j_sec8', label: '*ST三房退市博弈' },
      { id: 'j_sec9', label: '国家队跑路' },
      { id: 'j_sec10', label: '转债量化轮动' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec11', label: '转债量化轮动' },
      { id: 'j_sec12', label: '配债一手党' },
      { id: 'j_sec13', label: '期权卖方策略' },
      { id: 'j_sec14', label: '刚兑债策略' },
      { id: 'j_sec15', label: '期货跨品种套利' }
    ]
  },
  {
    title: '热议标的',
    links: [
      { id: 'j_sec16', label: '闻泰转债' },
      { id: 'j_sec17', label: '*ST三房转债' },
      { id: 'j_sec18', label: '龙大转债' },
      { id: 'j_sec19', label: '中际旭创' },
      { id: 'j_sec20', label: '牧原/希望转2' },
      { id: 'j_sec21', label: '白酒板块' }
    ]
  },
  {
    title: '市场情绪与风险',
    links: [
      { id: 'j_sec22', label: '情绪评分4.5/10' },
      { id: 'j_sec23', label: '可转债违约风险' },
      { id: 'j_sec24', label: '科技抱团瓦解' },
      { id: 'j_sec25', label: 'ST退市潮' },
      { id: 'j_sec26', label: '杠杆资金风险' }
    ]
  }
];

function renderJisiluNav_0615() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0615.map(section => `
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
