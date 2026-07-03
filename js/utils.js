// ==========================================
// 工具函数库
// ==========================================

/**
 * 图标 SVG 映射表
 */
const Icons = {
  TrendingUp: '<polygon points="23 6 13.5 15.5 8.5 10.5 1 18 2.41 19.41 8.5 13.41 13.5 18.41 24.41 7.5"/>',
  TrendingDown: '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6 2.41 7.41 8.5 11.41 13.5 6.41 24.41 17.41"/>',
  Zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  Search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  BarChart2: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  Globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  ShieldAlert: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  Layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  Clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  ChevronRight: '<polyline points="9 18 15 12 9 6"/>',
  ChevronDown: '<polyline points="6 9 12 15 18 9"/>',
  Activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  ArrowRightLeft: '<line x1="20" y1="17" x2="4" y2="17"/><polyline points="10 11 4 17 10 23"/><line x1="4" y1="7" x2="20" y2="7"/><polyline points="14 23 20 17 14 11"/>',
  ArrowRight: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  Flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  Cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
  Target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  Crosshair: '<circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/>',
  Anchor: '<circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>',
  List: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
  CornerDownRight: '<polyline points="15 10 20 15 15 20"/><path d="M4 4v7a4 4 0 0 0 4 4h12"/>',
  PieChart: '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
  Calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  CheckCircle2: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  Info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
  AlertTriangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'
};

/**
 * 创建 SVG 图标元素
 * @param {string} name - 图标名称
 * @param {string} className - 额外 CSS 类名
 * @returns {string} SVG HTML 字符串
 */
function createIcon(name, className = 'w-5 h-5') {
  const pathData = Icons[name] || Icons.Activity;
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${pathData}</svg>`;
}

/**
 * 创建元素
 * @param {string} tag - HTML 标签名
 * @param {object} props - 属性对象
 * @param {string|Array} children - 子元素
 * @returns {string} HTML 字符串
 */
function createElement(tag, props = {}, children = '') {
  const { className, innerHTML, ...restProps } = props;

  let propsStr = '';
  if (className) {
    propsStr += ` class="${className}"`;
  }

  for (const [key, value] of Object.entries(restProps)) {
    if (value !== null && value !== undefined) {
      const propKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      propsStr += ` ${propKey}="${value}"`;
    }
  }

  const selfClosingTags = ['img', 'input', 'br', 'hr', 'meta', 'link'];
  if (selfClosingTags.includes(tag)) {
    return `<${tag}${propsStr} />`;
  }

  // 处理 children 为 undefined 或 null 的情况
  let content = '';
  if (innerHTML) {
    content = innerHTML;
  } else if (Array.isArray(children)) {
    content = children.filter(c => c !== null && c !== undefined).join('');
  } else if (children !== null && children !== undefined) {
    content = children;
  }

  return `<${tag}${propsStr}>${content}</${tag}>`;
}

/**
 * 数组转 HTML
 * @param {Array} arr - HTML 字符串数组
 * @returns {string} 拼接后的 HTML
 */
function joinHTML(arr) {
  return Array.isArray(arr) ? arr.join('') : arr;
}

/**
 * 平滑滚动到元素
 * @param {string} elementId - 元素 ID
 */
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

/**
 * 格式化时间
 * @param {Date} date - 日期对象
 * @returns {string} 格式化后的时间字符串
 */
function formatTime(date) {
  return date.toLocaleTimeString('zh-CN', { hour12: false });
}

/**
 * 更新时钟显示
 */
function updateClock() {
  const clockEl = document.getElementById('clock-display');
  if (clockEl) {
    clockEl.textContent = formatTime(new Date());
  }
}

// ==========================================
// 日期选择器功能
// ==========================================

/**
 * 渲染日期列表
 */
function renderDateList(filter = '') {
  const listEl = document.getElementById('date-list');
  const noResultsEl = document.getElementById('date-no-results');
  const clearBtn = document.getElementById('date-search-clear');
  if (!listEl) return;

  const filtered = AVAILABLE_DATES.filter(item => {
    if (!filter) return true;
    const f = filter.toLowerCase();
    return item.date.toLowerCase().includes(f)
      || item.label.toLowerCase().includes(f)
      || item.date.slice(5).replace('-', '').includes(f)
      || item.date.slice(8).includes(f);
  });

  if (filtered.length === 0) {
    listEl.innerHTML = '';
    noResultsEl.classList.remove('hidden');
    return;
  }

  noResultsEl.classList.add('hidden');

  if (clearBtn) {
    clearBtn.classList.toggle('hidden', !filter);
  }

  const currentDisplayDate = (typeof currentDate !== 'undefined') ? currentDate : '2026-05-06';

  listEl.innerHTML = filtered.map(item => {
    const isSelected = item.date === currentDisplayDate;
    const tagClass = item.tag === 'latest'
      ? 'bg-slate-900 text-white'
      : 'bg-slate-100 text-slate-600';
    const bgClass = isSelected ? 'bg-slate-50 border-l-[3px] border-slate-900' : 'hover:bg-slate-50 border-l-[3px] border-transparent';

    return `
      <div class="flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${bgClass}"
           onclick="selectDate('${item.date}')">
        <div class="flex items-center space-x-3">
          <span class="text-sm font-bold ${isSelected ? 'text-slate-900' : 'text-slate-700'}">${item.label}</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded font-black uppercase tracking-wider ${tagClass}">${item.tagLabel}</span>
        </div>
        ${isSelected ? '<svg class="w-4 h-4 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
      </div>
    `;
  }).join('');
}

/**
 * 切换日期下拉菜单
 */
function toggleDateDropdown() {
  const dropdown = document.getElementById('date-dropdown');
  if (!dropdown) return;

  const isHidden = dropdown.classList.contains('hidden');
  if (isHidden) {
    dropdown.classList.remove('hidden');
    renderDateList();
    const input = document.getElementById('date-search-input');
    if (input) {
      input.value = '';
      input.focus();
    }
  } else {
    dropdown.classList.add('hidden');
  }
}

/**
 * 过滤日期列表
 */
function filterDateList(value) {
  const listEl = document.getElementById('date-list');
  const noResultsEl = document.getElementById('date-no-results');
  const clearBtn = document.getElementById('date-search-clear');
  if (!listEl) return;

  const filter = (value || '').trim();
  const filtered = AVAILABLE_DATES.filter(item => {
    if (!filter) return true;
    const f = filter.toLowerCase();
    return item.date.toLowerCase().includes(f)
      || item.label.toLowerCase().includes(f)
      || item.date.slice(5).replace('-', '').includes(f)
      || item.date.slice(8).includes(f);
  });

  if (filtered.length === 0) {
    listEl.innerHTML = '';
    if (noResultsEl) noResultsEl.classList.remove('hidden');
    return;
  }

  if (noResultsEl) noResultsEl.classList.add('hidden');
  if (clearBtn) clearBtn.classList.toggle('hidden', !filter);

  const currentDisplayDate = (typeof AppState !== 'undefined') ? AppState.currentDate : '2026-07-02';

  listEl.innerHTML = filtered.map(item => {
    const isSelected = item.date === currentDisplayDate;
    const bgClass = isSelected ? 'bg-red-50 hover:bg-red-100' : 'hover:bg-slate-50';
    return `
      <div class="date-item px-4 py-3 cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0 ${bgClass}"
           onclick="selectDate('${item.date}')">
        <div class="flex items-center justify-between">
          <span class="text-sm font-medium text-slate-700">${item.label}</span>
          ${item.tag === 'latest' ? '<span class="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">最新</span>' : ''}
        </div>
      </div>
    `;
  }).join('');
}

/**
 * 清空日期搜索
 */
function clearDateSearch() {
  const input = document.getElementById('date-search-input');
  if (input) {
    input.value = '';
    renderDateList();
  }
}

/**
 * 设置日期下拉监听（点击外部关闭）
 */
function setupDateDropdownListener() {
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('date-dropdown');
    const btn = document.getElementById('date-selector-btn');
    if (dropdown && !dropdown.classList.contains('hidden') && !dropdown.contains(e.target) && btn && !btn.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });
}
