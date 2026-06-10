// ==========================================
// 集思录投资洞察导航 - 2026年6月10日
// ==========================================

const JISILU_NAV_CONFIG_0610 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '老登股vs小登股' },
      { id: 'j_sec2', label: '可转债高位运行' },
      { id: 'j_sec3', label: '龙大转债无法兑付' },
      { id: 'j_sec4', label: '双创见顶论' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec5', label: '可转债双低轮动' },
      { id: 'j_sec6', label: '期指贴水策略' }
    ]
  },
  {
    title: '市场观察',
    links: [
      { id: 'j_sec7', label: '自由现金流策略崩塌' },
      { id: 'j_sec8', label: '国家队撤退担忧' },
      { id: 'j_sec9', label: '科技抱团何时瓦解' }
    ]
  },
  {
    title: '其他热点',
    links: [
      { id: 'j_sec10', label: '贴水策略四年回望' },
      { id: 'j_sec11', label: '中年全职投资孤独' },
      { id: 'j_sec12', label: '美股估值讨论' }
    ]
  }
];

function renderJisiluNav_0610() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0610.map(section => `
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
