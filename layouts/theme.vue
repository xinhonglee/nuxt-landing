<template>
  <div class="bg-01">
    <headerPart/>
    <nuxt/>
    <footerPart/>
  </div>
</template>

<script>
import headerThemePart from '~/components/header_theme.vue'
import footerPart from '~/components/footer.vue'
export default {
  components: {
    headerThemePart,
    footerPart
  }
}
</script>

<style lang="scss" scoped>
</style>
