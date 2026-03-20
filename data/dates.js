// ==========================================
// 日期配置与数据管理
// ==========================================

// 可用日期列表（按时间倒序，最新的在前）
const AVAILABLE_DATES = [
  { date: '2026-03-20', label: '2026 年 3 月 20 日', tag: 'latest', tagLabel: '最新' },
  { date: '2026-03-19', label: '2026 年 3 月 19 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-18', label: '2026 年 3 月 18 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-17', label: '2026 年 3 月 17 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-16', label: '2026 年 3 月 16 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-13', label: '2026 年 3 月 13 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-12', label: '2026 年 3 月 12 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-11', label: '2026 年 3 月 11 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-10', label: '2026 年 3 月 10 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-09', label: '2026 年 3 月 9 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-08', label: '2026 年 3 月 8 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-07', label: '2026 年 3 月 7 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-06', label: '2026 年 3 月 6 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-05', label: '2026 年 3 月 5 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-04', label: '2026 年 3 月 4 日', tag: 'history', tagLabel: '历史' }
];

// 当前选中日期（2026-03-20 最新）
let currentDate = '2026-03-20';
