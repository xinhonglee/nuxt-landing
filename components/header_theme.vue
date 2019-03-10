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
import logo from '~/components/logo.vue'
import navigation from '~/components/navigation_theme.vue'
import mouse from '~/components/mouse.vue'
export default {
  components: {
    logo,
    navigation,
    mouse
  }
}
</script>
