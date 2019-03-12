<template>
  <div>
    <headerPart/>
    <main>
      <nuxt/>
    </main>
    <footerPart/>
  </div>
</template>

<script>
import headerPart from '~/components/header.vue'
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
