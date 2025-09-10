<script setup lang="ts">
import type { ArticleType } from '@/components/home/type'
import { ref } from 'vue'

// 文章数据类型
const props = defineProps<{
  article: ArticleType
}>()


/**
 * 弹出框
 */
const visible = ref(false);

const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
}
</script>

<template>
  <div class="my-card article-item">
    <div class="online">
      <img :src="props.article.userAvatar" class="user-avatar" alt="userAvatar" width="48">
      <div class="user-info">
        <div class="username">{{props.article.username}}</div>
        <div class="create-info">{{props.article.createInfo}}</div>
      </div>
    </div>

    <div class="online article-content">
      <div class="content-item">
        {{props.article.articleContent}}
      </div>
      <div class="subject">
        <span class="subject-item" v-for="(tag,index) in props.article.subjects.split(',')" :key="index">{{tag}}</span>
      </div>

      <div class="article-images">
        <a-image-preview-group infinite>
          <a-image v-for="(item,index) in props.article.images.split(',')"
                   :key="index" class="image"
                   :src="item.trim()"
                   width="200"
                   :preview-src="item.trim()"
                   :initial-index="0"
          />
        </a-image-preview-group>
      </div>
    </div>

    <div class="article-mess">
      <a-divider  />
      <div  style="display: flex; justify-content: space-between; align-items:center;padding: 0 15%">
        <div class="article-mess-item" style="cursor:pointer;">
          <img class="default-img"  src="../../assets/home/爱心.png" alt=""  width="18">
          <img class="hover-img"   src="../../assets/home/爱心%20(1).png" alt=""  width="18">
          <span>{{props.article.likeCount}}</span>
        </div>
        <div class="article-mess-item" style="cursor:pointer;" @click="handleClick">
          <img class="default-img"  src="../../assets/home/消息%20(3).png" alt=""  width="18">
          <img class="hover-img"   src="../../assets/home/消息%20(4).png" alt=""  width="18">
          <span>{{props.article.messageCount}}</span>
        </div>
        <div class="article-mess-item" style="cursor:pointer;">
          <img class="default-img"  src="../../assets/home/收藏.png" alt=""  width="18">
          <img class="hover-img"   src="../../assets/home/收藏%20(1).png" alt=""  width="18">
          <span>{{props.article.collect}}</span>
        </div>
      </div>
      <a-divider  />

      <a-drawer
        :width="340"
        :height="480"
        :visible="visible"
        placement="bottom"
        @ok="handleOk"
        @cancel="handleCancel"
        unmountOnClose
      >
        <template #title>
          评论
        </template>
        <div class="drawer-content-container">
          <img src="../../assets/user.webp" width="48" class="userAvatar" alt="userAvatar">
          <a-textarea placeholder="在这里写评论" />
        </div>
        <div class="user-commit" v-for="item in 3" :key="item">
          <img src="../../assets/user.webp" width="48" class="userAvatar" alt="userAvatar">
          <div>
            <div class="one-line">
              <div  class="username">高桥凉介</div>
              <div class="time-mess">2025-08-25 21:49 · 安徽</div>
              <img src="../../assets/home/爱心.png" class="icon" alt="" width="16" height="16">
              <div style="font-size: 12px; margin-left: 2px">32</div>
              <img src="../../assets/home/心碎.png" class="icon" alt="" width="16" height="16">
              <div style="font-size: 12px; margin-left: 2px">32</div>
            </div>
            <div class="commit-text">
              写的真不错思路清晰,写的真不错思路清晰,写的真不错思路清晰,写的真不错思路清晰,写的真不错思路清晰,写的真不错思路清晰
            </div>
          </div>
        </div>
      </a-drawer>
    </div>
  </div>
</template>

<style scoped lang="less">
.article-item {
  cursor:pointer;
  min-height: 15rem !important;
  width: 90% !important;
  margin: 0 auto;
  margin-top: 10px;

  .user-avatar {
    border-radius: 50%;
    box-shadow: 0 0 4px 1px rgba(0,0,0,0.4);
  }

  .online {
    width: 100%;
    display: flex;
    align-items: center;

    .user-info {
      margin-left: 10px;

      .username {
        font-size: 16px;
        font-weight: 600;
      }

      .create-info {
        margin-top: 5px;
      }
    }
  }

  .article-content {
    margin-top: 15px;
    margin-left: 10px;
    letter-spacing: 1px;
    line-height: 1.5;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    .subject {
      margin-top: 10px;
      color: #337AB7;
      cursor: pointer;

      .subject-item {
        margin-right: 10px;
        transition: all 0.3s ease;
      }
      .subject-item:hover {
        color: #28323e;
      }
    }

    .article-images {
      margin-top: 10px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }

    .article-mess {
      width: 100%;
    }
  }
}
.default-img {
  vertical-align: text-top;
  margin-right: 4px;
}
.hover-img {
  vertical-align: text-top;
  margin-right: 4px;
  display: none;
}

.article-mess {
  .article-mess-item:hover {
    color: #165dff;

    .default-img {
      display: none; // 悬浮时隐藏灰色图片
    }
    .hover-img {
      display: inline; // 悬浮时显示彩色图片
    }
  }
}

.drawer-content-container {
  display: flex;
  align-items: center;
}
.userAvatar {
  border-radius: 50%;
  margin-right: 10px;
}

.user-commit {
  width: 100%;
  margin-top: 2rem;
  display: flex;

  .one-line {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .icon {
    margin-left: 5px;
    vertical-align: center;
    cursor: pointer;
  }
}

.time-mess {
  margin-left: 5px;
  font-size: 12px;
}

.commit-text {
  margin-top: 5px;
  letter-spacing: 1px;
  font-size: 14px;
}
.username {
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.username:hover {
  color: #165dff;
}
:deep(.arco-divider-horizontal) {
  position: relative;
  clear: both;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  margin: 10px 0;
  border-bottom: 1px solid #CFCCCC;
}
</style>
