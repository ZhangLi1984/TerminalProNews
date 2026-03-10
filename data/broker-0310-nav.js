// ==========================================
// 券商晨报买方汇总内参 - 导航配置 (2026-03-10)
// ==========================================

const BROKER_NAV_CONFIG_0310 = [
  {
    title: '核心摘要',
    links: [
      { id: 'b_sec1', label: '市场共识' },
      { id: 'b_sec2', label: '仓位建议' },
      { id: 'b_sec3', label: '热门赛道 TOP5' },
      { id: 'b_sec4', label: '金股 TOP10' }
    ]
  },
  {
    title: '宏观策略',
    links: [
      { id: 'b_sec5', label: '券商策略汇总' }
    ]
  },
  {
    title: '行业榜单',
    links: [
      { id: 'b_sec6', label: '热门行业推荐榜' },
      { id: 'b_sec7', label: '重点行业观点' }
    ]
  },
  {
    title: '金股组合',
    links: [
      { id: 'b_sec8', label: '多家推荐个股' },
      { id: 'b_sec9', label: '券商金股汇总' }
    ]
  },
  {
    title: '行业详解',
    links: [
      { id: 'b_sec10', label: '科技成长' },
      { id: 'b_sec11', label: '周期资源' },
      { id: 'b_sec12', label: '金融地产' },
      { id: 'b_sec13', label: '大消费' },
      { id: 'b_sec14', label: '高端制造' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'b_sec15', label: '主要分歧' },
      { id: 'b_sec16', label: '共同风险' }
    ]
  },
  {
    title: '投资建议',
    links: [
      { id: 'b_sec17', label: '短期配置' },
      { id: 'b_sec18', label: '中期配置' },
      { id: 'b_sec19', label: '金股组合' }
    ]
  }
];

function renderBrokerNav_0310() {
  const container = document.getElementById('broker-nav-content');
  if (!container) return;

  container.innerHTML = BROKER_NAV_CONFIG_0310.map(section => `
    <div class="nav-section">
      <div class="nav-section-title">${section.title}</div>
      <ul class="nav-list space-y-1">
        ${section.links.map(link => `
          <li>
            <button class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors"
                    data-section="${link.id}"
                    onclick="scrollToSection('${link.id}')">
              <div class="flex items-center">
                <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2.5"></div>
                <span>${link.label}</span>
              </div>
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerOffset = 100;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    // 更新活动导航
    if (typeof updateActiveNav === 'function') {
      updateActiveNav(sectionId);
    }
  }
}
