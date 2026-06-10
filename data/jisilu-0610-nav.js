// ==========================================
// 集思录投资洞察导航 - 2026年6月10日
// ==========================================
const JISILU_NAV_CONFIG_0610 = [
  {
    title: '🔥 热门话题',
    links: [
      { id: 'j_sec1', label: 'TOP1 老登vs科技极致割裂' },
      { id: 'j_sec2', label: 'TOP2 转债高位风险加剧' },
      { id: 'j_sec3', label: 'TOP3 龙大转债无法兑付' },
      { id: 'j_sec4', label: 'TOP4 双创见顶论再起' },
      { id: 'j_sec5', label: 'TOP5 自由现金流崩塌' },
      { id: 'j_sec6', label: 'TOP6 国家队持续撤退' },
      { id: 'j_sec7', label: 'TOP7 科技抱团瓦解？' },
      { id: 'j_sec8', label: 'TOP8 贴水策略4年实录' },
      { id: 'j_sec9', label: 'TOP9 中年职投挣扎' },
      { id: 'j_sec10', label: 'TOP10 美股估值争论' }
    ]
  },
  {
    title: '📚 投资方法论',
    links: [
      { id: 'j_sec11', label: '转债双低轮动' },
      { id: 'j_sec12', label: '期指贴水策略' },
      { id: 'j_sec13', label: 'IM-IC价差套利' },
      { id: 'j_sec14', label: '期权买方+卖方' },
      { id: 'j_sec15', label: '日本高股息映射' },
      { id: 'j_sec16', label: '期货高频套利' },
      { id: 'j_sec17', label: '小市值轮动' }
    ]
  },
  {
    title: '🎯 热议标的',
    links: [
      { id: 'j_sec18', label: '龙大转债 违约风暴' },
      { id: 'j_sec19', label: '中际旭创 科技抱团' },
      { id: 'j_sec20', label: '五粮液 价值陷阱' },
      { id: 'j_sec21', label: '闻泰科技 诉讼博弈' },
      { id: 'j_sec22', label: '医疗ETF 深跌抄底' },
      { id: 'j_sec23', label: 'YU7 汽车热议' },
      { id: 'j_sec24', label: '自由现金流ETF' }
    ]
  },
  {
    title: '📊 情绪 & 风险',
    links: [
      { id: 'j_sec25', label: '情绪评分 4.0/10' },
      { id: 'j_sec26', label: '五大风险提示' },
      { id: 'j_sec27', label: '操作建议汇总' }
    ]
  }
];

function renderJisiluNav_0610() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0610.map(section => `
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
