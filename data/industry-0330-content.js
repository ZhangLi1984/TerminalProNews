// ==========================================
// 行业研究内容 - 2026年3月30日
// 整合CIO战略内参 + 行业基础数据库
// ==========================================

function renderIndustryContent_0330() {
  return `
<div class="prose prose-slate max-w-none">

  <!-- 报告头部 -->
  <div class="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-6 rounded-xl mb-8 shadow-lg">
    <h1 class="text-2xl font-black mb-2 flex items-center">
      <span class="w-2 h-8 bg-white rounded-full mr-3"></span>
      行业研究 · CIO战略内参深度整合
    </h1>
    <p class="text-indigo-100 text-sm mt-3">基于249份行业研报深度整合与买方四维框架分析</p>
    <p class="text-indigo-200 text-xs mt-2">报告日期：2026年3月30日 | 编制：首席投资官策略团队</p>
  </div>

  <!-- 一、宏观大势研判 -->
  <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-indigo-600 rounded-full mr-3"></span>
    一、宏观大势研判
  </h2>

  <h3 id="i_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">核心判断：AI通胀周期的第一波浪潮</h3>

  <div class="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 my-5 rounded-r-xl">
    <p class="text-indigo-900 font-medium">
      当前市场正处于<strong>AI算力涨价周期的早期阶段</strong>，这一轮涨价的本质是<strong>需求爆发、供给约束与商业模式升级的三重共振</strong>。Token调用量从2024年初的1000亿飙升至目前的140万亿（两年1000倍），标志着数据要素通过可计价模式实现了从供给到价值的闭环。
    </p>
  </div>

  <h3 id="i_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">关键宏观信号</h3>

  <ul class="space-y-3">
    <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>通胀从消费端向科技基础设施蔓延</strong>：云厂商3月集中涨价5%-500%，AI基础设施进入全面通胀阶段</span>
    </li>
    <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>周期错配加剧</strong>：存储芯片扩产周期3-4年，新产能释放需等到2027年中-2028年，供需缺口至少延续18个月</span>
    </li>
    <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>全球资本开支加速</strong>：腾讯2026年AI投入翻倍，小米未来三年投入超600亿元，英伟达2027年需求指引1万亿美元</span>
    </li>
  </ul>

  <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-red-800 font-bold mb-2 flex items-center">宏观风险点</h4>
    <ul class="text-red-900 text-sm space-y-1">
      <li>CPI同比上涨1.3%（近三年最高），若通胀超预期反弹，可能压制科技股估值</li>
      <li>地缘政治扰动（美伊冲突、中东局势）对全球供应链的潜在冲击</li>
    </ul>
  </div>

  <!-- 二、S级赛道 -->
  <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-purple-600 rounded-full mr-3"></span>
    二、S级赛道（核心配置）
  </h2>

  <h3 id="i_sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">1. AI算力产业链 [投资价值: S]</h3>

  <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-600 p-5 my-5 rounded-r-xl">
    <h4 class="text-purple-800 font-black mb-3">投资价值评分</h4>
    <p class="text-purple-900 font-semibold mb-2">景气度：极高 | 政策催化：明确 | 业绩兑现：确定性强</p>
    <p class="text-purple-900">本轮AI算力涨价是需求爆发、供给约束与商业模式升级三重因素共振的结果。我国Token调用量两年涨千倍（从2024年初1000亿增至目前140万亿），标志着数据要素通过可计价模式实现从供给到价值的闭环。</p>
  </div>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">核心逻辑汇总</h4>
  <ul class="space-y-3">
    <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>涨价潮确立</strong>：阿里云、百度智能云、腾讯云等头部厂商3月集中调价，涨幅5%-500%不等，AI基础设施进入全面通胀阶段</span>
    </li>
    <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>商业模式升级</strong>：行业从"算力+存储"资源租赁模式升级为"模型即服务"智能输出模式，Token业务成为核心载体</span>
    </li>
    <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>推理算力主导</strong>：AI Agent规模化落地推动Token消耗指数级增长，推理算力取代训练算力成为核心增长引擎</span>
    </li>
    <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>全栈竞争壁垒</strong>：全栈技术协同成为厂商核心壁垒，单一算力租赁模式逐步退出市场</span>
    </li>
  </ul>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">关键数据与趋势</h4>
  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <thead class="bg-purple-100">
        <tr>
          <th class="px-4 py-3 text-left font-semibold text-purple-800 border-b border-slate-200">指标</th>
          <th class="px-4 py-3 text-left font-semibold text-purple-800 border-b border-slate-200">数据</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="hover:bg-purple-50 transition-colors">
          <td class="px-4 py-3 text-slate-700">Token调用量增长</td>
          <td class="px-4 py-3 text-purple-900 font-medium">2024年初1000亿 → 2026年3月140万亿（1000倍）</td>
        </tr>
        <tr class="hover:bg-purple-50 transition-colors">
          <td class="px-4 py-3 text-slate-700">英伟达2027年需求指引</td>
          <td class="px-4 py-3 text-purple-900 font-medium">至少1万亿美元</td>
        </tr>
        <tr class="hover:bg-purple-50 transition-colors">
          <td class="px-4 py-3 text-slate-700">云厂商资本开支</td>
          <td class="px-4 py-3 text-purple-900 font-medium">腾讯2026年AI投入翻倍，小米未来三年投入超600亿元</td>
        </tr>
        <tr class="hover:bg-purple-50 transition-colors">
          <td class="px-4 py-3 text-slate-700">GB300平台MLCC用量</td>
          <td class="px-4 py-3 text-purple-900 font-medium">约3万颗/台，是手机的30倍、汽车的3倍</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-red-800 font-bold mb-2 flex items-center">CIO 深度洞察</h4>
    <p class="text-red-900 text-sm mb-2">本轮算力涨价并非周期性波动，而是<strong>商业模式结构性升级</strong>的结果。</p>
    <ul class="text-red-900 text-sm space-y-1">
      <li>算力不再是同质化商品，而是具备智能输出能力的"Token工厂"</li>
      <li>推理算力取代训练算力成为核心增长引擎（AI Agent规模化落地）</li>
      <li>全栈技术协同成为厂商核心壁垒，单一算力租赁模式逐步退出市场</li>
    </ul>
    <p class="text-red-800 text-xs mt-3 font-semibold">证伪指标：Token调用量增速放缓、云厂商资本开支转向收缩、国产算力芯片量产进度不及预期</p>
  </div>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">周期位置</h4>
  <p class="text-slate-700 bg-slate-50 p-3 rounded-lg"><strong>上行周期初期</strong>。算力高价周期具备持续性，AI Agent生态尚未成熟，Token需求增长斜率维持高位。</p>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">推荐标的</h4>
  <ul class="space-y-2">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>国产算力芯片</strong>：寒武纪、海光信息、天数智芯、壁仞科技</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>算力基础设施</strong>：中际旭创、胜宏科技、东山精密、宏和科技、菲利华</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>云服务</strong>：优刻得、青云科技、网宿科技、首都在线、金山云</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>IDC/算力租赁</strong>：宏景科技、大位科技、润泽科技、润建股份、数据港、奥飞数据</span>
    </li>
  </ul>

  <h3 id="i_sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">2. 半导体/存储 [投资价值: S]</h3>

  <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-5 my-5 rounded-r-xl">
    <h4 class="text-blue-800 font-black mb-3">投资价值评分</h4>
    <p class="text-blue-900 font-semibold mb-2">景气度：极高 | 供需格局：供不应求 | 涨价周期：持续性高</p>
    <p class="text-blue-900">美光2026财年Q2营收238.6亿美元（同比+196%），毛利率75%创历史纪录，预计Q3营收335亿美元、毛利率81%。存储超级景气周期延续，涨价潮席卷消费电子全产业链。</p>
  </div>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">核心逻辑汇总</h4>
  <ul class="space-y-3">
    <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>供需极度紧张</strong>：美光反馈当前DRAM和NAND市场供应极度紧张，部分客户需求仅能满足50-66%</span>
    </li>
    <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>产能释放滞后</strong>：存储芯片扩产周期长达3-4年，美光新产能释放指引为2027年中-2028年</span>
    </li>
    <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>AI驱动需求爆发</strong>：2026年服务器内存将占市场50%以上成为第一大应用；AI PC内存配置达32GB（普通PC的一倍）；L4自动驾驶汽车需超300GB内存</span>
    </li>
    <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>国产替代加速</strong>：佰维存储签订15亿美元存储晶圆采购合同，2026年1-2月营收40-45亿元（同比+340%-395%）</span>
    </li>
  </ul>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">关键数据与趋势</h4>
  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <thead class="bg-blue-100">
        <tr>
          <th class="px-4 py-3 text-left font-semibold text-blue-800 border-b border-slate-200">指标</th>
          <th class="px-4 py-3 text-left font-semibold text-blue-800 border-b border-slate-200">数据</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="hover:bg-blue-50 transition-colors">
          <td class="px-4 py-3 text-slate-700">美光Q2营收</td>
          <td class="px-4 py-3 text-blue-900 font-medium">238.6亿美元（同比+196%）</td>
        </tr>
        <tr class="hover:bg-blue-50 transition-colors">
          <td class="px-4 py-3 text-slate-700">美光Q2毛利率</td>
          <td class="px-4 py-3 text-blue-900 font-medium">75%（创历史纪录）</td>
        </tr>
        <tr class="hover:bg-blue-50 transition-colors">
          <td class="px-4 py-3 text-slate-700">2026年DRAM出货量增速</td>
          <td class="px-4 py-3 text-blue-900 font-medium">20%-25%（按bit容量计）</td>
        </tr>
        <tr class="hover:bg-blue-50 transition-colors">
          <td class="px-4 py-3 text-slate-700">Rubin服务器内存用量</td>
          <td class="px-4 py-3 text-blue-900 font-medium">75TB（GB200为30.2TB）</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-red-800 font-bold mb-2 flex items-center">CIO 深度洞察</h4>
    <p class="text-red-900 text-sm mb-2">存储周期的本质是<strong>时间错配</strong>。扩产需要3-4年，而AI需求爆发是指数级的。</p>
    <ul class="text-red-900 text-sm space-y-1">
      <li>AI服务器内存将占市场50%以上，成为第一大应用</li>
      <li>AI PC内存配置达32GB（普通PC的一倍）</li>
      <li>L4自动驾驶汽车需超300GB内存</li>
      <li>当前处于上一轮产能周期的尾声与新一轮需求周期的爆发期叠加</li>
    </ul>
    <p class="text-red-800 text-xs mt-3 font-semibold">证伪指标：存储价格回调、美光/三星扩产进度超预期提前、消费电子需求进一步恶化</p>
  </div>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">周期位置</h4>
  <p class="text-slate-700 bg-slate-50 p-3 rounded-lg"><strong>上行周期中期</strong>。存储价格上涨对消费电子形成压制，但AI服务器需求持续强劲，涨价周期至少延续至2027年。</p>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">推荐标的</h4>
  <ul class="space-y-2">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>存储芯片</strong>：兆易创新、澜起科技、佰维存储、德明利、江波龙</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>半导体设备</strong>：北方华创、中微公司、华海清科、拓荆科技</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>算力芯片</strong>：海光信息</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>晶圆代工</strong>：中芯国际</span>
    </li>
  </ul>

  <h3 id="i_sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">3. 人形机器人 [投资价值: S]</h3>

  <div class="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-600 p-5 my-5 rounded-r-xl">
    <h4 class="text-teal-800 font-black mb-3">投资价值评分</h4>
    <p class="text-teal-900 font-semibold mb-2">景气度：极高 | 量产节点：2026年0-1兑现 | 政策支持：强力</p>
    <p class="text-teal-900">2026年是人形机器人0-1兑现的重要节点。特斯拉Optimus预计26Q1发布第一代量产产品，26M8开启大规模量产。宇树科技科创板IPO获受理，2025年营收17.08亿元（同比+335%），净利润2.88亿元。</p>
  </div>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">核心逻辑汇总</h4>
  <ul class="space-y-3">
    <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>量产进程提速</strong>：特斯拉Optimus 3将启动史上所有大型复杂制造产品中最快的产能爬坡节奏；Figure 3亮相白宫峰会展示多语言交互能力</span>
    </li>
    <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>政策密集出台</strong>：杭州出台全国首部具身智能机器人产业发展条例，成都启动首个具身智能工程机器人行业标准编制</span>
    </li>
    <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>技术突破加速</strong>：Optimus首次公开减速齿轮箱与灵巧手核心设计；小米新版仿生手实现全掌触觉感知，可完成15万次抓握</span>
    </li>
    <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>商业化落地加速</strong>：上汽"能仔1号"电池产线正式上岗，珞石AR系列力控臂出货量突破三千台</span>
    </li>
  </ul>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">关键数据与趋势</h4>
  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <thead class="bg-teal-100">
        <tr>
          <th class="px-4 py-3 text-left font-semibold text-teal-800 border-b border-slate-200">指标</th>
          <th class="px-4 py-3 text-left font-semibold text-teal-800 border-b border-slate-200">数据</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="hover:bg-teal-50 transition-colors">
          <td class="px-4 py-3 text-slate-700">宇树科技2025年营收</td>
          <td class="px-4 py-3 text-teal-900 font-medium">17.08亿元（同比+335%）</td>
        </tr>
        <tr class="hover:bg-teal-50 transition-colors">
          <td class="px-4 py-3 text-slate-700">宇树科技2025年净利润</td>
          <td class="px-4 py-3 text-teal-900 font-medium">2.88亿元（同比+204%）</td>
        </tr>
        <tr class="hover:bg-teal-50 transition-colors">
          <td class="px-4 py-3 text-slate-700">珞石AR系列力控臂出货量</td>
          <td class="px-4 py-3 text-teal-900 font-medium">突破3000台</td>
        </tr>
        <tr class="hover:bg-teal-50 transition-colors">
          <td class="px-4 py-3 text-slate-700">Figure AI估值</td>
          <td class="px-4 py-3 text-teal-900 font-medium">390亿美元（全球最高）</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-red-800 font-bold mb-2 flex items-center">CIO 深度洞察</h4>
    <p class="text-red-900 text-sm mb-2">人形机器人正处于<strong>技术收敛与商业化落地的临界点</strong>。</p>
    <ul class="text-red-900 text-sm space-y-1">
      <li>量产进程提速：特斯拉Optimus 3将启动史上最快产能爬坡节奏</li>
      <li>政策密集出台：杭州全国首部具身智能机器人产业发展条例</li>
      <li>技术突破加速：小米新版仿生手实现全掌触觉感知，可完成15万次抓握</li>
      <li>商业化落地：上汽"能仔1号"电池产线正式上岗</li>
    </ul>
    <p class="text-red-800 text-xs mt-3 font-semibold">证伪指标：特斯拉Optimus量产进度延迟、人形机器人应用场景落地不及预期、核心零部件国产化率</p>
  </div>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">周期位置</h4>
  <p class="text-slate-700 bg-slate-50 p-3 rounded-lg"><strong>产业化元年</strong>。从技术验证向规模化应用加速跨越，龙头公司供应链、技术趋于收敛。</p>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">推荐标的</h4>
  <ul class="space-y-2">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>特斯拉链核心</strong>：拓普集团、三花智控、五洲新春、蓝思科技</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>灵巧手/传感器</strong>：傲意科技、柯力传感、奥比中光</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>本体厂商</strong>：宇树科技（IPO受理）、智元机器人、乐聚机器人</span>
    </li>
  </ul>

  <!-- 三、A级赛道 -->
  <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
    三、A级赛道（进攻配置）
  </h2>

  <h3 id="i_sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">4. 通信/光模块 [投资价值: A+]</h3>

  <div class="bg-gradient-to-r from-cyan-50 to-sky-50 border-l-4 border-cyan-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-cyan-800 font-black mb-3">投资价值评分</h4>
    <p class="text-cyan-900 font-semibold mb-2">景气度：高 | GTC催化：明确 | 技术迭代：加速</p>
    <p class="text-cyan-900">GTC 2026及OFC 2026均聚焦AI算力产业链相关产品服务。黄仁勋提出"Token工厂经济学"，到2027年至少有1万亿美元需求。光通信已成为AI算力基础设施建设的核心环节。</p>
  </div>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">核心逻辑汇总</h4>
  <ul class="space-y-2">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>互联技术爆发</strong>：OFC 2026期间XPO MSA、Open CPX MSA等多个多源协议组织相继成立</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>液冷成为标配</strong>：Rubin GPU功耗突破2000W，全液冷设计成为AI算力标配</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>太空算力延伸</strong>：英伟达正在研发部署在太空的数据中心计算机"Vera Rubin Space-1"</span>
    </li>
  </ul>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">推荐标的</h4>
  <ul class="space-y-2">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>光模块</strong>：中际旭创、新易盛、华工科技</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>液冷</strong>：领益智造、英维克</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>光纤光缆</strong>：亨通光电、中天科技</span>
    </li>
  </ul>

  <h3 id="i_sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">5. MLCC/被动元件 [投资价值: A+]</h3>

  <div class="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-amber-800 font-black mb-3">投资价值评分</h4>
    <p class="text-amber-900 font-semibold mb-2">景气度：高 | 供需矛盾：加剧 | 涨价预期：明确</p>
    <p class="text-amber-900">村田决定4月开始对AI服务器和高端车规级MLCC产品全面涨价，涨幅15%-35%。三星电机计划4月开始提高MLCC价格，涨幅可能达到双位数百分比。</p>
  </div>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">核心逻辑汇总</h4>
  <ul class="space-y-2">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>供需矛盾加剧</strong>：村田、三星电机等厂商已处于满载状态，高容MLCC产品交期已拉长至18-22周</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>AI驱动需求爆发</strong>：GB300平台需搭载约3万颗MLCC，单一机柜消耗量高达44万颗</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>国产替代空间巨大</strong>：若替代50%，MLCC国产替代规模将高达1.28万亿个</span>
    </li>
  </ul>

  <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-red-800 font-bold mb-2 flex items-center">CIO 深度洞察：MLCC涨价潮 -> 国产替代加速</h4>
    <p class="text-red-900 text-sm mb-2">当前市场仅关注MLCC涨价对成本的影响，但忽视了<strong>国产替代的加速窗口期</strong>：</p>
    <ul class="text-red-900 text-sm space-y-1">
      <li>村田、三星电机等厂商已处于满载状态，高容MLCC交期拉长至18-22周</li>
      <li>以2025年进口数量计算，若替代50%，MLCC国产替代规模高达1.28万亿个</li>
      <li>高端MLCC技术壁垒高、良率低，产能消耗大，头部厂商扩产意愿不强</li>
      <li>国产厂商迎来"被动替代+主动抢份额"的双重机遇</li>
    </ul>
    <p class="text-red-800 text-xs mt-3 font-semibold">潜伏标的：风华高科、三环集团、国瓷材料</p>
  </div>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">推荐标的</h4>
  <ul class="space-y-2">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>国产MLCC龙头</strong>：风华高科、三环集团</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>陶瓷粉体</strong>：国瓷材料</span>
    </li>
  </ul>

  <h3 id="i_sec8" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">6. 新能源/电力设备 [投资价值: A]</h3>

  <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-green-800 font-black mb-3">投资价值评分</h4>
    <p class="text-green-900 font-semibold mb-2">景气度：中高 | 政策支持：明确 | 结构分化：显著</p>
    <p class="text-green-900">"十五五"规划提出加力建设新型能源基础设施。碳酸锂价格止跌反弹，硅料价格持续下行。储能成为锂需求第二增长曲线，预计2024-2035年全球储能装机CAGR达21%。</p>
  </div>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">推荐标的</h4>
  <ul class="space-y-2">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>储能系统</strong>：宁德时代、亿纬锂能、比亚迪</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>隔膜</strong>：恩捷股份、璞泰来</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>海风</strong>：大金重工、东方电缆、振江股份</span>
    </li>
  </ul>

  <h3 id="i_sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">7. 低空经济/eVTOL [投资价值: A]</h3>

  <div class="bg-gradient-to-r from-sky-50 to-blue-50 border-l-4 border-sky-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-sky-800 font-black mb-3">投资价值评分</h4>
    <p class="text-sky-900 font-semibold mb-2">景气度：高 | 政策催化：密集 | 商业化：加速</p>
    <p class="text-sky-900">全国首个低空经济领域责任保险强制投保机制在重庆构建。峰飞航空推出eVTOL行业首个全生命周期保险"无忧计划"。亿航智能与泰国政府高层会谈，加速海外商业化。</p>
  </div>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">推荐标的</h4>
  <ul class="space-y-2">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>eVTOL整机</strong>：亿航智能、峰飞航空</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>动力电池</strong>：宁德时代</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>核心零部件</strong>：卧龙电驱、北摩高科</span>
    </li>
  </ul>

  <h3 id="i_sec10" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">8. 有色金属/锂 [投资价值: A]</h3>

  <div class="bg-gradient-to-r from-lime-50 to-green-50 border-l-4 border-lime-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-lime-800 font-black mb-3">投资价值评分</h4>
    <p class="text-lime-900 font-semibold mb-2">景气度：中高 | 供需拐点：临近 | 长期逻辑：确定</p>
    <p class="text-lime-900">需求端持续高增（新能源车+储能双轮驱动），供给端受资本开支周期和"黑天鹅"事件影响（尼日利亚暂停采矿、津巴布韦禁止出口），2026年锂供需格局或转向紧平衡。</p>
  </div>

  <div class="bg-red-50 border-l-4 border-red-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-red-800 font-bold mb-2 flex items-center">CIO 深度洞察：锂价底部反转</h4>
    <p class="text-red-900 text-sm mb-2">市场普遍认为锂价持续低迷、产能过剩，但底层数据显示<strong>供需格局的根本性转变</strong>：</p>
    <ul class="text-red-900 text-sm space-y-1">
      <li>碳酸锂价格已止跌反弹，技术形态出现底部特征</li>
      <li>2026年供需格局或将正式转为紧平衡</li>
      <li>供给端黑天鹅（尼日利亚暂停采矿、津巴布韦禁止出口）强化反转逻辑</li>
      <li>资本开支周期决定未来2-3年新增供给有限</li>
    </ul>
    <p class="text-red-800 text-xs mt-3 font-semibold">潜伏标的：赣锋锂业、天齐锂业、盐湖股份、恩捷股份</p>
  </div>

  <h4 class="text-lg font-bold text-slate-800 mt-6 mb-3">推荐标的</h4>
  <ul class="space-y-2">
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>锂资源</strong>：赣锋锂业、天齐锂业、盐湖股份</span>
    </li>
    <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
      <span class="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 mr-3 flex-shrink-0"></span>
      <span><strong>锂电材料</strong>：璞泰来、恩捷股份</span>
    </li>
  </ul>

  <!-- 四、跨赛道暗线 -->
  <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-amber-600 rounded-full mr-3"></span>
    四、跨赛道暗线（核心阿尔法）
  </h2>

  <h3 id="i_sec15" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">暗线1：MLCC涨价潮 -> 国产替代加速</h3>

  <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-amber-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">催化剂</span>
    </h4>
    <p class="text-amber-900">村田决定4月开始对AI服务器和高端车规级MLCC产品全面涨价15%-35%，三星电机跟进涨价。</p>
  </div>

  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-blue-800 font-bold mb-2 flex items-center">二阶传导推演</h4>
    <p class="text-blue-900 text-sm mb-2">当前市场仅关注MLCC涨价对成本的影响，但忽视了<strong>国产替代的加速窗口期</strong>：</p>
    <ul class="text-blue-900 text-sm space-y-1">
      <li>村田、三星电机等厂商已处于满载状态，高容MLCC交期拉长至18-22周</li>
      <li>若替代50%，MLCC国产替代规模高达1.28万亿个</li>
      <li>国产厂商迎来"被动替代+主动抢份额"的双重机遇</li>
    </ul>
  </div>

  <p class="text-slate-700 bg-slate-50 p-3 rounded-lg"><strong>潜伏标的</strong>：风华高科、三环集团、国瓷材料</p>

  <h3 id="i_sec16" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">暗线2：GPU功耗突破2000W -> 液冷成为AI算力标配</h3>

  <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-cyan-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">催化剂</span>
    </h4>
    <p class="text-cyan-900">英伟达Rubin GPU功耗突破2000W，全液冷设计成为AI算力标配。</p>
  </div>

  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-blue-800 font-bold mb-2 flex items-center">二阶传导推演</h4>
    <p class="text-blue-900 text-sm mb-2">市场普遍关注GPU性能提升，但忽视了<strong>热管理成为算力瓶颈</strong>：</p>
    <ul class="text-blue-900 text-sm space-y-1">
      <li>风冷已无法满足高功耗GPU散热需求，液冷从可选变为必选</li>
      <li>领益智造旗下立敏达已进入英伟达Rubin架构供应链</li>
      <li>液冷散热器价值量是风冷的3-5倍，市场规模将指数级增长</li>
    </ul>
  </div>

  <p class="text-slate-700 bg-slate-50 p-3 rounded-lg"><strong>潜伏标的</strong>：英维克、领益智造</p>

  <h3 id="i_sec17" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">暗线3：存储涨价压制消费电子 -> 云游戏/云手机模式价值重估</h3>

  <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-purple-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">催化剂</span>
    </h4>
    <p class="text-purple-900">存储涨价周期至少延续至2027年，AI服务器占内存市场50%以上，消费电子成本承压。</p>
  </div>

  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-blue-800 font-bold mb-2 flex items-center">二阶传导推演</h4>
    <p class="text-blue-900 text-sm mb-2">市场关注存储涨价对半导体板块的利好，但忽视了<strong>消费电子的成本压力将推动轻终端、重云端模式的加速</strong>：</p>
    <ul class="text-blue-900 text-sm space-y-1">
      <li>存储涨价15%-35%直接推高消费电子BOM成本</li>
      <li>云游戏、云手机等模式可大幅降低终端存储需求</li>
      <li>运营商云服务业务迎来增量机会</li>
    </ul>
  </div>

  <p class="text-slate-700 bg-slate-50 p-3 rounded-lg"><strong>潜伏标的</strong>：优刻得、金山云、网宿科技</p>

  <h3 id="i_sec18" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">暗线4：锂价底部反转 -> 储能成为第二增长曲线</h3>

  <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-green-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">催化剂</span>
    </h4>
    <p class="text-green-900">碳酸锂价格止跌反弹，尼日利亚暂停采矿6个月、津巴布韦禁止出口。</p>
  </div>

  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-blue-800 font-bold mb-2 flex items-center">二阶传导推演</h4>
    <p class="text-blue-900 text-sm mb-2">市场普遍认为锂价反弹是短期波动，但忽视了<strong>供需格局的根本性转变</strong>：</p>
    <ul class="text-blue-900 text-sm space-y-1">
      <li>需求端：新能源车是基本盘（占60%），储能是第二增长曲线（渗透率仅7.7%）</li>
      <li>供给端：本轮锂价下行周期中全球头部矿企大幅收缩资本开支</li>
      <li>政策黑天鹅：尼日利亚、津巴布韦供给收缩进一步强化</li>
    </ul>
  </div>

  <p class="text-slate-700 bg-slate-50 p-3 rounded-lg"><strong>潜伏标的</strong>：赣锋锂业、天齐锂业、盐湖股份、恩捷股份</p>

  <h3 id="i_sec19" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">暗线5：美伊冲突 -> 中东内陆运输需求 -> 重卡出口</h3>

  <div class="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-5 my-5 rounded-r-xl">
    <h4 class="text-orange-800 font-black mb-3 flex items-center">
      <span class="text-xl mr-2">催化剂</span>
    </h4>
    <p class="text-orange-900">美伊冲突升级，沙特、阿联酋、阿曼启动替代霍尔木兹海峡的物流走廊。</p>
  </div>

  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-xl">
    <h4 class="text-blue-800 font-bold mb-2 flex items-center">二阶传导推演</h4>
    <p class="text-blue-900 text-sm mb-2">市场关注中东地缘政治风险，但忽视了<strong>内陆运输基础设施建设的确定性机会</strong>：</p>
    <ul class="text-blue-900 text-sm space-y-1">
      <li>霍尔木兹海峡替代物流走廊建设将大幅提升中东内陆运输需求</li>
      <li>2025年我国重卡中东出口已突破5万辆（同比+51%）</li>
      <li>沙特3.1万辆（+40%），阿联酋1.4万辆（+54%）</li>
    </ul>
  </div>

  <p class="text-slate-700 bg-slate-50 p-3 rounded-lg"><strong>潜伏标的</strong>：中国重汽、一汽解放、福田汽车</p>

  <!-- 五、行业配置建议 -->
  <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-green-600 rounded-full mr-3"></span>
    五、行业配置建议
  </h2>

  <h3 id="i_sec23" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">第一梯队：核心仓位（建议配置比例40%-50%）</h3>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="px-4 py-3 text-left">优先级</th>
          <th class="px-4 py-3 text-left">赛道</th>
          <th class="px-4 py-3 text-left">配置理由</th>
          <th class="px-4 py-3 text-left">核心标的</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
          <td class="px-4 py-3 font-bold text-purple-900">1</td>
          <td class="px-4 py-3 font-bold text-purple-900">AI算力产业链</td>
          <td class="px-4 py-3 text-purple-900">Token经济学确立，商业模式升级，周期初期</td>
          <td class="px-4 py-3 text-purple-900 font-medium">中际旭创、寒武纪、海光信息、优刻得</td>
        </tr>
        <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
          <td class="px-4 py-3 font-bold text-blue-900">2</td>
          <td class="px-4 py-3 font-bold text-blue-900">半导体/存储</td>
          <td class="px-4 py-3 text-blue-900">供需缺口延续至2027年，涨价周期确定性高</td>
          <td class="px-4 py-3 text-blue-900 font-medium">兆易创新、佰维存储、北方华创</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 id="i_sec24" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">第二梯队：进攻仓位（建议配置比例30%-35%）</h3>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
      <thead class="bg-slate-800 text-white">
        <tr>
          <th class="px-4 py-3 text-left">优先级</th>
          <th class="px-4 py-3 text-left">赛道</th>
          <th class="px-4 py-3 text-left">配置理由</th>
          <th class="px-4 py-3 text-left">核心标的</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="bg-teal-50 hover:bg-teal-100 transition-colors">
          <td class="px-4 py-3 font-bold text-teal-900">3</td>
          <td class="px-4 py-3 font-bold text-teal-900">人形机器人</td>
          <td class="px-4 py-3 text-teal-900">产业化元年，0-1兑现节点</td>
          <td class="px-4 py-3 text-teal-900 font-medium">拓普集团、三花智控、五洲新春</td>
        </tr>
        <tr class="bg-amber-50 hover:bg-amber-100 transition-colors">
          <td class="px-4 py-3 font-bold text-amber-900">4</td>
          <td class="px-4 py-3 font-bold text-amber-900">MLCC/被动元件</td>
          <td class="px-4 py-3 text-amber-900">涨价潮启动，国产替代加速</td>
          <td class="px-4 py-3 text-amber-900 font-medium">风华高科、三环集团</td>
        </tr>
        <tr class="bg-cyan-50 hover:bg-cyan-100 transition-colors">
          <td class="px-4 py-3 font-bold text-cyan-900">5</td>
          <td class="px-4 py-3 font-bold text-cyan-900">液冷散热</td>
          <td class="px-4 py-3 text-cyan-900">GPU功耗突破2000W，AI算力标配</td>
          <td class="px-4 py-3 text-cyan-900 font-medium">英维克、领益智造</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 id="i_sec25" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">第三梯队：潜伏仓位（建议配置比例15%-20%）</h3>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
      <thead class="bg-slate-700 text-white">
        <tr>
          <th class="px-4 py-3 text-left">优先级</th>
          <th class="px-4 py-3 text-left">赛道</th>
          <th class="px-4 py-3 text-left">配置理由</th>
          <th class="px-4 py-3 text-left">核心标的</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="bg-green-50 hover:bg-green-100 transition-colors">
          <td class="px-4 py-3 font-bold text-green-900">6</td>
          <td class="px-4 py-3 font-bold text-green-900">锂/有色金属</td>
          <td class="px-4 py-3 text-green-900">底部反转前夕，供需拐点临近</td>
          <td class="px-4 py-3 text-green-900 font-medium">赣锋锂业、天齐锂业、盐湖股份</td>
        </tr>
        <tr class="bg-sky-50 hover:bg-sky-100 transition-colors">
          <td class="px-4 py-3 font-bold text-sky-900">7</td>
          <td class="px-4 py-3 font-bold text-sky-900">低空经济/eVTOL</td>
          <td class="px-4 py-3 text-sky-900">商业化加速，保险体系完善</td>
          <td class="px-4 py-3 text-sky-900 font-medium">亿航智能、宁德时代</td>
        </tr>
        <tr class="bg-rose-50 hover:bg-rose-100 transition-colors">
          <td class="px-4 py-3 font-bold text-rose-900">8</td>
          <td class="px-4 py-3 font-bold text-rose-900">食品饮料</td>
          <td class="px-4 py-3 text-rose-900">价格复苏渐明，估值历史底部</td>
          <td class="px-4 py-3 text-rose-900 font-medium">贵州茅台、东鹏饮料</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 id="i_sec26" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">第四梯队：观察仓位（建议配置比例5%-10%）</h3>

  <div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
      <thead class="bg-slate-600 text-white">
        <tr>
          <th class="px-4 py-3 text-left">优先级</th>
          <th class="px-4 py-3 text-left">赛道</th>
          <th class="px-4 py-3 text-left">配置理由</th>
          <th class="px-4 py-3 text-left">核心标的</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-100">
        <tr class="bg-slate-50 hover:bg-slate-100 transition-colors">
          <td class="px-4 py-3 font-bold text-slate-900">9</td>
          <td class="px-4 py-3 font-bold text-slate-900">非银金融</td>
          <td class="px-4 py-3 text-slate-900">存款迁移长逻辑，估值低位</td>
          <td class="px-4 py-3 text-slate-900 font-medium">华泰证券、中信证券、中国太保</td>
        </tr>
        <tr class="bg-orange-50 hover:bg-orange-100 transition-colors">
          <td class="px-4 py-3 font-bold text-orange-900">10</td>
          <td class="px-4 py-3 font-bold text-orange-900">重卡出口</td>
          <td class="px-4 py-3 text-orange-900">中东地缘催化，内陆运输需求</td>
          <td class="px-4 py-3 text-orange-900 font-medium">中国重汽、一汽解放</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 六、风险提示 -->
  <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
    <span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>
    六、风险提示
  </h2>

  <h3 id="i_sec27" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">系统性风险</h3>

  <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-5 my-5 rounded-r-xl">
    <ul class="text-red-900 space-y-2">
      <li class="py-1.5 border-b border-red-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>通胀超预期反弹</strong>：CPI已触及近三年最高水平，若通胀持续上行，可能压制科技股估值</span>
      </li>
      <li class="py-1.5 border-b border-red-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>地缘政治冲突升级</strong>：美伊冲突、中东局势对全球供应链的潜在冲击</span>
      </li>
      <li class="py-1.5 border-b border-red-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>美联储政策转向不及预期</strong>：若降息节奏延迟，全球流动性环境可能恶化</span>
      </li>
    </ul>
  </div>

  <h3 id="i_sec28" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">行业特定风险</h3>

  <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-5 my-5 rounded-r-xl">
    <ul class="text-yellow-900 space-y-2">
      <li class="py-1.5 border-b border-yellow-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>AI算力</strong>：技术发展不及预期、市场竞争加剧、国产替代进度不及预期</span>
      </li>
      <li class="py-1.5 border-b border-yellow-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>半导体/存储</strong>：成本上升导致终端需求不及预期、扩产进度超预期提前</span>
      </li>
      <li class="py-1.5 border-b border-yellow-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>人形机器人</strong>：量产进度延迟、应用场景落地不及预期、政策支持力度减弱</span>
      </li>
      <li class="py-1.5 border-b border-yellow-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>新能源/锂电</strong>：价格竞争超预期、国际贸易摩擦、原材料价格波动</span>
      </li>
    </ul>
  </div>

  <!-- 策略总结 -->
  <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl mt-8 shadow-lg">
    <h3 class="text-xl font-black mb-4">策略总结</h3>
    <p class="mb-3"><strong>核心观点</strong>：当前市场正处于AI通胀周期的第一波浪潮。算力涨价周期的本质是商业模式结构性升级，而非简单的周期性波动。</p>
    <p class="mb-3"><strong>核心阿尔法</strong>：市场普遍关注第一层逻辑（算力涨价、存储紧缺），但忽视了二阶传导的机会（MLCC国产替代、液冷标配化、云服务轻终端化、锂价底部反转）。</p>
    <p class="text-sm text-indigo-200 mt-4"><strong>免责声明</strong>：本报告仅供参考，不构成投资建议。投资有风险，入市需谨慎。</p>
  </div>

</div>
  `;
}