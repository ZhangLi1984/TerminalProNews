// ==========================================
// 集思录投资洞察 - 导航配置 - 2026-05-22
// ==========================================

const JISILU_NAV_CONFIG_0522 = [
  { title: '热门话题 TOP 10', links: [
    { id: 'j_sec1', label: '闻泰科技/闻泰转债危机与下修博弈' },
    { id: 'j_sec2', label: '暴雷转债博弈（四傻）' },
    { id: 'j_sec3', label: 'A股科技抱团行情与瓦解预警' },
    { id: 'j_sec4', label: '跨境ETF盘前套利与通道之争' },
    { id: 'j_sec5', label: '多策略投资实录' },
    { id: 'j_sec6', label: '价值投资持仓与老登股困境' },
    { id: 'j_sec7', label: '商铺投资可行性分析' },
    { id: 'j_sec8', label: '量化基金火爆发行' },
    { id: 'j_sec9', label: 'A8到A9资产跨越讨论' },
    { id: 'j_sec10', label: '中证1000 ETF跑赢指数之谜' },
  ]},
  { title: '投资方法论', links: [
    { id: 'j_sec11', label: '可转债下修博弈策略' },
    { id: 'j_sec12', label: '股指期货贴水策略' },
    { id: 'j_sec13', label: '可转债配债股套利' },
    { id: 'j_sec14', label: '多策略分散配置（大饼）' },
    { id: 'j_sec15', label: '价值投资定投法' },
    { id: 'j_sec16', label: '暴雷债分散博弈' },
    { id: 'j_sec17', label: '跨境ETF盘前套利' },
  ]},
  { title: '热议标的', links: [
    { id: 'j_sec18', label: '闻泰/龙大/三房巷转债' },
    { id: 'j_sec19', label: '腾讯/中证1000/纳指ETF' },
    { id: 'j_sec20', label: '新集能源/藏格矿业' },
  ]},
  { title: '情绪与风险', links: [
    { id: 'j_sec21', label: '市场情绪观察' },
    { id: 'j_sec22', label: '风险提示' },
  ]},
];

function renderJisiluNav_0522() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  container.innerHTML = JISILU_NAV_CONFIG_0522.map((cat) => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">${cat.title}</h4>
      <div class="space-y-1">
        ${cat.links.map(link => `
          <button onclick="scrollToSection('${link.id}', 'jisilu'); updateActiveNav('${link.id}')"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-amber-500 transition-colors flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
