<template>
  <menu class="product_list">
    <li><nuxt-link to="/cityzen/">Cityzen</nuxt-link></li>
    <li><nuxt-link to="/wordsmith/">Wordsmith</nuxt-link></li>
    <li><nuxt-link to="/pitchable/">Pitchable</nuxt-link></li>
  </menu>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.product_list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  a {
    // display: block;
    // background: red;
    margin: 0 0 0.5rem;
  }
}
</style>
