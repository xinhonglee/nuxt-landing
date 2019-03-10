<template>
  <main id="main">
    <section>
      <div class="wrap">
        <h1>Cityzen</h1>
        <h2>Buy</h2>

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
    layout: 'theme',
    head: {
      title: 'Purchase Cityzen',
      meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'Purchase Cityzen'
        }
      ],
      bodyAttrs: {
        class: 'page_cityzen page_cityzen_buy'
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
