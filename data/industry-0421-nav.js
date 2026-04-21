// ==========================================
// 行业研究导航 - 2026-04-21
// ==========================================

const INDUSTRY_NAV_CONFIG_0421 = [
  { title: '市场概览', links: [{ id: 'i_sec1', label: '地缘扰动下的结构性牛市' }] },
  { title: 'S 级行业', links: [
    { id: 'i_sec2', label: 'AI/算力/半导体' }
  ] },
  { title: 'A 级行业', links: [
    { id: 'i_sec3', label: '周期/有色/石油' },
    { id: 'i_sec4', label: '机械/机器人/工程机械' },
    { id: 'i_sec5', label: '传媒/游戏' }
  ] },
  { title: 'B+ 级行业', links: [
    { id: 'i_sec6', label: '医药生物' },
    { id: 'i_sec7', label: '新能源/锂电' }
  ] },
  { title: 'B 级行业', links: [
    { id: 'i_sec8', label: '消费/零售' },
    { id: 'i_sec9', label: '房地产/建材' },
    { id: 'i_sec10', label: '金融' },
    { id: 'i_sec11', label: '公用事业/电力' }
  ] },
  { title: 'C+ 级行业', links: [{ id: 'i_sec12', label: '农林牧渔' }] },
  { title: '五大主线', links: [{ id: 'i_sec13', label: '最值得关注的投资主线' }] },
  { title: '数据监测', links: [
    { id: 'i_sec14', label: '大宗量价监测表' },
    { id: 'i_sec15', label: '产业链估值监测表' }
  ] },
  { title: 'CIO 洞察', links: [{ id: 'i_sec16', label: 'CIO 深度投资判断' }] },
  { title: '风险提示', links: [{ id: 'i_sec17', label: '六大风险提示' }] }
];

function renderIndustryNav_0421() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_0421.map(group => `
    <div>
      <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('industry','${link.id}')" data-section="${link.id}"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-all flex items-start gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mt-1.5 flex-shrink-0"></div>
            <span class="leading-tight">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
