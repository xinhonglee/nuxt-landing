<template>
  <menu class="client_list">
    <nuxt-link to="/work/ucla/">UCLA</nuxt-link>
    <nuxt-link to="/work/explore/">Explore</nuxt-link>
    <nuxt-link to="/work/vonholzhausen/">Vonholzhausen</nuxt-link>
    <nuxt-link to="/work/clarity/">Clarity</nuxt-link>
  </menu>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.client_list {
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
