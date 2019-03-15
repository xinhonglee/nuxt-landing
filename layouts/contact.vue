<template>
  <div class="contact">
    <headerPart/>
    <nuxt/>
    <footerPart/>
  </div>
</template>

<script>
// import { preLoading } from "~/assets/js/animate";
// import preLoader from '~/components/loader.vue'
import headerPart from '~/components/header.vue'
import footerPart from '~/components/footer.vue'
export default {
  // data() {
  //   return {};
  // },
  // mounted() {
  //   preLoading();
  // },
  components: {
    // preLoader,
    headerPart,
    footerPart
  }
}
</script>

<style lang="scss" scoped>

</style>
