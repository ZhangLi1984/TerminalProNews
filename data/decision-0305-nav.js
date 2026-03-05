// ==========================================
// 文档：投资决策内参 - 导航配置 (2026-03-05版)
// 自动生成时间：2026-03-05 16:42
// ==========================================

const DECISION_NAV_CONFIG_03-05 = [
  { title: '全局视野', links: [{ id: 'sec1', label: '核心主线' }, { id: 'sec2', label: '关键推演' }, { id: 'sec3', label: '操作方向' }] },
  { title: 'S 级推演', links: [{ id: 'sec1', label: '事件 1：中东局势恐慌缓解，亚太股市...' }, { id: 'sec2', label: '事件 2：特朗普提名凯文·沃什出任美...' }, { id: 'sec3', label: '事件 3：天然气价格暴涨，欧洲化工竞...' }] },
  { title: 'A 级事件', links: [{ id: 'sec1', label: '科技/AI/半导体' }, { id: 'sec2', label: '新能源/汽车' }, { id: 'sec3', label: '周期/资源品' }, { id: 'sec4', label: '政策/两会' }] },
  { title: '热点赛道', links: [{ id: 'sec1', label: 'AI/算力产业链' }, { id: 'sec2', label: '机器人/智能驾驶' }, { id: 'sec3', label: '半导体/芯片' }] },
  { title: '热点赛道', links: [{ id: 'sec1', label: '传导链 1：中东局势 → 能源价格 ...' }, { id: 'sec2', label: '传导链 2：美联储人事 → 美债收益...' }, { id: 'sec3', label: '传导链 3：AI 推理需求 → 算力...' }, { id: 'sec4', label: '传导链 4：铝价大涨 → 中游加工利...' }] },
  { title: '前瞻风控', links: [{ id: 'sec1', label: '宏观数据/事件' }, { id: 'sec2', label: '公司财报/公告' }, { id: 'sec3', label: '技术面关键位' }] },
];

/**
 * 渲染侧边导航
 */
function renderDecisionNav_03-05() {
  const container = document.getElementById('decision-nav-content');
  if (!container) return;

  container.innerHTML = DECISION_NAV_CONFIG_03-05.map((group, idx) => `
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
