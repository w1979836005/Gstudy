<script setup lang="ts">
import TypeWrite from '@/components/typeWrite.vue';
</script>
<template>
  <!-- 用户登录注册布局 layout -->
  <div id="userLayout">
    <div class="left">
      <!-- 网页icon信息 -->
      <div class="web-info">
        <img src="../assets/logo.jpg" alt="" width="32" style="opacity: 0.6; border-radius: 10px;">
        <div class="web-title">Gstudy</div>
      </div>
      <!-- 登录注册表单 -->
      <div class="content">
        <router-view />
      </div>
      <!-- 底部footer区域 -->
      <div class="footer">
        <div class="footer-title">Copyright © 2023 Gstudy LTS.</div>
      </div>
    </div>
    <!-- 右侧背景部分 -->
    <div class="right">
      <TypeWrite />
    </div>
  </div>
</template>
<style lang="less" scoped>
#userLayout {
  height: 100vh;
  width: 100%;

  display: flex;

  .left {
    padding: 20px;
    position: relative;
    width: 38%;
    height: 100vh;
    background-color: rgba(31, 16, 36, 0.85);
    border-right: 1px solid rgba(27, 17, 17, 0.1);

    display: flex;
    flex-direction: column;
    align-items: center;

    .web-info {
      width: 100%;
      display: flex;
      align-items: center;

      .web-title {
        margin-left: 10px;
        font-size: 16px;
        color: #FEFEFE;
      }
    }

    .content {
      width: 100%;
      height: 35rem;
      margin-top: 15%;
      z-index: 1000;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .footer {
      position: absolute;
      bottom: 15px;
      color: #babfc6;
    }
  }

  .left::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: conic-gradient(from 180deg at 50.03% 32.23%, #165dff 37.17061043deg, #5679ff 136.87500358deg, #45adf9 163.95062685deg, #5f94f4 .57654631turn, #fb923c 228.04857731deg, #c82ee1 304.40840721deg, #fb923c 333.18861723deg);
    filter: blur(90px);
    -webkit-filter: blur(90px);
    transition: opacity .3s ease-in-out;
    transform: translateZ(0);
    opacity: .1;
  }

  .right {
    flex: 1;
    height: 100vh;
    background-image: url('@/assets/Gstudybg.jpg');
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (max-width: 768px) {
  #userLayout {
    flex-direction: column;

    .left {
      width: 100%;
      height: 100vh;
    }

    .right {
      display: none;
    }
  }
}
</style>
