// ==========================================
// 集思录投资洞察导航 - 2026年6月12日
// ==========================================

const JISILU_NAV_CONFIG_0612 = [
  {
    title: '热门话题 TOP 10',
    links: [
      { id: 'j_sec1', label: '科技吸血全市场' },
      { id: 'j_sec2', label: '双创见顶辩论' },
      { id: 'j_sec3', label: '老登股价值回归' },
      { id: 'j_sec4', label: '龙大转债违约' },
      { id: 'j_sec5', label: '国家队跑路' }
    ]
  },
  {
    title: '更多热点',
    links: [
      { id: 'j_sec6', label: '闻泰转债博弈' },
      { id: 'j_sec7', label: '中年职场困境' },
      { id: 'j_sec8', label: '可转债高位分化' },
      { id: 'j_sec9', label: '低风险渠道消失' },
      { id: 'j_sec10', label: '第一桶金与认命' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec11', label: '可转债大饼轮动' },
      { id: 'j_sec12', label: '候鸟式资产配置' },
      { id: 'j_sec13', label: '配债一手策略' },
      { id: 'j_sec14', label: '跨境ETF套利' },
      { id: 'j_sec15', label: 'DDM估值轮动' },
      { id: 'j_sec16', label: '股东羊毛套利' }
    ]
  },
  {
    title: '热议标的与风险',
    links: [
      { id: 'j_sec17', label: '龙大转债' },
      { id: 'j_sec18', label: '闻泰转债' },
      { id: 'j_sec19', label: '五粮液/白酒' },
      { id: 'j_sec20', label: '中际旭创' },
      { id: 'j_sec21', label: '港股互联网ETF' },
      { id: 'j_sec22', label: '券商合并三剑客' }
    ]
  },
  {
    title: '市场情绪与风险',
    links: [
      { id: 'j_sec23', label: '情绪评分3.5/10' },
      { id: 'j_sec24', label: '科技抱团瓦解风险' },
      { id: 'j_sec25', label: '可转债高位风险' },
      { id: 'j_sec26', label: '美国流动性风险' }
    ]
  }
];

function renderJisiluNav_0612() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0612.map(section => `
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
