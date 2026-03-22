// ==========================================
// 期货市场分析内容渲染 - 2026-03-23
// ==========================================

function renderFuturesContent_0323() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 标题 -->
    <div class="text-center mb-10">
      <h1 class="text-3xl font-black text-slate-900 mb-2">2026 年 3 月 23 日 期货市场报告</h1>
      <p class="text-lg text-orange-600 font-bold">温馨提示</p>
      <p class="text-sm text-slate-500 mt-2">内部参阅</p>
    </div>

    <!-- 提示内容 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-orange-600 rounded-full mr-3"></span>报告说明
    </h2>

    <h3 id="f_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">今日暂无期货市场报告</h3>

    <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-8 my-6 rounded-r-xl text-center">
      <div class="text-6xl mb-4">📊</div>
      <h4 class="text-amber-800 font-black text-xl mb-3">今日暂无期货市场报告</h4>
      <p class="text-amber-900 mb-4">
        抱歉，今日（2026 年 3 月 23 日）暂无期货市场分析报告生成。
      </p>
      <div class="text-amber-700 text-sm space-y-2">
        <p>可能原因：</p>
        <ul class="text-left inline-block">
          <li>• 期货数据源暂未更新</li>
          <li>• 周末/节假日休市</li>
          <li>• 系统正在维护中</li>
        </ul>
      </div>
      <div class="mt-6 pt-6 border-t border-amber-200">
        <p class="text-amber-700 text-sm">
          建议您查看其他模块获取最新投资资讯，或稍后再试。
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      <a href="#decision-doc" onclick="switchTab('decision')" class="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
        <div class="text-4xl mb-3">📈</div>
        <h4 class="font-black text-red-800 mb-2">投资决策内参</h4>
        <p class="text-red-700 text-sm">查看今日核心策略</p>
      </a>

      <a href="#broker-doc" onclick="switchTab('broker')" class="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
        <div class="text-4xl mb-3">📰</div>
        <h4 class="font-black text-blue-800 mb-2">券商晨报汇总</h4>
        <p class="text-blue-700 text-sm">11 家券商观点</p>
      </a>

      <a href="#jisilu-doc" onclick="switchTab('jisilu')" class="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
        <div class="text-4xl mb-3">💬</div>
        <h4 class="font-black text-amber-800 mb-2">集思录洞察</h4>
        <p class="text-amber-700 text-sm">散户热门讨论</p>
      </a>
    </div>

  </div>`;
}
