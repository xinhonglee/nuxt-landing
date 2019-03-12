<template>
  <div class="">
    <headerPart/>
    <main>
      <nuxt/>
    </main>
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

</style>
