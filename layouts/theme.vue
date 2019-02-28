<template>
  <div class="bg-02">
    <headerPart/>
    <h1>Im the theme</h1>
    <nuxt/>
    <footerPart/>
  </div>
</template>

<script>
import headerPart from '~/components/header_theme.vue'
import footerPart from '~/components/footer.vue'
export default {
  components: {
    headerPart,
    footerPart
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/scss/scheme_light.scss';
</style>
