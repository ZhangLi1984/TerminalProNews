// ==========================================
// 券商晨报内容模块 - 2026 年 4 月 28 日
// 基于 9 家券商晨会纪要（4 月 24-27 日数据）
// ==========================================

function renderBrokerContent_0428() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 报告头部信息 -->
    <div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-8 border border-amber-200">
      <h1 class="text-2xl font-black text-slate-900 mb-4">2026-04-28 券商晨报买方汇总内参</h1>
      <div class="flex flex-wrap gap-4 text-sm">
        <div class="flex items-center text-slate-700">
          <svg class="w-4 h-4 mr-2 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
          </svg>
          <span>报告日期：2026 年 04 月 28 日</span>
        </div>
        <div class="flex items-center text-slate-700">
          <svg class="w-4 h-4 mr-2 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          <span>覆盖券商：英大、东海、华源、万联、山西、开源、国信、第一创业、东兴 等 9 家</span>
        </div>
      </div>
    </div>

    <!-- ==================== 核心观点摘要 ==================== -->
    <h2 id="b_sec1" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>核心观点摘要</h2>

    <blockquote class="border-l-4 border-amber-500 bg-amber-50 rounded-r-xl p-4 my-4 text-slate-700">
      <strong>整体市场判断：短期震荡回踩，中期慢牛格局不变。</strong>上证指数收跌 0.33% 报 <strong>4079.90 点</strong>，沪深两市成交额约 <strong>2.64 万亿元</strong>。大盘在五连阳后出现技术性回踩，高位 AI 算力、CPO 等题材股获利回吐，新能源（锂矿、电池）、半导体逆势走强。资金呈现"股抱团、债钱多"的极致分化格局，高度集中于 AI 基础设施、出海龙头及高分红蓝筹。
    </blockquote>

    <p class="text-slate-700 leading-relaxed my-4">
      各券商共识认为：短期调整是技术性回踩消化浮筹的需求叠加一季报业绩披露尾声、五一假期临近所致，但 <strong>不影响中期慢牛格局</strong>。操作上建议规避前期涨幅过高、缺乏业绩支撑的题材股，以防守为主，静待回踩后结构性低吸机会。
    </p>

    <!-- ==================== 行业推荐共识榜 ==================== -->
    <h2 id="b_sec2" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>行业推荐共识榜 TOP10</h2>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-center text-sm font-black">排名</th>
            <th class="px-4 py-3 text-left text-sm font-black">行业方向</th>
            <th class="px-4 py-3 text-center text-sm font-black">推荐券商</th>
            <th class="px-4 py-3 text-left text-sm font-black">主要逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-amber-500 text-white font-black px-2 py-1 rounded-full text-xs">1</span></td>
            <td class="px-4 py-3 text-sm font-bold text-amber-900">半导体/芯片</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-amber-600">6 家</td>
            <td class="px-4 py-3 text-sm">自主可控+国产替代加速，全球龙头财报超预期，AI算力需求驱动</td>
          </tr>
          <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-amber-500 text-white font-black px-2 py-1 rounded-full text-xs">2</span></td>
            <td class="px-4 py-3 text-sm font-bold text-amber-900">电力设备/电网</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-amber-600">5 家</td>
            <td class="px-4 py-3 text-sm">算电协同国家战略、特高压密集招标、数据中心供电需求</td>
          </tr>
          <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-orange-500 text-white font-black px-2 py-1 rounded-full text-xs">3</span></td>
            <td class="px-4 py-3 text-sm font-bold text-orange-900">新能源/储能</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-orange-600">5 家</td>
            <td class="px-4 py-3 text-sm">政策驱动新型储能建设，海外大订单涌现，锂电景气回升</td>
          </tr>
          <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-orange-500 text-white font-black px-2 py-1 rounded-full text-xs">4</span></td>
            <td class="px-4 py-3 text-sm font-bold text-orange-900">AI算力/光通信</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-orange-600">4 家</td>
            <td class="px-4 py-3 text-sm">DeepSeek-V4发布、AI数据中心建设加速、光模块需求旺盛</td>
          </tr>
          <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-orange-500 text-white font-black px-2 py-1 rounded-full text-xs">5</span></td>
            <td class="px-4 py-3 text-sm font-bold text-orange-900">煤炭/能源</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-orange-600">4 家</td>
            <td class="px-4 py-3 text-sm">供给收缩、美伊冲突推升油价、煤价看涨预期</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white font-black px-2 py-1 rounded-full text-xs">6</span></td>
            <td class="px-4 py-3 text-sm font-bold">消费（食品/美妆/酒店）</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-slate-600">4 家</td>
            <td class="px-4 py-3 text-sm">扩大内需战略、五一假期催化、国货品牌高端化</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white font-black px-2 py-1 rounded-full text-xs">7</span></td>
            <td class="px-4 py-3 text-sm font-bold">人形机器人</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-slate-600">3 家</td>
            <td class="px-4 py-3 text-sm">Optimus 7-8月量产在即，国产链加速追赶</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white font-black px-2 py-1 rounded-full text-xs">8</span></td>
            <td class="px-4 py-3 text-sm font-bold">医药创新</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-slate-600">3 家</td>
            <td class="px-4 py-3 text-sm">AACR/ASCO会议密集披露中国创新药成果</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white font-black px-2 py-1 rounded-full text-xs">9</span></td>
            <td class="px-4 py-3 text-sm font-bold">汽车/自动驾驶</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-slate-600">3 家</td>
            <td class="px-4 py-3 text-sm">舱驾一体加速落地、智能驾驶商业化</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-center"><span class="bg-slate-500 text-white font-black px-2 py-1 rounded-full text-xs">10</span></td>
            <td class="px-4 py-3 text-sm font-bold">非银金融</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-slate-600">3 家</td>
            <td class="px-4 py-3 text-sm">券商板块持仓历史底部，期货高景气，保险负债端改善</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ==================== 金股推荐汇总 ==================== -->
    <h2 id="b_sec3" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>各券商金股推荐汇总</h2>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left text-sm font-black">股票</th>
            <th class="px-4 py-3 text-left text-sm font-black">代码</th>
            <th class="px-4 py-3 text-center text-sm font-black">推荐评级</th>
            <th class="px-4 py-3 text-left text-sm font-black">推荐券商</th>
            <th class="px-4 py-3 text-left text-sm font-black">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">恒立液压</td>
            <td class="px-4 py-3 text-sm text-slate-600">601100</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-purple-600">买入</td>
            <td class="px-4 py-3 text-sm">东海</td>
            <td class="px-4 py-3 text-sm">收入利润创新高，行星滚柱丝杠初步量产，机器人核心零部件</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">杰瑞股份</td>
            <td class="px-4 py-3 text-sm text-slate-600">002353</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-purple-600">买入</td>
            <td class="px-4 py-3 text-sm">东海</td>
            <td class="px-4 py-3 text-sm">数据中心供电订单超11亿美元，天然气板块高增长</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">百普赛斯</td>
            <td class="px-4 py-3 text-sm text-slate-600">301080</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-purple-600">买入</td>
            <td class="px-4 py-3 text-sm">东海</td>
            <td class="px-4 py-3 text-sm">国内外业务快速增长，生物试剂龙头</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">乖宝宠物</td>
            <td class="px-4 py-3 text-sm text-slate-600">301498</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-purple-600">买入</td>
            <td class="px-4 py-3 text-sm">东海</td>
            <td class="px-4 py-3 text-sm">自有品牌高速增长至73%以上，渠道结构优化</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">小商品城</td>
            <td class="px-4 py-3 text-sm text-slate-600">600415</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-blue-600">买入</td>
            <td class="px-4 py-3 text-sm">山西</td>
            <td class="px-4 py-3 text-sm">贸易服务成新增长极，数智化转型领先</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">罗莱生活</td>
            <td class="px-4 py-3 text-sm text-slate-600">002293</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-blue-600">买入</td>
            <td class="px-4 py-3 text-sm">山西</td>
            <td class="px-4 py-3 text-sm">电商渠道提质增效，26Q1业绩加速增长，高分红</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">珀莱雅</td>
            <td class="px-4 py-3 text-sm text-slate-600">603605</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-blue-600">增持</td>
            <td class="px-4 py-3 text-sm">万联</td>
            <td class="px-4 py-3 text-sm">国货化妆品龙头，子品牌快速增长</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">成都银行</td>
            <td class="px-4 py-3 text-sm text-slate-600">601838</td>
            <td class="px-4 py-3 text-center text-sm font-bold text-blue-600">增持</td>
            <td class="px-4 py-3 text-sm">万联</td>
            <td class="px-4 py-3 text-sm">净息差企稳，资产质量优异</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-sm font-bold">兖矿能源</td>
            <td class="px-4 py-3 text-sm text-slate-600">600188</td>
            <td class="px-4 py-3 text-center text-sm font-bold">推荐</td>
            <td class="px-4 py-3 text-sm">山西</td>
            <td class="px-4 py-3 text-sm">海外产能布局受益，煤油气共振</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-sm font-bold">圆通速递</td>
            <td class="px-4 py-3 text-sm text-slate-600">600233</td>
            <td class="px-4 py-3 text-center text-sm font-bold">强烈推荐</td>
            <td class="px-4 py-3 text-sm">东兴</td>
            <td class="px-4 py-3 text-sm">市场份额持续提升，反内卷受益</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-sm font-bold">昊华科技</td>
            <td class="px-4 py-3 text-sm text-slate-600">600378</td>
            <td class="px-4 py-3 text-center text-sm font-bold">强烈推荐</td>
            <td class="px-4 py-3 text-sm">东兴</td>
            <td class="px-4 py-3 text-sm">氟化工景气+电子化学品，中化新材料平台</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-sm font-bold">巨化股份</td>
            <td class="px-4 py-3 text-sm text-slate-600">600160</td>
            <td class="px-4 py-3 text-center text-sm font-bold">推荐</td>
            <td class="px-4 py-3 text-sm">开源</td>
            <td class="px-4 py-3 text-sm">利润现金流断层增长，大幅提高分红</td>
          </tr>
          <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
            <td class="px-4 py-3 text-sm font-bold">指南针</td>
            <td class="px-4 py-3 text-sm text-slate-600">300803</td>
            <td class="px-4 py-3 text-center text-sm font-bold">推荐</td>
            <td class="px-4 py-3 text-sm">开源</td>
            <td class="px-4 py-3 text-sm">软件和证券业务同比增长，金融资产规模高增</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ==================== 东兴 4 月金股 ==================== -->
    <h2 id="b_sec4" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>东兴证券 4 月金股组合</h2>

    <div class="grid grid-cols-3 md:grid-cols-5 gap-3 my-4">
      <div class="bg-slate-50 rounded-lg p-3 text-center shadow-sm">
        <div class="text-xs text-slate-500 font-bold">北京利尔</div>
        <div class="font-bold text-sm text-slate-800 mt-1">002392</div>
      </div>
      <div class="bg-slate-50 rounded-lg p-3 text-center shadow-sm">
        <div class="text-xs text-slate-500 font-bold">中矿资源</div>
        <div class="font-bold text-sm text-slate-800 mt-1">002738</div>
      </div>
      <div class="bg-slate-50 rounded-lg p-3 text-center shadow-sm">
        <div class="text-xs text-slate-500 font-bold">甘源食品</div>
        <div class="font-bold text-sm text-slate-800 mt-1">002991</div>
      </div>
      <div class="bg-slate-50 rounded-lg p-3 text-center shadow-sm">
        <div class="text-xs text-slate-500 font-bold">江丰电子</div>
        <div class="font-bold text-sm text-slate-800 mt-1">300666</div>
      </div>
      <div class="bg-slate-50 rounded-lg p-3 text-center shadow-sm">
        <div class="text-xs text-slate-500 font-bold">华鲁恒升</div>
        <div class="font-bold text-sm text-slate-800 mt-1">600426</div>
      </div>
      <div class="bg-slate-50 rounded-lg p-3 text-center shadow-sm">
        <div class="text-xs text-slate-500 font-bold">亨通光电</div>
        <div class="font-bold text-sm text-slate-800 mt-1">600487</div>
      </div>
      <div class="bg-slate-50 rounded-lg p-3 text-center shadow-sm">
        <div class="text-xs text-slate-500 font-bold">中国国航</div>
        <div class="font-bold text-sm text-slate-800 mt-1">601111</div>
      </div>
      <div class="bg-slate-50 rounded-lg p-3 text-center shadow-sm">
        <div class="text-xs text-slate-500 font-bold">浙江仙通</div>
        <div class="font-bold text-sm text-slate-800 mt-1">603239</div>
      </div>
      <div class="bg-slate-50 rounded-lg p-3 text-center shadow-sm">
        <div class="text-xs text-slate-500 font-bold">日联科技</div>
        <div class="font-bold text-sm text-slate-800 mt-1">688531</div>
      </div>
    </div>

    <!-- ==================== 英大证券 ==================== -->
    <h2 id="b_sec5" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>英大证券 -- 五连阳后技术性回踩</h2>

    <blockquote class="border-l-4 border-amber-500 bg-amber-50 rounded-r-xl p-4 my-4 text-slate-700">
      <strong>核心观点：</strong>警惕短期沪深三大指数重心回落风险，但无需过分担心，短期震荡回踩不影响中期慢牛格局。五连阳后技术性回踩消化浮筹；一季报业绩披露尾声，部分估值虚高题材股缺乏业绩支撑；五一假期临近谨慎情绪升温。
    </blockquote>

    <h4 class="text-slate-800 font-bold mb-2 mt-6">行业推荐</h4>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>半导体：</strong>自主可控长期逻辑，国产替代不可逆加速通道</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>电子：</strong>结构性机会，聚焦 AI 算力/光学光电子</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>新能源：</strong>储能出海</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>消费：</strong>扩大内需战略</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>电力：</strong>算电协同</span></li>
    </ul>

    <!-- ==================== 华源证券 ==================== -->
    <h2 id="b_sec6" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>华源证券 -- 多行业产业链深度跟踪</h2>

    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-emerald-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📊</span>核心亮点
      </h4>
      <p class="text-emerald-900 leading-relaxed">
        人形机器人 Optimus 预计 7-8 月启动量产，国产机器人半马纪录超越人类；SiC 半导体 AI 能源+新能源双轮驱动；特高压密集招标期。
      </p>
    </div>

    <h4 class="text-slate-800 font-bold mb-2 mt-6">重点方向</h4>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>人形机器人：</strong>Optimus 7-8月量产在即，关注丝杠、减速器、传感器产业链</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>SiC 半导体：</strong>8英寸衬底有望成为主流，关注天岳先进、晶盛机电、斯达半导</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>电网设备：</strong>特高压密集招标，关注平高电气、国电南瑞、中国西电、许继电气</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>煤炭：</strong>3月原煤产量持平，进口动力煤下降，供给收缩态势有望持续</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>医药：</strong>AACR 凸显中国创新质量，ASCO 值得更多期待</span></li>
    </ul>

    <!-- ==================== 山西证券 ==================== -->
    <h2 id="b_sec7" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>山西证券 -- 覆铜板涨价 + 煤炭戴维斯双击</h2>

    <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🔥</span>煤炭板块核心逻辑
      </h4>
      <p class="text-red-900 leading-relaxed">
        美伊冲突高不确定性对应高波动性，油价短期难大幅下调，煤价看涨。煤炭股有望迎来 <strong>戴维斯双击</strong>。推荐兖矿能源、广汇能源、中煤能源、淮北矿业等。
      </p>
    </div>

    <h4 class="text-slate-800 font-bold mb-2 mt-6">重点个股</h4>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>罗莱生活（002293）：</strong>买入-A，电商渠道提质增效，26Q1业绩加速增长，高分红</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>小商品城（600415）：</strong>买入-A，贸易服务成新增长极，数智化转型领先</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>兖矿能源、盘江股份：</strong>煤油气共振 / 煤电新能源一体化</span></li>
    </ul>

    <!-- ==================== 开源证券 ==================== -->
    <h2 id="b_sec8" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>开源证券 -- A股前 5% 集中度接近历史阈值</h2>

    <div class="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-indigo-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📈</span>策略核心
      </h4>
      <p class="text-indigo-900 leading-relaxed">
        当前 A 股前 5% 成交额个股交易集中度来到 <strong>43.1%</strong>，接近历史阈值，但牛市仍在，风格切换概率不高。景气投资最重要的是 <strong>"G 和 △G 兼备"</strong>，筛选"二次点火"成长资产。
      </p>
    </div>

    <h4 class="text-slate-800 font-bold mb-2 mt-6">行业观点</h4>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>电子：</strong>全球半导体龙头财报超预期，AI 从叙事走向业绩兑现</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>计算机：</strong>DeepSeek-V4 开启百万上下文普惠时代，关注国产算力机遇</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>通信：</strong>看好全球 AI 链，重视"光网络四杰"投资机会</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>重点个股：</strong>指南针、国泰海通、巨星农牧、巨化股份</span></li>
    </ul>

    <!-- ==================== 国信证券 ==================== -->
    <h2 id="b_sec9" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>国信证券 -- "股抱团、债钱多"格局</h2>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📊</span>市场格局分析
      </h4>
      <p class="text-blue-900 leading-relaxed">
        呈现 <strong>"股抱团、债钱多"</strong> 特有格局。资金高度蜷缩在 AI 基础设施、出海龙头及高分红蓝筹中。深层逻辑在于宏观弱复苏与地缘政治波动下，投资者宁愿支付高拥挤度溢价换取基本面确定性。
      </p>
    </div>

    <h4 class="text-slate-800 font-bold mb-2 mt-6">其他要点</h4>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>宏观：</strong>3月一般公共预算"收入暖、支出凉"，二季度基建投资有望加力稳就业</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>固收+：</strong>绩优固收+基金"降股、增债、减转债"，主动降低权益敞口</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>重点关注：</strong>贵州茅台、中信证券、药明康德、中控技术、温氏股份、牧原股份</span></li>
    </ul>

    <!-- ==================== 东海证券 ==================== -->
    <h2 id="b_sec10" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>东海证券 -- 新能源+医药+金股推荐</h2>

    <div class="bg-gradient-to-r from-green-50 to-lime-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-green-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📈</span>资产配置方向
      </h4>
      <p class="text-green-900 leading-relaxed">
        看好新能源尤其是储能在全球市场空间，预计原料自主的周期龙头业绩持续向好。科技方面关注算力资本开支到 AI 应用的过程。
      </p>
    </div>

    <h4 class="text-slate-800 font-bold mb-2 mt-6">重点个股推荐</h4>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>百普赛斯（301080）：</strong>买入，生物试剂龙头，国内外业务快速增长</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>杰瑞股份（002353）：</strong>买入，数据中心供电订单超11亿美元</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>恒立液压（601100）：</strong>买入，收入利润创新高，机器人核心零部件</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>乖宝宠物（301498）：</strong>买入，自有品牌高速增长至73%以上</span></li>
    </ul>

    <h4 class="text-slate-800 font-bold mb-2 mt-6">利率观点</h4>
    <p class="text-slate-700 leading-relaxed my-4">
      国内资金维持宽松，10年期国债收益率一度试探 <strong>1.75%</strong> 关口；美债震荡。
    </p>

    <!-- ==================== 第一创业证券 ==================== -->
    <h2 id="b_sec11" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>第一创业证券 -- 半导体+储能双轮驱动</h2>

    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>半导体：</strong>德州仪器 Q1 营收 48.3 亿美元同比 +19%，模拟芯片景气度明显提升，继续看好模拟芯片行业</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>储能：</strong>海外超大型单一储能订单大概率持续出现，叠加国内储能加速建设，看好储能和锂电池行业高景气度持续</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>新能源：</strong>国内后续新增风电光伏装机大概率在低位徘徊（抢并网高基数效应）</span></li>
    </ul>

    <!-- ==================== 万联 & 东兴 ==================== -->
    <h2 id="b_sec12" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>万联证券 & 东兴证券</h2>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">万联证券</h3>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>电力设备：</strong>锂电行业景气回升，关注材料环节龙头；风电装机高增长；固态电池技术产业化加速</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>重点个股：</strong>珀莱雅（603605，增持）、成都银行（601838，增持）</span></li>
    </ul>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">东兴证券</h3>
    <ul class="space-y-2 my-4">
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>宏观经济：</strong>一季度高技术制造业增加值同比 +12.5%，工业机器人产量 +33.2%，锂离子电池产量 +40.8%</span></li>
      <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2 mr-3 flex-shrink-0"></span><span><strong>重点个股：</strong>圆通速递（强烈推荐）、昊华科技（强烈推荐）</span></li>
    </ul>

    <!-- ==================== 风险提示 ==================== -->
    <h2 id="b_sec13" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>风险提示</h2>

    <div class="grid gap-4 my-6">
      <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 rounded-r-xl">
        <h4 class="text-red-800 font-black mb-2 flex items-center"><span class="mr-2">1.</span>地缘政治风险</h4>
        <p class="text-red-900 text-sm">美伊冲突持续升级，油价高位波动对通胀和需求的传导，霍尔木兹海峡通航风险</p>
      </div>
      <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-5 rounded-r-xl">
        <h4 class="text-orange-800 font-black mb-2 flex items-center"><span class="mr-2">2.</span>一季报业绩雷</h4>
        <p class="text-orange-900 text-sm">部分高估值题材股业绩不及预期，年报与一季报密集披露进入尾声</p>
      </div>
      <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-5 rounded-r-xl">
        <h4 class="text-yellow-800 font-black mb-2 flex items-center"><span class="mr-2">3.</span>交易拥挤度风险</h4>
        <p class="text-yellow-900 text-sm">A股前 5% 个股成交额占比接近历史极值（43.1%），资金高度集中</p>
      </div>
      <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-5 rounded-r-xl">
        <h4 class="text-yellow-800 font-black mb-2 flex items-center"><span class="mr-2">4.</span>五一假期流动性变化</h4>
        <p class="text-yellow-900 text-sm">五一假期前后市场流动性变化，外资可能提前减仓避险</p>
      </div>
      <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-5 rounded-r-xl">
        <h4 class="text-yellow-800 font-black mb-2 flex items-center"><span class="mr-2">5.</span>美联储政策不确定性</h4>
        <p class="text-yellow-900 text-sm">美联储货币政策路径不明，特朗普政策变动对全球市场的扰动</p>
      </div>
    </div>

    <!-- 免责声明 -->
    <div class="bg-slate-100 rounded-xl p-4 my-6 text-center">
      <p class="text-xs text-slate-500">本报告基于 2026 年 4 月 24-27 日各券商晨会纪要综合整理，仅供参考，不构成投资建议。</p>
    </div>

  </div>`;
}
