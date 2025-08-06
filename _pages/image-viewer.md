---
layout: archive
permalink: /viewer/
author_profile: true
---

<!-- 引入 share.js 样式和脚本 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/share.js@1.0.16/dist/css/share.min.css">
<script src="https://cdn.jsdelivr.net/npm/share.js@1.0.16/dist/js/share.min.js"></script>

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

.share-component {
    margin-top: 40px;
    text-align: center;
}
</style>

<div id="button-container">
  <button id="share-button">分享</button>
  <button id="back-button" onclick="history.back()">返回</button>
</div>

<div id="viewer"></div>

<!-- 社交平台分享按钮 -->
<div class="share-component"
     data-sites="wechat,weibo,qq"
     data-title=""
     data-description=""
     data-image=""
     data-url="">
</div>

{% raw %}
<script>
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const src = params.get('src');
    const title = params.get('title');
    const desc = params.get('desc');

    // 生成内容 HTML
    const html = '<h2 style="color:#007acc">' + (title || '') + '</h2>' +
                 '<img src="' + (src || '') + '" style="max-width:90%;border-radius:12px;" />' +
                 '<p style="margin-top:20px;font-size:1.1em;">' + (desc || '') + '</p>';
    document.getElementById('viewer').innerHTML = html;

    // 动态填充 share.js 按钮内容
    const shareContainer = document.querySelector('.share-component');
    if (shareContainer) {
        shareContainer.setAttribute('data-title', title || '查看图片');
        shareContainer.setAttribute('data-description', desc || '');
        shareContainer.setAttribute('data-url', window.location.href);
        shareContainer.setAttribute('data-image', src || '');

        // 初始化 share.js（必须调用）
        if (window.shareInit) {
            shareInit(); // 重新初始化组件
        }
    }

    // 绑定分享按钮逻辑（移动端原生分享或复制链接）
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
