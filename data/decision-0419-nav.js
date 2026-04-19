// ==========================================
// 投资决策导航配置 - 2026-04-19
// ==========================================
const DECISION_NAV_CONFIG_0419 = [
  { title: '核心摘要', links: [
    { id: 'sec1', label: '核心主线' },
    { id: 'sec2', label: '关键推演' },
    { id: 'sec3', label: '操作方向' }
  ]},
  { title: '重大事件', links: [
    { id: 'sec4', label: '美伊霍尔木兹"开关拉锯"' },
    { id: 'sec5', label: '荣耀机器人半马夺冠' },
    { id: 'sec6', label: '东方证券并购上海证券' }
  ]},
  { title: '重要新闻', links: [
    { id: 'sec7', label: 'AI/半导体' },
    { id: 'sec8', label: '新能源/锂电' },
    { id: 'sec9', label: '宏观/政策' },
    { id: 'sec10', label: '医药/消费' }
  ]},
  { title: '热点赛道', links: [
    { id: 'sec11', label: 'CPO/光模块' },
    { id: 'sec12', label: '锂电/储能' },
    { id: 'sec13', label: '人形机器人' },
    { id: 'sec14', label: '半导体设备' },
    { id: 'sec15', label: '油运/能源安全' },
    { id: 'sec16', label: '固态电池/钠电池' }
  ]},
  { title: '跨赛道传导', links: [
    { id: 'sec17', label: '中东->航运/物流' },
    { id: 'sec18', label: 'AI->核电/聚变能' },
    { id: 'sec19', label: '存储->终端涨价' },
    { id: 'sec20', label: '薪酬改革->风格切换' }
  ]},
  { title: '关注与风险', links: [
    { id: 'sec21', label: '明日关注' },
    { id: 'sec22', label: '逻辑证伪区' },
    { id: 'sec23', label: '传闻预警' },
    { id: 'sec24', label: '仓位建议' }
  ]}
];

function renderDecisionNav_0419() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0419.map(group => `
    <div>
      <h3 class="text-xs font-black text-slate-400 uppercase tracking-wider mb-2 px-1">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('decision','${link.id}')" class="nav-btn w-full text-left text-sm px-3 py-1.5 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group" data-section="${link.id}">
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 group-hover:bg-slate-400 transition-colors"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
