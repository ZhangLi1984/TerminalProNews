// ==========================================
// 券商晨报内容模块 - 2026 年 6 月 29 日
// ==========================================

function renderBrokerContent_0629() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 报告头部 -->
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-xl">
      <div class="flex items-center mb-3">
        <span class="text-2xl mr-2">📰</span>
        <h2 class="text-xl font-black text-blue-900">券商晨报买方汇总内参</h2>
      </div>
      <div class="flex items-center gap-4 text-blue-700 text-sm">
        <span class="flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line></svg>
          2026 年 6 月 29 日（数据日期：6 月 23 日-6 月 25 日）
        </span>
        <span class="flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          11 家券商晨报深度汇总
        </span>
      </div>
    </div>

    <!-- 核心摘要 -->
    <div id="b_sec1" class="bg-gradient-to-r from-slate-50 to-gray-50 border-l-4 border-slate-500 p-5 my-5 rounded-r-xl">
      <h3 class="text-lg font-black text-slate-800 mb-3 flex items-center">
        <span class="mr-2">🌟</span>核心摘要（3分钟速读）
      </h3>
      <ul class="space-y-3 text-slate-700">
        <li class="py-1.5 flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong>市场共识：</strong>各券商普遍认为当前A股市场处于结构性行情阶段，科技成长主线明确但高位震荡加剧。沪指在4100-4200点区间震荡，创业板指创历史新高后出现回调压力。</span>
        </li>
        <li class="py-1.5 flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong>仓位建议：</strong>平均仓位建议维持在70-80%之间，较前期略有下调。多数券商建议适度"高低切换"，从高位纯主题科技股向估值合理的传统蓝筹倾斜。</span>
        </li>
        <li class="py-1.5 flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong>热门赛道 TOP5：</strong>1.AI/算力(10次) 2.半导体/芯片(9次) 3.电子/通信(8次) 4.医药生物(6次) 5.煤炭/能源(5次)</span>
        </li>
      </ul>
    </div>

    <!-- 金股 TOP10 -->
    <div id="b_sec4" class="my-6">
      <h3 class="text-lg font-black text-slate-800 mb-3 flex items-center">
        <span class="mr-2">💎</span>金股 TOP10
      </h3>
      <div class="overflow-x-auto my-4">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead class="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <tr>
              <th class="px-3 py-3 text-center">排名</th>
              <th class="px-3 py-3 text-left">股票</th>
              <th class="px-3 py-3 text-center">推荐次数</th>
              <th class="px-3 py-3 text-left">核心逻辑</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-3 py-3 text-center"><span class="bg-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">1</span></td>
              <td class="px-3 py-3 font-bold text-purple-900">卫星化学 (002648)</td>
              <td class="px-3 py-3 text-center"><span class="bg-purple-600 text-white px-2 py-1 rounded-full text-sm font-bold">4 次</span></td>
              <td class="px-3 py-3 text-slate-700 text-sm">Q2业绩预增272%，轻烃一体化龙头</td>
            </tr>
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-3 py-3 text-center"><span class="bg-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">2</span></td>
              <td class="px-3 py-3 font-bold text-purple-900">长川科技 (300604)</td>
              <td class="px-3 py-3 text-center"><span class="bg-purple-600 text-white px-2 py-1 rounded-full text-sm font-bold">4 次</span></td>
              <td class="px-3 py-3 text-slate-700 text-sm">半导体测试设备国产替代</td>
            </tr>
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-3 py-3 text-center"><span class="bg-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">3</span></td>
              <td class="px-3 py-3 font-bold text-purple-900">宁德时代 (300750)</td>
              <td class="px-3 py-3 text-center"><span class="bg-purple-600 text-white px-2 py-1 rounded-full text-sm font-bold">4 次</span></td>
              <td class="px-3 py-3 text-slate-700 text-sm">钠电储能解决方案发布</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-3 py-3 text-center"><span class="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">4</span></td>
              <td class="px-3 py-3 font-bold text-blue-900">沪电股份 (002463)</td>
              <td class="px-3 py-3 text-center"><span class="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-3 py-3 text-slate-700 text-sm">PCB龙头，AI服务器受益</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-3 py-3 text-center"><span class="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">5</span></td>
              <td class="px-3 py-3 font-bold text-blue-900">深南电路 (002916)</td>
              <td class="px-3 py-3 text-center"><span class="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-3 py-3 text-slate-700 text-sm">封装基板、PCB双轮驱动</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-3 py-3 text-center"><span class="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">6</span></td>
              <td class="px-3 py-3 font-bold text-blue-900">中国国航 (601111)</td>
              <td class="px-3 py-3 text-center"><span class="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-3 py-3 text-slate-700 text-sm">航空复苏</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-3 py-3 text-center"><span class="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">7</span></td>
              <td class="px-3 py-3 font-bold text-blue-900">招商轮船 (601872)</td>
              <td class="px-3 py-3 text-center"><span class="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-3 py-3 text-slate-700 text-sm">油运板块，中东局势受益</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-3 py-3 text-center"><span class="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">8</span></td>
              <td class="px-3 py-3 font-bold text-blue-900">英维克 (003028)</td>
              <td class="px-3 py-3 text-center"><span class="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-3 py-3 text-slate-700 text-sm">液冷龙头，AI散热刚需</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-3 py-3 text-center"><span class="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">9</span></td>
              <td class="px-3 py-3 font-bold text-blue-900">火炬电子 (603678)</td>
              <td class="px-3 py-3 text-center"><span class="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-3 py-3 text-slate-700 text-sm">MLCC受益标的</td>
            </tr>
            <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
              <td class="px-3 py-3 text-center"><span class="bg-slate-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">10</span></td>
              <td class="px-3 py-3 font-bold text-slate-900">美光科技</td>
              <td class="px-3 py-3 text-center"><span class="bg-slate-500 text-white px-2 py-1 rounded-full text-sm font-bold">2 次</span></td>
              <td class="px-3 py-3 text-slate-700 text-sm">存储芯片战略合作</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 宏观策略汇总 -->
    <div id="b_sec5" class="my-6">
      <h3 class="text-lg font-black text-slate-800 mb-3 flex items-center">
        <span class="mr-2">📊</span>宏观策略汇总
      </h3>
      <div class="overflow-x-auto my-4">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead class="bg-slate-900 text-white">
            <tr>
              <th class="px-4 py-3 text-left">券商</th>
              <th class="px-4 py-3 text-center">大盘判断</th>
              <th class="px-4 py-3 text-center">仓位建议</th>
              <th class="px-4 py-3 text-left">风格偏好</th>
              <th class="px-4 py-3 text-left">核心逻辑</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="hover:bg-slate-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">国信证券</td>
              <td class="px-4 py-3 text-center">震荡上行</td>
              <td class="px-4 py-3 text-center">75-80%</td>
              <td class="px-4 py-3 text-slate-600 text-sm">成长为主</td>
              <td class="px-4 py-3 text-slate-700 text-sm">AI产业革命重塑估值叙事</td>
            </tr>
            <tr class="hover:bg-slate-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">中银证券</td>
              <td class="px-4 py-3 text-center">结构性机会</td>
              <td class="px-4 py-3 text-center">70-75%</td>
              <td class="px-4 py-3 text-slate-600 text-sm">均衡配置</td>
              <td class="px-4 py-3 text-slate-700 text-sm">陆家嘴论坛政策强化非银基本面</td>
            </tr>
            <tr class="hover:bg-slate-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">山西证券</td>
              <td class="px-4 py-3 text-center">重结构防风险</td>
              <td class="px-4 py-3 text-center">65-70%</td>
              <td class="px-4 py-3 text-slate-600 text-sm">高低切换</td>
              <td class="px-4 py-3 text-slate-700 text-sm">电子四维共振引领主线</td>
            </tr>
            <tr class="hover:bg-slate-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">第一创业</td>
              <td class="px-4 py-3 text-center">谨慎乐观</td>
              <td class="px-4 py-3 text-center">70%</td>
              <td class="px-4 py-3 text-slate-600 text-sm">成长+价值</td>
              <td class="px-4 py-3 text-slate-700 text-sm">财政支出静待拐点</td>
            </tr>
            <tr class="hover:bg-slate-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">东兴证券</td>
              <td class="px-4 py-3 text-center">震荡市</td>
              <td class="px-4 py-3 text-center">75%</td>
              <td class="px-4 py-3 text-slate-600 text-sm">Tech-STAR</td>
              <td class="px-4 py-3 text-slate-700 text-sm">拥抱半导体设备</td>
            </tr>
            <tr class="hover:bg-slate-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">金元证券</td>
              <td class="px-4 py-3 text-center">高位震荡</td>
              <td class="px-4 py-3 text-center">65-70%</td>
              <td class="px-4 py-3 text-slate-600 text-sm">均衡配置</td>
              <td class="px-4 py-3 text-slate-700 text-sm">科技股大面积下跌，资金开启高低切换</td>
            </tr>
            <tr class="hover:bg-slate-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">华源证券</td>
              <td class="px-4 py-3 text-center">中性偏多</td>
              <td class="px-4 py-3 text-center">70-75%</td>
              <td class="px-4 py-3 text-slate-600 text-sm">STAR资产</td>
              <td class="px-4 py-3 text-slate-700 text-sm">市场聚焦AI主线</td>
            </tr>
            <tr class="hover:bg-slate-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">开源证券</td>
              <td class="px-4 py-3 text-center">震荡上扬</td>
              <td class="px-4 py-3 text-center">70%</td>
              <td class="px-4 py-3 text-slate-600 text-sm">成长风格</td>
              <td class="px-4 py-3 text-slate-700 text-sm">央行优化利率框架</td>
            </tr>
            <tr class="hover:bg-slate-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">万联证券</td>
              <td class="px-4 py-3 text-center">震荡上扬</td>
              <td class="px-4 py-3 text-center">75%</td>
              <td class="px-4 py-3 text-slate-600 text-sm">科技创新</td>
              <td class="px-4 py-3 text-slate-700 text-sm">人工智能高速发展</td>
            </tr>
            <tr class="hover:bg-slate-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">东吴证券</td>
              <td class="px-4 py-3 text-center">突破向上</td>
              <td class="px-4 py-3 text-center">80%</td>
              <td class="px-4 py-3 text-slate-600 text-sm">半导体</td>
              <td class="px-4 py-3 text-slate-700 text-sm">推荐5只ETF覆盖AI硬件完整产业链</td>
            </tr>
            <tr class="hover:bg-slate-50 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">英大证券</td>
              <td class="px-4 py-3 text-center">平衡震荡</td>
              <td class="px-4 py-3 text-center">65-70%</td>
              <td class="px-4 py-3 text-slate-600 text-sm">高低切换</td>
              <td class="px-4 py-3 text-slate-700 text-sm">高位科技降温，低位权重补涨机会</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 行业推荐榜 -->
    <div id="b_sec3" class="my-6">
      <h3 class="text-lg font-black text-slate-800 mb-3 flex items-center">
        <span class="mr-2">🔥</span>行业推荐榜 TOP14
      </h3>
      <div class="overflow-x-auto my-4">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead class="bg-gradient-to-r from-red-600 to-orange-600 text-white">
            <tr>
              <th class="px-3 py-3 text-center">排名</th>
              <th class="px-3 py-3 text-left">行业</th>
              <th class="px-3 py-3 text-center">推荐次数</th>
              <th class="px-3 py-3 text-left">主要逻辑</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="bg-red-50 hover:bg-red-100 transition-colors">
              <td class="px-3 py-3 text-center"><span class="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">1</span></td>
              <td class="px-3 py-3 font-bold text-slate-900">AI/算力</td>
              <td class="px-3 py-3 text-center"><span class="bg-red-600 text-white px-2 py-1 rounded-full text-sm font-bold">10 次</span></td>
              <td class="px-3 py-3 text-slate-700 text-sm">英伟达GB200/Rubin平台全液冷，MLCC结构性缺货至2028年</td>
            </tr>
            <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
              <td class="px-3 py-3 text-center"><span class="bg-orange-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">2</span></td>
              <td class="px-3 py-3 font-bold text-slate-900">半导体/芯片</td>
              <td class="px-3 py-3 text-center"><span class="bg-orange-600 text-white px-2 py-1 rounded-full text-sm font-bold">9 次</span></td>
              <td class="px-3 py-3 text-slate-700 text-sm">国产替代加速，NAND Flash缺货至2027年</td>
            </tr>
            <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
              <td class="px-3 py-3 text-center"><span class="bg-amber-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">3</span></td>
              <td class="px-3 py-3 font-bold text-slate-900">电子/通信</td>
              <td class="px-3 py-3 text-center"><span class="bg-amber-600 text-white px-2 py-1 rounded-full text-sm font-bold">8 次</span></td>
              <td class="px-3 py-3 text-slate-700 text-sm">CPO产业化加速，玻璃基板TGV良率突破</td>
            </tr>
            <tr class="bg-yellow-50 hover:bg-yellow-100 transition-colors">
              <td class="px-3 py-3 text-center"><span class="bg-yellow-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">4</span></td>
              <td class="px-3 py-3 font-bold text-slate-900">医药生物</td>
              <td class="px-3 py-3 text-center"><span class="bg-yellow-600 text-white px-2 py-1 rounded-full text-sm font-bold">6 次</span></td>
              <td class="px-3 py-3 text-slate-700 text-sm">板块调整五年估值底部，老龄化长期驱动</td>
            </tr>
            <tr class="bg-yellow-50 hover:bg-yellow-100 transition-colors">
              <td class="px-3 py-3 text-center"><span class="bg-yellow-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm">5</span></td>
              <td class="px-3 py-3 font-bold text-slate-900">煤炭/能源</td>
              <td class="px-3 py-3 text-center"><span class="bg-yellow-600 text-white px-2 py-1 rounded-full text-sm font-bold">5 次</span></td>
              <td class="px-3 py-3 text-slate-700 text-sm">进口收缩5月降7.7%，夏季用电高峰</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 重点行业详细观点 -->
    <div id="b_sec6" class="my-8">
      <h3 class="text-lg font-black text-slate-800 mb-4 flex items-center">
        <span class="mr-2">📊</span>重点行业详细观点
      </h3>

      <!-- AI/算力 -->
      <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-5 my-5 rounded-r-xl">
        <h4 class="text-purple-800 font-black mb-3 flex items-center">
          <span class="text-xl mr-2">⚡</span>AI/算力（10家推荐）
        </h4>
        <ul class="space-y-2 text-purple-900">
          <li class="py-1.5 border-b border-purple-100 last:border-0 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-purple-700">国信证券：</strong>AI产业革命是技术集群突破核心，重塑生产效率与要素分配，创造全新商业模式，成为所有价值的源头。</span>
          </li>
          <li class="py-1.5 border-b border-purple-100 last:border-0 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-purple-700">东兴证券：</strong>全球半导体设备市场进入AI驱动长景气周期，2026年12英寸晶圆厂设备支出预计1330亿美元，中国大陆连续五年居全球首位。</span>
          </li>
          <li class="py-1.5 border-b border-purple-100 last:border-0 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-purple-700">开源证券：</strong>英伟达Rubin平台100%全液冷45℃温水散热方案定义为"数据中心历史上最重要的能效突破之一"，Q3开始发货。</span>
          </li>
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-purple-700">东吴证券：</strong>AI相关产能扩产周期长门槛高，供需缺口至少延续至2028年，高端高容产品领涨。</span>
          </li>
        </ul>
      </div>

      <!-- 半导体/芯片 -->
      <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
        <h4 class="text-blue-800 font-black mb-3 flex items-center">
          <span class="text-xl mr-2">💾</span>半导体/芯片（9家推荐）
        </h4>
        <ul class="space-y-2 text-blue-900">
          <li class="py-1.5 border-b border-blue-100 last:border-0 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-blue-700">国信证券：</strong>MLCC渠道价格大幅上行，原厂将全品类涨价30%-50%，景气周期至少延续到2028年。</span>
          </li>
          <li class="py-1.5 border-b border-blue-100 last:border-0 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-blue-700">第一创业：</strong>台湾Nand主控芯片群联电子订单排到2027年Q1-Q2，NAND Flash缺货深不见底。</span>
          </li>
          <li class="py-1.5 border-b border-blue-100 last:border-0 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-blue-700">东兴证券：</strong>MLCC单柜用量百万颗级，VR200价值量从H100约3000美元跃升至22000美元，涨幅显著。</span>
          </li>
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-blue-700">开源证券：</strong>谷歌TPUv7 Ironwood全液冷设计，Q3或迎来初步业绩兑现，与英伟达Rubin秋季量产形成时间共振。</span>
          </li>
        </ul>
      </div>

      <!-- 电子/通信 -->
      <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
        <h4 class="text-green-800 font-black mb-3 flex items-center">
          <span class="text-xl mr-2">📡</span>电子/通信（8家推荐）
        </h4>
        <ul class="space-y-2 text-green-900">
          <li class="py-1.5 border-b border-green-100 last:border-0 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-green-700">山西证券：</strong>建滔CCL年内五次提价，PCB材料供不应求，电子布HVLP铜箔供需缺口将持续。</span>
          </li>
          <li class="py-1.5 border-b border-green-100 last:border-0 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-green-700">东兴证券：</strong>玻璃基板TGV良率决定量产节奏，Intel官宣2026-2030年量产窗口。</span>
          </li>
          <li class="py-1.5 border-b border-green-100 last:border-0 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-green-700">金元证券：</strong>英伟达推出45℃全液冷方案，液冷产业链技术升级与价值量提升可期。</span>
          </li>
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-green-700">开源证券：</strong>液冷为AI核心环节具备通胀逻辑，芯片越强功耗越高液冷越不可替代。</span>
          </li>
        </ul>
      </div>

      <!-- 医药生物 -->
      <div class="bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-rose-500 p-5 my-5 rounded-r-xl">
        <h4 class="text-rose-800 font-black mb-3 flex items-center">
          <span class="text-xl mr-2">💊</span>医药生物（6家推荐）
        </h4>
        <ul class="space-y-2 text-rose-900">
          <li class="py-1.5 border-b border-rose-100 last:border-0 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-rose-700">英大证券：</strong>医药板块仍具配置价值，老龄化加速是不可逆长期驱动力，创新药审批加快。</span>
          </li>
          <li class="py-1.5 border-b border-rose-100 last:border-0 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-rose-700">中银证券：</strong>艾伯维109亿美元溢价收购Apogee，自免药物步入超长效时代。</span>
          </li>
          <li class="py-1.5 flex items-start">
            <span class="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 mr-3 flex-shrink-0"></span>
            <span><strong class="text-rose-700">万联证券：</strong>受益于能源转型新质生产力发展，食品饮料家电行业2026年有较高预测ROE。</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 个股推荐 -->
    <div id="b_sec7" class="my-6">
      <h3 class="text-lg font-black text-slate-800 mb-3 flex items-center">
        <span class="mr-2">💎</span>被多家券商同时推荐的个股
      </h3>
      <div class="overflow-x-auto my-4">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead class="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <tr>
              <th class="px-4 py-3 text-left">股票</th>
              <th class="px-4 py-3 text-center">推荐次数</th>
              <th class="px-4 py-3 text-left">推荐券商</th>
              <th class="px-4 py-3 text-left">核心逻辑</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-4 py-3"><span class="font-bold text-purple-900">卫星化学</span><span class="text-xs text-slate-500 font-mono ml-1">002648</span></td>
              <td class="px-4 py-3 text-center"><span class="bg-purple-600 text-white px-2 py-1 rounded-full text-sm font-bold">4 次</span></td>
              <td class="px-4 py-3 text-slate-600 text-sm">开源、第一创业、中银、金元</td>
              <td class="px-4 py-3 text-slate-700 text-sm">Q2净利润预增272%，美伊冲突下乙烷成本优势凸显</td>
            </tr>
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-4 py-3"><span class="font-bold text-purple-900">长川科技</span><span class="text-xs text-slate-500 font-mono ml-1">300604</span></td>
              <td class="px-4 py-3 text-center"><span class="bg-purple-600 text-white px-2 py-1 rounded-full text-sm font-bold">4 次</span></td>
              <td class="px-4 py-3 text-slate-600 text-sm">东吴、第一创业、国信、金元</td>
              <td class="px-4 py-3 text-slate-700 text-sm">半导体测试设备龙头，SoC&存储双轮驱动</td>
            </tr>
            <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
              <td class="px-4 py-3"><span class="font-bold text-purple-900">宁德时代</span><span class="text-xs text-slate-500 font-mono ml-1">300750</span></td>
              <td class="px-4 py-3 text-center"><span class="bg-purple-600 text-white px-2 py-1 rounded-full text-sm font-bold">4 次</span></td>
              <td class="px-4 py-3 text-slate-600 text-sm">中银、金元、东兴、开源</td>
              <td class="px-4 py-3 text-slate-700 text-sm">发布天恒钠电储能系统，全球储能市场空间广阔</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3"><span class="font-bold text-blue-900">沪电股份</span><span class="text-xs text-slate-500 font-mono ml-1">002463</span></td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-4 py-3 text-slate-600 text-sm">中银、金元、东兴</td>
              <td class="px-4 py-3 text-slate-700 text-sm">PCB龙头受益AI服务器需求</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3"><span class="font-bold text-blue-900">深南电路</span><span class="text-xs text-slate-500 font-mono ml-1">002916</span></td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-4 py-3 text-slate-600 text-sm">中银、金元、东兴</td>
              <td class="px-4 py-3 text-slate-700 text-sm">封装基板国产替代，PCB业务稳健增长</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3"><span class="font-bold text-blue-900">中国国航</span><span class="text-xs text-slate-500 font-mono ml-1">601111</span></td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-4 py-3 text-slate-600 text-sm">中银、金元、东兴</td>
              <td class="px-4 py-3 text-slate-700 text-sm">航空业复苏，国际航线恢复</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3"><span class="font-bold text-blue-900">招商轮船</span><span class="text-xs text-slate-500 font-mono ml-1">601872</span></td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-4 py-3 text-slate-600 text-sm">中银、金元、东兴</td>
              <td class="px-4 py-3 text-slate-700 text-sm">美伊协议解除海上封锁，油运中期重塑</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3"><span class="font-bold text-blue-900">英维克</span><span class="text-xs text-slate-500 font-mono ml-1">003028</span></td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-4 py-3 text-slate-600 text-sm">开源、东兴、金元</td>
              <td class="px-4 py-3 text-slate-700 text-sm">液冷全产业链龙头，英伟达Rubin平台100%液冷</td>
            </tr>
            <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
              <td class="px-4 py-3"><span class="font-bold text-blue-900">火炬电子</span><span class="text-xs text-slate-500 font-mono ml-1">603678</span></td>
              <td class="px-4 py-3 text-center"><span class="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">3 次</span></td>
              <td class="px-4 py-3 text-slate-600 text-sm">东兴、金元、中银</td>
              <td class="px-4 py-3 text-slate-700 text-sm">MLCC高端产品国产替代</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 各券商重点推荐个股 -->
    <div id="b_sec8" class="my-6">
      <h3 class="text-lg font-black text-slate-800 mb-3 flex items-center">
        <span class="mr-2">📋</span>各券商重点推荐个股一览
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
          <div class="flex items-center mb-2">
            <span class="text-lg mr-2">🟢</span>
            <span class="font-bold text-slate-900">国信证券</span>
          </div>
          <p class="text-sm text-slate-600">重点关注AI算力、半导体设备、医药生物等方向</p>
        </div>
        <div class="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
          <div class="flex items-center mb-2">
            <span class="text-lg mr-2">🔵</span>
            <span class="font-bold text-slate-900">中银证券</span>
          </div>
          <p class="text-sm text-slate-600">关注半导体、新能源、医药等核心资产</p>
        </div>
        <div class="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
          <div class="flex items-center mb-2">
            <span class="text-lg mr-2">🟡</span>
            <span class="font-bold text-slate-900">东兴证券</span>
          </div>
          <p class="text-sm text-slate-600">看好半导体设备、电子、通信等Tech-STAR方向</p>
        </div>
        <div class="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
          <div class="flex items-center mb-2">
            <span class="text-lg mr-2">🔴</span>
            <span class="font-bold text-slate-900">开源证券</span>
          </div>
          <p class="text-sm text-slate-600">聚焦AI算力、液冷、化工新材料等成长风格</p>
        </div>
        <div class="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
          <div class="flex items-center mb-2">
            <span class="text-lg mr-2">🟠</span>
            <span class="font-bold text-slate-900">第一创业</span>
          </div>
          <p class="text-sm text-slate-600">关注半导体、新能源、医药等成长+价值组合</p>
        </div>
        <div class="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
          <div class="flex items-center mb-2">
            <span class="text-lg mr-2">🟣</span>
            <span class="font-bold text-slate-900">东吴证券</span>
          </div>
          <p class="text-sm text-slate-600">推荐5只ETF覆盖AI硬件完整产业链</p>
        </div>
      </div>
    </div>

    <!-- 攻守兼备策略 -->
    <div id="b_sec9" class="my-6">
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
        <h3 class="text-lg font-black text-blue-800 mb-3 flex items-center">
          <span class="mr-2">📋</span>总体策略：震荡市中的"攻守兼备"
        </h3>
        <p class="text-blue-900 mb-3"><strong>当前市场定性：</strong>结构性行情阶段，科技成长主线明确但高位震荡加剧。沪指在4100-4200点区间震荡，创业板指创历史新高后出现回调压力。</p>
        <p class="text-blue-900"><strong>仓位建议：</strong>维持70-80%仓位，适度"高低切换"，从高位纯主题科技股向估值合理的传统蓝筹倾斜，保持均衡配置。</p>
      </div>

      <!-- 进攻方向 -->
      <h4 class="text-lg font-black text-slate-800 mb-3 flex items-center mt-6">
        <span class="mr-2">⚔️</span>进攻方向（三条主线）
      </h4>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-5">
          <h4 class="text-purple-800 font-black mb-3 flex items-center">
            <span class="text-xl mr-2">🏅</span>主线一：AI/算力
          </h4>
          <p class="text-xs text-purple-600 font-semibold mb-2">确定性最高</p>
          <ul class="space-y-2 text-purple-900 text-sm">
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>逻辑：</strong>英伟达GB200/Rubin平台全液冷，MLCC结构性缺货至2028年，算力基建Capex高增</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>标的：</strong>卫星化学、长川科技、宁德时代、沪电股份</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>配置权重：</strong>建议占组合25-30%</span>
            </li>
          </ul>
        </div>

        <div class="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-5">
          <h4 class="text-red-800 font-black mb-3 flex items-center">
            <span class="text-xl mr-2">🚀</span>主线二：半导体/芯片
          </h4>
          <p class="text-xs text-red-600 font-semibold mb-2">弹性最大</p>
          <ul class="space-y-2 text-red-900 text-sm">
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>逻辑：</strong>国产替代加速，NAND Flash缺货至2027年，测试设备国产化率提升</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>标的：</strong>深南电路、火炬电子、美光科技</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>配置权重：</strong>建议占组合20-25%</span>
            </li>
          </ul>
        </div>

        <div class="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-5">
          <h4 class="text-green-800 font-black mb-3 flex items-center">
            <span class="text-xl mr-2">💊</span>主线三：医药生物
          </h4>
          <p class="text-xs text-green-600 font-semibold mb-2">性价比最优</p>
          <ul class="space-y-2 text-green-900 text-sm">
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>逻辑：</strong>板块调整五年估值底部，老龄化长期驱动，创新药审批加快</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>标的：</strong>关注创新药、医疗器械龙头</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>配置权重：</strong>建议占组合15-20%</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 防守方向 -->
      <h4 class="text-lg font-black text-slate-800 mb-3 flex items-center mt-6">
        <span class="mr-2">🛡️</span>防守方向
      </h4>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-5">
          <h4 class="text-amber-800 font-black mb-3 flex items-center">
            <span class="text-xl mr-2">💰</span>方向一：煤炭/能源
          </h4>
          <ul class="space-y-2 text-amber-900 text-sm">
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>逻辑：</strong>进口收缩5月降7.7%，安监升级减产逻辑，夏季用电高峰</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>配置权重：</strong>建议占组合10-15%</span>
            </li>
          </ul>
        </div>

        <div class="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-xl p-5">
          <h4 class="text-yellow-800 font-black mb-3 flex items-center">
            <span class="text-xl mr-2">✈️</span>方向二：交通运输
          </h4>
          <ul class="space-y-2 text-yellow-900 text-sm">
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>逻辑：</strong>中国国航、招商轮船受益航空复苏和中东局势缓和</span>
            </li>
            <li class="flex items-start">
              <span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 mr-2 flex-shrink-0"></span>
              <span><strong>配置权重：</strong>建议占组合10-15%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 短期交易机会 -->
    <div id="b_sec10" class="my-6">
      <h3 class="text-lg font-black text-slate-800 mb-3 flex items-center">
        <span class="mr-2">🎯</span>短期交易机会
      </h3>
      <div class="overflow-x-auto my-4">
        <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
          <thead class="bg-gradient-to-r from-green-600 to-emerald-700 text-white">
            <tr>
              <th class="px-4 py-3 text-left">主题</th>
              <th class="px-4 py-3 text-center">催化时间</th>
              <th class="px-4 py-3 text-left">关注标的</th>
              <th class="px-4 py-3 text-left">参与策略</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-100">
            <tr class="bg-green-50 hover:bg-green-100 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">液冷产业链</td>
              <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-bold">Q3</span></td>
              <td class="px-4 py-3 text-slate-700 text-sm">英维克、相关液冷设备厂商</td>
              <td class="px-4 py-3 text-slate-700 text-sm">英伟达Rubin平台Q3开始发货，业绩兑现期</td>
            </tr>
            <tr class="bg-green-50 hover:bg-green-100 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">MLCC涨价链</td>
              <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-bold">持续至2028年</span></td>
              <td class="px-4 py-3 text-slate-700 text-sm">火炬电子、相关MLCC厂商</td>
              <td class="px-4 py-3 text-slate-700 text-sm">原厂将全品类涨价30%-50%，结构性缺货持续</td>
            </tr>
            <tr class="bg-green-50 hover:bg-green-100 transition-colors">
              <td class="px-4 py-3 font-bold text-slate-900">钠电储能</td>
              <td class="px-4 py-3 text-center"><span class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-bold">2026年9月</span></td>
              <td class="px-4 py-3 text-slate-700 text-sm">宁德时代</td>
              <td class="px-4 py-3 text-slate-700 text-sm">天恒钠电储能系统发布，2026年9月交付</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 风险提示 -->
    <div id="b_sec11" class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 my-6 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-4 flex items-center">
        <span class="text-xl mr-2">⚠️</span>风险提示
      </h4>
      <ul class="space-y-2 text-red-900 text-sm">
        <li class="flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
          <span><strong>地缘政治风险：</strong>中美贸易摩擦加剧、伊朗美国谈判不确定性、霍尔木兹海峡通航机制变化</span>
        </li>
        <li class="flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
          <span><strong>海外货币政策收紧：</strong>美联储加息预期重燃、韩国央行鹰派转向、全球宏观流动性边际收紧</span>
        </li>
        <li class="flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
          <span><strong>AI落地不及预期：</strong>大厂资本开支不及预期、技术迭代风险、行业渗透放缓</span>
        </li>
        <li class="flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
          <span><strong>国内经济表现不及预期：</strong>社零消费数据承压、固定资产投资下滑、房地产市场持续低迷</span>
        </li>
        <li class="flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span>
          <span><strong>行业竞争加剧：</strong>算力租赁行业新增主体增多价格战、快递单价环比下降、光伏储能行业内卷</span>
        </li>
      </ul>
    </div>

    <!-- 底部免责声明 -->
    <div class="border-t border-slate-200 pt-6 mt-8 text-center">
      <p class="text-slate-500 text-xs">
        免责声明：本报告基于公开券商晨会纪要整理汇总，仅供参考，不构成任何投资建议。市场有风险，投资需谨慎。
      </p>
      <p class="text-slate-400 text-xs mt-2">
        数据来源：国信证券、中银证券、山西证券、第一创业、东兴证券、金元证券、华源证券、开源证券、万联证券、东吴证券、英大证券 等11家券商晨报
      </p>
    </div>

  </div>`;
}
