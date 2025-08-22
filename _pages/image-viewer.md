<!-- 放置海报结果 -->
<div id="poster-container" style="display:none; text-align:center; margin-top:20px;"></div>

<!-- 引入二维码库 -->
<script src="https://cdn.jsdelivr.net/npm/qrcodejs2@0.0.2/qrcode.min.js"></script>
<!-- 引入 html2canvas -->
<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>

<script>
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const src = params.get('src');
    const title = params.get('title');
    const desc = params.get('desc');
    const shareUrl = window.location.href;  // 当前页面链接

    const viewer = document.getElementById('viewer');
    const html = `
        <div id="poster-content" style="padding:20px; background:#fff; border-radius:12px; display:inline-block; text-align:center;">
          <h2 style="color:#007acc; margin-bottom:12px;">${title || ''}</h2>
          <img src="${src || ''}" style="max-width:90%;border-radius:12px;" />
          <p style="margin-top:20px;font-size:1.1em;">${desc || ''}</p>
          <div id="qrcode" style="margin-top:20px;"></div>
          <p style="margin-top:12px; font-size:0.9em; color:#888;">扫码查看详情</p>
        </div>`;
    viewer.innerHTML = html;

    // 生成二维码
    new QRCode(document.getElementById("qrcode"), {
        text: shareUrl,
        width: 120,
        height: 120
    });

    document.getElementById('share-button').addEventListener('click', async () => {
        const poster = document.getElementById('poster-content');
        html2canvas(poster, {useCORS: true}).then(canvas => {
            const imgURL = canvas.toDataURL("image/png");

            // 生成海报展示区
            const posterContainer = document.getElementById('poster-container');
            posterContainer.style.display = "block";
            posterContainer.innerHTML = `
                <img src="${imgURL}" style="max-width:100%; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.2);" />
                <p style="margin-top:10px; font-size:0.9em; color:#666;">长按保存海报，分享到微信</p>
            `;

            // 可选：自动下载
            const link = document.createElement("a");
            link.download = "poster.png";
            link.href = imgURL;
            link.click();
        });
    });
};
</script>
