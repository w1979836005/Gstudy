<script setup lang="ts">
import CourseList from '@/components/course/courseList.vue'
</script>

<template>
  <div id="courseView">
    <course-list/>
  </div>
</template>

<style lang="less" scoped>
#courseView {
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
