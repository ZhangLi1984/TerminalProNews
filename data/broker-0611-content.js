// ==========================================
// 券商晨报模块 - 内容渲染 (2026 年 6 月 11 日)
// ==========================================

function renderBrokerContent_0611() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 报告标题 -->
    <div class="bg-gradient-to-r from-slate-900 to-slate-700 rounded-2xl p-6 mb-8 text-white shadow-xl">
      <h1 class="text-2xl font-black mb-2 flex items-center">
        <span class="mr-3 text-3xl">📰</span>
        2026 年 6 月 11 日 券商晨报买方汇总内参
      </h1>
      <p class="text-slate-300 text-sm flex items-center gap-4">
        <span class="flex items-center"><span class="w-2 h-2 bg-green-400 rounded-full mr-2"></span>数据来源：12 家券商晨会纪要深度分析</span>
        <span class="flex items-center"><span class="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>编制：券商研究首席分析师</span>
      </p>
    </div>

    <!-- 执行摘要 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>🌟 一、执行摘要（3 分钟速读）
    </h2>

    <h3 id="b_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">市场共识与仓位建议</h3>

    <div class="bg-blue-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-bold mb-3 flex items-center">
        <span class="text-xl mr-2">📊</span>市场共识
      </h4>
      <p class="text-blue-900">
        今日 A 股呈现<strong>震荡分化格局</strong>，上证指数在 4000 点附近反复争夺。多数券商对短期大盘持<strong>结构性机会</strong>判断，提示科技板块高位波动风险，同时看好低位价值板块修复机会。海外方面，美国 5 月非农就业大超预期（+17.2 万人），美联储加息预期升温至 2026 年 6-7 月，6 月海外风险资产面临流动性考验。
      </p>
    </div>

    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-emerald-800 font-bold mb-3 flex items-center">
        <span class="text-xl mr-2">💼</span>仓位建议
      </h4>
      <p class="text-emerald-900">
        建议采取<strong>均衡配置策略</strong>，科技成长与红利防御哑铃式布局。高位震荡期间可考虑进取型与均衡型 ETF 交错配置，避免盲目追高。维持<strong>6-7 成仓位</strong>，利用震荡期进行 STAR 资产内部轮换（从纯科技向资源/基建适度倾斜），不建议盲目"高切低"至弱势板块。
      </p>
    </div>

    <h3 id="b_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">金股 TOP10（按推荐频次排序）</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-gradient-to-r from-red-600 to-red-700 text-white">
          <tr>
            <th class="px-4 py-3 text-center w-16">排名</th>
            <th class="px-4 py-3 text-left">股票名称</th>
            <th class="px-4 py-3 text-center">代码</th>
            <th class="px-4 py-3 text-center">推荐次数</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full font-bold text-sm">1</span></td>
            <td class="px-4 py-3 font-bold text-purple-900">宁德时代</td>
            <td class="px-4 py-3 text-sm font-mono">300750.SZ</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-bold">5 次</span></td>
            <td class="px-4 py-3 text-purple-900">动力&储能电池全球龙头，估值低，受益 AI 电力需求</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold text-sm">2</span></td>
            <td class="px-4 py-3 font-bold text-blue-900">中际旭创</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-bold">5 次</span></td>
            <td class="px-4 py-3 text-blue-900">CPO 光模块龙头，受益 AI 数据中心建设</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-8 h-8 bg-slate-500 text-white rounded-full font-bold text-sm">3</span></td>
            <td class="px-4 py-3 font-bold">新易盛</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-slate-500 text-white rounded-full text-sm font-bold">4 次</span></td>
            <td class="px-4 py-3">光模块核心供应商，高速率产品放量</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-8 h-8 bg-slate-500 text-white rounded-full font-bold text-sm">4</span></td>
            <td class="px-4 py-3 font-bold">天孚通信</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-slate-500 text-white rounded-full text-sm font-bold">4 次</span></td>
            <td class="px-4 py-3">光器件龙头，CPO 受益标的</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-8 h-8 bg-slate-500 text-white rounded-full font-bold text-sm">5</span></td>
            <td class="px-4 py-3 font-bold">海大集团</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-slate-500 text-white rounded-full text-sm font-bold">3 次</span></td>
            <td class="px-4 py-3">饲料龙头市占率提升，分红比例 50%+回购</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-8 h-8 bg-slate-500 text-white rounded-full font-bold text-sm">6</span></td>
            <td class="px-4 py-3 font-bold">云南锗业</td>
            <td class="px-4 py-3 text-sm font-mono">002428.SZ</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-slate-500 text-white rounded-full text-sm font-bold">3 次</span></td>
            <td class="px-4 py-3">磷化铟衬底龙头，AI 光模块国产替代稀缺标的</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-8 h-8 bg-slate-500 text-white rounded-full font-bold text-sm">7</span></td>
            <td class="px-4 py-3 font-bold">中国核电</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-slate-500 text-white rounded-full text-sm font-bold">3 次</span></td>
            <td class="px-4 py-3">成长确定，ROE 有望翻倍，分红提升</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-8 h-8 bg-slate-500 text-white rounded-full font-bold text-sm">8</span></td>
            <td class="px-4 py-3 font-bold">长江电力</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-slate-500 text-white rounded-full text-sm font-bold">3 次</span></td>
            <td class="px-4 py-3">水电量价齐升，现金流优异，高分红</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-8 h-8 bg-slate-500 text-white rounded-full font-bold text-sm">9</span></td>
            <td class="px-4 py-3 font-bold">安井食品</td>
            <td class="px-4 py-3 text-sm font-mono">603345.SH</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-slate-500 text-white rounded-full text-sm font-bold">3 次</span></td>
            <td class="px-4 py-3">Q1 净利润 +42.7%，经营拐点确立</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-8 h-8 bg-slate-500 text-white rounded-full font-bold text-sm">10</span></td>
            <td class="px-4 py-3 font-bold">文远知行</td>
            <td class="px-4 py-3 text-sm font-mono">WRD.O</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-slate-500 text-white rounded-full text-sm font-bold">3 次</span></td>
            <td class="px-4 py-3">Robotaxi 全球扩张，轻资产模式铸就壁垒</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 各券商核心观点汇总 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>📊 二、各券商核心观点汇总
    </h2>

    <h3 id="b_sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">宏观策略观点对比</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">券商</th>
            <th class="px-4 py-3 text-left">大盘判断</th>
            <th class="px-4 py-3 text-left">仓位建议</th>
            <th class="px-4 py-3 text-left">风格偏好</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">开源证券</td>
            <td class="px-4 py-3">震荡偏强</td>
            <td class="px-4 py-3">未明确</td>
            <td class="px-4 py-3">成长+周期</td>
            <td class="px-4 py-3 text-sm">AI 算力产业链景气度持续，光互联&交换网络双轮驱动</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900">东吴证券</td>
            <td class="px-4 py-3">谨慎/震荡</td>
            <td class="px-4 py-3">控仓位+重平衡</td>
            <td class="px-4 py-3">哑铃策略（红利+微盘）</td>
            <td class="px-4 py-3 text-sm">科技短期承压，海外流动性紧张，中长期科技景气度未衰退</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">中银国际</td>
            <td class="px-4 py-3">中性偏多</td>
            <td class="px-4 py-3">未明确</td>
            <td class="px-4 py-3">消费复苏+科技新材料</td>
            <td class="px-4 py-3 text-sm">端午出行链确定性增长，地产四季度行情概率大</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">万联证券</td>
            <td class="px-4 py-3">看多</td>
            <td class="px-4 py-3">未明确</td>
            <td class="px-4 py-3">科技成长</td>
            <td class="px-4 py-3 text-sm">A 股强劲反弹，AI 硬件、锂电、风电多点开花</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 font-bold">山西证券</td>
            <td class="px-4 py-3">防御为先</td>
            <td class="px-4 py-3">未明确</td>
            <td class="px-4 py-3">低估值蓝筹+高股息</td>
            <td class="px-4 py-3 text-sm">高估值压力+存量资金再平衡，缺乏系统性机会</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900">第一创业</td>
            <td class="px-4 py-3">中性偏谨慎</td>
            <td class="px-4 py-3">未明确</td>
            <td class="px-4 py-3">景气改善+红利</td>
            <td class="px-4 py-3 text-sm">美股调整背景下关注滞涨景气改善机会</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900">国信证券</td>
            <td class="px-4 py-3">偏谨慎</td>
            <td class="px-4 py-3">防御思路</td>
            <td class="px-4 py-3">防御+超跌龙头+红利</td>
            <td class="px-4 py-3 text-sm">资金净流出，沪指失守 4000 点，社服/服务消费低位修复</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">东海证券</td>
            <td class="px-4 py-3">偏空</td>
            <td class="px-4 py-3">谨慎观望</td>
            <td class="px-4 py-3">超跌反弹博弈</td>
            <td class="px-4 py-3 text-sm">技术面走弱，超卖但未企稳</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">华源证券</td>
            <td class="px-4 py-3">偏多</td>
            <td class="px-4 py-3">未明确</td>
            <td class="px-4 py-3">国产替代+周期拐点</td>
            <td class="px-4 py-3 text-sm">芳纶纸/生猪养殖/钢结构制造等细分赛道机会</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">东兴证券</td>
            <td class="px-4 py-3">未明确</td>
            <td class="px-4 py-3">未明确</td>
            <td class="px-4 py-3">科技创新</td>
            <td class="px-4 py-3 text-sm">CPO/硅光子产业化加速，ADC 创新药突破</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900">英大证券</td>
            <td class="px-4 py-3">震荡反复</td>
            <td class="px-4 py-3">适度均衡</td>
            <td class="px-4 py-3">科技主线+低估值防御</td>
            <td class="px-4 py-3 text-sm">缩量反弹意味着超跌修复，战略重心保留在科技</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900">金元证券</td>
            <td class="px-4 py-3">震荡偏弱</td>
            <td class="px-4 py-3">未明确</td>
            <td class="px-4 py-3">TMT+算力</td>
            <td class="px-4 py-3 text-sm">电子布涨价、HBM4、AI 智能体爆发</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="b_sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">海外市场观点（共识）</h3>

    <div class="grid md:grid-cols-2 gap-4 my-6">
      <div class="bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500 p-5 rounded-r-xl">
        <h4 class="text-red-800 font-bold mb-2 flex items-center">
          <span class="text-xl mr-2">🇺🇸</span>美国就业数据
        </h4>
        <ul class="text-red-900 text-sm space-y-2">
          <li>• 5 月新增就业 17.2 万人远超预期</li>
          <li>• 失业率 4.3%</li>
          <li>• 美联储加息预期前置至 6-7 月</li>
        </ul>
      </div>
      <div class="bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 rounded-r-xl">
        <h4 class="text-orange-800 font-bold mb-2 flex items-center">
          <span class="text-xl mr-2">⚽</span>世界杯效应
        </h4>
        <ul class="text-orange-900 text-sm space-y-2">
          <li>• 6-7 月美加墨世界杯拉动美国服务业阶段性过热</li>
          <li>• 超级核心通胀可能超预期</li>
        </ul>
      </div>
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
        <h4 class="text-blue-800 font-bold mb-2 flex items-center">
          <span class="text-xl mr-2">💧</span>流动性风险
        </h4>
        <ul class="text-blue-900 text-sm space-y-2">
          <li>• SpaceX 上市带来抽水效应</li>
          <li>• 6 月海外风险资产面临考验</li>
        </ul>
      </div>
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-500 p-5 rounded-r-xl">
        <h4 class="text-purple-800 font-bold mb-2 flex items-center">
          <span class="text-xl mr-2">🌍</span>地缘政治
        </h4>
        <ul class="text-purple-900 text-sm space-y-2">
          <li>• 伊朗击落美军直升机事件短期可控</li>
          <li>• 需上调风险计价权重</li>
        </ul>
      </div>
    </div>

    <!-- 行业共识推荐 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>🔥 三、行业共识推荐
    </h2>

    <h3 id="b_sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">被推荐次数统计</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
          <tr>
            <th class="px-4 py-3 text-left">行业</th>
            <th class="px-4 py-3 text-center">推荐次数</th>
            <th class="px-4 py-3 text-left">主要逻辑</th>
            <th class="px-4 py-3 text-left">推荐券商</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900 flex items-center">
              <span class="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">1</span>
              AI 算力/光通信（CPO/硅光子）
            </td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-amber-500 text-white rounded-full text-sm font-bold">12 次</span></td>
            <td class="px-4 py-3">AI 数据中心建设提速，CPO 商用进程加速，英伟达 Spectrum-X 量产</td>
            <td class="px-4 py-3 text-sm text-slate-600">开源、东吴、中银、万联、国信、东海、东兴、英大、金元等</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900 flex items-center">
              <span class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">2</span>
              半导体/芯片（存储/设备/材料）
            </td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-bold">10 次</span></td>
            <td class="px-4 py-3">长鑫长存 IPO 加速，国产替代突破，HBM 需求爆发</td>
            <td class="px-4 py-3 text-sm text-slate-600">开源、东吴、中银、国信、东海、华源、东兴等</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900 flex items-center">
              <span class="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">3</span>
              高股息/红利（煤炭/水电/银行）
            </td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-bold">9 次</span></td>
            <td class="px-4 py-3">防御性配置需求升温，避险资金回流</td>
            <td class="px-4 py-3 text-sm text-slate-600">东吴、山西、国信、东海、华源、英大、金元等</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900 flex items-center">
              <span class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">4</span>
              创新药/医药生物
            </td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-green-500 text-white rounded-full text-sm font-bold">8 次</span></td>
            <td class="px-4 py-3">2026 ASCO 临床突破，估值处于历史低位</td>
            <td class="px-4 py-3 text-sm text-slate-600">东吴、开源、国信、东海、华源、东兴等</td>
          </tr>
          <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
            <td class="px-4 py-3 font-bold text-orange-900 flex items-center">
              <span class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">5</span>
              资源品（磷化工/钾肥/铜铝）
            </td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-bold">7 次</span></td>
            <td class="px-4 py-3">供给约束+储能需求爆发，磷矿石长期高价中枢</td>
            <td class="px-4 py-3 text-sm text-slate-600">开源、东吴、国信、东海、华源等</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">新能源（锂电/储能/钠电）</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-slate-500 text-white rounded-full text-sm font-bold">6 次</span></td>
            <td class="px-4 py-3">动力电池需求强劲，全球储能装机 26 年 +60%</td>
            <td class="px-4 py-3 text-sm text-slate-600">东吴、万联、国信、东海等</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">消费电子/AI PC</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-slate-500 text-white rounded-full text-sm font-bold">5 次</span></td>
            <td class="px-4 py-3">端侧 AI 普及，苹果 Apple Intelligence 升级</td>
            <td class="px-4 py-3 text-sm text-slate-600">中银、万联、国信、东海等</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">机器人/具身智能</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-slate-500 text-white rounded-full text-sm font-bold">5 次</span></td>
            <td class="px-4 py-3">Tesla Gen3 推出，人形机器人量产验证窗口</td>
            <td class="px-4 py-3 text-sm text-slate-600">东吴、万联、国信、华源等</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">汽车/智能驾驶</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-slate-500 text-white rounded-full text-sm font-bold">5 次</span></td>
            <td class="px-4 py-3">L4 RoboX 主线，B 端软件标的优于 C 端硬件</td>
            <td class="px-4 py-3 text-sm text-slate-600">东吴、开源、国信等</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">旅游/消费服务</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-slate-500 text-white rounded-full text-sm font-bold">4 次</span></td>
            <td class="px-4 py-3">暑期出游高峰，服务消费升级</td>
            <td class="px-4 py-3 text-sm text-slate-600">英大、中银、国信、第一创业等</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">商业航天</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-slate-500 text-white rounded-full text-sm font-bold">3 次</span></td>
            <td class="px-4 py-3">SpaceX IPO 估值锚重塑，国内千亿美元空间</td>
            <td class="px-4 py-3 text-sm text-slate-600">华源、开源、国信等</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">房地产</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-slate-500 text-white rounded-full text-sm font-bold">3 次</span></td>
            <td class="px-4 py-3">政策持续发酵，四季度板块行情概率大</td>
            <td class="px-4 py-3 text-sm text-slate-600">中银、开源、国信等</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">环保/公用事业</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-slate-500 text-white rounded-full text-sm font-bold">3 次</span></td>
            <td class="px-4 py-3">类公用事业投资机会，现金流改善</td>
            <td class="px-4 py-3 text-sm text-slate-600">国信、东海等</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">出口链</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-3 py-1 bg-slate-500 text-white rounded-full text-sm font-bold">3 次</span></td>
            <td class="px-4 py-3">5 月出口同比 +19.4% 超预期，高性价比支撑</td>
            <td class="px-4 py-3 text-sm text-slate-600">华源、国信、东海等</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 重点行业详细观点 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>📈 四、重点行业详细观点
    </h2>

    <h3 id="b_sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">1. AI 算力/光通信（最高共识 · 12 次推荐）⭐⭐⭐⭐⭐</h3>

    <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-amber-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">💡</span>核心逻辑
      </h4>
      <ul class="text-amber-900 space-y-2">
        <li class="flex items-start"><span class="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>Marvell 作为全球 DSP 芯片与交换网络双料龙头，英伟达 CEO 公开看好</span></li>
        <li class="flex items-start"><span class="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>CPO 从概念进入规模部署阶段，台积电 COUPE 平台引领硅光集成落地</span></li>
        <li class="flex items-start"><span class="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>COUPE 光电共封装技术功耗降低 40%，英伟达 800G/1.6T 交换机采用</span></li>
        <li class="flex items-start"><span class="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>CPO 成为 AI 高密度互连终极方案，2027 年市场规模有望突破 50 亿美元</span></li>
      </ul>
    </div>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-amber-100">
          <tr>
            <th class="px-4 py-3 text-left text-amber-900">细分领域</th>
            <th class="px-4 py-3 text-left text-amber-900">推荐个股</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr><td class="px-4 py-3 font-medium">DSP 芯片</td><td class="px-4 py-3">Marvell（海外）</td></tr>
          <tr><td class="px-4 py-3 font-medium">光模块</td><td class="px-4 py-3">中际旭创、新易盛</td></tr>
          <tr><td class="px-4 py-3 font-medium">光器件</td><td class="px-4 py-3">天孚通信</td></tr>
          <tr><td class="px-4 py-3 font-medium">激光设备</td><td class="px-4 py-3">杰普特</td></tr>
          <tr><td class="px-4 py-3 font-medium">OCS 光学元件</td><td class="px-4 py-3">相关受益标的</td></tr>
        </tbody>
      </table>
    </div>

    <h3 id="b_sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">2. 半导体/芯片（10 次推荐）⭐⭐⭐⭐⭐</h3>

    <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🔬</span>核心逻辑
      </h4>
      <ul class="text-blue-900 space-y-2">
        <li class="flex items-start"><span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>全球 9 大 CSP 资本支出上调至 8,300 亿美元（+79%）</span></li>
        <li class="flex items-start"><span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>长鑫长存 IPO 进程加速，国产替代突破</span></li>
        <li class="flex items-start"><span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>HBM 需求爆发，六氟化钨是 AI 芯片 3nm/5nm/7nm 不可替代核心材料</span></li>
        <li class="flex items-start"><span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>OLED 第 8.6 代产线陆续量产，车载与 IT 渗透率提升</span></li>
      </ul>
    </div>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-blue-100">
          <tr>
            <th class="px-4 py-3 text-left text-blue-900">细分领域</th>
            <th class="px-4 py-3 text-left text-blue-900">推荐个股</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr><td class="px-4 py-3 font-medium">存储</td><td class="px-4 py-3">长鑫科技、兆易创新</td></tr>
          <tr><td class="px-4 py-3 font-medium">晶圆制造</td><td class="px-4 py-3">中芯国际、华虹公司</td></tr>
          <tr><td class="px-4 py-3 font-medium">封测</td><td class="px-4 py-3">长电科技、通富微电</td></tr>
          <tr><td class="px-4 py-3 font-medium">设备</td><td class="px-4 py-3">北方华创、芯源微</td></tr>
          <tr><td class="px-4 py-3 font-medium">材料</td><td class="px-4 py-3">云南锗业、安集科技</td></tr>
          <tr><td class="px-4 py-3 font-medium">OLED 材料</td><td class="px-4 py-3">京东方 A、莱特光电</td></tr>
        </tbody>
      </table>
    </div>

    <h3 id="b_sec8" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3. 高股息/红利（9 次推荐）⭐⭐⭐⭐</h3>

    <div class="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">💰</span>核心逻辑
      </h4>
      <ul class="text-purple-900 space-y-2">
        <li class="flex items-start"><span class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>红利+微盘哑铃策略开始呈现超额收益</span></li>
        <li class="flex items-start"><span class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>侧重低估值蓝筹、高股息红利资产和业绩稳健消费白马</span></li>
        <li class="flex items-start"><span class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>规避交易拥挤的科技成长板块</span></li>
        <li class="flex items-start"><span class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>银行、保险、煤炭、公用事业等高股息板块具有防御性配置价值</span></li>
      </ul>
    </div>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-purple-100">
          <tr>
            <th class="px-4 py-3 text-left text-purple-900">行业</th>
            <th class="px-4 py-3 text-left text-purple-900">推荐个股</th>
            <th class="px-4 py-3 text-center text-purple-900">股息率</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr><td class="px-4 py-3 font-medium">水电</td><td class="px-4 py-3">长江电力</td><td class="px-4 py-3 text-center font-bold text-purple-700">4-5%</td></tr>
          <tr><td class="px-4 py-3 font-medium">核电</td><td class="px-4 py-3">中国核电</td><td class="px-4 py-3 text-center font-bold text-purple-700">4-5%</td></tr>
          <tr><td class="px-4 py-3 font-medium">煤炭</td><td class="px-4 py-3">中国神华、陕西煤业</td><td class="px-4 py-3 text-center font-bold text-purple-700">6-8%</td></tr>
          <tr><td class="px-4 py-3 font-medium">银行</td><td class="px-4 py-3">农业银行、工商银行</td><td class="px-4 py-3 text-center font-bold text-purple-700">5-6%</td></tr>
          <tr><td class="px-4 py-3 font-medium">保险</td><td class="px-4 py-3">中国平安</td><td class="px-4 py-3 text-center font-bold text-purple-700">4-5%</td></tr>
          <tr><td class="px-4 py-3 font-medium">公用事业</td><td class="px-4 py-3">相关标的</td><td class="px-4 py-3 text-center font-bold text-purple-700">4-6%</td></tr>
        </tbody>
      </table>
    </div>

    <h3 id="b_sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">4. 创新药/医药生物（8 次推荐）⭐⭐⭐⭐</h3>

    <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-green-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">💊</span>核心逻辑
      </h4>
      <ul class="text-green-900 space-y-2">
        <li class="flex items-start"><span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>2026 ASCO 重磅临床突破，康方生物/信达生物/百济神州/恒瑞医药等国产创新药竞争力强</span></li>
        <li class="flex items-start"><span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>IO2.0+ADC 迭代升级成为全球肿瘤治疗新范式</span></li>
        <li class="flex items-start"><span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>科伦博泰、康方生物、三生制药、黄医药高质量创新能力突出</span></li>
        <li class="flex items-start"><span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>板块 PE 估值 26.8 倍处于历史低位，多项 III 期临床阳性结果验证研发实力</span></li>
      </ul>
    </div>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-green-100">
          <tr>
            <th class="px-4 py-3 text-left text-green-900">细分领域</th>
            <th class="px-4 py-3 text-left text-green-900">推荐个股</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr><td class="px-4 py-3 font-medium">创新药</td><td class="px-4 py-3">康方生物、信达生物、百济神州、恒瑞医药</td></tr>
          <tr><td class="px-4 py-3 font-medium">ADC</td><td class="px-4 py-3">科伦博泰</td></tr>
          <tr><td class="px-4 py-3 font-medium">CXO</td><td class="px-4 py-3">药明康德、康龙化成</td></tr>
          <tr><td class="px-4 py-3 font-medium">医疗器械</td><td class="px-4 py-3">迈瑞医疗、联影医疗</td></tr>
          <tr><td class="px-4 py-3 font-medium">医疗服务</td><td class="px-4 py-3">爱尔眼科、海吉亚医疗</td></tr>
          <tr><td class="px-4 py-3 font-medium">中药</td><td class="px-4 py-3">片仔癀、云南白药</td></tr>
        </tbody>
      </table>
    </div>

    <h3 id="b_sec10" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">5. 资源品（磷化工/钾肥/铜铝 · 7 次推荐）⭐⭐⭐⭐</h3>

    <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-orange-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🏭</span>核心逻辑
      </h4>
      <ul class="text-orange-900 space-y-2">
        <li class="flex items-start"><span class="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>磷化工迎来新旧动能转换，"磷矿石-磷酸-磷酸铁锂"产业链发展向好</span></li>
        <li class="flex items-start"><span class="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>2026-2027 年供需偏紧，磷矿石长期高价中枢</span></li>
        <li class="flex items-start"><span class="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>储能锂电池出货量 2026Q1 同比 +139%，磷酸铁锂需求爆发</span></li>
        <li class="flex items-start"><span class="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span><span>亚钾国际老挝钾盐矿权 263.3 平方公里，折纯氯化钾储量约 10 亿吨</span></li>
      </ul>
    </div>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-orange-100">
          <tr>
            <th class="px-4 py-3 text-left text-orange-900">细分领域</th>
            <th class="px-4 py-3 text-left text-orange-900">推荐个股</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr><td class="px-4 py-3 font-medium">磷化工一体化</td><td class="px-4 py-3">兴发集团</td></tr>
          <tr><td class="px-4 py-3 font-medium">磷化铟衬底</td><td class="px-4 py-3">云南锗业</td></tr>
          <tr><td class="px-4 py-3 font-medium">钾肥</td><td class="px-4 py-3">亚钾国际</td></tr>
          <tr><td class="px-4 py-3 font-medium">铜</td><td class="px-4 py-3">紫金矿业、洛阳钼业</td></tr>
          <tr><td class="px-4 py-3 font-medium">铝</td><td class="px-4 py-3">中国铝业</td></tr>
        </tbody>
      </table>
    </div>

    <!-- 个股金股组合 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>💎 五、个股金股组合
    </h2>

    <h3 id="b_sec11" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">被多家券商同时推荐的个股</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">股票</th>
            <th class="px-4 py-3 text-left">代码</th>
            <th class="px-4 py-3 text-center">推荐次数</th>
            <th class="px-4 py-3 text-left">推荐券商</th>
            <th class="px-4 py-3 text-left">评级/目标价</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">宁德时代</td>
            <td class="px-4 py-3 text-sm font-mono">300750.SZ</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-2 py-1 bg-purple-500 text-white rounded-full text-xs font-bold">5 次</span></td>
            <td class="px-4 py-3 text-xs">中银、东吴、国信等</td>
            <td class="px-4 py-3 text-sm">买入</td>
            <td class="px-4 py-3 text-sm">动力&储能电池全球龙头，估值低，受益 AI 电力需求</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">中际旭创</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-2 py-1 bg-blue-500 text-white rounded-full text-xs font-bold">5 次</span></td>
            <td class="px-4 py-3 text-xs">开源、东吴、国信、东海、东兴</td>
            <td class="px-4 py-3 text-sm">买入</td>
            <td class="px-4 py-3 text-sm">CPO 光模块龙头，受益 AI 数据中心建设</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">新易盛</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">4 次</span></td>
            <td class="px-4 py-3 text-xs">开源、东吴、国信、东兴</td>
            <td class="px-4 py-3 text-sm">买入</td>
            <td class="px-4 py-3 text-sm">光模块核心供应商，高速率产品放量</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">天孚通信</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">4 次</span></td>
            <td class="px-4 py-3 text-xs">开源、东吴、国信、东兴</td>
            <td class="px-4 py-3 text-sm">买入</td>
            <td class="px-4 py-3 text-sm">光器件龙头，CPO 受益标的</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">海大集团</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">3 次</span></td>
            <td class="px-4 py-3 text-xs">第一创业、华源、国信</td>
            <td class="px-4 py-3 text-sm">推荐</td>
            <td class="px-4 py-3 text-sm">饲料龙头市占率提升，分红比例 50%+回购</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">云南锗业</td>
            <td class="px-4 py-3 text-sm font-mono">002428.SZ</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">3 次</span></td>
            <td class="px-4 py-3 text-xs">东吴、国信、华源</td>
            <td class="px-4 py-3 text-sm">买入</td>
            <td class="px-4 py-3 text-sm">磷化铟衬底龙头，AI 光模块国产替代稀缺标的</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">中国核电</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">3 次</span></td>
            <td class="px-4 py-3 text-xs">东吴、国信、东海</td>
            <td class="px-4 py-3 text-sm">重点推荐</td>
            <td class="px-4 py-3 text-sm">成长确定，ROE 有望翻倍，分红提升</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">长江电力</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">3 次</span></td>
            <td class="px-4 py-3 text-xs">东吴、国信、东海</td>
            <td class="px-4 py-3 text-sm">重点推荐</td>
            <td class="px-4 py-3 text-sm">水电量价齐升，现金流优异，高分红</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">安井食品</td>
            <td class="px-4 py-3 text-sm font-mono">603345.SH</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">3 次</span></td>
            <td class="px-4 py-3 text-xs">山西、东兴、国信</td>
            <td class="px-4 py-3 text-sm">买入-A</td>
            <td class="px-4 py-3 text-sm">Q1 净利润 +42.7%，经营拐点确立</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">文远知行</td>
            <td class="px-4 py-3 text-sm font-mono">WRD.O</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">3 次</span></td>
            <td class="px-4 py-3 text-xs">国信、中银、东吴</td>
            <td class="px-4 py-3 text-sm">买入</td>
            <td class="px-4 py-3 text-sm">Robotaxi 全球扩张，轻资产模式铸就壁垒</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">美团-W</td>
            <td class="px-4 py-3 text-sm font-mono">03690.HK</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">3 次</span></td>
            <td class="px-4 py-3 text-xs">开源、国信、东海</td>
            <td class="px-4 py-3 text-sm">买入</td>
            <td class="px-4 py-3 text-sm">外卖竞争回归理性，核心商业亏损收窄</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">兴发集团</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">3 次</span></td>
            <td class="px-4 py-3 text-xs">开源、国信、华源</td>
            <td class="px-4 py-3 text-sm">推荐</td>
            <td class="px-4 py-3 text-sm">磷化工一体化龙头，草甘膦产能第一</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">中国平安</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">2 次</span></td>
            <td class="px-4 py-3 text-xs">东吴、国信</td>
            <td class="px-4 py-3 text-sm">重点推荐</td>
            <td class="px-4 py-3 text-sm">保险估值低位，受益经济复苏</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">潍柴动力</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">2 次</span></td>
            <td class="px-4 py-3 text-xs">东吴、开源</td>
            <td class="px-4 py-3 text-sm">买入</td>
            <td class="px-4 py-3 text-sm">SOFC 主电源逻辑明朗，重卡出口受益</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">完美世界中</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">2 次</span></td>
            <td class="px-4 py-3 text-xs">开源、东兴</td>
            <td class="px-4 py-3 text-sm">推荐</td>
            <td class="px-4 py-3 text-sm">《异环》海外表现突出，业绩弹性大</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">中天科技 / 亨通光电</td>
            <td class="px-4 py-3 text-sm font-mono">600487.SH</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">2 次</span></td>
            <td class="px-4 py-3 text-xs">开源、东兴</td>
            <td class="px-4 py-3 text-sm">推荐</td>
            <td class="px-4 py-3 text-sm">中标 15 亿 MPO 光纤跳线集采，海缆/光通信龙头</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">沪电股份 / 深南电路</td>
            <td class="px-4 py-3 text-sm font-mono">002463/002916</td>
            <td class="px-4 py-3 text-center"><span class="inline-block px-2 py-1 bg-slate-500 text-white rounded-full text-xs font-bold">2 次</span></td>
            <td class="px-4 py-3 text-xs">中银、东兴</td>
            <td class="px-4 py-3 text-sm">6 月金股</td>
            <td class="px-4 py-3 text-sm">PCB 龙头，受益 AI 服务器需求</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="b_sec12" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">其他重要个股推荐</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-100">
          <tr>
            <th class="px-4 py-3 text-left">股票</th>
            <th class="px-4 py-3 text-left">代码</th>
            <th class="px-4 py-3 text-left">券商</th>
            <th class="px-4 py-3 text-left">评级</th>
            <th class="px-4 py-3 text-left">核心看点</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">登康口腔</td>
            <td class="px-4 py-3 text-sm font-mono">001328.SZ</td>
            <td class="px-4 py-3 text-xs">开源</td>
            <td class="px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">买入（首次）</span></td>
            <td class="px-4 py-3 text-sm">抗敏感牙膏市占率超 60%，电商收入 CAGR 40.7%</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">迈普医学</td>
            <td class="px-4 py-3 text-sm font-mono">301033.SZ</td>
            <td class="px-4 py-3 text-xs">开源</td>
            <td class="px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">买入（首次）</span></td>
            <td class="px-4 py-3 text-sm">神经外科植入龙头，PEEK 材料替代钛合金</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">莱特光电</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-xs">中银</td>
            <td class="px-4 py-3"><span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">买入（上调）</span></td>
            <td class="px-4 py-3 text-sm">OLED 材料持续放量，Q 布/钙钛矿新业务</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">安集科技</td>
            <td class="px-4 py-3 text-sm font-mono">688019.SH</td>
            <td class="px-4 py-3 text-xs">东海</td>
            <td class="px-4 py-3"><span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">增持（首次）</span></td>
            <td class="px-4 py-3 text-sm">CMP 抛光液全球市占率 13%</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">物产环能</td>
            <td class="px-4 py-3 text-sm font-mono">603071.SH</td>
            <td class="px-4 py-3 text-xs">华源</td>
            <td class="px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">买入</span></td>
            <td class="px-4 py-3 text-sm">PE 8 倍，股息率 3.7%</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">中通客车</td>
            <td class="px-4 py-3 text-sm font-mono">000957.SZ</td>
            <td class="px-4 py-3 text-xs">开源</td>
            <td class="px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">买入</span></td>
            <td class="px-4 py-3 text-sm">5 月销量同比 +45.8%，非洲出口 +450%</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">小鹏汽车</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-xs">东吴</td>
            <td class="px-4 py-3"><span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">H 股优选</span></td>
            <td class="px-4 py-3 text-sm">L4 RoboX 主线，世界模型技术</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">德赛西威</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-xs">东吴</td>
            <td class="px-4 py-3"><span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">A 股优选</span></td>
            <td class="px-4 py-3 text-sm">域控制器龙头</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">康方生物</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-xs">东吴/国信</td>
            <td class="px-4 py-3"><span class="px-2 py-1 bg-slate-100 text-slate-800 rounded text-xs">关注</span></td>
            <td class="px-4 py-3 text-sm">PD1 PLUS 角度，依沃西单抗 OS HR=0.66</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">亚钾国际</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-xs">国信</td>
            <td class="px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">重点推荐</span></td>
            <td class="px-4 py-3 text-sm">老挝钾盐矿权，产能投放周期开启</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">宏柏新材</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-xs">开源</td>
            <td class="px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">推荐</span></td>
            <td class="px-4 py-3 text-sm">高纯四氯化硅，受益 AI 数据中心光纤需求</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">寒武纪 / 海光信息 / 北方华创</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-xs">东海</td>
            <td class="px-4 py-3"><span class="px-2 py-1 bg-slate-100 text-slate-800 rounded text-xs">关注</span></td>
            <td class="px-4 py-3 text-sm">AI 算力芯片/半导体设备国产替代</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">泡泡玛特</td>
            <td class="px-4 py-3 text-sm font-mono">-</td>
            <td class="px-4 py-3 text-xs">国信</td>
            <td class="px-4 py-3"><span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">核心看好</span></td>
            <td class="px-4 py-3 text-sm">IP 潮玩及海外扩张</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="b_sec13" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">券商 6 月金股组合汇总</h3>

    <div class="grid md:grid-cols-2 gap-4 my-6">
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
        <h4 class="text-blue-800 font-bold mb-3 flex items-center">
          <span class="text-xl mr-2">🏛️</span>中银国际 6 月金股
        </h4>
        <ul class="text-blue-900 text-sm space-y-1.5">
          <li>• 中国国航、招商轮船</li>
          <li>• 卫星化学、雅克科技</li>
          <li>• <strong>宁德时代</strong>、燕京啤酒</li>
          <li>• 首旅酒店</li>
          <li>• <strong>沪电股份、深南电路</strong></li>
        </ul>
      </div>
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 rounded-r-xl">
        <h4 class="text-green-800 font-bold mb-3 flex items-center">
          <span class="text-xl mr-2">🎯</span>东兴证券六月金股
        </h4>
        <ul class="text-green-900 text-sm space-y-1.5">
          <li>• 宝武镁业、北京利尔</li>
          <li>• 兴森科技</li>
          <li>• <strong>亨通光电</strong></li>
          <li>• <strong>安井食品</strong>、火炬电子</li>
          <li>• 金诚信、日联科技</li>
        </ul>
      </div>
    </div>

    <!-- 风险提示与分歧点 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>⚠️ 六、风险提示与分歧点
    </h2>

    <h3 id="b_sec14" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">主要分歧</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">分歧点</th>
            <th class="px-4 py-3 text-left">看多方观点</th>
            <th class="px-4 py-3 text-left">看空方观点</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">科技股是否见顶</td>
            <td class="px-4 py-3 text-green-700">东吴/开源：科技景气度未衰退，震荡后仍是主线</td>
            <td class="px-4 py-3 text-red-700">东海/山西：交易拥挤度高，警惕极值回落</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 font-bold">美联储加息时点</td>
            <td class="px-4 py-3 text-green-700">部分券商：9 月后加息预期有望缓解</td>
            <td class="px-4 py-3 text-red-700">东吴/开源：加息可能持续到 2027 年</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">猪周期反转时点</td>
            <td class="px-4 py-3 text-green-700">华源：第三方数据加速去化，周期拐点临近</td>
            <td class="px-4 py-3 text-red-700">开源：去化速度慢于预期，反转时点后移</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 font-bold">地产板块机会</td>
            <td class="px-4 py-3 text-green-700">中银：四季度板块行情概率较大</td>
            <td class="px-4 py-3 text-red-700">东海/山西：地产投资下滑拖累整体需求</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="b_sec15" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">共同风险因素</h3>

    <div class="grid md:grid-cols-2 gap-4 my-6">
      <div class="bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-red-500 p-5 rounded-r-xl">
        <h4 class="text-red-800 font-bold mb-2 flex items-center">
          <span class="text-xl mr-2">🌍</span>海外宏观风险
        </h4>
        <ul class="text-red-900 text-sm space-y-1.5">
          <li>• 美联储加息超预期（美国 5 月非农大超预期，加息预期前置至 6-7 月）</li>
          <li>• SpaceX 上市带来流动性抽水效应</li>
          <li>• 中东地缘政治升级（伊朗击落美军直升机事件）</li>
          <li>• 美国通胀粘性（CPI 同比回升至 4.2%）</li>
        </ul>
      </div>
      <div class="bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 rounded-r-xl">
        <h4 class="text-orange-800 font-bold mb-2 flex items-center">
          <span class="text-xl mr-2">🇨🇳</span>国内经济风险
        </h4>
        <ul class="text-orange-900 text-sm space-y-1.5">
          <li>• 政策落地不及预期</li>
          <li>• 消费复苏斜率平缓</li>
          <li>• 地产销售持续低迷</li>
          <li>• 内需数据持续偏弱</li>
        </ul>
      </div>
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
        <h4 class="text-blue-800 font-bold mb-2 flex items-center">
          <span class="text-xl mr-2">🏭</span>产业风险
        </h4>
        <ul class="text-blue-900 text-sm space-y-1.5">
          <li>• AI 资本开支 ROI 不及预期</li>
          <li>• 半导体产能扩张过快导致价格战</li>
          <li>• 技术迭代不及预期</li>
          <li>• 行业竞争加剧（外卖补贴战、光伏内卷）</li>
        </ul>
      </div>
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-500 p-5 rounded-r-xl">
        <h4 class="text-purple-800 font-bold mb-2 flex items-center">
          <span class="text-xl mr-2">📉</span>市场风险
        </h4>
        <ul class="text-purple-900 text-sm space-y-1.5">
          <li>• 科技板块交易拥挤度处于高位</li>
          <li>• 增量资金入市速度放缓</li>
          <li>• 高估值压力下的获利回吐</li>
        </ul>
      </div>
    </div>

    <h3 id="b_sec16" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">投资建议总结</h3>

    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-emerald-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📋</span>综合策略建议
      </h4>
      <ol class="text-emerald-900 space-y-2 list-decimal list-inside">
        <li><strong>核心配置</strong>：AI 算力基础设施链（CPO/硅光子/存储/半导体材料）作为中期主线</li>
        <li><strong>防御配置</strong>：高股息红利资产（煤炭/水电/银行）对冲波动</li>
        <li><strong>弹性配置</strong>：创新药、机器人、自动驾驶等困境反转赛道</li>
        <li><strong>回避方向</strong>：交易过度拥挤的纯题材炒作标的</li>
      </ol>
    </div>

    <div class="grid md:grid-cols-3 gap-4 my-6">
      <div class="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
        <h4 class="text-amber-800 font-bold mb-2 flex items-center">
          <span class="text-lg mr-2">📅</span>短期（1-3 个月）
        </h4>
        <ul class="text-amber-900 text-sm space-y-2">
          <li>• 防守为主，配置高股息 + 黄金</li>
          <li>• 逢低布局 AI、锂电等景气赛道龙头</li>
          <li>• 关注美联储 6-7 月议息会议</li>
        </ul>
      </div>
      <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
        <h4 class="text-blue-800 font-bold mb-2 flex items-center">
          <span class="text-lg mr-2">📅</span>中期（3-6 个月）
        </h4>
        <ul class="text-blue-900 text-sm space-y-2">
          <li>• 关注 Fed 降息窗口，增配成长股</li>
          <li>• 生猪、消费电子等周期反转机会</li>
          <li>• 地产四季度行情概率</li>
        </ul>
      </div>
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 rounded-r-xl">
        <h4 class="text-green-800 font-bold mb-2 flex items-center">
          <span class="text-lg mr-2">📅</span>长期（6-12 个月）
        </h4>
        <ul class="text-green-900 text-sm space-y-2">
          <li>• 国产替代主线：半导体、工业母机</li>
          <li>• 新质生产力：AI、新能源、生物医药</li>
          <li>• 商业航天、人形机器人等新兴赛道</li>
        </ul>
      </div>
    </div>

    <!-- 免责声明 -->
    <div class="mt-12 pt-6 border-t border-slate-200 text-center text-slate-500 text-sm">
      <p class="mb-2"><strong>免责声明</strong>：本报告基于公开信息整理，仅供参考，不构成投资建议。市场有风险，投资需谨慎。</p>
      <p><strong>数据来源</strong>：开源证券、东吴证券、中银国际、万联证券、山西证券、第一创业、国信证券、东海证券、华源证券、东兴证券、英大证券、金元证券等 12 家券商晨会纪要 | <strong>报告生成时间</strong>：2026 年 6 月 11 日</p>
    </div>

  </div>`;
}
