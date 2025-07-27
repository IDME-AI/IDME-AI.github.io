---
layout: archive
title: "viewer"
permalink: /viewer/
author_profile: true
---

<button onclick="history.back()" style="
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
">← 返回</button>

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
</script>
