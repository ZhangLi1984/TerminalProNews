// ==========================================
// 券商晨报内容模块 - 2026-04-23
// ==========================================

function renderBrokerContent_0423() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 报告头部 -->
    <div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 my-6 border border-amber-200/60">
      <h1 class="text-2xl font-black text-amber-900 mb-2">券商晨报买方汇总内参</h1>
      <p class="text-amber-700 text-sm">报告日期：2026年4月23日（周三） | 数据来源：国新、山西、东兴、东海、英大、第一创业、国信、万联、开源、中银等10家券商晨会纪要</p>
    </div>

    <!-- 一、大盘走势回顾 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-500 rounded-full mr-3"></span>一、大盘走势回顾</h2>

    <h3 id="b_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">指数表现</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">指数</th>
            <th class="px-4 py-3 text-right">收盘价</th>
            <th class="px-4 py-3 text-center">涨跌幅</th>
            <th class="px-4 py-3 text-left">备注</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-green-50 transition-colors"><td class="px-4 py-3 font-semibold">上证综指</td><td class="px-4 py-3 text-right font-mono">4,085.08</td><td class="px-4 py-3 text-center text-green-600 font-bold">+0.07%</td><td class="px-4 py-3 text-sm text-slate-600">探底回升，小幅收涨</td></tr>
          <tr class="hover:bg-green-50 transition-colors"><td class="px-4 py-3 font-semibold">深证成指</td><td class="px-4 py-3 text-right font-mono">14,982.14</td><td class="px-4 py-3 text-center text-green-600 font-bold">+0.10%</td><td class="px-4 py-3 text-sm text-slate-600">震荡修复</td></tr>
          <tr class="hover:bg-green-50 transition-colors"><td class="px-4 py-3 font-semibold">沪深300</td><td class="px-4 py-3 text-right font-mono">4,767.99</td><td class="px-4 py-3 text-center text-green-600 font-bold">+0.22%</td><td class="px-4 py-3 text-sm text-slate-600">权重支撑</td></tr>
          <tr class="hover:bg-green-50 transition-colors"><td class="px-4 py-3 font-semibold">创业板指</td><td class="px-4 py-3 text-right font-mono">3,688.94</td><td class="px-4 py-3 text-center text-green-600 font-bold">+0.31%</td><td class="px-4 py-3 text-sm text-slate-600">续创十年新高后分化</td></tr>
          <tr class="hover:bg-red-50 transition-colors"><td class="px-4 py-3 font-semibold">科创50</td><td class="px-4 py-3 text-right font-mono">1,426.68</td><td class="px-4 py-3 text-center text-red-600 font-bold">-1.64%</td><td class="px-4 py-3 text-sm text-slate-600">科技股调整</td></tr>
          <tr class="hover:bg-green-50 transition-colors"><td class="px-4 py-3 font-semibold">恒生指数</td><td class="px-4 py-3 text-right font-mono">26,487.48</td><td class="px-4 py-3 text-center text-green-600 font-bold">+0.48%</td><td class="px-4 py-3 text-sm text-slate-600">温和上涨</td></tr>
        </tbody>
      </table>
    </div>

    <blockquote class="border-l-4 bg-blue-50 border-blue-500 rounded-r-xl p-4 my-4 text-slate-700">
      沪深两市成交额约 <strong>24,085亿元</strong>，维持在2万亿上方但较前期高点有所缩量。
    </blockquote>

    <h3 id="b_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">市场情绪总评</h3>

    <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-amber-800 font-black mb-3 text-lg">综合判断：谨慎偏乐观，结构性行情为主</h4>
    </div>

    <div class="grid md:grid-cols-2 gap-4 my-4">
      <div class="bg-green-50 rounded-xl p-4 border border-green-200">
        <h4 class="text-green-800 font-bold mb-2">多方逻辑</h4>
        <ul class="text-sm text-green-900 space-y-1.5">
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span><span>一季度GDP同比增长5.0%超预期</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span><span>PPI转正终结通缩格局</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span><span>央行维持宽松基调，美伊停火延长缓解地缘风险</span></li>
        </ul>
      </div>
      <div class="bg-red-50 rounded-xl p-4 border border-red-200">
        <h4 class="text-red-800 font-bold mb-2">空方逻辑</h4>
        <ul class="text-sm text-red-900 space-y-1.5">
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span><span>指数逼近前期成交密集区，短线获利盘丰厚</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span><span>量价背离（2万亿成交额未能同步放大）</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span><span>4月下旬年报与一季报密集披露期业绩雷风险</span></li>
        </ul>
      </div>
    </div>

    <blockquote class="border-l-4 border-red-500 bg-slate-50 rounded-r-xl p-4 my-4 text-slate-700">
      共识结论：不宜盲目追高，重点关注业绩主线，规避前期涨幅过高且业绩不确定性强的题材股。
    </blockquote>

    <!-- 二、行业共识推荐 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-500 rounded-full mr-3"></span>二、行业共识推荐</h2>

    <h3 id="b_sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">行业推荐频次统计</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">行业</th>
            <th class="px-4 py-3 text-center">推荐次数</th>
            <th class="px-4 py-3 text-left">推荐券商</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">电子/半导体</td>
            <td class="px-4 py-3 text-center font-bold text-purple-900">6次</td>
            <td class="px-4 py-3 text-sm text-slate-600">东兴、东海、英大、第一创业、国信、中银</td>
            <td class="px-4 py-3 text-sm">AI驱动算力需求、硅光架构、国产替代</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">电力/公用事业</td>
            <td class="px-4 py-3 text-center font-bold text-blue-900">5次</td>
            <td class="px-4 py-3 text-sm text-slate-600">国新、东海、英大、国信、万联</td>
            <td class="px-4 py-3 text-sm">算电协同写入政府工作报告</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-orange-900">煤炭</td>
            <td class="px-4 py-3 text-center font-bold text-orange-900">4次</td>
            <td class="px-4 py-3 text-sm text-slate-600">国新、山西、东海、开源</td>
            <td class="px-4 py-3 text-sm">淡季不淡、海外不确定性推升煤价</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">军工/商业航天</td>
            <td class="px-4 py-3 text-center font-bold text-green-900">4次</td>
            <td class="px-4 py-3 text-sm text-slate-600">英大、国信、万联、中银</td>
            <td class="px-4 py-3 text-sm">军费预算增长、"十五五"航天强国</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-indigo-900">通信/光模块</td>
            <td class="px-4 py-3 text-center font-bold text-indigo-900">4次</td>
            <td class="px-4 py-3 text-sm text-slate-600">东兴、英大、国信、中银</td>
            <td class="px-4 py-3 text-sm">CPO/NPO需求爆发，光芯片2030年超200亿</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-teal-900">医药/创新药</td>
            <td class="px-4 py-3 text-center font-bold text-teal-900">4次</td>
            <td class="px-4 py-3 text-sm text-slate-600">山西、东海、开源、中银</td>
            <td class="px-4 py-3 text-sm">老龄化加速、双抗/ADC变革NSCLC疗法</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-cyan-900">新能源/电池</td>
            <td class="px-4 py-3 text-center font-bold text-cyan-900">3次</td>
            <td class="px-4 py-3 text-sm text-slate-600">英大、第一创业、中银</td>
            <td class="px-4 py-3 text-sm">宁德时代10C快充时代、新型储能政策</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-pink-900">化工/石化</td>
            <td class="px-4 py-3 text-center font-bold text-pink-900">3次</td>
            <td class="px-4 py-3 text-sm text-slate-600">国信、开源、中银</td>
            <td class="px-4 py-3 text-sm">地缘冲突推升石化品价格</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="b_sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">电子/半导体（6家推荐，共识度最高）</h3>

    <div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🔥</span>核心看点
      </h4>
      <ul class="text-purple-900 space-y-2 text-sm">
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>东兴证券：</strong>CW激光器芯片市场2030年将超229亿美元，CPO/NPO驱动硅光架构成为主流。国产替代重构全球光芯片产业格局。推荐：中际旭创、新易盛、源杰科技、东山精密</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>山西证券：</strong>达梦数据全年收入+25%，浪潮信息全年营收+43.25%，在手订单充裕预示后续持续释放</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>第一创业：</strong>台湾成熟制程厂商下半年继续涨价，国内晶合集成和华虹已宣布上调价格</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>国信证券：</strong>通富微电2025年净利润+80%，德明利1Q26预计净利同比+4659%-5383%，存储周期上行加速</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>中银证券：</strong>英伟达发布全球首个开源量子模型Ising，特斯拉完成AI5芯片流片，关注量子计算和智驾芯片</span></li>
      </ul>
    </div>

    <h3 id="b_sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">电力/公用事业（5家推荐）</h3>

    <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">⚡</span>核心看点
      </h4>
      <ul class="text-blue-900 space-y-2 text-sm">
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>英大证券：</strong>"算电协同"首次写入政府工作报告，从行业概念上升为国家战略。电力设备变压器升级为算力基础设施核心</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>国信证券：</strong>推荐火电（华电国际、上海电力）、新能源（龙源电力、三峡能源）、核电（中国核电、中国广核）、水电（长江电力）</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>国新证券：</strong>煤炭、电力板块领涨，火电增速4.2%加快</span></li>
      </ul>
    </div>

    <h3 id="b_sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">煤炭（4家推荐）</h3>

    <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-orange-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">⛏️</span>核心看点
      </h4>
      <ul class="text-orange-900 space-y-2 text-sm">
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>山西证券：</strong>煤价淡季不淡符合预期，旺季看涨或超预期。推荐：兖矿能源、广汇能源、中煤能源、淮北矿业、晋控煤业、陕西煤业</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>核心逻辑：</strong>海外不确定性（印尼减产+美伊冲突），煤化工受益高油价，煤炭PPI转正在即迎来戴维斯双击</span></li>
      </ul>
    </div>

    <!-- 三、金股共识 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-500 rounded-full mr-3"></span>三、金股共识</h2>

    <h3 id="b_sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">多券商同时推荐个股</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">股票</th>
            <th class="px-4 py-3 text-center">代码</th>
            <th class="px-4 py-3 text-center">推荐次数</th>
            <th class="px-4 py-3 text-left">推荐券商</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors"><td class="px-4 py-3 font-bold text-purple-900">瑞芯微</td><td class="px-4 py-3 text-center font-mono text-sm">603893</td><td class="px-4 py-3 text-center font-bold">2</td><td class="px-4 py-3 text-sm text-slate-600">东海、第一创业</td><td class="px-4 py-3 text-sm">AIoT芯片龙头，4-5nm工艺，端侧AI高增长</td></tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors"><td class="px-4 py-3 font-bold text-purple-900">浪潮信息</td><td class="px-4 py-3 text-center font-mono text-sm">000977</td><td class="px-4 py-3 text-center font-bold">2</td><td class="px-4 py-3 text-sm text-slate-600">山西、国信</td><td class="px-4 py-3 text-sm">国内AI服务器份额第一，在手订单195亿</td></tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors"><td class="px-4 py-3 font-bold text-purple-900">达梦数据</td><td class="px-4 py-3 text-center font-mono text-sm">688692</td><td class="px-4 py-3 text-center font-bold">2</td><td class="px-4 py-3 text-sm text-slate-600">山西、中银</td><td class="px-4 py-3 text-sm">国产数据库龙头，2025年净利+42.76%</td></tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">中际旭创</td><td class="px-4 py-3 text-center font-mono text-sm">300308</td><td class="px-4 py-3 text-center font-bold">2</td><td class="px-4 py-3 text-sm text-slate-600">东兴、国信</td><td class="px-4 py-3 text-sm">光模块龙头，受益CPO/NPO需求爆发</td></tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">东山精密</td><td class="px-4 py-3 text-center font-mono text-sm">002384</td><td class="px-4 py-3 text-center font-bold">2</td><td class="px-4 py-3 text-sm text-slate-600">东兴、国信</td><td class="px-4 py-3 text-sm">2025年净利+27.67%，光芯片+PCB</td></tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">硅宝科技</td><td class="px-4 py-3 text-center font-mono text-sm">300019</td><td class="px-4 py-3 text-center font-bold">2</td><td class="px-4 py-3 text-sm text-slate-600">国信、开源</td><td class="px-4 py-3 text-sm">有机硅景气反弹，硅碳负极业务突破</td></tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">万华化学</td><td class="px-4 py-3 text-center font-mono text-sm">600309</td><td class="px-4 py-3 text-center font-bold">2</td><td class="px-4 py-3 text-sm text-slate-600">国信、开源</td><td class="px-4 py-3 text-sm">聚氨酯景气回升，2026Q1净利+20.6%</td></tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">贵州茅台</td><td class="px-4 py-3 text-center font-mono text-sm">600519</td><td class="px-4 py-3 text-center font-bold">2</td><td class="px-4 py-3 text-sm text-slate-600">开源、中银</td><td class="px-4 py-3 text-sm">主动调整释放压力，2026年改善趋势明确</td></tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-bold text-blue-900">宁德时代</td><td class="px-4 py-3 text-center font-mono text-sm">300750</td><td class="px-4 py-3 text-center font-bold">2</td><td class="px-4 py-3 text-sm text-slate-600">第一创业、中银</td><td class="px-4 py-3 text-sm">第三代神行/麒麟电池，10C快充时代</td></tr>
        </tbody>
      </table>
    </div>

    <h3 id="b_sec8" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">4月金股组合汇总</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">券商</th>
            <th class="px-4 py-3 text-left">金股列表</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">东兴证券</td>
            <td class="px-4 py-3 text-sm">北京利尔、中矿资源、甘源食品、江丰电子、华鲁恒升、亨通光电、中国国航、浙江仙通、日联科技</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">中银证券</td>
            <td class="px-4 py-3 text-sm">保利置业集团、中远海特、极兔速递-W、卫星化学、雅克科技、宁德时代、天士力、贵州茅台、科锐国际、海星股份</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="my-4">
      <h4 class="font-bold text-slate-800 mb-2">其他重点关注个股</h4>
      <ul class="space-y-1.5 text-sm text-slate-700">
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>恒力石化（600346）：</strong>Q1净利润+90.65%，炼化龙头韧性显现（开源）</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>德明利（001309）：</strong>1Q26预计净利同比+4659%-5383%，存储周期爆发（国信）</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>海星股份（603115）：</strong>AI服务器驱动电极箔市场扩容，2030年破100亿（中银）</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>通富微电（002156）：</strong>槟城工厂3nm封装通过验证（国信）</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>燕京啤酒（000729）：</strong>U8放量带动量价齐升，2026Q1预计净利+55%-65%（东海）</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>昊帆生物（301393）：</strong>全球多肽合成试剂龙头，受益GLP-1赛道高景气（开源）</span></li>
      </ul>
    </div>

    <!-- 四、买方策略建议 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>四、买方策略建议</h2>

    <h3 id="b_sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">仓位与行业配置</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">维度</th>
            <th class="px-4 py-3 text-left">建议</th>
            <th class="px-4 py-3 text-left">依据</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors"><td class="px-4 py-3 font-bold">总体仓位</td><td class="px-4 py-3 font-semibold">中性偏积极（6-7成）</td><td class="px-4 py-3 text-sm text-slate-600">经济数据向好但指数面临压力位，不宜满仓追高</td></tr>
          <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-bold">加仓方向</td><td class="px-4 py-3 font-semibold text-green-700">业绩确定性强的低估值板块</td><td class="px-4 py-3 text-sm text-slate-600">年报/一季报密集披露期，业绩是核心选股标准</td></tr>
          <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-bold">减仓方向</td><td class="px-4 py-3 font-semibold text-red-700">前期涨幅过高、无业绩支撑的题材股</td><td class="px-4 py-3 text-sm text-slate-600">短线获利盘兑现压力大，量价背离信号明显</td></tr>
          <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-bold">对冲配置</td><td class="px-4 py-3 font-semibold">债市长端品种+黄金</td><td class="px-4 py-3 text-sm text-slate-600">资产荒逻辑延续，地缘风险未完全消除</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grid md:grid-cols-3 gap-4 my-4">
      <div class="bg-green-50 rounded-xl p-4 border border-green-200">
        <h4 class="text-green-800 font-bold mb-2">核心配置（高确定性）</h4>
        <ul class="text-sm text-green-900 space-y-1.5">
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>电子/半导体（6家共识）：</strong>AI算力产业链确定性最高，中际旭创、新易盛、德明利、浪潮信息</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>电力/公用事业（5家共识）：</strong>算电协同政策催化+AI供电刚需，华电国际、长江电力、三峡能源</span></li>
        </ul>
      </div>
      <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
        <h4 class="text-blue-800 font-bold mb-2">卫星配置（阶段性机会）</h4>
        <ul class="text-sm text-blue-900 space-y-1.5">
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>煤炭（4家共识）：</strong>淡季不淡+旺季看涨，兖矿能源、陕西煤业、中国神华</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>军工/商业航天（4家共识）：</strong>逢低布局，中航沈飞、中国卫星、航天电器</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>医药/创新药（4家共识）：</strong>ASCO催化+老龄化长期逻辑，康方生物、恒瑞医药</span></li>
        </ul>
      </div>
      <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
        <h4 class="text-amber-800 font-bold mb-2">交易性机会</h4>
        <ul class="text-sm text-amber-900 space-y-1.5">
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>新能源/电池：</strong>宁德时代10C快充技术迭代</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>化工/石化：</strong>地缘冲突推升石化品价格</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>消费：</strong>贵州茅台调整窗口、燕京啤酒放量</span></li>
        </ul>
      </div>
    </div>

    <h3 id="b_sec10" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">风险提示与一周关注</h3>

    <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">⚠️</span>风险提示
      </h4>
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden">
          <thead class="bg-red-100 text-red-900">
            <tr>
              <th class="px-3 py-2 text-left text-sm">风险因素</th>
              <th class="px-3 py-2 text-center text-sm">影响程度</th>
              <th class="px-3 py-2 text-left text-sm">应对策略</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-red-100">
            <tr class="bg-red-50/50"><td class="px-3 py-2 text-sm font-semibold">美伊谈判破裂</td><td class="px-3 py-2 text-center text-sm"><span class="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">高</span></td><td class="px-3 py-2 text-sm text-red-900">控制仓位，增配黄金/能源</td></tr>
            <tr class="bg-red-50/30"><td class="px-3 py-2 text-sm font-semibold">年报/一季报业绩雷</td><td class="px-3 py-2 text-center text-sm"><span class="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">高</span></td><td class="px-3 py-2 text-sm text-red-900">回避涨幅大但业绩不确定的个股</td></tr>
            <tr class="bg-red-50/30"><td class="px-3 py-2 text-sm font-semibold">量能持续萎缩</td><td class="px-3 py-2 text-center text-sm"><span class="bg-amber-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">中</span></td><td class="px-3 py-2 text-sm text-red-900">降低交易频率，聚焦核心持仓</td></tr>
            <tr class="bg-red-50/30"><td class="px-3 py-2 text-sm font-semibold">海外科技股回调</td><td class="px-3 py-2 text-center text-sm"><span class="bg-amber-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">中</span></td><td class="px-3 py-2 text-sm text-red-900">关注A股科技股与美股联动风险</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="bg-slate-50 rounded-xl p-5 my-5 border border-slate-200">
      <h4 class="font-bold text-slate-800 mb-3">一周关注事件</h4>
      <ul class="space-y-1.5 text-sm text-slate-700">
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-3 flex-shrink-0"></span><span><strong>4月22日：</strong>美伊停火协议到期/谈判（地缘风险定价）</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-3 flex-shrink-0"></span><span><strong>4月22-23日：</strong>美联储主席提名听证会（货币政策预期）</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-3 flex-shrink-0"></span><span><strong>4月下旬：</strong>年报/一季报密集披露（业绩驱动行情）</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-3 flex-shrink-0"></span><span><strong>4月下旬：</strong>超长期特别国债首发（债市供需变化）</span></li>
      </ul>
    </div>

    <div class="text-center text-xs text-slate-400 mt-10 pb-8">
      免责声明：本报告基于公开券商晨报信息整理汇总，不构成投资建议。市场有风险，投资需谨慎。
    </div>

  </div>`;
}
