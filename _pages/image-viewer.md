---
layout: archive
permalink: /viewer/
author_profile: true
---

<style>
#button-container {
    position: fixed;
    bottom: 24px;
    right: 24px;
    display: flex;
    flex-direction: column; /* 竖直排列 */
    gap: 12px; /* 按钮间距 */
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
    width: 120px; /* 统一宽度 */
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
</style>

<div id="button-container">
  <button id="share-button">分享</button>
  <button id="back-button" onclick="history.back()">返回</button>
</div>

<div id="viewer"></div>

<!-- 二维码弹窗 -->
<div id="qrcode-modal" style="display:none; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%);
    background:white; padding:20px; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.25); z-index:2000;">
    <div id="qrcode"></div>
    <button onclick="document.getElementById('qrcode-modal').style.display='none'" 
            style="margin-top:12px; padding:6px 12px;">关闭</button>
</div>

<!-- 引入二维码生成库 -->
<script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.1/build/qrcode.min.js"></script>

{% raw %}
<script>
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const src = params.get('src');
    const title = params.get('title');
    const desc = params.get('desc');

    // 渲染页面内容
    const html = '<h2 style="color:#007acc">' + (title || '') + '</h2>' +
                 '<img src="' + (src || '') + '" style="max-width:90%;border-radius:12px;" />' +
                 '<p style="margin-top:20px;font-size:1.1em;">' + (desc || '') + '</p>';
    document.getElementById('viewer').innerHTML = html;

    // 分享按钮逻辑：生成二维码
    document.getElementById('share-button').addEventListener('click', function() {
        const url = window.location.href;
        const modal = document.getElementById('qrcode-modal');
        const qrcodeDiv = document.getElementById('qrcode');

        modal.style.display = 'block';
        qrcodeDiv.innerHTML = '';
        new QRCode(qrcodeDiv, {
            text: url,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff"
        });
    });
};
</script>
{% endraw %}
