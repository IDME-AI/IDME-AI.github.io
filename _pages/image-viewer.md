---
layout: archive
title: "图片查看"
permalink: /viewer/
author_profile: true
---

<style>
.share-buttons {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1000;
}

.share-buttons button {
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.share-buttons button:hover {
  background-color: #4338ca;
  transform: scale(1.08);
}

#qr-popup {
  display: none;
  position: fixed;
  bottom: 120px;
  right: 30px;
  background: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  z-index: 1001;
  text-align: center;
}
#qr-popup p {
  margin-top: 8px;
  font-size: 0.9em;
  color: #333;
}
</style>

<div class="share-buttons">
  <button onclick="showQRCode()">📤 分享</button>
  <button onclick="history.back()">← 返回</button>
</div>

<div id="qr-popup">
  <canvas id="qrcode"></canvas>
  <p>微信扫码分享当前页面</p>
</div>

<div id="viewer"></div>

<!-- 引入二维码生成库 -->
<script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js"></script>

<script>
  const params = new URLSearchParams(window.location.search);
  const src = params.get('src');
  const title = params.get('title');
  const desc = params.get('desc');

  // 显示图片信息
  document.getElementById('viewer').innerHTML = `
      <h2 style="color:#007acc">${title}</h2>
      <img src="${src}" style="max-width:90%;border-radius:12px;" />
      <p style="margin-top:20px;font-size:1.1em;">${desc}</p>
  `;

  // 分享按钮点击事件
  function showQRCode() {
    const popup = document.getElementById('qr-popup');
    if (popup.style.display === 'block') {
      popup.style.display = 'none';
      return;
    }
    const url = window.location.href;

    QRCode.toCanvas(document.getElementById('qrcode'), url, { width: 140 }, function (error) {
      if (error) {
        console.error("二维码生成失败：", error);
      } else {
        popup.style.display = 'block';
      }
    });
  }
</script>
