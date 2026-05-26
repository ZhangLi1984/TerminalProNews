// ==========================================
// 行业研究 - 导航配置 2026-05-27
// ==========================================
const INDUSTRY_NAV_CONFIG_0527 = [
  {
    title: '核心主线',
    links: [
      { id: 'i_sec1', label: 'AI算力/半导体（韬定律催化）' },
      { id: 'i_sec2', label: '存储芯片/HBM超级周期' },
      { id: 'i_sec3', label: '人形机器人（IPO元年）' }
    ]
  },
  {
    title: '周期/资源',
    links: [
      { id: 'i_sec4', label: '煤炭/焦煤（安监趋严）' },
      { id: 'i_sec5', label: '生猪养殖（产能去化）' },
      { id: 'i_sec6', label: '有色金属（铝/铜/锂）' }
    ]
  },
  {
    title: '新兴产业',
    links: [
      { id: 'i_sec7', label: '绿电/算电协同' },
      { id: 'i_sec8', label: '商业航天/太空光伏' },
      { id: 'i_sec9', label: '智能驾驶/FSD入华' }
    ]
  },
  {
    title: '金融/消费',
    links: [
      { id: 'i_sec10', label: '券商/非银金融' },
      { id: 'i_sec11', label: '创新药/ASCO催化' },
      { id: 'i_sec12', label: '消费/房地产' }
    ]
  },
  {
    title: '数据监测',
    links: [
      { id: 'i_sec13', label: '行业数据监测表' },
      { id: 'i_sec14', label: '金股组合推荐' }
    ]
  }
];

function renderIndustryNav_0527() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0527.map((group) => `
    <div>
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">${group.title}</h3>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="updateActiveNav('${link.id}'); document.getElementById('${link.id}')?.scrollIntoView({behavior:'smooth',block:'start'})"
            class="nav-btn w-full text-left px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors flex items-center"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
