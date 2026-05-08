// ==========================================
// 集思录导航配置 - 2026-05-09
// ==========================================

const JISILU_NAV_CONFIG_0509 = [
  { title: '热门话题TOP10', links: [
    { id: 'j_sec1', label: '闻泰转债危机' },
    { id: 'j_sec2', label: '转债四傻风险' },
    { id: 'j_sec3', label: 'ST股最后盛宴' },
    { id: 'j_sec4', label: '科技股抱团焦虑' },
    { id: 'j_sec5', label: '高股息价值坚守' },
    { id: 'j_sec6', label: '孔曼子多策略' },
    { id: 'j_sec7', label: '网格交易利器' },
    { id: 'j_sec8', label: '期货贴水策略' },
    { id: 'j_sec9', label: '纳斯达克100' },
    { id: 'j_sec10', label: '券商股满仓' }
  ]},
  { title: '投资方法论', links: [
    { id: 'j_sec11', label: '六大投资策略' }
  ]},
  { title: '热议标的', links: [
    { id: 'j_sec12', label: '标的清单与多空分析' }
  ]},
  { title: '市场情绪', links: [
    { id: 'j_sec13', label: '情绪评分与信号' }
  ]},
  { title: '风险提示', links: [
    { id: 'j_sec14', label: '六大风险提示' }
  ]},
  { title: '下周关注', links: [
    { id: 'j_sec15', label: '关键时间节点' }
  ]}
];

function renderJisiluNav_0509() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0509.map(group => `
    <div>
      <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('jisilu', '${link.id}')"
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
