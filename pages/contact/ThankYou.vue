<template>
  <div class="thank-you">
    <img src="~assets/images/icons/icon-tick.svg">
    <h3 class="title">
       Message sent
    </h3>
    <p>We have received your email and will respond as soon as we can.</p>
  </div>
</template>

<script>
  export default {
    name: "thank-you"
  }
</script>

<style lang="scss" scoped>
  .thank-you {
    position: relative;
    padding: 0 0 0 5rem;
    img {
      position: relative;
      top: 0;
      left: -5rem;
      width: 2rem;
      height: auto;
    }
    h3 {
      img  {}
    }
    p {}
  }
</style>
