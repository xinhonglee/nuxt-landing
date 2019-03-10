<template>
  <div class="bg-01">
    <headerPart/>
    <main>
      <nuxt/>
    </main>
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
