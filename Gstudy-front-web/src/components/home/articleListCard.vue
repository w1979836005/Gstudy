<script setup lang="ts">
import ArticleCard from '@/components/home/articleCard.vue'
import type { ArticleType } from '@/components/home/type'
import userAvatar from '@/assets/user.webp'
import { onMounted, onUnmounted, ref } from 'vue'


//生成加载文章
const articles = ref<ArticleType[]>([])

const initArticles = ()=>{
  const baseArticle: ArticleType = {
    id:1,
    userAvatar: userAvatar,
    username: "高桥凉介",
    createInfo: "2025-05-08 23:11 · 广东",
    articleContent: `【AcWing·算法鼠标垫】又订了一批货，感兴趣的同学戳左下角淘宝店~
AcWing特供。内含常用算法模板，考试比赛神器！
超大鼠标垫，0.9m * 0.4m * 3mm，普通鼠标垫的6倍大小，定价99元。
荔枝纹皮革面料，柔软舒适；底部加厚天然橡胶，结实耐用；uv数码印刷，超高清晰度。
限量预售200份，预计10天内发货。`,
    subjects: "#失败,#成功",
    images: [
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp",
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
      "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp"
    ].join(','),
    likeCount: 123,
    messageCount: 312,
    collect: 32
  };

  //生成加载文章
  articles.value = Array(5).fill(baseArticle).map((article,index)=>({
    ...article,
    id: index + 1,
    articleContent:`${article.articleContent}\n这是${index + 1}条文章`
  }))
}


//加载更多文章
const isLoading = ref<boolean>(false)
const hasMore = ref<boolean>(true)

const loadMoreArticle =async () => {
    if(isLoading.value || !hasMore.value) return

    isLoading.value = true
      //模拟请求延迟
    await new Promise(resolve => setTimeout(resolve,800))

  //生成新数据
  const newArticles: ArticleType[] = Array(5).fill(0).map((_, index) => ({
    id: articles.value.length + index + 1,               // &#9989; 唯一ID递增
    userAvatar: userAvatar,                             // &#9989; 确保该变量存在
    username: `用户${articles.value.length + index + 1}`, // &#9989; 修正用户名同步递增
    createInfo: "2025-05-09 10:30 · 北京",              // 固定时间戳
    articleContent: `这是自动生成的第${articles.value.length + index + 1}条文章内容`, // &#9989; 内容序号对齐
    subjects: "#技术,#分享",                            // 标签哈希
    images: "",                                        // 空图片列表
    likeCount: Math.floor(Math.random() * 100),          // &#128077;️ 合理随机点赞数
    messageCount: Math.floor(Math.random() * 200),       // &#128077;️ 合理随机评论数
    collect: Math.floor(Math.random() * 50)              // &#128077;️ 合理随机收藏数
  }));

  articles.value.push(...newArticles)
  isLoading.value = false

}
// Intersection Observer 相关逻辑
const sentinel = ref<HTMLElement | null>(null)
const observer = ref<IntersectionObserver | null>(null)

onMounted(() => {
  initArticles()

  // 创建Intersection Observer
  observer.value = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry.isIntersecting && hasMore.value && !isLoading.value) {
      loadMoreArticle()
    }
  }, {
    threshold: 0.1 // 当10%的元素可见时触发
  })

  if (sentinel.value) {
    observer.value.observe(sentinel.value)
  }
})

onUnmounted(() => {
  if (observer.value && sentinel.value) {
    observer.value.unobserve(sentinel.value)
  }
})
</script>

<template>
<div id="articleListCard">
  <div class="my-card">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" title="推荐" class="article-box">
        <article-card v-for="article in articles" :key="article.id" :article="article"/>

<!--        加载状态提示-->
        <div class="load-more-container">
          <div v-if="isLoading" class="loading-indicator">
            <a-spin/>
            <span>加载中...</span>
          </div>
          <div v-if="!hasMore && !isLoading" class="no-more-date">
              <a-divider dashed/>
              没有更多数据了
          </div>

          <!-- 哨兵元素 -->
          <div
            ref="sentinel"
            class="sentinel"
            aria-live="polite"
          ></div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" title="关注">
        <article-card v-for="article in articles" :key="article.id" :article="article"/>
      </a-tab-pane>
    </a-tabs>
  </div>
</div>
</template>

<style scoped lang="less">
#articleListCard {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* 哨兵元素样式 */
.sentinel {
  height: 30px;
  margin-top: 10px;
  visibility: hidden; /* 不可见但占据空间 */
}

.load-more-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
