// ==========================================
// 集思录投资洞察 - 导航配置 - 2026-05-21
// ==========================================

const JISILU_NAV_CONFIG_0521 = [
  { title: '热门话题 TOP 10', links: [
    { id: 'j_sec1', label: '老登股价值回归 vs 价值陷阱' },
    { id: 'j_sec2', label: '闻泰转债危机与博弈' },
    { id: 'j_sec3', label: '三房巷/三房转债风波' },
    { id: 'j_sec4', label: '五粮液财报调整与ST风险' },
    { id: 'j_sec5', label: '低风险投资者至暗时刻' },
    { id: 'j_sec6', label: '实盘记录与投资总结' },
    { id: 'j_sec7', label: '吃股息策略信仰动摇' },
    { id: 'j_sec8', label: '小市值可转债轮动' },
    { id: 'j_sec9', label: '长鑫存储上市预期' },
    { id: 'j_sec10', label: '割裂行情下的投资困惑' },
  ]},
  { title: '投资方法论', links: [
    { id: 'j_sec11', label: '可转债低价分散+下修博弈' },
    { id: 'j_sec12', label: '配债股投资策略' },
    { id: 'j_sec13', label: '资源垄断型央企红利' },
    { id: 'j_sec14', label: '期权+转债组合策略' },
    { id: 'j_sec15', label: '3%成本杠杆投资策略' },
  ]},
  { title: '热议标的', links: [
    { id: 'j_sec16', label: '闻泰/三房/蓝帆转债' },
    { id: 'j_sec17', label: '五粮液/龙大/华域汽车' },
    { id: 'j_sec18', label: '声迅转债' },
  ]},
  { title: '情绪与风险', links: [
    { id: 'j_sec19', label: '市场情绪观察' },
    { id: 'j_sec20', label: '风险提示' },
    { id: 'j_sec21', label: '关键日期提醒' },
  ]},
];

function renderJisiluNav_0521() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  container.innerHTML = JISILU_NAV_CONFIG_0521.map((cat) => `
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
