<script setup lang="ts">
import { ref } from 'vue'
import AddArticleDialog from '@/components/home/addArticleDialog.vue'

/**
 * 聚焦显示addDialog
 */
const showDialog = ref<boolean>(false)
const handleFocus = ()=>{
  showDialog.value = true
}
</script>

<template>
<div id="submitArticle" class="my-card">
  <img src="../../assets/user.webp"  class="user-avatar" width="48">
  <a-input style="border-radius: 10px" placeholder="快来分享新鲜事吧"   @focus="handleFocus"  />
  <add-article-dialog v-model:visible="showDialog"/>
</div>
</template>

<style scoped lang="less">
#submitArticle {
  display: flex;
}
.user-avatar {
  border-radius: 50%;
  margin-right: 5px;
}
</style>
