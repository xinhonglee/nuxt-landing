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

</style>
