<template>
  <main id="main">
    <section>
      <div class="wrap">
        <h1>Products</h1>
        <nuxt-link to="/cityzen">Cityzen</nuxt-link>
      </div>
    </section>
  </main>
</template>

<script>
  import { paintCommon } from "~/assets/js/animate";
  export default {
    data() {
      return {};
    },
    mounted() {
      paintCommon();
    },
    head: {
      title: 'Our products',
      meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'Products by Magnet Co'
        }
      ],
      bodyAttrs: {
        class: 'page_products'
      }
    }
  }
</script>

<style lang="scss">

</style>
