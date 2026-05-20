// 行业研究导航 - 2026-05-21
const INDUSTRY_NAV_CONFIG_0521 = [
  { title: 'S级核心赛道', links: [
    { id: 'i_sec1', label: 'AI算力基础设施 & 存储 (S+)' },
    { id: 'i_sec2', label: '碳化硅SiC (S)' },
    { id: 'i_sec3', label: '半导体设备/材料 (S)' },
  ]},
  { title: 'A级高景气', links: [
    { id: 'i_sec4', label: '锂电/储能产业链 (A+)' },
    { id: 'i_sec5', label: '工程机械 (A+)' },
    { id: 'i_sec6', label: '煤炭/煤化工 (A)' },
    { id: 'i_sec7', label: '电力设备/电网/SST (A)' },
    { id: 'i_sec8', label: '化工（基础化工+石化）(A-)' },
    { id: 'i_sec9', label: '商业航天 (A-)' },
  ]},
  { title: 'B/C级配置', links: [
    { id: 'i_sec10', label: '医药（创新药+CXO）(B+)' },
    { id: 'i_sec11', label: '保险 (B+)' },
    { id: 'i_sec12', label: '券商 (B+)' },
    { id: 'i_sec13', label: '人形机器人 (B)' },
    { id: 'i_sec14', label: '传媒/游戏/AI应用 (B)' },
    { id: 'i_sec15', label: '房地产 (C+)' },
    { id: 'i_sec16', label: '生猪养殖 (C+)' },
    { id: 'i_sec17', label: '白酒 (C)' },
    { id: 'i_sec18', label: '航空运输 (C)' },
  ]},
  { title: '暗线与监测', links: [
    { id: 'i_sec19', label: '核心投资暗线（三条）' },
    { id: 'i_sec20', label: '大宗商品量价监测表' },
    { id: 'i_sec21', label: '产业链周期估值监测' },
    { id: 'i_sec22', label: '总监级四大核心结论' },
  ]},
];

function renderIndustryNav_0521() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;
  container.innerHTML = INDUSTRY_NAV_CONFIG_0521.map((cat, ci) => `
    <div>
      <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">${cat.title}</h4>
      <div class="space-y-1">
        ${cat.links.map(link => `
          <button onclick="scrollToSection('${link.id}', 'industry'); updateActiveNav('${link.id}')"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 text-slate-700 hover:bg-slate-100 flex items-center group"
            data-section="${link.id}">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mr-2 group-hover:bg-red-500 transition-colors flex-shrink-0"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
