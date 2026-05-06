// ==========================================
// 决策导航配置 - 2026-05-07
// ==========================================

const DECISION_NAV_CONFIG_0507 = [
  { title: '核心摘要', links: [
    { id: 'sec1', label: '全局叙事' },
    { id: 'sec2', label: '操作方向' }
  ]},
  { title: '重大事件', links: [
    { id: 'sec3', label: '美伊停战与油价暴跌' },
    { id: 'sec4', label: 'AI算力链史诗级共振' },
    { id: 'sec5', label: 'DeepSeek估值与商业化' }
  ]},
  { title: '重要新闻', links: [
    { id: 'sec6', label: '科技/AI/半导体' },
    { id: 'sec7', label: '新能源/储能/锂电' },
    { id: 'sec8', label: '宏观/政策' },
    { id: 'sec9', label: '地缘政治' },
    { id: 'sec10', label: '房地产' }
  ]},
  { title: '赛道与传导', links: [
    { id: 'sec11', label: '热点赛道追踪' },
    { id: 'sec12', label: '跨赛道传导分析' }
  ]},
  { title: '明日关注', links: [
    { id: 'sec13', label: '宏观数据与事件' },
    { id: 'sec14', label: '行业会议与美股映射' }
  ]},
  { title: '风险提示', links: [
    { id: 'sec15', label: '逻辑证伪风险' },
    { id: 'sec16', label: '传闻预警' },
    { id: 'sec17', label: '仓位建议' }
  ]}
];

function renderDecisionNav_0507() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0507.map(group => `
    <div>
      <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('decision', '${link.id}')"
            class="nav-btn w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center"
            data-section="${link.id}"
          >
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 flex-shrink-0 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
