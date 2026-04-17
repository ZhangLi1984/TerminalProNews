const DECISION_NAV_CONFIG_0417 = [
  { title: '核心摘要', links: [
    { id: 'sec1', label: '核心主线' },
    { id: 'sec2', label: '关键推演' },
    { id: 'sec3', label: '操作方向' }
  ]},
  { title: '重大事件', links: [
    { id: 'sec4', label: '源杰登顶 + 茅台双降' },
    { id: 'sec5', label: '中东地缘"谈打并行"' },
    { id: 'sec6', label: 'AI算力全产业链涨价' }
  ]},
  { title: '重要新闻', links: [
    { id: 'sec7', label: 'AI/半导体' },
    { id: 'sec8', label: '新能源/储能' },
    { id: 'sec9', label: '宏观/政策' },
    { id: 'sec10', label: '化工/涨价链' },
    { id: 'sec11', label: '机器人/具身智能' },
    { id: 'sec12', label: '券商/金融' }
  ]},
  { title: '热点赛道', links: [
    { id: 'sec13', label: 'AI算力硬件链' },
    { id: 'sec14', label: '储能/锂电' },
    { id: 'sec15', label: '化工涨价链' },
    { id: 'sec16', label: '具身智能' }
  ]},
  { title: '跨赛道传导', links: [
    { id: 'sec17', label: '中东->新能源' },
    { id: 'sec18', label: 'AI->传统材料' },
    { id: 'sec19', label: '茅台->消费分化' },
    { id: 'sec20', label: '存储->终端成本' }
  ]},
  { title: '关注与风险', links: [
    { id: 'sec21', label: '关键日程' },
    { id: 'sec22', label: '数据验证清单' },
    { id: 'sec23', label: '逻辑证伪区' },
    { id: 'sec24', label: '仓位风控建议' }
  ]}
];

function renderDecisionNav_0417() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;
  container.innerHTML = DECISION_NAV_CONFIG_0417.map(group => `
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
