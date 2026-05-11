// ==========================================
// 集思录导航配置 - 2026-05-12
// ==========================================

const JISILU_NAV_CONFIG_0512 = [
  { title: '热门话题TOP10', links: [
    { id: 'j_sec1', label: '闻泰转债风暴' },
    { id: 'j_sec2', label: '转债四傻与龙大危机' },
    { id: 'j_sec3', label: '科技股vs老登股' },
    { id: 'j_sec4', label: '仓位管理与情绪' },
    { id: 'j_sec5', label: '市场生态反思' },
    { id: 'j_sec6', label: '投资方法论碰撞' },
    { id: 'j_sec7', label: '低风险至暗时刻' },
    { id: 'j_sec8', label: '期货套利策略' },
    { id: 'j_sec9', label: '五粮液业绩风波' },
    { id: 'j_sec10', label: '北交所打新与轮动' }
  ]},
  { title: '投资方法论', links: [
    { id: 'j_sec11', label: '六大投资策略精粹' }
  ]},
  { title: '热议标的', links: [
    { id: 'j_sec12', label: '标的清单与多空分析' }
  ]},
  { title: '市场情绪', links: [
    { id: 'j_sec13', label: '情绪评分与信号' }
  ]},
  { title: '风险提示', links: [
    { id: 'j_sec14', label: '五大风险提示' }
  ]},
  { title: '总结展望', links: [
    { id: 'j_sec15', label: '核心矛盾与方向' }
  ]}
];

function renderJisiluNav_0512() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0512.map(group => `
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
