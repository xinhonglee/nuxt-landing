<template>
  <div>
    <headerCommon/>
    <nuxt/>
    <footerCommon/>
  </div>
</template>

<script>
import headerCommon from '~/components/header.vue'
import footerCommon from '~/components/footer.vue'
export default {
  components: {
    headerCommon,
    footerCommon
  }
}
</script>

<style lang="scss">
  // @import '~assets/scss/master.scss';
  // @import '~assets/scss/scheme_dark.scss';
</style>
