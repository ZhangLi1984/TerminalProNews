// ==========================================
// 集思录导航模块 - 2026年4月24日
// ==========================================

const JISILU_NAV_CONFIG_0424 = [
  { title: '热门话题', links: [
    { id: 'j_sec1', label: '闻泰转债危机与博弈' },
    { id: 'j_sec2', label: '四大垃圾债对比' },
    { id: 'j_sec3', label: '温氏/牧原猪周期转债' },
    { id: 'j_sec4', label: '龙大转债下修博弈' },
    { id: 'j_sec5', label: '银行股一季报分析' },
    { id: 'j_sec6', label: '标普500长期投资' },
    { id: 'j_sec7', label: '2026投资记录百态' },
    { id: 'j_sec8', label: '地缘冲突与市场' },
    { id: 'j_sec9', label: '可转债策略精粹' },
    { id: 'j_sec10', label: '量化交易弱点探讨' }
  ] },
  { title: '投资方法论', links: [
    { id: 'j_sec11', label: '可转债大饼策略' },
    { id: 'j_sec12', label: '红利-成长候鸟策略' },
    { id: 'j_sec13', label: '红利低波定投策略' },
    { id: 'j_sec14', label: '垃圾债博弈策略' },
    { id: 'j_sec15', label: '猪周期转债策略' }
  ] },
  { title: '热议标的', links: [{ id: 'j_sec16', label: '10个标的详细分析' }] },
  { title: '市场情绪', links: [{ id: 'j_sec17', label: '情绪观察与评分' }] },
  { title: '风险提示', links: [{ id: 'j_sec18', label: '5项具体风险' }] },
  { title: '投资启示', links: [{ id: 'j_sec19', label: '5条核心启示' }] }
];

function renderJisiluNav_0424() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0424.map(group => `
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
