<template>
  <div>
    <headerPart/>
    <nuxt/>
    <footerPart/>
  </div>
</template>

<script>
import headerPart from '~/components/header_home.vue'
import footerPart from '~/components/footer.vue'
export default {
  components: {
    headerPart,
    footerPart
  }
}
</script>

<style lang="scss" scoped>
</style>
