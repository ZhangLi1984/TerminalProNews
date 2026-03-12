// ==========================================
// 券商晨报内容 - 2026-03-12
// ==========================================

function renderBrokerContent_0312() {
  return `<div class="prose prose-slate max-w-none">
    <!-- 报告头 -->
    <div class="bg-gradient-to-r from-amber-900 to-orange-800 rounded-2xl p-8 mb-10 text-white shadow-xl">
      <div class="flex items-center justify-between mb-4">
        <h1 class="text-3xl font-black">券商晨报买方汇总</h1>
        <span class="bg-white/20 px-4 py-2 rounded-full text-sm font-bold">2026 年 3 月 12 日</span>
      </div>
      <p class="text-slate-300 text-sm">汇总主流券商晨会纪要 | 提炼买方核心观点</p>
    </div>

    <!-- 一、核心观点 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>核心观点汇总</h2>

    <h3 id="b_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">机构共识</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-500">
        <h4 class="font-black text-red-900 mb-3 flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          多头观点
        </h4>
        <ul class="text-sm text-red-800 space-y-2">
          <li>• 创新药 BD 出海爆发，行业商业模式根本性转变</li>
          <li>• 半导体涨价周期开启，国产替代加速</li>
          <li>• 量子计算技术 - 产业 - 政策三重共振</li>
          <li>• 低空经济连续三年写入政府工作报告</li>
        </ul>
      </div>

      <div class="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 border-l-4 border-blue-500">
        <h4 class="font-black text-blue-900 mb-3 flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
          空头担忧
        </h4>
        <ul class="text-sm text-blue-800 space-y-2">
          <li>• 地缘冲突持续时间超预期</li>
          <li>• 美联储降息路径不确定性增加</li>
          <li>• AI 应用商业化节奏可能放缓</li>
          <li>• 成交量能可能萎缩</li>
        </ul>
      </div>
    </div>

    <h3 id="b_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">机构策略建议</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">券商</th>
            <th class="px-4 py-3 text-left">仓位建议</th>
            <th class="px-4 py-3 text-left">超配方向</th>
            <th class="px-4 py-3 text-left">低配方向</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-slate-50">
            <td class="px-4 py-3 font-bold text-slate-900">中信证券</td>
            <td class="px-4 py-3 text-slate-700">70-75%</td>
            <td class="px-4 py-3 text-slate-700">医药、半导体、量子计算</td>
            <td class="px-4 py-3 text-slate-700">煤炭、银行</td>
          </tr>
          <tr>
            <td class="px-4 py-3 font-bold text-slate-900">中金公司</td>
            <td class="px-4 py-3 text-slate-700">65-70%</td>
            <td class="px-4 py-3 text-slate-700">创新药、低空经济、国防军工</td>
            <td class="px-4 py-3 text-slate-700">食品饮料</td>
          </tr>
          <tr class="bg-slate-50">
            <td class="px-4 py-3 font-bold text-slate-900">中信建投</td>
            <td class="px-4 py-3 text-slate-700">70-80%</td>
            <td class="px-4 py-3 text-slate-700">半导体、AI 算力、储能</td>
            <td class="px-4 py-3 text-slate-700">地产链</td>
          </tr>
          <tr>
            <td class="px-4 py-3 font-bold text-slate-900">国泰君安</td>
            <td class="px-4 py-3 text-slate-700">60-70%</td>
            <td class="px-4 py-3 text-slate-700">石油石化、卫星通信、黄金</td>
            <td class="px-4 py-3 text-slate-700">纯 AI 应用炒作</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 二、行业聚焦 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>行业聚焦</h2>

    <h3 id="b_sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">医药生物</h3>

    <div class="bg-green-50 border-l-4 border-green-500 p-5 my-6 rounded-r-xl">
      <div class="flex items-center justify-between mb-3">
        <h4 class="text-green-800 font-bold">推荐评级：超配</h4>
        <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">★★★★★</span>
      </div>
      <p class="text-green-900 text-sm mb-3"><strong>核心逻辑：</strong>BD 出海爆发 + 支付端破冰，行业从"融资驱动"转向"现金流驱动"</p>
      <ul class="text-sm text-green-800 space-y-2">
        <li>• 2026 年前两月 BD 交易总额 500 亿美元，接近 2025 年全年四成</li>
        <li>• 商保创新药目录 2025 年 12 月落地，支付端有较大提升空间</li>
        <li>• 行业 PE-TTM 30-36 倍，处于历史中位</li>
      </ul>
      <p class="text-green-900 text-sm mt-3"><strong>推荐标的：</strong>恒瑞医药、百济神州-U、科伦药业</p>
    </div>

    <h3 id="b_sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">半导体</h3>

    <div class="bg-blue-50 border-l-4 border-blue-500 p-5 my-6 rounded-r-xl">
      <div class="flex items-center justify-between mb-3">
        <h4 class="text-blue-800 font-bold">推荐评级：超配</h4>
        <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">★★★★☆</span>
      </div>
      <p class="text-blue-900 text-sm mb-3"><strong>核心逻辑：</strong>长达 2.5 年的价格战落幕，供需格局逆转</p>
      <ul class="text-sm text-blue-800 space-y-2">
        <li>• ADI 2026 年 1 月全线涨价 15%，德州仪器 2025 年多次涨价</li>
        <li>• 海外大厂优先将产能分配给 AI 等高毛利领域</li>
        <li>• 国内厂商库存周转天数 152 天，较 2022 年高点下降约 30%</li>
      </ul>
      <p class="text-blue-900 text-sm mt-3"><strong>推荐标的：</strong>思瑞浦、新洁能、瑞芯微</p>
    </div>

    <h3 id="b_sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">低空经济</h3>

    <div class="bg-purple-50 border-l-4 border-purple-500 p-5 my-6 rounded-r-xl">
      <div class="flex items-center justify-between mb-3">
        <h4 class="text-purple-800 font-bold">推荐评级：超配</h4>
        <span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-bold">★★★★★</span>
      </div>
      <p class="text-purple-900 text-sm mb-3"><strong>核心逻辑：</strong>政策连续三年加持，量产元年</p>
      <ul class="text-sm text-purple-800 space-y-2">
        <li>• 低空经济连续三年写入政府工作报告</li>
        <li>• 小鹏汇天"陆地航母"批量试产下线</li>
        <li>• 沃兰特获首份客运 eVTOL 确认订单</li>
      </ul>
      <p class="text-purple-900 text-sm mt-3"><strong>推荐标的：</strong>宗申动力、中无人机、航天环宇</p>
    </div>

    <h3 id="b_sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">量子计算</h3>

    <div class="bg-red-50 border-l-4 border-red-500 p-5 my-6 rounded-r-xl">
      <div class="flex items-center justify-between mb-3">
        <h4 class="text-red-800 font-bold">推荐评级：增持</h4>
        <span class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">★★★★☆</span>
      </div>
      <p class="text-red-900 text-sm mb-3"><strong>核心逻辑：</strong>技术突破 + 商业订单落地，从"实验室"走向"商业化"</p>
      <ul class="text-sm text-red-800 space-y-2">
        <li>• "祖冲之三号"105 比特，2025 年 12 月突破量子纠错阈值</li>
        <li>• 招商银行采购 1000 量子比特相干光量子计算机</li>
        <li>• 量羲技术 2024 年国内市占率 30.77%</li>
      </ul>
      <p class="text-red-900 text-sm mt-3"><strong>推荐标的：</strong>国盾量子、量羲技术</p>
    </div>

    <!-- 三、主题投资 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>主题投资</h2>

    <h3 id="b_sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">AI 算力</h3>

    <div class="bg-slate-50 rounded-xl p-6 mb-6">
      <p class="text-slate-700 mb-4"><strong>核心催化：</strong>英伟达 GTC 大会（3 月 16-19 日）将至，CPO/光模块受关注</p>
      <ul class="text-sm text-slate-700 space-y-2">
        <li>• 英伟达投资 Lumentum、Coherent，验证光模块赛道高景气</li>
        <li>• 博通发布新一代 CPO 解决方案</li>
        <li>• 1.6T 光模块首个规模化订单落地</li>
      </ul>
      <p class="text-slate-700 mt-4"><strong>推荐标的：</strong>中际旭创、新易盛、天孚通信</p>
    </div>

    <h3 id="b_sec8" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">国防军工</h3>

    <div class="bg-slate-50 rounded-xl p-6 mb-6">
      <p class="text-slate-700 mb-4"><strong>核心催化：</strong>2026 年国防预算 19095.61 亿元，同比增长 7%</p>
      <ul class="text-sm text-slate-700 space-y-2">
        <li>• 国防支出连续 11 年稳健增长</li>
        <li>• 占 GDP 比重低于世界平均水平，增长空间充足</li>
        <li>• 支出结构向新域新质方向倾斜</li>
      </ul>
      <p class="text-slate-700 mt-4"><strong>推荐标的：</strong>新一代战机产业链、低成本弹药、无人装备</p>
    </div>

    <h3 id="b_sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">新能源</h3>

    <div class="bg-slate-50 rounded-xl p-6 mb-6">
      <p class="text-slate-700 mb-4"><strong>核心催化：</strong>比亚迪发布第二代刀片电池，闪充技术突破</p>
      <ul class="text-sm text-slate-700 space-y-2">
        <li>• 常温充电 10%-70% 仅需 5 分钟</li>
        <li>• 比亚迪将在国内部署 2 万座闪充充电站</li>
        <li>• 中东冲突推动欧洲户储需求预期</li>
      </ul>
      <p class="text-slate-700 mt-4"><strong>推荐标的：</strong>比亚迪产业链、阳光电源、宁德时代</p>
    </div>

    <!-- 四、风险提示 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>风险提示</h2>

    <h3 id="b_sec10" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">宏观风险</h3>

    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-5 my-6 rounded-r-xl">
      <ul class="text-sm text-yellow-900 space-y-3">
        <li class="flex items-start"><span class="text-yellow-600 mr-2 font-bold">•</span><span><strong>地缘政治：</strong>中东局势超预期缓和可能导致大宗商品价格快速回落</span></li>
        <li class="flex items-start"><span class="text-yellow-600 mr-2 font-bold">•</span><span><strong>美国政策：</strong>美国大选后对华科技政策进一步收紧</span></li>
        <li class="flex items-start"><span class="text-yellow-600 mr-2 font-bold">•</span><span><strong>经济复苏：</strong>国内经济复苏斜率低于预期</span></li>
      </ul>
    </div>

    <h3 id="b_sec11" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">交易层面风险</h3>

    <div class="bg-orange-50 border-l-4 border-orange-500 p-5 my-6 rounded-r-xl">
      <ul class="text-sm text-orange-900 space-y-3">
        <li class="flex items-start"><span class="text-orange-600 mr-2 font-bold">•</span><span><strong>成交量能：</strong>近期市场热点轮动加快，需警惕成交量萎缩</span></li>
        <li class="flex items-start"><span class="text-orange-600 mr-2 font-bold">•</span><span><strong>外资流向：</strong>地缘风险下北向资金波动可能加大</span></li>
        <li class="flex items-start"><span class="text-orange-600 mr-2 font-bold">•</span><span><strong>解禁压力：</strong>3 月下旬迎来小高峰，关注相关个股</span></li>
      </ul>
    </div>

    <div class="text-center text-slate-500 text-xs mt-10 pt-6 border-t border-slate-200">
      <p>免责声明：本报告基于公开信息整理，不构成投资建议。市场有风险，投资需谨慎。</p>
    </div>
  </div>`;
}
