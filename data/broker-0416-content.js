function renderBrokerContent_0416() {
  return `<div class="prose prose-slate max-w-none">

  <!-- 标题区 -->
  <div class="mb-8 pb-6 border-b-2 border-slate-200">
    <h1 class="text-3xl font-black text-slate-900 mb-2">券商晨报买方汇总内参</h1>
    <p class="text-slate-500 text-sm">报告日期：2026年4月15日（星期三） | 基于10家券商晨会纪要</p>
    <p class="text-slate-400 text-xs mt-1">数据来源：国信证券、中银证券、万联证券、山西证券、开源证券、东吴证券、东兴证券、华源证券、第一创业证券、英大证券</p>
  </div>

  <!-- ========== 第一部分：核心摘要 ========== -->
  <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>第一部分：核心摘要（3分钟速读）</h2>

  <h3 id="b_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">1.1 市场共识</h3>

  <blockquote class="border-l-4 border-red-500 bg-slate-50 rounded-r-xl p-4 my-4 text-slate-700">
    <p class="text-sm font-semibold mb-2">大盘判断：沪指站上4000点关口，短期震荡整理格局。</p>
    <p class="text-sm mb-2">周三A股三大指数涨跌分化，沪指微涨0.01%，深成指跌0.97%，创业板指跌1.22%。沪深两市成交额2.42万亿元，量能维持高位。</p>
  </blockquote>

  <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-blue-800 font-black mb-3">核心逻辑</h4>
    <ul class="space-y-2 text-blue-900 text-sm">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>PPI转正</strong>：PPI在41个月后首次转正（+0.5%），标志工业品价格由降转涨，企业盈利修复预期强化</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>宽松交易终结</strong>：美伊谈判无果、地缘冲突持续，高油价推升通胀预期，美联储降息空间被压缩</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>业绩验证期</strong>：市场进入"业绩验证期"，资金沿一季报业绩主线挖掘</span></li>
    </ul>
  </div>

  <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-green-800 font-black mb-3">仓位建议</h4>
    <p class="text-green-900 text-sm">多数券商建议<strong>中等偏上仓位（6-7成）</strong>，聚焦业绩确定性强的方向，控制高估值品种风险。</p>
  </div>

  <h3 id="b_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">1.2 市场共识概览</h3>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="px-4 py-3 text-left">指标</th>
          <th class="px-4 py-3 text-center">数值</th>
          <th class="px-4 py-3 text-left">核心解读</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-semibold">上证综指</td>
          <td class="px-4 py-3 text-center text-slate-600 font-bold">4000点（微涨0.01%）</td>
          <td class="px-4 py-3 text-sm text-slate-700">站上4000点关口，短期震荡整理</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-semibold">深证成指</td>
          <td class="px-4 py-3 text-center text-green-600 font-bold">-0.97%</td>
          <td class="px-4 py-3 text-sm text-slate-700">涨跌分化，风格切换明显</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-semibold">创业板指</td>
          <td class="px-4 py-3 text-center text-red-600 font-bold">-1.22%</td>
          <td class="px-4 py-3 text-sm text-slate-700">前期领涨板块获利回吐</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-semibold">两市成交额</td>
          <td class="px-4 py-3 text-center text-purple-600 font-bold">2.42万亿元</td>
          <td class="px-4 py-3 text-sm text-slate-700">量能维持高位，增量资金有限</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-semibold">3月PPI同比</td>
          <td class="px-4 py-3 text-center text-green-600 font-bold">+0.5%</td>
          <td class="px-4 py-3 text-sm text-slate-700">41个月来首次转正，工业品价格由降转涨</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-semibold">3月CPI同比</td>
          <td class="px-4 py-3 text-center text-blue-600 font-bold">+1.0%</td>
          <td class="px-4 py-3 text-sm text-slate-700">低于预期，核心CPI环比-0.7%</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-semibold">3月M2同比</td>
          <td class="px-4 py-3 text-center text-slate-600 font-bold">+8.5%</td>
          <td class="px-4 py-3 text-sm text-slate-700">货币供应维持宽松</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-semibold">3月M1同比</td>
          <td class="px-4 py-3 text-center text-slate-600 font-bold">+5.1%</td>
          <td class="px-4 py-3 text-sm text-slate-700">M1-M2剪刀差走扩，总量增长偏弱</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-semibold">3月出口同比</td>
          <td class="px-4 py-3 text-center text-emerald-600 font-bold">+2.5%</td>
          <td class="px-4 py-3 text-sm text-slate-700">春节扰动，进口+27.8%超预期</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-semibold">3月汽车出口同比</td>
          <td class="px-4 py-3 text-center text-emerald-600 font-bold">+72.7%</td>
          <td class="px-4 py-3 text-sm text-slate-700">新能源车出口+1.3倍，外需韧性仍强</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 id="b_sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">1.3 热门赛道 TOP5</h3>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="px-4 py-3 text-center">排名</th>
          <th class="px-4 py-3 text-left">行业</th>
          <th class="px-4 py-3 text-center">推荐次数</th>
          <th class="px-4 py-3 text-left">核心催化</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="bg-red-50 hover:bg-red-100 transition-colors">
          <td class="px-4 py-3 text-center font-black text-red-600 text-lg">1</td>
          <td class="px-4 py-3 font-bold text-red-900">AI算力/半导体</td>
          <td class="px-4 py-3 text-center font-bold text-red-600">8次</td>
          <td class="px-4 py-3 text-sm">Lumentum订单排至2028年、国产算力链突破、Hermes Agent周调用量超越美国</td>
        </tr>
        <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
          <td class="px-4 py-3 text-center font-black text-orange-600 text-lg">2</td>
          <td class="px-4 py-3 font-bold text-orange-900">人形机器人</td>
          <td class="px-4 py-3 text-center font-bold text-orange-600">6次</td>
          <td class="px-4 py-3 text-sm">宇树机器人10m/s刷新世界纪录、Optimus3产业催化密集</td>
        </tr>
        <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
          <td class="px-4 py-3 text-center font-black text-amber-600 text-lg">3</td>
          <td class="px-4 py-3 font-bold text-amber-900">创新药/ADC</td>
          <td class="px-4 py-3 text-center font-bold text-amber-600">5次</td>
          <td class="px-4 py-3 text-sm">ADC全球市场爆发式增长（2035年预计1227亿美元）、国产创新药出海加速</td>
        </tr>
        <tr class="bg-yellow-50 hover:bg-yellow-100 transition-colors">
          <td class="px-4 py-3 text-center font-black text-yellow-600 text-lg">4</td>
          <td class="px-4 py-3 font-bold text-yellow-900">商业航天/军工</td>
          <td class="px-4 py-3 text-center font-bold text-yellow-600">5次</td>
          <td class="px-4 py-3 text-sm">美伊局势催化、千帆星座组网、相控阵技术民用化</td>
        </tr>
        <tr class="bg-lime-50 hover:bg-lime-100 transition-colors">
          <td class="px-4 py-3 text-center font-black text-lime-600 text-lg">5</td>
          <td class="px-4 py-3 font-bold text-lime-900">电力设备/锂电</td>
          <td class="px-4 py-3 text-center font-bold text-lime-600">4次</td>
          <td class="px-4 py-3 text-sm">动力电池出口高增、储能需求爆发、全极耳产品起量</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 id="b_sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">1.4 金股 TOP10（跨券商高频推荐）</h3>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="px-4 py-3 text-center">排名</th>
          <th class="px-4 py-3 text-left">股票</th>
          <th class="px-4 py-3 text-left">代码</th>
          <th class="px-4 py-3 text-center">推荐次数</th>
          <th class="px-4 py-3 text-left">推荐券商</th>
          <th class="px-4 py-3 text-left">核心逻辑</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
          <td class="px-4 py-3 text-center font-black text-purple-600">1</td>
          <td class="px-4 py-3 font-bold text-purple-900">贵州茅台</td>
          <td class="px-4 py-3 font-mono text-sm">600519.SH</td>
          <td class="px-4 py-3 text-center"><span class="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full font-bold">3次</span></td>
          <td class="px-4 py-3 text-sm">中银、国信、华源</td>
          <td class="px-4 py-3 text-sm">经营改革推进，ToC策略打开空间，全年批价跌幅有望收窄</td>
        </tr>
        <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
          <td class="px-4 py-3 text-center font-black text-purple-600">2</td>
          <td class="px-4 py-3 font-bold text-purple-900">宁德时代</td>
          <td class="px-4 py-3 font-mono text-sm">300750.SZ</td>
          <td class="px-4 py-3 text-center"><span class="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full font-bold">3次</span></td>
          <td class="px-4 py-3 text-sm">中银、东吴、华源</td>
          <td class="px-4 py-3 text-sm">全球动力电池龙头，储能业务高增，受益锂电产业链复苏</td>
        </tr>
        <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
          <td class="px-4 py-3 text-center font-black text-purple-600">3</td>
          <td class="px-4 py-3 font-bold text-purple-900">沪电股份</td>
          <td class="px-4 py-3 font-mono text-sm">002463.SZ</td>
          <td class="px-4 py-3 text-center"><span class="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full font-bold">3次</span></td>
          <td class="px-4 py-3 text-sm">中银、国信、东吴</td>
          <td class="px-4 py-3 text-sm">AI服务器PCB核心供应商，26Q1归母净利同比+60%</td>
        </tr>
        <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
          <td class="px-4 py-3 text-center font-black text-blue-600">4</td>
          <td class="px-4 py-3 font-bold text-blue-900">海光信息</td>
          <td class="px-4 py-3 font-mono text-sm">688041.SH</td>
          <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-bold">3次</span></td>
          <td class="px-4 py-3 text-sm">山西、东海、华源</td>
          <td class="px-4 py-3 text-sm">CPU+DCU"双芯战略"加速落地，国产算力核心标的</td>
        </tr>
        <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
          <td class="px-4 py-3 text-center font-black text-blue-600">5</td>
          <td class="px-4 py-3 font-bold text-blue-900">中矿资源</td>
          <td class="px-4 py-3 font-mono text-sm">002738.SZ</td>
          <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full font-bold">3次</span></td>
          <td class="px-4 py-3 text-sm">东兴、开源、华源</td>
          <td class="px-4 py-3 text-sm">锂盐产能恢复+铯铷稀有金属扩产，26Q1业绩同比+270%~308%</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 text-center font-semibold">6</td>
          <td class="px-4 py-3 font-semibold">圣农发展</td>
          <td class="px-4 py-3 font-mono text-sm">002299.SZ</td>
          <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-800 text-xs px-2 py-0.5 rounded-full">2次</span></td>
          <td class="px-4 py-3 text-sm">开源、山西</td>
          <td class="px-4 py-3 text-sm">成本管控出色，C端业务高增，高分红延续</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 text-center font-semibold">7</td>
          <td class="px-4 py-3 font-semibold">浪潮信息</td>
          <td class="px-4 py-3 font-mono text-sm">000977.SZ</td>
          <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-800 text-xs px-2 py-0.5 rounded-full">2次</span></td>
          <td class="px-4 py-3 text-sm">开源、国信</td>
          <td class="px-4 py-3 text-sm">国内AI服务器龙头，推出超节点支撑多Agent规模化落地</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 text-center font-semibold">8</td>
          <td class="px-4 py-3 font-semibold">恒力石化</td>
          <td class="px-4 py-3 font-mono text-sm">600346.SH</td>
          <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-800 text-xs px-2 py-0.5 rounded-full">2次</span></td>
          <td class="px-4 py-3 text-sm">东吴、东兴</td>
          <td class="px-4 py-3 text-sm">民营大炼化龙头，地缘冲突推动油价上行受益</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 text-center font-semibold">9</td>
          <td class="px-4 py-3 font-semibold">燕京啤酒</td>
          <td class="px-4 py-3 font-mono text-sm">000729.SZ</td>
          <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-800 text-xs px-2 py-0.5 rounded-full">2次</span></td>
          <td class="px-4 py-3 text-sm">东吴、华源</td>
          <td class="px-4 py-3 text-sm">大单品U8高增，改革红利持续释放，净利率持续提升</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 text-center font-semibold">10</td>
          <td class="px-4 py-3 font-semibold">华鲁恒升</td>
          <td class="px-4 py-3 font-mono text-sm">600426.SH</td>
          <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-800 text-xs px-2 py-0.5 rounded-full">2次</span></td>
          <td class="px-4 py-3 text-sm">东兴、开源</td>
          <td class="px-4 py-3 text-sm">煤化工龙头，成本优势突出，高分红</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ========== 第二部分：宏观策略汇总 ========== -->
  <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>第二部分：宏观策略汇总</h2>

  <h3 id="b_sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">2.1 10家券商策略观点</h3>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="px-4 py-3 text-left">券商</th>
          <th class="px-4 py-3 text-left">大盘判断</th>
          <th class="px-4 py-3 text-center">仓位建议</th>
          <th class="px-4 py-3 text-left">风格偏好</th>
          <th class="px-4 py-3 text-left">核心逻辑</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">国信证券</td>
          <td class="px-4 py-3 text-sm">沪指4000点震荡，创业板创新高后回调</td>
          <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-800 text-xs px-2 py-0.5 rounded-full">中等仓位</span></td>
          <td class="px-4 py-3 text-sm">成长+价值均衡</td>
          <td class="px-4 py-3 text-sm">美伊"斗而不破"成常态；宽松交易终结，黄金长线上行逻辑最清晰</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">中银证券</td>
          <td class="px-4 py-3 text-sm">前期压制因素消退，市场修复延续</td>
          <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">积极配置</span></td>
          <td class="px-4 py-3 text-sm">成长主线</td>
          <td class="px-4 py-3 text-sm">非银板块盈利估值性价比较高；国产大模型-云服务-国产算力正向循环打通</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">万联证券</td>
          <td class="px-4 py-3 text-sm">社融增速承压，货币政策维持宽松</td>
          <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-800 text-xs px-2 py-0.5 rounded-full">关注债市</span></td>
          <td class="px-4 py-3 text-sm">均衡</td>
          <td class="px-4 py-3 text-sm">出口+2.5%（春节扰动），进口+27.8%超预期；中国商品性价比支撑出口韧性</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">山西证券</td>
          <td class="px-4 py-3 text-sm">结构性行情，关注业绩主线</td>
          <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-800 text-xs px-2 py-0.5 rounded-full">适中仓位</span></td>
          <td class="px-4 py-3 text-sm">科技成长+军工</td>
          <td class="px-4 py-3 text-sm">ADC重塑肿瘤治疗格局；海光信息"双芯战略"加速落地</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">开源证券</td>
          <td class="px-4 py-3 text-sm">震荡格局，关注业绩确定性</td>
          <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-800 text-xs px-2 py-0.5 rounded-full">精选个股</span></td>
          <td class="px-4 py-3 text-sm">业绩驱动</td>
          <td class="px-4 py-3 text-sm">机构调研热度回升：基础化工、传媒、商贸零售</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">东吴证券</td>
          <td class="px-4 py-3 text-sm">外需韧性仍强，关注4-5月出口变化</td>
          <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-800 text-xs px-2 py-0.5 rounded-full">均衡配置</span></td>
          <td class="px-4 py-3 text-sm">成长+周期</td>
          <td class="px-4 py-3 text-sm">3月出口回落主因春节扰动，非伊朗冲突影响；全球制造业PMI连续8个月荣枯线上方</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">东兴证券</td>
          <td class="px-4 py-3 text-sm">市场逐步脱敏企稳</td>
          <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">中等偏上</span></td>
          <td class="px-4 py-3 text-sm">景气度优先</td>
          <td class="px-4 py-3 text-sm">美伊谈判一波三折符合预期，战争对资本市场冲击逐步降低</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">华源证券</td>
          <td class="px-4 py-3 text-sm">债市长债机会突出</td>
          <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-800 text-xs px-2 py-0.5 rounded-full">债股均衡</span></td>
          <td class="px-4 py-3 text-sm">超长债+成长</td>
          <td class="px-4 py-3 text-sm">10Y国债目标区间2-3%，中枢或为2.5%；AI Agent入口争夺持续演绎</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">第一创业</td>
          <td class="px-4 py-3 text-sm">总量增长偏弱，结构分化</td>
          <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-800 text-xs px-2 py-0.5 rounded-full">谨慎乐观</span></td>
          <td class="px-4 py-3 text-sm">科技+消费</td>
          <td class="px-4 py-3 text-sm">M2同比8.5%、M1同比5.1%，剪刀差走扩；PPI同比+0.5%结束41个月负增长</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">英大证券</td>
          <td class="px-4 py-3 text-sm">A股走势韧性，重点关注业绩主线</td>
          <td class="px-4 py-3 text-center"><span class="bg-slate-100 text-slate-800 text-xs px-2 py-0.5 rounded-full">中等仓位</span></td>
          <td class="px-4 py-3 text-sm">业绩驱动</td>
          <td class="px-4 py-3 text-sm">3月PPI 41个月来首次转正，企业盈利回升预期强化</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ========== 第三部分：行业推荐共识 ========== -->
  <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>第三部分：行业推荐共识</h2>

  <h3 id="b_sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.1 行业推荐次数统计</h3>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="px-4 py-3 text-left">行业</th>
          <th class="px-4 py-3 text-center">推荐次数</th>
          <th class="px-4 py-3 text-left">主要逻辑</th>
          <th class="px-4 py-3 text-left">推荐券商</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="bg-red-50 hover:bg-red-100 transition-colors">
          <td class="px-4 py-3 font-bold text-red-900">AI算力/半导体</td>
          <td class="px-4 py-3 text-center font-bold text-red-600">8</td>
          <td class="px-4 py-3 text-sm">AI服务器PCB需求爆发；Lumentum订单排至2028年；国产算力链三箭齐发；Hermes Agent调用量连续5周超越美国</td>
          <td class="px-4 py-3 text-xs">国信、中银、山西、开源、东吴、东兴、华源、英大</td>
        </tr>
        <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
          <td class="px-4 py-3 font-bold text-orange-900">人形机器人</td>
          <td class="px-4 py-3 text-center font-bold text-orange-600">6</td>
          <td class="px-4 py-3 text-sm">宇树10m/s刷新世界纪录；Optimus3产业催化密集；特斯拉产业链核心供应商确定性高</td>
          <td class="px-4 py-3 text-xs">国信、山西、开源、东兴、华源、第一创业</td>
        </tr>
        <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
          <td class="px-4 py-3 font-bold text-amber-900">创新药/ADC</td>
          <td class="px-4 py-3 text-center font-bold text-amber-600">5</td>
          <td class="px-4 py-3 text-sm">ADC全球市场爆发式增长，2035年预计1227亿美元；HER2、TROP-2等核心靶点ADC进入III期临床</td>
          <td class="px-4 py-3 text-xs">山西、国信、华源、开源、东海</td>
        </tr>
        <tr class="bg-yellow-50 hover:bg-yellow-100 transition-colors">
          <td class="px-4 py-3 font-bold text-yellow-900">商业航天/军工</td>
          <td class="px-4 py-3 text-center font-bold text-yellow-600">5</td>
          <td class="px-4 py-3 text-sm">美伊局势催化；千帆星座第七批组网成功；相控阵T/R组件民用化；安徽出台商业航天方案</td>
          <td class="px-4 py-3 text-xs">山西、国信、开源、东兴、东吴</td>
        </tr>
        <tr class="bg-lime-50 hover:bg-lime-100 transition-colors">
          <td class="px-4 py-3 font-bold text-lime-900">电力设备/锂电</td>
          <td class="px-4 py-3 text-center font-bold text-lime-600">4</td>
          <td class="px-4 py-3 text-sm">3月汽车出口+72.7%，新能源车出口+1.3倍；全极耳产品起量；钠离子电池概念活跃</td>
          <td class="px-4 py-3 text-xs">东吴、中银、国信、东兴</td>
        </tr>
        <tr class="bg-emerald-50 hover:bg-emerald-100 transition-colors">
          <td class="px-4 py-3 font-bold text-emerald-900">银行/非银金融</td>
          <td class="px-4 py-3 text-center font-bold text-emerald-600">4</td>
          <td class="px-4 py-3 text-sm">PPI转正利好银行资产质量；华泰扣非+80%；平安NBV增长29.3%</td>
          <td class="px-4 py-3 text-xs">开源、华源、国信、东兴</td>
        </tr>
        <tr class="bg-teal-50 hover:bg-teal-100 transition-colors">
          <td class="px-4 py-3 font-bold text-teal-900">食品饮料/白酒</td>
          <td class="px-4 py-3 text-center font-bold text-teal-600">4</td>
          <td class="px-4 py-3 text-sm">白酒板块底部信号增多；燕京U8高增29.3%，改革红利释放</td>
          <td class="px-4 py-3 text-xs">国信、中银、东吴、华源</td>
        </tr>
        <tr class="bg-cyan-50 hover:bg-cyan-100 transition-colors">
          <td class="px-4 py-3 font-bold text-cyan-900">传媒/AI应用</td>
          <td class="px-4 py-3 text-center font-bold text-cyan-600">3</td>
          <td class="px-4 py-3 text-sm">OpenClaw启发AI Agent新阶段；AI入口竞争持续演绎</td>
          <td class="px-4 py-3 text-xs">华源、开源、国信</td>
        </tr>
        <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
          <td class="px-4 py-3 font-bold text-blue-900">工程机械</td>
          <td class="px-4 py-3 text-center font-bold text-blue-600">3</td>
          <td class="px-4 py-3 text-sm">3月挖掘机+26.4%，装载机+22.3%；电动装载机渗透率30.3%</td>
          <td class="px-4 py-3 text-xs">万联、山西、东兴</td>
        </tr>
        <tr class="bg-indigo-50 hover:bg-indigo-100 transition-colors">
          <td class="px-4 py-3 font-bold text-indigo-900">公用环保/核电</td>
          <td class="px-4 py-3 text-center font-bold text-indigo-600">3</td>
          <td class="px-4 py-3 text-sm">四家央企碳资产公司成立核能方法学联合体；核电有望价值重估</td>
          <td class="px-4 py-3 text-xs">国信、东吴、东兴</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 id="b_sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.2 AI算力/半导体（8家推荐）</h3>

  <div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
    <h4 class="text-purple-800 font-black mb-3">AI算力/半导体（共识度最高赛道）</h4>
    <ul class="space-y-3 text-purple-900 text-sm">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>国信证券</strong>：Lumentum预计两个季度内售罄2028年产能，光通信产业景气周期持续拉长。关注光通信设备产业链（测试仪器国产化率仅16%）</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>中银证券</strong>：沪电股份2025年营收+42%、归母净利+48%，AI服务器、高速网络、卫星通信驱动HLC（18+）和HDI市场快速增长，26Q1归母净利延续+60%高增</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>山西证券</strong>：海光信息全年收入+56.92%，26Q1收入+68.06%，CPU+DCU"双芯战略"加速落地，AI Agent普及带来CPU增量需求，信创验收临近加速国产CPU采购</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>开源证券</strong>：浪潮信息2025年营收+43.25%，发布超节点AI服务器元脑SD200，64路本土AI芯片高速互联，token生成速度7.3毫秒创国内最快</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>东吴证券</strong>：龙迅股份深耕高速混合信号芯片，车载SerDes芯片进入全面推广，26Q1归母净利同比+33.57%</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>东兴证券</strong>：火炬电子2025年营收+47.09%，MLCC、薄膜电容景气度延续，特种市场业务推进提速</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>华源证券</strong>：OpenClaw启发AI Agent新阶段，AI入口竞争持续演绎，关注手机端侧、超级APP和垂直AI平台</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>英大证券</strong>：国产算力链三箭齐发，工信部普惠算力赋能中小企业专项行动，中国模型在Hermes Agent调用量包揽前三</span></li>
    </ul>
  </div>

  <h3 id="b_sec8" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.3 人形机器人（6家推荐）</h3>

  <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-orange-800 font-black mb-3">人形机器人</h4>
    <ul class="space-y-3 text-orange-900 text-sm">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>国信证券</strong>：宇树机器人H1达到10m/s奔跑速度刷新世界纪录。关注特斯拉产业链核心供应商（恒立液压、五洲新春、绿的谐波等）及增量环节（唯万密封、龙溪股份等）</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>山西证券</strong>：航天电器战略新兴领域拓展见成效，商业航天、低空经济、新能源、人工智能等新质新域领域将迎来增长高潮</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>开源证券</strong>：人形机器人弹簧送样进展顺利，美力科技拟投6.5亿元建设智能悬架及电动液压驱动弹性元件产能</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>东吴证券</strong>：新锐股份并购整合加速，外延并购与钨价红利共振，2025年归母净利润同比+25.13%</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>东兴证券</strong>：关注机器人产业链核心零部件供应商，产业催化密集</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>华源证券</strong>：同力股份推进无人驾驶矿卡商业化落地，无人化驾驶技术日臻成熟</span></li>
    </ul>
  </div>

  <h3 id="b_sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.4 创新药/ADC（5家推荐）</h3>

  <div class="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-emerald-800 font-black mb-3">创新药/ADC</h4>
    <ul class="space-y-3 text-emerald-900 text-sm">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>山西证券</strong>：ADC重塑肿瘤治疗格局，全球市场从2019年28亿美元跃升至2024年141亿美元，预计2035年突破1227亿美元。看好恒瑞医药、百利天恒、科伦博泰、荣昌生物等</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>国信证券</strong>：创新药概念爆发，医药生物板块领涨，仿制药一致性评价、医药电商涨幅居前</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>华源证券</strong>：康方生物2025年营收+43.9%，依沃西单抗和卡度尼利单抗纳入医保，海外BLA审评中，引领肿瘤疗法新范式</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>东吴证券</strong>：关注创新药产业链上游，医药生物板块持续活跃</span></li>
    </ul>
  </div>

  <h3 id="b_sec10" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.5 商业航天/军工（5家推荐）</h3>

  <div class="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-amber-800 font-black mb-3">商业航天/军工</h4>
    <ul class="space-y-3 text-amber-900 text-sm">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>山西证券</strong>：航天电器订货创历史新高，营收+15.82%；国博电子运营质效持续提升，T/R组件拓展低轨卫星和商业航天领域；中航西飞民用航空收入创新高</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>国信证券</strong>：四家央企碳资产公司成立核能方法学联合体，核电有望价值重估</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>开源证券</strong>：美伊谈判未共识，商业航天催化密集。安徽出台商业航天产业行动方案，到2028年产业规模破700亿</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>东吴证券</strong>：钧达股份积极布局商业航天+太空光伏，打造新成长点</span></li>
    </ul>
  </div>

  <h3 id="b_sec11" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.6 电力设备/新能源（4家推荐）</h3>

  <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-blue-800 font-black mb-3">电力设备/新能源</h4>
    <ul class="space-y-3 text-blue-900 text-sm">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>东吴证券</strong>：蔚蓝锂芯2025年营收+20%，全极耳产品开始起量，主要用于BBU、机器人、eVTol等领域；钧达股份26Q1扭亏为盈</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>中银证券</strong>：当升科技2025年盈利+34.02%，锂电材料销量大幅增长，新型电池材料有望放量</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>国信证券</strong>：服务器液冷专题，算力提升催化液冷需求，供应商迎来国产替代机遇</span></li>
    </ul>
  </div>

  <h3 id="b_sec12" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.7 银行/非银金融（4家推荐）</h3>

  <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-green-800 font-black mb-3">银行/非银金融</h4>
    <ul class="space-y-3 text-green-900 text-sm">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>开源证券</strong>：大型银行存贷差强势上行或告一段落，冗余头寸开始消化。优选业绩确定性：江苏银行、杭州银行、成都银行等。国有大行FVOCI浮盈储备充足</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>华源证券</strong>：华泰证券扣非业绩同比+80%，国际业务持续增长，"All in AI"战略驱动全业务链价值提升；中国平安银保NBV增长138%</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>国信证券</strong>：煤炭、银行和钢铁行业股息率排名前三，高分红策略值得关注</span></li>
    </ul>
  </div>

  <h3 id="b_sec13" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.8 食品饮料/白酒（4家推荐）</h3>

  <div class="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-teal-800 font-black mb-3">食品饮料/白酒</h4>
    <ul class="space-y-3 text-teal-900 text-sm">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>国信证券</strong>：白酒板块底部信号增多，茅台改革打开重估空间，飞天茅台投放量多增，ToC策略培育长尾需求。建议关注泸州老窖、五粮液、迎驾贡酒</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>中银证券</strong>：贵州茅台为4月金股首推，全年批价同比跌幅有望逐步收窄</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>东吴证券</strong>：燕京啤酒2025年归母净利+59.06%，大单品U8销量+29.31%，改革成效持续兑现</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>华源证券</strong>：燕京啤酒核心大单品势能强劲，产品结构升级路径清晰，"十五五"规划构建"一核两翼"业务布局</span></li>
    </ul>
  </div>

  <h3 id="b_sec14" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.9 农林牧渔</h3>

  <div class="bg-gradient-to-r from-lime-50 to-green-50 border-l-4 border-lime-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-lime-800 font-black mb-3">农林牧渔</h4>
    <ul class="space-y-3 text-lime-900 text-sm">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-lime-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>山西证券</strong>：圣农发展2025年归母净利+90.55%，成本管控出色，C端业务增长超60%，26Q1预计归母净利同比+69%~97%</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-lime-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>华源证券</strong>：猪价跌至8.82元/公斤创十余年新低，行业进入净现金流为负阶段，产能有望加速去化，周期拐点将近</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-lime-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>国信证券</strong>：生猪养殖板块进入寻底阶段，近期市场关注度有所提升</span></li>
    </ul>
  </div>

  <h3 id="b_sec15" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.10 传媒/AI应用</h3>

  <div class="bg-gradient-to-r from-violet-50 to-purple-50 border-l-4 border-violet-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-violet-800 font-black mb-3">传媒/AI应用</h4>
    <ul class="space-y-3 text-violet-900 text-sm">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-violet-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>华源证券</strong>：OpenClaw启发AI Agent新阶段，黄仁勋将其类比为Windows之于PC时代。关注腾讯控股、阿里巴巴、快手等具备流量优势的平台公司</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-violet-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>国信证券</strong>：游戏板块一季报值得期待，关注重磅新游</span></li>
    </ul>
  </div>

  <h3 id="b_sec16" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.11 化工/基础材料</h3>

  <div class="bg-gradient-to-r from-stone-50 to-amber-50 border-l-4 border-stone-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-stone-800 font-black mb-3">化工/基础材料</h4>
    <ul class="space-y-3 text-stone-900 text-sm">
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-stone-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>国信证券</strong>：醋酸行业成本推动叠加出口拉动，价格快速上行</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-stone-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>东吴证券</strong>：恒力石化地缘冲突下有望明显受益，民营大炼化龙头成本优势突出</span></li>
      <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-stone-600 mt-2 mr-3 flex-shrink-0"></span><span><strong>中银证券</strong>：浙江龙盛年度分红比率53.36%</span></li>
    </ul>
  </div>

  <!-- ========== 第四部分：金股组合 ========== -->
  <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-emerald-600 rounded-full mr-3"></span>第四部分：券商金股组合</h2>

  <h3 id="b_sec17" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">4.1 中银证券4月金股组合</h3>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <thead class="bg-blue-900 text-white">
        <tr>
          <th class="px-4 py-3 text-left">股票代码</th>
          <th class="px-4 py-3 text-left">股票名称</th>
          <th class="px-4 py-3 text-left">核心逻辑</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-mono text-sm">0119.HK</td><td class="px-4 py-3 font-semibold">保利置业集团</td><td class="px-4 py-3 text-sm">地产板块估值修复</td></tr>
        <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-mono text-sm">600428.SH</td><td class="px-4 py-3 font-semibold">中远海特</td><td class="px-4 py-3 text-sm">航运周期受益</td></tr>
        <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-mono text-sm">1519.HK</td><td class="px-4 py-3 font-semibold">极兔速递-W</td><td class="px-4 py-3 text-sm">物流行业景气度回升</td></tr>
        <tr class="bg-purple-50 hover:bg-purple-100 transition-colors"><td class="px-4 py-3 font-mono text-sm">002648.SZ</td><td class="px-4 py-3 font-bold text-purple-900">卫星化学</td><td class="px-4 py-3 text-sm">化工龙头，业绩确定性</td></tr>
        <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-mono text-sm">002409.SZ</td><td class="px-4 py-3 font-semibold">雅克科技</td><td class="px-4 py-3 text-sm">半导体材料国产替代</td></tr>
        <tr class="bg-red-50 hover:bg-red-100 transition-colors"><td class="px-4 py-3 font-mono text-sm">300750.SZ</td><td class="px-4 py-3 font-bold text-red-900">宁德时代</td><td class="px-4 py-3 text-sm">全球动力电池龙头</td></tr>
        <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-mono text-sm">600535.SH</td><td class="px-4 py-3 font-semibold">天士力</td><td class="px-4 py-3 text-sm">创新药管线推进</td></tr>
        <tr class="bg-red-50 hover:bg-red-100 transition-colors"><td class="px-4 py-3 font-mono text-sm">600519.SH</td><td class="px-4 py-3 font-bold text-red-900">贵州茅台</td><td class="px-4 py-3 text-sm">经营改革推进，批价底部支撑力强</td></tr>
        <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-mono text-sm">300662.SZ</td><td class="px-4 py-3 font-semibold">科锐国际</td><td class="px-4 py-3 text-sm">人力资源服务龙头</td></tr>
        <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-mono text-sm">603115.SH</td><td class="px-4 py-3 font-semibold">海星股份</td><td class="px-4 py-3 text-sm">电子元件细分龙头</td></tr>
      </tbody>
    </table>
  </div>

  <h3 id="b_sec18" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">4.2 东兴证券4月金股组合</h3>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <thead class="bg-emerald-900 text-white">
        <tr>
          <th class="px-4 py-3 text-left">股票代码</th>
          <th class="px-4 py-3 text-left">股票名称</th>
          <th class="px-4 py-3 text-left">核心逻辑</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-mono text-sm">002392.SZ</td><td class="px-4 py-3 font-semibold">北京利尔</td><td class="px-4 py-3 text-sm">耐火材料龙头，受益钢铁行业复苏</td></tr>
        <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-mono text-sm">002738.SZ</td><td class="px-4 py-3 font-bold text-blue-900">中矿资源</td><td class="px-4 py-3 text-sm">锂盐+铯铷+锗镓锌多金属业务共振</td></tr>
        <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-mono text-sm">002991.SZ</td><td class="px-4 py-3 font-semibold">甘源食品</td><td class="px-4 py-3 text-sm">零食赛道高景气</td></tr>
        <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-mono text-sm">300666.SZ</td><td class="px-4 py-3 font-semibold">江丰电子</td><td class="px-4 py-3 text-sm">半导体靶材国产替代</td></tr>
        <tr class="bg-blue-50 hover:bg-blue-100 transition-colors"><td class="px-4 py-3 font-mono text-sm">600426.SH</td><td class="px-4 py-3 font-bold text-blue-900">华鲁恒升</td><td class="px-4 py-3 text-sm">煤化工龙头，成本优势突出</td></tr>
        <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-mono text-sm">600487.SH</td><td class="px-4 py-3 font-semibold">亨通光电</td><td class="px-4 py-3 text-sm">光通信受益AI基建</td></tr>
        <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-mono text-sm">601111.SH</td><td class="px-4 py-3 font-semibold">中国国航</td><td class="px-4 py-3 text-sm">航空出行需求恢复</td></tr>
        <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-mono text-sm">603239.SH</td><td class="px-4 py-3 font-semibold">浙江仙通</td><td class="px-4 py-3 text-sm">汽车密封条龙头</td></tr>
        <tr class="hover:bg-slate-50 transition-colors"><td class="px-4 py-3 font-mono text-sm">688531.SH</td><td class="px-4 py-3 font-semibold">日联科技</td><td class="px-4 py-3 text-sm">X射线检测设备国产替代</td></tr>
      </tbody>
    </table>
  </div>

  <!-- ========== 第五部分：风险与分歧 ========== -->
  <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>第五部分：风险提示与分歧点</h2>

  <h3 id="b_sec19" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">5.1 主要分歧</h3>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
      <h4 class="text-amber-800 font-black mb-2">1. 出口走势判断</h4>
      <p class="text-amber-900 text-sm">万联和东吴认为3月出口回落主因春节错位扰动，外需韧性仍强；但部分券商认为需关注4-5月出口变化，美伊冲突对新兴经济体需求的影响可能显现</p>
    </div>
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-2">2. 货币政策节奏</h4>
      <p class="text-blue-900 text-sm">华源预计10Y国债收益率中枢2.5%，建议拉长久期；但国信认为宽松交易终结，美联储降息空间被压缩</p>
    </div>
    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-5 rounded-r-xl">
      <h4 class="text-emerald-800 font-black mb-2">3. PPI转正解读</h4>
      <p class="text-emerald-900 text-sm">部分券商认为PPI转正标志企业盈利修复开始；但东吴指出涨价重心仍在上游工业品，中下游传导不足，终端消费价格尚未形成稳定接力</p>
    </div>
    <div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-500 p-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-2">4. 市场风格偏好</h4>
      <p class="text-purple-900 text-sm">东兴、英大强调"业绩主线"，偏好景气度验证的成长股；开源、国信认为低估值高股息价值股具备中期配置价值</p>
    </div>
  </div>

  <h3 id="b_sec20" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">5.2 共同风险</h3>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-2">1. 中东地缘冲突升级</h4>
      <p class="text-red-900 text-sm">美伊谈判无果，以色列可能单边升级战事，成为最大尾部风险。高油价持续推升全球通胀预期</p>
    </div>
    <div class="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-5 rounded-r-xl">
      <h4 class="text-orange-800 font-black mb-2">2. 一季报业绩不及预期</h4>
      <p class="text-orange-900 text-sm">4月中下旬年报与一季报密集披露，业绩不及预期个股可能成为风险点</p>
    </div>
    <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
      <h4 class="text-amber-800 font-black mb-2">3. 增量资金不足</h4>
      <p class="text-amber-900 text-sm">两市成交额虽维持在2.4万亿水平，但增量资金有限，存量博弈下结构性行情反复</p>
    </div>
    <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-5 rounded-r-xl">
      <h4 class="text-yellow-800 font-black mb-2">4. 海外政策不确定性</h4>
      <p class="text-yellow-900 text-sm">IMF下调2026年全球经济增长预期至3.1%；美联储降息延后概率增加；美国关税政策变化可能扰动出口</p>
    </div>
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-2">5. 人民币升值压力</h4>
      <p class="text-blue-900 text-sm">人民币对美元升值趋势影响出口企业利润</p>
    </div>
    <div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-500 p-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-2">6. 居民消费持续偏弱</h4>
      <p class="text-purple-900 text-sm">3月CPI同比+1.0%低于预期，核心CPI环比-0.7%，内需修复节奏偏慢</p>
    </div>
  </div>

  <h3 id="b_sec21" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">5.3 本周重点事件日历</h3>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="px-4 py-3 text-left">日期</th>
          <th class="px-4 py-3 text-left">事件</th>
          <th class="px-4 py-3 text-left">影响评估</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
          <td class="px-4 py-3 font-semibold">4月16日（周四）</td>
          <td class="px-4 py-3 text-sm">邮储银行54亿股解禁；IMF发布《世界经济展望报告》</td>
          <td class="px-4 py-3 text-sm text-slate-700">IMF报告可能影响全球风险偏好</td>
        </tr>
        <tr class="hover:bg-slate-50 transition-colors">
          <td class="px-4 py-3 font-semibold">4月17日（周五）</td>
          <td class="px-4 py-3 text-sm">26Q1美股财报季开启</td>
          <td class="px-4 py-3 text-sm text-slate-700">影响全球风险偏好和科技股估值锚</td>
        </tr>
        <tr class="bg-red-50 hover:bg-red-100 transition-colors">
          <td class="px-4 py-3 font-semibold">4月下旬</td>
          <td class="px-4 py-3 text-sm">A股一季报密集披露期</td>
          <td class="px-4 py-3 text-sm text-slate-700">业绩主线成为市场焦点，业绩雷风险上升</td>
        </tr>
        <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
          <td class="px-4 py-3 font-semibold">持续关注</td>
          <td class="px-4 py-3 text-sm">美伊第二轮谈判进展；霍尔木兹海峡管控情况</td>
          <td class="px-4 py-3 text-sm text-slate-700">地缘政治最大不确定性来源</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 免责声明 -->
  <div class="mt-10 pt-6 border-t border-slate-200">
    <p class="text-slate-400 text-xs text-center italic">免责声明：本报告基于各券商公开晨会纪要整理汇总，仅供参考，不构成投资建议。投资有风险，入市需谨慎。</p>
  </div>

  </div>`;
}
