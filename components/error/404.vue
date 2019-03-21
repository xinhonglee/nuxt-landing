<template>
  <main id="main" class="error-404">
    <section class="">
      <div class="wrap">
        <div class="headline title">
          <h5>Uh oh. 404 error!</h5>
          <h1>Page not found</h1>
          <p>Please return to the <nuxt-link to="/">index page</nuxt-link> or <nuxt-link to="/contact">reach out to us</nuxt-link>.</p>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
