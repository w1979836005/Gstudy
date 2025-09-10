<script setup lang="ts">
import ArticleListCard from '@/components/home/articleListCard.vue'
import HotSubjects from '@/components/home/hotSubjects.vue'
import SubmitArticle from '@/components/home/submitArticle.vue'
</script>

<template>
  <div id="homeView">
    <div class="title-box">话题大全：</div>
    <hot-subjects/>
    <div class="title-box">分享新鲜事：</div>
    <submit-article />
    <div class="title-box">今日趣事：</div>
    <article-list-card/>
  </div>
</template>

<style lang="less" scoped>
#homeView {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title-box {
    margin-top: 20px;
    width: 70%;
    margin-bottom: 20px;
    font-size: 16px;
    letter-spacing: 1px;
  }
}
</style>
