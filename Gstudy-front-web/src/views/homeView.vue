<script setup lang="ts">
import ArticleListCard from '@/components/home/articleListCard.vue'
import HotSubjects from '@/components/home/hotSubjects.vue'
</script>

<template>
  <div id="homeView">
    <div class="title-box">话题大全：</div>
    <HotSubjects style="margin-bottom: 20px"/>

    <div class="title-box">今日趣事：</div>
    <ArticleListCard/>
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
    width: 70%;
    margin-bottom: 20px;
    font-size: 16px;
    letter-spacing: 1px;
  }
}
</style>
