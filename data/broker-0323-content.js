// ==========================================
// 券商晨报内容渲染 - 2026 年 3 月 23 日
// 数据来源：11 家券商晨报（华源、东兴、英大、国新、东海、金元、第一创业、万联、东吴、开源、国信）
// ==========================================

function renderBrokerContent_0323() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 报告头信息 -->
    <div class="bg-gradient-to-r from-slate-50 to-slate-100 border-l-4 border-slate-500 p-5 my-6 rounded-r-xl">
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-xl font-black text-slate-900 m-0 flex items-center">
          <span class="w-2 h-8 bg-slate-600 rounded-full mr-3"></span>
          券商晨报买方汇总内参
        </h2>
        <span class="text-sm font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">2026 年 3 月 23 日</span>
      </div>
      <p class="text-slate-600 text-sm m-0">
        <span class="font-semibold">数据来源：</span>华源证券、东兴证券、英大证券、国新证券、东海证券、金元证券、第一创业、万联证券、东吴证券、开源证券、国信证券等 11 家券商晨报
      </p>
    </div>

    <!-- 一、执行摘要 -->
    <h2 id="b_sec1" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>
      一、执行摘要
    </h2>

    <div class="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 my-6 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-3 flex items-center text-lg">
        <span class="text-xl mr-2">📊</span>市场共识
      </h4>
      <p class="text-red-900 leading-relaxed">
        中东地缘冲突引发全球风险资产承压，A 股短期延续震荡调整，沪指 4000 点关口反复争夺。美联储维持利率不变但降息预期降温，国内央行强调适度宽松货币政策。
      </p>
    </div>

    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-6 my-6 rounded-r-xl">
      <h4 class="text-emerald-800 font-black mb-3 flex items-center text-lg">
        <span class="text-xl mr-2">🎯</span>配置建议
      </h4>
      <p class="text-emerald-900 leading-relaxed">
        <span class="font-semibold">防御为先：</span>关注公用事业、煤炭、油气等抗通胀板块；<span class="font-semibold">逢低布局：</span>AI 算力、液冷、固态电池等成长赛道。
      </p>
    </div>

    <div class="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 my-6 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-3 flex items-center text-lg">
        <span class="text-xl mr-2">⭐</span>金股聚焦
      </h4>
      <p class="text-purple-900 leading-relaxed">
        <span class="font-semibold">牧原股份、中矿资源、英维克、紫金矿业</span>获多家券商推荐。
      </p>
    </div>

    <!-- 二、各券商核心观点汇总 -->
    <h2 id="b_sec2" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
      二、各券商核心观点汇总
    </h2>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">券商</th>
            <th class="px-4 py-3 text-left">市场判断</th>
            <th class="px-4 py-3 text-center">仓位建议</th>
            <th class="px-4 py-3 text-left">风格偏好</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">英大证券</td>
            <td class="px-4 py-3 text-slate-700">短期多重因素扰动，市场需要时间消化</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm font-medium">中性</span></td>
            <td class="px-4 py-3 text-slate-700">防御 + 科技成长</td>
            <td class="px-4 py-3 text-slate-600 text-sm">中东地缘风险是直接导火索，高估值科技股估值压力尚未完全释放</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">国新证券</td>
            <td class="px-4 py-3 text-slate-700">震荡走低，回调延续</td>
            <td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-700 px-2 py-1 rounded text-sm font-medium">谨慎</span></td>
            <td class="px-4 py-3 text-slate-700">防御属性板块</td>
            <td class="px-4 py-3 text-slate-600 text-sm">市场短期恐慌过度，调整带来中长线布局机会</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">东海证券</td>
            <td class="px-4 py-3 text-slate-700">技术条件走弱，震荡中需谨慎</td>
            <td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-700 px-2 py-1 rounded text-sm font-medium">谨慎</span></td>
            <td class="px-4 py-3 text-slate-700">等待量价指标向好</td>
            <td class="px-4 py-3 text-slate-600 text-sm">上证指数跌破 60 日均线，短期均线空头排列</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">金元证券</td>
            <td class="px-4 py-3 text-slate-700">三大指数集体收跌</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm font-medium">中性</span></td>
            <td class="px-4 py-3 text-slate-700">均衡配置</td>
            <td class="px-4 py-3 text-slate-600 text-sm">全球风险资产普遍承压，A 股难以独善其身</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">万联证券</td>
            <td class="px-4 py-3 text-slate-700">锂电周期向上，固态技术领航</td>
            <td class="px-4 py-3 text-center"><span class="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-sm font-medium">积极</span></td>
            <td class="px-4 py-3 text-slate-700">成长 + 周期</td>
            <td class="px-4 py-3 text-slate-600 text-sm">锂电行业预计迈入供需格局优化、技术突破加速的增长新周期</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">东吴证券</td>
            <td class="px-4 py-3 text-slate-700">紧货币交易令风险资产承压</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm font-medium">中性</span></td>
            <td class="px-4 py-3 text-slate-700">黄金 & 美债长端</td>
            <td class="px-4 py-3 text-slate-600 text-sm">美联储降息前景取决于油价，加息门槛仍然较高</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">开源证券</td>
            <td class="px-4 py-3 text-slate-700">市场风险偏好边际承压</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm font-medium">中性</span></td>
            <td class="px-4 py-3 text-slate-700">平衡低估风格</td>
            <td class="px-4 py-3 text-slate-600 text-sm">转债估值偏贵，看好平衡低估风格</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">第一创业</td>
            <td class="px-4 py-3 text-slate-700">财政收支状况有所改善</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm font-medium">中性</span></td>
            <td class="px-4 py-3 text-slate-700">消费电子、锂电池</td>
            <td class="px-4 py-3 text-slate-600 text-sm">财政收入质量有待改善，锂电池排产数据全产业链飘红</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">国信证券</td>
            <td class="px-4 py-3 text-slate-700">市场震荡，各主力合约贴水</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm font-medium">中性</span></td>
            <td class="px-4 py-3 text-slate-700">高股息 + 成长</td>
            <td class="px-4 py-3 text-slate-600 text-sm">煤炭、银行、钢铁行业股息率排名前三</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">华源证券</td>
            <td class="px-4 py-3 text-slate-700">北交所调整超 5%，可逢跌关注</td>
            <td class="px-4 py-3 text-center"><span class="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-sm font-medium">积极</span></td>
            <td class="px-4 py-3 text-slate-700">五大高确定性主线</td>
            <td class="px-4 py-3 text-slate-600 text-sm">北交所公司数量迈入"300+"高质量扩容新时代</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">东兴证券</td>
            <td class="px-4 py-3 text-slate-700">猪价加速下行，产能去化在即</td>
            <td class="px-4 py-3 text-center"><span class="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-sm font-medium">积极</span></td>
            <td class="px-4 py-3 text-slate-700">生猪养殖龙头</td>
            <td class="px-4 py-3 text-slate-600 text-sm">行业正处于产能去化的关键阶段和左侧布局窗口期</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 三、行业推荐共识 -->
    <h2 id="b_sec3" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-emerald-600 rounded-full mr-3"></span>
      三、行业推荐共识
    </h2>

    <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4">
      <p class="text-slate-600 text-sm m-0">
        <span class="font-semibold">统计说明：</span>基于 11 家券商晨报的行业推荐频次统计，推荐次数越高表示券商共识度越高。
      </p>
    </div>

    <div class="grid gap-4 my-6">
      <!-- AI/算力/液冷 -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-blue-800 font-black flex items-center text-lg">
            <span class="text-xl mr-2">🤖</span>AI/算力/液冷
          </h4>
          <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">5 次推荐</span>
        </div>
        <p class="text-blue-900 mb-2"><span class="font-semibold">核心逻辑：</span>GTC 大会催化，液冷投资"黄金时代"，Token 工厂经济学重塑产业</p>
        <p class="text-blue-700 text-sm"><span class="font-medium">推荐券商：</span>华源、开源、东吴、国信、第一创业</p>
      </div>

      <!-- 煤炭/油气/公用事业 -->
      <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-amber-800 font-black flex items-center text-lg">
            <span class="text-xl mr-2">🔥</span>煤炭/油气/公用事业
          </h4>
          <span class="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">5 次推荐</span>
        </div>
        <p class="text-amber-900 mb-2"><span class="font-semibold">核心逻辑：</span>中东冲突导致能源价格上涨，防御属性突出，分红规模占优</p>
        <p class="text-amber-700 text-sm"><span class="font-medium">推荐券商：</span>英大、国新、东海、金元、国信</p>
      </div>

      <!-- 锂电/固态电池 -->
      <div class="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-5 rounded-r-xl">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-emerald-800 font-black flex items-center text-lg">
            <span class="text-xl mr-2">🔋</span>锂电/固态电池
          </h4>
          <span class="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">4 次推荐</span>
        </div>
        <p class="text-emerald-900 mb-2"><span class="font-semibold">核心逻辑：</span>周期向上，4 月排产数据全产业链飘红，固态电池产业化加速</p>
        <p class="text-emerald-700 text-sm"><span class="font-medium">推荐券商：</span>万联、第一创业、开源、国信</p>
      </div>

      <!-- 农林牧渔（生猪） -->
      <div class="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-5 rounded-r-xl">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-pink-800 font-black flex items-center text-lg">
            <span class="text-xl mr-2">🐷</span>农林牧渔（生猪）
          </h4>
          <span class="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">4 次推荐</span>
        </div>
        <p class="text-pink-900 mb-2"><span class="font-semibold">核心逻辑：</span>猪价磨底，产能去化加速，左侧布局窗口期</p>
        <p class="text-pink-700 text-sm"><span class="font-medium">推荐券商：</span>东兴、开源、国信、华源</p>
      </div>

      <!-- 半导体/电子 -->
      <div class="bg-gradient-to-r from-violet-50 to-purple-50 border-l-4 border-violet-500 p-5 rounded-r-xl">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-violet-800 font-black flex items-center text-lg">
            <span class="text-xl mr-2">💻</span>半导体/电子
          </h4>
          <span class="bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-bold">3 次推荐</span>
        </div>
        <p class="text-violet-900 mb-2"><span class="font-semibold">核心逻辑：</span>Groq LPU 与 GPU 协同，国产替代加速，光刻胶产业化</p>
        <p class="text-violet-700 text-sm"><span class="font-medium">推荐券商：</span>开源、东吴、国信</p>
      </div>

      <!-- 燃气 -->
      <div class="bg-gradient-to-r from-cyan-50 to-sky-50 border-l-4 border-cyan-500 p-5 rounded-r-xl">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-cyan-800 font-black flex items-center text-lg">
            <span class="text-xl mr-2">⛽</span>燃气
          </h4>
          <span class="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold">3 次推荐</span>
        </div>
        <p class="text-cyan-900 mb-2"><span class="font-semibold">核心逻辑：</span>地缘冲突导致气价上涨，城燃顺价持续推进</p>
        <p class="text-cyan-700 text-sm"><span class="font-medium">推荐券商：</span>东吴、英大、华源</p>
      </div>
    </div>

    <!-- 四、个股推荐共识 -->
    <h2 id="b_sec4" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-purple-600 rounded-full mr-3"></span>
      四、个股推荐共识（金股组合）
    </h2>

    <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4">
      <p class="text-slate-600 text-sm m-0">
        <span class="font-semibold">筛选标准：</span>被 2 家及以上券商同时推荐的个股，按推荐次数降序排列。
      </p>
    </div>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">股票</th>
            <th class="px-4 py-3 text-left">代码</th>
            <th class="px-4 py-3 text-center">推荐次数</th>
            <th class="px-4 py-3 text-left">推荐券商</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">牧原股份</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">002714.SZ</td>
            <td class="px-4 py-3 text-center"><span class="bg-purple-600 text-white px-2 py-1 rounded-full text-sm font-bold">4 次</span></td>
            <td class="px-4 py-3 text-slate-600 text-sm">东兴、华源、国信、开源</td>
            <td class="px-4 py-3 text-slate-700 text-sm">生猪养殖龙头，成本行业领先，产能去化加速受益</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">中矿资源</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">002738.SZ</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">3 次</span></td>
            <td class="px-4 py-3 text-slate-600 text-sm">东兴、华源、国信</td>
            <td class="px-4 py-3 text-slate-700 text-sm">锂 + 小金属 + 铜多元布局，资源自给率高</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">温氏股份</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">300498.SZ</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">3 次</span></td>
            <td class="px-4 py-3 text-slate-600 text-sm">东兴、国信、开源</td>
            <td class="px-4 py-3 text-slate-700 text-sm">生猪养殖龙头，业绩兑现度高</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">紫金矿业</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">601899.SH</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">3 次</span></td>
            <td class="px-4 py-3 text-slate-600 text-sm">华源、国信、东吴</td>
            <td class="px-4 py-3 text-slate-700 text-sm">铜金资源龙头，受益于滞胀交易</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">洛阳钼业</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">603993.SH</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-600 text-white px-2 py-1 rounded-full text-sm font-bold">2 次</span></td>
            <td class="px-4 py-3 text-slate-600 text-sm">华源、国信</td>
            <td class="px-4 py-3 text-slate-700 text-sm">铜钴资源龙头，供需格局改善</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">英维克</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">002837.SZ</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-600 text-white px-2 py-1 rounded-full text-sm font-bold">2 次</span></td>
            <td class="px-4 py-3 text-slate-600 text-sm">华源、开源</td>
            <td class="px-4 py-3 text-slate-700 text-sm">液冷全链条自研龙头，充分受益 AI 数据中心扩容</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">赣锋锂业</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">002460.SZ</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-600 text-white px-2 py-1 rounded-full text-sm font-bold">2 次</span></td>
            <td class="px-4 py-3 text-slate-600 text-sm">华源、国信</td>
            <td class="px-4 py-3 text-slate-700 text-sm">锂资源自给率高，锂 + 储能 + 固态电池多元布局</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">宁波银行</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">002142.SZ</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-600 text-white px-2 py-1 rounded-full text-sm font-bold">2 次</span></td>
            <td class="px-4 py-3 text-slate-600 text-sm">东兴、国信</td>
            <td class="px-4 py-3 text-slate-700 text-sm">银行板块优质标的，资产质量优异</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">兴森科技</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">002436.SZ</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-600 text-white px-2 py-1 rounded-full text-sm font-bold">2 次</span></td>
            <td class="px-4 py-3 text-slate-600 text-sm">东兴、开源</td>
            <td class="px-4 py-3 text-slate-700 text-sm">PCB 龙头，受益 AI 服务器硬件需求</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">新奥股份</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">600803.SH</td>
            <td class="px-4 py-3 text-center"><span class="bg-slate-600 text-white px-2 py-1 rounded-full text-sm font-bold">2 次</span></td>
            <td class="px-4 py-3 text-slate-600 text-sm">东吴、华源</td>
            <td class="px-4 py-3 text-slate-700 text-sm">具备优质长协资源，成本优势长期凸显</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 东兴证券三月金股组合 -->
    <div class="bg-gradient-to-r from-slate-50 to-slate-100 border-l-4 border-slate-500 p-5 my-6 rounded-r-xl">
      <h4 class="text-slate-800 font-black mb-4 flex items-center text-lg">
        <span class="text-xl mr-2">📋</span>东兴证券三月金股组合
      </h4>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse rounded-lg overflow-hidden">
          <thead class="bg-slate-200 text-slate-700">
            <tr>
              <th class="px-3 py-2 text-left text-sm">代码</th>
              <th class="px-3 py-2 text-left text-sm">证券简称</th>
              <th class="px-3 py-2 text-left text-sm">行业</th>
              <th class="px-3 py-2 text-left text-sm">推荐理由</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr><td class="px-3 py-2 font-mono text-sm">002142.SZ</td><td class="px-3 py-2 font-medium">宁波银行</td><td class="px-3 py-2 text-sm">银行</td><td class="px-3 py-2 text-sm text-slate-600">资产质量优异，盈利能力稳定</td></tr>
            <tr><td class="px-3 py-2 font-mono text-sm">002392.SZ</td><td class="px-3 py-2 font-medium">北京利尔</td><td class="px-3 py-2 text-sm">建材</td><td class="px-3 py-2 text-sm text-slate-600">耐火材料龙头，受益基建投资</td></tr>
            <tr><td class="px-3 py-2 font-mono text-sm">002436.SZ</td><td class="px-3 py-2 font-medium">兴森科技</td><td class="px-3 py-2 text-sm">电子</td><td class="px-3 py-2 text-sm text-slate-600">PCB 龙头，AI 服务器需求拉动</td></tr>
            <tr><td class="px-3 py-2 font-mono text-sm">002714.SZ</td><td class="px-3 py-2 font-medium">牧原股份</td><td class="px-3 py-2 text-sm">农林牧渔</td><td class="px-3 py-2 text-sm text-slate-600">生猪养殖龙头，成本优势明显</td></tr>
            <tr><td class="px-3 py-2 font-mono text-sm">002738.SZ</td><td class="px-3 py-2 font-medium">中矿资源</td><td class="px-3 py-2 text-sm">有色金属</td><td class="px-3 py-2 text-sm text-slate-600">锂 + 小金属多元布局</td></tr>
            <tr><td class="px-3 py-2 font-mono text-sm">002991.SZ</td><td class="px-3 py-2 font-medium">甘源食品</td><td class="px-3 py-2 text-sm">食品饮料</td><td class="px-3 py-2 text-sm text-slate-600">休闲零食龙头，渠道扩张加速</td></tr>
            <tr><td class="px-3 py-2 font-mono text-sm">300627.SZ</td><td class="px-3 py-2 font-medium">华测导航</td><td class="px-3 py-2 text-sm">计算机</td><td class="px-3 py-2 text-sm text-slate-600">高精度定位龙头，受益北斗应用</td></tr>
            <tr><td class="px-3 py-2 font-mono text-sm">300810.SZ</td><td class="px-3 py-2 font-medium">中科海讯</td><td class="px-3 py-2 text-sm">国防军工</td><td class="px-3 py-2 text-sm text-slate-600">水声电子龙头，军工信息化受益</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 五、投资策略建议 -->
    <h2 id="b_sec5" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>
      五、投资策略建议
    </h2>

    <!-- 宏观策略 -->
    <div class="bg-white border border-slate-200 rounded-xl p-5 my-5 shadow-sm">
      <h3 id="sec5-1" class="text-lg font-black text-slate-900 mt-0 mb-4 pb-2 border-b border-slate-200 flex items-center">
        <span class="text-xl mr-2">🌐</span>宏观策略
      </h3>
      <table class="min-w-full">
        <tbody class="divide-y divide-slate-100">
          <tr>
            <td class="py-3 pr-4 font-semibold text-slate-700 w-32">大势研判</td>
            <td class="py-3 text-slate-600">短期多重因素扰动下，A 股需要时间消化。中东地缘政治风险是本轮调整的直接导火索，能源供应不确定性传导至全球通胀预期</td>
          </tr>
          <tr>
            <td class="py-3 pr-4 font-semibold text-slate-700">货币政策</td>
            <td class="py-3 text-slate-600">央行：继续实施好适度宽松货币政策，综合运用存款准备金率、买卖国债、MLF、逆回购等工具，保持流动性充裕</td>
          </tr>
          <tr>
            <td class="py-3 pr-4 font-semibold text-slate-700">美联储动向</td>
            <td class="py-3 text-slate-600">3 月 FOMC 维持利率 3.5%-3.75% 不变，点阵图显示 2026 年或降息 1 次。鲍威尔表态中性偏鹰，若通胀无进展则不降息</td>
          </tr>
          <tr>
            <td class="py-3 pr-4 font-semibold text-slate-700">汇率走势</td>
            <td class="py-3 text-slate-600">美元指数突破 100 关口，人民币汇率在合理均衡水平保持基本稳定</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 仓位建议 -->
    <div class="bg-white border border-slate-200 rounded-xl p-5 my-5 shadow-sm">
      <h3 id="sec5-2" class="text-lg font-black text-slate-900 mt-0 mb-4 pb-2 border-b border-slate-200 flex items-center">
        <span class="text-xl mr-2">📊</span>仓位建议
      </h3>
      <div class="grid gap-3">
        <div class="flex items-center p-3 bg-slate-50 rounded-lg">
          <span class="w-24 font-semibold text-slate-700">保守型</span>
          <span class="w-20 bg-slate-600 text-white px-2 py-1 rounded text-center text-sm font-bold">5-6 成</span>
          <span class="ml-3 text-slate-600">公用事业、煤炭、油气、银行等高股息防御板块</span>
        </div>
        <div class="flex items-center p-3 bg-blue-50 rounded-lg">
          <span class="w-24 font-semibold text-slate-700">稳健型</span>
          <span class="w-20 bg-blue-600 text-white px-2 py-1 rounded text-center text-sm font-bold">6-7 成</span>
          <span class="ml-3 text-slate-600">防御 + 成长均衡配置，逢低布局 AI 算力、锂电</span>
        </div>
        <div class="flex items-center p-3 bg-emerald-50 rounded-lg">
          <span class="w-24 font-semibold text-slate-700">积极型</span>
          <span class="w-20 bg-emerald-600 text-white px-2 py-1 rounded text-center text-sm font-bold">7-8 成</span>
          <span class="ml-3 text-slate-600">成长为主，重点配置液冷、固态电池、半导体</span>
        </div>
      </div>
    </div>

    <!-- 重点关注主线 -->
    <div class="bg-white border border-slate-200 rounded-xl p-5 my-5 shadow-sm">
      <h3 id="sec5-3" class="text-lg font-black text-slate-900 mt-0 mb-4 pb-2 border-b border-slate-200 flex items-center">
        <span class="text-xl mr-2">🎯</span>重点关注主线
      </h3>

      <div class="space-y-4">
        <!-- 主线一 -->
        <div class="border-l-4 border-blue-500 pl-4 py-2">
          <h4 class="font-bold text-blue-800 mb-2">主线一：AI 算力与液冷</h4>
          <p class="text-slate-600 text-sm mb-2">GTC 大会催化，英伟达 Vera Rubin 平台采用全液冷架构</p>
          <p class="text-slate-700 text-sm"><span class="font-semibold">推荐：</span>英维克、高澜股份、申菱环境（系统集成）；飞龙股份、银轮股份（核心部件）</p>
        </div>

        <!-- 主线二 -->
        <div class="border-l-4 border-emerald-500 pl-4 py-2">
          <h4 class="font-bold text-emerald-800 mb-2">主线二：锂电周期复苏 + 固态电池</h4>
          <p class="text-slate-600 text-sm mb-2">4 月排产数据全产业链飘红，电池环节同比大涨 56%</p>
          <p class="text-slate-700 text-sm"><span class="font-semibold">推荐：</span>宁德时代、比亚迪、赣锋锂业、天赐材料</p>
        </div>

        <!-- 主线三 -->
        <div class="border-l-4 border-amber-500 pl-4 py-2">
          <h4 class="font-bold text-amber-800 mb-2">主线三：能源安全与抗通胀</h4>
          <p class="text-slate-600 text-sm mb-2">中东冲突导致油气价格上涨，煤炭替代效应显现</p>
          <p class="text-slate-700 text-sm"><span class="font-semibold">推荐：</span>中国海油、中煤能源、新奥股份、首华燃气</p>
        </div>

        <!-- 主线四 -->
        <div class="border-l-4 border-pink-500 pl-4 py-2">
          <h4 class="font-bold text-pink-800 mb-2">主线四：生猪产能去化</h4>
          <p class="text-slate-600 text-sm mb-2">行业步入深度亏损，产能去化加速，左侧布局窗口期</p>
          <p class="text-slate-700 text-sm"><span class="font-semibold">推荐：</span>牧原股份、温氏股份、神农集团</p>
        </div>

        <!-- 主线五 -->
        <div class="border-l-4 border-violet-500 pl-4 py-2">
          <h4 class="font-bold text-violet-800 mb-2">主线五：北交所高质量扩容</h4>
          <p class="text-slate-600 text-sm mb-2">公司数量迈入"300+"时代，专精特新"小巨人"占比超 60%</p>
          <p class="text-slate-700 text-sm"><span class="font-semibold">推荐：</span>安达科技、并行科技、同力股份、康农种业</p>
        </div>
      </div>
    </div>

    <!-- 风险提示 -->
    <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-6 rounded-r-xl">
      <h3 class="text-red-800 font-black mb-4 flex items-center text-lg">
        <span class="text-xl mr-2">⚠️</span>风险提示
      </h3>
      <div class="space-y-3">
        <div class="flex items-start">
          <span class="text-red-500 font-bold mr-2 mt-1">•</span>
          <div>
            <p class="text-red-900 font-semibold">地缘政治风险</p>
            <p class="text-red-700 text-sm">中东冲突持续时间超预期，油价二次达峰 → 增配黄金、油气、国防军工</p>
          </div>
        </div>
        <div class="flex items-start">
          <span class="text-red-500 font-bold mr-2 mt-1">•</span>
          <div>
            <p class="text-red-900 font-semibold">通胀超预期</p>
            <p class="text-red-700 text-sm">能源价格上涨传导至核心通胀，美联储加息 → 减配成长股，增配价值股</p>
          </div>
        </div>
        <div class="flex items-start">
          <span class="text-red-500 font-bold mr-2 mt-1">•</span>
          <div>
            <p class="text-red-900 font-semibold">需求复苏不及预期</p>
            <p class="text-red-700 text-sm">国内经济复苏力度偏弱，企业盈利承压 → 关注高股息、低估值板块</p>
          </div>
        </div>
        <div class="flex items-start">
          <span class="text-red-500 font-bold mr-2 mt-1">•</span>
          <div>
            <p class="text-red-900 font-semibold">技术迭代风险</p>
            <p class="text-red-700 text-sm">AI、固态电池等新技术产业化进展不及预期 → 分散配置，避免单一技术路线</p>
          </div>
        </div>
        <div class="flex items-start">
          <span class="text-red-500 font-bold mr-2 mt-1">•</span>
          <div>
            <p class="text-red-900 font-semibold">行业竞争加剧</p>
            <p class="text-red-700 text-sm">锂电、光伏等行业产能过剩，价格战风险 → 优选龙头，关注成本控制能力</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 六、分歧点汇总 -->
    <h2 id="b_sec6" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-slate-600 rounded-full mr-3"></span>
      六、分歧点汇总
    </h2>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">分歧维度</th>
            <th class="px-4 py-3 text-left bg-emerald-700">多方观点</th>
            <th class="px-4 py-3 text-left bg-amber-700">空方观点</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr>
            <td class="px-4 py-3 font-semibold text-slate-900">市场走势</td>
            <td class="px-4 py-3 text-emerald-700 bg-emerald-50">调整带来中长线布局机会（国新证券）</td>
            <td class="px-4 py-3 text-amber-700 bg-amber-50">技术条件走弱，需等待量价指标向好（东海证券）</td>
          </tr>
          <tr>
            <td class="px-4 py-3 font-semibold text-slate-900">美联储降息</td>
            <td class="px-4 py-3 text-emerald-700 bg-emerald-50">2026 年仍有降息空间，主要在三季度后（开源证券）</td>
            <td class="px-4 py-3 text-amber-700 bg-amber-50">若油价封锁 2 个月以上，年内降息可能清零（东吴证券）</td>
          </tr>
          <tr>
            <td class="px-4 py-3 font-semibold text-slate-900">锂电周期</td>
            <td class="px-4 py-3 text-emerald-700 bg-emerald-50">2026 年迈入增长新周期，供需格局优化（万联证券）</td>
            <td class="px-4 py-3 text-amber-700 bg-amber-50">碳酸锂价格承压，需关注下游补库驱动（华源证券）</td>
          </tr>
          <tr>
            <td class="px-4 py-3 font-semibold text-slate-900">生猪养殖</td>
            <td class="px-4 py-3 text-emerald-700 bg-emerald-50">产能去化加速，左侧布局窗口期（东兴证券）</td>
            <td class="px-4 py-3 text-amber-700 bg-amber-50">供过于求趋势上半年将持续，亏损累计（开源证券）</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 底部免责声明 -->
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 my-8">
      <p class="text-slate-500 text-xs text-center m-0">
        <span class="font-semibold">免责声明：</span>本报告基于各券商公开晨报内容整理，仅供参考，不构成投资建议。市场有风险，投资需谨慎。
      </p>
      <p class="text-slate-400 text-xs text-center mt-2 m-0">
        <span class="font-semibold">下一交易日关注：</span>美联储官员讲话、国内 LPR 报价、3 月制造业 PMI 数据
      </p>
    </div>

  </div>`;
}
