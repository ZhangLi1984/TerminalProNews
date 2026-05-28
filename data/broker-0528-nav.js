// ==========================================
// 券商晨报买方汇总 - 导航配置 2026-05-28
// ==========================================

const BROKER_NAV_CONFIG_0528 = [
  {
    title: '市场概览',
    links: [
      { id: 'b_sec1', label: '市场情绪总览' },
      { id: 'b_sec2', label: '核心共识观点' },
      { id: 'b_sec3', label: '行业推荐汇总' },
    ]
  },
  {
    title: '行业推荐',
    links: [
      { id: 'b_sec4', label: 'AI算力/光模块/半导体（10次）' },
      { id: 'b_sec5', label: '存储芯片（6次）' },
      { id: 'b_sec6', label: '多模态AI/传媒（5次）' },
      { id: 'b_sec7', label: '公用事业/生猪/大宗商品' },
    ]
  },
  {
    title: '金股与风险',
    links: [
      { id: 'b_sec8', label: '金股组合汇总' },
      { id: 'b_sec9', label: '各券商观点摘要' },
      { id: 'b_sec10', label: '风险提示与分歧点' },
    ]
  },
];

function renderBrokerNav_0528() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0528.map(cat => `
    <div class="mb-4">
      <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${cat.title}</div>
      <div class="space-y-0.5">
        ${cat.links.map(link => `
          <button class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all flex items-center group"
                  data-section="${link.id}" onclick="updateActiveNav('${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors"></div>
            <span class="text-slate-700 group-hover:text-slate-900">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
