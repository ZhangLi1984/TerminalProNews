// ==========================================
// 文档一：投资决策内参 - 导航配置
// ==========================================

const DECISION_NAV_CONFIG = [
  { title: '全局视野', links: [{ id: 'sec1', label: '核心摘要与主线' }] },
  { title: 'S 级推演', links: [
    { id: 'sec2_s1', label: 'S1. 中东冲突升级' },
    { id: 'sec2_s2', label: 'S2. 全球资产巨震' },
    { id: 'sec2_s3', label: 'S3. 全国两会开幕' }
  ]},
  { title: 'A 级事件', links: [
    { id: 'sec3', label: '行业催化与博弈' },
    { id: 'sec4', label: '热点赛道追踪' }
  ]},
  { title: '深度沙盘', links: [{ id: 'sec5', label: '跨赛道二阶推演' }] },
  { title: '前瞻风控', links: [{ id: 'sec6', label: '明日关注与预警' }] }
];

/**
 * 渲染侧边导航
 */
function renderDecisionNav() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG.map((group, idx) => `
    <div class="animate-in slide-left" style="animation-delay: ${idx * 80}ms; animation-fill-mode: both;">
      <h4 class="text-[12px] font-black text-slate-800 uppercase tracking-widest mb-2.5 pl-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            onclick="scrollToElement('${link.id}'); updateActiveNav('${link.id}');"
            class="nav-btn w-full flex items-center px-3 py-2 rounded-xl text-sm font-bold transition-all duration-200 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors bg-transparent"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
