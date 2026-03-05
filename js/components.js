// ==========================================
// 通用 UI 组件库
// ==========================================

/**
 * 交互卡片组件
 */
function InteractiveCard({ children, className = '', onClick = '' }) {
  // 处理 children 为 undefined 或 null 的情况
  const safeChildren = (children !== null && children !== undefined) ? children : '';

  const baseClasses = `
    bg-white rounded-2xl border border-slate-200/80
    shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)]
    transform transition-all duration-300 ease-out
    hover:-translate-y-1 hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.08)] hover:border-slate-300
    interactive-card
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (onClick) {
    return createElement('div', { className: baseClasses, onclick: onClick }, safeChildren);
  }
  return createElement('div', { className: baseClasses }, safeChildren);
}

/**
 * 章节标题组件
 */
function SectionHeader({ title, icon }) {
  const safeTitle = (title !== null && title !== undefined) ? title : '';
  const safeIcon = (icon !== null && icon !== undefined) ? icon : '';
  return createElement('h3', {
    className: 'text-xl font-black flex items-center text-slate-900 pb-1'
  }, `${safeIcon}<span class="ml-2.5">${safeTitle}</span>`);
}

/**
 * 日期分割线组件
 */
function DateSeparator({ date, isLatest }) {
  const safeDate = (date !== null && date !== undefined) ? date : '';
  const safeIsLatest = isLatest === true;
  const badgeClass = safeIsLatest
    ? 'bg-slate-900 text-white border-slate-800'
    : 'bg-white text-slate-800 border-slate-300';
  const iconColor = safeIsLatest ? 'text-red-400' : 'text-slate-700';
  const latestBadge = safeIsLatest
    ? '<span class="ml-1.5 text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded uppercase tracking-widest">最新发布</span>'
    : '';

  return `
    <div class="flex items-center space-x-3 mb-6 w-full opacity-0 animate-in slide-down">
      <div class="h-px bg-slate-300 flex-grow"></div>
      <div class="px-4 py-1.5 rounded-full text-xs font-black shadow-sm flex items-center border ${badgeClass}">
        ${createIcon('Calendar', `w-3.5 h-3.5 mr-1.5 ${iconColor}`)}
        ${safeDate}${latestBadge}
      </div>
      <div class="h-px bg-slate-300 flex-grow"></div>
    </div>
  `;
}

/**
 * 政策卡片组件
 */
function PolicyCard({ category, title, stocks }) {
  return InteractiveCard({
    className: '!p-5',
    children: `
      <div class="text-xs font-black text-slate-600 mb-1.5 uppercase tracking-widest">${category || ''}</div>
      <div class="text-base font-black text-slate-900 mb-2">${title || ''}</div>
      <div class="text-xs text-blue-800 font-black bg-blue-100 px-2.5 py-1 rounded w-fit border border-blue-200">${stocks || ''}</div>
    `
  });
}

/**
 * 新闻条目组件
 */
function NewsItem({ text, impact, focus, isNegative, isNeutral }) {
  let impactColor = 'bg-red-100 text-red-800 ring-red-200';
  if (isNegative) impactColor = 'bg-slate-200 text-slate-800 ring-slate-300';
  if (isNeutral) impactColor = 'bg-blue-100 text-blue-800 ring-blue-200';

  return `
    <div class="p-3 hover:bg-white rounded-lg transition-colors cursor-pointer border border-transparent hover:border-slate-200 hover:shadow-sm">
      <div class="font-bold text-slate-900 text-[14px] mb-2">${text || ''}</div>
      <div class="flex items-center space-x-2.5">
        <span class="text-xs font-black px-2 py-0.5 rounded ring-1 ${impactColor}">${impact || ''}</span>
        <span class="text-xs text-slate-700 font-bold">${focus || ''}</span>
      </div>
    </div>
  `;
}

/**
 * 时间线条目组件
 */
function TimelineItem({ time, event, level }) {
  const levelClass = level === 'S' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800';

  return `
    <li class="relative pl-5">
      <div class="absolute left-1 top-1.5 w-1.5 h-1.5 rounded-full bg-slate-500 ring-4 ring-white"></div>
      <div class="flex items-start justify-between">
        <div>
          <div class="text-xs font-black text-slate-600 mb-0.5 uppercase tracking-widest">${time || ''}</div>
          <div class="text-sm font-bold text-slate-900">${event || ''}</div>
        </div>
        <span class="text-xs font-black px-2 py-0.5 rounded ml-2 ${levelClass}">${level || ''}级</span>
      </div>
    </li>
  `;
}

/**
 * 逻辑流程卡片组件
 */
function LogicFlowCard({ title, steps, result, color }) {
  const colors = {
    red: 'bg-red-100 border-red-300 text-red-800',
    blue: 'bg-blue-100 border-blue-300 text-blue-800',
    yellow: 'bg-orange-100 border-orange-300 text-orange-900'
  };

  const safeTitle = (title !== null && title !== undefined) ? title : '';
  const safeSteps = Array.isArray(steps) ? steps : [];
  const safeResult = (result !== null && result !== undefined) ? result : '';
  const safeColor = (color !== null && color !== undefined) ? color : 'blue';

  const stepsHtml = safeSteps.map((step, i) => {
    const arrow = i < safeSteps.length - 1
      ? createIcon('ArrowRight', 'w-3.5 h-3.5 text-slate-500')
      : '';
    return `
      <span class="bg-slate-100 text-slate-900 px-2.5 py-1 rounded-md text-[12px] font-black border border-slate-300 shadow-sm">${step || ''}</span>
      ${arrow}
    `;
  }).join('');

  return InteractiveCard({
    className: '!p-5 flex flex-col md:flex-row md:items-center gap-4',
    children: `
      <div class="md:w-1/4">
        <h4 class="font-black text-slate-900 text-sm">${safeTitle}</h4>
      </div>
      <div class="md:w-1/2 flex flex-wrap items-center gap-2">
        ${stepsHtml}
      </div>
      <div class="md:w-1/4 flex items-center md:justify-end mt-2 md:mt-0">
        ${createIcon('ArrowRight', 'w-4 h-4 text-slate-400 mr-2 hidden md:block')}
        <span class="px-3 py-1.5 rounded-lg text-sm font-black border shadow-sm ${colors[safeColor] || colors.blue}">${safeResult}</span>
      </div>
    `
  });
}

/**
 * 赛道追踪卡片组件
 */
function TrackCard({ title, logic, stocks, children = '' }, extraChildren = '') {
  const safeTitle = (title !== null && title !== undefined) ? title : '';
  const safeLogic = (logic !== null && logic !== undefined) ? logic : '';
  const safeStocks = (stocks !== null && stocks !== undefined) ? stocks : '';
  const finalChildren = (children !== null && children !== undefined) ? children : (extraChildren || '');

  return InteractiveCard({
    className: '!p-6 relative overflow-hidden group',
    children: `
      <div class="flex flex-col md:flex-row md:items-start justify-between mb-5 gap-4">
        <div>
          <h4 class="text-lg font-black text-slate-900 mb-2.5 relative z-10">${safeTitle}</h4>
          <div class="text-xs font-black text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md w-fit border border-slate-300">
            核心标的：${safeStocks}
          </div>
        </div>
        <div class="md:max-w-[280px] text-sm font-bold text-red-900 bg-red-100/50 p-3 rounded-xl border border-red-200 leading-snug">
          ${safeLogic}
        </div>
      </div>
      <div class="relative z-10">${finalChildren}</div>
    `
  });
}

/**
 * 二阶博弈卡片组件
 */
function SecondaryPlayCard({ event, result, logic, cognitive, stocks }) {
  const eventParts = (event || '').split('→');

  return InteractiveCard({
    className: '!p-6',
    children: `
      <div class="flex items-center text-xs font-black text-slate-600 mb-3.5 uppercase tracking-widest">
        ${createIcon('ArrowRightLeft', 'w-3 h-3 mr-1.5')} 二阶博弈推演
      </div>
      <div class="flex flex-col mb-4">
        <span class="text-sm font-black text-slate-700 mb-1">${eventParts[0] || ''}</span>
        <div class="flex items-center text-slate-400 my-0.5">${createIcon('CornerDownRight', 'w-3.5 h-3.5 mr-1')}</div>
        <span class="font-black text-lg text-indigo-800">${result || ''}</span>
      </div>
      <p class="text-sm text-slate-900 mb-4 font-bold leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">${logic || ''}</p>
      <div class="text-xs text-slate-800 mb-4 flex items-start">
        <span class="bg-slate-200 text-slate-900 px-1.5 py-0.5 rounded font-black mr-2 text-[10px] whitespace-nowrap">认知差</span>
        <span class="font-bold">${cognitive || ''}</span>
      </div>
      <div class="text-sm font-black text-slate-900 border-t border-slate-200 pt-3">
        潜伏标的：<span class="text-indigo-700">${stocks || ''}</span>
      </div>
    `
  });
}

/**
 * 表格行组件 - 产业链估值
 */
function TableRow({ name, change, trend, phase, val, stocks }) {
  const trendColor = trend === 'up' ? 'text-red-700' : trend === 'down' ? 'text-green-700' : 'text-slate-700';

  return `
    <tr class="hover:bg-slate-100 transition-colors">
      <td class="px-5 py-4 font-black text-slate-900">${name || ''}</td>
      <td class="px-5 py-4 font-black ${trendColor}">${change || ''}</td>
      <td class="px-5 py-4 text-slate-800 font-bold text-sm">${phase || ''}</td>
      <td class="px-5 py-4 text-slate-800 font-bold text-sm">${val || ''}</td>
      <td class="px-5 py-4 text-sm font-black text-blue-800">${stocks || ''}</td>
    </tr>
  `;
}

/**
 * 表格行组件 - 大宗商品
 */
function TableRow2({ name, price, trend, isUp, isDown, desc, stocks }) {
  const tColor = isUp ? 'text-red-700' : isDown ? 'text-green-700' : 'text-slate-700';

  return `
    <tr class="hover:bg-slate-100 transition-colors">
      <td class="px-5 py-4 font-black text-slate-900">${name || ''}</td>
      <td class="px-5 py-4">
        <span class="font-black text-slate-900 text-sm">${price || ''}</span>
        <span class="text-xs font-black ml-1 ${tColor}">${trend || ''}</span>
      </td>
      <td class="px-5 py-4 text-slate-800 font-bold text-sm">${desc || ''}</td>
      <td class="px-5 py-4 text-sm font-black text-blue-800">${stocks || ''}</td>
    </tr>
  `;
}
