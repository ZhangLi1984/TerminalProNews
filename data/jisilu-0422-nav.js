// ==========================================
// 集思录导航模块 - 2026年4月22日
// ==========================================

const JISILU_NAV_CONFIG_0422 = [
  { title: '热门话题', links: [
    { id: 'j_sec1', label: '闻泰转债ST危机' },
    { id: 'j_sec2', label: '股指期货吃贴水' },
    { id: 'j_sec3', label: '小市值可转债轮动' },
    { id: 'j_sec4', label: 'ETF轮动与基金实盘' },
    { id: 'j_sec5', label: '北交所打新热潮' },
    { id: 'j_sec6', label: '年度投资总结' },
    { id: 'j_sec7', label: '转债三傻困境' },
    { id: 'j_sec8', label: '黄金/商品期权' },
    { id: 'j_sec9', label: 'ETF期权卖方策略' },
    { id: 'j_sec10', label: '美股SOXL长期投资' }
  ] },
  { title: '投资方法论', links: [
    { id: 'j_sec11', label: '股指期货贴水套利' },
    { id: 'j_sec12', label: '小市值可转债轮动' },
    { id: 'j_sec13', label: 'ETF趋势轮动' },
    { id: 'j_sec14', label: '全天候分散配置' },
    { id: 'j_sec15', label: '期权卖方/波动率' },
    { id: 'j_sec16', label: '可转债多因子轮动' },
    { id: 'j_sec17', label: '北交所打新策略' }
  ] },
  { title: '热议标的', links: [{ id: 'j_sec18', label: '10个标的详细分析' }] },
  { title: '市场情绪', links: [
    { id: 'j_sec28', label: '情绪观察与评分' },
    { id: 'j_sec31', label: '热点轮动排序' }
  ] },
  { title: '争议与分歧', links: [{ id: 'j_sec32', label: '5大争议话题' }] },
  { title: '风险提示', links: [{ id: 'j_sec37', label: '7项具体风险' }] },
  { title: '下周关注', links: [{ id: 'j_sec44', label: '10项关注事件' }] }
];

function renderJisiluNav_0422() {
  const container = document.getElementById('jisilu-nav-content');
  if (!container) return;

  container.innerHTML = JISILU_NAV_CONFIG_0422.map(group => `
    <div>
      <h4 class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map(link => `
          <button onclick="scrollToSection('jisilu','${link.id}')" data-section="${link.id}"
            class="nav-btn w-full text-left text-sm px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-all flex items-start gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-transparent mt-1.5 flex-shrink-0"></div>
            <span class="leading-tight">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
