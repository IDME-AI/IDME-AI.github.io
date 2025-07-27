---
layout: archive
permalink: /viewer/
author_profile: true
---

<style>
#back-button,
#wechat-button {
    position: fixed;
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

#back-button:hover,
#wechat-button:hover {
    background-color: #4338ca;
    transform: scale(1.08);
}

#back-button {
    bottom: 24px;
}

#wechat-button {
    bottom: 74px; /* 比返回按钮高出50px */
}
</style>

<!-- 微信分享按钮 -->
<button id="wechat-button" onclick="toggleQRCode()">微信分享</button>

<!-- 返回按钮 -->
<button id="back-button" onclick="history.back()">返回</button>

<!-- 微信二维码弹出框 -->
<div id="wechat-qr" style="display:none;position:fixed;right:24px;bottom:130px;background:white;padding:10px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.2);z-index:1001;">
    <img id="wechat-qr-img" src="" alt="微信二维码" style="width:150px;height:150px;" />
</div>

<div id="viewer"></div>

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

    // 二维码开关逻辑
    function toggleQRCode() {
        const qrDiv = document.getElementById('wechat-qr');
        const qrImg = document.getElementById('wechat-qr-img');
        const currentUrl = window.location.href;

        // 使用微信通用二维码 API（可替换为你的生成方式）
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentUrl)}`;
        qrImg.src = qrUrl;

        qrDiv.style.display = qrDiv.style.display === 'none' ? 'block' : 'none';
    }
</script>
