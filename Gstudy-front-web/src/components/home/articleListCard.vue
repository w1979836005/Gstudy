<script setup lang="ts">
import ArticleCard from '@/components/home/articleCard.vue'
import type { ArticleType } from '@/components/home/type'
import userAvatar from '@/assets/user.webp'

const articleData: ArticleType = {
  id:1,
  userAvatar: userAvatar,
  username: "高桥凉介",
  createInfo: "2025-05-08 23:11 · 广东",
  articleContent: `【AcWing·算法鼠标垫】又订了一批货，感兴趣的同学戳左下角淘宝店~
AcWing特供。内含常用算法模板，考试比赛神器！
超大鼠标垫，0.9m * 0.4m * 3mm，普通鼠标垫的6倍大小，定价99元。
荔枝纹皮革面料，柔软舒适；底部加厚天然橡胶，结实耐用；uv数码印刷，超高清晰度。
限量预售200份，预计10天内发货。`,
  subjects: "#失败,#成功",
  images: [
    "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
    "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
    "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
    "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
    "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp"
  ].join(','),
  likeCount: 123,
  messageCount: 312,
  collect: 32
};
</script>

<template>
<div id="articleListCard">
  <div class="my-card">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" title="推荐" class="article-box">
        <article-card :article="articleData" v-for="(item,index) in 5" :key="index"/>
      </a-tab-pane>
      <a-tab-pane key="2" title="关注">
        <article-card :article="articleData" v-for="(item,index) in 10" :key="index"/>
      </a-tab-pane>
    </a-tabs>
  </div>
</div>
</template>

<style scoped lang="less">
#articleListCard {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
