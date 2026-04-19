// ==========================================
// 行业研究导航配置 - 2026-04-19
// ==========================================
const INDUSTRY_NAV_CONFIG_0419 = [
  {
    title: '核心判断',
    links: [
      { id: 'i_sec1', label: '三周期共振攻守转换' }
    ]
  },
  {
    title: '高胜率赛道',
    links: [
      { id: 'i_sec2', label: 'AI算力/半导体/光模块' },
      { id: 'i_sec3', label: '电动车/锂电/储能' },
      { id: 'i_sec4', label: '人形机器人/具身智能' }
    ]
  },
  {
    title: '跨赛道暗线',
    links: [
      { id: 'i_sec5', label: '土耳其禁硫黄买磷氟化工' },
      { id: 'i_sec6', label: '俄罗斯氦气管制买空分' },
      { id: 'i_sec7', label: 'AIDC缺电买燃气轮机/液冷' },
      { id: 'i_sec8', label: '锂价上行买隔膜/结构件' }
    ]
  },
  {
    title: '预期差与反转',
    links: [
      { id: 'i_sec9', label: 'CXO/创新药困境反转' },
      { id: 'i_sec10', label: '乳制品四底共振' },
      { id: 'i_sec11', label: '生猪养殖周期拐点' }
    ]
  },
  {
    title: '数据与监测',
    links: [
      { id: 'i_sec12', label: '大宗商品量价监测' },
      { id: 'i_sec13', label: '产业链周期估值监测' }
    ]
  },
  {
    title: '配置与风险',
    links: [
      { id: 'i_sec14', label: 'CIO 配置优先级' },
      { id: 'i_sec15', label: '风险提示' }
    ]
  }
];

function renderIndustryNav_0419() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0419.map(group => `
    <div>
      <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button
            onclick="scrollToSection('industry', '${link.id}')"
            class="nav-btn w-full text-left text-sm px-3 py-1.5 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center"
            data-section="${link.id}"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 flex-shrink-0"></div>
            ${link.label}
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
