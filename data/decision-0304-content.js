// ==========================================
// 文档一：投资决策内参 - 内容渲染 (3 月 4 日版)
// ==========================================

/**
 * 渲染核心摘要部分 (3 月 4 日)
 */
function renderCoreSummary_0304() {
  return `
    <section id="sec1" class="scroll-mt-24">
      ${InteractiveCard({
        className: '!p-6 md:!p-8 relative overflow-hidden bg-white border-slate-200',
        children: `
          <div class="relative z-10">
            <h3 class="text-2xl font-black mb-6 flex items-center text-slate-900">
              一、核心摘要与全局叙事
              <span class="ml-4 text-xs font-bold bg-slate-600 text-white px-3 py-1 rounded-full shadow-sm">3 分钟速读</span>
            </h3>

            <div class="mb-6 bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
              <div class="text-sm text-slate-600 font-black mb-3 uppercase tracking-widest flex items-center">
                ${createIcon('Activity', 'w-4 h-4 mr-2 text-slate-600')} 市场核心主线
              </div>
              <p class="text-base font-bold leading-relaxed text-slate-800">
                市场围绕 <span class="text-blue-600 font-black border-b-2 border-blue-200 pb-0.5">"AI 算力国产化加速 + 资源民族主义抬头 + 中东地缘冲突"</span> 三条主线博弈。
                国产大模型 Token 调用量三周暴涨 127% 首超美国，津巴布韦锂矿出口暂停引爆资源股。
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-5">
              <div class="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <div class="text-sm text-slate-500 font-black mb-3 uppercase tracking-widest">整体仓位</div>
                <div class="text-3xl font-black text-blue-600 mb-2">7-8 成</div>
                <p class="text-sm font-black text-slate-700 bg-slate-100 py-1 px-3 rounded w-fit mb-2">顺周期进攻，逆周期埋伏</p>
                <p class="text-sm text-slate-600 leading-snug font-bold">地缘扰动下保持适度进攻姿态。</p>
              </div>
              <div class="bg-blue-50 rounded-xl p-5 border border-blue-100 shadow-sm">
                <div class="text-sm text-blue-600 font-black mb-3 uppercase tracking-widest flex items-center">
                  ${createIcon('Crosshair', 'w-4 h-4 mr-1.5')} 进攻方向
                </div>
                <ul class="space-y-2 text-base font-black text-blue-900">
                  <li class="flex items-center">${createIcon('ArrowRight', 'w-4 h-4 mr-2 text-blue-600')} AI 算力（国产替代）</li>
                  <li class="flex items-center">${createIcon('ArrowRight', 'w-4 h-4 mr-2 text-blue-600')} 人形机器人</li>
                  <li class="flex items-center">${createIcon('ArrowRight', 'w-4 h-4 mr-2 text-blue-600')} 资源品（锂/镍）</li>
                </ul>
              </div>
              <div class="bg-orange-50 rounded-xl p-5 border border-orange-100 shadow-sm">
                <div class="text-sm text-orange-600 font-black mb-3 uppercase tracking-widest flex items-center">
                  ${createIcon('ShieldAlert', 'w-4 h-4 mr-1.5')} 防守方向
                </div>
                <ul class="space-y-2 text-base font-black text-orange-900">
                  <li class="flex items-center">${createIcon('ArrowRight', 'w-4 h-4 mr-2 text-orange-600')} 油气资源</li>
                  <li class="flex items-center">${createIcon('ArrowRight', 'w-4 h-4 mr-2 text-orange-600')} 黄金</li>
                  <li class="flex items-center">${createIcon('ArrowRight', 'w-4 h-4 mr-2 text-orange-600')} 高股息红利</li>
                </ul>
              </div>
            </div>
          </div>
        `
      })}
    </section>
  `;
}

/**
 * 渲染 S 级重大事件 (3 月 4 日)
 */
function renderSMajorEvents_0304() {
  return `
    <section class="space-y-6">
      ${SectionHeader({
        title: '二、S 级重大事件：深度推理与沙盘',
        icon: createIcon('Flame', 'w-5 h-5 text-red-600')
      })}

      <!-- S1: AI 算力国产化 -->
      ${InteractiveCard({
        id: 'sec2_s1',
        className: 'overflow-hidden scroll-mt-24',
        children: `
          <div class="px-6 py-4 border-b border-blue-200 flex justify-between items-center bg-blue-50/80">
            <div class="flex items-center space-x-2">
              <span class="text-lg font-black text-blue-800">S1</span>
              <h4 class="font-black text-base text-slate-900">国产模型 Token 调用量三周 +127%，算力缺口短期无法弥补</h4>
            </div>
            <span class="text-[11px] font-black px-2.5 py-1 bg-blue-600 text-white rounded">超预期</span>
          </div>
          <div class="p-6 space-y-5">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm leading-relaxed">
              <p class="mb-2 text-slate-800 font-bold">
                <span class="font-black text-white bg-slate-800 px-1.5 py-0.5 rounded shadow-sm mr-2 text-xs">事件穿透</span>
                中国模型周调用量 2 月 16-22 日冲高至 5.16 万亿 Token，超过同期美国 2.7 万亿 Token，三周增长 127%。
                全球 Top5 模型中中国占四席：MiniMax M2.5、Kimi K2.5、GLM-5、DeepSeek V3.2。
              </p>
              <p class="text-blue-800 font-bold">
                <span class="font-black text-white bg-blue-700 px-1.5 py-0.5 rounded shadow-sm mr-2 text-xs">核心信号</span>
                AI 从"预期"迈入"业绩兑现"阶段，算力缺口短期无法弥补，国产算力链进入 J 型加速期。
              </p>
            </div>
            <div class="grid md:grid-cols-2 gap-5">
              <div>
                <h5 class="font-black text-sm text-slate-900 mb-2">后续验证点</h5>
                <ul class="space-y-1.5 text-sm text-slate-800 font-medium bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <li><span class="font-black text-slate-900">3 月 16-19 日：</span>英伟达 GTC 大会，关注 Blackwell 新品</li>
                  <li><span class="font-black text-slate-900">持续关注：</span>国产算力芯片交付能力、Token 调用量增速</li>
                </ul>
              </div>
              <div>
                <h5 class="font-black text-sm text-slate-900 mb-2">映射标的</h5>
                <div class="space-y-2 text-sm">
                  <div class="flex items-center justify-between p-2 bg-blue-50 rounded border border-blue-100">
                    <span class="font-bold text-blue-800">核心受益</span>
                    <span class="font-black text-slate-900">寒武纪、海光信息、中际旭创</span>
                  </div>
                  <div class="flex items-center justify-between p-2 bg-emerald-50 rounded border border-emerald-100">
                    <span class="font-bold text-emerald-800">间接受益</span>
                    <span class="font-black text-slate-900">润泽科技、科华数据（IDC）</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
      })}

      <!-- S2: 中东冲突升级 -->
      ${InteractiveCard({
        id: 'sec2_s2',
        className: 'overflow-hidden scroll-mt-24',
        children: `
          <div class="px-6 py-4 border-b border-orange-200 flex justify-between items-center bg-orange-50/80">
            <div class="flex items-center space-x-2">
              <span class="text-lg font-black text-orange-800">S2</span>
              <h4 class="font-black text-base text-slate-900">美以空袭伊朗，霍尔木兹海峡封锁风险</h4>
            </div>
            <span class="text-[11px] font-black px-2.5 py-1 bg-orange-600 text-white rounded">地缘冲击</span>
          </div>
          <div class="p-6">
            <p class="text-sm text-slate-800 font-bold leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200 mb-5">
              <span class="font-black text-white bg-slate-800 px-1.5 py-0.5 rounded shadow-sm mr-2 text-xs">核心穿透</span>
              2 月 28 日美以空袭伊朗，伊朗最高领袖哈梅内伊遇害，伊朗宣布封锁霍尔木兹海峡。
              该海峡承载全球 1/5 油气运输量，封锁风险引爆油运和油气板块。
            </p>
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-1 border border-orange-300 bg-orange-50 rounded-xl p-4">
                <div class="text-[11px] font-black text-orange-700 uppercase tracking-widest mb-1.5 flex items-center">
                  ${createIcon('TrendingUp', 'w-3.5 h-3.5 mr-1')} 利好方向
                </div>
                <div class="text-sm font-black text-slate-900">中远海能、招商轮船（油运）</div>
                <div class="text-sm font-black text-slate-900 mt-0.5">中国海油、中海油服（油气开采）</div>
                <div class="text-sm font-black text-slate-900 mt-0.5">山东黄金、中金黄金（避险）</div>
              </div>
              <div class="flex-1 border border-slate-300 bg-slate-50 rounded-xl p-4">
                <div class="text-[11px] font-black text-slate-700 uppercase tracking-widest mb-1.5 flex items-center">
                  ${createIcon('Info', 'w-3.5 h-3.5 mr-1')} 二阶传导
                </div>
                <div class="text-sm font-black text-slate-900">华鲁恒升、宝丰能源（煤化工）</div>
                <div class="text-xs text-slate-600 mt-1">伊朗化工品出口中断→甲醇/乙二醇受益</div>
              </div>
            </div>
          </div>
        `
      })}

      <!-- S3: 资源民族主义 -->
      ${InteractiveCard({
        id: 'sec2_s3',
        className: 'overflow-hidden scroll-mt-24',
        children: `
          <div class="px-6 py-4 border-b border-emerald-200 flex justify-between items-center bg-emerald-50/80">
            <div class="flex items-center space-x-2">
              <span class="text-lg font-black text-emerald-800">S3</span>
              <h4 class="font-black text-base text-slate-900">津巴布韦锂矿出口暂停，印尼镍矿配额 -71%</h4>
            </div>
            <span class="text-[11px] font-black px-2.5 py-1 bg-emerald-600 text-white rounded">供给收缩</span>
          </div>
          <div class="p-6">
            <p class="text-sm text-slate-800 font-bold leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200 mb-5">
              <span class="font-black text-white bg-slate-800 px-1.5 py-0.5 rounded shadow-sm mr-2 text-xs">核心穿透</span>
              津巴布韦暂停所有锂原矿及锂精矿出口（占中国进口 15.5%），
              印尼韦达湾镍矿 2026 年配额 1200 万吨，较 2025 年下降 71%。
              资源民族主义抬头，供给收缩逻辑刚性。
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="border border-emerald-300 bg-emerald-50 rounded-xl p-4">
                <div class="text-[11px] font-black text-emerald-700 uppercase tracking-widest mb-1.5">核心受益</div>
                <div class="text-sm font-black text-slate-900">华友钴业（镍钴锂一体化）</div>
                <div class="text-sm font-black text-slate-900 mt-0.5">盐湖股份（盐湖提锂龙头）</div>
                <div class="text-sm font-black text-slate-900 mt-0.5">大中矿业（锂矿储备）</div>
              </div>
              <div class="border border-blue-300 bg-blue-50 rounded-xl p-4">
                <div class="text-[11px] font-black text-blue-700 uppercase tracking-widest mb-1.5">二阶博弈</div>
                <div class="text-sm font-black text-slate-900">厦钨新能、璞泰来（固态电池）</div>
                <div class="text-xs text-slate-600 mt-1">资源受限→固态电池加速落地</div>
              </div>
            </div>
          </div>
        `
      })}
    </section>
  `;
}

/**
 * 渲染 A 级新闻 (3 月 4 日)
 */
function renderANews_0304() {
  return `
    <section id="sec3" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '三、A 级重要新闻：行业催化与博弈',
        icon: createIcon('List', 'w-5 h-5 text-indigo-600')
      })}

      <div class="grid md:grid-cols-2 gap-5">
        ${InteractiveCard({
          className: '!p-0 overflow-hidden',
          children: `
            <h4 class="px-4 py-3 font-black text-sm border-b border-blue-200 uppercase tracking-widest bg-blue-50 text-blue-900">
              科技 / AI / 半导体
            </h4>
            <div class="p-1.5 space-y-0.5">
              ${NewsItem({ text: '国产模型 Token 调用量三周 +127%', impact: '利好', focus: '算力链景气度验证' })}
              ${NewsItem({ text: '英伟达 2026 财年营收 2159 亿美元（+65%）', impact: '利好', focus: 'Q1 指引 780 亿美元超预期' })}
              ${NewsItem({ text: 'LightCounting 上调 800G 光模块预测', impact: '利好', focus: '2026 年出货量翻倍' })}
              ${NewsItem({ text: '液冷渗透率有望从 8% 升至 35%', impact: '利好', focus: '英维克、高澜股份', isNeutral: true })}
              <div class="mx-2.5 mb-2.5 mt-1 p-3 bg-blue-100/50 rounded-lg text-xs text-blue-900 border border-blue-200">
                <span class="font-black">资金博弈：</span>算力链从"炒预期"进入"炒业绩"阶段，龙头 2025 年订单已排满。
              </div>
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-0 overflow-hidden',
          children: `
            <h4 class="px-4 py-3 font-black text-sm border-b border-emerald-200 uppercase tracking-widest bg-emerald-50 text-emerald-900">
              新能源/资源品
            </h4>
            <div class="p-1.5 space-y-0.5">
              ${NewsItem({ text: '津巴布韦暂停锂原矿出口', impact: '利好', focus: '占中国进口 15.5%', isNeutral: true })}
              ${NewsItem({ text: '印尼镍矿配额 -71%', impact: '利好', focus: '供给收缩逻辑' })}
              ${NewsItem({ text: '碳酸锂周涨幅 19%', impact: '利好', focus: '盐湖股份、华友钴业' })}
              ${NewsItem({ text: '刚果（金）钴出口禁令延续', impact: '利好', focus: '钴价 +185%', isNeutral: true })}
              <div class="mx-2.5 mb-2.5 mt-1 p-3 bg-emerald-100/50 rounded-lg text-xs text-emerald-900 border border-emerald-200">
                <span class="font-black">资金博弈：</span>资源民族主义交易从"预期"进入"兑现"，关注实际出口数据。
              </div>
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-0 overflow-hidden',
          children: `
            <h4 class="px-4 py-3 font-black text-sm border-b border-orange-200 uppercase tracking-widest bg-orange-50 text-orange-900">
              地缘/周期
            </h4>
            <div class="p-1.5 space-y-0.5 pb-2.5">
              ${NewsItem({ text: '美以空袭伊朗', impact: '利好', focus: '油运 TCE+30.2%' })}
              ${NewsItem({ text: 'BDTI 指数 +6.47% 至 1870 点', impact: '利好', focus: '中远海能、招商轮船' })}
              ${NewsItem({ text: 'COMEX 黄金 +18% 至 5280 美元', impact: '利好', focus: '山东黄金、中金黄金' })}
              ${NewsItem({ text: 'WTI 原油 +11.9% 至 75 美元', impact: '利好', focus: '中国海油、中海油服' })}
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-0 overflow-hidden',
          children: `
            <h4 class="px-4 py-3 font-black text-sm border-b border-lime-200 uppercase tracking-widest bg-lime-50 text-lime-900">
              政策/房地产
            </h4>
            <div class="p-1.5 space-y-0.5">
              ${NewsItem({ text: '2026 开年首期《求是》定调房地产', impact: '利好', focus: '改善和稳定预期' })}
              ${NewsItem({ text: '上海"新七条"优化限购', impact: '利好', focus: '社保 1 年可购 1 套' })}
              ${NewsItem({ text: '春节二手房成交 +84%', impact: '利好', focus: '新房 -79%，结构转向存量' })}
              ${NewsItem({ text: '代表建议设立不动产登记制度', impact: '中性', focus: '长效机制建设', isNeutral: true })}
              <div class="mx-2.5 mb-2.5 mt-1 p-3 bg-lime-100/50 rounded-lg text-xs text-lime-900 border border-lime-200">
                <span class="font-black">资金博弈：</span>房地产政策底部确认，等待销售数据验证。
              </div>
            </div>
          `
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染热点赛道追踪 (3 月 4 日)
 */
function renderHotTracks_0304() {
  return `
    <section id="sec4" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '四、热点赛道追踪',
        icon: createIcon('Activity', 'w-5 h-5 text-teal-600')
      })}

      <div class="grid md:grid-cols-2 gap-5">
        ${InteractiveCard({
          className: '!p-5',
          children: `
            <div class="flex items-center justify-between mb-4">
              <div class="text-sm font-black text-slate-900">AI/算力产业链</div>
              <span class="text-xs font-black bg-red-100 text-red-700 px-2 py-0.5 rounded">★★★★★</span>
            </div>
            <p class="text-sm text-slate-800 font-bold mb-4">国产模型 Token 调用量三周 +127%，算力缺口短期无法弥补，景气度持续验证。</p>
            <div class="space-y-2 text-xs">
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">AI 芯片</span>
                <span class="font-black text-emerald-700">增持</span>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">光模块</span>
                <span class="font-black text-emerald-700">增持</span>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">液冷</span>
                <span class="font-black text-slate-900">持有</span>
              </div>
            </div>
            <div class="mt-4 text-xs font-black text-slate-900 bg-slate-100 p-2 rounded border border-slate-300">
              核心标的：寒武纪、海光信息、中际旭创、新易盛
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-5',
          children: `
            <div class="flex items-center justify-between mb-4">
              <div class="text-sm font-black text-slate-900">人形机器人</div>
              <span class="text-xs font-black bg-amber-100 text-amber-700 px-2 py-0.5 rounded">★★★★☆</span>
            </div>
            <p class="text-sm text-slate-800 font-bold mb-4">2 月 28 日我国发布首个人形机器人标准体系，产业进入规范化发展新阶段。</p>
            <div class="space-y-2 text-xs">
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">减速器</span>
                <span class="font-black text-slate-900">绿的谐波</span>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">执行器</span>
                <span class="font-black text-slate-900">三花智控</span>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">电机</span>
                <span class="font-black text-slate-900">鸣志电器</span>
              </div>
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-5',
          children: `
            <div class="flex items-center justify-between mb-4">
              <div class="text-sm font-black text-slate-900">新能源金属</div>
              <span class="text-xs font-black bg-orange-100 text-orange-700 px-2 py-0.5 rounded">★★★★☆</span>
            </div>
            <p class="text-sm text-slate-800 font-bold mb-4">津巴布韦锂矿出口暂停 + 印尼镍矿配额 -71%，供给收缩逻辑刚性。</p>
            <div class="space-y-2 text-xs">
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">锂矿</span>
                <span class="font-black text-slate-900">盐湖股份、天齐</span>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">镍/钴</span>
                <span class="font-black text-slate-900">华友钴业、洛钼</span>
              </div>
            </div>
          `
        })}

        ${InteractiveCard({
          className: '!p-5',
          children: `
            <div class="flex items-center justify-between mb-4">
              <div class="text-sm font-black text-slate-900">油运/油气</div>
              <span class="text-xs font-black bg-red-100 text-red-700 px-2 py-0.5 rounded">★★★★★</span>
            </div>
            <p class="text-sm text-slate-800 font-bold mb-4">中东冲突引爆运价，VLCC TCE+30.2%，BDTI 指数 +6.47%。</p>
            <div class="space-y-2 text-xs">
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">油运</span>
                <span class="font-black text-slate-900">中远海能、招商</span>
              </div>
              <div class="flex justify-between items-center p-2 bg-slate-50 rounded">
                <span class="font-bold text-slate-700">油气开采</span>
                <span class="font-black text-slate-900">中国海油、中海油服</span>
              </div>
            </div>
          `
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染跨赛道暗线 (3 月 4 日)
 */
function renderSecondaryPlays_0304() {
  return `
    <section id="sec5" class="space-y-5 scroll-mt-24">
      ${SectionHeader({
        title: '五、跨赛道暗线与二阶博弈',
        icon: createIcon('Crosshair', 'w-5 h-5 text-purple-600')
      })}

      <div class="grid md:grid-cols-2 gap-5">
        ${SecondaryPlayCard({
          event: '中东冲突 → 化工品供给收缩',
          result: '甲醇/乙二醇/尿素',
          logic: '伊朗是全球重要化工品生产国，海峡封锁导致出口中断，产品价格跳涨。3 月 2 日甲醇期货已大幅高开。',
          cognitive: '市场仅关注油运和原油，对化工品供给收缩认知不足。',
          stocks: '华鲁恒升、宝丰能源'
        })}

        ${SecondaryPlayCard({
          event: 'AI 算力紧缺 → 电力设备需求扩张',
          result: '变压器/开关柜/HVDC',
          logic: 'Token 调用量爆发 → GPU 服务器需求激增 → 高功率密度数据中心建设加速 → 电力设备需求扩张。',
          cognitive: '市场聚焦 AI 芯片和光模块，对电力设备环节关注度不足。',
          stocks: '平高电气、许继电气、思源电气'
        })}

        ${SecondaryPlayCard({
          event: '资源出口管制 → 固态电池加速',
          result: '固态电解质/硅基负极',
          logic: '锂镍资源受限 → 车企加速固态电池研发以绕过资源瓶颈。我国首个车用固态电池国标预计 2026 年 7 月发布。',
          cognitive: '市场仅炒作锂价上涨，忽视固态电池加速替代逻辑。',
          stocks: '厦钨新能、璞泰来、纳科诺尔'
        })}

        ${SecondaryPlayCard({
          event: '房地产政策底部 → 中介/物管受益',
          result: '房产中介/物业管理',
          logic: '新房成交 -79.1% 但二手房成交 +84% → 市场结构转向存量 → 中介服务需求增长 + 存量房翻新/物管需求释放。',
          cognitive: '市场仅关注房企估值修复，忽视中介和物管赛道阿尔法。',
          stocks: '贝壳、华润万象生活、绿城服务'
        })}
      </div>
    </section>
  `;
}

/**
 * 渲染配置总结 (3 月 4 日)
 */
function renderSummary_0304() {
  return `
    <section id="sec9" class="space-y-6 scroll-mt-24">
      <div class="bg-white rounded-3xl p-6 md:p-8 text-slate-900 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform transition-transform duration-500 hover:scale-[1.01]">
        <h3 class="text-2xl font-black mb-6 flex items-center text-slate-900">
          ${createIcon('PieChart', 'w-6 h-6 mr-2 text-red-600')} 总结与配置建议
        </h3>

        <p class="text-base font-bold mb-8 text-slate-800 leading-relaxed bg-slate-50 p-5 rounded-xl border border-slate-200">
          <span class="font-black text-white bg-slate-800 px-2.5 py-1 rounded mr-2 text-sm">核心思路</span>
          以 <span class="text-blue-600 font-black border-b border-blue-200 pb-0.5">AI 算力</span> 为进攻矛头，
          以 <span class="text-orange-600 font-black border-b border-orange-200 pb-0.5">资源民族主义标的</span> 为防御盾牌，
          以 <span class="text-emerald-600 font-black border-b border-emerald-200 pb-0.5">困境反转赛道</span> 为潜在阿尔法来源。
        </p>

        <div class="mb-8">
          <div class="flex justify-between text-xs font-black text-slate-500 mb-2 px-1 uppercase tracking-widest">
            <span>底仓 (50%)</span>
            <span>卫星仓 (30%)</span>
            <span>反转仓 (20%)</span>
          </div>
          <div class="h-4 w-full flex rounded-full overflow-hidden shadow-inner bg-slate-100">
            <div class="h-full bg-blue-500 w-1/2 border-r border-white"></div>
            <div class="h-full bg-orange-500 w-[30%] border-r border-white"></div>
            <div class="h-full bg-emerald-500 w-[20%]"></div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-5 mb-6">
          <div class="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
            <div class="text-sm text-blue-700 font-black mb-3 uppercase flex items-center">
              ${createIcon('CheckCircle2', 'w-4 h-4 mr-1.5')} Core 底仓 50%
            </div>
            <ul class="text-sm text-blue-950 space-y-2.5 font-bold">
              <li>AI 算力基础设施 (25%)</li>
              <li>快递 / 商用车 (15%)</li>
              <li>游戏龙头 (10%)</li>
            </ul>
          </div>
          <div class="bg-orange-50 p-5 rounded-xl border border-orange-100 shadow-sm">
            <div class="text-sm text-orange-600 font-black mb-3 uppercase flex items-center">
              ${createIcon('Zap', 'w-4 h-4 mr-1.5')} Satellite 卫星仓 30%
            </div>
            <ul class="text-sm text-orange-950 space-y-2.5 font-bold">
              <li>油运 VLCC (10%)</li>
              <li>新能源金属 - 锂镍 (10%)</li>
              <li>中东冲突化工受益 (5%)</li>
              <li>黄金 (5%)</li>
            </ul>
          </div>
          <div class="bg-emerald-50 p-5 rounded-xl border border-emerald-100 shadow-sm">
            <div class="text-sm text-emerald-700 font-black mb-3 uppercase flex items-center">
              ${createIcon('TrendingUp', 'w-4 h-4 mr-1.5')} Alpha 反转仓 20%
            </div>
            <ul class="text-sm text-emerald-950 space-y-2.5 font-bold">
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
 * 渲染投资决策内参完整内容 (3 月 4 日)
 */
function renderDecisionContent_0304() {
  return `
    ${DateSeparator({ date: '2026-03-04', isLatest: false })}

    <div class="space-y-3 mb-8 text-center animate-in slide-up delay-100">
      <h1 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
        投资决策内参 | 全局新闻深度推演
      </h1>
      <p class="text-sm font-bold text-slate-500">报告日期：2026 年 3 月 4 日</p>
    </div>

    <div class="space-y-10">
      ${renderCoreSummary_0304()}
      ${renderSMajorEvents_0304()}
      ${renderANews_0304()}
      ${renderHotTracks_0304()}
      ${renderSecondaryPlays_0304()}
      ${renderSummary_0304()}
    </div>
  `;
}
