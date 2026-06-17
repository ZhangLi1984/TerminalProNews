// ==========================================
// 集思录投资洞察导航 - 2026年6月17日
// ==========================================

const JISILU_NAV_CONFIG_0617 = [
  {
    title: '热门话题',
    links: [
      { id: 'j_sec1', label: '老登股vs科技撕裂' },
      { id: 'j_sec2', label: '闻泰转债80亿巨雷' },
      { id: 'j_sec3', label: '龙大转债无法兑付' }
    ]
  },
  {
    title: '更多热点',
    links: [
      { id: 'j_sec4', label: '传统双低转债低迷' },
      { id: 'j_sec5', label: '双创见顶周期论' },
      { id: 'j_sec6', label: '股市赚钱不消费' },
      { id: 'j_sec7', label: '消费政策辩论' },
      { id: 'j_sec8', label: '回到924前煎熬' }
    ]
  },
  {
    title: '投资方法论',
    links: [
      { id: 'j_sec9', label: '可转债双低轮动' },
      { id: 'j_sec10', label: '价值投资满仓' },
      { id: 'j_sec11', label: '期货期权卖方' },
      { id: 'j_sec12', label: 'ETF动量杠铃' },
      { id: 'j_sec13', label: '网格商品期货' },
      { id: 'j_sec14', label: '周期ST转债' }
    ]
  },
  {
    title: '热议标的',
    links: [
      { id: 'j_sec15', label: '闻泰转债' },
      { id: 'j_sec16', label: '龙大转债' },
      { id: 'j_sec17', label: '三房巷ST' },
      { id: 'j_sec18', label: '中际旭创/AI' },
      { id: 'j_sec19', label: '医药白酒互联网' }
    ]
  },
  {
    title: '市场情绪与风险',
    links: [
      { id: 'j_sec20', label: '情绪评分4.0/10' },
      { id: 'j_sec21', label: '转债信用风险' },
      { id: 'j_sec22', label: '老登股流动性' },
      { id: 'j_sec23', label: '双创见顶窗口' },
      { id: 'j_sec24', label: '商品期货波动' }
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
