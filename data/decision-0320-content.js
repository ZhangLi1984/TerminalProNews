// ==========================================
// 投资决策内参内容渲染 - 2026-03-20
// 来源：49 份宏观研报 + 行业数据库交叉验证
// ==========================================

function renderDecisionContent_0320() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 报告头部 -->
    <div class="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 p-6 my-6 rounded-r-xl">
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-2xl font-black text-red-900 flex items-center">
          <span class="text-3xl mr-3">📊</span>投资决策内参
        </h2>
        <span class="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">2026 年 3 月 20 日</span>
      </div>
      <p class="text-red-800 text-sm">数据来源：49 份宏观研报 + 248 份行业研报交叉验证 | 风险评级：中高风险</p>
    </div>

    <!-- 核心摘要 -->
    <h2 id="sec1" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>执行摘要
    </h2>

    <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 my-6 rounded-r-xl shadow-sm">
      <h4 class="text-red-800 font-black mb-4 flex items-center text-lg">
        <span class="text-xl mr-2">📌</span>核心判断：经济"开门红"确立，结构性机会为主
      </h4>
      <div class="space-y-3 text-red-900">
        <p class="leading-relaxed">
          2026 年 1-2 月中国经济实现"开门红"，主要指标全面超预期：工业增加值同比<strong>6.3%</strong>、固定资产投资同比<strong>1.8%</strong>（去年 8 月以来首次回正）、社零同比<strong>2.8%</strong>、出口同比<strong>21.8%</strong>。政策前置发力（基建投资 +11.4%）是主要拉动。
        </p>
        <p class="leading-relaxed">
          海外方面，美联储 3 月 FOMC 维持利率不变，点阵图显示年内仅降息 1 次。中东地缘冲突推升油价突破 105 美元/桶，输入性通胀压力上升。"十五五"规划纲要明确 AI+、新型能源、集成电路为政策主线。
        </p>
        <div class="bg-white/70 rounded-lg p-4 mt-4">
          <p class="font-bold mb-2">🎯 资产配置建议：</p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="text-center"><span class="block text-2xl font-black text-green-600">股票</span><span class="text-xs text-gray-600">标配→超配</span></div>
            <div class="text-center"><span class="block text-2xl font-black text-blue-600">债券</span><span class="text-xs text-gray-600">低配</span></div>
            <div class="text-center"><span class="block text-2xl font-black text-orange-600">商品</span><span class="text-xs text-gray-600">超配</span></div>
            <div class="text-center"><span class="block text-2xl font-black text-slate-600">现金</span><span class="text-xs text-gray-600">标配</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 宏观环境 -->
    <h2 id="sec2" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>宏观环境
    </h2>

    <h3 id="sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">1.1 政策动态</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-gradient-to-r from-slate-700 to-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left font-bold">政策工具</th>
            <th class="px-4 py-3 text-center font-bold">2026 年安排</th>
            <th class="px-4 py-3 text-center font-bold">2025 年</th>
            <th class="px-4 py-3 text-center font-bold">变化</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-red-50">
            <td class="px-4 py-3 font-bold text-slate-900">赤字率</td>
            <td class="px-4 py-3 text-center text-slate-700 font-bold">4.0%</td>
            <td class="px-4 py-3 text-center text-slate-600">3.0%</td>
            <td class="px-4 py-3 text-center"><span class="px-2 py-1 bg-red-600 text-white rounded-full text-xs font-bold">↑1.0pct</span></td>
          </tr>
          <tr>
            <td class="px-4 py-3 font-bold text-slate-900">超长期特别国债</td>
            <td class="px-4 py-3 text-center text-slate-700 font-bold">1.3 万亿</td>
            <td class="px-4 py-3 text-center text-slate-600">1 万亿</td>
            <td class="px-4 py-3 text-center"><span class="px-2 py-1 bg-green-600 text-white rounded-full text-xs font-bold">↑30%</span></td>
          </tr>
          <tr class="bg-blue-50">
            <td class="px-4 py-3 font-bold text-slate-900">地方政府专项债</td>
            <td class="px-4 py-3 text-center text-slate-700 font-bold">4.4 万亿</td>
            <td class="px-4 py-3 text-center text-slate-600">3.9 万亿</td>
            <td class="px-4 py-3 text-center"><span class="px-2 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">↑13%</span></td>
          </tr>
          <tr>
            <td class="px-4 py-3 font-bold text-slate-900">政策性金融工具</td>
            <td class="px-4 py-3 text-center text-slate-700 font-bold">8000 亿</td>
            <td class="px-4 py-3 text-center text-slate-600">-</td>
            <td class="px-4 py-3 text-center"><span class="px-2 py-1 bg-purple-600 text-white rounded-full text-xs font-bold">新增</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-xl">
      <p class="text-blue-900 text-sm"><strong>政策点评：</strong>财政前置发力是 Q1 经济超预期的关键因素，专项债重点投向基建项目，1-2 月基建投资同比增长 11.4% 验证政策效果。</p>
    </div>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">1.2 流动性环境</h3>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
        <h4 class="font-black text-green-900 mb-2">📊 社融数据</h4>
        <p class="text-green-800 text-2xl font-bold">2.38 万亿</p>
        <p class="text-green-700 text-sm">2 月新增，同比多增 1461 亿</p>
      </div>
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
        <h4 class="font-black text-blue-900 mb-2">💰 M1-M2 剪刀差</h4>
        <p class="text-blue-800 text-2xl font-bold">-3.1%</p>
        <p class="text-blue-700 text-sm">连续两月收窄，货币活化</p>
      </div>
      <div class="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-xl">
        <h4 class="font-black text-purple-900 mb-2">🏦 降准降息预期</h4>
        <p class="text-purple-800 text-2xl font-bold">2+1 次</p>
        <p class="text-purple-700 text-sm">全年降准 2 次、降息 1-2 次</p>
      </div>
    </div>

    <h3 id="sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">1.3 外围市场</h3>

    <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-indigo-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🏦</span>美联储 3 月 FOMC 核心决议
      </h4>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="text-center"><p class="text-indigo-700 text-xs font-bold">利率决策</p><p class="text-indigo-900 text-lg font-black">3.5%-3.75%</p></div>
        <div class="text-center"><p class="text-indigo-700 text-xs font-bold">点阵图</p><p class="text-indigo-900 text-lg font-black">年内降息 1 次</p></div>
        <div class="text-center"><p class="text-indigo-700 text-xs font-bold">GDP 预测</p><p class="text-indigo-900 text-lg font-black">2.4%↑</p></div>
        <div class="text-center"><p class="text-indigo-700 text-xs font-bold">PCE 预测</p><p class="text-indigo-900 text-lg font-black">2.7%↑</p></div>
      </div>
      <div class="mt-4 bg-white/60 rounded-lg p-3">
        <p class="text-indigo-900 text-sm"><strong>核心判断：</strong>降息预期从 93% 回撤至 57%，若油价持续高位（100 美元+），年内降息可能清零。</p>
      </div>
    </div>

    <!-- 行业配置 -->
    <h2 id="sec5" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-green-600 rounded-full mr-3"></span>行业配置
    </h2>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">2.1 超配方向（15 大核心赛道）</h3>

    <div class="space-y-4 my-6">
      <!-- 人形机器人 -->
      <div class="bg-gradient-to-r from-purple-50 to-red-50 border-l-4 border-purple-600 p-5 rounded-r-xl">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-purple-800 font-black flex items-center text-lg">
            <span class="text-2xl mr-2">🤖</span>人形机器人/具身智能
          </h4>
          <span class="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-bold">★★★★★</span>
        </div>
        <p class="text-purple-900 text-sm mb-3"><strong>核心逻辑：</strong>2025 年全球出货量 1.7 万台，中国占比 84.7%。宇树科技出货量全球第一（32.4%）。特斯拉 Optimus 3 今夏投产，26Q1 量产产品发布。</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="bg-white/60 rounded-lg p-3">
            <p class="text-purple-700 font-bold text-sm">关键数据</p>
            <p class="text-purple-900 text-xs">PE 分位 7%，处于历史低位；26H1 供应链量产线建成</p>
          </div>
          <div class="bg-white/60 rounded-lg p-3">
            <p class="text-purple-700 font-bold text-sm">重点标的</p>
            <p class="text-purple-900 text-xs">拓普集团、三花智控、绿的谐波</p>
          </div>
        </div>
      </div>

      <!-- AI 算力 -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-5 rounded-r-xl">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-blue-800 font-black flex items-center text-lg">
            <span class="text-2xl mr-2">💻</span>AI 算力/光通信
          </h4>
          <span class="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-bold">★★★★★</span>
        </div>
        <p class="text-blue-900 text-sm mb-3"><strong>核心逻辑：</strong>Token 消耗指数级增长，从 2024 年初 1000 亿飙升至 2025 年 6 月 30 万亿，1 年半增长 300 多倍。英伟达 Vera Rubin 平台每兆瓦算力吞吐量提升 35 倍。</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="bg-white/60 rounded-lg p-3">
            <p class="text-blue-700 font-bold text-sm">关键数据</p>
            <p class="text-blue-900 text-xs">1.6T 光模块未来五年出货超 1 亿只；广东电信光缆集采限价上浮 100%</p>
          </div>
          <div class="bg-white/60 rounded-lg p-3">
            <p class="text-blue-700 font-bold text-sm">重点标的</p>
            <p class="text-blue-900 text-xs">中际旭创、新易盛、沪电股份</p>
          </div>
        </div>
      </div>

      <!-- 储能/锂电 -->
      <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 p-5 rounded-r-xl">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-green-800 font-black flex items-center text-lg">
            <span class="text-2xl mr-2">🔋</span>储能/锂电
          </h4>
          <span class="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-bold">★★★★☆</span>
        </div>
        <p class="text-green-900 text-sm mb-3"><strong>核心逻辑：</strong>新型储能首次写入政府工作报告，1-2 月新增装机 9.51GW/24.18GWh，同比 +182%/+472%。碳酸锂价格 15.91 万元/吨，同比 +113%。</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="bg-white/60 rounded-lg p-3">
            <p class="text-green-700 font-bold text-sm">关键数据</p>
            <p class="text-green-900 text-xs">9 省落地容量电价政策；2025 年锂电出货 2280GWh，+47.6%</p>
          </div>
          <div class="bg-white/60 rounded-lg p-3">
            <p class="text-green-700 font-bold text-sm">重点标的</p>
            <p class="text-green-900 text-xs">阳光电源、宁德时代、天赐材料</p>
          </div>
        </div>
      </div>

      <!-- 脑机接口 -->
      <div class="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-600 p-5 rounded-r-xl">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-pink-800 font-black flex items-center text-lg">
            <span class="text-2xl mr-2">🧠</span>脑机接口
          </h4>
          <span class="px-3 py-1 bg-pink-600 text-white rounded-full text-sm font-bold">★★★★☆</span>
        </div>
        <p class="text-pink-900 text-sm mb-3"><strong>核心逻辑：</strong>全球首个侵入式脑机接口获批，商业化元年开启。博睿康 NEO 采用硬脑膜外微创植入，32 例患者 100% 达标。</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="bg-white/60 rounded-lg p-3">
            <p class="text-pink-700 font-bold text-sm">关键数据</p>
            <p class="text-pink-900 text-xs">我国脊髓损伤患者超 370 万；78 天内完成 32 例植入</p>
          </div>
          <div class="bg-white/60 rounded-lg p-3">
            <p class="text-pink-700 font-bold text-sm">重点标的</p>
            <p class="text-pink-900 text-xs">博睿康（拟 IPO）、创新医疗、三博脑科</p>
          </div>
        </div>
      </div>

      <!-- 半导体 -->
      <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-600 p-5 rounded-r-xl">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-amber-800 font-black flex items-center text-lg">
            <span class="text-2xl mr-2">🔌</span>半导体/模拟芯片
          </h4>
          <span class="px-3 py-1 bg-amber-600 text-white rounded-full text-sm font-bold">★★★★</span>
        </div>
        <p class="text-amber-900 text-sm mb-3"><strong>核心逻辑：</strong>德州仪器 4 月 1 日起涨价 15%-85%，标志行业触底回暖。玻璃基板成为 AI 封装突破方向，连接密度提升 10 倍。</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="bg-white/60 rounded-lg p-3">
            <p class="text-amber-700 font-bold text-sm">关键数据</p>
            <p class="text-amber-900 text-xs">美光周涨幅 15%；玻璃基板比有机材料光滑 5000 倍</p>
          </div>
          <div class="bg-white/60 rounded-lg p-3">
            <p class="text-amber-700 font-bold text-sm">重点标的</p>
            <p class="text-amber-900 text-xs">圣邦股份、思瑞浦、沃格光电</p>
          </div>
        </div>
      </div>
    </div>

    <h3 id="sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">2.2 低配/规避方向</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-800 text-white">
          <tr>
            <th class="px-4 py-3 text-left">行业</th>
            <th class="px-4 py-3 text-left">配置建议</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-red-50">
            <td class="px-4 py-3 font-bold text-slate-900">传统地产开发</td>
            <td class="px-4 py-3"><span class="px-2 py-1 bg-red-600 text-white rounded-full text-xs font-bold">低配</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">销售下滑 13.5%，投资下降 11.1%，L 型筑底中</td>
          </tr>
          <tr class="bg-orange-50">
            <td class="px-4 py-3 font-bold text-slate-900">燃油车产业链</td>
            <td class="px-4 py-3"><span class="px-2 py-1 bg-orange-600 text-white rounded-full text-xs font-bold">低配</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">新能源购置税退坡，传统车需求承压</td>
          </tr>
          <tr>
            <td class="px-4 py-3 font-bold text-slate-900">高耗能周期品</td>
            <td class="px-4 py-3"><span class="px-2 py-1 bg-gray-600 text-white rounded-full text-xs font-bold">中性</span></td>
            <td class="px-4 py-3 text-slate-700 text-sm">反内卷政策推进，产能出清中</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">2.3 主题投资线索</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
        <h4 class="font-bold text-red-900 mb-1">"十五五"开局重大项目</h4>
        <p class="text-red-800 text-sm">基建链（航空、水运、燃气）</p>
      </div>
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
        <h4 class="font-bold text-blue-900 mb-1">AI+ 应用扩散</h4>
        <p class="text-blue-800 text-sm">AI+ 制造、AI+ 服务、AI+ 政务</p>
      </div>
      <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
        <h4 class="font-bold text-amber-900 mb-1">地缘冲突受益</h4>
        <p class="text-amber-800 text-sm">原油、黄金、军工</p>
      </div>
      <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
        <h4 class="font-bold text-green-900 mb-1">设备更新 2.0</h4>
        <p class="text-green-800 text-sm">2000 亿资金支持，高技术制造业</p>
      </div>
    </div>

    <!-- 风险提示 -->
    <h2 id="sec8" class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>风险提示
    </h2>

    <h3 class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.1 主要风险</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-red-600 text-white">
          <tr>
            <th class="px-4 py-3 text-left">风险类型</th>
            <th class="px-4 py-3 text-left">潜在影响</th>
            <th class="px-4 py-3 text-center">概率</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-red-50">
            <td class="px-4 py-3 font-bold text-slate-900">中东冲突升级</td>
            <td class="px-4 py-3 text-slate-700 text-sm">油价突破 120 美元，全球滞胀</td>
            <td class="px-4 py-3 text-center"><span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">中</span></td>
          </tr>
          <tr>
            <td class="px-4 py-3 font-bold text-slate-900">美联储降息清零</td>
            <td class="px-4 py-3 text-slate-700 text-sm">美元走强，新兴市场资本外流</td>
            <td class="px-4 py-3 text-center"><span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">中</span></td>
          </tr>
          <tr class="bg-orange-50">
            <td class="px-4 py-3 font-bold text-slate-900">房地产二次探底</td>
            <td class="px-4 py-3 text-slate-700 text-sm">销售降幅扩大，拖累投资消费</td>
            <td class="px-4 py-3 text-center"><span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">中</span></td>
          </tr>
          <tr>
            <td class="px-4 py-3 font-bold text-slate-900">通缩压力再现</td>
            <td class="px-4 py-3 text-slate-700 text-sm">PPI 转正不及预期，企业盈利承压</td>
            <td class="px-4 py-3 text-center"><span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">低</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3.2 跟踪指标</h3>

    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-yellow-800 font-bold mb-3">若以下数据恶化，需重新评估多头逻辑：</h4>
      <div class="space-y-2">
        <div class="flex items-start"><span class="text-yellow-700 font-bold mr-3">1.</span><p class="text-yellow-900 text-sm"><strong>3 月 PMI 跌破 48%：</strong>表明 1-2 月数据为春节错位扰动</p></div>
        <div class="flex items-start"><span class="text-yellow-700 font-bold mr-3">2.</span><p class="text-yellow-900 text-sm"><strong>3 月社零增速回落至 0% 以下：</strong>消费恢复证伪</p></div>
        <div class="flex items-start"><span class="text-yellow-700 font-bold mr-3">3.</span><p class="text-yellow-900 text-sm"><strong>房地产销售降幅扩大至 20%+：</strong>地产拖累加剧</p></div>
        <div class="flex items-start"><span class="text-yellow-700 font-bold mr-3">4.</span><p class="text-yellow-900 text-sm"><strong>PPI 连续 3 个月负增长：</strong>通缩压力未解除</p></div>
        <div class="flex items-start"><span class="text-yellow-700 font-bold mr-3">5.</span><p class="text-yellow-900 text-sm"><strong>M1 增速回落至 4% 以下：</strong>企业活力下降</p></div>
      </div>
    </div>

    <!-- 免责声明 -->
    <div class="bg-slate-100 border-l-4 border-slate-400 p-4 my-6 rounded-r-xl">
      <p class="text-sm text-slate-600">
        <strong>免责声明：</strong> 本报告基于公开研报整理，不构成投资建议。市场有风险，投资需谨慎。
      </p>
    </div>

  </div>`;
}
