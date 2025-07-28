---
layout: archive
permalink: /viewer/
author_profile: true
---

<!-- 新增样式 -->
<style>
#wechat-button, #copy-button {
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
#wechat-button:hover, #copy-button:hover {
    background-color: #4338ca;
    transform: scale(1.08);
}
#wechat-button { bottom: 80px; }
#copy-button { bottom: 140px; }

#wechat-qr {
    display: none;
    position: fixed;
    right: 24px;
    bottom: 200px;
    background: white;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 1001;
    text-align: center;
}
#wechat-qr img {
    width: 150px;
    height: 150px;
}
</style>

<!-- 新增按钮 -->
<button id="copy-button">复制链接</button>
<button id="wechat-button">微信分享</button>

<!-- 二维码框 -->
<div id="wechat-qr">
    <p style="margin: 0 0 8px;">微信扫码分享</p>
    <img id="wechat-qr-img" src="" alt="微信二维码" />
</div>

<!-- 原本已有的返回按钮 -->
<button id="back-button" onclick="history.back()">返回</button>

<!-- 内容展示区域 -->
<div id="viewer"></div>

<script>
const params = new URLSearchParams(window.location.search);
const src = params.get('src');
const title = params.get('title') || '图片预览';
const desc = params.get('desc') || '';

const currentUrl = window.location.href;

// 图片展示
document.getElementById('viewer').innerHTML = `
    <h2 style="color:#007acc">${title}</h2>
    <img src="${src}" style="max-width:90%;border-radius:12px;" />
    <p style="margin-top:20px;font-size:1.1em;">${desc}</p>
`;

// 微信分享二维码逻辑
const qrDiv = document.getElementById('wechat-qr');
const qrImg = document.getElementById('wechat-qr-img');
document.getElementById('wechat-button').addEventListener('click', () => {
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentUrl)}`;
    qrImg.src = qrUrl;
    qrDiv.style.display = qrDiv.style.display === 'none' ? 'block' : 'none';
});

// 复制链接按钮逻辑
document.getElementById('copy-button').addEventListener('click', () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
        alert("链接已复制，可粘贴到微信好友或群聊中！");
    }).catch(() => {
        alert("复制失败，请手动复制链接：" + currentUrl);
    });
});
</script>

