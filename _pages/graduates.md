---
layout: archive
title: "Graduates"
permalink: /graduates/
author_profile: true
---

<style>
  .filter-buttons {
    margin-bottom: 25px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }

  .filter-buttons button {
    padding: 8px 22px;
    border: none;
    border-radius: 9999px;
    background: #e0e7ff;
    color: #333;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.25s ease, box-shadow 0.25s ease, color 0.25s ease, transform 0.15s ease;
  }

  .filter-buttons button:hover {
    background-color: #c7d2fe;
    box-shadow: inset 0 0 8px rgba(0,0,0,0.12);
    transform: translateY(-2px);
  }

  .filter-buttons button.active {
    background-color: #4f46e5;
    color: #fff;
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.6);
    transform: translateY(-2px);
  }

  .logo-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .logo-card {
    width: 160px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 12px;
    background-color: #fff;
    padding: 10px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
  }

  .logo-card img {
    max-height: 70px;
    max-width: 100%;
    object-fit: contain;
    margin-bottom: 8px;
  }

  .logo-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }

  .logo-desc {
    font-size: 0.85rem;
    color: #555;
    line-height: 1.4;
  }

  @media (max-width: 600px) {
    .logo-card {
      width: 120px;
    }
  }
</style>

<div class="filter-buttons">
  <button class="active" onclick="switchTab('enterprise', this)">企业</button>
  <button onclick="switchTab('university', this)">高校</button>
</div>

<!-- 企业 Logo（按知名度排序） -->
<div id="enterprise" class="logo-grid">
  <div class="logo-card">
    <img src="/images/enterprise/华为.png" alt="华为">
    <div class="logo-desc">全球领先的ICT基础设施和智能终端提供商。</div>
  </div>
  <div class="logo-card">
    <img src="/images/enterprise/阿里巴巴.png" alt="阿里巴巴">
    <div class="logo-desc">中国最大电商平台和云计算服务提供商。</div>
  </div>
  <div class="logo-card">
    <img src="/images/enterprise/百度.png" alt="百度">
    <div class="logo-desc">中国领先的搜索引擎和AI技术公司。</div>
  </div>
  <div class="logo-card">
    <img src="/images/enterprise/国家电网.png" alt="国家电网">
    <div class="logo-desc">全球最大的公用事业企业，负责全国电力输送。</div>
  </div>
  <div class="logo-card">
    <img src="/images/enterprise/中国移动.png" alt="中国移动">
    <div class="logo-desc">全球用户最多的移动通信运营商。</div>
  </div>
  <div class="logo-card">
    <img src="/images/enterprise/比亚迪.png" alt="比亚迪">
    <div class="logo-desc">全球领先的新能源汽车制造商。</div>
  </div>
  <div class="logo-card">
    <img src="/images/enterprise/小米.png" alt="小米">
    <div class="logo-desc">智能手机与IoT平台领导者。</div>
  </div>
  <div class="logo-card">
    <img src="/images/enterprise/美的logo.png" alt="美的">
    <div class="logo-desc">全球知名的智能家电和自动化解决方案企业。</div>
  </div>
  <div class="logo-card">
    <img src="/images/enterprise/蚂蚁集团备份.png" alt="蚂蚁集团">
    <div class="logo-desc">支付宝母公司，全球领先的金融科技企业。</div>
  </div>
  <div class="logo-card">
    <img src="/images/enterprise/英特尔.png" alt="英特尔">
    <div class="logo-desc">全球领先的芯片制造商。</div>
  </div>
  <div class="logo-card">
    <img src="/images/enterprise/海信logo.png" alt="海信">
    <div class="logo-desc">智能电视和家电知名品牌。</div>
  </div>
  <div class="logo-card">
    <img src="/images/enterprise/中国电信.png" alt="中国电信">
    <div class="logo-desc">国家级基础电信运营商之一。</div>
  </div>
  <div class="logo-card">
    <img src="/images/enterprise/长安汽车v标&logo-copy.png" alt="长安汽车">
    <div class="logo-desc">中国主要的汽车制造商之一。</div>
  </div>
  <div class="logo-card">
    <img src="/images/enterprise/猿辅导.png" alt="猿辅导">
    <div class="logo-desc">中国领先的在线教育平台。</div>
  </div>
  <div class="logo-card">
    <img src="/images/enterprise/浙商银行.png" alt="浙商银行">
    <div class="logo-desc">中国股份制商业银行之一。</div>
  </div>
  <div class="logo-card">
    <img src="/images/enterprise/渤海银行.png" alt="渤海银行">
    <div class="logo-desc">总部设于天津的全国性股份制商业银行。</div>
  </div>
  <div class="logo-card">
    <img src="/images/enterprise/东软.png" alt="东软">
    <div class="logo-desc">国内知名软件与智能医疗服务企业。</div>
  </div>
</div>

<!-- 高校 Logo（按知名度排序） -->
<div id="university" class="logo-grid" style="display: none;">
  <div class="logo-card">
    <img src="/images/university/清华大学.png" alt="清华大学">
    <div class="logo-desc">中国最顶尖的理工类大学之一。</div>
  </div>
  <div class="logo-card">
    <img src="/images/university/浙江大学.png" alt="浙江大学">
    <div class="logo-desc">综合实力强劲的顶尖985高校。</div>
  </div>
  <div class="logo-card">
    <img src="/images/university/武汉大学.png" alt="武汉大学">
    <div class="logo-desc">以信息科学、测绘和法学著称。</div>
  </div>
  <div class="logo-card">
    <img src="/images/university/东北大学.png" alt="东北大学">
    <div class="logo-desc">材料、冶金和自动化方向强校。</div>
  </div>
  <div class="logo-card">
    <img src="/images/university/电子科技大学.png" alt="电子科技大学">
    <div class="logo-desc">国内电子信息领域一流学府。</div>
  </div>
  <div class="logo-card">
    <img src="/images/university/大连理工大学.png" alt="大连理工大学">
    <div class="logo-desc">国家重点建设的理工类高校。</div>
  </div>
  <div class="logo-card">
    <img src="/images/university/深圳大学.png" alt="深圳大学">
    <div class="logo-desc">发展迅速的新兴高校。</div>
  </div>
  <div class="logo-card">
    <img src="/images/university/卡内基梅隆大学.jpg" alt="CMU">
    <div class="logo-desc">美国著名计算机与人工智能名校。</div>
  </div>
  <div class="logo-card">
    <img src="/images/university/康奈尔大学.jpg" alt="康奈尔大学">
    <div class="logo-desc">常春藤盟校成员，综合实力强。</div>
  </div>
  <div class="logo-card">
    <img src="/images/university/东京大学.jpg" alt="东京大学">
    <div class="logo-desc">日本最高学府，科研实力雄厚。</div>
  </div>
</div>

<script>
  function switchTab(tabId, btn) {
    document.getElementById('enterprise').style.display = tabId === 'enterprise' ? 'flex' : 'none';
    document.getElementById('university').style.display = tabId === 'university' ? 'flex' : 'none';

    const buttons = document.querySelectorAll('.filter-buttons button');
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
</script>
