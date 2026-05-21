// ==========================================
// 券商晨报买方汇总导航配置 - 2026-05-22
// ==========================================

const BROKER_NAV_CONFIG_0522 = [
  {
    title: '市场研判',
    links: [
      { id: 'b_sec1', label: '大盘走势共识' },
      { id: 'b_sec2', label: '仓位与风格建议' },
      { id: 'b_sec3', label: '核心宏观驱动' }
    ]
  },
  {
    title: '行业推荐 TOP10',
    links: [
      { id: 'b_sec4', label: '半导体/芯片（7家推荐）' },
      { id: 'b_sec5', label: 'AI算力/基础设施（6家）' },
      { id: 'b_sec6', label: '煤炭（5家推荐）' },
      { id: 'b_sec7', label: 'AI应用/传媒（5家）' },
      { id: 'b_sec8', label: '食品饮料（4家推荐）' },
      { id: 'b_sec9', label: '其他热门行业' }
    ]
  },
  {
    title: '金股共识 TOP20',
    links: [
      { id: 'b_sec10', label: '金股完整榜单' },
      { id: 'b_sec11', label: '中银5月金股组合' },
      { id: 'b_sec12', label: '东兴5月金股组合' }
    ]
  },
  {
    title: '券商晨报要点',
    links: [
      { id: 'b_sec13', label: '东吴/开源/山西' },
      { id: 'b_sec14', label: '国信/万联/中银' },
      { id: 'b_sec15', label: '英大/东海/东兴' },
      { id: 'b_sec16', label: '华源/越秀' }
    ]
  },
  {
    title: '买方视角',
    links: [
      { id: 'b_sec17', label: '高度共识方向' },
      { id: 'b_sec18', label: '预期差与分歧' },
      { id: 'b_sec19', label: '买方操作建议' }
    ]
  }
];

function renderBrokerNav_0522() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0522.map(group => `
    <div>
      <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button class="nav-btn w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
                  data-section="${link.id}"
                  onclick="updateActiveNav('${link.id}')">
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
