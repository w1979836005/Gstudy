<script setup lang="ts">
import { ref, watch } from 'vue';
import homeIcon from '@/assets/globalHeader/首页.png'
import courseIcon from '@/assets/globalHeader/课程.png'
import questionIcon from '@/assets/globalHeader/习题库.png'
import aboutIcon from '@/assets/globalHeader/关于.png'
import { useRoute, useRouter } from 'vue-router';
/**
 * 定义路由
 */
interface RouteType {
  path: string;
  name: string;
  icon?: string;
  children?: RouteType[];
}

const routes = ref<RouteType[]>([
  {
    path: '/',
    name: '首页',
    icon: homeIcon
  },
  {
    path: '/course',
    name: '课程',
    icon: courseIcon
  },
  {
    path: '/question',
    name: '题库',
    icon: questionIcon
  },
  {
    path: '/about',
    name: '关于',
    icon: aboutIcon
  }
])

//跳转方法
const router = useRouter()
const handleMenu = (path: string) => {
  router.push(path)
}

//当前选中菜单高亮
const route = useRoute()
const activePath = ref<string>(route.path)

watch(() => route.path, (newVal) => {
  activePath.value = newVal;
})

/**
 * 用户登录态
 */
const userLoginState = ref<boolean>(false)
//跳转登录
const handleLogin = () => {
  router.push('/user/login')
}
</script>

<template>
  <div id="globalHeader">
    <div class="web-info">
      <img src="../assets/logo.jpg" class="logo" alt="logo" width="32">
      <div class="web-title">Gstudy</div>
    </div>
    <div class="nav">
      <div class="nav-box" :class="{ 'active-nav': activePath === item.path }" v-for="(item, index) in routes"
        :key="index" @click="handleMenu(item.path)">
        <div class="nav-item">
          <img :src="item.icon" alt="" width="18">
          <span class="nav-text">{{ item.name }}</span>
        </div>
      </div>

     <div class="search-bar">
       <a-input-search :style="{width:'320px',height:'28px', borderRadius:'8px'}" placeholder="快来找找有趣的事情吧"/>
     </div>

    </div>

    <div class="user-info">
      <div v-if="userLoginState">高桥凉介</div>
      <div v-else>
        <a-button @click="handleLogin" type="primary" style="border-radius: 6px; font-size: 12px" size="small">登录</a-button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#globalHeader {
  //menu-color
  @menu-color:#165DFF;


  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 10px;
  background-color: rgba(234, 234, 234, 1);
  color: black;


  .web-info {
    width: 140px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      border-radius: 10px;
      opacity: 0.9;
    }

    .web-title {
      cursor: pointer;
      color: #131212;
      font-size: 16px;
      margin-left: 10px;
    }
  }

  .nav {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;

    .nav-box {
      width: 78px;
      margin-left: 10px;
      border-radius: 6px;

      &.active-nav {
        background-color: @menu-color !important; // 选中时的背景色

        .nav-text {
          color: #aaa6a6 !important; // 文字颜色变化
        }
      }
    }


    .nav-item {
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      cursor: pointer;
      transition: all 0.3s ease;

      .nav-text {
        margin-left: 4px;
      }

    }

    .nav-item:hover {
      width: 100%;
      background-color: @menu-color;
      color: #aaa6a6;
    }
  }

  .user-info {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

}

.search-bar {
  margin-left: 6rem;
}
</style>
