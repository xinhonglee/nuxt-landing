<template>
  <footer class="">
    <div class="footer_upper">
      <div class="wrap">
        <div>
          <h4>Peace of mind</h4>
          <p>We guarantee all our work and hold extensive insurance. Security is always at the top of our minds.</p>
        </div>
        <div>
          <h4>24/7 support</h4>
          <p>Our team is located worldwide and we are available to help anytime you might need.</p>
        </div>
        <!-- <div>
          <h4>Recent clients</h4>
          <clientList/>
        </div> -->
        <div>
          <h4>Upcoming product</h4>
          <div class="feature feature_cityzen">
            <h2>Cityzen</h2>
            <p>A rather mighty yet friendly city website platform that makes creating and supporting city websites a breeze.</p>
            <ul>
              <li><nuxt-link active-class="is-active" to="/cityzen" class="navbar-item is-tab" exact>Features</nuxt-link></li>
              <li><nuxt-link active-class="is-active" to="/cityzen/support" class="navbar-item is-tab" exact>Support</nuxt-link></li>
              <li><nuxt-link active-class="is-active" to="/cityzen/buy" class="navbar-item is-tab with-icon icon-buy" exact>Buy</nuxt-link></li>
            </ul>
          </div>
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
  // import { stickyHeader } from "~/assets/js/main";

  import navigation from '~/components/navigation.vue'
  import clientList from '~/components/services/work/client_list.vue'
  import productList from '~/components/product_list.vue'
  export default {
    components: {
      navigation,
      clientList,
      productList
    }
    // mounted() {
    //   stickyHeader();
    // }
  }
</script>
