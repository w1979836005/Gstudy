<script setup lang="ts">
import { useRouter } from 'vue-router';

/**
 * 跳到登录界面
 */
const router = useRouter()
const handleClick = () => {
  router.push('/user/login')
}
</script>

<template>
  <div id="loginView">
    <div class="login-title">注册 Gstudy</div>
    <div class="login-sub-title">即刻与世界相连,共同进步</div>
    <div class="login-form">
      <div class="form-item">
        <a-input class="input-item" :style="{ width: '320px', color: '#fff' }" placeholder="输入邮箱" allow-clear>
          <template #prefix>
            <img src="../../assets/user/Email.png" alt="lock" width="16">
          </template>
        </a-input>
      </div>
      <div class="form-item">
        <a-input class="input-item" :style="{ width: '320px', color: '#fff' }" type="password" placeholder="输入密码"
          allow-clear>
          <template #prefix>
            <img src="../../assets/user/lock.png" alt="lock" width="14">
          </template>
        </a-input>
      </div>
      <div class="form-item">
        <a-input class="input-item" :style="{ width: '320px', color: '#fff' }" type="password" placeholder="重新输入密码"
          allow-clear>
          <template #prefix>
            <img src="../../assets/user/lock.png" alt="lock" width="14">
          </template>
        </a-input>
      </div>
      <div class="form-item">
        <a-input class="input-item" :style="{ width: '320px', color: '#fff' }" type="password" placeholder="输入邀请码(选填)"
          allow-clear>
          <template #prefix>
            <img src="../../assets/user/宝贝.png" alt="lock" width="14">
          </template>
        </a-input>
      </div>

      <div class="form-item">
        <a-button type="primary" :style="{ width: '320px' }">注册</a-button>
      </div>
      <div class="form-item">
        <a-button type="text" :style="{ width: '320px' }" class="register-button"
          @click="handleClick">我有账号,立即登录</a-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
#loginView {

  letter-spacing: 1px;

  .login-title {
    font-size: 26px;
    font-weight: bold;
    color: #DADCE4;
  }

  .login-sub-title {
    font-size: 14px;
    color: #989aa0;
    margin-top: 1.5rem;
  }

  .login-form {
    .form-item {
      margin-top: 1rem;

      .input-item {
        background-color: rgba(15, 8, 19, 0.1);
        border-radius: 10px;
      }

      :deep(.input-item:focus) {
        background-color: rgba(135, 74, 195, 0.4);
        border-radius: 10px;
      }

      .register-button {
        width: 320px;
        color: #989aa0;
      }

      .register-button:hover {
        color: rgba(37, 29, 41, 0.4);
      }

      .forget-password {
        cursor: pointer;
        color: #3376fb;
      }

    }
  }
}
</style>
