// ==========================================
// 日期配置与数据管理
// ==========================================

// 可用日期列表（按时间倒序，最新的在前）
const AVAILABLE_DATES = [
  { date: '2026-04-17', label: '2026 年 4 月 17 日', tag: 'latest', tagLabel: '最新' },
  { date: '2026-04-16', label: '2026 年 4 月 16 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-04-15', label: '2026 年 4 月 15 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-04-13', label: '2026 年 4 月 13 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-04-10', label: '2026 年 4 月 10 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-04-09', label: '2026 年 4 月 9 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-04-08', label: '2026 年 4 月 8 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-04-07', label: '2026 年 4 月 7 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-04-03', label: '2026 年 4 月 3 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-04-02', label: '2026 年 4 月 2 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-04-01', label: '2026 年 4 月 1 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-31', label: '2026 年 3 月 31 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-30', label: '2026 年 3 月 30 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-27', label: '2026 年 3 月 27 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-26', label: '2026 年 3 月 26 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-25', label: '2026 年 3 月 25 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-24', label: '2026 年 3 月 24 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-23', label: '2026 年 3 月 23 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-22', label: '2026 年 3 月 22 日', tag: 'history', tagLabel: '历史' },
  { date: '2026-03-20', label: '2026 年 3 月 20 日', tag: 'history', tagLabel: '历史' },
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

// 当前选中日期（2026-04-17 最新）
let currentDate = '2026-04-17';
