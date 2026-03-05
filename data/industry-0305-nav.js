// ==========================================
// 文档：行业研究报告 - 导航配置 (2026-03-05版)
// 自动生成时间：2026-03-05 16:42
// ==========================================

const INDUSTRY_NAV_CONFIG_03-05 = [
  { title: '核心要点', links: [{ id: 'sec1', label: '**AI 算力与光通信** - **...' }, { id: 'sec2', label: '**人形机器人** - **核心逻辑...' }, { id: 'sec3', label: '**医药供给端重构** - **核心...' }] },
  { title: '核心要点', links: [{ id: 'sec1', label: '**暗线一：煤炭地缘溢价 → 化工品...' }, { id: 'sec2', label: '**暗线二：生猪产能去化 → 动保需...' }, { id: 'sec3', label: '**暗线三：新能源车购置税退坡 → ...' }, { id: 'sec4', label: '**暗线四：商业航天回收试验 → 卫...' }] },
  { title: '核心要点', links: [{ id: 'sec1', label: '**生猪养殖** - **周期底部右...' }, { id: 'sec2', label: '**保险板块** - **AI 冲击...' }, { id: 'sec3', label: '**农林牧渔之白羽肉鸡** - **...' }] },
  { title: '核心要点', links: [{ id: 'sec1', label: '**券商与财富管理** - **交易...' }, { id: 'sec2', label: '**商用车出口** - **海外市场...' }] },
  { title: '核心要点', links: [{ id: 'sec1', label: '**事件一：3 月两会政策预期**' }, { id: 'sec2', label: '**事件二：英伟达 GTC 大会（2...' }, { id: 'sec3', label: '**事件三：美联储议息会议（3 月）**' }] },
  { title: '中游制造', links: [{ id: 'sec1', label: '中游制造' }] },
];

/**
 * 渲染侧边导航
 */
function renderIndustryNav_03-05() {
  const container = document.getElementById('industry-nav-content');
  if (!container) return;

  container.innerHTML = INDUSTRY_NAV_CONFIG_03-05.map((group, idx) => `
    <div class="animate-in slide-left" style="animation-delay: ${idx * 80}ms; animation-fill-mode: both;">
      <h4 class="text-[12px] font-black text-slate-800 uppercase tracking-widest mb-2.5 pl-2">${group.title}</h4>
      <div class="space-y-1">
        ${group.links.map((link, linkIdx) => `
          <button
            onclick="scrollToElement('sec${linkIdx + 1}'); updateActiveNav('sec${linkIdx + 1}');"
            class="nav-btn w-full flex items-center px-3 py-2 rounded-xl text-sm font-bold transition-all duration-200 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
            data-section="sec${linkIdx + 1}"
          >
            <div class="w-1.5 h-1.5 rounded-full mr-2.5 transition-colors bg-transparent"></div>
            <span class="truncate">${link.label}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}
