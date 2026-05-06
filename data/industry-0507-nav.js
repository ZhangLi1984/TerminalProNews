// ==========================================
// 行业研究导航配置 - 2026-05-07
// 深度融合：行研总监 + CIO 报告（按赛道合并去重）
// ==========================================

const INDUSTRY_NAV_CONFIG_0507 = [
  { title: '核心赛道', links: [
    { id: 'i_sec1', label: 'AI算力/半导体（共识+深度）' },
    { id: 'i_sec2', label: '先进封装（2027价差期）' },
    { id: 'i_sec3', label: '锂电/储能（周期反转）' },
    { id: 'i_sec4', label: '氟化工/制冷剂（长景气）' }
  ]},
  { title: '暗线与二阶博弈', links: [
    { id: 'i_sec5', label: 'AI溢出 → 玻纤电子布' },
    { id: 'i_sec6', label: '算力功耗 → 液冷散热' },
    { id: 'i_sec7', label: 'SAT口蹄疫 → 生猪产能出清' },
    { id: 'i_sec8', label: '中东地缘 → 化工成本推涨' }
  ]},
  { title: '困境反转', links: [
    { id: 'i_sec9', label: '生猪养殖（左侧布局）' },
    { id: 'i_sec10', label: '光伏（三重底部）' },
    { id: 'i_sec11', label: '创新药/CXO（估值修复）' },
    { id: 'i_sec12', label: '建材（反内卷提价）' }
  ]},
  { title: '高确定性底仓', links: [
    { id: 'i_sec13', label: '券商/保险' },
    { id: 'i_sec14', label: '消费电子/果链' }
  ]},
  { title: '数据监测', links: [
    { id: 'i_sec15', label: '大宗商品量价监测表' },
    { id: 'i_sec16', label: '产业链周期与估值表' }
  ]},
  { title: '策略与仓位', links: [
    { id: 'i_sec17', label: 'CIO仓位配置建议' },
    { id: 'i_sec18', label: '关键风险与证伪路径' },
    { id: 'i_sec19', label: 'CIO最终判断' }
  ]}
];

function renderIndustryNav_0507() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0507.map(group => `
    <div>
      <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('industry', '${link.id}')"
            class="nav-btn w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-all duration-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center"
            data-section="${link.id}"
          >
            <div class="w-1 h-1 rounded-full bg-transparent mr-2 flex-shrink-0 transition-colors"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
