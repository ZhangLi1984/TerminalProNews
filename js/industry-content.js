// ==========================================
// 文档二：行业汇总 - 内容渲染
// ==========================================

/**
 * 渲染高胜率赛道部分
 */
function renderHighWinRateTracks() {
  return `
    <section id="i_sec1" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '一、核心高胜率赛道：共识与验证',
        icon: createIcon('Anchor', 'w-5 h-5 text-blue-700')
      })}
      <p class="text-sm text-slate-800 font-bold">汇集逻辑清晰、数据强劲，且市场已逐步形成共识的领域。</p>

      <div class="space-y-5">
        ${TrackCard({
          title: 'AI 算力基础设施',
          logic: 'Token 调用爆发增长，三周激增 127% 首超美国，算力缺口短期无法弥补。',
          stocks: '海光信息、寒武纪、中际旭创',
          children: `
            <ul class="space-y-2 text-sm text-slate-800 font-bold">
              <li class="flex"><span class="text-blue-600 mr-2">•</span> 中国模型周调用量冲高至 5.16 万亿，全球 Top5 占四席。</li>
              <li class="flex"><span class="text-blue-600 mr-2">•</span> 液冷渗透率有望从 8% 升至 35%。英伟达全年营收指引大增。</li>
            </ul>
            <div class="mt-4 text-xs bg-slate-100 p-3 rounded-lg border border-slate-300 flex items-center">
              ${createIcon('Search', 'w-4 h-4 text-slate-700 mr-1.5')}
              <span class="text-slate-900 font-bold"><span class="font-black text-slate-900">证伪跟踪：</span>紧盯算力交付能力、GTC 大会新品。</span>
            </div>
          `
        })}

        ${TrackCard({
          title: '新能源金属 (锂/镍/钴)',
          logic: '资源民族主义抬头 + 主产国出口管制，供给收缩逻辑刚性。',
          stocks: '华友钴业、盐湖股份、大中矿业',
          children: `
            <ul class="space-y-2 text-sm text-slate-800 font-bold">
              <li class="flex"><span class="text-emerald-600 mr-2">•</span> 津巴布韦暂停所有锂原矿出口 (占中国进口 15.5%)。</li>
              <li class="flex"><span class="text-emerald-600 mr-2">•</span> 印尼镍矿 2026 年配额同比大幅下降 71%。</li>
              <li class="flex"><span class="text-emerald-600 mr-2">•</span> 刚果（金）钴出口禁令延续，价格累计暴涨 185%。</li>
            </ul>
          `
        })}

        ${TrackCard({
          title: '油运 (VLCC)',
          logic: '地缘冲突引爆运价，海峡封锁风险带来情绪与货量双重利好。',
          stocks: '中远海能、招商轮船、招商南油',
          children: `
            <ul class="space-y-2 text-sm text-slate-800 font-bold">
              <li class="flex"><span class="text-orange-600 mr-2">•</span> 霍尔木兹海峡承载全球 1/5 油气运输量，面临封锁威胁。</li>
              <li class="flex"><span class="text-orange-600 mr-2">•</span> VLCC TCE 指数周环比大幅上涨 30.2%。</li>
            </ul>
          `
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染底仓资产部分
 */
function renderCoreAssets() {
  return `
    <section id="i_sec_base" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '二、高确定性与景气延续：底仓资产',
        icon: createIcon('Layers', 'w-5 h-5 text-emerald-700')
      })}

      <div class="grid md:grid-cols-3 gap-5">
        ${InteractiveCard({
          className: '!p-5 border-l-4 border-l-emerald-600',
          children: `
            <h4 class="font-black text-slate-900 mb-1">快递物流</h4>
            <p class="text-sm text-slate-800 font-bold mb-3">反内卷带动价格上涨。义乌春节单日破新高。</p>
            <p class="text-sm font-black text-emerald-800">圆通速递、中通、顺丰</p>
          `
        })}
        ${InteractiveCard({
          className: '!p-5 border-l-4 border-l-emerald-600',
          children: `
            <h4 class="font-black text-slate-900 mb-1">商用车</h4>
            <p class="text-sm text-slate-800 font-bold mb-3">更新 + 出口高增。1 月重卡销量同比 +46%，出口 +23.6%。</p>
            <p class="text-sm font-black text-emerald-800">潍柴动力、中国重汽</p>
          `
        })}
        ${InteractiveCard({
          className: '!p-5 border-l-4 border-l-emerald-600',
          children: `
            <h4 class="font-black text-slate-900 mb-1">游戏</h4>
            <p class="text-sm text-slate-800 font-bold mb-3">版号供给稳定 + 出海升至 38.5%。端游收入增 23%。</p>
            <p class="text-sm font-black text-emerald-800">腾讯、网易、神州泰岳</p>
          `
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染二阶博弈部分
 */
function renderSecondaryPlays() {
  return `
    <section id="i_sec2" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '三、跨赛道暗线与产业链二阶博弈',
        icon: createIcon('Crosshair', 'w-5 h-5 text-indigo-700')
      })}

      <div class="grid md:grid-cols-2 gap-5">
        ${SecondaryPlayCard({
          event: '中东冲突 → 化工品供给收缩',
          result: '甲醇/乙二醇/尿素',
          logic: '海峡封锁切断伊朗化工出口，缺口推升价格，一体化煤化工获利。',
          cognitive: '市场仅炒油气，对化工供给收缩认知不足。',
          stocks: '华鲁恒升、宝丰能源'
        })}
        ${SecondaryPlayCard({
          event: 'AI 算力紧缺 → 电力需求扩张',
          result: '变压器/特高压设备',
          logic: 'Token 爆发 → 高功率服务器耗电猛增 → 中国电力设备出海与内需双发力。',
          cognitive: '资金聚焦光模块，忽视电力基建刚需。',
          stocks: '平高电气、思源电气'
        })}
        ${SecondaryPlayCard({
          event: '锂镍出口管制 → 资源焦虑',
          result: '固态电池加速落地',
          logic: '传统资源受限倒逼车企加速固态研发（降锂用量）。首个国标 26 年 7 月发布。',
          cognitive: '市场炒作锂价，忽视产业链自救的替代加速。',
          stocks: '厦钨新能、璞泰来'
        })}
        ${SecondaryPlayCard({
          event: '房地产政策底部 → 二手房增',
          result: '房产中介 / 物管',
          logic: '新房成交跌，但核心城市二手房流动性改善。存量时代中介渗透率提升。',
          cognitive: '市场关注房企估值，忽视中介赛道阿尔法。',
          stocks: '贝壳、华润万象生活'
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染困境反转部分
 */
function renderContrarianPlays() {
  return `
    <section id="i_sec3" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '四、预期差与困境反转：逆向挖掘',
        icon: createIcon('Zap', 'w-5 h-5 text-yellow-600')
      })}

      <div class="grid md:grid-cols-3 gap-5">
        ${InteractiveCard({
          className: '!p-6 flex flex-col h-full',
          children: `
            <div class="flex items-center space-x-2 mb-4">
              <span class="p-1.5 bg-pink-100 text-pink-700 rounded-md">${createIcon('TrendingUp', 'w-4 h-4')}</span>
              <h4 class="font-black text-lg text-slate-900">生猪养殖</h4>
            </div>
            <p class="text-sm text-slate-800 font-bold mb-5 flex-grow leading-relaxed">
              <span class="font-black text-white bg-slate-800 px-1.5 py-0.5 rounded mr-1">预期差</span>
              猪价跌破现金成本。一号文件首提产能综合调控，政策转为去产能，反转逻辑强化。
            </p>
            <div class="text-xs font-black text-slate-900 bg-slate-100 p-3 rounded-xl border border-slate-300 mt-auto">
              潜伏：牧原股份、温氏
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-6 flex flex-col h-full',
          children: `
            <div class="flex items-center space-x-2 mb-4">
              <span class="p-1.5 bg-amber-100 text-amber-700 rounded-md">${createIcon('PieChart', 'w-4 h-4')}</span>
              <h4 class="font-black text-lg text-slate-900">白羽鸡</h4>
            </div>
            <p class="text-sm text-slate-800 font-bold mb-5 flex-grow leading-relaxed">
              <span class="font-black text-white bg-slate-800 px-1.5 py-0.5 rounded mr-1">预期差</span>
              法国禽流感或致对华断供种鸡 (占 40%)。缺口推升种苗价格倒逼产能缩减。
            </p>
            <div class="text-xs font-black text-slate-900 bg-slate-100 p-3 rounded-xl border border-slate-300 mt-auto">
              潜伏：益生股份、圣农
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-6 flex flex-col h-full',
          children: `
            <div class="flex items-center space-x-2 mb-4">
              <span class="p-1.5 bg-cyan-100 text-cyan-700 rounded-md">${createIcon('Layers', 'w-4 h-4')}</span>
              <h4 class="font-black text-lg text-slate-900">浮法玻璃</h4>
            </div>
            <p class="text-sm text-slate-800 font-bold mb-5 flex-grow leading-relaxed">
              <span class="font-black text-white bg-slate-800 px-1.5 py-0.5 rounded mr-1">预期差</span>
              大面积亏损推动高窑龄产线冷修。春节后复工需求上升，供给收缩提供价格弹性。
            </p>
            <div class="text-xs font-black text-slate-900 bg-slate-100 p-3 rounded-xl border border-slate-300 mt-auto">
              潜伏：旗滨集团、南玻 A
            </div>
          `
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染大宗商品表格部分
 */
function renderCommoditiesTable() {
  return `
    <section id="i_sec_table1" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '五、大宗商品与周期资源量价监测',
        icon: createIcon('BarChart2', 'w-5 h-5 text-slate-900')
      })}

      ${InteractiveCard({
        className: '!p-0 overflow-hidden',
        children: `
          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm whitespace-nowrap">
              <thead class="bg-slate-100 text-slate-900 font-black border-b border-slate-300">
                <tr>
                  <th class="px-5 py-4">商品名称</th>
                  <th class="px-5 py-4">最新价与趋势</th>
                  <th class="px-5 py-4">供需矛盾</th>
                  <th class="px-5 py-4">关联标的</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 text-slate-800 font-bold">
                ${TableRow2({ name: '布伦特原油', price: '81.57 美元/桶', trend: '↑11.94%', isUp: true, desc: '供给中断风险 vs OPEC 增产', stocks: '中国海油、海能' })}
                ${TableRow2({ name: '碳酸锂', price: '17 万元/吨', trend: '↑19%', isUp: true, desc: '出口暂停 vs 国内产能释放', stocks: '盐湖股份、华友' })}
                ${TableRow2({ name: '钴', price: '46.21 万元/吨', trend: '↑185%', isUp: true, desc: '刚果（金）出口禁令', stocks: '华友钴业、洛钼' })}
                ${TableRow2({ name: 'COMEX 黄金', price: '5280 美元/盎司', trend: '↑18%', isUp: true, desc: '地缘避险 + 降息预期', stocks: '山东黄金、中金' })}
                ${TableRow2({ name: '甲醇', price: '期货大幅高开', trend: '-', desc: '伊朗供给中断风险', stocks: '华鲁恒升、宝丰' })}
                ${TableRow2({ name: '生猪', price: '10.67 元/kg', trend: '↓弱势', isDown: true, desc: '产能过剩 vs 政策调控', stocks: '牧原、温氏股份' })}
                ${TableRow2({ name: '浮法玻璃', price: '1164.6 元/吨', trend: '↑7 元', isUp: true, desc: '供给加速出清', stocks: '旗滨集团、南玻' })}
              </tbody>
            </table>
          </div>
        `
      })}
    </section>
  `;
}

/**
 * 渲染估值监测表格部分
 */
function renderValuationTable() {
  return `
    <section id="i_sec_table2" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '六、关键产业链估值监测',
        icon: createIcon('BarChart2', 'w-5 h-5 text-slate-900')
      })}

      ${InteractiveCard({
        className: '!p-0 overflow-hidden',
        children: `
          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm whitespace-nowrap">
              <thead class="bg-slate-100 text-slate-900 font-black border-b border-slate-300">
                <tr>
                  <th class="px-5 py-4">产业链</th>
                  <th class="px-5 py-4">核心边际变化</th>
                  <th class="px-5 py-4">周期</th>
                  <th class="px-5 py-4">估值/拥挤度</th>
                  <th class="px-5 py-4">跟踪节点</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 text-slate-800 font-bold">
                ${TableRow({ name: 'AI 算力', change: 'Token 爆发三周 +127%', trend: 'up', phase: '繁荣早期', val: '70% (高)', stocks: 'GTC 大会后' })}
                ${TableRow({ name: '光模块', change: '800G 出货预测上调', trend: 'up', phase: '繁荣期', val: '65% (高)', stocks: 'Q2 订单验证' })}
                ${TableRow({ name: '锂矿', change: '津巴布韦出口暂停', trend: 'neutral', phase: '复苏期', val: '40% (低)', stocks: '3 月排产数据' })}
                ${TableRow({ name: '油运', change: 'VLCC TCE+30.2%', trend: 'up', phase: '繁荣期', val: '60% (中)', stocks: '海峡通航情况' })}
                ${TableRow({ name: '生猪养殖', change: '猪价跌破现金成本', trend: 'neutral', phase: '萧条末期', val: '20% (低)', stocks: '能繁母猪存栏' })}
                ${TableRow({ name: '房地产', change: '新房 -79% 二手 +84%', trend: 'down', phase: '萧条期', val: '15% (低)', stocks: '3 月销售数据' })}
              </tbody>
            </table>
          </div>
        `
      })}
    </section>
  `;
}

/**
 * 渲染分歧点说明部分
 */
function renderDivergencePoints() {
  return `
    <section id="i_sec_diff" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '七、预期分歧点说明',
        icon: createIcon('AlertTriangle', 'w-5 h-5 text-orange-600')
      })}

      <div class="grid md:grid-cols-3 gap-5">
        ${InteractiveCard({
          className: '!p-6 bg-orange-50/80 border-orange-200',
          children: `
            <h4 class="font-black text-slate-900 mb-3 text-base">1. 锂价走势分歧</h4>
            <p class="text-sm text-slate-800 font-bold mb-2">
              <span class="font-black text-orange-800">一致预期：</span>出口暂停推升锂价。
            </p>
            <p class="text-sm text-slate-800 font-bold">
              <span class="font-black text-orange-800">独立验证：</span>国内产量释放能否弥补缺口。
            </p>
          `
        })}
        ${InteractiveCard({
          className: '!p-6 bg-orange-50/80 border-orange-200',
          children: `
            <h4 class="font-black text-slate-900 mb-3 text-base">2. 房产底部判断分歧</h4>
            <p class="text-sm text-slate-800 font-bold mb-2">
              <span class="font-black text-orange-800">多空观点：</span>新房跌 vs 二手房活水。
            </p>
            <p class="text-sm text-slate-800 font-bold">
              <span class="font-black text-orange-800">独立判断：</span>等 3 月销售数据验证政策。
            </p>
          `
        })}
        ${InteractiveCard({
          className: '!p-6 bg-orange-50/80 border-orange-200',
          children: `
            <h4 class="font-black text-slate-900 mb-3 text-base">3. 中东冲突持续分歧</h4>
            <p class="text-sm text-slate-800 font-bold mb-2">
              <span class="font-black text-orange-800">多空观点：</span>迅速平息 vs 风险常态化。
            </p>
            <p class="text-sm text-slate-800 font-bold">
              <span class="font-black text-orange-800">独立判断：</span>紧盯霍尔木兹实际通航。
            </p>
          `
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染总结与配置建议部分
 */
function renderSummary() {
  return `
    <section id="i_sec9" class="space-y-6 scroll-mt-24">
      <div class="bg-white rounded-3xl p-6 md:p-8 text-slate-900 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform transition-transform duration-500 hover:scale-[1.01]">
        <h3 class="text-2xl font-black mb-6 flex items-center text-slate-900">
          ${createIcon('PieChart', 'w-6 h-6 mr-2 text-red-600')} 总结与资产配置建议
        </h3>

        <p class="text-base font-bold mb-8 text-slate-800 leading-relaxed bg-slate-50 p-5 rounded-xl border border-slate-200">
          <span class="font-black text-white bg-slate-800 px-2.5 py-1 rounded mr-2 text-sm">核心思路</span>
          以 <span class="text-red-600 font-black border-b border-red-200 pb-0.5">AI 算力</span> 为进攻矛头，
          以 <span class="text-amber-600 font-black border-b border-amber-200 pb-0.5">资源民族主义标的</span> 为防御盾牌，
          以 <span class="text-blue-600 font-black border-b border-blue-200 pb-0.5">困境反转赛道</span> 埋伏潜在 Alpha。
        </p>

        <div class="mb-8">
          <div class="flex justify-between text-xs font-black text-slate-500 mb-2 px-1 uppercase tracking-widest">
            <span>底仓 (50%)</span>
            <span>卫星仓 (30%)</span>
            <span>反转仓 (20%)</span>
          </div>
          <div class="h-4 w-full flex rounded-full overflow-hidden shadow-inner bg-slate-100">
            <div class="h-full bg-emerald-500 w-1/2 border-r border-white"></div>
            <div class="h-full bg-red-500 w-[30%] border-r border-white"></div>
            <div class="h-full bg-blue-500 w-[20%]"></div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-5 mb-6">
          <div class="bg-emerald-50 p-5 rounded-xl border border-emerald-100 shadow-sm">
            <div class="text-sm text-emerald-700 font-black mb-3 uppercase flex items-center">
              ${createIcon('CheckCircle2', 'w-4 h-4 mr-1.5')} Core 底仓
            </div>
            <ul class="text-sm text-emerald-950 space-y-2.5 font-bold">
              <li>AI 算力基建 (25%)</li>
              <li>快递 / 商用车 (15%)</li>
              <li>游戏龙头 (10%)</li>
            </ul>
          </div>
          <div class="bg-red-50 p-5 rounded-xl border border-red-100 shadow-sm">
            <div class="text-sm text-red-600 font-black mb-3 uppercase flex items-center">
              ${createIcon('Zap', 'w-4 h-4 mr-1.5')} Satellite 卫星仓
            </div>
            <ul class="text-sm text-red-950 space-y-2.5 font-bold">
              <li>油运 VLCC (10%)</li>
              <li>新能源金属 - 锂镍 (10%)</li>
              <li>化工避险 / 黄金 (10%)</li>
            </ul>
          </div>
          <div class="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
            <div class="text-sm text-blue-600 font-black mb-3 uppercase flex items-center">
              ${createIcon('TrendingUp', 'w-4 h-4 mr-1.5')} Alpha 反转仓
            </div>
            <ul class="text-sm text-blue-950 space-y-2.5 font-bold">
              <li>生猪养殖 (10%)</li>
              <li>房产中介/物管 (5%)</li>
              <li>玻璃 (5%)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * 渲染行业汇总完整内容
 */
function renderIndustryContent() {
  return `
    ${DateSeparator({ date: '2026-03-04', isLatest: true })}

    <div class="space-y-3 mb-8 text-center animate-in slide-up delay-100">
      <h1 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
        行业研究报告
      </h1>
      <p class="text-sm font-bold text-slate-500">报告日期：2026 年 3 月 4 日</p>
    </div>

    <div class="space-y-10">
      ${renderHighWinRateTracks()}
      ${renderCoreAssets()}
      ${renderSecondaryPlays()}
      ${renderContrarianPlays()}
      ${renderCommoditiesTable()}
      ${renderValuationTable()}
      ${renderDivergencePoints()}
      ${renderSummary()}
    </div>
  `;
}
