<script setup lang="ts">

import CourseCard from '@/components/course/courseCard.vue'
</script>

<template>
<div id="courseList" class="my-card">
  <h3 class="title">在线课程</h3>
  <course-card v-for="item in 20" :key="item"/>
  <a-pagination class="pagination" :total="20" show-page-size/>
</div>
</template>

<style scoped lang="less">
#courseList {
  display: flex;
  align-items: center;
  flex-direction: column;
}


.pagination {
  margin-top: 2rem;
}
</style>
