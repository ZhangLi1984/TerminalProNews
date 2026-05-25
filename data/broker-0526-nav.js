// ==========================================
// 券商晨报买方汇总 - 导航配置 2026-05-26
// ==========================================
const BROKER_NAV_CONFIG_0526 = [
  {
    title: '核心观点',
    links: [
      { id: 'b_sec1', label: '核心观点摘要' },
      { id: 'b_sec2', label: '大盘共识判断' }
    ]
  },
  {
    title: '行业推荐',
    links: [
      { id: 'b_sec3', label: '行业共识推荐 TOP9' },
      { id: 'b_sec4', label: '其他关注方向' }
    ]
  },
  {
    title: '金股共识',
    links: [
      { id: 'b_sec5', label: '金股共识池 TOP10' },
      { id: 'b_sec6', label: '东兴五月金股池' }
    ]
  },
  {
    title: '券商精华',
    links: [
      { id: 'b_sec7', label: '10家券商核心观点' }
    ]
  },
  {
    title: '热点板块',
    links: [
      { id: 'b_sec8', label: 'AI算力/半导体' },
      { id: 'b_sec9', label: '家电/白色家电' },
      { id: 'b_sec10', label: '光通信/液冷' },
      { id: 'b_sec11', label: '生猪养殖' },
      { id: 'b_sec12', label: '人形机器人' },
      { id: 'b_sec13', label: '医药/创新药' },
      { id: 'b_sec14', label: '非银金融/券商' },
      { id: 'b_sec15', label: '新能源/储能' }
    ]
  },
  {
    title: '买方策略',
    links: [
      { id: 'b_sec16', label: '仓位与配置建议' },
      { id: 'b_sec17', label: '操作节奏与分歧点' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec18', label: '五大共同风险' }
    ]
  }
];

function renderBrokerNav_0526() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0526.map((group) => `
    <div>
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
            class="nav-btn w-full text-left px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors flex items-center"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
