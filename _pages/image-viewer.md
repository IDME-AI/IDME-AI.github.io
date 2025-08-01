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

{% raw %}
<script>
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const src = params.get('src');
    const title = params.get('title');
    const desc = params.get('desc');

    const html = '<h2 style="color:#007acc">' + (title || '') + '</h2>' +
                 '<img src="' + (src || '') + '" style="max-width:90%;border-radius:12px;" />' +
                 '<p style="margin-top:20px;font-size:1.1em;">' + (desc || '') + '</p>';
    document.getElementById('viewer').innerHTML = html;

    document.getElementById('share-button').addEventListener('click', async () => {
        const url = window.location.href;
        const shareTitle = title || '查看图片';
        const shareText = desc || '来自我的图片分享';

        if (navigator.share) {
            try {
                await navigator.share({
                    title: shareTitle,
                    text: shareText,
                    url: url,
                });
                console.log('已分享');
            } catch (err) {
                console.error('分享失败:', err);
            }
        } else {
            try {
                await navigator.clipboard.writeText(url);
                alert('已复制链接，可粘贴发送给好友～');
            } catch (err) {
                prompt('复制失败，请手动复制：', url);
            }
        }
    });
};
</script>
{% endraw %}
