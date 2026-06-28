// ==========================================
// Industry Nav Config: 2026-06-28
// ==========================================

const INDUSTRY_NAV_CONFIG_0628 = [
  {
    title: '融合赛道分析',
    links: [
      { id: 'sec1', label: '人形机器人关节模组' },
      { id: 'sec2', label: 'AI视频生成模型' },
      { id: 'sec3', label: '航空运输' },
      { id: 'sec4', label: '数据中心液冷' },
      { id: 'sec5', label: '太空光伏与卫星电源' },
      { id: 'sec6', label: '非银金融（券商+保险）' },
      { id: 'sec7', label: '轮胎品牌' }
    ]
  },
  {
    title: '独立板块',
    links: [
      { id: 'sec8', label: '数据监测表（行研总监）' },
      { id: 'sec9', label: 'CIO策略总结与仓位建议' }
    ]
  }
];

function renderIndustryNav_0628() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0628.map(section => `
    <div class="mb-4">
      <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <a href="#${link.id}" class="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-colors truncate" title="${link.label}">
            ${link.label}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}
