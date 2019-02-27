<template>
  <footer class="">
    <div class="footer_upper">
      <div class="wrap">
        <div>
          <h4>Services</h4>
          <ul>
            <li><nuxt-link active-class="is-active" to="/" class="navbar-item is-tab" exact>What we do</nuxt-link></li>
            <li><nuxt-link active-class="is-active" to="/customers" class="navbar-item is-tab" exact>Customers</nuxt-link></li>
            <li><nuxt-link active-class="is-active" to="/about" class="navbar-item is-tab" exact>About</nuxt-link></li>
            <li><nuxt-link active-class="is-active" to="/getting-started" class="navbar-item is-tab" exact>Getting Started</nuxt-link></li>
          </ul>
        </div>
        <div>
          <h4>Products</h4>
          <ul>
            <li><nuxt-link active-class="is-active" to="/products" class="navbar-item is-tab" exact>Products</nuxt-link></li>
            <li><nuxt-link active-class="is-active" to="/cityzen" class="navbar-item is-tab" exact>Cityzen</nuxt-link></li>
          </ul>
        </div>
        <div>
          <h4>Our Work</h4>
          <ul>
            <li><nuxt-link active-class="is-active" to="/work/ucla" class="navbar-item is-tab" exact>UCLA</nuxt-link></li>
            <li><nuxt-link active-class="is-active" to="/cityzen/support" class="navbar-item is-tab" exact>Support</nuxt-link></li>
            <li><nuxt-link active-class="is-active" to="/cityzen/buy" class="navbar-item is-tab with-icon icon-buy" exact>Buy</nuxt-link></li>
          </ul>
        </div>
        <div>
          <h4>Cityzen Theme</h4>
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
