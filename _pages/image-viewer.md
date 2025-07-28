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
    background-color: #4338ca;
    transform: scale(1.08);
}

#share-button {
    position: fixed;
    bottom: 24px;
    right: 120px;
    background-color: #10b981;
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

#share-button:hover {
    background-color: #059669;
    transform: scale(1.08);
}

/* 右下角社交分享图标栏 */
#social-share {
    position: fixed;
    bottom: 80px;
    right: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 9999;
}

#social-share a img {
    width: 32px;
    height: 32px;
    cursor: pointer;
    filter: drop-shadow(0 0 1px rgba(0,0,0,0.2));
    transition: transform 0.2s ease;
}

#social-share a img:hover {
    transform: scale(1.2);
}

/* 微信二维码弹窗样式 */
#wechat-popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    z-index: 2000;
    text-align: center;
}

#wechat-popup p {
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 1.1em;
}

#wechat-popup img {
    width: 180px;
    height: 180px;
}

#wechat-popup button {
    margin-top: 10px;
    padding: 6px 16px;
    border: none;
    background-color: #4f46e5;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;
}

#wechat-popup button:hover {
    background-color: #4338ca;
}
</style>

<button id="back-button" onclick="history.back()">返回</button>
<button id="share-button">分享</button>

<!-- 社交分享图标 -->
<div id="social-share">
  <a id="qq-share" target="_blank" title="分享到QQ" href="javascript:void(0);">
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tencentqq.svg" alt="QQ" />
  </a>
  <a id="weibo-share" target="_blank" title="分享到微博" href="javascript:void(0);">
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/sinaweibo.svg" alt="微博" />
  </a>
  <a id="wechat-share" href="javascript:void(0);" title="分享到微信">
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/wechat.svg" alt="微信" />
  </a>
</div>

<!-- 微信二维码弹窗 -->
<div id="wechat-popup">
  <p>微信扫码分享</p>
  <img id="wechat-qrcode" src="" alt="微信二维码" />
  <br/>
  <button onclick="document.getElementById('wechat-popup').style.display='none'">关闭</button>
</div>

<div id="viewer"></div>

{% raw %}
<script>
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const src = params.get('src') || '';
    const title = params.get('title') || '查看图片';
    const desc = params.get('desc') || '来自我的图片分享';
    const pageUrl = window.location.href;

    // 渲染图片与文字
    const html = '<h2 style="color:#007acc">' + title + '</h2>' +
                 '<img src="' + src + '" style="max-width:90%;border-radius:12px;" />' +
                 '<p style="margin-top:20px;font-size:1.1em;">' + desc + '</p>';
    document.getElementById('viewer').innerHTML = html;

    // 原生分享按钮
    document.getElementById('share-button').addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({ title: title, text: desc, url: pageUrl });
                console.log('已分享');
            } catch (err) {
                console.error('分享失败:', err);
            }
        } else {
            try {
                await navigator.clipboard.writeText(pageUrl);
                alert('已复制链接，可粘贴发送给好友～');
            } catch (err) {
                prompt('复制失败，请手动复制：', pageUrl);
            }
        }
    });

    // 生成平台分享链接
    const pic = encodeURIComponent(src);
    const shareUrl = encodeURIComponent(pageUrl);
    const shareTitle = encodeURIComponent(title);
    const shareDesc = encodeURIComponent(desc);

    // QQ分享链接
    document.getElementById('qq-share').href =
        `https://connect.qq.com/widget/shareqq/index.html?url=${shareUrl}&title=${shareTitle}&summary=${shareDesc}&pics=${pic}`;

    // 微博分享链接
    document.getElementById('weibo-share').href =
        `https://service.weibo.com/share/share.php?url=${shareUrl}&title=${shareTitle}&pic=${pic}`;

    // 微信二维码弹窗逻辑
    const wechatBtn = document.getElementById('wechat-share');
    const qrImg = document.getElementById('wechat-qrcode');
    const wechatPopup = document.getElementById('wechat-popup');

    wechatBtn.onclick = () => {
        qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=' + encodeURIComponent(pageUrl);
        wechatPopup.style.display = 'block';
    };
};
</script>
{% endraw %}
