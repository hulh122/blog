<template>
  <div>
    <div class="blog-container" v-for="(blog, index) in blogs">
      <div class="blog-card" @click="toBlog(blog.path)" @mouseenter="hoverIndex = index" @mouseleave="hoverIndex = -1">
        <div class="blog-img-container">
          <img class="blog-img"
               :src="$withBase(`/blog_pic/${blog.frontmatter.imgName}.jpg`)">
        </div>
        <div :class="isSingular(index) ? 'word-container' : 'word-container word-container-even'">
          <div :class="hoverIndex === index ? 'title title-hover' : 'title'">{{ blog.title }}</div>
          <div class="time">{{ transDate(blog.frontmatter.date) }}</div>
          <div class="desc">{{ blog.frontmatter.desc }}</div>
        </div>
      </div>

      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoverIndex: -1
    }
  },

  computed: {
    blogs() {
      const legalPath = this.$frontmatter.path;
      // 遍历出满足 path 的非根节点所有 blog
      const blogs = this.$site.pages
          .filter(({path}) => path.includes(legalPath) && path !== legalPath)
          .sort((a, b) => {
            const prevDate = new Date(a.frontmatter.date).getTime();
            const nextDate = new Date(b.frontmatter.date).getTime();
            if (prevDate !== nextDate) {
              return nextDate - prevDate;
            } else {
              return a.title > b.title ? 1 : -1;
            }
          })
          .slice(0, 10);
      return blogs;
    }
  },

  methods: {
    toBlog(path) {
      this.$router.push(path);
    },

    transDate(date) {
      const fullDate = new Date(date);
      return `${fullDate.getFullYear()}/${fullDate.getMonth() + 1}/${fullDate.getDate()}`;
    },

    // 判断单数页
    isSingular(index) {
      return index % 2 === 0;
    }
  },

  name: 'FeedLayout',
}
</script>

<style scoped>
.blog-container {
  width: 100%;
  margin-bottom: 50px;
}

.blog-card {
  display: flex;
  justify-content: space-between;
  font-family: monospace, SimHei;
  cursor: pointer;
}

.blog-img-container {
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blog-img {
  max-width: 120px;
  max-height: 120px;
  filter: drop-shadow(3px 15px 15px rgba(0, 0, 0, 0.27)) drop-shadow(6px 8px 20px rgba(30, 14, 98, 0.35));
  border-radius: 7px;
}

.word-container {
  flex: 1;
  height: 120px;
  margin: 0 30px;
}

.word-container-even {
  order: -1;
  text-align: right;
}

.title {
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color: #482BE7;
}

.title-hover {
  color: #1E0E62;
}

.time {
  margin: 3px 0 5px 0;
  color: #6B6B6B;
}

.desc {
  display: inline-block;
  color: #AAAAAA;
  font-size: 13px;
  text-align: left;
}

.line {
  margin: 50px 8% 0 8%;
  height: 1px;
  background: #dddddd;
}

/*手机端*/
@media screen and (max-width: 768px) {
  .desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #AAAAAA;
    font-size: 13px;
    text-align: left;
  }
}
</style>
