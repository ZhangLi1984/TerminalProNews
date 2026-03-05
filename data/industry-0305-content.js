// ==========================================
// 文档二：行业汇总 - 内容渲染 (3 月 5 日版)
// ==========================================

/**
 * 渲染高胜率赛道部分 (3 月 5 日)
 */
function renderHighWinRateTracks_0305() {
  return `
    <section id="i_sec1" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '一、核心高胜率赛道：共识与验证',
        icon: createIcon('Anchor', 'w-5 h-5 text-blue-700')
      })}
      <p class="text-sm text-slate-800 font-bold">汇集逻辑清晰、数据强劲，且市场已逐步形成共识的领域。</p>

      <div class="space-y-5">
        ${TrackCard({
          title: 'AI 算力与光通信',
          logic: '全球云厂商资本开支高增 + 光模块迭代加速，英伟达 2026 财年营收 2159 亿美元超预期。',
          stocks: '中际旭创、新易盛、天孚通信'
        }, `
          <ul class="space-y-2 text-sm text-slate-800 font-bold">
            <li class="flex"><span class="text-blue-600 mr-2">•</span> LightCounting 上调预测：2026 年 800G 光模块出货量增长一倍以上。</li>
            <li class="flex"><span class="text-blue-600 mr-2">•</span> 1.6T 芯片组 2026 年销售额将超 20 亿美元，2029 年前保持快速增长。</li>
            <li class="flex"><span class="text-blue-600 mr-2">•</span> 通信行业 PE-TTM 28.06 倍，高于 2023-2025 均值 22.25 倍。</li>
          </ul>
          <div class="mt-4 text-xs bg-slate-100 p-3 rounded-lg border border-slate-300 flex items-center">
            ${createIcon('Search', 'w-4 h-4 text-slate-700 mr-1.5')}
            <span class="text-slate-900 font-bold"><span class="font-black text-slate-900">证伪跟踪：</span>北美云厂商季度资本开支指引是否下调。</span>
          </div>
        `)}

        ${TrackCard({
          title: '人形机器人',
          logic: '量产前夜 + 政策标准落地 + 价格下探至十万级，处于产业周期 0→1 拐点。',
          stocks: '绿的谐波、双环传动、三花智控'
        }, `
          <ul class="space-y-2 text-sm text-slate-800 font-bold">
            <li class="flex"><span class="text-emerald-600 mr-2">•</span> 人形机器人板块周成交额 4618 亿元，占万得全 A4.73%。</li>
            <li class="flex"><span class="text-emerald-600 mr-2">•</span> 2026 年《人形机器人与具身智能标准体系》发布。</li>
            <li class="flex"><span class="text-emerald-600 mr-2">•</span> 国内整机价格从百万级快速下探至十万级。</li>
          </ul>
        `)}

        ${TrackCard({
          title: '医药供给端重构',
          logic: '印度进口限价 + 出口管制引发全球价格体系重构，原料药价格反弹。',
          stocks: '星湖科技、梅花生物、国邦医药'
        }, `
          <ul class="space-y-2 text-sm text-slate-800 font-bold">
            <li class="flex"><span class="text-orange-600 mr-2">•</span> 印度对 6-APA 进口限价 3405 卢比/kg（约 260 元/kg），高于国内出口报价。</li>
            <li class="flex"><span class="text-orange-600 mr-2">•</span> 星湖伊品/象屿生化苏氨酸报价上调 300 元/吨。</li>
            <li class="flex"><span class="text-orange-600 mr-2">•</span> 礼来替尔泊肽 2025 年销售额 365 亿美元，成全球"药王"。</li>
          </ul>
        `)}
      </div>
    </section>
  `;
}

/**
 * 渲染景气延续部分 (3 月 5 日)
 */
function renderCoreAssets_0305() {
  return `
    <section id="i_sec_base" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '二、高确定性与景气延续：底仓资产',
        icon: createIcon('Layers', 'w-5 h-5 text-emerald-700')
      })}

      <div class="grid md:grid-cols-2 gap-5">
        ${InteractiveCard({
          className: '!p-5 border-l-4 border-l-emerald-600',
          children: `
            <h4 class="font-black text-slate-900 mb-1">券商与财富管理</h4>
            <p class="text-sm text-slate-800 font-bold mb-3">2 月日均股基成交额 2.83 万亿（同比 +34%），1-2 月累计 3.32 万亿（同比 +87.5%）。</p>
            <p class="text-sm font-black text-emerald-800">华泰证券、广发证券、中信证券、港交所</p>
          `
        })}
        ${InteractiveCard({
          className: '!p-5 border-l-4 border-l-emerald-600',
          children: `
            <h4 class="font-black text-slate-900 mb-1">商用车出口</h4>
            <p class="text-sm text-slate-800 font-bold mb-3">1 月中国车企出口新能源乘用车 26.4 万辆，渗透率 44.8%。欧洲 12 月销量同比 +46%。</p>
            <p class="text-sm font-black text-emerald-800">比亚迪、长城汽车、宇通客车</p>
          `
        })}
        ${InteractiveCard({
          className: '!p-5 border-l-4 border-l-emerald-600',
          children: `
            <h4 class="font-black text-slate-900 mb-1">保险板块</h4>
            <p class="text-sm text-slate-800 font-bold mb-3">AI 冲击担忧过度，负债端超预期。A 股险企 PEV 仅 0.78 倍，估值修复空间 +28%。</p>
            <p class="text-sm font-black text-emerald-800">中国太保、中国人寿 H、中国平安</p>
          `
        })}
        ${InteractiveCard({
          className: '!p-5 border-l-4 border-l-emerald-600',
          children: `
            <h4 class="font-black text-slate-900 mb-1">煤炭</h4>
            <p class="text-sm text-slate-800 font-bold mb-3">环渤海动力煤现货 742 元/吨（周 +2.49%），地缘冲突推升海外煤价。</p>
            <p class="text-sm font-black text-emerald-800">兖矿能源、陕西煤业、广汇能源</p>
          `
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染跨赛道暗线部分 (3 月 5 日)
 */
function renderSecondaryPlays_0305() {
  return `
    <section id="i_sec2" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '三、跨赛道暗线与产业链二阶博弈',
        icon: createIcon('Crosshair', 'w-5 h-5 text-indigo-700')
      })}

      <div class="grid md:grid-cols-2 gap-5">
        ${SecondaryPlayCard({
          event: '煤炭地缘溢价 → 化工品成本传导',
          result: '煤化工相对受益',
          logic: '环渤海动力煤周 +4.02%，油煤价差扩大，煤化工相对油化工成本优势凸显。',
          cognitive: '市场聚焦煤炭直接涨价，忽视煤化工产业链的成本传导和替代逻辑。',
          stocks: '广汇能源、宝丰能源、华鲁恒升'
        })}
        ${SecondaryPlayCard({
          event: '生猪产能去化 → 动保需求滞后复苏',
          result: '宠物兽药/非瘟疫苗增量',
          logic: '涌益猪价 10.67 元/kg，自繁自养利润 -159.65 元/头，周期反转预期升温。',
          cognitive: '市场仅关注生猪价格波动，忽视动保板块的滞后复苏逻辑和宠物/非瘟增量。',
          stocks: '生物股份、中牧股份、普莱柯'
        })}
        ${SecondaryPlayCard({
          event: '新能源车购置税退坡 → 电池容量升级',
          result: '锂电材料需求结构性增长',
          logic: '新能源乘用车单车带电量同比 +22.7%，比亚迪续航升级，单 GWh 用量提升。',
          cognitive: '市场聚焦销量下滑利空，忽视单车带电量的结构性增量。',
          stocks: '湖南裕能、德方纳米、天赐材料'
        })}
        ${SecondaryPlayCard({
          event: '商业航天回收试验 → 卫星成本下探',
          result: '地面终端/应用爆发',
          logic: '蓝箭航天计划 2026Q2 开展回收试验，发射成本降低 50%+，低轨星座组网加速。',
          cognitive: '市场聚焦火箭/卫星制造，忽视地面终端和应用场景。',
          stocks: '海格通信、北斗星通、盟升电子'
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染困境反转部分 (3 月 5 日)
 */
function renderContrarianPlays_0305() {
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
              2026 年中央一号文件首次强调"产能综合调控"，对头部企业实行生产备案管理——供给侧改革信号。周期底部右侧布局窗口。
            </p>
            <div class="text-xs font-black text-slate-900 bg-slate-100 p-3 rounded-xl border border-slate-300 mt-auto">
              潜伏：牧原股份、温氏股份、巨星农牧
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-6 flex flex-col h-full',
          children: `
            <div class="flex items-center space-x-2 mb-4">
              <span class="p-1.5 bg-blue-100 text-blue-700 rounded-md">${createIcon('ShieldAlert', 'w-4 h-4')}</span>
              <h4 class="font-black text-lg text-slate-900">保险板块</h4>
            </div>
            <p class="text-sm text-slate-800 font-bold mb-5 flex-grow leading-relaxed">
              <span class="font-black text-white bg-slate-800 px-1.5 py-0.5 rounded mr-1">预期差</span>
              AI 冲击担忧压制估值，但产品创新（低保证 + 高浮动）管控利差损。随长端利率回升，估值有望向 1 倍 PEV 修复（+28%）。
            </p>
            <div class="text-xs font-black text-slate-900 bg-slate-100 p-3 rounded-xl border border-slate-300 mt-auto">
              潜伏：中国太保、中国人寿 H、中国平安
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-6 flex flex-col h-full',
          children: `
            <div class="flex items-center space-x-2 mb-4">
              <span class="p-1.5 bg-amber-100 text-amber-700 rounded-md">${createIcon('PieChart', 'w-4 h-4')}</span>
              <h4 class="font-black text-lg text-slate-900">白羽肉鸡</h4>
            </div>
            <p class="text-sm text-slate-800 font-bold mb-5 flex-grow leading-relaxed">
              <span class="font-black text-white bg-slate-800 px-1.5 py-0.5 rounded mr-1">预期差</span>
              "高产能、弱消费"预期已充分，龙头凭借成本优势持续扩张，小散养殖户退出，龙头市占率提升。
            </p>
            <div class="text-xs font-black text-slate-900 bg-slate-100 p-3 rounded-xl border border-slate-300 mt-auto">
              潜伏：圣农发展、益生股份、民和股份
            </div>
          `
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染大宗商品表格部分 (3 月 5 日)
 */
function renderCommoditiesTable_0305() {
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
                  <th class="px-5 py-4">最新价及趋势</th>
                  <th class="px-5 py-4">供需格局</th>
                  <th class="px-5 py-4">关联标的</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 text-slate-800 font-bold">
                ${TableRow2({ name: '动力煤', price: '751 元/吨', trend: '↑4.02%', isUp: true, desc: '节后供应恢复 vs 供暖结束需求淡季', stocks: '兖矿能源、陕煤' })}
                ${TableRow2({ name: '焦煤', price: '1660 元/吨', trend: '→持平', desc: '煤矿未完全复产 vs 钢厂盈利修复', stocks: '山西焦煤、潞安' })}
                ${TableRow2({ name: '生猪', price: '10.67 元/kg', trend: '↘下跌', isDown: true, desc: '春节后淡季，产能去化预期', stocks: '牧原、温氏' })}
                ${TableRow2({ name: '6-APA', price: '260 元/kg', trend: '↑印度限价', isUp: true, desc: '印度进口限价引发供给重构', stocks: '国药现代、鲁抗' })}
                ${TableRow2({ name: '苏氨酸/赖氨酸', price: '上调 50-300 元', trend: '↑提价', isUp: true, desc: '价格低位 + 部分收缩促成提价', stocks: '星湖科技、梅花' })}
                ${TableRow2({ name: '氧化钇', price: '国外高 40 倍', trend: '↑出口管制', isUp: true, desc: '两用物项出口管制引发价差', stocks: '北方稀土、盛和' })}
              </tbody>
            </table>
          </div>
        `
      })}
    </section>
  `;
}

/**
 * 渲染估值监测表格部分 (3 月 5 日)
 */
function renderValuationTable_0305() {
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
                ${TableRow({ name: 'AI 算力/光模块', change: '英伟达指引超预期', trend: 'up', phase: '景气上行中期', val: '60% (中)', stocks: 'Q1 云厂商开支' })}
                ${TableRow({ name: '人形机器人', change: '标准体系发布，价格下探', trend: 'up', phase: '0→1 量产前夜', val: '80% (高)', stocks: 'Optimus 进度' })}
                ${TableRow({ name: '生猪养殖', change: '猪价跌破成本线', trend: 'neutral', phase: '周期底部右侧', val: '30% (低)', stocks: 'Q2 猪价企稳' })}
                ${TableRow({ name: '医药原料药', change: '印度限价 + 出口管制', trend: 'up', phase: '价格周期拐点', val: '40% (低)', stocks: '印度政策执行' })}
                ${TableRow({ name: '保险', change: '分红险创新，AI 担忧压制', trend: 'neutral', phase: '估值底部', val: '20% (低)', stocks: '长端利率走势' })}
                ${TableRow({ name: '券商', change: '交易量高增 + 基金回暖', trend: 'up', phase: '景气上行初期', val: '40% (低)', stocks: '市场成交量' })}
                ${TableRow({ name: '新能源车', change: '销量 -20%，带电量 +22%', trend: 'down', phase: '调整期', val: '50% (中)', stocks: '3 月零售数据' })}
                ${TableRow({ name: '煤炭', change: '地缘冲突推升价格', trend: 'up', phase: '高位震荡', val: '50% (中)', stocks: '地产/基建数据' })}
              </tbody>
            </table>
          </div>
        `
      })}
    </section>
  `;
}

/**
 * 渲染配置总结部分 (3 月 5 日)
 */
function renderSummary_0305() {
  return `
    <section id="i_sec9" class="space-y-6 scroll-mt-24">
      <div class="bg-white rounded-3xl p-6 md:p-8 text-slate-900 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform transition-transform duration-500 hover:scale-[1.01]">
        <h3 class="text-2xl font-black mb-6 flex items-center text-slate-900">
          ${createIcon('PieChart', 'w-6 h-6 mr-2 text-red-600')} 本周核心策略建议
        </h3>

        <p class="text-base font-bold mb-8 text-slate-800 leading-relaxed bg-slate-50 p-5 rounded-xl border border-slate-200">
          <span class="font-black text-white bg-slate-800 px-2.5 py-1 rounded mr-2 text-sm">核心思路</span>
          以 <span class="text-red-600 font-black border-b border-red-200 pb-0.5">AI 算力</span> 为进攻矛头，
          以 <span class="text-emerald-600 font-black border-b border-emerald-200 pb-0.5">券商保险</span> 为稳定底仓，
          以 <span class="text-amber-600 font-black border-b border-amber-200 pb-0.5">生猪/医药</span> 埋伏周期反转。
        </p>

        <div class="mb-8">
          <div class="flex justify-between text-xs font-black text-slate-500 mb-2 px-1 uppercase tracking-widest">
            <span>底仓 (60%)</span>
            <span>卫星仓 (30%)</span>
            <span>现金 (10%)</span>
          </div>
          <div class="h-4 w-full flex rounded-full overflow-hidden shadow-inner bg-slate-100">
            <div class="h-full bg-emerald-500 w-[60%] border-r border-white"></div>
            <div class="h-full bg-amber-500 w-[30%] border-r border-white"></div>
            <div class="h-full bg-slate-400 w-[10%]"></div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-5 mb-6">
          <div class="bg-emerald-50 p-5 rounded-xl border border-emerald-100 shadow-sm">
            <div class="text-sm text-emerald-700 font-black mb-3 uppercase flex items-center">
              ${createIcon('CheckCircle2', 'w-4 h-4 mr-1.5')} Core 底仓 60%
            </div>
            <ul class="text-sm text-emerald-950 space-y-2.5 font-bold">
              <li>AI 算力 (20%)</li>
              <li>券商保险 (20%)</li>
              <li>资源品 - 煤炭 (20%)</li>
            </ul>
          </div>
          <div class="bg-amber-50 p-5 rounded-xl border border-amber-100 shadow-sm">
            <div class="text-sm text-amber-600 font-black mb-3 uppercase flex items-center">
              ${createIcon('Zap', 'w-4 h-4 mr-1.5')} Satellite 卫星仓 30%
            </div>
            <ul class="text-sm text-amber-950 space-y-2.5 font-bold">
              <li>人形机器人 (10%)</li>
              <li>生猪养殖 (10%)</li>
              <li>医药原料药 (10%)</li>
            </ul>
          </div>
          <div class="bg-slate-50 p-5 rounded-xl border border-slate-100 shadow-sm">
            <div class="text-sm text-slate-700 font-black mb-3 uppercase flex items-center">
              ${createIcon('Clock', 'w-4 h-4 mr-1.5')} Cash 现金 10%
            </div>
            <ul class="text-sm text-slate-950 space-y-2.5 font-bold">
              <li>等待两会政策催化</li>
              <li>机动仓位</li>
            </ul>
          </div>
        </div>

        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <h4 class="text-sm font-black text-slate-900 mb-3 flex items-center">
            ${createIcon('Target', 'w-4 h-4 mr-2 text-slate-600')} 重点跟踪高频指标
          </h4>
          <div class="grid md:grid-cols-2 gap-3 text-xs">
            <div class="flex items-center"><span class="w-2 h-2 bg-red-500 rounded-full mr-2"></span><span class="font-bold">AI 算力：</span><span class="ml-1 text-slate-700">北美云厂商资本开支、光模块月度出货</span></div>
            <div class="flex items-center"><span class="w-2 h-2 bg-orange-500 rounded-full mr-2"></span><span class="font-bold">生猪：</span><span class="ml-1 text-slate-700">涌益猪价、出栏均重、能繁存栏</span></div>
            <div class="flex items-center"><span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span><span class="font-bold">券商：</span><span class="ml-1 text-slate-700">日均成交额、基金发行规模</span></div>
            <div class="flex items-center"><span class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span><span class="font-bold">医药：</span><span class="ml-1 text-slate-700">原料药价格、印度政策执行</span></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * 渲染行业汇总完整内容 (3 月 5 日)
 */
function renderIndustryContent_0305() {
  return `
    ${DateSeparator({ date: '2026-03-05', isLatest: true })}

    <div class="space-y-3 mb-8 text-center animate-in slide-up delay-100">
      <h1 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
        全市场行业深度研究报告
      </h1>
      <p class="text-base font-bold text-slate-700">买方四维框架 · 基于 250 篇卖方研报统筹分析</p>
    </div>

    <div class="space-y-10">
      ${renderHighWinRateTracks_0305()}
      ${renderCoreAssets_0305()}
      ${renderSecondaryPlays_0305()}
      ${renderContrarianPlays_0305()}
      ${renderCommoditiesTable_0305()}
      ${renderValuationTable_0305()}
      ${renderSummary_0305()}
    </div>
  `;
}
