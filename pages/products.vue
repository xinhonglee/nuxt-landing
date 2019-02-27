<template>
  <div class="">
    <main id="main">
      <section>
        <div class="wrap">
          <h1>Products</h1>
          <nuxt-link to="/cityzen">Cityzen</nuxt-link>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Our products',
      meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'Products by Magnet Co'
        }
      ]
    }
  }
</script>

<style lang="scss">
  // @import '~assets/scss/master.scss';
</style>
