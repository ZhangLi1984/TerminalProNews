const BROKER_NAV_CONFIG_0413 = [
  {
    title: '宏观与市场',
    links: [
      { id: 'b_sec1', label: '核心宏观数据' },
      { id: 'b_sec2', label: '大盘走势判断' },
      { id: 'b_sec3', label: '市场共识总结' }
    ]
  },
  {
    title: '行业共识推荐',
    links: [
      { id: 'b_sec4', label: '行业推荐频次TOP10' },
      { id: 'b_sec5', label: 'AI/算力/半导体' },
      { id: 'b_sec6', label: '新能源汽车/锂电' },
      { id: 'b_sec7', label: '有色金属/贵金属' }
    ]
  },
  {
    title: '金股与个股',
    links: [
      { id: 'b_sec8', label: '中银证券4月金股' },
      { id: 'b_sec9', label: '东兴证券4月金股' },
      { id: 'b_sec10', label: '多券商重点提及个股' },
      { id: 'b_sec11', label: '其他重点推荐个股' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec12', label: '共同风险因素' },
      { id: 'b_sec13', label: '主要分歧点' }
    ]
  },
  {
    title: '买方策略',
    links: [
      { id: 'b_sec14', label: '总体配置建议' },
      { id: 'b_sec15', label: '三条核心主线' },
      { id: 'b_sec16', label: '特别关注事项' },
      { id: 'b_sec17', label: '仓位管理建议' }
    ]
  }
];

function renderBrokerNav_0413() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;
  container.innerHTML = BROKER_NAV_CONFIG_0413.map((group, gi) => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-3">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center"
            data-section="${link.id}"
            onclick="scrollToSection('broker', '${link.id}')"
          >
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 bg-transparent"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
