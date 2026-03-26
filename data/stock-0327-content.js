// ==========================================
// 个股研报内容渲染 - 2026 年 3 月 27 日
// ==========================================

function renderStockContent_0327() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 核心摘要 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>核心摘要
    </h2>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <p class="text-blue-900 leading-relaxed">
        今日共分析 <strong>101 篇</strong> 个股研报，整体情绪积极。资金主攻方向集中在 <strong>AI 算力产业链</strong>（光模块、服务器、PCB 钻针）、<strong>新能源</strong>（锂电、风电涂料）、<strong>创新药/CRO</strong>、<strong>消费复苏</strong>（免税、乳业、文旅）及 <strong>高股息资产</strong>（高速公路、煤炭）等赛道。经逐一评估，<strong>S 级标的 5 只、A 级标的 12 只、B 级标的 78 只、C 级标的 6 只</strong>。S/A 级占比约 17%，显示今日研报质量整体较高。
      </p>
    </div>

    <div class="grid grid-cols-4 gap-4 my-6">
      <div class="bg-gradient-to-br from-purple-500 to-red-500 rounded-xl p-4 text-white text-center shadow-lg">
        <div class="text-3xl font-black">5</div>
        <div class="text-xs opacity-90 mt-1">S 级标的</div>
      </div>
      <div class="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl p-4 text-white text-center shadow-lg">
        <div class="text-3xl font-black">12</div>
        <div class="text-xs opacity-90 mt-1">A 级标的</div>
      </div>
      <div class="bg-gradient-to-br from-slate-400 to-slate-500 rounded-xl p-4 text-white text-center shadow-lg">
        <div class="text-3xl font-black">78</div>
        <div class="text-xs opacity-90 mt-1">B 级标的</div>
      </div>
      <div class="bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl p-4 text-white text-center shadow-lg">
        <div class="text-3xl font-black">6</div>
        <div class="text-xs opacity-90 mt-1">C 级标的</div>
      </div>
    </div>

    <!-- S 级标的概览 -->
    <h2 id="sec2" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>S 级标的深度剖析（核心仓位推荐）
    </h2>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-gradient-to-r from-purple-600 to-red-600 text-white">
          <tr>
            <th class="px-4 py-3 text-left font-bold">排名</th>
            <th class="px-4 py-3 text-left font-bold">股票名称</th>
            <th class="px-4 py-3 text-left font-bold">代码</th>
            <th class="px-4 py-3 text-center font-bold">得分</th>
            <th class="px-4 py-3 text-left font-bold">机构</th>
            <th class="px-4 py-3 text-left font-bold">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-black">1</span></td>
            <td class="px-4 py-3 font-bold text-purple-900">紫金矿业</td>
            <td class="px-4 py-3 text-slate-600">601899.SH</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800">9.2</span></td>
            <td class="px-4 py-3 text-slate-600">东吴证券</td>
            <td class="px-4 py-3 text-slate-700 text-sm">金铜锂三大品种量价齐升，2025 年归母 +61.5%</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-black">2</span></td>
            <td class="px-4 py-3 font-bold text-purple-900">海星股份</td>
            <td class="px-4 py-3 text-slate-600">603115.SH</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800">9.0</span></td>
            <td class="px-4 py-3 text-slate-600">中银证券</td>
            <td class="px-4 py-3 text-slate-700 text-sm">AI 服务器 800VDC 架构驱动电极箔价值重估</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-black">3</span></td>
            <td class="px-4 py-3 font-bold text-purple-900">若羽臣</td>
            <td class="px-4 py-3 text-slate-600">003010.SZ</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800">8.8</span></td>
            <td class="px-4 py-3 text-slate-600">信达证券</td>
            <td class="px-4 py-3 text-slate-700 text-sm">自有品牌转型成功，绽家 + 斐萃双轮驱动</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-black">4</span></td>
            <td class="px-4 py-3 font-bold text-purple-900">协创数据</td>
            <td class="px-4 py-3 text-slate-600">300857.SZ</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800">8.7</span></td>
            <td class="px-4 py-3 text-slate-600">太平洋证券</td>
            <td class="px-4 py-3 text-slate-700 text-sm">智能算力收入 +1727%，现金流 +1011%</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-black">5</span></td>
            <td class="px-4 py-3 font-bold text-purple-900">深南电路</td>
            <td class="px-4 py-3 text-slate-600">002916.SZ</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800">8.6</span></td>
            <td class="px-4 py-3 text-slate-600">太平洋证券</td>
            <td class="px-4 py-3 text-slate-700 text-sm">AI 算力 + 存储双轮驱动，PCB 毛利率 +3.9pct</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- A 级标的概览 -->
    <h2 id="sec3" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>A 级标的重点叙述（主要仓位推荐）
    </h2>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <tr>
            <th class="px-4 py-3 text-left font-bold">股票名称</th>
            <th class="px-4 py-3 text-left font-bold">代码</th>
            <th class="px-4 py-3 text-center font-bold">得分</th>
            <th class="px-4 py-3 text-left font-bold">机构</th>
            <th class="px-4 py-3 text-left font-bold">核心看点</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">华勤技术</td>
            <td class="px-4 py-3 text-slate-600">603296.SH</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">8.2</span></td>
            <td class="px-4 py-3 text-slate-600">开源证券</td>
            <td class="px-4 py-3 text-slate-700 text-sm">2025 年营收 +56%，归母 +38.6%，AI 服务器 ODM 份额提升</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">万辰集团</td>
            <td class="px-4 py-3 text-slate-600">300972.SZ</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">8.2</span></td>
            <td class="px-4 py-3 text-slate-600">华龙证券</td>
            <td class="px-4 py-3 text-slate-700 text-sm">量贩零食门店 18314 家，盈利预测上调超 40%</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">山金国际</td>
            <td class="px-4 py-3 text-slate-600">000975.SZ</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">7.8</span></td>
            <td class="px-4 py-3 text-slate-600">联储证券</td>
            <td class="px-4 py-3 text-slate-700 text-sm">金价强势 + 成本优势，2026 年净利增速 111%</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">卫星化学</td>
            <td class="px-4 py-3 text-slate-600">002648.SZ</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">7.5</span></td>
            <td class="px-4 py-3 text-slate-600">国信证券</td>
            <td class="px-4 py-3 text-slate-700 text-sm">油价破百凸显气头成本优势，欧洲产能收缩支撑价差</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">金山办公</td>
            <td class="px-4 py-3 text-slate-600">688111.SH</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">7.5</span></td>
            <td class="px-4 py-3 text-slate-600">国信证券</td>
            <td class="px-4 py-3 text-slate-700 text-sm">WPS AI 月活 +307%，AI Agent 重塑办公生态</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">中国人寿</td>
            <td class="px-4 py-3 text-slate-600">601628.SH</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">7.5</span></td>
            <td class="px-4 py-3 text-slate-600">开源证券</td>
            <td class="px-4 py-3 text-slate-700 text-sm">NBV 高增 36%，分红险转型成效明显</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">麦加芯彩</td>
            <td class="px-4 py-3 text-slate-600">603062.SH</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">7.3</span></td>
            <td class="px-4 py-3 text-slate-600">国金证券</td>
            <td class="px-4 py-3 text-slate-700 text-sm">风电涂料龙头迈向全球，目标价 67.19 元</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">华阳股份</td>
            <td class="px-4 py-3 text-slate-600">600348.SH</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">7.2</span></td>
            <td class="px-4 py-3 text-slate-600">大同证券</td>
            <td class="px-4 py-3 text-slate-700 text-sm">无烟煤龙头，钠电 + 碳纤维开启第二曲线</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">景津装备</td>
            <td class="px-4 py-3 text-slate-600">603279.SH</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">7.2</span></td>
            <td class="px-4 py-3 text-slate-600">东吴证券</td>
            <td class="px-4 py-3 text-slate-700 text-sm">压滤机龙头，成套化 + 耗材化 + 出海=8 倍空间</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">陕西旅游</td>
            <td class="px-4 py-3 text-slate-600">603402.SH</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">7.0</span></td>
            <td class="px-4 py-3 text-slate-600">中银证券</td>
            <td class="px-4 py-3 text-slate-700 text-sm">《长恨歌》IP 毛利率超 80%，募投项目增厚业绩</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">海螺水泥</td>
            <td class="px-4 py-3 text-slate-600">600585.SH</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">7.0</span></td>
            <td class="px-4 py-3 text-slate-600">中邮证券</td>
            <td class="px-4 py-3 text-slate-700 text-sm">行业限制超产利好龙头，分红比例 55.3%</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">民爆光电</td>
            <td class="px-4 py-3 text-slate-600">301362.SZ</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">7.0</span></td>
            <td class="px-4 py-3 text-slate-600">国信证券</td>
            <td class="px-4 py-3 text-slate-700 text-sm">拟收购厦芝精密，切入高端 PCB 钻针赛道</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- S 级标的深度剖析 -->
    <h2 id="sec4" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-purple-600 rounded-full mr-3"></span>S 级标的深度剖析
    </h2>

    <!-- 紫金矿业 -->
    <div id="sec4" class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🏆</span>S 级·紫金矿业 (601899.SH) - 东吴证券
      </h4>
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-purple-600 text-white">9.2 分</span>
        <span class="text-purple-700 text-sm">2025 年 ROE 高达 27.9%，经营性现金流 754 亿元</span>
      </div>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">📊 评级得分明细</h5>
      <ul class="space-y-1 text-purple-900 text-sm mb-3">
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>研报标题定调：2.0 分（"金铜为基、锂打开成长新边界"强烈超预期表述）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>报告覆盖类型：2.0 分（年报点评深度报告）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>盈利预测上调：2.0 分（2026-2028 年归母净利上调至 779/954/1134 亿元，上调幅度超 30%）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>财报基本面支撑：1.7 分（ROE 27.9%，矿产资源全面增长）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>市场资金共振：1.5 分（金价铜价高位运行，2025 年矿产金产量 90 吨 +22.8%）</li>
      </ul>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">💡 核心投资逻辑</h5>
      <p class="text-purple-900 leading-relaxed">
        从第一性原理出发，紫金矿业的商业本质是<strong>"中国版必和必拓"</strong>，掌握全球稀缺矿产资源的核心资产平台。在美元信用减弱、全球大宗商品供给约束的大背景下，公司金铜锂三大战略品种量价齐升逻辑持续兑现。2025 年矿产金产量 90 吨（+22.8%）、矿产铜 109 万吨（+1.6%）、碳酸锂 2.55 万吨，三大品种毛利贡献占比分别为 41%/34%/2%。公司 2025 年归母净利 517.8 亿元（+61.5%），年度业绩规模再上新台阶，归母净利率 14.8%（+4.3pct）。
      </p>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">🚀 预期差与催化剂</h5>
      <p class="text-purple-900 leading-relaxed">
        市场当前对紫金的认知仍停留在传统矿企估值框架，但研报指出公司 2028 年预计金/铜/碳酸锂产量分别为 130-140 吨/150-160 万吨/27-32 万吨，成长确定性十足。预期差在于：1）市场低估了加纳阿基姆金矿等并购项目的增量贡献；2）忽视了锂业务从 0 到 1 突破带来的成长新边界；3）低估了公司精细化管理带来的成本优势（2025 年矿山企业毛利率 62%，+3.6pct）。核心催化剂：1）金属价格持续高位；2）海外项目产能释放；3）锂业务商业化加速。
      </p>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">⚠️ 潜在风险</h5>
      <p class="text-purple-900 text-sm">金属价格不及预期风险；地缘政治风险；海外项目运营风险；环保政策趋严风险。</p>
    </div>

    <!-- 海星股份 -->
    <div id="sec5" class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🏆</span>S 级·海星股份 (603115.SH) - 中银证券
      </h4>
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-purple-600 text-white">9.0 分</span>
        <span class="text-purple-700 text-sm">AI 服务器 800VDC 架构升级驱动电极箔需求爆发</span>
      </div>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">📊 评级得分明细</h5>
      <ul class="space-y-1 text-purple-900 text-sm mb-3">
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>研报标题定调：2.0 分（"算力底座的材料奇点"、"价值重估与涨价周期开启"）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>报告覆盖类型：2.0 分（首次覆盖深度报告）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>盈利预测上调：2.0 分（2026-2028 年净利润增速 59.6%/44.8%）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>财报基本面支撑：1.5 分（ROE 约 14.4%，高分红传统）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>市场资金共振：1.5 分（电极箔行业涨价预期升温，800VDC 升级）</li>
      </ul>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">💡 核心投资逻辑</h5>
      <p class="text-purple-900 leading-relaxed">
        从第一性原理出发，海星股份的商业本质是 <strong>AI 算力基础设施的"心脏材料"</strong> 供应商。AI 服务器功耗呈指数级增长（从 Ampere 平台到 Kyber 平台功耗增长 100 倍），传统 415VAC 供电架构触及物理极限，英伟达主导的 800VDC 架构成为必然选择。这一架构变革直接驱动高容量、耐高压铝电解电容器需求爆发，而电极箔作为铝电解电容器的核心原材料（占成本 30-60%），将充分受益于 AI 超级周期。
      </p>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">🚀 预期差与催化剂</h5>
      <p class="text-purple-900 leading-relaxed">
        市场当前共识是电极箔为传统周期品，但研报指出 AI 服务器用电极箔市场规模将从 2025 年的 4.5 亿元爆发至 2028 年的 86.6 亿元（CAGR 超 100%），2029 年有望突破 100 亿元。预期差在于：1）市场低估了 800VDC 架构升级的紧迫性和渗透速度；2）忽视了高端产能"告急"叠加铝价上涨带来的涨价弹性。
      </p>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">⚠️ 潜在风险</h5>
      <p class="text-purple-900 text-sm">原材料铝价格大幅波动风险；行业竞争加剧导致份额被侵蚀风险；新技术（MLCC、薄膜电容）替代风险。</p>
    </div>

    <!-- 若羽臣 -->
    <div id="sec6" class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🏆</span>S 级·若羽臣 (003010.SZ) - 信达证券/国金证券
      </h4>
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-purple-600 text-white">8.8 分</span>
        <span class="text-purple-700 text-sm">自有品牌转型成功，ROE 高达 51.5%/63.6%/72.8%</span>
      </div>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">📊 评级得分明细</h5>
      <ul class="space-y-1 text-purple-900 text-sm mb-3">
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>研报标题定调：1.5 分（"自有品牌高增，业绩与结构双优"）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>报告覆盖类型：1.5 分（年报点评，深度分析自有品牌转型）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>盈利预测上调：2.0 分（2026-2028 年归母净利 3.95/5.53/7.3 亿元，增速 103%/40%/32%）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>财报基本面支撑：2.0 分（ROE 高达 51.5%/63.6%/72.8%，自有品牌毛利率 68-87%）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>市场资金共振：1.8 分（双 11 全渠道 GMV 同比增长 80%，斐萃双 11GMV 同比增长 35 倍）</li>
      </ul>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">💡 核心投资逻辑</h5>
      <p class="text-purple-900 leading-relaxed">
        从第一性原理出发，若羽臣的商业本质是从 <strong>"代运营商"向"品牌商"</strong> 的战略转型成功案例。传统电商代运营业务毛利率低、可替代性强，而自有品牌业务具备定价权、品牌溢价和用户心智占领能力。2025 年公司自有品牌营收 18.13 亿元（+261.94%），占比提升至 52.83%，标志着转型拐点已至。
      </p>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">🚀 预期差与催化剂</h5>
      <p class="text-purple-900 leading-relaxed">
        市场对若羽臣的认知仍停留在代运营公司，估值体系尚未切换至品牌消费公司。预期差在于：1）自有品牌占比已超 50%，但市场仍按代运营估值；2）斐萃作为抗衰新品牌，半年时间做到近 7 亿营收，显示极强爆款打造能力。
      </p>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">⚠️ 潜在风险</h5>
      <p class="text-purple-900 text-sm">新品牌拓展不及预期风险；行业竞争加剧导致营销费用率持续高企风险；线上流量成本上升风险。</p>
    </div>

    <!-- 协创数据 -->
    <div id="sec7" class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🏆</span>S 级·协创数据 (300857.SZ) - 太平洋证券
      </h4>
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-purple-600 text-white">8.7 分</span>
        <span class="text-purple-700 text-sm">智能算力收入 +1727%，经营性现金流 +1011%</span>
      </div>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">📊 评级得分明细</h5>
      <ul class="space-y-1 text-purple-900 text-sm mb-3">
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>研报标题定调：1.8 分（"算力业务成为核心增长引擎，投入节奏加速"）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>报告覆盖类型：1.5 分（年报点评，深度分析算力业务转型）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>盈利预测上调：2.0 分（2026-2028 年归母净利 20.84/29.75/39.49 亿元，增速 79%/43%/33%）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>财报基本面支撑：1.7 分（2025 年经营性现金流 11 亿元，同比 +1011%）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>市场资金共振：1.7 分（阿里云、百度云等云厂商宣布涨价，算力租赁持续高景气）</li>
      </ul>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">💡 核心投资逻辑</h5>
      <p class="text-purple-900 leading-relaxed">
        从第一性原理出发，协创数据的商业本质是从 <strong>"物联网设备商"向"AI 算力运营商"</strong> 的战略跃迁。公司作为英伟达云合作伙伴（NCP），具备在 AI 算力租赁和云服务领域与英伟达合作的资质。2025 年智能算力收入 27.61 亿元（+1727%），毛利率 25.53%（+4.25pct），已成为核心增长引擎。
      </p>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">🚀 预期差与催化剂</h5>
      <p class="text-purple-900 leading-relaxed">
        市场当前对协创数据的认知仍停留在传统 IoT 设备商，但研报指出公司 2025 年发布的算力服务器采购公告累计金额不超过 212 亿元，2026 年 2 月再签 110 亿元采购合同，显示全年投入节奏加速。预期差在于：1）市场低估了算力业务对现金流的改善（经营性现金流 +1011%）；2）忽视了公司在全国多地部署算力中心的先发优势。
      </p>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">⚠️ 潜在风险</h5>
      <p class="text-purple-900 text-sm">算力需求不及预期风险；市场竞争加剧风险；供应链波动风险。</p>
    </div>

    <!-- 深南电路 -->
    <div id="sec8" class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🏆</span>S 级·深南电路 (002916.SZ) - 太平洋证券
      </h4>
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-purple-600 text-white">8.6 分</span>
        <span class="text-purple-700 text-sm">2025 年 ROE 19.1%，PCB 业务毛利率 35.53% +3.91pct</span>
      </div>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">📊 评级得分明细</h5>
      <ul class="space-y-1 text-purple-900 text-sm mb-3">
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>研报标题定调：1.8 分（"AI 算力 + 存储产品共驱 25 年业绩超预期增长"）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>报告覆盖类型：1.5 分（年报点评）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>盈利预测上调：2.0 分（2026-2028 年归母净利 55.46/75.45/97.25 亿元，增速 69%/36%/29%）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>财报基本面支撑：1.8 分（ROE 19.1%，PCB 毛利率 35.53% +3.91pct，封装基板毛利率 22.58% +4.43pct）</li>
        <li class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>市场资金共振：1.5 分（AI 服务器及光模块需求显著增长，存储基板占比提升）</li>
      </ul>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">💡 核心投资逻辑</h5>
      <p class="text-purple-900 leading-relaxed">
        从第一性原理出发，深南电路的商业本质是 <strong>"AI 算力硬件基础设施核心供应商"</strong>。公司 PCB 业务 2025 年营收 143.59 亿元（+36.84%），受益于 AI 算力及汽车电子双重驱动；封装基板业务营收 41.48 亿元（+30.80%），存储类产品导入及量产带动订单显著增长。
      </p>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">🚀 预期差与催化剂</h5>
      <p class="text-purple-900 leading-relaxed">
        市场预期 PCB 行业仍处周期底部，但研报指出公司 AI 服务器及相关配套产品订单同比显著增加，22 层及以上 FC-BGA 封装基板产品研发及打样工作按期推进。预期差在于：1）市场低估了 AI 服务器对高端 PCB 的拉动；2）忽视了广州产能爬坡顺利带来的毛利率上行弹性。
      </p>

      <h5 class="text-purple-800 font-bold mb-2 mt-3">⚠️ 潜在风险</h5>
      <p class="text-purple-900 text-sm">下游需求不及预期风险；行业竞争加剧风险。</p>
    </div>

    <!-- A 级标的重点叙述 -->
    <h2 id="sec9" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>A 级标的重点叙述
    </h2>

    <!-- 华勤技术 -->
    <div id="sec9" class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🎯</span>A 级·华勤技术 (603296.SH) - 开源证券
      </h4>
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-600 text-white">8.2 分</span>
        <span class="text-blue-700 text-sm">2025 年营收 1714.37 亿元（+56.02%），归母 40.54 亿元（+38.55%）</span>
      </div>
      <p class="text-blue-900 leading-relaxed">
        <strong>核心看点：</strong>2025 年营收 1714.37 亿元（+56.02%），归母 40.54 亿元（+38.55%），AI 服务器及数据存储业务高速增长。预计 2026-2028 年归母净利润 52.3/65.8/82.1 亿元。对应 2026 年 PE 约 15X，AI 服务器 ODM 份额提升。
      </p>
    </div>

    <!-- 万辰集团 -->
    <div id="sec10" class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🎯</span>A 级·万辰集团 (300972.SZ) - 华龙证券
      </h4>
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-600 text-white">8.2 分</span>
        <span class="text-blue-700 text-sm">量贩零食门店 18314 家，2025 年归母 +358%</span>
      </div>
      <p class="text-blue-900 leading-relaxed">
        <strong>核心看点：</strong>量贩零食业务高速扩张，2025 年营收 514.59 亿元（+59.17%），归母净利润 13.45 亿元（+358.09%）。截至 2025 年末门店共计 18,314 家。上调 2026-2028 年归母净利润预测至 20.95/25.97/29.24 亿元，上调幅度超 40%。对应 2026 年 PE 17.3X，量贩零食净利率稳步提升至 4.98%。
      </p>
    </div>

    <!-- 山金国际 -->
    <div id="sec11" class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🎯</span>A 级·山金国际 (000975.SZ) - 联储证券
      </h4>
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-600 text-white">7.8 分</span>
        <span class="text-blue-700 text-sm">金价强势上行，2026 年净利增速 111%</span>
      </div>
      <p class="text-blue-900 leading-relaxed">
        <strong>核心看点：</strong>金价强势上行成为核心驱动力，2025 年矿产金销售均价 774.08 元/克（+40.84%）。成本护城河稳固，克金成本 123.09 元/克（同比降低 3.16 元）。上调 2026-2028 年归母净利润至 62.69/77.88/100.69 亿元（2026 年同比增速 111%）。对应 2026 年 PE 12.15X，长期金价看涨逻辑未改。
      </p>
    </div>

    <!-- 卫星化学 -->
    <div id="sec12" class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🎯</span>A 级·卫星化学 (002648.SZ) - 国信证券
      </h4>
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-600 text-white">7.5 分</span>
        <span class="text-blue-700 text-sm">油价破百凸显气头成本优势</span>
      </div>
      <p class="text-blue-900 leading-relaxed">
        <strong>核心看点：</strong>油价上行凸显气头成本优势，2026 年 3 月美伊冲突导致布伦特原油突破 100 美元/桶，公司乙烷路线成本优势显著。上调 2026-2028 年归母净利润至 75.1/79.0/85.8 亿元（2026 年同比增速 41%）。对应 2026 年 PE 11.7X，欧洲乙烯产能收缩支撑价差修复。
      </p>
    </div>

    <!-- 金山办公 -->
    <div id="sec13" class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🎯</span>A 级·金山办公 (688111.SH) - 国信证券
      </h4>
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-600 text-white">7.5 分</span>
        <span class="text-blue-700 text-sm">WPS AI 月活超 8013 万（+307%）</span>
      </div>
      <p class="text-blue-900 leading-relaxed">
        <strong>核心看点：</strong>WPS AI 国内月活用户超 8013 万（+307%），日均 Token 调用量超 2000 亿（+12 倍）。2025 年营收 59.29 亿元（+15.78%），归母 18.36 亿元（+11.63%）。预计 2026-2028 年归母净利 22.12/26.21/31.15 亿元。对应 2026 年 PE 50X，AI Agent 重塑办公生态。
      </p>
    </div>

    <!-- 中国人寿 -->
    <div id="sec14" class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🎯</span>A 级·中国人寿 (601628.SH) - 开源证券/国信证券
      </h4>
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-600 text-white">7.5 分</span>
        <span class="text-blue-700 text-sm">NBV 高增 36%，分红险占比提升至近 60%</span>
      </div>
      <p class="text-blue-900 leading-relaxed">
        <strong>核心看点：</strong>产品多元化转型效果突出，2025 年 NBV 达成 458 亿元（+36%），价值率显著提升。分红险占比提升至近 60%，总投资收益率 6.09%（+0.59pct）。上调 2026-2028 年归母净利润至 1680/1776/1870 亿元。对应 2026 年 P/EV 0.7X，静态股息率 2.2%。
      </p>
    </div>

    <!-- 麦加芯彩 -->
    <div id="sec15" class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🎯</span>A 级·麦加芯彩 (603062.SH) - 国金证券
      </h4>
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-600 text-white">7.3 分</span>
        <span class="text-blue-700 text-sm">风电涂料龙头迈向全球，目标价 67.19 元</span>
      </div>
      <p class="text-blue-900 leading-relaxed">
        <strong>核心看点：</strong>风电涂料从国内龙头迈向全球，集装箱涂料全球前二地位稳固。新兴业务（船舶、光伏、变压器涂料）齐头并进，2025Q2 开启向"工业涂料平台型企业"战略转型。预计 2026-2027 年归母净利润 2.90/3.88 亿元（+31.4%/33.5%）。给予 2026 年 25 倍 PE，对应目标价 67.19 元。
      </p>
    </div>

    <!-- 华阳股份 -->
    <div id="sec16" class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🎯</span>A 级·华阳股份 (600348.SH) - 大同证券
      </h4>
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-600 text-white">7.2 分</span>
        <span class="text-blue-700 text-sm">无烟煤龙头，钠电 + 碳纤维开启第二曲线</span>
      </div>
      <p class="text-blue-900 leading-relaxed">
        <strong>核心看点：</strong>无烟煤龙头，钠电 + 碳纤维开启第二增长曲线。2025-2027 年预计归母净利 16.47/19.60/23.56 亿元，分红率升至 50% 左右。钠电形成"材料—电芯—应用"全产业链，煤矿应急电源已落地。对应 2026 年 PE 17X，新能源新材料营收占比目标 40%。
      </p>
    </div>

    <!-- 景津装备 -->
    <div id="sec17" class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🎯</span>A 级·景津装备 (603279.SH) - 东吴证券
      </h4>
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-600 text-white">7.2 分</span>
        <span class="text-blue-700 text-sm">压滤机龙头市占率 40%+，出海=长期 8 倍空间</span>
      </div>
      <p class="text-blue-900 leading-relaxed">
        <strong>核心看点：</strong>压滤机龙头市占率 40%+，成套化 + 耗材化 + 出海=长期 8 倍空间。2024 年配套设备收入 8.06 亿元（+91.7%），海外收入 3.36 亿元（毛利率 56%）。2025 年股息率约 5.4%。对应 2026 年 PE 14X，锂电β修复 + 矿业资本开支提升。
      </p>
    </div>

    <!-- 陕西旅游 -->
    <div id="sec18" class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🎯</span>A 级·陕西旅游 (603402.SH) - 中银证券
      </h4>
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-600 text-white">7.0 分</span>
        <span class="text-blue-700 text-sm">《长恨歌》标杆 IP 毛利率超 80%</span>
      </div>
      <p class="text-blue-900 leading-relaxed">
        <strong>核心看点：</strong>背靠陕西国资委，依托华清宫和华山核心旅游资源，《长恨歌》标杆 IP 毛利率超 80%。演艺索道双核驱动，2025-2027 年预计归母净利 4.27/5.28/5.86 亿元。对应 2026 年 PE 19X，募投项目有序落地有望增厚业绩。
      </p>
    </div>

    <!-- 海螺水泥 -->
    <div id="sec19" class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🎯</span>A 级·海螺水泥 (600585.SH) - 中邮证券
      </h4>
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-600 text-white">7.0 分</span>
        <span class="text-blue-700 text-sm">行业限制超产利好龙头，分红比例 55.3%</span>
      </div>
      <p class="text-blue-900 leading-relaxed">
        <strong>核心看点：</strong>水泥行业限制超产有望加强协同，2025 年归母净利 81.13 亿元（+5.42%），分红比例达 55.3%。成本管控领先，自产品综合成本同比下降 11.12%。预计 2026-2027 年归母净利 85.9/99.6 亿元。对应 2026 年 PE 12.4X，行业反内卷政策利好龙头。
      </p>
    </div>

    <!-- 民爆光电 -->
    <div id="sec20" class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🎯</span>A 级·民爆光电 (301362.SZ) - 国信证券
      </h4>
      <div class="flex items-center gap-3 mb-3">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-600 text-white">7.0 分</span>
        <span class="text-blue-700 text-sm">拟收购厦芝精密，切入高端 PCB 钻针赛道</span>
      </div>
      <p class="text-blue-900 leading-relaxed">
        <strong>核心看点：</strong>拟收购厦芝精密打造 PCB 钻针第二曲线，厦芝精密月产能 1500 万支，产能位居行业前列。AI 服务器板用钻针及高端载板极小径钻针具备先发优势。2025-2027 年预计归母净利 2.0/2.2/2.4 亿元。对应 2026 年 PE 42.7X，PCB 钻针行业 2024-2029 年 CAGR 15%。
      </p>
    </div>

    <!-- 完整评级汇总表 -->
    <h2 id="sec21" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-slate-600 rounded-full mr-3"></span>完整评级汇总表
    </h2>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">股票</th>
            <th class="px-4 py-3 text-left">代码</th>
            <th class="px-4 py-3 text-left">机构</th>
            <th class="px-4 py-3 text-center">评级</th>
            <th class="px-4 py-3 text-center">总分</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <!-- S 级 -->
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">紫金矿业</td>
            <td class="px-4 py-3 text-slate-600">601899.SH</td>
            <td class="px-4 py-3 text-slate-600">东吴证券</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-600 text-white">S</span></td>
            <td class="px-4 py-3 text-center"><span class="font-bold text-purple-800">9.2</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">金铜锂三大品种量价齐升，2025 年归母 +61.5%</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">海星股份</td>
            <td class="px-4 py-3 text-slate-600">603115.SH</td>
            <td class="px-4 py-3 text-slate-600">中银证券</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-600 text-white">S</span></td>
            <td class="px-4 py-3 text-center"><span class="font-bold text-purple-800">9.0</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">AI 服务器 800VDC 架构驱动电极箔价值重估</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">若羽臣</td>
            <td class="px-4 py-3 text-slate-600">003010.SZ</td>
            <td class="px-4 py-3 text-slate-600">信达证券</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-600 text-white">S</span></td>
            <td class="px-4 py-3 text-center"><span class="font-bold text-purple-800">8.8</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">自有品牌转型成功，绽家 + 斐萃双轮驱动</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">协创数据</td>
            <td class="px-4 py-3 text-slate-600">300857.SZ</td>
            <td class="px-4 py-3 text-slate-600">太平洋证券</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-600 text-white">S</span></td>
            <td class="px-4 py-3 text-center"><span class="font-bold text-purple-800">8.7</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">智能算力收入 +1727%，现金流 +1011%</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">深南电路</td>
            <td class="px-4 py-3 text-slate-600">002916.SZ</td>
            <td class="px-4 py-3 text-slate-600">太平洋证券</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-600 text-white">S</span></td>
            <td class="px-4 py-3 text-center"><span class="font-bold text-purple-800">8.6</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">AI 算力 + 存储双轮驱动，PCB 毛利率 +3.9pct</td>
          </tr>
          <!-- A 级 -->
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">华勤技术</td>
            <td class="px-4 py-3 text-slate-600">603296.SH</td>
            <td class="px-4 py-3 text-slate-600">开源证券</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">A</span></td>
            <td class="px-4 py-3 text-center"><span class="font-bold text-blue-800">8.2</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">2025 年营收 +56%，归母 +38.6%</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">万辰集团</td>
            <td class="px-4 py-3 text-slate-600">300972.SZ</td>
            <td class="px-4 py-3 text-slate-600">华龙证券</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">A</span></td>
            <td class="px-4 py-3 text-center"><span class="font-bold text-blue-800">8.2</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">量贩零食门店 18314 家，盈利预测上调超 40%</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">山金国际</td>
            <td class="px-4 py-3 text-slate-600">000975.SZ</td>
            <td class="px-4 py-3 text-slate-600">联储证券</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">A</span></td>
            <td class="px-4 py-3 text-center"><span class="font-bold text-blue-800">7.8</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">金价强势 + 成本优势，2026 年净利增速 111%</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">卫星化学</td>
            <td class="px-4 py-3 text-slate-600">002648.SZ</td>
            <td class="px-4 py-3 text-slate-600">国信证券</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">A</span></td>
            <td class="px-4 py-3 text-center"><span class="font-bold text-blue-800">7.5</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">油价破百凸显气头成本优势</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">金山办公</td>
            <td class="px-4 py-3 text-slate-600">688111.SH</td>
            <td class="px-4 py-3 text-slate-600">国信证券</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">A</span></td>
            <td class="px-4 py-3 text-center"><span class="font-bold text-blue-800">7.5</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">WPS AI 月活 +307%，AI Agent 重塑办公</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">中国人寿</td>
            <td class="px-4 py-3 text-slate-600">601628.SH</td>
            <td class="px-4 py-3 text-slate-600">开源证券</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">A</span></td>
            <td class="px-4 py-3 text-center"><span class="font-bold text-blue-800">7.5</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">NBV 高增 36%，分红险转型成效明显</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">麦加芯彩</td>
            <td class="px-4 py-3 text-slate-600">603062.SH</td>
            <td class="px-4 py-3 text-slate-600">国金证券</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">A</span></td>
            <td class="px-4 py-3 text-center"><span class="font-bold text-blue-800">7.3</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">风电涂料龙头迈向全球，目标价 67.19 元</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">华阳股份</td>
            <td class="px-4 py-3 text-slate-600">600348.SH</td>
            <td class="px-4 py-3 text-slate-600">大同证券</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">A</span></td>
            <td class="px-4 py-3 text-center"><span class="font-bold text-blue-800">7.2</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">无烟煤龙头，钠电 + 碳纤维开启第二曲线</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">景津装备</td>
            <td class="px-4 py-3 text-slate-600">603279.SH</td>
            <td class="px-4 py-3 text-slate-600">东吴证券</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">A</span></td>
            <td class="px-4 py-3 text-center"><span class="font-bold text-blue-800">7.2</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">压滤机龙头，出海=长期 8 倍空间</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">陕西旅游</td>
            <td class="px-4 py-3 text-slate-600">603402.SH</td>
            <td class="px-4 py-3 text-slate-600">中银证券</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">A</span></td>
            <td class="px-4 py-3 text-center"><span class="font-bold text-blue-800">7.0</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">《长恨歌》IP 毛利率超 80%</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">海螺水泥</td>
            <td class="px-4 py-3 text-slate-600">600585.SH</td>
            <td class="px-4 py-3 text-slate-600">中邮证券</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">A</span></td>
            <td class="px-4 py-3 text-center"><span class="font-bold text-blue-800">7.0</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">行业限制超产利好龙头，分红比例 55.3%</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">民爆光电</td>
            <td class="px-4 py-3 text-slate-600">301362.SZ</td>
            <td class="px-4 py-3 text-slate-600">国信证券</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white">A</span></td>
            <td class="px-4 py-3 text-center"><span class="font-bold text-blue-800">7.0</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">拟收购厦芝精密，切入高端 PCB 钻针</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 评级方法论 -->
    <h2 id="sec22" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-slate-600 rounded-full mr-3"></span>评级方法论说明
    </h2>

    <div class="bg-slate-50 rounded-xl p-6 my-6 border border-slate-200">
      <h4 class="text-slate-800 font-bold mb-3 flex items-center">
        <span class="text-lg mr-2">📊</span>S/A/B/C 评级体系标准
      </h4>
      <ul class="space-y-2 text-slate-700">
        <li class="flex items-start">
          <span class="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">S</span>
          <span><strong>S 级（&gt;8.5 分）：</strong>同时满足标题超预期 + 首次覆盖/深度报告 + 盈利预测上调&gt;20% + 基本面优秀</span>
        </li>
        <li class="flex items-start">
          <span class="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">A</span>
          <span><strong>A 级（7-8.5 分）：</strong>标题有超预期表述或盈利预测上调&gt;10% + 基本面健康</span>
        </li>
        <li class="flex items-start">
          <span class="w-6 h-6 rounded-full bg-slate-400 text-white text-xs font-bold flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">B</span>
          <span><strong>B 级（5-7 分）：</strong>常规维持评级报告，基本面稳定但无突出亮点</span>
        </li>
        <li class="flex items-start">
          <span class="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">C</span>
          <span><strong>C 级（&lt;5 分）：</strong>评级下调或基本面极差</span>
        </li>
      </ul>

      <h4 class="text-slate-800 font-bold mb-3 mt-6 flex items-center">
        <span class="text-lg mr-2">🔍</span>五大评估维度
      </h4>
      <ol class="space-y-2 text-slate-700 list-decimal list-inside">
        <li><strong>研报标题定调 (0-2 分)：</strong>是否包含"超预期"、"迎来放量"、"拐点"等强烈字眼</li>
        <li><strong>报告覆盖类型 (0-2 分)：</strong>是否为"首次覆盖"、"金股"或"深度报告"</li>
        <li><strong>盈利预测上调 (0-2 分)：</strong>EPS 上调幅度（&gt;20% 得 2 分，10-20% 得 1 分）</li>
        <li><strong>财报基本面支撑 (0-2 分)：</strong>ROA/ROE 与 CFO 现金流质量</li>
        <li><strong>市场资金共振 (0-2 分)：</strong>股价距离 250 日高点位置及行业催化</li>
      </ol>
    </div>

    <div class="text-center text-slate-400 text-sm mt-8 pt-6 border-t border-slate-200">
      <p>报告生成时间：2026-03-27 | 数据来源：东方财富行业研报库</p>
      <p class="mt-1">免责声明：本报告仅供参考，不构成投资建议</p>
    </div>

  </div>`;
}
