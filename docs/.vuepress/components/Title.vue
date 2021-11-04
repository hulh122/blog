<template>
 <div>
   <h1>{{ title }}</h1>
   <div>
     <span class="date">{{ date }}</span>
   </div>
   <div class="line"></div>
 </div>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$frontmatter.title;
    },

    date() {
      const date = new Date(this.$frontmatter.date);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;
    }
  },

  name: 'Title'
}
</script>

<style scoped>
.date {
  color: #999999;
}

.line {
  width: 100%;
  height: 1px;
  background: #dddddd;
  margin-top: 1.5rem;
}
</style>
