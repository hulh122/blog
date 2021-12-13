<template>
  <div>
    <h2>Hi<Emoj emoj="👋"/>！欢迎来到我的博客</h2>

    <p>这里是一名 95 后的前端开发工程师，专注于 TypeScript / Angular / React / RxJS。</p>

    <p><Emoj emoj="💻️"/>我在这里最多分享关于技术上的东西<Emoj emoj="👉"/><a href="/tech">技术板块</a></p>

    <p><Emoj emoj="🌸️"/>我同样会在这里分享我的生活和一些有意思的见解<Emoj emoj="👉"/><a href="/life">生活板块</a></p>

    <p><Emoj emoj="♠️️"/>我是一名忠实的德州扑克爱好者，已经有五年的牌龄，我会在这里分享一些手牌分析<Emoj emoj="👉"/><a href="/poker">Poker 板块</a></p>

    <strong>在平凡的生活里，用<Emoj emoj="💓️"/>开出花来</strong>
  </div>
</template>

<script>
import Emoj from './Emoj';
export default {
  name: 'Home',
  components: {Emoj}
}
</script>

<style scoped>
h2 {
  border: 0;
}
</style>
