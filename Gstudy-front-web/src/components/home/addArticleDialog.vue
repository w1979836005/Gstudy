<script setup lang="ts">

import { reactive } from 'vue'

const props = defineProps({
  visible: Boolean
});

const emit = defineEmits(['update:visible']);

const form = reactive({
  name: '',
  post: ''
});

const handleBeforeOk = (done) => {
  console.log('提交表单:', form);
  setTimeout(() => {
    done();
    // 关闭对话框
    emit('update:visible', false);
  }, 1000);
};

const handleCancel = () => {
  emit('update:visible', false);
};
</script>

<template>
<div id="addArticleDialog">
  <a-modal v-model:visible="props.visible" title="创建帖子" @cancel="handleCancel" @before-ok="handleBeforeOk" draggable>
    <a-form :model="form">
      <a-form-item field="name" label="帖子内容">
        <a-textarea/>
      </a-form-item>
      <a-form-item field="post" label="话题">
        <a-select v-model="form.post">
          <a-option value="post1">生活</a-option>
          <a-option value="post2">开心</a-option>
          <a-option value="post3">难过</a-option>
          <a-option value="post4">如何成为羔手</a-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</div>
</template>

<style scoped lang="less">

</style>
