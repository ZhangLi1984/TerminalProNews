// ==========================================
// 券商晨报导航配置 - 2026-05-08
// ==========================================

const BROKER_NAV_CONFIG_0508 = [
  {
    title: '市场共识',
    links: [
      { id: 'sec1', label: '大盘观点' },
      { id: 'sec2', label: '资金面分析' },
      { id: 'sec3', label: '政策面解读' },
      { id: 'sec4', label: '仓位建议' }
    ]
  },
  {
    title: '行业推荐',
    links: [
      { id: 'sec5', label: 'AI/算力/半导体' },
      { id: 'sec6', label: '资源品/有色金属' },
      { id: 'sec7', label: '电力设备/新能源' },
      { id: 'sec8', label: '医药生物/创新药' },
      { id: 'sec9', label: '券商/非银金融' },
      { id: 'sec10', label: '传媒/游戏/互联网' },
      { id: 'sec11', label: '商业航天' },
      { id: 'sec12', label: '汽车/智能驾驶' },
      { id: 'sec13', label: '化工' },
      { id: 'sec14', label: '电子/消费电子' }
    ]
  },
  {
    title: '金股与风险',
    links: [
      { id: 'sec15', label: '多券商共振金股' },
      { id: 'sec16', label: '各券商晨报摘要' },
      { id: 'sec17', label: '主要分歧与风险' },
      { id: 'sec18', label: '重点关注日历' }
    ]
  }
];

function renderBrokerNav_0508() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0508.map(group => `
    <div>
      <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('broker', '${link.id}')"
            class="nav-btn w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center"
            data-section="${link.id}"
          >
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
