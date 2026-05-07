// ==========================================
// 券商晨报导航配置 - 2026-05-08
// ==========================================

const BROKER_NAV_CONFIG_0508 = [
  { title: '市场共识', links: [
    { id: 'sec1', label: '大盘观点与资金面' },
    { id: 'sec2', label: '政策面与仓位建议' }
  ]},
  { title: '行业推荐TOP10', links: [
    { id: 'sec3', label: 'AI/算力/半导体' },
    { id: 'sec4', label: '资源品/有色金属' },
    { id: 'sec5', label: '电力设备/新能源' },
    { id: 'sec6', label: '医药生物/创新药' },
    { id: 'sec7', label: '券商/非银金融' },
    { id: 'sec8', label: '传媒/游戏/互联网' },
    { id: 'sec9', label: '商业航天' },
    { id: 'sec10', label: '汽车/智能驾驶' },
    { id: 'sec11', label: '化工' },
    { id: 'sec12', label: '电子/消费电子' }
  ]},
  { title: '金股组合', links: [
    { id: 'sec13', label: '多券商共振个股' },
    { id: 'sec14', label: '重点金股组合' }
  ]},
  { title: '券商观点', links: [
    { id: 'sec15', label: '核心券商摘要' }
  ]},
  { title: '风险提示', links: [
    { id: 'sec16', label: '主要分歧与风险' },
    { id: 'sec17', label: '关注日历' }
  ]}
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
