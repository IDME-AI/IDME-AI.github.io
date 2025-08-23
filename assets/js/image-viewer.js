// 引入 QRCode.js
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js";
document.head.appendChild(script);

script.onload = function () {
    window.addEventListener('DOMContentLoaded', function() {
        const params = new URLSearchParams(window.location.search);
        const src = params.get('src');
        const title = params.get('title');
        const desc = params.get('desc');

        // 渲染内容
        const html = `<h2>${title || ''}</h2>
                      <img src="${src || ''}" />
                      <p>${desc || ''}</p>`;
        document.getElementById('viewer').innerHTML = html;

        // 分享生成二维码
        document.getElementById('share-button').addEventListener('click', function() {
            const url = window.location.href;

            const qrcodeContainer = document.getElementById('qrcode-container');
            qrcodeContainer.innerHTML = ''; // 清空上一次二维码

            new QRCode(qrcodeContainer, {
                text: url,
                width: 180,
                height: 180,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
        });
    });
};
