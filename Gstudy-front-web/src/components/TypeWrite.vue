<template>
  <div id="typeWrite">
    <span ref="typedElement" class="typeList"></span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Typed from 'typed.js';
//接收父组件的typeList
const props = defineProps<{
  typeList?: string[];
}>();

//  创建DOM元素引用
const typedElement = ref<HTMLElement | null>(null);
let typedInstance: Typed | null = null;

//  组件挂载后初始化Typed实例
onMounted(() => {
  if (typedElement.value) {
    typedInstance = new Typed(typedElement.value, {
      strings: props.typeList || ['Hello!', 'Welcome to Gstudy'],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
      showCursor: true
    });
  }
});

// 3. 组件卸载时销毁Typed实例
onUnmounted(() => {
  if (typedInstance) {
    typedInstance.destroy();
  }
});
</script>

<style scoped lang="less">
.typeList {
  color: #fff;
  font-size: 38px;
  font-weight: bold;
}
</style>
