// 投资决策内参导航 - 2026-05-21
const DECISION_NAV_CONFIG_0521 = [
  { title: '核心决策', links: [
    { id: 'd_sec1', label: '战略定调：K型分化与杠铃配置' },
    { id: 'd_sec2', label: '仓位配置框架' },
  ]},
  { title: '高胜率赛道', links: [
    { id: 'd_sec3', label: 'AI算力基础设施 (S+)' },
    { id: 'd_sec4', label: '碳化硅SiC (S)' },
    { id: 'd_sec5', label: '半导体设备/材料 (S)' },
    { id: 'd_sec6', label: '锂电/储能产业链 (A+)' },
    { id: 'd_sec7', label: '工程机械 (A+)' },
    { id: 'd_sec8', label: '煤炭/煤化工 (A)' },
  ]},
  { title: '暗线与预期差', links: [
    { id: 'd_sec9', label: '美伊冲突→煤化工重估' },
    { id: 'd_sec10', label: 'AI→电网投资→SiC需求' },
    { id: 'd_sec11', label: 'CXO利润+61%但持仓最低' },
    { id: 'd_sec12', label: '房地产困境反转' },
    { id: 'd_sec13', label: '生猪养殖产能去化' },
  ]},
  { title: '数据监测', links: [
    { id: 'd_sec14', label: '大宗商品量价监测' },
    { id: 'd_sec15', label: '产业链周期估值监测' },
    { id: 'd_sec16', label: '操作建议与风险提示' },
  ]},
];

function renderDecisionNav_0521() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0521.map((cat, ci) => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">${cat.title}</h4>
      <div class="space-y-1">
        ${cat.links.map(link => `
          <button onclick="scrollToSection('${link.id}', 'decision'); updateActiveNav('${link.id}')"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
