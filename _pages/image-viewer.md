---
layout: archive
permalink: /viewer/
author_profile: true
---

<style>
#back-button {
    position: fixed;
    bottom: 24px;
    right: 24px;
    background-color: #4f46e5;
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 8px;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    transition: background-color 0.3s ease, transform 0.2s ease;
}

#back-button:hover {
    background-color: #4338ca; /* 更深蓝紫色 */
    transform: scale(1.08);
}
</style>

<script src="https://cdn.jsdelivr.net/npm/qrious@4.0.2/dist/qrious.min.js"></script>

<button id="back-button" onclick="history.back()">返回</button>

<div id="viewer"></div>

<div id="qrcode" style="margin-top: 40px; text-align:center;">
    <p style="font-size: 1.1em;">扫码分享到微信</p>
    <canvas id="qrcode-canvas"></canvas>
</div>

<script>
    const params = new URLSearchParams(window.location.search);
    const src = params.get('src');
    const title = params.get('title');
    const desc = params.get('desc');

    document.getElementById('viewer').innerHTML = `
        <h2 style="color:#007acc">${title}</h2>
        <img src="${src}" style="max-width:90%;border-radius:12px;" />
        <p style="margin-top:20px;font-size:1.1em;">${desc}</p>
    `;

    // 添加二维码生成
    const fullUrl = window.location.href;
    const qr = new QRious({
        element: document.getElementById('qrcode-canvas'),
        value: fullUrl,
        size: 180,
        level: 'H',
        background: 'white',
        foreground: '#4f46e5'
    });
</script>
