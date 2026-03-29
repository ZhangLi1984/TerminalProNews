// ==========================================
// 行业研究导航 - 2026年3月30日
// ==========================================

const INDUSTRY_NAV_CONFIG_0330 = [
  {
    title: '宏观大势研判',
    links: [
      { id: 'i_sec1', label: 'AI通胀周期' },
      { id: 'i_sec2', label: '关键宏观信号' }
    ]
  },
  {
    title: 'S级赛道',
    links: [
      { id: 'i_sec3', label: 'AI算力产业链' },
      { id: 'i_sec4', label: '半导体/存储' },
      { id: 'i_sec5', label: '人形机器人' }
    ]
  },
  {
    title: 'A级赛道',
    links: [
      { id: 'i_sec6', label: '通信/光模块' },
      { id: 'i_sec7', label: 'MLCC/被动元件' },
      { id: 'i_sec8', label: '新能源/电力设备' },
      { id: 'i_sec9', label: '低空经济/eVTOL' },
      { id: 'i_sec10', label: '有色金属/锂' }
    ]
  },
  {
    title: 'B级赛道',
    links: [
      { id: 'i_sec11', label: '机械/工程机械' },
      { id: 'i_sec12', label: '汽车/重卡' },
      { id: 'i_sec13', label: '非银金融' },
      { id: 'i_sec14', label: '食品饮料' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'i_sec15', label: 'MLCC国产替代' },
      { id: 'i_sec16', label: '液冷成为标配' },
      { id: 'i_sec17', label: '云服务轻终端化' },
      { id: 'i_sec18', label: '锂价底部反转' },
      { id: 'i_sec19', label: '中东重卡出口' }
    ]
  },
  {
    title: '预期差挖掘',
    links: [
      { id: 'i_sec20', label: '锂/有色金属' },
      { id: 'i_sec21', label: '食品饮料' },
      { id: 'i_sec22', label: '非银金融' }
    ]
  },
  {
    title: '配置建议',
    links: [
      { id: 'i_sec23', label: '第一梯队' },
      { id: 'i_sec24', label: '第二梯队' },
      { id: 'i_sec25', label: '第三梯队' },
      { id: 'i_sec26', label: '第四梯队' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'i_sec27', label: '系统性风险' },
      { id: 'i_sec28', label: '行业特定风险' }
    ]
  }
];

function renderIndustryNav_0330() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  let html = '';

  INDUSTRY_NAV_CONFIG_0330.forEach((group, groupIndex) => {
    html += `
      <div class="nav-group">
        <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">${group.title}</h3>
        <div class="space-y-1">
          ${group.links.map((link, linkIndex) => `
            <button
              class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group ${linkIndex === 0 && groupIndex === 0 ? 'bg-slate-900 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'}"
              data-section="${link.id}"
              onclick="scrollToSection('industry', '${link.id}')"
            >
              <span>${link.label}</span>
              <div class="w-1.5 h-1.5 rounded-full ${linkIndex === 0 && groupIndex === 0 ? 'bg-red-500' : 'bg-transparent'} group-hover:bg-red-400 transition-colors"></div>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}