<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue';

</script>
<template>
  <div id="basicLayout">
    <div class="header">
      <GlobalHeader />
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">footer</div>
  </div>
</template>
<style lang="less" scoped>
#basicLayout {
  width: 100%;
  height: 100vh;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 48px;
  }

  .content {
    margin-top: 60px;
    padding: 10px;
    min-height: 100vh;
  }
}
</style>
