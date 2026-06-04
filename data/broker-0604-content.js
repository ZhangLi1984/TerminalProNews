function renderBrokerContent_0604() {
  return `<div class="prose prose-slate max-w-none">

    <!-- 标题 -->
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-100">
      <div class="flex items-center gap-3 mb-2">
        <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
          <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
          </svg>
        </div>
        <div>
          <h1 class="text-2xl font-black text-slate-900 m-0">券商晨报买方汇总内参</h1>
          <p class="text-sm text-slate-500 m-0">2026年6月4日 | 基于11家券商晨会纪要综合分析</p>
        </div>
      </div>
    </div>

    <!-- 一、市场总览 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>一、市场总览</h2>

    <h3 id="b_sec1" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">宏观大势判断</h3>

    <div class="bg-slate-50 rounded-xl p-5 my-4">
      <h4 class="font-bold text-slate-800 mb-3">市场现状（6月3日收盘）</h4>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
        <div class="bg-white rounded-lg p-3 text-center">
          <div class="text-slate-500 text-xs">上证指数</div>
          <div class="text-lg font-bold text-slate-900">4083.97</div>
          <div class="text-green-600 text-xs font-semibold">+0.22%</div>
        </div>
        <div class="bg-white rounded-lg p-3 text-center">
          <div class="text-slate-500 text-xs">深成指</div>
          <div class="text-lg font-bold text-slate-900">15704.71</div>
          <div class="text-green-600 text-xs font-semibold">+0.73%</div>
        </div>
        <div class="bg-white rounded-lg p-3 text-center">
          <div class="text-slate-500 text-xs">创业板指</div>
          <div class="text-lg font-bold text-slate-900">4122.99</div>
          <div class="text-green-600 text-xs font-semibold">+1.65%</div>
        </div>
        <div class="bg-white rounded-lg p-3 text-center">
          <div class="text-slate-500 text-xs">成交额</div>
          <div class="text-lg font-bold text-slate-900">3.13万亿</div>
          <div class="text-slate-400 text-xs">存量博弈</div>
        </div>
        <div class="bg-white rounded-lg p-3 text-center">
          <div class="text-slate-500 text-xs">美股走势</div>
          <div class="text-lg font-bold text-red-600">集体收跌</div>
          <div class="text-red-500 text-xs">道指-1.21%</div>
        </div>
      </div>
    </div>

    <h4 class="font-bold text-slate-800 mt-6 mb-3">宏观核心逻辑</h4>
    <ul class="space-y-2">
      <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>中美AI资本开保持续高增：</strong>Alphabet 2026年资本支出预计1800-1900亿美元，2027年将"显著"增加；DeepSeek首轮融资估值最高590亿美元，腾讯、宁德时代将成为DeepSeek最大外部投资者。</span>
      </li>
      <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>美国PMI数据强劲：</strong>5月美国制造业PMI为54%，创2022年6月以来最高，AI领域投资增加是主要驱动力。</span>
      </li>
      <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>美联储政策转向：</strong>互换市场计价年内加息概率超80%，10年期美债收益率逼近4.5%。6月FOMC会议（沃什首秀）为关键观察窗口。</span>
      </li>
      <li class="py-2 border-b border-slate-100 last:border-0 flex items-start">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
        <span><strong>中东局势扰动油气价格：</strong>霍尔木兹海峡通行不确定性推升国际油价，2026年2月底以来最大涨幅超过60%。</span>
      </li>
    </ul>

    <h3 id="b_sec2" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">市场情绪与资金面</h3>

    <div class="bg-amber-50 border-l-4 border-amber-500 p-5 my-5 rounded-r-xl">
      <h4 class="text-amber-800 font-bold mb-3 flex items-center">
        <span class="text-xl mr-2">⚡</span>资金面关键信号
      </h4>
      <ul class="space-y-2 text-amber-900 text-sm">
        <li>市场呈现<strong>存量博弈</strong>特征，资金高度聚焦电子、通信、煤炭等泛科技及高端制造赛道</li>
        <li>超大单、大单资金从电子、计算机等高成长板块撤离，<strong>小单资金逆势净流入</strong></li>
        <li>拥挤度指标持续高于<strong>50%</strong>，流动性分化加剧</li>
        <li>两融余额约2.9万亿元，融资余额占流通市值比重约2.8%</li>
      </ul>
    </div>

    <h3 id="b_sec3" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">仓位与策略建议</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">券商</th>
            <th class="px-4 py-3 text-left">核心观点</th>
            <th class="px-4 py-3 text-left">配置方向</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">山西证券</td>
            <td class="px-4 py-3">防守为先，静待时机</td>
            <td class="px-4 py-3">向高股息资产和低估值蓝筹倾斜</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">东海证券</td>
            <td class="px-4 py-3">震荡中需适当谨慎</td>
            <td class="px-4 py-3">等待技术条件充分修复</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">中银证券</td>
            <td class="px-4 py-3">券商板块PB低于近十年10%分位</td>
            <td class="px-4 py-3">配置性价比突出</td>
          </tr>
        </tbody>
      </table>
    </div>

    <blockquote class="border-l-4 border-blue-500 bg-slate-50 rounded-r-xl p-4 my-4 text-slate-700">
      <strong>技术面：</strong>上证指数4084点附近，60日均线形成支撑，但短期均线仍为空头排列。AI算力产业链（交换芯片、光模块、PCB上游材料）仍是核心主线。
    </blockquote>

    <!-- 二、行业共识推荐 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-green-600 rounded-full mr-3"></span>二、行业共识推荐</h2>

    <h3 id="b_sec4" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">行业共识推荐</h3>

    <h4 class="font-bold text-slate-800 mt-5 mb-3 flex items-center">
      <span class="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs mr-2">高频推荐</span>
      被 3 家及以上券商推荐的行业
    </h4>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">行业</th>
            <th class="px-4 py-3 text-center">推荐次数</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
            <th class="px-4 py-3 text-left">推荐券商</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">半导体/AI算力硬件</td>
            <td class="px-4 py-3 text-center font-bold text-green-800">6次</td>
            <td class="px-4 py-3 text-sm">韬定律引领芯片新路径；Scaleup超节点爆发驱动交换芯片需求；国产替代加速；光模块景气延续</td>
            <td class="px-4 py-3 text-xs">东兴、开源、国信、山西、东吴、东海</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">通信/光通信</td>
            <td class="px-4 py-3 text-center font-bold text-green-800">5次</td>
            <td class="px-4 py-3 text-sm">交换芯片从配角变主角，与GPU配比大幅提升；硅光技术量产；光模块需求爆发</td>
            <td class="px-4 py-3 text-xs">东兴、开源、国信、山西、东海</td>
          </tr>
          <tr class="bg-green-50 hover:bg-green-100 transition-colors">
            <td class="px-4 py-3 font-bold text-green-900">医药/创新药</td>
            <td class="px-4 py-3 text-center font-bold text-green-800">4次</td>
            <td class="px-4 py-3 text-sm">ASCO年会中国创新药数据亮眼；信达生物与辉瑞达成105亿美元BD合作；FDA批准全球首款个性化MRD检测</td>
            <td class="px-4 py-3 text-xs">东海、国信、华源、中银</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">化工/氟化工</td>
            <td class="px-4 py-3 text-center font-bold text-blue-800">3次</td>
            <td class="px-4 py-3 text-sm">制冷剂配额约束持续收紧，三代制冷剂供需紧平衡；PTFE有望应用于英伟达M10 CCL材料</td>
            <td class="px-4 py-3 text-xs">国信、开源、山西</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">煤炭/能源</td>
            <td class="px-4 py-3 text-center font-bold text-blue-800">3次</td>
            <td class="px-4 py-3 text-sm">山西安监升级导致供给收紧；中东冲突推升油价中枢上移；夏季用电高峰提前到来</td>
            <td class="px-4 py-3 text-xs">第一创业、国信、中银</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">电力设备/新能源</td>
            <td class="px-4 py-3 text-center font-bold text-blue-800">3次</td>
            <td class="px-4 py-3 text-sm">非化石能源电力消费核算指南出台，绿证需求扩容；风机海外订单饱满；储能配储成为AI数据中心"必选项"</td>
            <td class="px-4 py-3 text-xs">华源、国信、第一创业</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4 class="font-bold text-slate-800 mt-5 mb-3 flex items-center">
      <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs mr-2">关注推荐</span>
      被 2 家券商推荐的行业
    </h4>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-700 text-white">
          <tr>
            <th class="px-4 py-3 text-left">行业</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
            <th class="px-4 py-3 text-left">推荐券商</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">地产/城市更新</td>
            <td class="px-4 py-3 text-sm">城市更新"十五五"规划发布，允许专项债用作项目资本金；REITs退出通道打通</td>
            <td class="px-4 py-3 text-xs">开源、万联</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">汽车</td>
            <td class="px-4 py-3 text-sm">比亚迪5月海外销量首破16万辆；智驾及闪充技术加速上车</td>
            <td class="px-4 py-3 text-xs">开源、东海</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">PCB上游材料</td>
            <td class="px-4 py-3 text-sm">建滔CCL年内第四次提价；电子布、HVLP铜箔供需缺口持续</td>
            <td class="px-4 py-3 text-xs">山西、国信</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">保险</td>
            <td class="px-4 py-3 text-sm">低利率环境下存款搬家利好保险；P/EV估值处于历史低位</td>
            <td class="px-4 py-3 text-xs">国信、中银</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">传媒/游戏</td>
            <td class="px-4 py-3 text-sm">游戏板块业绩大幅回升，AI赋能持续深化</td>
            <td class="px-4 py-3 text-xs">万联、开源</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-slate-50 rounded-xl p-5 my-5">
      <h4 class="font-bold text-slate-800 mb-3">行业轮动方向</h4>
      <ul class="space-y-2 text-sm">
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong>资金从拥挤的成长股流向防御板块：</strong>山西证券明确指出资金集中于高股息防御板块（公用事业、煤炭）</span>
        </li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong>AI硬件产业链内部轮动：</strong>从GPU向交换芯片、光模块、PCB材料等延伸</span>
        </li>
        <li class="py-1.5 border-b border-slate-100 last:border-0 flex items-start">
          <span class="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
          <span><strong>医药板块关注创新药出海和骨科耗材续标</strong></span>
        </li>
      </ul>
    </div>

    <!-- 三、金股/个股共识 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-purple-600 rounded-full mr-3"></span>三、金股/个股共识</h2>

    <h3 id="b_sec5" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">金股/个股共识</h3>

    <h4 class="font-bold text-slate-800 mt-5 mb-3">被 2 家券商同时推荐的个股</h4>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-slate-900 text-white">
          <tr>
            <th class="px-4 py-3 text-left">股票</th>
            <th class="px-4 py-3 text-center">代码</th>
            <th class="px-4 py-3 text-center">次数</th>
            <th class="px-4 py-3 text-left">推荐券商</th>
            <th class="px-4 py-3 text-left">核心逻辑</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">杰瑞股份</td>
            <td class="px-4 py-3 text-center text-sm">002353</td>
            <td class="px-4 py-3 text-center font-bold">2次</td>
            <td class="px-4 py-3 text-xs">东吴（买入）x2天</td>
            <td class="px-4 py-3 text-sm">前瞻性布局浮式核能，与中核海洋共建核能浮式发电平台；燃气轮机订单持续兑现，SMR强化中长期技术储备</td>
          </tr>
          <tr class="bg-purple-50 hover:bg-purple-100 transition-colors">
            <td class="px-4 py-3 font-bold text-purple-900">盛科通信</td>
            <td class="px-4 py-3 text-center text-sm">688702</td>
            <td class="px-4 py-3 text-center font-bold">2次</td>
            <td class="px-4 py-3 text-xs">山西（买入）、开源（推荐）</td>
            <td class="px-4 py-3 text-sm">国产以太网交换芯片龙头，OISA生态核心卡位玩家；Scaleup超节点需求爆发，下半年业绩加速</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">比亚迪</td>
            <td class="px-4 py-3 text-center text-sm">002594</td>
            <td class="px-4 py-3 text-center font-bold">2次</td>
            <td class="px-4 py-3 text-xs">开源（买入）、东海（关注）</td>
            <td class="px-4 py-3 text-sm">5月海外销量首破16万辆，国内销量环比+19.8%；智驾芯片"璇玑A3"量产</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">羚锐制药</td>
            <td class="px-4 py-3 text-center text-sm">600285</td>
            <td class="px-4 py-3 text-center font-bold">2次</td>
            <td class="px-4 py-3 text-xs">东海（买入）x2天</td>
            <td class="px-4 py-3 text-sm">业绩稳健增长，毛利率分红率双升；银谷制药并表增厚业绩；贴剂产品毛利率80%+</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">中国核电</td>
            <td class="px-4 py-3 text-center text-sm">601985</td>
            <td class="px-4 py-3 text-center font-bold">2次</td>
            <td class="px-4 py-3 text-xs">华源（推荐）、国信（推荐）</td>
            <td class="px-4 py-3 text-sm">核电电力消费量以电能量交易认定；绿证需求扩容受益</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">中国广核</td>
            <td class="px-4 py-3 text-center text-sm">003816</td>
            <td class="px-4 py-3 text-center font-bold">2次</td>
            <td class="px-4 py-3 text-xs">华源（推荐）、国信（推荐）</td>
            <td class="px-4 py-3 text-sm">核电运营商，绿证需求扩容受益标的</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4 class="font-bold text-slate-800 mt-5 mb-3">重点新关注标的</h4>

    <div class="grid gap-3 my-4">
      <div class="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
        <div class="flex items-start justify-between">
          <div>
            <span class="font-bold text-slate-900">松发股份</span>
            <span class="text-xs text-slate-400 ml-2">603268</span>
            <span class="ml-2 bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full">东吴 增持</span>
          </div>
        </div>
        <p class="text-sm text-slate-600 mt-2">恒力重工造船资产注入，全球第三大船厂，在手订单排至2030年</p>
      </div>
      <div class="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
        <span class="font-bold text-slate-900">汇量科技</span>
        <span class="text-xs text-slate-400 ml-2">01860.HK</span>
        <span class="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">开源 买入</span>
        <p class="text-sm text-slate-600 mt-2">Q1营收+32%，AI Infra支撑加速拓展IAP及非游品类</p>
      </div>
      <div class="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
        <span class="font-bold text-slate-900">广和通</span>
        <span class="text-xs text-slate-400 ml-2">300638</span>
        <span class="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">山西 买入</span>
        <p class="text-sm text-slate-600 mt-2">拟收购航盛电子拓展车载全栈方案；AI模组+具身智能新品频发</p>
      </div>
      <div class="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
        <span class="font-bold text-slate-900">美格智能</span>
        <span class="text-xs text-slate-400 ml-2">002881</span>
        <span class="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">山西 买入</span>
        <p class="text-sm text-slate-600 mt-2">智能模组转型领先，高通核心合作伙伴；AI盒子等端侧部署新场景</p>
      </div>
      <div class="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
        <span class="font-bold text-slate-900">绿联科技</span>
        <span class="text-xs text-slate-400 ml-2">301606</span>
        <span class="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">国信 优于大市</span>
        <p class="text-sm text-slate-600 mt-2">消费级NAS全球第一品牌，向AI家庭数据中枢进化</p>
      </div>
      <div class="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
        <span class="font-bold text-slate-900">宁德时代</span>
        <span class="text-xs text-slate-400 ml-2">300750</span>
        <span class="ml-2 bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">中银 金股重点关注</span>
        <p class="text-sm text-slate-600 mt-2">储能+动力电池双轮驱动，DeepSeek外部投资者</p>
      </div>
      <div class="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
        <span class="font-bold text-slate-900">中国石油 / 中国海油</span>
        <span class="text-xs text-slate-400 ml-2">601857 / 600938</span>
        <span class="ml-2 bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">中银 推荐</span>
        <p class="text-sm text-slate-600 mt-2">能源央企价值重估，中东冲突受益</p>
      </div>
    </div>

    <h3 id="b_sec6" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">6月金股组合</h3>

    <div class="grid md:grid-cols-2 gap-5 my-5">
      <div class="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-5 border border-red-100">
        <h4 class="font-bold text-red-800 mb-3 flex items-center">
          <span class="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center mr-2 text-sm font-bold">中</span>
          中银证券6月金股组合
        </h4>
        <div class="space-y-1.5 text-sm text-red-900">
          <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mr-2"></span><strong>招商轮船（重点关注）</strong></div>
          <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mr-2"></span>中国国航</div>
          <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mr-2"></span>卫星化学</div>
          <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mr-2"></span>雅克科技</div>
          <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mr-2"></span><strong>宁德时代</strong></div>
          <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mr-2"></span>燕京啤酒</div>
          <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mr-2"></span>首旅酒店</div>
          <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mr-2"></span>沪电股份</div>
          <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-red-500 mr-2"></span>深南电路</div>
        </div>
      </div>
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3 flex items-center">
          <span class="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-2 text-sm font-bold">东</span>
          东兴证券6月金股组合
        </h4>
        <div class="space-y-1.5 text-sm text-blue-900">
          <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>宝武镁业</div>
          <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>北京利尔</div>
          <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span><strong>兴森科技</strong></div>
          <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span><strong>亨通光电</strong></div>
          <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>安井食品</div>
          <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>火炬电子</div>
          <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>金诚信</div>
          <div class="flex items-center"><span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>日联科技</div>
        </div>
      </div>
    </div>

    <!-- 四、各券商晨报要点 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-slate-700 rounded-full mr-3"></span>四、各券商晨报要点</h2>

    <h3 id="b_sec7" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">各券商晨报要点</h3>

    <!-- 东吴证券 -->
    <div class="bg-white border border-slate-200 rounded-xl p-5 my-4 hover:border-slate-300 transition-colors">
      <h4 class="font-bold text-slate-800 mb-2">1. 东吴证券（2026-06-04）</h4>
      <p class="text-sm text-slate-600 mb-3"><strong>核心观点：</strong>AI对GDP拉动约0.3-0.5个百分点；信用扩张中期内动能积聚</p>
      <div class="text-sm text-slate-700 space-y-1">
        <p><strong>重点推荐：</strong>松发股份（603268）首次覆盖"增持"，全球第三大船厂，2026-2028年PE 18/10/8倍；杰瑞股份（002353）维持"买入"，布局浮式核能</p>
        <p><strong>关注方向：</strong>AI相关出口、半导体国产替代</p>
      </div>
    </div>

    <!-- 开源证券 -->
    <div class="bg-white border border-slate-200 rounded-xl p-5 my-4 hover:border-slate-300 transition-colors">
      <h4 class="font-bold text-slate-800 mb-2">2. 开源证券（2026-06-04）</h4>
      <p class="text-sm text-slate-600 mb-3"><strong>核心观点：</strong>国际产投经验借鉴国内平台转型</p>
      <div class="text-sm text-slate-700 space-y-1">
        <p><strong>重点推荐：</strong>比亚迪（002594）维持"买入"，海外销量持续高增；汇量科技（01860.HK）维持"买入"，AI Infra驱动高增；骆驼股份（601311）维持"买入"，铅酸稳现金流+锂电钠电布局</p>
        <p><strong>关注方向：</strong>交换芯片、城市更新</p>
      </div>
    </div>

    <!-- 东兴证券 -->
    <div class="bg-white border border-slate-200 rounded-xl p-5 my-4 hover:border-slate-300 transition-colors">
      <h4 class="font-bold text-slate-800 mb-2">3. 东兴证券（2026-06-03）</h4>
      <p class="text-sm text-slate-600 mb-3"><strong>核心观点：</strong>韬定律引领半导体产业新路径，关注设备/材料/封装/EDA全链条</p>
      <div class="text-sm text-slate-700 space-y-1">
        <p><strong>金股组合：</strong>宝武镁业、北京利尔、兴森科技、亨通光电、安井食品、火炬电子、金诚信、日联科技</p>
        <p><strong>关注事件：</strong>SpaceX拟IPO募资750亿美元；腾讯微信AI助手即将推出</p>
      </div>
    </div>

    <!-- 山西证券 -->
    <div class="bg-white border border-slate-200 rounded-xl p-5 my-4 hover:border-slate-300 transition-colors">
      <h4 class="font-bold text-slate-800 mb-2">4. 山西证券（2026-06-04）</h4>
      <p class="text-sm text-slate-600 mb-3"><strong>核心观点：</strong>防守为先，静待时机；资金面趋紧+估值分化</p>
      <div class="text-sm text-slate-700 space-y-1">
        <p><strong>重点推荐：</strong>盛科通信（688702）首次覆盖"买入"，Scaleup超节点需求爆发；广和通（300638）维持"买入"，拟收购航盛电子拓展车载方案；美格智能（002881）维持"买入"，AI模组转型领先；PCB上游材料：建滔CCL第四次提价，关注圣泉集团、生益科技等</p>
        <p><strong>关注方向：</strong>CLDN18.2 ADC创新药、化学原料</p>
      </div>
    </div>

    <!-- 国信证券 -->
    <div class="bg-white border border-slate-200 rounded-xl p-5 my-4 hover:border-slate-300 transition-colors">
      <h4 class="font-bold text-slate-800 mb-2">5. 国信证券（2026-06-04）</h4>
      <p class="text-sm text-slate-600 mb-3"><strong>核心观点：</strong>低利率时代下高现金流资产具备长期配置价值；保险股否极泰来</p>
      <div class="text-sm text-slate-700 space-y-1">
        <p><strong>重点推荐：</strong>保险股（中国太保、中国财险）；氟化工（巨化股份、东岳集团、三美股份）；风机海外2027年业绩丰收期；绿联科技（301606）首次覆盖"优于大市"，目标价87.8-93.9元；厦门钨业、华润微、士兰微均维持"优于大市"</p>
        <p><strong>关注方向：</strong>红利资产、港股硬科技、医药MRD检测</p>
      </div>
    </div>

    <!-- 万联证券 -->
    <div class="bg-white border border-slate-200 rounded-xl p-5 my-4 hover:border-slate-300 transition-colors">
      <h4 class="font-bold text-slate-800 mb-2">6. 万联证券（2026-06-04）</h4>
      <p class="text-sm text-slate-600 mb-3"><strong>核心观点：</strong>A股三大指数集体收涨，通信、煤炭、电子领涨</p>
      <div class="text-sm text-slate-700 space-y-1">
        <p><strong>重点推荐：</strong>妙可蓝多（600882）首次覆盖"增持"，原制奶酪国产替代</p>
        <p><strong>关注方向：</strong>传媒行业业绩回升、奶酪国产替代</p>
      </div>
    </div>

    <!-- 第一创业证券 -->
    <div class="bg-white border border-slate-200 rounded-xl p-5 my-4 hover:border-slate-300 transition-colors">
      <h4 class="font-bold text-slate-800 mb-2">7. 第一创业证券（2026-06-04）</h4>
      <p class="text-sm text-slate-600 mb-3"><strong>核心观点：</strong>美国PMI超预期，AI投资增加是主要驱动力；Google/DeepSeek融资活跃</p>
      <div class="text-sm text-slate-700 space-y-1">
        <p><strong>关注方向：</strong>第三代半导体（GaN/SiC）、工程机械涨价、3D打印机出口翻倍</p>
      </div>
    </div>

    <!-- 东海证券 -->
    <div class="bg-white border border-slate-200 rounded-xl p-5 my-4 hover:border-slate-300 transition-colors">
      <h4 class="font-bold text-slate-800 mb-2">8. 东海证券（2026-06-04）</h4>
      <p class="text-sm text-slate-600 mb-3"><strong>核心观点：</strong>上证指数延续收涨，但多空分歧明显；震荡中需适当谨慎</p>
      <div class="text-sm text-slate-700 space-y-1">
        <p><strong>重点推荐：</strong>医药创新药：科伦药业、众生药业、贝达药业、羚锐制药等</p>
        <p><strong>关注方向：</strong>半导体/通信设备技术修复、创新药国际化</p>
      </div>
    </div>

    <!-- 中银证券 -->
    <div class="bg-white border border-slate-200 rounded-xl p-5 my-4 hover:border-slate-300 transition-colors">
      <h4 class="font-bold text-slate-800 mb-2">9. 中银证券（2026-06-03）</h4>
      <p class="text-sm text-slate-600 mb-3"><strong>核心观点：</strong>中东冲突扰动油气供应链；券商板块PB低于近十年10%分位</p>
      <div class="text-sm text-slate-700 space-y-1">
        <p><strong>金股组合：</strong>中国国航、招商轮船（重点关注）、卫星化学、雅克科技、宁德时代、燕京啤酒、首旅酒店、沪电股份、深南电路</p>
        <p><strong>重点推荐：</strong>石油石化（中国石油、中国海油、中国石化）；油服（海油发展、中海油服、杰瑞股份）；骨科耗材（三友医疗、威高骨科、大博医疗）；券商（中信证券、国泰海通、华泰证券）</p>
      </div>
    </div>

    <!-- 华源证券 -->
    <div class="bg-white border border-slate-200 rounded-xl p-5 my-4 hover:border-slate-300 transition-colors">
      <h4 class="font-bold text-slate-800 mb-2">10. 华源证券（2026-06-04）</h4>
      <p class="text-sm text-slate-600 mb-3"><strong>核心观点：</strong>非化石能源电力消费核算指南出台，绿证需求实质性扩容</p>
      <div class="text-sm text-slate-700 space-y-1">
        <p><strong>重点推荐：</strong>绿电运营商（龙源电力H、大唐新能源、中广核新能源、新天绿色能源）；核电运营商（中国核电、中国广核）；医药（福瑞医科300049、信立泰002294）均维持"买入"</p>
      </div>
    </div>

    <!-- 金元证券 -->
    <div class="bg-white border border-slate-200 rounded-xl p-5 my-4 hover:border-slate-300 transition-colors">
      <h4 class="font-bold text-slate-800 mb-2">11. 金元证券（2026-06-03）</h4>
      <p class="text-sm text-slate-600 mb-3"><strong>关注事件：</strong>英伟达Spectrum-X硅光技术量产；腾讯云下调DeepSeek价格；微信AI助手即将推出</p>
      <div class="text-sm text-slate-700 space-y-1">
        <p><strong>关注方向：</strong>光通信、AI算力、3D打印出口</p>
      </div>
    </div>

    <!-- 五、风险提示 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-red-600 rounded-full mr-3"></span>五、风险提示</h2>

    <h3 id="b_sec8" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">共同风险提示</h3>

    <div class="overflow-x-auto my-6">
      <table class="min-w-full border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <thead class="bg-red-700 text-white">
          <tr>
            <th class="px-4 py-3 text-left">风险类型</th>
            <th class="px-4 py-3 text-left">具体内容</th>
            <th class="px-4 py-3 text-left">提及券商</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-slate-100">
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">地缘政治风险</td>
            <td class="px-4 py-3 text-sm">中东冲突（霍尔木兹海峡通行）、美伊谈判、中美贸易摩擦</td>
            <td class="px-4 py-3 text-xs">中银、国信、东海、第一创业、东兴</td>
          </tr>
          <tr class="bg-red-50 hover:bg-red-100 transition-colors">
            <td class="px-4 py-3 font-bold text-red-900">美联储政策风险</td>
            <td class="px-4 py-3 text-sm">加息概率超80%，6月FOMC沃什首秀鹰派倾向</td>
            <td class="px-4 py-3 text-xs">东吴、山西、国信</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">AI资本开支不及预期</td>
            <td class="px-4 py-3 text-sm">算力投入放缓影响产业链景气度</td>
            <td class="px-4 py-3 text-xs">东吴、开源、山西</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">行业竞争加剧</td>
            <td class="px-4 py-3 text-sm">科技赛道拥挤度高、估值回调压力</td>
            <td class="px-4 py-3 text-xs">山西、东海、开源</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">原材料价格波动</td>
            <td class="px-4 py-3 text-sm">存储芯片涨价、油价波动、大宗商品价格波动</td>
            <td class="px-4 py-3 text-xs">山西、第一创业、国信</td>
          </tr>
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-4 py-3 font-bold">政策不确定性</td>
            <td class="px-4 py-3 text-sm">集采政策、绿证政策落地不及预期、关税政策</td>
            <td class="px-4 py-3 text-xs">东海、华源、开源</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 id="b_sec9" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">关键事件跟踪</h3>

    <div class="grid md:grid-cols-2 gap-3 my-5">
      <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl">
        <div class="text-xs text-red-500 font-bold mb-1">6月5日</div>
        <p class="text-sm text-red-900 font-bold">美伊谈判</p>
        <p class="text-xs text-red-700 mt-1">浓缩铀僵局将叠加滞胀形成双重压制</p>
      </div>
      <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
        <div class="text-xs text-amber-500 font-bold mb-1">6月12日</div>
        <p class="text-sm text-amber-900 font-bold">SpaceX IPO</p>
        <p class="text-xs text-amber-700 mt-1">募资750亿美元，估值1.77万亿美元</p>
      </div>
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
        <div class="text-xs text-blue-500 font-bold mb-1">6月18日</div>
        <p class="text-sm text-blue-900 font-bold">FOMC会议</p>
        <p class="text-xs text-blue-700 mt-1">沃什首秀，点阵图与利率路径定调</p>
      </div>
      <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
        <div class="text-xs text-green-500 font-bold mb-1">5.29-6.2</div>
        <p class="text-sm text-green-900 font-bold">ASCO 2026年会</p>
        <p class="text-xs text-green-700 mt-1">中国创新药企数据密集发布</p>
      </div>
    </div>

    <!-- 六、买方策略建议 -->
    <h2 class="text-2xl font-black text-slate-900 mt-10 mb-6 flex items-center"><span class="w-2 h-8 bg-indigo-600 rounded-full mr-3"></span>六、买方策略建议</h2>

    <h3 id="b_sec10" class="text-xl font-black text-slate-900 mt-8 mb-4 pb-2 border-b border-slate-200">综合投资建议</h3>

    <div class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 my-5 border border-indigo-100">
      <h4 class="font-bold text-indigo-800 text-lg mb-4">总体定位：防御为主，结构中寻找确定性</h4>

      <div class="space-y-4">
        <div>
          <h5 class="font-bold text-indigo-700 mb-2">1. 仓位管理</h5>
          <p class="text-sm text-indigo-900">建议中等仓位（60-70%），控制单一赛道集中度。市场处于存量博弈阶段，拥挤度过高的成长板块需警惕回调。</p>
        </div>

        <div>
          <h5 class="font-bold text-indigo-700 mb-2">2. 配置方向（按优先级排序）</h5>

          <div class="bg-white rounded-lg p-4 my-3 border border-indigo-100">
            <h6 class="font-bold text-green-700 mb-2 flex items-center">
              <span class="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs mr-2">第一优先</span>
              AI算力硬件产业链
            </h6>
            <ul class="text-sm text-slate-700 space-y-1">
              <li><strong>交换芯片：</strong>盛科通信（688702）-- 国产替代+Scaleup超节点双重驱动</li>
              <li><strong>光模块/光通信：</strong>亨通光电、中际旭创（关注）</li>
              <li><strong>PCB上游材料：</strong>建滔CCL持续提价，关注圣泉集团、生益科技</li>
              <li><strong>半导体设备/材料：</strong>韬定律受益标的（北方华创、中微公司、拓荆科技）</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-4 my-3 border border-indigo-100">
            <h6 class="font-bold text-blue-700 mb-2 flex items-center">
              <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs mr-2">第二优先</span>
              高股息防御资产
            </h6>
            <ul class="text-sm text-slate-700 space-y-1">
              <li><strong>煤炭：</strong>供给收紧（山西安监升级）+需求旺季提前</li>
              <li><strong>公用事业：</strong>绿证需求扩容，推荐中国核电、中国广核</li>
              <li><strong>保险：</strong>P/EV估值历史低位，否极泰来</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-4 my-3 border border-indigo-100">
            <h6 class="font-bold text-purple-700 mb-2 flex items-center">
              <span class="bg-purple-100 text-purple-800 px-2 py-0.5 rounded text-xs mr-2">第三优先</span>
              医药创新药
            </h6>
            <ul class="text-sm text-slate-700 space-y-1">
              <li>ASCO年会催化，关注BD交易活跃的创新药企</li>
              <li>重点：科伦药业、众生药业、贝达药业、羚锐制药</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-4 my-3 border border-indigo-100">
            <h6 class="font-bold text-orange-700 mb-2 flex items-center">
              <span class="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs mr-2">第四优先</span>
              油气产业链
            </h6>
            <ul class="text-sm text-slate-700 space-y-1">
              <li><strong>能源央企价值重估：</strong>中国石油、中国海油</li>
              <li><strong>油服高景气：</strong>海油发展、杰瑞股份</li>
            </ul>
          </div>
        </div>

        <div>
          <h5 class="font-bold text-red-700 mb-2">3. 需要规避的方向</h5>
          <ul class="text-sm text-red-800 space-y-1">
            <li>交易拥挤度>50%的科技成长板块（短期超大单资金持续流出）</li>
            <li>估值处于历史高分位（>95%）的指数</li>
            <li>地产链（虽有政策催化但销售恢复仍不及预期）</li>
          </ul>
        </div>

        <div>
          <h5 class="font-bold text-indigo-700 mb-2">4. 关键时间节点跟踪</h5>
          <ul class="text-sm text-slate-700 space-y-1">
            <li><strong>短期（1-2周）：</strong>关注FOMC会议、美伊谈判结果</li>
            <li><strong>中期（1个月）：</strong>关注6月核心CPI数据、AI产业催化事件</li>
            <li><strong>长期（3个月）：</strong>关注国产超节点放量进度、绿证政策落地效果</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="text-center text-xs text-slate-400 mt-8 pt-4 border-t border-slate-200">
      本报告基于50份券商晨报PDF文件综合分析，涵盖11家券商的晨会纪要。数据截止2026年6月4日。<br>
      风险提示：本报告仅供参考，不构成投资建议。市场有风险，投资需谨慎。
    </div>

  </div>`;
}
