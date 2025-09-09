<script setup lang="ts">

</script>

<template>
<div id="articleListCard">
  <div class="my-card">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" title="推荐" class="article-box">
        <div class="my-card article-item">
          Content of Tab Panel 1
        </div>
        <div class="my-card article-item">
          Content of Tab Panel 1
        </div>
        <div class="my-card article-item">
          Content of Tab Panel 1
        </div>
        <div class="my-card article-item">
          Content of Tab Panel 1
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" title="关注">
        Content of Tab Panel 2
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

  .article-box{
    .article-item {
      width: 90% !important;
      margin: 0 auto;
      margin-top: 10px;
    }
  }

}

</style>
