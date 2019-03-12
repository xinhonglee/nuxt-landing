<template>
  <main id="main">
    <section>
      <div class="wrap">
        <h1>Cityzen</h1>
        <h2>Support</h2>
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
      title: 'Cityzen support',
      meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'Get support with your Cityzen theme and plugin suite'
        }
      ],
      bodyAttrs: {
        class: 'page_cityzen page_cityzen_support'
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
