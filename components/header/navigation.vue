<template>
  <menu role="navigation" aria-label="main navigation">
    <li><nuxt-link active-class="is-active" to="/" class="navbar-item is-tab navbar-services" exact>Services</nuxt-link></li>
    <li><nuxt-link active-class="is-active" to="/products" class="navbar-item is-tab navbar-products" exact>Products</nuxt-link></li>
    <li><nuxt-link active-class="is-active" to="/work" class="navbar-item is-tab navbar-work" exact>Work</nuxt-link></li>
    <li><nuxt-link active-class="is-active" to="/about" class="navbar-item is-tab navbar-about" exact>About</nuxt-link></li>
    <li><nuxt-link active-class="is-active" to="/getting-started" class="navbar-item is-tab navbar-gettingstarted" exact>Getting Started</nuxt-link></li>
  </menu>
</template>
