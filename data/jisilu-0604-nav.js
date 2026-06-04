// ==========================================
// 集思录投资洞察导航 - 2026年6月4日
// ==========================================
const JISILU_NAV_CONFIG_0604 = [
  { title: '热门话题', links: [
    { id: 'j_sec1', label: '科技抱团见顶预判' },
    { id: 'j_sec2', label: '可转债市场异动' },
    { id: 'j_sec3', label: '北交所打新博弈' },
    { id: 'j_sec4', label: '微盘股持续杀跌' },
  ]},
  { title: '投资方法论', links: [
    { id: 'j_sec5', label: '可转债大饼策略' },
    { id: 'j_sec6', label: '红利中小盘轮动' },
  ]},
  { title: '热议标的', links: [
    { id: 'j_sec7', label: '闻泰转债' },
    { id: 'j_sec8', label: '中金三傻合并' },
  ]},
  { title: '市场情绪', links: [
    { id: 'j_sec9', label: '情绪评分与信号' },
    { id: 'j_sec10', label: '风险提示' },
  ]},
];

function renderJisiluNav_0604() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  container.innerHTML = JISILU_NAV_CONFIG_0604.map(group => `
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
