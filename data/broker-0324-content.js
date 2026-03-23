// ==========================================
// 券商晨报模块 - 内容渲染 2026-03-24
// ==========================================

function renderBrokerContent_0324() {
  return `<div class="prose prose-slate max-w-none">
    <!-- 报告头部 -->
    <div class="bg-gradient-to-r from-slate-50 to-slate-100 border-l-4 border-slate-600 p-5 my-6 rounded-r-xl">
      <div class="flex items-center justify-between mb-2">
        <h2 class="text-slate-900 font-black text-lg m-0">券商晨报买方汇总内参</h2>
        <span class="text-xs font-semibold bg-slate-200 text-slate-700 px-2 py-1 rounded">40 家券商</span>
      </div>
      <p class="text-slate-600 text-sm m-0">报告生成时间：2026-03-24 | 数据来源：国信证券、东吴证券、开源证券、中银证券、华源证券、东兴证券、万联证券等</p>
    </div>

    <!-- 核心摘要 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>核心摘要（3 分钟速读）</h2>

    <h3 id="b_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">市场共识</h3>
    <div class="grid md:grid-cols-3 gap-4 my-6">
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4">
        <h4 class="text-blue-800 font-bold text-sm mb-2">📊 市场判断</h4>
        <p class="text-blue-900 text-sm leading-relaxed">市场短期受海外因素扰动呈现震荡格局，沪指失守 4000 点后或仍有震荡。开年经济数据全面向好（出口 +21.8%、工业增加值 +6.3%），但中东局势升级和美联储降息预期弱化压制风险偏好</p>
      </div>
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
        <h4 class="text-green-800 font-bold text-sm mb-2">💼 仓位建议</h4>
        <p class="text-green-900 text-sm leading-relaxed">建议保持<strong>中性偏积极</strong>仓位，逢低布局优质成长股，关注结构性机会</p>
      </div>
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-4">
        <h4 class="text-purple-800 font-bold text-sm mb-2">🎯 核心主线</h4>
        <p class="text-purple-900 text-sm leading-relaxed"><strong>AI 算力、半导体、电子、高股息资产</strong></p>
      </div>
    </div>

    <h3 id="b_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">热门赛道 TOP10</h3>
    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-center">排名</th>
            <th class="px-4 py-3 text-left">行业</th>
            <th class="px-4 py-3 text-center">推荐热度</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-600 text-white text-xs font-bold">1</span></td>
            <td class="px-4 py-3 font-bold text-slate-900">AI/算力</td>
            <td class="px-4 py-3 text-center"><span class="text-yellow-500">⭐⭐⭐⭐⭐</span></td>
            <td class="px-4 py-3 text-sm text-slate-700">英伟达 GTC 大会强化 AI 景气预期，CPO/液冷需求爆发，云厂商涨价印证需求</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-white text-xs font-bold">2</span></td>
            <td class="px-4 py-3 font-bold text-slate-900">半导体</td>
            <td class="px-4 py-3 text-center"><span class="text-yellow-500">⭐⭐⭐⭐⭐</span></td>
            <td class="px-4 py-3 text-sm text-slate-700">存储芯片价格回升，国产替代加速，周期底部布局窗口</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-white text-xs font-bold">3</span></td>
            <td class="px-4 py-3 font-bold text-slate-900">电子</td>
            <td class="px-4 py-3 text-center"><span class="text-yellow-500">⭐⭐⭐⭐⭐</span></td>
            <td class="px-4 py-3 text-sm text-slate-700">AI 驱动 PCB 需求高增长，消费电子触底复苏</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-white text-xs font-bold">4</span></td>
            <td class="px-4 py-3 font-bold text-slate-900">通信</td>
            <td class="px-4 py-3 text-center"><span class="text-yellow-500">⭐⭐⭐⭐</span></td>
            <td class="px-4 py-3 text-sm text-slate-700">5G-A/6G 布局加速，液冷技术成为数据中心标配</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-white text-xs font-bold">5</span></td>
            <td class="px-4 py-3 font-bold text-slate-900">银行</td>
            <td class="px-4 py-3 text-center"><span class="text-yellow-500">⭐⭐⭐⭐</span></td>
            <td class="px-4 py-3 text-sm text-slate-700">低估值高分红配置价值凸显，资产质量稳定</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-white text-xs font-bold">6</span></td>
            <td class="px-4 py-3 font-bold text-slate-900">非银金融</td>
            <td class="px-4 py-3 text-center"><span class="text-yellow-500">⭐⭐⭐⭐</span></td>
            <td class="px-4 py-3 text-sm text-slate-700">资本市场改革深化，券商受益；保险资负两端改善</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-white text-xs font-bold">7</span></td>
            <td class="px-4 py-3 font-bold text-slate-900">有色</td>
            <td class="px-4 py-3 text-center"><span class="text-yellow-500">⭐⭐⭐⭐</span></td>
            <td class="px-4 py-3 text-sm text-slate-700">铜价上涨，黄金避险需求，资源品重估</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-white text-xs font-bold">8</span></td>
            <td class="px-4 py-3 font-bold text-slate-900">石油石化</td>
            <td class="px-4 py-3 text-center"><span class="text-yellow-500">⭐⭐⭐</span></td>
            <td class="px-4 py-3 text-sm text-slate-700">中东局势推升油价中枢，油服需求改善</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-white text-xs font-bold">9</span></td>
            <td class="px-4 py-3 font-bold text-slate-900">汽车</td>
            <td class="px-4 py-3 text-center"><span class="text-yellow-500">⭐⭐⭐</span></td>
            <td class="px-4 py-3 text-sm text-slate-700">乘用车销量触底回升，智能化/电动化趋势延续</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-white text-xs font-bold">10</span></td>
            <td class="px-4 py-3 font-bold text-slate-900">电力设备</td>
            <td class="px-4 py-3 text-center"><span class="text-yellow-500">⭐⭐⭐</span></td>
            <td class="px-4 py-3 text-sm text-slate-700">电网投资加速，储能需求旺盛，绿电运营商受益</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="b_sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">金股 TOP15</h3>
    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">股票</th>
            <th class="px-4 py-3 text-left">代码</th>
            <th class="px-4 py-3 text-left">所属板块</th>
            <th class="px-4 py-3 text-left">推荐逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">中际旭创</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">300308.SZ</td>
            <td class="px-4 py-3 text-sm text-slate-700">AI/光模块</td>
            <td class="px-4 py-3 text-sm text-slate-700">800G 光模块全球龙头，AI 数据中心需求爆发</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">新易盛</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">300502.SZ</td>
            <td class="px-4 py-3 text-sm text-slate-700">AI/光模块</td>
            <td class="px-4 py-3 text-sm text-slate-700">高速率光模块核心供应商，海外客户突破</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">天孚通信</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">300394.SZ</td>
            <td class="px-4 py-3 text-sm text-slate-700">AI/光器件</td>
            <td class="px-4 py-3 text-sm text-slate-700">光引擎龙头，受益于 CPO 技术演进</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">工业富联</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">601138.SH</td>
            <td class="px-4 py-3 text-sm text-slate-700">AI/服务器</td>
            <td class="px-4 py-3 text-sm text-slate-700">AI 服务器代工龙头，深度绑定英伟达</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">海光信息</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">688041.SH</td>
            <td class="px-4 py-3 text-sm text-slate-700">国产算力</td>
            <td class="px-4 py-3 text-sm text-slate-700">国产 CPU/DCU 龙头，信创核心标的</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">寒武纪</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">688256.SH</td>
            <td class="px-4 py-3 text-sm text-slate-700">AI 芯片</td>
            <td class="px-4 py-3 text-sm text-slate-700">国产 AI 芯片领军，产品线持续丰富</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">宁德时代</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">300750.SZ</td>
            <td class="px-4 py-3 text-sm text-slate-700">锂电池</td>
            <td class="px-4 py-3 text-sm text-slate-700">全球动力电池龙头，储能业务高增长</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">立讯精密</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">002475.SZ</td>
            <td class="px-4 py-3 text-sm text-slate-700">消费电子</td>
            <td class="px-4 py-3 text-sm text-slate-700">果链龙头，AI 硬件/通信多点布局</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">深南电路</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">002916.SZ</td>
            <td class="px-4 py-3 text-sm text-slate-700">PCB</td>
            <td class="px-4 py-3 text-sm text-slate-700">封装基板技术突破，AI/通信驱动增长</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">鹏鼎控股</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">002938.SZ</td>
            <td class="px-4 py-3 text-sm text-slate-700">PCB</td>
            <td class="px-4 py-3 text-sm text-slate-700">全球 PCB 龙头，AI 服务器需求旺盛</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">贵州茅台</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">600519.SH</td>
            <td class="px-4 py-3 text-sm text-slate-700">白酒</td>
            <td class="px-4 py-3 text-sm text-slate-700">渠道改革深化，非标产品代售模式推进</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">招商银行</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">600036.SH</td>
            <td class="px-4 py-3 text-sm text-slate-700">银行</td>
            <td class="px-4 py-3 text-sm text-slate-700">零售银行龙头，资产质量优异</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">东方财富</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">300059.SZ</td>
            <td class="px-4 py-3 text-sm text-slate-700">券商</td>
            <td class="px-4 py-3 text-sm text-slate-700">互联网券商龙头，流量优势明显</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">紫金矿业</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">601899.SH</td>
            <td class="px-4 py-3 text-sm text-slate-700">有色</td>
            <td class="px-4 py-3 text-sm text-slate-700">铜金资源龙头，量价齐升</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold text-slate-900">中国石油</td>
            <td class="px-4 py-3 text-slate-600 font-mono text-sm">601857.SH</td>
            <td class="px-4 py-3 text-sm text-slate-700">石油</td>
            <td class="px-4 py-3 text-sm text-slate-700">油价上涨直接受益，高分红配置价值</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 宏观策略 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>宏观策略汇总</h2>

    <h3 id="b_sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">国内经济：开门红确立</h3>
    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-800 text-white">
          <tr>
            <th class="px-4 py-3 text-left">指标</th>
            <th class="px-4 py-3 text-center">1-2 月数据</th>
            <th class="px-4 py-3 text-center">前值</th>
            <th class="px-4 py-3 text-left">点评</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-green-50">
            <td class="px-4 py-3 font-semibold text-slate-900">出口同比</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2 py-1 rounded bg-green-100 text-green-800 font-bold text-sm">+21.8%</span></td>
            <td class="px-4 py-3 text-center text-slate-600">6.6%</td>
            <td class="px-4 py-3 text-sm text-slate-700">外需超强，抢出口效应明显</td>
          </tr>
          <tr>
            <td class="px-4 py-3 font-semibold text-slate-900">社零同比</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2 py-1 rounded bg-blue-100 text-blue-800 font-bold text-sm">+2.8%</span></td>
            <td class="px-4 py-3 text-center text-slate-600">0.9%</td>
            <td class="px-4 py-3 text-sm text-slate-700">内需温和改善，服务消费强于商品</td>
          </tr>
          <tr>
            <td class="px-4 py-3 font-semibold text-slate-900">固投同比</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2 py-1 rounded bg-blue-100 text-blue-800 font-bold text-sm">+1.8%</span></td>
            <td class="px-4 py-3 text-center text-slate-600">-3.8%</td>
            <td class="px-4 py-3 text-sm text-slate-700">扭转负增长，基建发力护航</td>
          </tr>
          <tr class="bg-green-50">
            <td class="px-4 py-3 font-semibold text-slate-900">工业增加值</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2 py-1 rounded bg-green-100 text-green-800 font-bold text-sm">+6.3%</span></td>
            <td class="px-4 py-3 text-center text-slate-600">5.2%</td>
            <td class="px-4 py-3 text-sm text-slate-700">生产端韧性延续</td>
          </tr>
          <tr class="bg-purple-50">
            <td class="px-4 py-3 font-semibold text-slate-900">高技术制造</td>
            <td class="px-4 py-3 text-center"><span class="inline-flex items-center px-2 py-1 rounded bg-purple-100 text-purple-800 font-bold text-sm">+13.1%</span></td>
            <td class="px-4 py-3 text-center text-slate-600">-</td>
            <td class="px-4 py-3 text-sm text-slate-700">新质生产力挑大梁</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-bold mb-3 flex items-center">
        <span class="mr-2">📈</span>券商观点汇总
      </h4>
      <ul class="space-y-2 text-blue-900 text-sm">
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>东吴证券：</strong>预计 Q1 经济增速约 5%，为实现全年 4.5%-5% 目标打出提前量</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>国信证券：</strong>PPI 同比有望 3 月转正，名义 GDP 修复加速</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>开源证券：</strong>财政支出节奏前置，开年支出力度强于季节性</span></li>
      </ul>
    </div>

    <h3 id="b_sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">海外市场：波动加大</h3>
    <div class="grid md:grid-cols-3 gap-4 my-6">
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <h4 class="text-slate-800 font-bold text-sm mb-2">🇺🇸 美联储 3 月 FOMC</h4>
        <p class="text-slate-700 text-sm">维持利率 3.5%-3.75% 不变，点阵图显示全年或降息 1 次</p>
      </div>
      <div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
        <h4 class="text-orange-800 font-bold text-sm mb-2">🌍 中东局势</h4>
        <p class="text-orange-900 text-sm">美以伊冲突升级，霍尔木兹海峡封锁风险推升油价</p>
      </div>
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
        <h4 class="text-slate-800 font-bold text-sm mb-2">📉 美股</h4>
        <p class="text-slate-700 text-sm">纳指金龙指数震荡，中概股资金流向分化</p>
      </div>
    </div>

    <!-- 行业深度解析 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>热门行业深度解析</h2>

    <h3 id="b_sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">1️⃣ AI/算力（强烈推荐）</h3>
    <div class="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🔥</span>核心逻辑
      </h4>
      <ul class="space-y-2 text-red-900 text-sm">
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span><span>英伟达 GTC 2026 大会发布 Vera Rubin 平台，强化 AI 景气预期</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span><span>云厂商纷纷涨价，印证 AI 算力需求旺盛</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span><span>液冷技术成为数据中心"标配架构"，投资正当时</span></li>
      </ul>
    </div>
    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-red-600 text-white">
          <tr>
            <th class="px-4 py-3 text-left">重点标的</th>
            <th class="px-4 py-3 text-left">推荐逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr><td class="px-4 py-3 font-bold text-red-900">中际旭创</td><td class="px-4 py-3 text-sm text-slate-700">800G 光模块龙头，1.6T 产品放量</td></tr>
          <tr><td class="px-4 py-3 font-bold text-red-900">新易盛</td><td class="px-4 py-3 text-sm text-slate-700">高速率光模块，海外客户突破</td></tr>
          <tr><td class="px-4 py-3 font-bold text-red-900">天孚通信</td><td class="px-4 py-3 text-sm text-slate-700">光引擎/CPO 核心供应商</td></tr>
          <tr><td class="px-4 py-3 font-bold text-red-900">工业富联</td><td class="px-4 py-3 text-sm text-slate-700">AI 服务器代工，深度绑定英伟达</td></tr>
          <tr><td class="px-4 py-3 font-bold text-red-900">浪潮信息</td><td class="px-4 py-3 text-sm text-slate-700">国产服务器龙头</td></tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-slate-500 italic">推荐券商：国信证券、东吴证券、开源证券、中银证券</p>

    <h3 id="b_sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">2️⃣ 半导体（推荐）</h3>
    <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-purple-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">💡</span>核心逻辑
      </h4>
      <ul class="space-y-2 text-purple-900 text-sm">
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span><span>存储芯片价格持续回升，行业周期底部确认</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span><span>国产替代加速，设备/材料/EDA 全面突破</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span><span>AI 芯片需求爆发，算力自主可控紧迫</span></li>
      </ul>
    </div>
    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-purple-600 text-white">
          <tr>
            <th class="px-4 py-3 text-left">重点标的</th>
            <th class="px-4 py-3 text-left">推荐逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr><td class="px-4 py-3 font-bold text-purple-900">北方华创</td><td class="px-4 py-3 text-sm text-slate-700">半导体设备龙头，产品线齐全</td></tr>
          <tr><td class="px-4 py-3 font-bold text-purple-900">中微公司</td><td class="px-4 py-3 text-sm text-slate-700">刻蚀设备领先，先进制程突破</td></tr>
          <tr><td class="px-4 py-3 font-bold text-purple-900">兆易创新</td><td class="px-4 py-3 text-sm text-slate-700">存储/MCU 双轮驱动</td></tr>
          <tr><td class="px-4 py-3 font-bold text-purple-900">海光信息</td><td class="px-4 py-3 text-sm text-slate-700">国产 CPU/DCU 龙头</td></tr>
          <tr><td class="px-4 py-3 font-bold text-purple-900">寒武纪</td><td class="px-4 py-3 text-sm text-slate-700">AI 芯片领军企业</td></tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-slate-500 italic">推荐券商：东吴证券、开源证券、国信证券</p>

    <h3 id="b_sec8" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3️⃣ 电子（推荐）</h3>
    <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-blue-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📱</span>核心逻辑
      </h4>
      <ul class="space-y-2 text-blue-900 text-sm">
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span>AI 服务器驱动 PCB 需求高增长</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span>消费电子触底复苏，新品周期催化</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span>苹果/华为产业链受益于 AI 终端升级</span></li>
      </ul>
    </div>
    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-blue-600 text-white">
          <tr>
            <th class="px-4 py-3 text-left">重点标的</th>
            <th class="px-4 py-3 text-left">推荐逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr><td class="px-4 py-3 font-bold text-blue-900">立讯精密</td><td class="px-4 py-3 text-sm text-slate-700">果链龙头，AI 硬件布局</td></tr>
          <tr><td class="px-4 py-3 font-bold text-blue-900">鹏鼎控股</td><td class="px-4 py-3 text-sm text-slate-700">全球 PCB 龙头</td></tr>
          <tr><td class="px-4 py-3 font-bold text-blue-900">深南电路</td><td class="px-4 py-3 text-sm text-slate-700">封装基板突破，AI 驱动</td></tr>
          <tr><td class="px-4 py-3 font-bold text-blue-900">沪电股份</td><td class="px-4 py-3 text-sm text-slate-700">AI 服务器 PCB 核心供应商</td></tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-slate-500 italic">推荐券商：东吴证券、开源证券、国信证券、中银证券</p>

    <h3 id="b_sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">4️⃣ 通信（推荐）</h3>
    <div class="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-green-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📡</span>核心逻辑
      </h4>
      <ul class="space-y-2 text-green-900 text-sm">
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span><span>5G-A/6G 布局加速，卫星互联网发展</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span><span>液冷技术成为数据中心刚需</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span><span>光通信景气度延续</span></li>
      </ul>
    </div>
    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-green-600 text-white">
          <tr>
            <th class="px-4 py-3 text-left">重点标的</th>
            <th class="px-4 py-3 text-left">推荐逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr><td class="px-4 py-3 font-bold text-green-900">中际旭创</td><td class="px-4 py-3 text-sm text-slate-700">光模块龙头</td></tr>
          <tr><td class="px-4 py-3 font-bold text-green-900">中兴通讯</td><td class="px-4 py-3 text-sm text-slate-700">通信设备龙头，算力布局</td></tr>
          <tr><td class="px-4 py-3 font-bold text-green-900">亨通光电</td><td class="px-4 py-3 text-sm text-slate-700">光纤光缆，海风海缆</td></tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-slate-500 italic">推荐券商：东吴证券、开源证券</p>

    <h3 id="b_sec10" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">5️⃣ 银行（配置）</h3>
    <div class="bg-gradient-to-r from-slate-50 to-gray-50 border-l-4 border-slate-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-slate-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🏦</span>核心逻辑
      </h4>
      <ul class="space-y-2 text-slate-900 text-sm">
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 mr-2 flex-shrink-0"></span><span>低估值高分红，配置价值凸显</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 mr-2 flex-shrink-0"></span><span>资产质量稳定，不良率下行</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 mr-2 flex-shrink-0"></span><span>存款利率下调预期利好净息差</span></li>
      </ul>
    </div>
    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-600 text-white">
          <tr>
            <th class="px-4 py-3 text-left">重点标的</th>
            <th class="px-4 py-3 text-left">推荐逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr><td class="px-4 py-3 font-bold text-slate-900">招商银行</td><td class="px-4 py-3 text-sm text-slate-700">零售银行龙头</td></tr>
          <tr><td class="px-4 py-3 font-bold text-slate-900">宁波银行</td><td class="px-4 py-3 text-sm text-slate-700">城商行标杆</td></tr>
          <tr><td class="px-4 py-3 font-bold text-slate-900">工商银行</td><td class="px-4 py-3 text-sm text-slate-700">国有大行，高股息</td></tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-slate-500 italic">推荐券商：东吴证券、开源证券、中银证券</p>

    <h3 id="b_sec11" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">6️⃣ 非银金融（推荐）</h3>
    <div class="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-amber-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">📊</span>核心逻辑
      </h4>
      <ul class="space-y-2 text-amber-900 text-sm">
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 mr-2 flex-shrink-0"></span><span>资本市场改革深化，券商受益</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 mr-2 flex-shrink-0"></span><span>保险资负两端改善，NBV 增长</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 mr-2 flex-shrink-0"></span><span>东方财富/同花顺受益于市场活跃</span></li>
      </ul>
    </div>
    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-amber-600 text-white">
          <tr>
            <th class="px-4 py-3 text-left">重点标的</th>
            <th class="px-4 py-3 text-left">推荐逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr><td class="px-4 py-3 font-bold text-amber-900">东方财富</td><td class="px-4 py-3 text-sm text-slate-700">互联网券商龙头</td></tr>
          <tr><td class="px-4 py-3 font-bold text-amber-900">同花顺</td><td class="px-4 py-3 text-sm text-slate-700">金融科技龙头</td></tr>
          <tr><td class="px-4 py-3 font-bold text-amber-900">中国平安</td><td class="px-4 py-3 text-sm text-slate-700">保险龙头，估值修复</td></tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-slate-500 italic">推荐券商：东吴证券、国信证券</p>

    <h3 id="b_sec12" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">7️⃣ 有色（推荐）</h3>
    <div class="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-orange-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🏭</span>核心逻辑
      </h4>
      <ul class="space-y-2 text-orange-900 text-sm">
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 mr-2 flex-shrink-0"></span><span>铜价上涨，供给约束 + 需求改善</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 mr-2 flex-shrink-0"></span><span>黄金避险需求，央行购金逻辑</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 mr-2 flex-shrink-0"></span><span>资源品重估，通胀预期</span></li>
      </ul>
    </div>
    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-orange-600 text-white">
          <tr>
            <th class="px-4 py-3 text-left">重点标的</th>
            <th class="px-4 py-3 text-left">推荐逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr><td class="px-4 py-3 font-bold text-orange-900">紫金矿业</td><td class="px-4 py-3 text-sm text-slate-700">铜金资源龙头</td></tr>
          <tr><td class="px-4 py-3 font-bold text-orange-900">洛阳钼业</td><td class="px-4 py-3 text-sm text-slate-700">铜钴资源，弹性大</td></tr>
          <tr><td class="px-4 py-3 font-bold text-orange-900">山东黄金</td><td class="px-4 py-3 text-sm text-slate-700">黄金纯正标的</td></tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-slate-500 italic">推荐券商：东吴证券、开源证券</p>

    <h3 id="b_sec13" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">8️⃣ 石油石化（关注）</h3>
    <div class="bg-gradient-to-r from-slate-50 to-zinc-50 border-l-4 border-slate-600 p-5 my-5 rounded-r-xl">
      <h4 class="text-slate-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🛢️</span>核心逻辑
      </h4>
      <ul class="space-y-2 text-slate-900 text-sm">
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 mr-2 flex-shrink-0"></span><span>中东局势推升油价中枢</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 mr-2 flex-shrink-0"></span><span>油服需求改善，资本开支回升</span></li>
        <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 mr-2 flex-shrink-0"></span><span>高股息配置价值</span></li>
      </ul>
    </div>
    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-700 text-white">
          <tr>
            <th class="px-4 py-3 text-left">重点标的</th>
            <th class="px-4 py-3 text-left">推荐逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr><td class="px-4 py-3 font-bold text-slate-900">中国石油</td><td class="px-4 py-3 text-sm text-slate-700">油价上涨直接受益</td></tr>
          <tr><td class="px-4 py-3 font-bold text-slate-900">中国海油</td><td class="px-4 py-3 text-sm text-slate-700">纯上游，弹性大</td></tr>
          <tr><td class="px-4 py-3 font-bold text-slate-900">中海油服</td><td class="px-4 py-3 text-sm text-slate-700">油服龙头</td></tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-slate-500 italic">推荐券商：东吴证券、华源证券</p>

    <!-- 券商金股组合 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-green-600 rounded-full mr-3"></span>券商金股组合汇总</h2>

    <h3 id="b_sec14" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">券商金股组合</h3>
    <div class="grid md:grid-cols-2 gap-6 my-6">
      <div class="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-xl p-5">
        <h4 class="text-red-800 font-black mb-3 flex items-center text-sm">
          <span class="w-6 h-6 rounded bg-red-600 text-white flex items-center justify-center text-xs mr-2">国</span>
          国信证券 3 月金股
        </h4>
        <ul class="space-y-2 text-red-900 text-sm">
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>腾讯控股：</strong>AI 积极投入，关注模型能力提升</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>东方财富：</strong>业绩景气向上，谋求新增长空间</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>迈瑞医疗：</strong>医疗器械龙头，海外扩张</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>贵州茅台：</strong>渠道改革，步入 2C 新时代</span></li>
        </ul>
      </div>
      <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-5">
        <h4 class="text-blue-800 font-black mb-3 flex items-center text-sm">
          <span class="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center text-xs mr-2">东</span>
          东吴证券 3 月金股
        </h4>
        <ul class="space-y-2 text-blue-900 text-sm">
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>中国人寿：</strong>寿险头雁，估值修复空间</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>波司登：</strong>暖冬影响平稳，高股息</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>贝壳：</strong>多元业务驱动，股东回报提升</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>理想汽车：</strong>构建具身智能 AI 系统</span></li>
        </ul>
      </div>
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-5">
        <h4 class="text-purple-800 font-black mb-3 flex items-center text-sm">
          <span class="w-6 h-6 rounded bg-purple-600 text-white flex items-center justify-center text-xs mr-2">开</span>
          开源证券 3 月金股
        </h4>
        <ul class="space-y-2 text-purple-900 text-sm">
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>保利置业集团：</strong>地产央企，稳健增长</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>招商轮船：</strong>航运周期向上</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>浙版传媒：</strong>文化国企，估值低</span></li>
        </ul>
      </div>
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5">
        <h4 class="text-green-800 font-black mb-3 flex items-center text-sm">
          <span class="w-6 h-6 rounded bg-green-600 text-white flex items-center justify-center text-xs mr-2">中</span>
          中银证券 3 月金股
        </h4>
        <ul class="space-y-2 text-green-900 text-sm">
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>中信海直：</strong>低空经济核心标的</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>浙江龙盛：</strong>染料龙头，周期反转</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>雅克科技：</strong>半导体材料</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>天赐材料：</strong>电解液龙头</span></li>
        </ul>
      </div>
    </div>

    <!-- 投资策略建议 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-purple-600 rounded-full mr-3"></span>投资策略建议</h2>

    <h3 id="b_sec15" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">投资策略</h3>
    <div class="grid md:grid-cols-3 gap-4 my-6">
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-5">
        <h4 class="text-blue-800 font-black mb-3 flex items-center text-base">
          <span class="text-xl mr-2">📅</span>短期策略（1-4 周）
        </h4>
        <ul class="space-y-2 text-blue-900 text-sm">
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>仓位：</strong>中性偏积极（6-7 成）</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>配置：</strong>AI 算力 + 半导体 + 高股息</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>回避：</strong>高位题材股、纯概念炒作</span></li>
        </ul>
      </div>
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-5">
        <h4 class="text-purple-800 font-black mb-3 flex items-center text-base">
          <span class="text-xl mr-2">📈</span>中期策略（1-3 个月）
        </h4>
        <ul class="space-y-2 text-purple-900 text-sm">
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>主线 1：</strong>AI 产业链（算力/光模块/液冷）</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>主线 2：</strong>半导体周期复苏</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>主线 3：</strong>高股息资产配置</span></li>
        </ul>
      </div>
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-5">
        <h4 class="text-green-800 font-black mb-3 flex items-center text-base">
          <span class="text-xl mr-2">🚀</span>长期策略（3 个月以上）
        </h4>
        <ul class="space-y-2 text-green-900 text-sm">
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>科技自立：</strong>国产替代核心标的</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>消费升级：</strong>高端消费龙头</span></li>
          <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>绿色发展：</strong>新能源/储能</span></li>
        </ul>
      </div>
    </div>

    <!-- 风险提示 -->
    <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-6 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">⚠️</span>风险提示与分歧点
      </h4>
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <h5 class="text-red-700 font-bold text-sm mb-2">主要风险</h5>
          <ul class="space-y-1.5 text-red-900 text-sm">
            <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>地缘政治风险：</strong>中东局势升级，油价波动加大</span></li>
            <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>海外货币政策：</strong>美联储降息预期变化</span></li>
            <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>国内经济复苏：</strong>内需修复力度仍需观察</span></li>
            <li class="flex items-start"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 mr-2 flex-shrink-0"></span><span><strong>市场波动：</strong>海外市场震荡传导至 A 股</span></li>
          </ul>
        </div>
        <div>
          <h5 class="text-red-700 font-bold text-sm mb-2">观点分歧</h5>
          <div class="space-y-2 text-red-900 text-sm">
            <div class="flex justify-between border-b border-red-200 pb-1"><span>市场走势</span><span>结构性牛市 vs 震荡市</span></div>
            <div class="flex justify-between border-b border-red-200 pb-1"><span>降息预期</span><span>全年 1-2 次 vs 可能清零</span></div>
            <div class="flex justify-between border-b border-red-200 pb-1"><span>房地产</span><span>底部区域 vs 仍需观察</span></div>
            <div class="flex justify-between"><span>新能源</span><span>储能机会 vs 产能过剩</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 免责声明 -->
    <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 my-6 text-center">
      <p class="text-xs text-slate-500">免责声明：本报告基于各券商公开晨会纪要整理，仅供参考，不构成投资建议。市场有风险，投资需谨慎。投资者应独立判断，风险自担。</p>
      <p class="text-xs text-slate-400 mt-1">数据来源：Wind、各券商研究所、国信证券经济研究所、东吴证券研究所等 | 报告时间：2026 年 3 月 24 日</p>
    </div>
  </div>`;
}
