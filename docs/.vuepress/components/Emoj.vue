<template>
  <span class="emoj-container">{{ emoj }}</span>
</template>

<script>
export default {
  name: 'Emoj',

  props: ['emoj']
}
</script>

<style scoped>
.emoj-container {
  display: inline-block;
  min-width: 1rem;
  padding: 0 .5rem;
}
</style>
