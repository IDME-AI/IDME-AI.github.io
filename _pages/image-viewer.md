---
layout: archive
permalink: /viewer/
author_profile: true
---

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- 微信分享 Meta 标签（初始值，会被 JavaScript 动态覆盖） -->
  <meta property="og:title" content="默认标题" />
  <meta property="og:description" content="默认描述" />
  <meta property="og:image" content="https://idem-ai.github.io/default-image.jpg" />
  <meta property="og:url" content="{{ site.url }}{{ page.url }}" />
  <meta property="og:type" content="website" />

  <!-- 兼容其他平台 -->
  <meta name="description" content="默认描述" />
  <meta itemprop="name" content="默认标题" />
  <meta itemprop="image" content="https://idem-ai.github.io/default-image.jpg" />

  <style>
    #button-container {
      position: fixed;
      bottom: 24px;
      right: 24px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 1000;
    }
    #back-button, #share-button {
      background-color: #4f46e5;
      color: white;
      border: none;
      padding: 12px 20px;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
      transition: background-color 0.3s ease, transform 0.2s ease;
      width: 120px;
      text-align: center;
    }
    #back-button:hover {
      background-color: #4338ca;
      transform: scale(1.08);
    }
    #share-button {
      background-color: #10b981;
    }
    #share-button:hover {
      background-color: #059669;
      transform: scale(1.08);
    }
    #viewer {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>

<body>
  <div id="button-container">
    <button id="share-button">分享</button>
    <button id="back-button" onclick="history.back()">返回</button>
  </div>

  <div id="viewer"></div>

  <script>
    window.onload = function () {
      const params = new URLSearchParams(window.location.search);
      const src = params.get('src') || 'https://idem-ai.github.io/default-image.jpg';
      const title = params.get('title') || '默认标题';
      const desc = params.get('desc') || '默认描述';

      // 动态更新 Meta 标签（影响微信分享）
      document.querySelector('meta[property="og:title"]').content = title;
      document.querySelector('meta[property="og:description"]').content = desc;
      document.querySelector('meta[property="og:image"]').content = src;
      document.querySelector('meta[property="og:url"]').content = window.location.href;
      document.querySelector('meta[name="description"]').content = desc;
      document.querySelector('meta[itemprop="name"]').content = title;
      document.querySelector('meta[itemprop="image"]').content = src;

      // 渲染页面内容
      document.getElementById('viewer').innerHTML = `
        <h2 style="color:#007acc">${title}</h2>
        <img src="${src}" style="max-width:90%; border-radius:12px;" />
        <p style="margin-top:20px; font-size:1.1em;">${desc}</p>
      `;

      // 分享按钮逻辑
      document.getElementById('share-button').addEventListener('click', async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: title,
              text: desc,
              url: window.location.href
            });
          } catch (err) {
            console.log('用户取消了分享');
          }
        } else {
          try {
            await navigator.clipboard.writeText(window.location.href);
            alert('链接已复制！请粘贴到微信发送给朋友~');
          } catch (err) {
            prompt('请手动复制链接：', window.location.href);
          }
        }
      });
    };
  </script>
</body>