// ==========================================
// 投资决策内参 - 导航配置 2026-04-13
// ==========================================

const DECISION_NAV_CONFIG_0413 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '全局叙事与核心主线' },
      { id: 'sec2', label: '关键推演与操作方向' }
    ]
  },
  {
    title: '重大事件推演',
    links: [
      { id: 'sec3', label: '美伊谈判破裂+封锁海峡' },
      { id: 'sec4', label: 'AI算力景气确认+XPO革命' },
      { id: 'sec5', label: '创业板第四套上市标准' }
    ]
  },
  {
    title: '行业催化追踪',
    links: [
      { id: 'sec6', label: '科技/AI/半导体' },
      { id: 'sec7', label: '新能源/储能/锂电' },
      { id: 'sec8', label: '大宗商品/资源' },
      { id: 'sec9', label: '政策/宏观' }
    ]
  },
  {
    title: '赛道与传导',
    links: [
      { id: 'sec10', label: '热点赛道追踪表' },
      { id: 'sec11', label: '跨赛道传导分析' }
    ]
  },
  {
    title: '风险与明日关注',
    links: [
      { id: 'sec12', label: '明日核心关注' },
      { id: 'sec13', label: '逻辑证伪与传闻预警' },
      { id: 'sec14', label: '核心观察指标' }
    ]
  }
];

function renderDecisionNav_0413() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0413.map(group => `
    <div>
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-2 px-1">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('decision', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0 group-hover:bg-red-500 transition-colors"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
