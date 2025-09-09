---
permalink: /
title: "个人简介"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<p style="text-align: justify; text-justify: inter-word;">
毕鑫，副教授，博士生导师，沈阳市高层次人才（领军人才），CCF数据库专委执委，CSRME人工智能专委常委，iGEO期刊青年编委，光合基金领军专家，东北大学重大科技基础设施协同总控与大数据云平台负责人。
</p>

<p style="text-align: justify; text-justify: inter-word;">
曾获辽宁省科技进步奖一等奖，主持国家重点研发计划子课题、国家自然科学基金联合基金重点项目课题、中国博士后科学基金、辽宁省自然科学基金等近10项国家或省部级科研项目，参与多项国家自然科学基金重点项目、国家863项目等。
</p>

<p style="text-align: justify; text-justify: inter-word;">
在《软件学报》、CIKM、IEEE Transactions on Big Data、ACM Transactions on Intelligent Systems and Technology、Knowledge-Based Systems、Information Sciences、Cognitive Computation、DASFAA、ICDCS 等国内外高水平期刊与会议发表论文40余篇，授权发明专利与软件著作权10余项。
</p>

<p style="text-align: justify; text-justify: inter-word;">
多次担任 CIKM、ICDM、IEEE BigData、IEEE IUCC、KSEM 等会议程序委员会委员及 APWEB-WAIM 本地主席，担任 TKDE、KBS、IEEE TETCI 等10余本期刊审稿人。
</p>

<p style="text-align: justify; text-justify: inter-word;">
指导学生获得 2023 年中国国际“互联网+”大学生创新创业大赛（七星级竞赛）国赛金奖🥇、辽宁省“互联网+”大学生创新创业大赛金奖（产业赛道第一名）🥇，并获优秀指导教师称号；指导团队获得 2024 年昇腾 AI 创新大赛全国总决赛金奖🥇。
</p>

# 招生专业
* 计算机科学与技术（学硕、博士）
* 计算机技术（专硕、博士）
* 智能科学与技术（博士）
* 软件工程（学硕、专硕、博士，课题组名额）
* 采矿工程（智能采矿方向，交叉学科）

<style>
  #lightbox {
    position: fixed;
    z-index: 9999;
    display: none;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.85);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 20px;
    text-align: center;
    color: white;
    display: none;
}
  #lightbox img {
    max-width: 90%;
    max-height: 70%;
    border-radius: 10px;
    box-shadow: 0 0 25px #fff;
    margin-bottom: 20px;
}
  #lightbox-desc {
    max-width: 850px;
    font-size: 1.1em;
    line-height: 1.6;
    background: rgba(0,0,0,0.4);
    padding: 15px 25px;
    border-radius: 10px;
}
  .hover-zoom {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .hover-zoom:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }
</style>
<script>
  function openLightbox(src, desc = '') {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxDesc = document.getElementById("lightbox-desc");

    lightbox.style.display = "flex";
    lightboxImg.src = src;
    lightboxDesc.innerHTML = desc;
  }
</script>

# 风貌展示

<div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 20px; margin-top: 30px;">
  <img src="/images/news/202412-孙彬弘-昇腾AI创新大赛全国总决赛金奖.jpg" 
       class="hover-zoom"
       style="flex: 1 1 30%; max-width: 32%; height: 200px; object-fit: cover; border-radius: 8px; cursor: pointer;" 
       onclick="openLightbox(this.src, '2024年12月19日，毕鑫指导学生孙彬弘等人获昇腾AI创新大赛全国总决赛金奖')">
  <img src="/images/news/202407-世界人工智能大会展示.jpg"
       class="hover-zoom"
       style="flex: 1 1 30%; max-width: 32%; height: 200px; object-fit: cover; border-radius: 8px; cursor: pointer;"
       onclick="openLightbox(this.src, '课题组研发的TBM岩渣三维形态智能评估系统在2024年世界人工智能大会的曙光展台进行展示，并得到中国新闻网报道')">
  <img src="/images/news/202312-毕鑫-中国国际大学生创新大赛国赛金奖.jpg"
       class="hover-zoom"
       style="flex: 1 1 30%; max-width: 32%; height: 200px; object-fit: cover; border-radius: 8px; cursor: pointer;"
       onclick="openLightbox(this.src, '2023年12月6日，毕鑫指导张伟博士等人获中国国际大学生创新大赛（原互联网+竞赛，七星级顶级竞赛）国赛金奖')">
</div>

<div style="text-align: center; margin-top: 30px;">
  <a href="/news/" style="display: inline-block; padding: 10px 24px; background-color: #007acc; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
    查看更多新闻
  </a>
</div>

<div id="lightbox" onclick="this.style.display='none'">
  <img id="lightbox-img" src="" alt="full image" />
  <div id="lightbox-desc"></div>
</div>


