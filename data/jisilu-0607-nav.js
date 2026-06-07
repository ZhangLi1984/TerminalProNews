// ==========================================
// 集思录投资洞察导航 - 2026年6月7日
// ==========================================
const JISILU_NAV_CONFIG_0607 = [
  { title: '热门话题', links: [
    { id: 'j_sec1', label: '龙大转债违约警报' },
    { id: 'j_sec2', label: '*ST三房生死局' },
    { id: 'j_sec3', label: '老登股大辩论' },
    { id: 'j_sec4', label: '低风险渠道全面堵死' },
    { id: 'j_sec5', label: 'A股抱团瓦解' },
  ]},
  { title: '热门话题(续)', links: [
    { id: 'j_sec6', label: 'E大长赢组合争议' },
    { id: 'j_sec7', label: '2026年艰难情绪' },
    { id: 'j_sec8', label: '贵燃转债强赎博弈' },
    { id: 'j_sec9', label: '医疗ETF信心动摇' },
    { id: 'j_sec10', label: '杠杆交易归零风险' },
  ]},
  { title: '投资方法论', links: [
    { id: 'j_sec11', label: '红利低波轮动策略' },
    { id: 'j_sec12', label: '可转债四低策略' },
    { id: 'j_sec13', label: '北交打新策略' },
  ]},
  { title: '热议标的', links: [
    { id: 'j_sec14', label: '贵燃转债' },
    { id: 'j_sec15', label: '龙大转债' },
    { id: 'j_sec16', label: '*ST三房巷' },
    { id: 'j_sec17', label: '医疗ETF' },
    { id: 'j_sec18', label: '白酒板块' },
  ]},
  { title: '市场情绪', links: [
    { id: 'j_sec19', label: '情绪评分与信号' },
    { id: 'j_sec20', label: '风险提示' },
  ]},
];

function renderJisiluNav_0607() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  container.innerHTML = JISILU_NAV_CONFIG_0607.map(group => `
    <div>
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-widest mb-3 px-1">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}').scrollIntoView({behavior:'smooth',block:'start'});"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center" data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
