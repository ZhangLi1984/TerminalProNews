// ==========================================
// 券商晨报内容渲染 - 2026-03-31
// ==========================================

function renderBrokerContent_0331() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 报告头部 -->
    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-600 rounded-r-xl p-6 mb-8">
      <div class="flex items-center justify-between mb-3">
        <h1 class="text-2xl font-black text-emerald-900 flex items-center">
          <span class="text-3xl mr-3">📰</span>
          券商晨报 | 买方汇总内参
        </h1>
        <span class="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">最新</span>
      </div>
      <p class="text-emerald-700 text-sm">报告日期：2026 年 3 月 31 日 | 核心主题：地缘风险下的资产配置</p>
    </div>

    <!-- 核心观点 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-emerald-600 rounded-full mr-3"></span>
      晨会精华：核心观点
    </h2>

    <h3 id="b_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">核心观点摘要</h3>

    <div class="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 p-5 my-5 rounded-r-xl">
      <h4 class="text-red-800 font-black mb-3 flex items-center">
        <span class="text-xl mr-2">🔥</span>中东局势主导市场
      </h4>
      <p class="text-red-900 leading-relaxed">
        中东冲突升级导致原油破百，全球通胀预期重估。建议增配油气开采、黄金等避险资产，回避航空运输等成本敏感型行业。若局势缓和，成长股存在预期修正机会。
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      <div class="bg-green-50 border border-green-200 rounded-xl p-4">
        <p class="text-green-800 font-bold mb-2">📈 进攻方向</p>
        <p class="text-green-700 text-sm">油气开采、电解铝、黄金、商业航天</p>
      </div>
      <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p class="text-blue-800 font-bold mb-2">🛡️ 防守方向</p>
        <p class="text-blue-700 text-sm">高股息红利、必选消费</p>
      </div>
      <div class="bg-red-50 border border-red-200 rounded-xl p-4">
        <p class="text-red-800 font-bold mb-2">⚠️ 回避方向</p>
        <p class="text-red-700 text-sm">航空运输、成本敏感制造业</p>
      </div>
    </div>

    <h3 id="b_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">重点推荐标的</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left font-bold">股票</th>
            <th class="px-4 py-3 text-left font-bold">代码</th>
            <th class="px-4 py-3 text-center font-bold">评级</th>
            <th class="px-4 py-3 text-left font-bold">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">中国海油</td>
            <td class="px-4 py-3 text-slate-600">600938</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">买入</span></td>
            <td class="px-4 py-3 text-sm text-slate-700">油价破百直接受益，储量丰富成本优势</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">中国铝业</td>
            <td class="px-4 py-3 text-slate-600">601600</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">买入</span></td>
            <td class="px-4 py-3 text-sm text-slate-700">铝供应冲击 6%，一体化龙头受益</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">山东黄金</td>
            <td class="px-4 py-3 text-slate-600">600547</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">买入</span></td>
            <td class="px-4 py-3 text-sm text-slate-700">地缘风险 + 通胀对冲双重逻辑</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">协创数据</td>
            <td class="px-4 py-3 text-slate-600">300857</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">增持</span></td>
            <td class="px-4 py-3 text-sm text-slate-700">AI 智能体算力云服务核心标的</td>
          </tr>
          <tr class="bg-blue-50 hover:bg-blue-100 transition-colors">
            <td class="px-4 py-3 font-bold text-blue-900">恒瑞医药</td>
            <td class="px-4 py-3 text-slate-600">600276</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">增持</span></td>
            <td class="px-4 py-3 text-sm text-slate-700">创新药占比 58%，AACR 会议催化</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 市场策略 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
      市场策略
    </h2>

    <h3 id="b_sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">A 股策略</h3>

    <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 my-5">
      <div class="flex items-center gap-3 mb-4">
        <span class="bg-amber-100 text-amber-800 text-sm font-bold px-3 py-1 rounded-full">中性偏进攻</span>
        <span class="text-slate-600 text-sm">建议仓位 6-7 成</span>
      </div>
      <p class="text-slate-700 leading-relaxed mb-4">
        中东局势是短期主导变量。地缘风险溢价已部分定价，但需警惕局势缓和后的快速回调。建议维持中性偏进攻仓位，进攻方向聚焦油气、电解铝、黄金，防守方向配置高股息红利。
      </p>
      <ul class="text-slate-600 text-sm space-y-2">
        <li class="flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 mr-2 flex-shrink-0"></span>
          <span><strong>上证综指：</strong>关注 3300 点支撑，若局势缓和有望挑战 3400 点</span>
        </li>
        <li class="flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 mr-2 flex-shrink-0"></span>
          <span><strong>创业板指：</strong>等待局势明朗后布局成长股修复</span>
        </li>
        <li class="flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 mr-2 flex-shrink-0"></span>
          <span><strong>成交量：</strong>维持万亿以上，市场活跃度尚可</span>
        </li>
      </ul>
    </div>

    <h3 id="b_sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">港股策略</h3>

    <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 my-5">
      <div class="flex items-center gap-3 mb-4">
        <span class="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">结构性机会</span>
        <span class="text-slate-600 text-sm">关注互联网龙头</span>
      </div>
      <p class="text-slate-700 leading-relaxed">
        港股受美元走强影响承压，但互联网龙头估值处于历史低位，存在修复空间。建议关注腾讯、阿里巴巴、美团等龙头，以及小鹏汽车等智能驾驶标的。
      </p>
    </div>

    <!-- 行业聚焦 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-green-600 rounded-full mr-3"></span>
      行业聚焦
    </h2>

    <h3 id="b_sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">热门行业点评</h3>

    <div class="space-y-4 my-6">
      <div class="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-4">
        <p class="text-green-800 font-bold mb-2">📈 油气开采：强烈推荐</p>
        <p class="text-green-700 text-sm">原油破百直接受益，建议超配中国海油、中国石油、中海油服</p>
      </div>

      <div class="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-4">
        <p class="text-green-800 font-bold mb-2">📈 电解铝：推荐</p>
        <p class="text-green-700 text-sm">6% 产能中断属重大供应冲击，推荐中国铝业、云铝股份、神火股份</p>
      </div>

      <div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-4">
        <p class="text-blue-800 font-bold mb-2">📊 AI 智能体：逢低布局</p>
        <p class="text-blue-700 text-sm">产业爆发元年，算力云服务为最确定方向，推荐协创数据、海光信息</p>
      </div>

      <div class="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-4">
        <p class="text-blue-800 font-bold mb-2">📊 创新药：逢低布局</p>
        <p class="text-blue-700 text-sm">三重周期叠加，AACR/ASCO 会议催化，推荐恒瑞医药、百济神州</p>
      </div>

      <div class="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-4">
        <p class="text-red-800 font-bold mb-2">📉 航空运输：回避</p>
        <p class="text-red-700 text-sm">燃油成本飙升冲击利润，建议回避中国国航、南方航空、东方航空</p>
      </div>
    </div>

    <!-- 公司研究 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center">
      <span class="w-2 h-8 bg-purple-600 rounded-full mr-3"></span>
      公司研究
    </h2>

    <h3 id="b_sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">重点公司评级变动</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-800 text-white">
          <tr>
            <th class="px-4 py-3 text-left font-bold">公司</th>
            <th class="px-4 py-3 text-left font-bold">机构</th>
            <th class="px-4 py-3 text-center font-bold">新评级</th>
            <th class="px-4 py-3 text-center font-bold">原评级</th>
            <th class="px-4 py-3 text-left font-bold">变动原因</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-green-50">
            <td class="px-4 py-3 font-semibold text-green-900">中国海油</td>
            <td class="px-4 py-3 text-sm text-slate-700">中信证券</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">买入</span></td>
            <td class="px-4 py-3 text-center text-slate-500">增持</td>
            <td class="px-4 py-3 text-sm text-slate-700">油价破百，盈利大幅上调</td>
          </tr>
          <tr class="bg-green-50">
            <td class="px-4 py-3 font-semibold text-green-900">中国铝业</td>
            <td class="px-4 py-3 text-sm text-slate-700">中金公司</td>
            <td class="px-4 py-3 text-center"><span class="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">买入</span></td>
            <td class="px-4 py-3 text-center text-slate-500">中性</td>
            <td class="px-4 py-3 text-sm text-slate-700">铝供应冲击 6%，量价齐升</td>
          </tr>
          <tr>
            <td class="px-4 py-3 font-semibold text-slate-800">金山办公</td>
            <td class="px-4 py-3 text-sm text-slate-700">国投证券</td>
            <td class="px-4 py-3 text-center"><span class="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">增持</span></td>
            <td class="px-4 py-3 text-center text-slate-500">增持</td>
            <td class="px-4 py-3 text-sm text-slate-700">维持，AI 战略推进顺利</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 报告尾部 -->
    <div class="border-t border-slate-200 mt-12 pt-6 text-center">
      <p class="text-slate-500 text-sm">
        免责声明：本报告仅供投资决策参考，不构成具体投资建议。市场有风险，投资需谨慎。
      </p>
      <p class="text-slate-400 text-xs mt-2">
        报告生成：券商晨报买方汇总框架 | 数据截止：2026-03-31
      </p>
    </div>

  </div>`;
}
