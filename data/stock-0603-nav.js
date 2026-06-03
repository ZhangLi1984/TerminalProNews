const STOCK_NAV_CONFIG_0603 = [
  { title: '核心摘要', links: [{ id: 's_sec1', label: '核心摘要' }] },
  { title: 'S 级标的', links: [{ id: 's_sec2', label: '三孚新科 (688359)' }] },
  { title: 'A 级标的', links: [
    { id: 's_sec3', label: '巨化股份 / 昀冢科技 / 昊志机电' },
    { id: 's_sec4', label: '京东方A / 戈碧迦 / 沧州大化' },
    { id: 's_sec5', label: '金橙子 / 绿联科技 / 中信证券' },
    { id: 's_sec6', label: '重庆啤酒 / 天孚通信 / 仕佳光子' },
    { id: 's_sec7', label: '湖南黄金 / 锐捷网络 / 捷成股份' },
    { id: 's_sec8', label: '源杰科技 / 长城汽车' }
  ]},
  { title: 'B/C 级', links: [{ id: 's_sec9', label: 'B 级 / C 级标的列表' }] },
  { title: '评级汇总', links: [{ id: 's_sec10', label: '完整评级汇总表' }] },
  { title: '覆盖全景', links: [{ id: 's_sec11', label: '研报覆盖统计' }] }
];

function renderStockNav_0603() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0603.map(group => `
    <div>
      <h3 class="text-xs font-black uppercase tracking-wider text-slate-500 mb-2 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}').scrollIntoView({behavior:'smooth',block:'start'});"
            class="nav-btn w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all duration-150"
            data-section="${link.id}">
            <div class="flex items-center">
              <div class="w-1 h-1 bg-transparent rounded-full mr-2 transition-colors"></div>
              <span>${link.label}</span>
            </div>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
