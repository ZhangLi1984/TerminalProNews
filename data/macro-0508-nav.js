// ==========================================
// 宏观研究导航配置 - 2026-05-08
// ==========================================

const MACRO_NAV_CONFIG_0508 = [
  { title: '执行摘要', links: [
    { id: 'sec1', label: '核心矛盾与配置方向' }
  ]},
  { title: '国内宏观', links: [
    { id: 'sec2', label: '经济增长与周期定位' },
    { id: 'sec3', label: '通胀与价格信号' },
    { id: 'sec4', label: '信贷与流动性' },
    { id: 'sec5', label: '房地产深度去库' },
    { id: 'sec6', label: '外贸与汇率' },
    { id: 'sec7', label: '财政与企业景气' }
  ]},
  { title: '海外宏观', links: [
    { id: 'sec8', label: '美联储与沃什时代' },
    { id: 'sec9', label: '全球经济分化' },
    { id: 'sec10', label: '霍尔木兹海峡封锁' }
  ]},
  { title: '政策跟踪', links: [
    { id: 'sec11', label: '政治局会议定调' },
    { id: 'sec12', label: '立法与范式切换' }
  ]},
  { title: '买方策略', links: [
    { id: 'sec13', label: '资产配置方向' },
    { id: 'sec14', label: '行业偏好' },
    { id: 'sec15', label: '核心逻辑链' },
    { id: 'sec16', label: '预期差分析' },
    { id: 'sec17', label: '风险与证伪指标' }
  ]}
];

function renderMacroNav_0508() {
  const container = document.getElementById('macro-nav-content');
  if (!container) return;

  container.innerHTML = MACRO_NAV_CONFIG_0508.map(group => `
    <div>
      <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('macro', '${link.id}')"
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
