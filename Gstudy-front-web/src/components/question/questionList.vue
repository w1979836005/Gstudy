<script setup lang="ts">
import QuestionTable from '@/components/question/questionTable.vue'
</script>

<template>
<div id="questionList" class="my-card">
    <h3 style="font-size: 22px;letter-spacing: 1px">在线题库</h3>
    <question-table/>
</div>
</template>

<style scoped lang="less">
#questionList {
  width: 85%;
  min-height: 65vh;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
