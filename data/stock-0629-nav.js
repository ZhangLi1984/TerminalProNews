// ==========================================
// 个股研报导航配置 - 2026-06-29
// ==========================================

const STOCK_NAV_CONFIG_0629 = [
  {
    title: '🏆 S 级标的',
    links: [
      { id: 's_sec1', label: '盐津铺子 - 平台化零食龙头' },
      { id: 's_sec2', label: '广钢气体 - 电子大宗气自主龙头' },
      { id: 's_sec3', label: '中熔电气 - 800V高压平台熔断器' },
      { id: 's_sec4', label: '长川科技 - 半导体ATE测试龙头' },
      { id: 's_sec5', label: '隆源股份 - 铝合金压铸小巨人' },
      { id: 's_sec6', label: '恒誉环保 - 热裂解设备龙头' }
    ]
  },
  {
    title: '🎯 A 级标的',
    links: [
      { id: 'a_sec1', label: '泛亚微透 - CMD需求爆发' },
      { id: 'a_sec2', label: '力盛体育 - 赛车IP商业化' },
      { id: 'a_sec3', label: '江天科技 - 标签印刷领军' },
      { id: 'a_sec4', label: '新澳股份 - 毛精纺龙头' },
      { id: 'a_sec5', label: '海博思创 - 储能系统龙头' },
      { id: 'a_sec6', label: '泰凯英 - 矿山轮胎领军' },
      { id: 'a_sec7', label: '晶合集成 - 晶圆代工全球第九' },
      { id: 'a_sec8', label: '华虹宏力 - 成熟制程晶圆代工' },
      { id: 'a_sec9', label: '恩捷股份 - 锂电隔膜龙头' },
      { id: 'a_sec10', label: '泽璟制药-U - DLL3 TCE抗体' },
      { id: 'a_sec11', label: '蓝思科技 - 消费电子玻璃龙头' },
      { id: 'a_sec12', label: '博力威 - 聚合物锂电池' },
      { id: 'a_sec13', label: '科远智慧 - 工业自动化DCS' },
      { id: 'a_sec14', label: '华亚智能 - 半导体设备结构件' },
      { id: 'a_sec15', label: '众鑫股份 - 纸浆模塑龙头' },
      { id: 'a_sec16', label: '卧龙电驱 - 电机驱动一体化' },
      { id: 'a_sec17', label: '立昂微 - 硅片+功率器件' },
      { id: 'a_sec18', label: '三一重能 - 风电整机龙头' }
    ]
  },
  {
    title: '📋 评级汇总表',
    links: [
      { id: 's_summary', label: '完整评级榜单 (100 篇)' }
    ]
  },
  {
    title: '📊 行业分布',
    links: [
      { id: 's_distribution', label: '行业统计与仓位建议' }
    ]
  }
];

function renderStockNav_0629() {
  const container = document.getElementById('stock-nav-content');
  if (!container) return;
  container.innerHTML = STOCK_NAV_CONFIG_0629.map(section => `
    <div class="mb-5">
      <h3 class="text-xs font-black text-slate-500 uppercase tracking-wider mb-2 px-2">${section.title}</h3>
      <div class="space-y-1">
        ${section.links.map(link => `
          <button class="nav-btn w-full flex items-center px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded-md transition-all" data-section="${link.id}" onclick="document.getElementById('${link.id}').scrollIntoView({behavior:'smooth',block:'start'})">
            <div class="w-1 h-1 rounded-full bg-transparent mr-2"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
