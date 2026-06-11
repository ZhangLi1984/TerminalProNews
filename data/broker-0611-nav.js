// ==========================================
// 券商晨报模块 - 导航配置 (2026 年 6 月 11 日)
// ==========================================

const BROKER_NAV_CONFIG_0611 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '执行摘要' },
      { id: 'b_sec2', label: '金股 TOP10' }
    ]
  },
  {
    title: '策略观点',
    links: [
      { id: 'b_sec3', label: '各券商核心观点' },
      { id: 'b_sec4', label: '海外市场共识' }
    ]
  },
  {
    title: '行业推荐',
    links: [
      { id: 'b_sec5', label: '行业共识统计' },
      { id: 'b_sec6', label: 'AI算力/光通信' },
      { id: 'b_sec7', label: '半导体/芯片' },
      { id: 'b_sec8', label: '高股息/红利' },
      { id: 'b_sec9', label: '创新药/医药生物' },
      { id: 'b_sec10', label: '资源品' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec11', label: '多券商推荐个股' },
      { id: 'b_sec12', label: '其他重要个股' },
      { id: 'b_sec13', label: '6月金股汇总' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec14', label: '主要分歧点' },
      { id: 'b_sec15', label: '共同风险因素' },
      { id: 'b_sec16', label: '投资建议总结' }
    ]
  }
];

function renderBrokerNav_0611() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0611.map((section, idx) => `
    <div class="nav-section">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-3">
        ${section.title}
      </h3>
      <ul class="space-y-1">
        ${section.links.map(link => `
          <li>
            <button
              onclick="scrollToSection('broker', '${link.id}'); return false;"
              class="nav-btn w-full flex items-center px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-all duration-200"
              data-section="${link.id}"
            >
              <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5 transition-colors"></div>
              <span>${link.label}</span>
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}
