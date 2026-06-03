function renderMacroContent_0603() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 报告标题 -->
    <div class="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 rounded-2xl p-8 text-white mb-8 shadow-xl">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-3xl">📊</span>
        <h1 class="text-3xl font-black m-0">宏观研究买方策略内参</h1>
      </div>
      <p class="text-blue-100 text-lg m-0">2026年6月3日 | 数据来源：国家统计局、海关总署、人民银行、Wind、各券商研究所</p>
    </div>

    <!-- 一、执行摘要 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>一、执行摘要</h2>

    <h3 id="m_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">核心结论</h3>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-xl shadow-sm">
      <h4 class="text-blue-900 font-black text-lg mb-3">K型分化关键节点：外强内弱</h4>
      <p class="text-blue-900 leading-relaxed">2026年6月，中国经济处于<strong>"外强内弱"</strong>的K型分化关键节点：5月制造业PMI回落至<strong>50.0%</strong>荣枯线，新订单与新出口订单双双跌破扩张区间，供强需弱格局重现；但出口受AI超级周期支撑前4月增长<strong>14.5%</strong>，PPI同比大幅回升至<strong>2.8%</strong>（45个月新高），名义GDP增速显著加快。</p>
    </div>

    <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 my-6 rounded-r-xl shadow-sm">
      <h4 class="text-amber-900 font-black text-lg mb-3">外部三大变量</h4>
      <ul class="space-y-2 m-0">
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>美伊冲突僵持</strong>：推高油价，地缘溢价持续</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>美联储沃什上任</strong>：鹰派预期重定价，年内降息预期完全抹去</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>中美"建设性战略稳定关系"</strong>：短期缓解贸易摩擦，11月暂缓期到期是关键</span></li>
      </ul>
    </div>

    <div class="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-6 my-6 rounded-r-xl shadow-sm">
      <h4 class="text-emerald-900 font-black text-lg mb-3">大类资产排序与策略</h4>
      <p class="text-emerald-900 leading-relaxed mb-3"><strong>资产排序：股票 > 商品 > 黄金 > 债券</strong></p>
      <p class="text-emerald-900 leading-relaxed mb-0">策略上建议以<strong>"哑铃策略"</strong>为主：一端布局AI产业链出口受益标的，另一端配置高股息防御资产。</p>
    </div>

    <!-- 二、关键经济数据追踪 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>二、关键经济数据追踪</h2>

    <h3 id="m_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">增长与通胀指标</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left font-semibold">指标</th>
            <th class="px-4 py-3 text-center font-semibold">最新值</th>
            <th class="px-4 py-3 text-center font-semibold">前值</th>
            <th class="px-4 py-3 text-center font-semibold">环比变化</th>
            <th class="px-4 py-3 text-left font-semibold">状态</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">Q1实际GDP同比</td>
            <td class="px-4 py-3 text-center">5.00%</td>
            <td class="px-4 py-3 text-center">5.20%（Q4 2025）</td>
            <td class="px-4 py-3 text-center text-red-600">-0.2pp</td>
            <td class="px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-semibold">符合预期</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">5月制造业PMI</td>
            <td class="px-4 py-3 text-center font-bold text-red-600">50.0%</td>
            <td class="px-4 py-3 text-center">50.3%</td>
            <td class="px-4 py-3 text-center text-red-600">-0.3pp</td>
            <td class="px-4 py-3"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs font-semibold">回落至临界值</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">5月非制造业PMI</td>
            <td class="px-4 py-3 text-center">50.1%</td>
            <td class="px-4 py-3 text-center">49.4%</td>
            <td class="px-4 py-3 text-center text-green-600">+0.7pp</td>
            <td class="px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-semibold">回升至扩张区间</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">4月CPI同比</td>
            <td class="px-4 py-3 text-center font-bold text-amber-600">1.2%</td>
            <td class="px-4 py-3 text-center">1.0%</td>
            <td class="px-4 py-3 text-center text-amber-600">+0.2pp</td>
            <td class="px-4 py-3"><span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs font-semibold">超预期（预期0.9%）</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">4月PPI同比</td>
            <td class="px-4 py-3 text-center font-bold text-red-600">2.8%</td>
            <td class="px-4 py-3 text-center">0.5%</td>
            <td class="px-4 py-3 text-center text-red-600">+2.3pp</td>
            <td class="px-4 py-3"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs font-semibold">大幅超预期（预期1.6%）</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="m_sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">三驾马车</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left font-semibold">指标</th>
            <th class="px-4 py-3 text-center font-semibold">最新值</th>
            <th class="px-4 py-3 text-center font-semibold">前值</th>
            <th class="px-4 py-3 text-center font-semibold">环比变化</th>
            <th class="px-4 py-3 text-left font-semibold">状态</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-emerald-50 hover:bg-emerald-100 transition-colors">
            <td class="px-4 py-3 font-bold text-emerald-900">4月出口（美元计）</td>
            <td class="px-4 py-3 text-center font-bold text-emerald-700">+14.1%</td>
            <td class="px-4 py-3 text-center">+2.5%</td>
            <td class="px-4 py-3 text-center text-emerald-600">+11.6pp</td>
            <td class="px-4 py-3"><span class="bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-full text-xs font-semibold">大幅超预期</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">4月进口（美元计）</td>
            <td class="px-4 py-3 text-center">+25.3%</td>
            <td class="px-4 py-3 text-center">+27.8%</td>
            <td class="px-4 py-3 text-center text-red-600">-2.5pp</td>
            <td class="px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-semibold">维持高位</span></td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">4月社零同比</td>
            <td class="px-4 py-3 text-center font-bold text-red-700">0.2%</td>
            <td class="px-4 py-3 text-center">1.7%</td>
            <td class="px-4 py-3 text-center text-red-600">-1.5pp</td>
            <td class="px-4 py-3"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs font-semibold">显著走弱</span></td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">1-4月固投累计同比</td>
            <td class="px-4 py-3 text-center font-bold text-red-700">-1.6%</td>
            <td class="px-4 py-3 text-center">+1.7%</td>
            <td class="px-4 py-3 text-center text-red-600">转负</td>
            <td class="px-4 py-3"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs font-semibold">不及预期</span></td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">1-4月房地产投资</td>
            <td class="px-4 py-3 text-center font-bold text-red-700">-13.7%</td>
            <td class="px-4 py-3 text-center">-11.2%</td>
            <td class="px-4 py-3 text-center text-red-600">-2.5pp</td>
            <td class="px-4 py-3"><span class="bg-red-200 text-red-900 px-2 py-0.5 rounded-full text-xs font-semibold">拖累扩大</span></td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-medium">1-4月基建投资</td>
            <td class="px-4 py-3 text-center">+4.3%</td>
            <td class="px-4 py-3 text-center">+8.9%</td>
            <td class="px-4 py-3 text-center text-amber-600">-4.6pp</td>
            <td class="px-4 py-3"><span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs font-semibold">增速回落</span></td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-medium">1-4月制造业投资</td>
            <td class="px-4 py-3 text-center">+1.2%</td>
            <td class="px-4 py-3 text-center">+4.1%</td>
            <td class="px-4 py-3 text-center text-red-600">-2.9pp</td>
            <td class="px-4 py-3"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs font-semibold">大幅减速</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="m_sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">金融与货币</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left font-semibold">指标</th>
            <th class="px-4 py-3 text-center font-semibold">最新值</th>
            <th class="px-4 py-3 text-left font-semibold">状态</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">4月新增信贷</td>
            <td class="px-4 py-3 text-center font-bold text-red-700">-4006亿元</td>
            <td class="px-4 py-3"><span class="bg-red-200 text-red-900 px-2 py-0.5 rounded-full text-xs font-semibold">异常负增长</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">4月M2同比</td>
            <td class="px-4 py-3 text-center">8.60%</td>
            <td class="px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-semibold">平稳</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">4月M1同比</td>
            <td class="px-4 py-3 text-center">5.00%</td>
            <td class="px-4 py-3"><span class="bg-slate-100 text-slate-800 px-2 py-0.5 rounded-full text-xs font-semibold">小幅回落</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">4月社融存量同比</td>
            <td class="px-4 py-3 text-center">7.80%</td>
            <td class="px-4 py-3"><span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs font-semibold">持续下行</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">LPR（1年/5年）</td>
            <td class="px-4 py-3 text-center">3.0% / 3.5%</td>
            <td class="px-4 py-3"><span class="bg-slate-100 text-slate-800 px-2 py-0.5 rounded-full text-xs font-semibold">维持不变</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">隔夜SHIBOR</td>
            <td class="px-4 py-3 text-center">1.316%</td>
            <td class="px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-semibold">流动性充裕</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">人民币兑美元</td>
            <td class="px-4 py-3 text-center">~6.78</td>
            <td class="px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-semibold">震荡升值</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="m_sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">企业利润</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left font-semibold">指标</th>
            <th class="px-4 py-3 text-center font-semibold">最新值</th>
            <th class="px-4 py-3 text-left font-semibold">状态</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">1-4月规上工业企业利润</td>
            <td class="px-4 py-3 text-center font-bold text-emerald-700">+18.2% YoY</td>
            <td class="px-4 py-3"><span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-xs font-semibold">加快2.7pp</span></td>
          </tr>
          <tr class="bg-emerald-50 hover:bg-emerald-100 transition-colors">
            <td class="px-4 py-3 font-bold text-emerald-900">高技术制造业利润</td>
            <td class="px-4 py-3 text-center font-bold text-emerald-700">+44.8% YoY</td>
            <td class="px-4 py-3"><span class="bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded-full text-xs font-semibold">拉动整体7.8pp</span></td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900">原材料制造业利润</td>
            <td class="px-4 py-3 text-center font-bold text-amber-700">+88.1% YoY</td>
            <td class="px-4 py-3"><span class="bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full text-xs font-semibold">拉动整体10.3pp</span></td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">有色行业利润</td>
            <td class="px-4 py-3 text-center font-bold text-purple-700">+117.8% YoY</td>
            <td class="px-4 py-3"><span class="bg-purple-200 text-purple-900 px-2 py-0.5 rounded-full text-xs font-semibold">表现最强</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 三、核心研报观点提炼 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>三、核心研报观点提炼</h2>

    <h3 id="m_sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">观点1：PMI回落至临界值，"胀"的斜率放缓，"滞"的扰动趋显</h3>
    <p class="text-xs text-slate-500 mb-3"><strong>来源：</strong>华源证券（5月PMI点评）、开源证券、第一创业</p>

    <p class="text-slate-700 leading-relaxed">5月制造业PMI回落至<strong>50.0%</strong>荣枯线，生产端（51.2%）仍扩张但需求端同步走弱——新订单49.9%、新出口订单48.6%均跌入收缩区间。价格指标虽有回落（购进价格60.5%、出厂价格51.9%），但连续5个月位于扩张区间，表明<strong>输入性通胀压力仍在</strong>。中下游企业面临"盈利空间压缩+被动补库"双重扰动。</p>

    <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4">
      <h4 class="font-bold text-slate-800 mb-2">企业规模分化加剧</h4>
      <div class="grid grid-cols-3 gap-4 text-center">
        <div class="bg-emerald-50 rounded-lg p-3">
          <div class="text-2xl font-bold text-emerald-700">51.1%</div>
          <div class="text-xs text-emerald-600 mt-1">大型企业（上行）</div>
        </div>
        <div class="bg-amber-50 rounded-lg p-3">
          <div class="text-2xl font-bold text-amber-700">48.6%</div>
          <div class="text-xs text-amber-600 mt-1">中型企业（回落）</div>
        </div>
        <div class="bg-red-50 rounded-lg p-3">
          <div class="text-2xl font-bold text-red-700">48.5%</div>
          <div class="text-xs text-red-600 mt-1">小型企业（回落）</div>
        </div>
      </div>
    </div>

    <h3 id="m_sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">观点2：AI超级周期拉动出口超预期</h3>
    <p class="text-xs text-slate-500 mb-3"><strong>来源：</strong>东吴证券（AI如何拉动我国经济）、光大期货、浦银国际</p>

    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-emerald-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🚀</span>AI出口数据亮点</h4>
      <ul class="space-y-2 m-0">
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span><span>前4个月AI相关产品出口同比增长<strong>36.9%</strong>，对出口增长贡献43.6%</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span><span>集成电路出口<strong>+99.6%</strong>、自动数据处理设备<strong>+47.3%</strong>、芯片出口<strong>+83.5%</strong></span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span><span>AI对我国GDP拉动约<strong>0.3-0.5个百分点</strong>，2025-2026年AI对GDP贡献率约<strong>8-10%</strong>（美国达15-20%）</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span><span>中国走"算力效率优先"差异化路径，中长期AI红利将逐步释放</span></li>
      </ul>
    </div>

    <h3 id="m_sec8" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">观点3：全球货币政策进入"紧缩再定价"阶段</h3>
    <p class="text-xs text-slate-500 mb-3"><strong>来源：</strong>东吴证券（黄金ETF月报）、宝城期货（宏观月报）、恒力期货（6月随笔）</p>

    <p class="text-slate-700 leading-relaxed">美联储新主席<strong>沃什5月23日正式就职</strong>，鹰派立场引发货币政策预期剧变。4月美国CPI同比3.8%、PPI同比6%均超预期，市场<strong>抹去年内降息预期</strong>并开始定价2027年加息。10年期与30年期美债收益率突破<strong>5%</strong>关口。</p>

    <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-red-800 font-bold mb-2 flex items-center">⚠️ 黄金定价逻辑异化</h4>
      <p class="text-red-900 text-sm">黄金定价逻辑从"地缘博弈"切换至"货币政策主导"，5月沪金大跌3.8%破位。出现<strong>"紧张反而利空"</strong>的异化现象：地缘升温 → 油价上行 → 通胀预期 → 加息预期 → 黄金下跌。</p>
    </div>

    <h3 id="m_sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">观点4：中美关系短期缓和</h3>
    <p class="text-xs text-slate-500 mb-3"><strong>来源：</strong>浦银国际（中期展望）、天富期货（美伊冲突）</p>

    <p class="text-slate-700 leading-relaxed">特朗普5月访华后双方同意成立<strong>贸易理事会和投资理事会</strong>，原则上同意对等降税框架（各300亿美元或更多）。中国承诺进口美国农产品至2028年每年至少170亿美元，采购200架波音飞机。</p>

    <div class="bg-amber-50 border-l-4 border-amber-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-amber-800 font-bold mb-2 flex items-center">📌 关键时间节点</h4>
      <p class="text-amber-900 text-sm"><strong>11月10日</strong>一年暂缓期到期是关键时间节点。出口管制、台海、稀土等核心分歧仍在，需密切跟踪博弈升级风险。</p>
    </div>

    <h3 id="m_sec10" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">观点5：再通胀趋势确认，通缩实质结束</h3>
    <p class="text-xs text-slate-500 mb-3"><strong>来源：</strong>方正中期（6月宏观报告）、光大期货</p>

    <p class="text-slate-700 leading-relaxed">4月CPI-PPI差值降至<strong>-1.6%</strong>（四年来首次），GDP平减指数预计二季度转正（2023年来首次）。PPI同比升至<strong>2.8%</strong>为45个月高位，上游价格已开始向下游传导但力度不足。</p>

    <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4">
      <h4 class="font-bold text-slate-800 mb-3">全年预测</h4>
      <div class="grid grid-cols-3 gap-4 text-center">
        <div class="bg-blue-50 rounded-lg p-3">
          <div class="text-2xl font-bold text-blue-700">0.9%</div>
          <div class="text-xs text-blue-600 mt-1">全年CPI预测</div>
        </div>
        <div class="bg-amber-50 rounded-lg p-3">
          <div class="text-2xl font-bold text-amber-700">1.8%</div>
          <div class="text-xs text-amber-600 mt-1">全年PPI预测</div>
        </div>
        <div class="bg-emerald-50 rounded-lg p-3">
          <div class="text-2xl font-bold text-emerald-700">6.1%</div>
          <div class="text-xs text-emerald-600 mt-1">名义GDP增速</div>
        </div>
      </div>
    </div>

    <h3 id="m_sec11" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">观点6：城市更新"十五五"规划出台</h3>
    <p class="text-xs text-slate-500 mb-3"><strong>来源：</strong>国金证券（地产专题）、光大期货</p>

    <p class="text-slate-700 leading-relaxed">国务院印发《城市更新"十五五"规划》，明确：</p>
    <ul class="space-y-1.5 my-3">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>危旧房改造50万套</strong>（翻倍）</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>地下管网改造36.5万公里</strong></span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>应急避难场所5万个</strong></span></li>
    </ul>
    <p class="text-slate-700 leading-relaxed">发改委推动"六张网"建设（水网、新型电网、算力网、通信网、地下管网、物流网），2026年相关投资预计超<strong>7万亿元</strong>。但强调"不得新增地方政府隐性债务"，非短期刺激。</p>

    <h3 id="m_sec12" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">观点7：AI时代加剧"供强需弱"矛盾</h3>
    <p class="text-xs text-slate-500 mb-3"><strong>来源：</strong>粤开证券（超额利润税专题）、浦银国际（中期展望）</p>

    <p class="text-slate-700 leading-relaxed">AI提升全要素生产率的同时，替代效应强于创造效应导致就业与收入分化。当前中国经济处于"供给导向型"制度体系与"需求不足"阶段的矛盾中，AI进一步放大这一失衡。</p>

    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 my-4 rounded-r-xl">
      <h4 class="text-indigo-800 font-bold mb-2 flex items-center">💡 政策建议</h4>
      <ul class="space-y-1.5 m-0">
        <li class="flex items-start text-indigo-900 text-sm"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span><span>优化财税激励引导企业"增效不减员"</span></li>
        <li class="flex items-start text-indigo-900 text-sm"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span><span>提高直接税调节功能</span></li>
        <li class="flex items-start text-indigo-900 text-sm"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span><span>探索开征"超额利润调节税"</span></li>
      </ul>
    </div>

    <!-- 四、数据与观点交叉验证 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>四、数据与观点交叉验证</h2>

    <h3 id="m_sec13" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">数据支撑维度</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
        <h4 class="text-emerald-800 font-bold mb-2">✅ 出口超预期</h4>
        <p class="text-emerald-900 text-sm">4月出口+14.1%大幅超预期，前4个月累计+14.5%，AI相关产品出口+36.9%。海关数据与研报中"AI超级周期拉动出口"判断高度一致。</p>
      </div>
      <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
        <h4 class="text-emerald-800 font-bold mb-2">✅ PPI快速转正</h4>
        <p class="text-emerald-900 text-sm">4月PPI同比+2.8%远超预期的1.6%，石油开采+28.6%、有色采选+38.9%领涨。但PMI价格指数5月回落3.2pp，提示通胀上行斜率最陡阶段或已过去。</p>
      </div>
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <h4 class="text-amber-800 font-bold mb-2">✅ 内需偏弱验证</h4>
        <p class="text-amber-900 text-sm">社零4月仅+0.2%（累计+1.9%），固投转负（-1.6%），新增信贷-4006亿元异常值，均指向内需疲软。"外强内弱"K型分化判断被数据完全印证。</p>
      </div>
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <h4 class="text-amber-800 font-bold mb-2">✅ 中小型企业承压</h4>
        <p class="text-amber-900 text-sm">PMI分项显示中型48.6%、小型48.5%，与大型企业51.1%形成鲜明对比，印证"K型分化加剧"判断。</p>
      </div>
    </div>

    <h3 id="m_sec14" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">研报分歧点</h3>

    <div class="space-y-4 my-6">
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <h4 class="font-bold text-slate-800 mb-3 flex items-center"><span class="w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center mr-2">1</span>通胀持续性</h4>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-emerald-50 rounded-lg p-3">
            <p class="text-xs font-bold text-emerald-700 mb-1">方正中期</p>
            <p class="text-sm text-emerald-900">再通胀加速趋势不变，二季度PPI持续上行</p>
          </div>
          <div class="bg-red-50 rounded-lg p-3">
            <p class="text-xs font-bold text-red-700 mb-1">浦银国际</p>
            <p class="text-sm text-red-900">光靠油价上升不足以彻底解决通缩，油价回落后通胀可能回落</p>
          </div>
        </div>
        <p class="text-xs text-slate-500 mt-3"><strong>分歧核心：</strong>输入性通胀能否转化为内生性通胀</p>
      </div>

      <div class="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <h4 class="font-bold text-slate-800 mb-3 flex items-center"><span class="w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center mr-2">2</span>下半年政策力度</h4>
        <div class="grid grid-cols-3 gap-3">
          <div class="bg-blue-50 rounded-lg p-3">
            <p class="text-xs font-bold text-blue-700 mb-1">宝城期货</p>
            <p class="text-sm text-blue-900">适度宽松总基调不变，未来仍存降息可能</p>
          </div>
          <div class="bg-amber-50 rounded-lg p-3">
            <p class="text-xs font-bold text-amber-700 mb-1">浦银国际</p>
            <p class="text-sm text-amber-900">下半年增量刺激阈值提高，降息10bp+降准50bp概率降低</p>
          </div>
          <div class="bg-green-50 rounded-lg p-3">
            <p class="text-xs font-bold text-green-700 mb-1">华源证券</p>
            <p class="text-sm text-green-900">增量政策有望温和加力</p>
          </div>
        </div>
        <p class="text-xs text-slate-500 mt-3"><strong>分歧核心：</strong>经济增速目标下调后政策是"边走边看"还是"提前发力"</p>
      </div>

      <div class="bg-slate-50 border border-slate-200 rounded-xl p-5">
        <h4 class="font-bold text-slate-800 mb-3 flex items-center"><span class="w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center mr-2">3</span>黄金走势</h4>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-blue-50 rounded-lg p-3">
            <p class="text-xs font-bold text-blue-700 mb-1">东吴证券</p>
            <p class="text-sm text-blue-900">6月弱势筑底、弱反弹试探，中长期牛市未改</p>
          </div>
          <div class="bg-amber-50 rounded-lg p-3">
            <p class="text-xs font-bold text-amber-700 mb-1">天富期货</p>
            <p class="text-sm text-amber-900">维持看涨思路（地缘+供给收缩驱动商品）</p>
          </div>
        </div>
        <p class="text-xs text-slate-500 mt-3"><strong>分歧核心：</strong>货币政策主导 vs 地缘/供给端主导</p>
      </div>
    </div>

    <h3 id="m_sec15" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">预期差分析</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
        <h4 class="text-emerald-800 font-bold mb-3">📈 超预期数据</h4>
        <ul class="space-y-2 m-0">
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span><span>4月出口<strong>+14.1%</strong>（预期8.4%）</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span><span>PPI<strong>+2.8%</strong>（预期1.6%）</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span><span>CPI<strong>+1.2%</strong>（预期0.9%）</span></li>
        </ul>
      </div>
      <div class="bg-red-50 border border-red-200 rounded-xl p-4">
        <h4 class="text-red-800 font-bold mb-3">📉 不及预期数据</h4>
        <ul class="space-y-2 m-0">
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>社零<strong>+0.2%</strong>（预期1.0%+）</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>固投<strong>-1.6%</strong>（预期转正）</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>新增信贷<strong>-4006亿</strong>（异常负值）</span></li>
        </ul>
      </div>
    </div>

    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-indigo-800 font-black mb-3 flex items-center"><span class="text-xl mr-2">🔮</span>市场尚未充分定价的变量</h4>
      <ul class="space-y-2 m-0">
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>沃什首秀（6月18日FOMC）</strong>的鹰派程度</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>美伊停火备忘录签署时间</strong>（6月关键窗口）</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>AI产业链出口持续性</strong>与退税率调整影响</span></li>
      </ul>
    </div>

    <!-- 五、周期定位与宏观框架 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>五、周期定位与宏观框架</h2>

    <h3 id="m_sec16" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">经济周期定位：复苏向过热过渡期（偏早期）</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left font-semibold">维度</th>
            <th class="px-4 py-3 text-center font-semibold">当前状态</th>
            <th class="px-4 py-3 text-center font-semibold">周期位置</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">GDP增速</td>
            <td class="px-4 py-3 text-center">Q1 5.0%，全年预测4.7%</td>
            <td class="px-4 py-3 text-center"><span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-xs font-semibold">复苏延续</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">PMI趋势</td>
            <td class="px-4 py-3 text-center">50.0%临界线，连续3月扩张</td>
            <td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs font-semibold">周期顶点附近</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">通胀</td>
            <td class="px-4 py-3 text-center">CPI 1.2%、PPI 2.8%</td>
            <td class="px-4 py-3 text-center"><span class="bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full text-xs font-semibold">再通胀加速</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">库存</td>
            <td class="px-4 py-3 text-center">原材料去库、产成品被动补库</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-semibold">主动向被动加库过渡</span></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">利润</td>
            <td class="px-4 py-3 text-center">工业企业利润+18.2%</td>
            <td class="px-4 py-3 text-center"><span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-xs font-semibold">利润修复周期</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-2 flex items-center"><span class="text-xl mr-2">⏱️</span>美林时钟定位</h4>
      <p class="text-blue-900">从<strong>"复苏"</strong>象限向<strong>"过热"</strong>象限过渡。PPI快速回升但CPI仍温和，核心矛盾是输入性通胀与内需不足的并存。</p>
    </div>

    <h3 id="m_sec17" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">政策周期定位</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left font-semibold">维度</th>
            <th class="px-4 py-3 text-left font-semibold">状态</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">货币政策</td>
            <td class="px-4 py-3">适度宽松基调不变，<strong>短期不降准降息</strong>，结构性工具为主</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">财政政策</td>
            <td class="px-4 py-3">专项债+特别国债前置发力，<strong>下半年增量刺激阈值提高</strong></td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">产业政策</td>
            <td class="px-4 py-3">"十五五"开局年，城市更新、六张网、AI基建为重点</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-medium">房地产政策</td>
            <td class="px-4 py-3">温和推进，无全国性新政，地方因城施策</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="m_sec18" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">二阶博弈分析</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-slate-100 border border-slate-200 rounded-xl p-4">
        <h4 class="font-bold text-slate-800 mb-2 flex items-center"><span class="mr-2">✅</span>市场已 price-in 的因素</h4>
        <ul class="space-y-1.5 m-0">
          <li class="flex items-start text-sm text-slate-700"><span class="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-3 flex-shrink-0"></span><span>5月PMI回落至荣枯线（已公布）</span></li>
          <li class="flex items-start text-sm text-slate-700"><span class="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-3 flex-shrink-0"></span><span>沃什鹰派立场（已确认）</span></li>
          <li class="flex items-start text-sm text-slate-700"><span class="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-3 flex-shrink-0"></span><span>美伊冲突僵持（市场已部分免疫）</span></li>
          <li class="flex items-start text-sm text-slate-700"><span class="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 mr-3 flex-shrink-0"></span><span>中美短期关系缓和（特朗普访华已落地）</span></li>
        </ul>
      </div>
      <div class="bg-red-50 border border-red-200 rounded-xl p-4">
        <h4 class="font-bold text-red-800 mb-2 flex items-center"><span class="mr-2">⚠️</span>尚未充分定价的因素</h4>
        <ul class="space-y-1.5 m-0">
          <li class="flex items-start text-sm text-red-900"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>美伊停火→油价骤降对PPI/化工链的冲击</span></li>
          <li class="flex items-start text-sm text-red-900"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>沃什6月18日首秀超预期鹰派信号</span></li>
          <li class="flex items-start text-sm text-red-900"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>11月中美暂缓期到期前的博弈升级</span></li>
          <li class="flex items-start text-sm text-red-900"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>AI出口增速能否维持（退税率效应消退）</span></li>
          <li class="flex items-start text-sm text-red-900"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span>央行下半年降息预期被市场几乎完全抹去</span></li>
        </ul>
      </div>
    </div>

    <!-- 六、大类资产配置建议 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>六、大类资产配置建议</h2>

    <h3 id="m_sec19" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">大类资产排序</h3>

    <div class="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 p-4 my-4 rounded-r-xl">
      <div class="flex items-center space-x-2 mb-3">
        <span class="text-3xl font-black text-red-700">1</span>
        <div>
          <span class="text-lg font-black text-red-800">股票</span>
          <span class="ml-2 bg-red-200 text-red-900 px-2 py-0.5 rounded-full text-xs font-bold">超配</span>
        </div>
      </div>
      <p class="text-red-900 text-sm mb-2"><strong>核心逻辑：</strong>AI超级周期拉动盈利修复，名义GDP增速加快至6.1%利好企业营收，人民币升值吸引外资流入，政策托底预期仍在</p>
      <p class="text-red-900 text-sm"><strong>风险因素：</strong>美伊冲突恶化推升油价压缩企业利润；美联储鹰派超预期引发全球风险偏好回落</p>
    </div>

    <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-4 my-4 rounded-r-xl">
      <div class="flex items-center space-x-2 mb-3">
        <span class="text-3xl font-black text-blue-700">2</span>
        <div>
          <span class="text-lg font-black text-blue-800">商品</span>
          <span class="ml-2 bg-blue-200 text-blue-900 px-2 py-0.5 rounded-full text-xs font-bold">标配偏多</span>
        </div>
      </div>
      <p class="text-blue-900 text-sm mb-2"><strong>核心逻辑：</strong>地缘溢价+供给收缩支撑油价高位，AI产业链拉动铜/铝/锂等有色需求，煤炭供给受安全整顿收缩</p>
      <p class="text-blue-900 text-sm"><strong>风险因素：</strong>美伊停火后油价骤降风险；全球需求衰退预期升温</p>
    </div>

    <div class="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-600 p-4 my-4 rounded-r-xl">
      <div class="flex items-center space-x-2 mb-3">
        <span class="text-3xl font-black text-amber-700">3</span>
        <div>
          <span class="text-lg font-black text-amber-800">黄金</span>
          <span class="ml-2 bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full text-xs font-bold">低配（战术性）</span>
        </div>
      </div>
      <p class="text-amber-900 text-sm mb-2"><strong>核心逻辑：</strong>美联储鹰派+美元美债双升系统性压制，避险逻辑异化（紧张反而利空），6月日历效应全年最弱</p>
      <p class="text-amber-900 text-sm"><strong>底部支撑：</strong>央行连续18个月增持，超跌后存在技术性弱反弹机会</p>
    </div>

    <div class="bg-gradient-to-r from-slate-50 to-gray-50 border-l-4 border-slate-600 p-4 my-4 rounded-r-xl">
      <div class="flex items-center space-x-2 mb-3">
        <span class="text-3xl font-black text-slate-700">4</span>
        <div>
          <span class="text-lg font-black text-slate-800">债券</span>
          <span class="ml-2 bg-slate-200 text-slate-900 px-2 py-0.5 rounded-full text-xs font-bold">低配</span>
        </div>
      </div>
      <p class="text-slate-900 text-sm mb-2"><strong>核心逻辑：</strong>通胀回升（PPI 2.8%）限制降息空间，社融增速下行但流动性充裕呈"资产荒"格局，10Y国债中枢预计2-2.5%</p>
      <p class="text-slate-900 text-sm"><strong>上行机会：</strong>若内需持续走弱触发降息，债市可能阶段性走强</p>
    </div>

    <h3 id="m_sec20" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">人民币汇率展望</h3>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
        <h4 class="text-emerald-800 font-bold mb-2">方向</h4>
        <p class="text-emerald-900 font-bold text-lg">稳中升值</p>
        <p class="text-emerald-700 text-sm">年底目标6.75附近</p>
      </div>
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
        <h4 class="text-blue-800 font-bold mb-2">驱动因素</h4>
        <p class="text-blue-900 text-sm">贸易顺差超预期、结汇比例回升、中美关系缓和</p>
      </div>
      <div class="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
        <h4 class="text-red-800 font-bold mb-2">风险因素</h4>
        <p class="text-red-900 text-sm">美伊冲突导致美元避险走强、沃什鹰派超预期</p>
      </div>
    </div>

    <!-- 七、二阶博弈与风险预警 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>七、二阶博弈与风险预警</h2>

    <h3 id="m_sec21" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">尾部风险清单</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left font-semibold">风险事件</th>
            <th class="px-4 py-3 text-center font-semibold">概率</th>
            <th class="px-4 py-3 text-left font-semibold">影响</th>
            <th class="px-4 py-3 text-left font-semibold">触发信号</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">美伊军事冲突大幅升级</td>
            <td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs font-semibold">低-中</span></td>
            <td class="px-4 py-3 text-sm">油价突破$130-150/桶，全球衰退风险骤升</td>
            <td class="px-4 py-3 text-sm">美军大规模空袭伊朗核设施</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900">沃什超预期鹰派（暗示加息）</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs font-semibold">中</span></td>
            <td class="px-4 py-3 text-sm">全球风险资产重定价，新兴市场资本外流</td>
            <td class="px-4 py-3 text-sm">6月18日FOMC会议纪要</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900">中美11月暂缓期到期前博弈升级</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs font-semibold">中</span></td>
            <td class="px-4 py-3 text-sm">出口链条承压，A股外资流出</td>
            <td class="px-4 py-3 text-sm">美国301调查扩大、对华科技限制加码</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900">中国内需持续走弱触发通缩回潮</td>
            <td class="px-4 py-3 text-center"><span class="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs font-semibold">低-中</span></td>
            <td class="px-4 py-3 text-sm">PPI在Q4回落至零附近，企业利润增速骤降</td>
            <td class="px-4 py-3 text-sm">社零连续3月低于1%，PMI连续跌破荣枯线</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 font-bold text-amber-900">美联储加息预期引发美元暴涨</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs font-semibold">中</span></td>
            <td class="px-4 py-3 text-sm">人民币升值趋势逆转，外资流出A股</td>
            <td class="px-4 py-3 text-sm">美国非农+CPI连续超预期</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 八、买方行动清单 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>八、买方行动清单</h2>

    <h3 id="m_sec22" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">优先级1：立即执行（本周内）</h3>

    <div class="space-y-3 my-5">
      <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
        <h4 class="text-red-800 font-bold mb-1">1. 减持黄金ETF（518880）</h4>
        <p class="text-red-900 text-sm">6月为全年最弱月份，沃什首秀前避险情绪难以修复，反弹即减仓</p>
      </div>
      <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl">
        <h4 class="text-emerald-800 font-bold mb-1">2. 增持AI产业链出口标的</h4>
        <p class="text-emerald-900 text-sm">关注集成电路制造、电子专用设备、自动数据处理设备出口受益标的</p>
      </div>
      <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
        <h4 class="text-amber-800 font-bold mb-1">3. 关注有色板块</h4>
        <p class="text-amber-900 text-sm">铜（AI算力/电网需求）、铝（轻量化/新能源）、锂（储能）——全球AI资本开支扩张+供给受限双重驱动</p>
      </div>
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
        <h4 class="text-blue-800 font-bold mb-1">4. 配置高股息防御资产</h4>
        <p class="text-blue-900 text-sm">银行、公用事业、高速公路——对冲内需偏弱和政策不确定性</p>
      </div>
    </div>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">优先级2：6月中旬前布局</h3>

    <div class="space-y-3 my-5">
      <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl">
        <h4 class="text-slate-800 font-bold mb-1">5. 等待6月18日FOMC后调整债市仓位</h4>
        <p class="text-slate-700 text-sm">若沃什首秀鹰派超预期，利率债短空机会出现；若偏鸽，10Y国债可加仓</p>
      </div>
      <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl">
        <h4 class="text-slate-800 font-bold mb-1">6. 关注城市更新主题</h4>
        <p class="text-slate-700 text-sm">"十五五"规划落地受益标的——建材、地下管网、危旧房改造相关产业链</p>
      </div>
      <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl">
        <h4 class="text-slate-800 font-bold mb-1">7. 布局消费修复弹性</h4>
        <p class="text-slate-700 text-sm">世界杯（6月11日开幕）催化啤酒/家电/新媒体短期机会；若下半年消费补贴政策扩容至服务消费，关注餐饮、旅游</p>
      </div>
    </div>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">优先级3：持续跟踪</h3>

    <div class="space-y-2 my-5">
      <div class="flex items-start p-3 bg-slate-50 rounded-lg">
        <span class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">8</span>
        <p class="text-slate-700 text-sm"><strong>紧盯美伊谈判进展：</strong>6月为停火备忘录关键窗口，若签署则快速减仓能源/化工多头，转向中游制造和消费</p>
      </div>
      <div class="flex items-start p-3 bg-slate-50 rounded-lg">
        <span class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">9</span>
        <p class="text-slate-700 text-sm"><strong>监控AI出口增速月度数据：</strong>5-6月为退税率调整效应消退期，若出口增速从36%回落至10%以下，需重新评估AI产业链配置</p>
      </div>
      <div class="flex items-start p-3 bg-slate-50 rounded-lg">
        <span class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">10</span>
        <p class="text-slate-700 text-sm"><strong>关注中国央行货币政策信号：</strong>若7月出现降息/降准操作，债券和成长股将迎来系统性加仓窗口</p>
      </div>
      <div class="flex items-start p-3 bg-slate-50 rounded-lg">
        <span class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">11</span>
        <p class="text-slate-700 text-sm"><strong>中美贸易理事会首次会议成果：</strong>关注300亿美元降税清单的具体产品范围，精准布局受益行业</p>
      </div>
    </div>

    <!-- 免责声明 -->
    <div class="mt-12 pt-6 border-t border-slate-200">
      <p class="text-xs text-slate-400 text-center">免责声明：本报告仅供参考，不构成投资建议。市场有风险，投资需谨慎。</p>
      <p class="text-xs text-slate-400 text-center mt-1">数据来源：国家统计局、海关总署、人民银行、Wind、各券商研究所</p>
    </div>

  </div>`;
}
