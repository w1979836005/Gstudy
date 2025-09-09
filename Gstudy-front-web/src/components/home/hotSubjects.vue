<script setup lang="ts">

</script>

<template>
<div id="hotSubject" class="my-card subject" style="padding-top: 5px">
  <div class="subject-item" v-for="(item, index) in 20" :key="index">#成功</div>
  <div class="subject-item" v-for="(item, index) in 20" :key="index">#快乐</div>
  <div class="subject-item" v-for="(item, index) in 20" :key="index">#失败</div>
</div>
</template>

<style scoped lang="less">
.subject {
  margin-top: 10px;
  color: #337AB7;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;

  .subject-item {
    margin-top: 5px;
    margin-right: 10px;
    transition: all 0.3s ease;
  }
  .subject-item:hover {
    color: #28323e;
  }
}
</style>
