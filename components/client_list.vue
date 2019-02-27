<template>
  <menu class="client_list">
    <li><nuxt-link to="/work/ucla/">UCLA School of English</nuxt-link></li>
    <!-- <nuxt-link to="/work/mhe/">McGraw Hill Education</nuxt-link> -->
    <li><a disabled>McGraw Hill Education</a></li>
    <li><nuxt-link to="/work/explore/">Explore</nuxt-link></li>
    <li><nuxt-link to="/work/vonholzhausen/">Vonholzhausen</nuxt-link></li>
    <li><nuxt-link to="/work/clarity/">Clarity</nuxt-link></li>
    <li><nuxt-link to="/work/clarity/">Chelonian Research Institute</nuxt-link></li>
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
