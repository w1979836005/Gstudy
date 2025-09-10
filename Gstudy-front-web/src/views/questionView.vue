<script setup lang="ts">
import QuestionList from '@/components/question/questionList.vue'
</script>

<template>
  <div id="questionBank">
    <question-list/>
  </div>
</template>

<style lang="less" scoped>
#questionBank {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
