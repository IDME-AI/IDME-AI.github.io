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
</style>

<div id="button-container">
  <button id="share-button">分享</button>
  <button id="back-button" onclick="history.back()">返回</button>
</div>

<div id="viewer"></div>

{% raw %}
<script src="https://cdn.jsdelivr.net/npm/qrcodejs2@0.0.2/qrcode.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>
<script>
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    // 解码 URL 中文参数
    const src = decodeURIComponent(params.get('src') || '');
    const title = decodeURIComponent(params.get('title') || '');
    const desc = decodeURIComponent(params.get('desc') || '');
    const shareUrl = window.location.href;

    // 页面显示原始内容
    const html = `
        <h2 style="color:#007acc">${title}</h2>
        <img src="${src}" style="max-width:90%;border-radius:12px;" />
        <p style="margin-top:20px;font-size:1.1em;">${desc}</p>
    `;
    document.getElementById('viewer').innerHTML = html;

    document.getElementById('share-button').addEventListener('click', () => {
        // 创建临时海报容器（不影响 #viewer）
        const posterWrapper = document.createElement("div");
        posterWrapper.style.padding = "20px";
        posterWrapper.style.background = "#fff";
        posterWrapper.style.borderRadius = "12px";
        posterWrapper.style.display = "inline-block";
        posterWrapper.style.textAlign = "center";

        posterWrapper.innerHTML = `
            <h2 style="color:#007acc; margin-bottom:12px;">${title}</h2>
            <img src="${src}" style="max-width:90%;border-radius:12px;" />
            <p style="margin-top:20px;font-size:1.1em;">${desc}</p>
            <div id="qrcode"></div>
            <p style="margin-top:12px; font-size:0.9em; color:#888;">扫码查看详情</p>
        `;
        document.body.appendChild(posterWrapper);

        // 生成二维码
        new QRCode(posterWrapper.querySelector("#qrcode"), {
            text: shareUrl,
            width: 120,
            height: 120
        });

        // 使用 html2canvas 生成海报图片
        html2canvas(posterWrapper, {useCORS: true}).then(canvas => {
            const imgURL = canvas.toDataURL("image/png");

            // 弹窗显示海报
            const win = window.open();
            win.document.write("<img src='" + imgURL + "' style='max-width:100%;border-radius:12px;'/>");
            win.document.title = "海报预览";

            // 自动下载海报
            const link = document.createElement("a");
            link.download = "poster.png";
            link.href = imgURL;
            link.click();

            // 删除临时 DOM
            document.body.removeChild(posterWrapper);
        });
    });
};
</script>
{% endraw %}
