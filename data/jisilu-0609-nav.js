// ==========================================
// 集思录投资洞察导航 - 2026年6月9日（更新版）
// ==========================================
const JISILU_NAV_CONFIG_0609 = [
  {
    title: '🔥 热门话题',
    links: [
      { id: 'j_sec1', label: 'TOP1 双创见顶之争' },
      { id: 'j_sec2', label: 'TOP2 老登 vs 科技割裂' },
      { id: 'j_sec3', label: 'TOP3 *ST三房退市博弈' },
      { id: 'j_sec4', label: 'TOP4 低风险渠道堵死' },
      { id: 'j_sec5', label: 'TOP5 龙大转债违约' },
      { id: 'j_sec6', label: 'TOP6 国家队跑路？' },
      { id: 'j_sec7', label: 'TOP7 白酒见底了吗' },
      { id: 'j_sec8', label: 'TOP8 融资余额新高' },
      { id: 'j_sec9', label: 'TOP9 闻泰诉讼增持' },
      { id: 'j_sec10', label: 'TOP10 中金东兴套利' }
    ]
  },
  {
    title: '📚 投资方法论',
    links: [
      { id: 'j_sec11', label: '转债多因子轮动' },
      { id: 'j_sec12', label: '周期股抄底摊饼' },
      { id: 'j_sec13', label: 'ETF 动量轮动' },
      { id: 'j_sec14', label: '现金理财增强' },
      { id: 'j_sec15', label: 'ST 重整博弈' }
    ]
  },
  {
    title: '🎯 热议标的',
    links: [
      { id: 'j_sec16', label: '*ST三房 生死局' },
      { id: 'j_sec17', label: '山鹰国际 回购' },
      { id: 'j_sec18', label: '五粮液/白酒 探底' },
      { id: 'j_sec19', label: '龙大转债 违约' },
      { id: 'j_sec20', label: '闻泰科技 诉讼' },
      { id: 'j_sec21', label: '中金东兴 套利' },
      { id: 'j_sec22', label: '古井贡B 高股息' }
    ]
  },
  {
    title: '📊 市场情绪 & 风险',
    links: [
      { id: 'j_sec23', label: '情绪评分 4.2/10' },
      { id: 'j_sec24', label: '五大风险提示' },
      { id: 'j_sec25', label: '操作建议汇总' }
    ]
  }
];

function renderJisiluNav_0609() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0609.map(section => `
    <div class="nav-section">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 px-3">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button onclick="scrollToSection('jisilu', '${link.id}')"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-amber-400 transition-colors mr-2.5"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
