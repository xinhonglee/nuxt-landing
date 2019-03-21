<template>
  <main class="error-500">
    <section class="">
      <div class="wrap">
        <div class="headline title">
          <h1>Page not found</h1>
          <p>Please return to the <nuxt-link to="/">index page</nuxt-link> or <nuxt-link to="/contact">reach out to us</nuxt-link>.</p>
        </div>
      </div>
    </section>
    <!-- <h1>This page doesn’t exist</h1>
    <p>The link you clicked on may be broken or no longer exist.</p> -->
  </main>
</template>
<script>
export default {
  name: 'error-500',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
