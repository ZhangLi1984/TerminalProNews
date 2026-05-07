// ==========================================
// 期货市场内容渲染 - 2026-05-08
// ==========================================

function renderFuturesContent_0508() {
  return `<div class="prose prose-slate max-w-none">

    <div class="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 mb-8 text-white shadow-lg">
      <h1 class="text-3xl font-black mb-2">期货市场分析报告 | 2026年5月8日</h1>
      <p class="text-orange-100 text-sm">今日暂无专属期货数据模块，以下为基于宏观数据的品种观察</p>
    </div>

    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-orange-600 rounded-full mr-3"></span>今日期货市场摘要</h2>

    <h3 id="sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">主要品种价格观察</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">品种</th>
            <th class="px-4 py-3 text-center">最新价</th>
            <th class="px-4 py-3 text-center">趋势</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-orange-50"><td class="px-4 py-3 font-bold text-orange-900">布伦特原油</td><td class="px-4 py-3 text-center font-bold">~90-100美元</td><td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs font-bold">下跌</span></td><td class="px-4 py-3 text-sm">美伊缓和预期，WTI跌破90美元，但霍尔木兹通行仍受限</td></tr>
          <tr><td class="px-4 py-3 font-bold">动力煤(Q5500)</td><td class="px-4 py-3 text-center font-bold">803-811元/吨</td><td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-bold">上涨</span></td><td class="px-4 py-3 text-sm">供给约束强化，淡季不淡，油煤比价扩大</td></tr>
          <tr class="bg-green-50"><td class="px-4 py-3 font-bold text-green-900">碳酸锂</td><td class="px-4 py-3 text-center font-bold">17.7万元/吨</td><td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-bold">上涨</span></td><td class="px-4 py-3 text-sm">年初至今+48.1%，储能需求爆发</td></tr>
          <tr><td class="px-4 py-3 font-bold">生猪期货</td><td class="px-4 py-3 text-center">磨底中</td><td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs font-bold">震荡</span></td><td class="px-4 py-3 text-sm">Q1亏损75亿，产能去化加速，周期底部</td></tr>
        </tbody>
      </table>
    </div>

    <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-orange-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">📈</span>品种分析</h4>
      <p class="text-orange-900 mb-3"><strong>原油：</strong>美伊缓和预期导致油价短期大幅回调，但霍尔木兹海峡通行仍受伊朗控制，中东地缘风险并未真正解除。建议关注90美元支撑位和100美元压力位。</p>
      <p class="text-orange-900 mb-3"><strong>煤炭：</strong>供给端超产核查+核减产能持续，需求端火电同比转正，煤化工路线成本优势凸显。淡季不淡格局下，煤价仍有上行空间。</p>
      <p class="text-orange-900"><strong>碳酸锂：</strong>储能需求爆发+行业扩产克制，通缩向通胀切换。Q2起锂电材料业绩同环比持续高增概率大。</p>
    </div>

    <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-green-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🎯</span>交易机会</h4>
      <p class="text-green-900"><strong>做多机会：</strong>动力煤(供给约束+油煤比价)、碳酸锂(储能需求爆发+扩产克制)</p>
      <p class="text-green-900 mt-2"><strong>做空机会：</strong>生猪(左侧等待反转信号确认后再做多)</p>
      <p class="text-green-900 mt-2"><strong>风险提示：</strong>霍尔木兹海峡通行恢复情况、美联储政策变动、地缘冲突升级</p>
    </div>

    <div class="text-center text-slate-400 text-sm mt-12 pt-6 border-t border-slate-200">
      <p>报告生成时间：2026-05-08</p>
    </div>

  </div>`;
}
