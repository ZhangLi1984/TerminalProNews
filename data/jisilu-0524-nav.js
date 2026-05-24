// ==========================================
// 集思录投资洞察 - 导航配置 - 2026-05-24
// ==========================================

const JISILU_NAV_CONFIG_0524 = [
  { title: '热门话题 TOP 10', links: [
    { id: 'j_sec1', label: '闻泰科技东莞诉讼与安世资产切割' },
    { id: 'j_sec2', label: '老登股暴跌——白酒医药信仰崩塌' },
    { id: 'j_sec3', label: '科技抱团与AI泡沫——结构性牛市' },
    { id: 'j_sec4', label: '传统双低可转债暴跌（上银/兴业）' },
    { id: 'j_sec5', label: '龙大转债不下修博弈与违约风险' },
    { id: 'j_sec6', label: 'xiaofeng71十年价值投资实验' },
    { id: 'j_sec7', label: '牛市体感——46%账户亏钱' },
    { id: 'j_sec8', label: '易经/孙子兵法指导炒股' },
    { id: 'j_sec9', label: '国家队减持ETF近9000亿' },
    { id: 'j_sec10', label: '黄金/大宗商品与滞胀交易' },
  ]},
  { title: '投资方法论', links: [
    { id: 'j_sec11', label: '大盘股持有增厚收益法' },
    { id: 'j_sec12', label: '可转债四低打地鼠策略' },
    { id: 'j_sec13', label: '强赎回可转债博弈策略' },
    { id: 'j_sec14', label: '老登股定投+分红再投资' },
    { id: 'j_sec15', label: '黄金期权卖沽接货策略' },
    { id: 'j_sec16', label: 'ST股轮动策略' },
    { id: 'j_sec17', label: '大类资产配置轮动（候鸟策略）' },
  ]},
  { title: '热议标的', links: [
    { id: 'j_sec18', label: '闻泰转债/上银转债/龙大转债' },
    { id: 'j_sec19', label: '茅台/腾讯/小米/泡泡玛特' },
  ]},
  { title: '情绪与风险', links: [
    { id: 'j_sec20', label: '市场情绪观察（3.5/10）' },
    { id: 'j_sec21', label: '四大争议话题' },
    { id: 'j_sec22', label: '五大风险提示' },
  ]},
];

function renderJisiluNav_0524() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  container.innerHTML = JISILU_NAV_CONFIG_0524.map((cat) => `
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
