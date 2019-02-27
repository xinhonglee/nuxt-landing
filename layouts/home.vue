<template>
  <div>
    <headerHome/>
    <nuxt/>
    <footerCommon/>
  </div>
</template>

<script>
import headerHome from '~/components/header_home.vue'
import footerCommon from '~/components/footer.vue'
export default {
  components: {
    headerHome,
    footerCommon
  }
}
</script>

<style lang="scss">
  // @import '~assets/scss/master.scss';
  // @import '~assets/scss/scheme_dark.scss';
</style>
