// 确保 QRCode.js 已加载，如果没有就动态加载
(function() {
    function loadQRCode(callback) {
        if (typeof QRCode !== 'undefined') {
            callback();
        } else {
            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js";
            script.onload = callback;
            document.head.appendChild(script);
        }
    }

    loadQRCode(function() {
        // QRCode.js 已加载，开始初始化
        document.addEventListener('DOMContentLoaded', function() {
            const params = new URLSearchParams(window.location.search);
            const src = params.get('src');
            const title = params.get('title');
            const desc = params.get('desc');

            // 渲染内容
            const html = `<h2>${title || ''}</h2>
                          <img src="${src || ''}" />
                          <p>${desc || ''}</p>`;
            const viewer = document.getElementById('viewer');
            if (viewer) viewer.innerHTML = html;

            const shareBtn = document.getElementById('share-button');
            const qrcodeContainer = document.getElementById('qrcode-container');

            if (shareBtn && qrcodeContainer) {
                shareBtn.addEventListener('click', function() {
                    qrcodeContainer.innerHTML = ''; // 清空之前二维码
                    const url = window.location.href;

                    new QRCode(qrcodeContainer, {
                        text: url,
                        width: 180,
                        height: 180,
                        colorDark: "#000000",
                        colorLight: "#ffffff",
                        correctLevel: 2 // H 纠错级别
                    });
                });
            }
        });
    });
})();
