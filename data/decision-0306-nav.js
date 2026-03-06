// ==========================================
// 投资决策内参导航配置 - 2026-03-06
// ==========================================

const DECISION_NAV_CONFIG_0306 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线与全局叙事' },
      { id: 'sec2', label: '操作方向建议' }
    ]
  },
  {
    title: 'S 级重大事件',
    links: [
      { id: 'sec3', label: 'S1. 中东冲突升级' },
      { id: 'sec4', label: 'S2. 央行 8000 亿逆回购' },
      { id: 'sec5', label: 'S3. GPT-5.4 发布' }
    ]
  },
  {
    title: '行业催化',
    links: [
      { id: 'sec6', label: '科技/AI/半导体' },
      { id: 'sec7', label: '低空经济/商业航天' },
      { id: 'sec8', label: '新能源/绿电' },
      { id: 'sec9', label: '周期/资源品' }
    ]
  },
  {
    title: '赛道追踪',
    links: [
      { id: 'sec10', label: 'AI 算力产业链' },
      { id: 'sec11', label: '机器人/低空经济' },
      { id: 'sec12', label: '半导体/芯片' }
    ]
  },
  {
    title: '二阶传导分析',
    links: [
      { id: 'sec13', label: '能源→化工替代链' },
      { id: 'sec14', label: 'AI→电力设备链' },
      { id: 'sec15', label: '地缘→军工链条' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec16', label: '重磅事件与数据' },
      { id: 'sec17', label: '风险提示与证伪' }
    ]
  }
];

function renderDecisionNav_0306() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0306.map((group, idx) => `
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
