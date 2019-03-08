<template>
  <header class="header_home">
    <div class="wrap">
      <div class="logotype">
        <logo/>
      </div>
      <div class="navigation">
        <navigation/>
      </div>
      <div class="meta">
        <div class="social-icons">
          <a href="https://www.behance.net/magnetco" class="icon-behance" target="_blank">Magnet on Behance</a>
          <a href="https://dribbble.com/gavinhall" class="icon-dribbble" target="_blank">Magnet on Dribbble</a>
          <!-- <a href="https://github.com/magnetco" class="icon-github" target="_blank">Magnet on Github</a> -->
        </div>
        <div class="text">
          Making beautiful websites since 2004
        </div>
      </div>
      <div class="content">
        <article class="">
          <h1>Human-centric web design</h1>
          <p>Magnet is an independent web design and production agency, combining art &amp; science with form &amp; function to produce compelling websites.</p>
          <!-- <div class="images team-headshots">
            <img src="~assets/images/team-headshots/team-gavin.jpg" alt="Gavin">
            <img src="~assets/images/team-headshots/team-alex.jpg" alt="Alex">
            <img src="~assets/images/team-headshots/team-sarah.jpg" alt="Sarah">
            <img src="~assets/images/team-headshots/team-eugene.jpg" alt="Eugene">
            <img src="~assets/images/team-headshots/team-igor.jpg" alt="Eugene">
            <img src="~assets/images/team-headshots/team-bryan.jpg" alt="Eugene">
            <img src="~assets/images/team-headshots/team-don.jpg" alt="Eugene">
          </div> -->
        </article>
      </div>
      <div class="mouse">
        <mouse/>
      </div>
    </div>
    
  </header>

</template>

<script>
import logo from '~/components/logo.vue'
import navigation from '~/components/navigation.vue'
import mouse from '~/components/mouse.vue'
export default {
  components: {
    logo,
    navigation,
    mouse
  }
}

</script>

<style lang="css" scoped>

</style>
