// truncated=================================
// 投资决策内参导航配置 - 2026-03-07
// ==========================================

const DECISION_NAV_CONFIG_0307 = [
  {
    title: '核心摘要',
    links: [
      { id: 'sec1', label: '核心主线与全局叙事' },
      { id: 'sec2', label: '关键推演与操作方向' }
    ]
  },
  {
    title: 'S 级重大事件',
    links: [
      { id: 'sec3', label: 'S1. 中东战事升级' },
      { id: 'sec4', label: 'S2. 创业板改革深化' },
      { id: 'sec5', label: 'S3. 财政部 1000 亿促内需' }
    ]
  },
  {
    title: 'A 级行业催化',
    links: [
      { id: 'sec6', label: '科技/AI/半导体' },
      { id: 'sec7', label: '新能源/电力' },
      { id: 'sec8', label: '政策宏观' }
    ]
  },
  {
    title: '赛道全景追踪',
    links: [
      { id: 'sec9', label: 'AI/机器人赛道' },
      { id: 'sec10', label: '半导体赛道' },
      { id: 'sec11', label: '新能源赛道' },
      { id: 'sec12', label: '军工赛道' }
    ]
  },
  {
    title: '二阶传导分析',
    links: [
      { id: 'sec13', label: '原油→化工成本推动' },
      { id: 'sec14', label: 'AI 缺电→设备出海' },
      { id: 'sec15', label: '地缘→航运运价上涨' },
      { id: 'sec16', label: '创业板改革→创投受益' },
      { id: 'sec17', label: '欧盟电池→设备出海' }
    ]
  },
  {
    title: '明日关注',
    links: [
      { id: 'sec18', label: '宏观数据/事件' },
      { id: 'sec19', label: '风险提示与证伪' }
    ]
  }
];

function renderDecisionNav_0307() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0307.map((group, idx) => `
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
