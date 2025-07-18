---
layout: archive
title: "Graduates"
permalink: /graduates/
author_profile: true
---

<style>
  .logo-card {
    transition: all 0.3s ease;
  }
  .logo-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
  .tab-button.active {
    background-color: #3b82f6;
    color: white;
  }
</style>

<div class="bg-gray-50 min-h-screen flex flex-col">

  <!-- 顶部标题 -->
  <header class="py-12 px-4 text-center">
    <h1 class="text-3xl md:text-4xl font-bold text-gray-800">合作伙伴</h1>
    <div class="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>

    <!-- 分类导航 -->
    <div class="flex justify-center mt-8 space-x-4">
      <button id="enterpriseTab" class="tab-button active px-6 py-2 rounded-full border border-blue-500 text-blue-500 font-medium transition-colors">
        企业
      </button>
      <button id="universityTab" class="tab-button px-6 py-2 rounded-full border border-gray-500 text-gray-500 font-medium transition-colors">
        高校
      </button>
    </div>
  </header>

  <!-- Logo 网格 -->
  <main class="flex-grow container mx-auto px-4 pb-12">
    <div id="logoContainer" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

      <!-- 企业 -->
      {% assign companies = 
        "创新科技:https://s.coze.cn/image/kPa2DJJQhnk/,
         数字未来:https://s.coze.cn/image/JR6aviYi6lo/,
         生态环保:https://s.coze.cn/image/kNjafsK9MTQ/,
         金融科技:https://s.coze.cn/image/Q7l8-7MpI28/,
         智慧教育:https://s.coze.cn/image/IelQBmg_gZc/" | split: "," %}
      {% for c in companies %}
        {% assign parts = c | split: ":" %}
        <div class="logo-card enterprise bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm">
          <img src="{{ parts[1] }}" alt="企业Logo" class="h-24 w-auto object-contain mb-4">
          <span class="text-gray-700 font-medium">{{ parts[0] }}</span>
        </div>
      {% endfor %}

      <!-- 高校 -->
      {% assign universities =
        "清华大学:https://s.coze.cn/image/rwQi8Bw_aqU/,
         北京大学:https://s.coze.cn/image/YX-waQWcwG4/,
         浙江大学:https://s.coze.cn/image/qhjQsqI5z7w/,
         复旦大学:https://s.coze.cn/image/eeVwGE_w8eA/,
         上海交通大学:https://s.coze.cn/image/IaOPmbOza3g/" | split: "," %}
      {% for u in universities %}
        {% assign parts = u | split: ":" %}
        <div class="logo-card university bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-sm">
          <img src="{{ parts[1] }}" alt="高校Logo" class="h-24 w-auto object-contain mb-4">
          <span class="text-gray-700 font-medium">{{ parts[0] }}</span>
        </div>
      {% endfor %}
    </div>
  </main>

  <!-- 页脚 -->
  <footer class="bg-white py-6 px-4 border-t border-gray-200">
    <div class="container mx-auto text-center text-gray-500 text-sm">
      <p>© 2023 合作伙伴展示页面</p>
      <p class="mt-2">created by <a href="https://space.coze.cn" class="text-blue-500 hover:text-blue-700">coze space</a></p>
      <p class="mt-1">页面内容均由 AI 生成，仅供参考</p>
    </div>
  </footer>

</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const enterpriseTab = document.getElementById('enterpriseTab');
    const universityTab = document.getElementById('universityTab');
    const logoCards = document.querySelectorAll('.logo-card');

    function filterLogos(category) {
      logoCards.forEach(card => {
        card.style.display = card.classList.contains(category) ? 'flex' : 'none';
      });
    }

    function setActive(tab) {
      [enterpriseTab, universityTab].forEach(btn => {
        btn.classList.remove('active', 'bg-blue-500', 'text-white', 'border-blue-500');
        btn.classList.add('border-gray-500', 'text-gray-500');
      });
      tab.classList.add('active', 'bg-blue-500', 'text-white', 'border-blue-500');
      tab.classList.remove('border-gray-500', 'text-gray-500');
    }

    enterpriseTab.addEventListener('click', () => {
      filterLogos('enterprise');
      setActive(enterpriseTab);
    });

    universityTab.addEventListener('click', () => {
      filterLogos('university');
      setActive(universityTab);
    });

    // 默认显示企业
    filterLogos('enterprise');
  });
</script>
