<template>
  <main id="main">
    <section>
      <div class="wrap">
        <h1>Privacy</h1>
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
      title: 'Privacy',
      meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'Magnet Co terms of service'
        }
      ],
      bodyAttrs: {
        class: 'page_privacy'
      }
    }
  }
</script>

<style lang="scss">
  // @import '~assets/scss/master.scss';
</style>
