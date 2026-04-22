// ==========================================
// 集思录导航模块 - 2026年4月23日
// ==========================================

const JISILU_NAV_CONFIG_0423 = [
  { title: '热门话题', links: [
    { id: 'j_sec1', label: '闻泰转债危机与博弈' },
    { id: 'j_sec2', label: '标普500 vs A股' },
    { id: 'j_sec3', label: '可转债问题债风暴' },
    { id: 'j_sec4', label: '期权投资策略' },
    { id: 'j_sec5', label: '高股息白马困境' },
    { id: 'j_sec6', label: '港股走势与中东资金' },
    { id: 'j_sec7', label: '银行股一季报' },
    { id: 'j_sec8', label: '基金轮动实战' },
    { id: 'j_sec9', label: '白酒底部博弈' },
    { id: 'j_sec10', label: '股市哲学思辨' }
  ] },
  { title: '投资方法论', links: [
    { id: 'j_sec11', label: 'ETF+认沽期权保险' },
    { id: 'j_sec12', label: '卖出看跌期权策略' },
    { id: 'j_sec13', label: '可转债多因子轮动' },
    { id: 'j_sec14', label: '套利股投资策略' },
    { id: 'j_sec15', label: '基金轮动趋势策略' },
    { id: 'j_sec16', label: '白酒轮动+网格' }
  ] },
  { title: '热议标的', links: [{ id: 'j_sec17', label: '14个标的详细分析' }] },
  { title: '市场情绪', links: [
    { id: 'j_sec31', label: '情绪观察与评分' },
    { id: 'j_sec35', label: '关注焦点转移' }
  ] },
  { title: '风险提示', links: [{ id: 'j_sec36', label: '6项具体风险' }] },
  { title: '下周关注', links: [{ id: 'j_sec42', label: '7项关注事件' }] }
];

function renderJisiluNav_0423() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0423.map(group => `
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
