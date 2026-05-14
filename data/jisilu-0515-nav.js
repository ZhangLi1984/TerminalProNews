// ==========================================
// 集思录投资洞察导航模块 - 2026-05-15
// ==========================================

const JISILU_NAV_CONFIG_0515 = [
  { title: '热门话题', links: [
    { id: 'j_sec1', label: 'TOP10热门话题' },
    { id: 'j_sec2', label: '大盘顶部判断' },
    { id: 'j_sec3', label: '转债高位震荡' },
    { id: 'j_sec4', label: '科技vs老登分化' },
    { id: 'j_sec5', label: '闻泰转债危机' }
  ]},
  { title: '投资方法论', links: [
    { id: 'j_sec6', label: '七大投资策略精粹' },
    { id: 'j_sec7', label: '小市值转债轮动' },
    { id: 'j_sec8', label: '临期下修博弈' }
  ]},
  { title: '热议标的', links: [
    { id: 'j_sec9', label: '热议标的清单（20只）' }
  ]},
  { title: '市场情绪', links: [
    { id: 'j_sec10', label: '情绪评分与信号' }
  ]},
  { title: '风险提示', links: [
    { id: 'j_sec11', label: '七大风险提示' }
  ]},
  { title: '下周关注', links: [
    { id: 'j_sec12', label: '转债/新股时间线' }
  ]}
];

function renderJisiluNav_0515() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;
  container.innerHTML = JISILU_NAV_CONFIG_0515.map(group => `
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
