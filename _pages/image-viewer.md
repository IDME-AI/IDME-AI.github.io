---
layout: archive
title: "viewer"
permalink: /viewer/
author_profile: true
---

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
