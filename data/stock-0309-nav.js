// ==========================================
// 个股研报导航配置 - 2026-03-09
// ==========================================

const STOCK_NAV_CONFIG_0309 = [
  {
    title: '📈 核心摘要',
    links: [
      { id: 'sec1', label: '今日核心观点' }
    ]
  },
  {
    title: '🏆 A 级重点标的',
    links: [
      { id: 'sec2', label: '山金国际 (000975)' },
      { id: 'sec3', label: '南亚新材 (688519)' },
      { id: 'sec4', label: '百济神州 (688235)' },
      { id: 'sec5', label: '长盈精密 (300115)' },
      { id: 'sec6', label: '今创集团 (603680)' },
      { id: 'sec7', label: '均胜电子 (600699)' },
      { id: 'sec8', label: '禾昌聚合 (920089)' }
    ]
  },
  {
    title: '🥈 B 级标的',
    links: [
      { id: 'sec9', label: '威孚高科/德赛西威' },
      { id: 'sec10', label: '传化智联/同惠电子' },
      { id: 'sec11', label: '涛涛车业/海博思创' },
      { id: 'sec12', label: '恒辉安防/思源电气' },
      { id: 'sec13', label: '大金重工/麦格米特' },
      { id: 'sec14', label: '其他 B 级标的' }
    ]
  },
  {
    title: '📊 评级汇总',
    links: [
      { id: 'sec15', label: '完整评级汇总表' }
    ]
  },
  {
    title: '💼 配置建议',
    links: [
      { id: 'sec16', label: '仓位配置建议' }
    ]
  }
];

function renderStockNav_0309() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;

  container.innerHTML = STOCK_NAV_CONFIG_0309.map(section => `
    <div class="mb-6">
      <h3 class="text-xs font-black text-purple-800 uppercase tracking-widest mb-3 px-3 flex items-center">
        <span class="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2"></span>
        ${section.title}
      </h3>
      <nav class="space-y-1">
        ${section.links.map(link => `
          <button class="nav-btn w-full flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100"
                  data-section="${link.id}"
                  onclick="updateActiveNav('${link.id}')">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
