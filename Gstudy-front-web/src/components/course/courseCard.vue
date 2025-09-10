<script setup lang="ts">

</script>

<template>

  <div class="course my-card" >
    <img src="../../assets/Gstudybg.jpg" width="128" alt="cover">
    <div class="course-info" >
      <div class="title">Vue课程</div>
      <div class="description">为小白入门Vue前端web开发的课程</div>
    </div>
    <div class="join-num" style="margin-top: 38px; margin-left: 15%">
      <div>参与人数：3213</div>
    </div>
    <div class="time" style="margin-top: 38px; margin-left: 15%">
      <div>起止时间：永久</div>
    </div>
  </div>

</template>

<style scoped lang="less">
.course {
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 20px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  .course-info {
    margin-left: 15px;
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    .description {
      margin-top: 20px;
    }
  }
}

.course:hover {
  background-color: #e8e6e6;
}
</style>
