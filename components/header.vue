<template>
  <header>
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
import navigation from '~/components/navigation.vue'
export default {
  components: {
    logo,
    navigation
  }
}
</script>
