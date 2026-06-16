const DECISION_NAV_CONFIG_0616 = [
  {
    title: '宏观政策',
    links: [
      { id: 'sec1', label: '六张网建设' },
      { id: 'sec2', label: '霍尔木兹海峡局势' },
      { id: 'sec3', label: '美联储政策' }
    ]
  },
  {
    title: '市场动态',
    links: [
      { id: 'sec4', label: '道指创新高' },
      { id: 'sec5', label: 'A股表现' },
      { id: 'sec6', label: '港股走势' }
    ]
  },
  {
    title: '产业热点',
    links: [
      { id: 'sec7', label: 'DeepSeek融资' },
      { id: 'sec8', label: 'MLCC缺货' },
      { id: 'sec9', label: 'AI硬件爆发' }
    ]
  },
  {
    title: '公司公告',
    links: [
      { id: 'sec10', label: '东山精密投资' },
      { id: 'sec11', label: '长盈通停牌核查' },
      { id: 'sec12', label: '股东增减持' }
    ]
  }
];

function renderDecisionNav_0616() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0616.map(category => `
    <div class="mb-6">
      <h3 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 px-3">${category.title}</h3>
      <div class="space-y-1">
        ${category.links.map(link => `
          <button
            data-section="${link.id}"
            onclick="updateActiveNav('${link.id}')"
            class="nav-btn w-full text-left px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-transparent mr-3 flex-shrink-0 group-hover:bg-red-500 transition-colors"></span>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
