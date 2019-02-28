<template>
  <!-- <div class="bg-02"> -->
  <div class="bg-01">
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
