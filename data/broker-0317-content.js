// ==========================================
// 券商晨报内容模块 - 2026-03-17
// ==========================================

function renderBrokerContent_0317() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 报告头部 -->
    <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-600 p-6 my-6 rounded-r-xl">
      <h2 class="text-cyan-800 font-black text-xl mb-2">券商晨报买方汇总内参</h2>
      <p class="text-cyan-700 text-sm">报告日期：2026 年 3 月 17 日 | 数据来源：各大券商研究所</p>
    </div>

    <!-- 提示框 -->
    <div class="bg-amber-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-amber-800 font-bold mb-2 flex items-center">
        <span class="text-lg mr-2">📝</span>说明
      </h4>
      <p class="text-amber-900 text-sm">
        本模块汇总各大券商晨报精华观点。今日重点聚焦英伟达 GTC 大会催化、中东地缘局势、氢能政策落地等核心事件。
        详细内容请参考投资决策内参与行业研究模块。
      </p>
    </div>

    <!-- 核心观点 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-cyan-600 rounded-full mr-3"></span>核心观点
    </h2>

    <h3 id="sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">策略研判</h3>
    <div class="bg-blue-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <p class="text-blue-900 text-base leading-relaxed">
        <strong class="text-blue-700">中信证券：</strong>市场处于"地缘驱动 + 政策催化"双轮驱动格局，
        建议关注 AI 算力链、储能、人形机器人三条主线。中东局势推升油价，周期品迎来配置窗口。
      </p>
    </div>

    <div class="bg-green-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <p class="text-green-900 text-base leading-relaxed">
        <strong class="text-green-700">中金公司：</strong>英伟达 GTC 大会催化 AI 算力链，
        光模块、液冷、存储芯片受益。维持科技成长超配判断。
      </p>
    </div>

    <h3 id="sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">行业配置建议</h3>
    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">机构</th>
            <th class="px-4 py-3 text-left">超配行业</th>
            <th class="px-4 py-3 text-left">低配行业</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-medium">中信证券</td>
            <td class="px-4 py-3 text-green-600">AI 算力、储能、机器人</td>
            <td class="px-4 py-3 text-red-600">传统地产、生猪</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-medium">中金公司</td>
            <td class="px-4 py-3 text-green-600">科技成长、半导体</td>
            <td class="px-4 py-3 text-red-600">银行、公用事业</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-medium">华泰证券</td>
            <td class="px-4 py-3 text-green-600">券商、海风出海</td>
            <td class="px-4 py-3 text-red-600">光伏、消费电子</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 个股评级 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-cyan-600 rounded-full mr-3"></span>个股评级追踪
    </h2>

    <h3 id="sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">首次覆盖</h3>
    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">股票</th>
            <th class="px-4 py-3 text-left">机构</th>
            <th class="px-4 py-3 text-center">评级</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-medium">佰维存储</td>
            <td class="px-4 py-3">中信证券</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">买入</span></td>
            <td class="px-4 py-3 text-sm">存储芯片涨价周期，业绩弹性大</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-medium">华电重工</td>
            <td class="px-4 py-3">中金公司</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">增持</span></td>
            <td class="px-4 py-3 text-sm">氢能电解槽设备，华电集团订单保障</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-medium">大金重工</td>
            <td class="px-4 py-3">华泰证券</td>
            <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">买入</span></td>
            <td class="px-4 py-3 text-sm">欧洲塔筒市占率第一，海外产能释放</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">评级上调</h3>
    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">股票</th>
            <th class="px-4 py-3 text-left">机构</th>
            <th class="px-4 py-3 text-center">调整</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-medium">中际旭创</td>
            <td class="px-4 py-3">中信证券</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">增持→买入</span></td>
            <td class="px-4 py-3 text-sm">1.6T 光模块订单饱满，GTC 大会催化</td>
          </tr>
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 font-medium">阳光电源</td>
            <td class="px-4 py-3">中金公司</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">中性→增持</span></td>
            <td class="px-4 py-3 text-sm">储能系统集成龙头，海外占比高</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-8 pt-6 border-t border-slate-200 text-center text-slate-500 text-xs">
      <p>数据来源：各大券商研究所 | 免责声明：本报告仅供参考，不构成投资建议</p>
    </div>

  </div>`;
}
