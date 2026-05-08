// ==========================================
// 行业研究导航配置 - 2026-05-09
// ==========================================

const INDUSTRY_NAV_CONFIG_0509 = [
  { title: '核心赛道', links: [
    { id: 'i_sec1', label: 'AI算力产业链' },
    { id: 'i_sec2', label: '锂电/新型储能' },
    { id: 'i_sec3', label: '风电板块' },
    { id: 'i_sec4', label: '医药创新药与CXO' }
  ]},
  { title: '底仓资产', links: [
    { id: 'i_sec5', label: '证券行业' },
    { id: 'i_sec6', label: '保险行业' },
    { id: 'i_sec7', label: '煤炭行业' }
  ]},
  { title: '暗线与预期差', links: [
    { id: 'i_sec8', label: '霍尔木兹冲突->油运->化工暗线' },
    { id: 'i_sec9', label: '基础化工产能出清' },
    { id: 'i_sec10', label: '军工新域新质' },
    { id: 'i_sec11', label: '生猪养殖周期底部' },
    { id: 'i_sec12', label: '钢铁行业利润弹性' },
    { id: 'i_sec13', label: '乳制品原奶反转' }
  ]},
  { title: '数据监测', links: [
    { id: 'i_sec14', label: '大宗商品量价监测表' },
    { id: 'i_sec15', label: '产业链周期估值表' }
  ]},
  { title: '策略', links: [
    { id: 'i_sec16', label: '仓位配置建议' },
    { id: 'i_sec17', label: '交易节奏与止损纪律' },
    { id: 'i_sec18', label: '风险预警' }
  ]}
];

function renderIndustryNav_0509() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0509.map(group => `
    <div>
      <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('industry', '${link.id}')"
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
