---
layout: archive
title: "新闻内容"
permalink: /viewer/
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

/* 二维码弹窗 */
#qr-popup {
    display: none;
    position: fixed;
    bottom: 100px;
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

<script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js"></script>
<script>
    // 渲染图片详情
    const params = new URLSearchParams(window.location.search);
    const src = params.get('src');
    const title = params.get('title');
    const desc = params.get('desc');

    document.getElementById('viewer').innerHTML = `
        <h2 style="color:#007acc">${title}</h2>
        <img src="${src}" style="max-width:90%;border-radius:12px;" />
        <p style="margin-top:20px;font-size:1.1em;">${desc}</p>
    `;

    // 分享按钮逻辑
    function showQRCode() {
        const popup = document.getElementById('qr-popup');
        if (popup.style.display === 'block') {
            popup.style.display = 'none';
            return;
        }
        const url = window.location.href;
        QRCode.toCanvas(document.getElementById('qrcode'), url, { width: 140 }, function (error) {
            if (error) console.error(error);
        });
        popup.style.display = 'block';
    }
</script>
