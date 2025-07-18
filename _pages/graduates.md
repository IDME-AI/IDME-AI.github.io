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
  <div class="logo-card"><img src="/images/比亚迪.png" alt="企业1"></div>
  <div class="logo-card"><img src="/images/华为.png" alt="企业2"></div>
  <div class="logo-card"><img src="/images/enterprise3.png" alt="企业3"></div>
  <div class="logo-card"><img src="/images/enterprise3.png" alt="企业3"></div>
  <div class="logo-card"><img src="/images/enterprise3.png" alt="企业3"></div>
  <div class="logo-card"><img src="/images/enterprise3.png" alt="企业3"></div>
  <div class="logo-card"><img src="/images/enterprise3.png" alt="企业3"></div>
  <div class="logo-card"><img src="/images/enterprise3.png" alt="企业3"></div>
  <div class="logo-card"><img src="/images/enterprise3.png" alt="企业3"></div>
  <div class="logo-card"><img src="/images/enterprise3.png" alt="企业3"></div>
</div>

<div id="university" class="logo-grid" style="display: none;">
  <div class="logo-card"><img src="/images/logos/university1.png" alt="高校1"></div>
  <div class="logo-card"><img src="/images/logos/university2.png" alt="高校2"></div>
  <div class="logo-card"><img src="/images/logos/university3.png" alt="高校3"></div>
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
