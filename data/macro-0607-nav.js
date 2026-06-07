// ==========================================
// 宏观研究导航配置 - 2026 年 6 月 7 日
// ==========================================

const MACRO_NAV_CONFIG_0607 = [
  {
    title: '核心结论',
    links: [
      { id: 'm_sec1', label: '核心策略摘要' }
    ]
  },
  {
    title: '国内宏观',
    links: [
      { id: 'm_sec2', label: '增长指标：PMI 回到临界点' },
      { id: 'm_sec3', label: '通胀指标：PPI 大幅转正' },
      { id: 'm_sec4', label: '需求端：内需疲弱、外需韧性' },
      { id: 'm_sec5', label: '货币金融：流动性宽松' },
      { id: 'm_sec6', label: '企业利润：高技术制造业引领' }
    ]
  },
  {
    title: '海外宏观',
    links: [
      { id: 'm_sec7', label: '美国经济：消费转向投资驱动' },
      { id: 'm_sec8', label: '就业与美联储政策' },
      { id: 'm_sec9', label: '地缘政治：美伊僵持' },
      { id: 'm_sec10', label: '欧央行与全球资产表现' }
    ]
  },
  {
    title: '交叉验证',
    links: [
      { id: 'm_sec11', label: '共识点与分歧点' }
    ]
  },
  {
    title: '资产配置',
    links: [
      { id: 'm_sec12', label: '权益资产：结构性超配' },
      { id: 'm_sec13', label: '固定收益：中美分化' },
      { id: 'm_sec14', label: '商品：地缘溢价主导' },
      { id: 'm_sec15', label: '外汇配置' }
    ]
  },
  {
    title: '风险提示',
    links: [
      { id: 'm_sec16', label: '核心风险矩阵' },
      { id: 'm_sec17', label: '关注事件日历' },
      { id: 'm_sec18', label: '证伪指标' }
    ]
  }
];

function renderMacroNav_0607() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0607.map((section, index) => `
    <div class="space-y-3">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider px-3">${section.title}</h3>
      <nav class="space-y-1">
        ${section.links.map(link => `
          <button
            onclick="scrollToSection('macro', '${link.id}'); return false;"
            class="nav-btn w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group ${index === 0 && link.id === 'm_sec1' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'}"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors ${index === 0 && link.id === 'm_sec1' ? 'bg-red-500' : 'bg-transparent group-hover:bg-slate-400'}"></div>
            ${link.label}
          </button>
        `).join('')}
      </nav>
    </div>
  `).join('');
}
