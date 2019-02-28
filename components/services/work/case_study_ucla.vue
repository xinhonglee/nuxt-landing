<template>
  <div class="wrap">
    <a href="/work/ucla/" class="case_study">
      <div class="info">
        <h4>Case study</h4>
        <h3>UCLA Annotations App</h3>
      </div>
      <img src="~assets/images/work/ucla-full.jpg" class="UCLA annotations app screenshot">
    </a>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .case_study {
    position: relative;
    width: 400px;
    margin: 2rem auto;
    .info {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: auto;
      background: blue;
      padding: 2rem;
    }
    img {
      object-fit: cover;
    }
  }
  a.case_study {
    &:hover {

    }
  }
</style>
