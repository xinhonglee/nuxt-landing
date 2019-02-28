<template>
  <header class="">
    <div class="wrap">
      <div class="logotype">
        <logo/>
      </div>
      <div class="navigation">
        <navigation/>
      </div>
    </div>
  </header>
</template>

<script>
import logo from '~/components/header/logo.vue'
import navigation from '~/components/header/navigation_theme.vue'
export default {
  components: {
    logo,
    navigation
  }
}
</script>
