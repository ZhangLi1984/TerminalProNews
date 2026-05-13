// ==========================================
// 集思录投资洞察导航模块 - 2026-05-14
// ==========================================

const JISILU_NAV_CONFIG_0514 = [
  { title: '热门话题', links: [
    { id: 'j_sec1', label: 'TOP10热门话题' },
    { id: 'j_sec2', label: '闻泰转债危机' },
    { id: 'j_sec3', label: '创业板创新高' },
    { id: 'j_sec4', label: '老登股踏空' },
    { id: 'j_sec5', label: '转债市场高温' }
  ]},
  { title: '投资方法论', links: [
    { id: 'j_sec6', label: '七大投资策略精粹' },
    { id: 'j_sec7', label: '暴雷债下修博弈' },
    { id: 'j_sec8', label: '卖沽期权策略' }
  ]},
  { title: '热议标的', links: [
    { id: 'j_sec9', label: '热议标的清单（8只）' }
  ]},
  { title: '市场情绪', links: [
    { id: 'j_sec10', label: '情绪评分与资金流向' }
  ]},
  { title: '风险提示', links: [
    { id: 'j_sec11', label: '六大风险提示' }
  ]}
];

function renderJisiluNav_0514() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  container.innerHTML = JISILU_NAV_CONFIG_0514.map(group => `
    <div class="space-y-1.5">
      <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2">${group.title}</p>
      ${group.links.map(link => `
        <button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
          onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'});">
          <div class="w-1 h-1 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
          <span class="truncate">${link.label}</span>
        </button>
      `).join('')}
    </div>
  `).join('');
}
