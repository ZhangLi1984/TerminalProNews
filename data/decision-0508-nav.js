// ==========================================
// 决策导航配置 - 2026-05-08
// ==========================================

const DECISION_NAV_CONFIG_0508 = [
  { title: '核心摘要', links: [
    { id: 'sec1', label: '全局叙事' },
    { id: 'sec2', label: '操作方向与仓位' }
  ]},
  { title: '核心赛道', links: [
    { id: 'sec3', label: 'AI算力/半导体' },
    { id: 'sec4', label: '先进封装三足共振' },
    { id: 'sec5', label: '锂电储能/缺电产业链' },
    { id: 'sec6', label: '化工蛋氨酸' }
  ]},
  { title: '阿尔法赛道', links: [
    { id: 'sec7', label: '券商戴维斯双击' },
    { id: 'sec8', label: '煤炭能源重估' },
    { id: 'sec9', label: '军工景气恢复' },
    { id: 'sec10', label: '电网设备出海' }
  ]},
  { title: '逆向/布局', links: [
    { id: 'sec11', label: '生猪养殖反转' },
    { id: 'sec12', label: '创新药/CXO' },
    { id: 'sec13', label: '新型烟草' }
  ]},
  { title: '暗线与博弈', links: [
    { id: 'sec14', label: '跨赛道暗线传导' },
    { id: 'sec15', label: '宏观底色与风险' }
  ]},
  { title: '策略与跟踪', links: [
    { id: 'sec16', label: '配置策略矩阵' },
    { id: 'sec17', label: '重点推荐标的' },
    { id: 'sec18', label: '下周关键跟踪指标' }
  ]}
];

function renderDecisionNav_0508() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_0508.map(group => `
    <div>
      <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">${group.title}</h3>
      <div class="space-y-0.5">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('decision', '${link.id}')"
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
