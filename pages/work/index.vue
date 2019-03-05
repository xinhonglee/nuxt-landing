<template>
  <main id="main">
    <section>
      <div class="wrap">
        <div class="title">
          <h1>Recent work</h1>
        </div>
        <clientList/>
      </div>
    </section>
  </main>
</template>

<script>
  import { paintCommon } from "~/assets/js/animate";
  import clientList from '~/components/client_list.vue'
  export default {
    data() {
      return {};
    },
    mounted() {
      paintCommon();
    },
    components: {
      clientList
    },
    layout: 'work',
    head: {
      title: 'Case Studies',
      meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'Case Studies'
        }
      ]
    }
  }
</script>

<style lang="scss">
  
</style>
