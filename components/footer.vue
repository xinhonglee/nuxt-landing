<template>
  <footer class="">
    <div class="footer_upper">
      <div class="wrap">
        <div>
          <h4>Services</h4>
          <navigation/>
        </div>
        <div>
          <h4>Products</h4>
          <productList/>
        </div>
        <div>
          <h4>Our work</h4>
          <clientList/>
        </div>
        <div>
          <h4>Cityzen theme</h4>
          <ul>
            <li><nuxt-link active-class="is-active" to="/cityzen" class="navbar-item is-tab" exact>Features</nuxt-link></li>
            <li><nuxt-link active-class="is-active" to="/cityzen/support" class="navbar-item is-tab" exact>Support</nuxt-link></li>
            <li><nuxt-link active-class="is-active" to="/cityzen/buy" class="navbar-item is-tab with-icon icon-buy" exact>Buy</nuxt-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer_lower">
      <div class="wrap">
        <p>&copy; Copyright Magnet Co, LLC.</p>
      </div>
    </div>
  </footer>
</template>

<script>
  import navigation from '~/components/navigation.vue'
  import clientList from '~/components/services/work/client_list.vue'
  import productList from '~/components/product_list.vue'
  export default {
    components: {
      navigation,
      clientList,
      productList
    }
  }
</script>
