<template>
  <footer class="">
    <div class="wrap">
      <div class="flex-end signoff">
        <img src="~assets/images/logos/logotype.svg" class="logo">
        <p>Magnet is a web design and development agency based in Cincinnati with a distributed team around the world.</p>
        <p class="muted">&copy; Copyright Magnet Co, LLC. All rights reserved.</p>

      </div>
      <div class="links-company">
        <h5>Company</h5>
        <ul>
          <li><nuxt-link active-class="is-active" to="/" class="navbar-item is-tab" exact>Services</nuxt-link></li>
          <li><nuxt-link active-class="is-active" to="/about" class="navbar-item is-tab" exact>About</nuxt-link></li>
          <li><nuxt-link active-class="is-active" to="/pricing" class="navbar-item is-tab" exact>Pricing</nuxt-link></li>
          <li><nuxt-link active-class="is-active" to="/contact" class="navbar-item is-tab" exact>Contact us</nuxt-link></li>
          <!-- <li><nuxt-link active-class="is-active" to="/terms" class="navbar-item is-tab with-icon icon-buy" exact>Terms of service</nuxt-link></li> -->
        </ul>
      </div>
      <div class="links-work">
        <h5>Portfolio</h5>
        <ul>
          <li><nuxt-link active-class="is-active" to="/work" class="navbar-item is-tab" exact>Case studies</nuxt-link></li>
          <li><a href="https://www.behance.net/magnetco" target="_blank">Behance</a></li>
          <li><a href="https://dribbble.com/gavinhall" target="_blank">Dribbble</a></li>
          <li><a href="https://github.com/magnetco" target="_blank">Github</a></li>
        </ul>
      </div>
      <div class="links-products">
        <h5>Products</h5>
        <ul>
          <!-- <li><nuxt-link active-class="is-active" to="/cityzen" class="navbar-item is-tab" exact>Cityzen</nuxt-link></li> -->
          <li>Cityzen</li>
          <li>Wordsmith</li>
          <li>Hunter</li>
          <li>Concierge</li>
        </ul>
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
