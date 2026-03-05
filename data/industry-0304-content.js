// ==========================================
// 文档二：行业汇总 - 内容渲染 (3 月 4 日版)
// ==========================================

/**
 * 渲染高胜率赛道部分 (3 月 4 日)
 */
function renderHighWinRateTracks_0304() {
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
          logic: '国产大模型 Token 调用量爆发式增长，三周增长 127% 首超美国，算力缺口短期无法弥补。',
          stocks: '海光信息、寒武纪、中际旭创'
        }, `
          <ul class="space-y-2 text-sm text-slate-800 font-bold">
            <li class="flex"><span class="text-blue-600 mr-2">•</span> 中国模型周调用量 2 月 16-22 日冲高至 5.16 万亿 Token，超过同期美国 2.7 万亿。</li>
            <li class="flex"><span class="text-blue-600 mr-2">•</span> 全球 Top5 模型中中国占四席：MiniMax M2.5、Kimi K2.5、GLM-5、DeepSeek V3.2。</li>
            <li class="flex"><span class="text-blue-600 mr-2">•</span> 液冷渗透率有望从 2024 年 8% 升至 2026 年 35%。英伟达全年营收指引大增。</li>
          </ul>
          <div class="mt-4 text-xs bg-slate-100 p-3 rounded-lg border border-slate-300 flex items-center">
            ${createIcon('Search', 'w-4 h-4 text-slate-700 mr-1.5')}
            <span class="text-slate-900 font-bold"><span class="font-black text-slate-900">证伪跟踪：</span>紧盯国产算力芯片实际交付能力、GTC 大会新品。</span>
          </div>
        `)}

        ${TrackCard({
          title: '新能源金属（锂/镍）',
          logic: '资源民族主义抬头 + 主产国出口管制，供给收缩逻辑刚性。',
          stocks: '华友钴业、盐湖股份、大中矿业'
        }, `
          <ul class="space-y-2 text-sm text-slate-800 font-bold">
            <li class="flex"><span class="text-emerald-600 mr-2">•</span> 津巴布韦暂停所有锂原矿及锂精矿出口（占中国进口 15.5%）。</li>
            <li class="flex"><span class="text-emerald-600 mr-2">•</span> 印尼韦达湾镍矿 2026 年配额 1200 万吨，较 2025 年下降 71%。</li>
            <li class="flex"><span class="text-emerald-600 mr-2">•</span> 刚果（金）钴出口禁令延续，2025 年 2 月至 2026 年 1 月钴价累计上涨 185%。</li>
          </ul>
        `)}

        ${TrackCard({
          title: '油运（VLCC）',
          logic: '中东冲突引爆运价，霍尔木兹海峡封锁风险带来情绪与货量双重利好。',
          stocks: '中远海能、招商轮船、招商南油'
        }, `
          <ul class="space-y-2 text-sm text-slate-800 font-bold">
            <li class="flex"><span class="text-orange-600 mr-2">•</span> 美以 2 月 28 日空袭伊朗，伊朗宣布封锁霍尔木兹海峡。</li>
            <li class="flex"><span class="text-orange-600 mr-2">•</span> BDTI 指数周环比上涨 6.47% 至 1870 点，VLCC TCE 周环比上涨 30.2%。</li>
            <li class="flex"><span class="text-orange-600 mr-2">•</span> 霍尔木兹海峡承载全球 1/5 油气运输量。</li>
          </ul>
        `)}
      </div>
    </section>
  `;
}

/**
 * 渲染景气延续部分 (3 月 4 日)
 */
function renderCoreAssets_0304() {
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
            <p class="text-sm text-slate-800 font-bold mb-3">反内卷政策带动价格上涨。义乌春节单日业务量 5630 万件破历史新高。</p>
            <p class="text-sm font-black text-emerald-800">圆通速递、中通快递、顺丰控股</p>
          `
        })}
        ${InteractiveCard({
          className: '!p-5 border-l-4 border-l-emerald-600',
          children: `
            <h4 class="font-black text-slate-900 mb-1">商用车</h4>
            <p class="text-sm text-slate-800 font-bold mb-3">政策推动 + 更新需求 + 出口高增。1 月重卡销量 10.5 万辆，同比增长 46%。</p>
            <p class="text-sm font-black text-emerald-800">潍柴动力、中国重汽、福田汽车</p>
          `
        })}
        ${InteractiveCard({
          className: '!p-5 border-l-4 border-l-emerald-600',
          children: `
            <h4 class="font-black text-slate-900 mb-1">游戏</h4>
            <p class="text-sm text-slate-800 font-bold mb-3">版号供给稳定 + 出海升至 38.5%。1 月游戏市场收入 324.68 亿元，客户端游戏收入增 23%。</p>
            <p class="text-sm font-black text-emerald-800">腾讯控股、网易、恺英网络</p>
          `
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染跨赛道暗线部分 (3 月 4 日)
 */
function renderSecondaryPlays_0304() {
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
          logic: '海峡封锁切断伊朗化工出口，缺口推升价格，一体化煤化工获利。3 月 2 日甲醇期货价格已大幅高开。',
          cognitive: '市场仅关注油运和原油直接受益标的，对化工品供给收缩认知不足。',
          stocks: '华鲁恒升、宝丰能源'
        })}
        ${SecondaryPlayCard({
          event: 'AI 算力紧缺 → 电力设备需求扩张',
          result: '变压器/开关柜/HVDC',
          logic: 'Token 调用量爆发 → GPU 服务器需求激增 → 高功率密度数据中心建设加速 → 电力设备需求扩张。',
          cognitive: '市场聚焦 AI 芯片和光模块，对电力设备环节关注度不足。',
          stocks: '平高电气、思源电气、许继电气'
        })}
        ${SecondaryPlayCard({
          event: '锂镍出口管制 → 固态电池加速落地',
          result: '固态电解质/硅基负极',
          logic: '传统液态锂电上游资源受限 → 车企加速固态电池研发以绕过资源瓶颈。我国首个车用固态电池国标预计 2026 年 7 月发布。',
          cognitive: '市场仅炒作锂价上涨，忽视固态电池加速替代逻辑。',
          stocks: '厦钨新能、璞泰来、纳科诺尔'
        })}
        ${SecondaryPlayCard({
          event: '房地产政策底部 → 二手房渗透率提升',
          result: '房产中介/物管',
          logic: '新房成交 -79.1% 但二手房成交 +84%（春节期间）→ 市场结构转向存量。上海降低非户籍购房门槛。',
          cognitive: '市场仅关注房企估值修复，忽视中介和物管赛道阿尔法。',
          stocks: '贝壳、华润万象生活、绿城服务'
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染困境反转部分 (3 月 4 日)
 */
function renderContrarianPlays_0304() {
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
              猪价跌破 11 元/kg 现金成本线，生猪期货 03 合约跌破 10000 关口。2026 年中央一号文件强调"产能综合调控"，政策从"保供"转向"调控"。
            </p>
            <div class="text-xs font-black text-slate-900 bg-slate-100 p-3 rounded-xl border border-slate-300 mt-auto">
              潜伏：牧原股份、温氏股份、德康农牧
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
              法国主要供种地区禽流感，法国或全面暂停对华出口种鸡（占国内引种 40%）。父母代种苗价格有望高位上行。
            </p>
            <div class="text-xs font-black text-slate-900 bg-slate-100 p-3 rounded-xl border border-slate-300 mt-auto">
              潜伏：益生股份、圣农发展
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
              行业大面积亏损推动高窑龄、亏损产线加速停产/冷修。2026 年上半年在产日熔量有望下降至 14.74 万 t/d 以下。
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
 * 渲染大宗商品表格部分 (3 月 4 日)
 */
function renderCommoditiesTable_0304() {
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
                ${TableRow2({ name: '布伦特原油', price: '81.57 美元/桶', trend: '↑11.94%', isUp: true, desc: '中东冲突供给中断风险 vs OPEC+ 增产', stocks: '中国海油、中远海能' })}
                ${TableRow2({ name: 'WTI 原油', price: '75.00 美元/桶', trend: '↑11.9%', isUp: true, desc: '地缘冲突 + 美国释放战略储备', stocks: '中国石油、中海油服' })}
                ${TableRow2({ name: '碳酸锂', price: '17 万元/吨', trend: '↑19%', isUp: true, desc: '津巴布韦出口暂停 vs 国内产能释放', stocks: '盐湖股份、华友钴业' })}
                ${TableRow2({ name: '钴', price: '46.21 万元/吨', trend: '↑185%', isUp: true, desc: '刚果（金）出口禁令', stocks: '华友钴业、洛阳钼业' })}
                ${TableRow2({ name: 'COMEX 黄金', price: '5280 美元/盎司', trend: '↑18%', isUp: true, desc: '地缘避险 + 降息预期', stocks: '山东黄金、中金黄金' })}
                ${TableRow2({ name: '甲醇', price: '期货大幅高开', trend: '-', isUp: true, desc: '伊朗供给中断风险', stocks: '华鲁恒升、宝丰能源' })}
                ${TableRow2({ name: '生猪', price: '10.67 元/kg', trend: '↓弱势', isDown: true, desc: '产能过剩 vs 政策调控', stocks: '牧原股份、温氏股份' })}
                ${TableRow2({ name: '浮法玻璃', price: '1164.6 元/吨', trend: '↑7 元', isUp: true, desc: '供给加速出清', stocks: '旗滨集团、南玻 A' })}
              </tbody>
            </table>
          </div>
        `
      })}
    </section>
  `;
}

/**
 * 渲染估值监测表格部分 (3 月 4 日)
 */
function renderValuationTable_0304() {
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
                  <th class="px-5 py-4">周期位置</th>
                  <th class="px-5 py-4">估值分位</th>
                  <th class="px-5 py-4">跟踪节点</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 text-slate-800 font-bold">
                ${TableRow({ name: 'AI 算力', change: 'Token 调用量爆发，三周 +127%', trend: 'up', phase: '繁荣早期', val: '70% (高)', stocks: 'GTC 大会后' })}
                ${TableRow({ name: '光模块', change: '800G/1.6T 出货量预测上调', trend: 'up', phase: '繁荣期', val: '65% (中高)', stocks: 'Q2 订单验证' })}
                ${TableRow({ name: 'IDC', change: '算力紧张推动涨价', trend: 'up', phase: '复苏期', val: '55% (中)', stocks: 'Q1 财报' })}
                ${TableRow({ name: '锂矿', change: '津巴布韦出口暂停', trend: 'neutral', phase: '复苏期', val: '40% (中低)', stocks: '3 月排产数据' })}
                ${TableRow({ name: '油运', change: 'VLCC TCE+30.2%', trend: 'up', phase: '繁荣期', val: '60% (中)', stocks: '海峡通航情况' })}
                ${TableRow({ name: '生猪养殖', change: '猪价跌破现金成本线', trend: 'neutral', phase: '萧条末期', val: '20% (低)', stocks: '能繁母猪存栏' })}
                ${TableRow({ name: '房地产', change: '新房 -79% 二手 +84%', trend: 'down', phase: '萧条期', val: '15% (低)', stocks: '3 月销售数据' })}
                ${TableRow({ name: '游戏', change: '版号稳定 + 市场修复', trend: 'up', phase: '复苏期', val: '50% (中)', stocks: 'Q1 流水数据' })}
                ${TableRow({ name: '人形机器人', change: '标准体系发布 + 春晚出圈', trend: 'up', phase: '导入期', val: '45% (中)', stocks: '量产订单' })}
                ${TableRow({ name: '快递', change: '反内卷政策带动涨价', trend: 'up', phase: '复苏期', val: '55% (中)', stocks: '单票收入数据' })}
              </tbody>
            </table>
          </div>
        `
      })}
    </section>
  `;
}

/**
 * 渲染配置总结部分 (3 月 4 日)
 */
function renderSummary_0304() {
  return `
    <section id="i_sec9" class="space-y-6 scroll-mt-24">
      <div class="bg-white rounded-3xl p-6 md:p-8 text-slate-900 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform transition-transform duration-500 hover:scale-[1.01]">
        <h3 class="text-2xl font-black mb-6 flex items-center text-slate-900">
          ${createIcon('PieChart', 'w-6 h-6 mr-2 text-red-600')} 总结与配置建议
        </h3>

        <p class="text-base font-bold mb-8 text-slate-800 leading-relaxed bg-slate-50 p-5 rounded-xl border border-slate-200">
          <span class="font-black text-white bg-slate-800 px-2.5 py-1 rounded mr-2 text-sm">核心思路</span>
          以 <span class="text-red-600 font-black border-b border-red-200 pb-0.5">AI 算力</span> 为进攻矛头，
          以 <span class="text-amber-600 font-black border-b border-amber-200 pb-0.5">资源民族主义标的</span> 为防御盾牌，
          以 <span class="text-blue-600 font-black border-b border-blue-200 pb-0.5">困境反转赛道</span> 为潜在阿尔法来源。
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
              ${createIcon('CheckCircle2', 'w-4 h-4 mr-1.5')} Core 底仓 50%
            </div>
            <ul class="text-sm text-emerald-950 space-y-2.5 font-bold">
              <li>AI 算力基础设施 (25%)</li>
              <li>快递 / 商用车 (15%)</li>
              <li>游戏龙头 (10%)</li>
            </ul>
          </div>
          <div class="bg-red-50 p-5 rounded-xl border border-red-100 shadow-sm">
            <div class="text-sm text-red-600 font-black mb-3 uppercase flex items-center">
              ${createIcon('Zap', 'w-4 h-4 mr-1.5')} Satellite 卫星仓 30%
            </div>
            <ul class="text-sm text-red-950 space-y-2.5 font-bold">
              <li>油运 VLCC (10%)</li>
              <li>新能源金属 - 锂镍 (10%)</li>
              <li>中东冲突化工受益 (5%)</li>
              <li>黄金 (5%)</li>
            </ul>
          </div>
          <div class="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
            <div class="text-sm text-blue-600 font-black mb-3 uppercase flex items-center">
              ${createIcon('TrendingUp', 'w-4 h-4 mr-1.5')} Alpha 反转仓 20%
            </div>
            <ul class="text-sm text-blue-950 space-y-2.5 font-bold">
              <li>生猪养殖 (10%)</li>
              <li>房地产中介/物管 (5%)</li>
              <li>浮法玻璃 (5%)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * 渲染行业汇总完整内容 (3 月 4 日)
 */
function renderIndustryContent_0304() {
  return `
    ${DateSeparator({ date: '2026-03-04', isLatest: false })}

    <div class="space-y-3 mb-8 text-center animate-in slide-up delay-100">
      <h1 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
        行业研究报告
      </h1>
      <p class="text-sm font-bold text-slate-500">报告日期：2026 年 3 月 4 日</p>
    </div>

    <div class="space-y-10">
      ${renderHighWinRateTracks_0304()}
      ${renderCoreAssets_0304()}
      ${renderSecondaryPlays_0304()}
      ${renderContrarianPlays_0304()}
      ${renderCommoditiesTable_0304()}
      ${renderValuationTable_0304()}
      ${renderSummary_0304()}
    </div>
  `;
}
