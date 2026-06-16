// ==========================================
// 集思录投资洞察导航 - 2026年6月17日
// ==========================================

const JISILU_NAV_CONFIG_0617 = [
  {
    title: '热门话题 TOP 10',
    links: [
      { id: 'j_sec1', label: '闻泰转债下修到底' },
      { id: 'j_sec2', label: '双创见顶周期之争' },
      { id: 'j_sec3', label: '老登股全面溃败' },
      { id: 'j_sec4', label: '以身入局白马一战' },
      { id: 'j_sec5', label: '五粮液维权诉讼' }
    ]
  },
  {
    title: '更多热点',
    links: [
      { id: 'j_sec6', label: '股市赚钱不消费' },
      { id: 'j_sec7', label: '龙大转债无法兑付' },
      { id: 'j_sec8', label: '国家队持续减持' },
      { id: 'j_sec9', label: '医药白酒互联网暴跌' },
      { id: 'j_sec10', label: '科创封基期权套利' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec11', label: '期货吃贴水策略' },
      { id: 'j_sec12', label: '转债多因子轮动' },
      { id: 'j_sec13', label: '配债一手策略' },
      { id: 'j_sec14', label: '候鸟式配置' },
      { id: 'j_sec15', label: '封基折价套利' }
    ]
  },
  {
    title: '热议标的',
    links: [
      { id: 'j_sec16', label: '闻泰转债' },
      { id: 'j_sec17', label: '五粮液' },
      { id: 'j_sec18', label: '三江转债' },
      { id: 'j_sec19', label: '镇洋转债' },
      { id: 'j_sec20', label: '科创50封基' },
      { id: 'j_sec21', label: '龙大转债' }
    ]
  },
  {
    title: '市场情绪与风险',
    links: [
      { id: 'j_sec22', label: '情绪评分4.5/10' },
      { id: 'j_sec23', label: '转债高估值风险' },
      { id: 'j_sec24', label: '科技抱团瓦解' },
      { id: 'j_sec25', label: '闻泰短期博弈' },
      { id: 'j_sec26', label: '信用风险扩散' }
    ]
  }
];

function renderJisiluNav_0617() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0617.map(section => `
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
