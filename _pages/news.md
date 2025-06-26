---
layout: archive
title: "News"
permalink: /news/
author_profile: true
---

<!-- 自定义CSS可放入assets/css/custom.css中 -->
<style>
  .gallery-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .gallery-item {
    width: calc(33.333% - 20px);
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
  }
  .gallery-item img {
    width: 100%;
    height: auto;
    display: block;
  }
  .tags {
    margin-top: 10px;
  }
  .tag-button {
    margin: 5px;
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    background-color: #eee;
    cursor: pointer;
  }
  .tag-button.active {
    background-color: #007bff;
    color: white;
  }
  @media (max-width: 768px) {
    .gallery-item {
      width: 100%;
    }
  }
</style>

<!-- Tag 过滤按钮 -->
<div id="tag-buttons" style="margin-bottom: 20px;"></div>

<!-- 图片展示区 -->
<div class="gallery-container" id="gallery"></div>

<!-- JavaScript 逻辑 -->
<script>
  const images = [
    { src: "../images/profile.jpg", title: "实验室合影", tags: ["团队", "活动"] }
  ];

  const tagButtonsContainer = document.getElementById("tag-buttons");
  const gallery = document.getElementById("gallery");

  const allTags = Array.from(new Set(images.flatMap(img => img.tags)));
  let currentTag = "全部";

  function renderButtons() {
    tagButtonsContainer.innerHTML = "";
    const tags = ["全部", ...allTags];
    tags.forEach(tag => {
      const btn = document.createElement("button");
      btn.innerText = tag;
      btn.className = "tag-button" + (tag === currentTag ? " active" : "");
      btn.onclick = () => {
        currentTag = tag;
        renderButtons();
        renderGallery();
      };
      tagButtonsContainer.appendChild(btn);
    });
  }

  function renderGallery() {
    gallery.innerHTML = "";
    images
      .filter(img => currentTag === "全部" || img.tags.includes(currentTag))
      .forEach(img => {
        const item = document.createElement("div");
        item.className = "gallery-item";
        item.innerHTML = `
          <img src="${img.src}" alt="${img.title}">
          <p style="padding: 10px 5px; font-weight: bold;">${img.title}</p>
        `;
        gallery.appendChild(item);
      });
  }

  renderButtons();
  renderGallery();
</script>
