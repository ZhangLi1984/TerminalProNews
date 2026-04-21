// ==========================================
// 集思录导航模块 - 2026年4月21日
// ==========================================

const JISILU_NAV_CONFIG_0421 = [
  { title: '热门话题', links: [
    { id: 'j_sec1', label: '闻泰转债暴跌博弈' },
    { id: 'j_sec2', label: '创业板 vs 恒生科技' },
    { id: 'j_sec3', label: '美股/标普500长期投资' },
    { id: 'j_sec4', label: '可转债多因子轮动' },
    { id: 'j_sec5', label: '高股息/价值投资' },
    { id: 'j_sec6', label: '券商合并套利' },
    { id: 'j_sec7', label: '期指吃贴水+期权' },
    { id: 'j_sec8', label: '上市公司薅羊毛' },
    { id: 'j_sec9', label: 'A7到A8进阶之路' },
    { id: 'j_sec10', label: '自由现金流指数' }
  ] },
  { title: '投资方法论', links: [
    { id: 'j_sec11', label: '可转债多因子轮动策略' },
    { id: 'j_sec12', label: '期指吃贴水+期权卖方' },
    { id: 'j_sec13', label: '高股息+低估值选股' },
    { id: 'j_sec14', label: '券商合并套利' },
    { id: 'j_sec15', label: '上市公司赠礼埋伏' }
  ] },
  { title: '热议标的', links: [{ id: 'j_sec16', label: '标的清单（14只）' }] },
  { title: '市场情绪', links: [{ id: 'j_sec17', label: '情绪观察与热点轮动' }] },
  { title: '风险提示', links: [{ id: 'j_sec18', label: '五大具体风险' }] },
  { title: '下周关注', links: [{ id: 'j_sec19', label: '5大关注点' }] }
];

function renderJisiluNav_0421() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0421.map(group => `
    <div>
      <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('jisilu','${link.id}')" data-section="${link.id}"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-all flex items-start gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mt-1.5 flex-shrink-0"></div>
            <span class="leading-tight">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
