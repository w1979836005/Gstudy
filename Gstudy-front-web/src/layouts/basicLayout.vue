<script setup lang="ts">
import GlobalHeader from '@/components/globalHeader.vue';
import GlobalFooter from '@/components/globalFooter.vue'

</script>
<template>
  <div id="basicLayout">
    <div class="header">
      <GlobalHeader />
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      <GlobalFooter/>
    </div>
  </div>
</template>
<style lang="less" scoped>
#basicLayout {
  width: 100%;
  min-height: 92vh;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 48px;
  }

  .content {
    margin-top: 48px;
    padding: 40px 10px 10px 10px;
    background: #efefef;
    min-height: calc(100vh - 48px - 48px);
  }
  .footer {
    width: 100%;
    height: 48px;
  }
}
</style>
