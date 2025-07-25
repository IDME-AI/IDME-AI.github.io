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
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #eee;
    border-radius: 12px;
    background-color: #fff;
    padding: 10px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .logo-card img {
    max-height: 70px;
    max-width: 100%;
    object-fit: contain;
  }

  .logo-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }

  .logo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
}

  .logo-caption {
  margin-top: 8px;
  text-align: center;
  font-size: 0.875rem;
  color: #555;
  line-height: 1.2;
}

  .logo-org {
  font-weight: bold;
  color: #333;
}

  @media (max-width: 600px) {
    .logo-card {
      width: 120px;
      height: 70px;
    }
  }
</style>

<div class="filter-buttons">
  <button class="active" onclick="switchTab('enterprise', this)">企业</button>
  <button onclick="switchTab('university', this)">高校</button>
</div>

<div id="enterprise" class="logo-grid">
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/阿里巴巴.png" alt="企业1"></div>
      <div class="logo-caption">喻鑫、张超</div>
      <div class="logo-caption logo-org">阿里巴巴</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/蚂蚁集团备份.png" alt="企业2"></div>
      <div class="logo-caption">丁慧</div>
      <div class="logo-caption logo-org">蚂蚁集团</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/粤港澳大湾区数字经济研究院.png" alt="企业3"></div>
      <div class="logo-caption">占恒</div>
      <div class="logo-caption logo-org">粤港澳大湾区数字经济研究院</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/微信.png" alt="企业4"></div>
      <div class="logo-caption">刘浩</div>
      <div class="logo-caption logo-org">微信</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/百度.png" alt="企业5"></div>
      <div class="logo-caption">李瑞锋</div>
      <div class="logo-caption logo-org">百度</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/华为.png" alt="企业6"></div>
      <div class="logo-caption">王超、降清玲</div>
      <div class="logo-caption logo-org">华为</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/比亚迪.png" alt="企业7"></div>
      <div class="logo-caption">刘祥、何睿</div>
      <div class="logo-caption logo-org">比亚迪</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/英特尔.png" alt="企业8"></div>
      <div class="logo-caption">赵泽铭</div>
      <div class="logo-caption logo-org">英特尔</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/小米.png" alt="企业9"></div>
      <div class="logo-caption">黄虹</div>
      <div class="logo-caption logo-org">小米</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/国家电网.png" alt="企业10"></div>
      <div class="logo-caption">李冲</div>
      <div class="logo-caption logo-org">国家电网</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/东软.png" alt="企业11"></div>
      <div class="logo-caption">王鑫、何尧</div>
      <div class="logo-caption logo-org">东软</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/美的logo.png" alt="企业12"></div>
      <div class="logo-caption">廉钰晨</div>
      <div class="logo-caption logo-org">美的</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/长安汽车.png" alt="企业13"></div>
      <div class="logo-caption">张国梁</div>
      <div class="logo-caption logo-org">长安汽车</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/海信logo.png" alt="企业14"></div>
      <div class="logo-caption">张盼、陈爽</div>
      <div class="logo-caption logo-org">海信</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/中国移动.png" alt="企业15"></div>
      <div class="logo-caption">娄有铭</div>
      <div class="logo-caption logo-org">中国移动</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/中国电信.png" alt="企业16"></div>
      <div class="logo-caption">杨洪波、杨卓</div>
      <div class="logo-caption logo-org">中国电信</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/浙商银行.png" alt="企业17"></div>
      <div class="logo-caption">方秋生</div>
      <div class="logo-caption logo-org">浙商银行</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/渤海银行.png" alt="企业18"></div>
      <div class="logo-caption">张曦予</div>
      <div class="logo-caption logo-org">渤海银行</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/enterprise/猿辅导.png" alt="企业19"></div>
      <div class="logo-caption">黄雪纯</div>
      <div class="logo-caption logo-org">猿辅导</div>
    </div>
</div>

<div id="university" class="logo-grid" style="display: none;">
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/university/卡内基梅隆大学.png" alt="高校1"></div>
      <div class="logo-caption">姜馨怡</div>
      <div class="logo-caption logo-org">卡内基梅隆大学</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/university/康奈尔大学.jpg" alt="高校2"></div>
      <div class="logo-caption">刘雨龙</div>
      <div class="logo-caption logo-org">康奈尔大学</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/university/东京大学.png" alt="高校3"></div>
      <div class="logo-caption">李东航</div>
      <div class="logo-caption logo-org">东京大学</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/university/清华大学.png" alt="高校4"></div>
      <div class="logo-caption">史高科</div>
      <div class="logo-caption logo-org">清华大学</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/university/浙江大学.png" alt="高校5"></div>
      <div class="logo-caption">王春</div>
      <div class="logo-caption logo-org">浙江大学</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/university/哈尔滨工业大学.png" alt="高校6"></div>
      <div class="logo-caption">王晗</div>
      <div class="logo-caption logo-org">哈尔滨工业大学</div>
<div class="logo-caption logo-org">中关村国家实验室</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/university/武汉大学.png" alt="高校7"></div>
      <div class="logo-caption">谢玄</div>
      <div class="logo-caption logo-org">武汉大学</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/university/电子科技大学.png" alt="高校8"></div>
      <div class="logo-caption">舒钧泰</div>
      <div class="logo-caption logo-org">电子科技大学</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/university/东北大学.png" alt="高校9"></div>
      <div class="logo-caption">张世宁、常文飞等</div>
      <div class="logo-caption logo-org">东北大学</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/university/大连理工大学.png" alt="高校10"></div>
      <div class="logo-caption">马兆楠</div>
      <div class="logo-caption logo-org">大连理工大学</div>
    </div>
    <div class="logo-wrapper">
      <div class="logo-card"><img src="/images/university/深圳大学.png" alt="高校11"></div>
      <div class="logo-caption">张家屯</div>
      <div class="logo-caption logo-org">深圳大学</div>
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
