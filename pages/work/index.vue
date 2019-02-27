<template>
  <div class="">
    <main id="main">
      <section>
        <div class="wrap">
          <h1>Customers</h1>
          <clientList/>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  import clientList from '~/components/client_list.vue'
  export default {
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
  // @import '~assets/scss/master.scss';
</style>
