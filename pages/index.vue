<template>
  <main id="main">
    <section class="puff-grad-invert-2">
  		<div class="callout duo squish">
  			<div class="wrap">
  				<designBlock/>
  				<engineeringBlock/>
  			</div>
  		</div>
  	</section>
    <section class="">
      <div class="wrap grid-features">
        <article>
          <div class="icon">
            <img src="~assets/images/icons/icon-speed.svg" alt="">
          </div>
          <div class="content">
            <h4 class="title">Performance</h4>
            <div class="description">
              Magnet is an independent web design and production agency, combining art &amp; science with form &amp; function to produce compelling websites.
            </div>
          </div><!-- content -->
        </article>
        <article>
          <div class="icon">
            <img src="~assets/images/icons/icon-rocket.svg" alt="">
          </div>
          <div class="content">
            <h4 class="title">Security</h4>
            <div class="description">
              Magnet is an independent web design and production agency, combining art &amp; science with form &amp; function to produce compelling websites.
            </div>
          </div><!-- content -->
        </article>
        <article>
          <div class="icon">
            <img src="~assets/images/icons/icon-chip.svg" alt="">
          </div>
          <div class="content">
            <h4 class="title">Accessibility</h4>
            <div class="description">
              Magnet is an independent web design and production agency, combining art &amp; science with form &amp; function to produce compelling websites.
            </div>
          </div><!-- content -->
        </article>
        <article>
          <div class="icon">
            <img src="~assets/images/icons/icon-bulb.svg" alt="">
          </div>
          <div class="content">
            <h4 class="title">Inspiration</h4>
            <div class="description">
              Magnet is an independent web design and production agency, combining art &amp; science with form &amp; function to produce compelling websites.
            </div>
          </div><!-- content -->
        </article>
        <article>
          <div class="icon">
            <img src="~assets/images/icons/icon-target.svg" alt="">
          </div>
          <div class="content">
            <h4 class="title">Strategy</h4>
            <div class="description">
              Magnet is an independent web design and production agency, combining art &amp; science with form &amp; function to produce compelling websites.
            </div>
          </div><!-- content -->
        </article>
        <article>
          <div class="icon">
            <img src="~assets/images/icons/icon-pantone.svg" alt="">
          </div>
          <div class="content">
            <h4 class="title">Security</h4>
            <div class="description">
              Magnet is an independent web design and production agency, combining art &amp; science with form &amp; function to produce compelling websites.
            </div>
          </div><!-- content -->
        </article>
        <article>
          <div class="icon">
            <img src="~assets/images/icons/icon-shirt.svg" alt="">
          </div>
          <div class="content">
            <h4 class="title">Team Players</h4>
            <div class="description">
              Magnet is an independent web design and production agency, combining art &amp; science with form &amp; function to produce compelling websites.
            </div>
          </div><!-- content -->
        </article>
        <article>
          <div class="icon">
            <img src="~assets/images/icons/icon-graph.svg" alt="">
          </div>
          <div class="content">
            <h4 class="title">Analytics</h4>
            <div class="description">
              Magnet is an independent web design and production agency, combining art &amp; science with form &amp; function to produce compelling websites.
            </div>
          </div><!-- content -->
        </article>
        <article>
          <div class="icon">
            <img src="~assets/images/icons/icon-console.svg" alt="">
          </div>
          <div class="content">
            <h4 class="title">Clean Code</h4>
            <div class="description">
              Magnet is an independent web design and production agency, combining art &amp; science with form &amp; function to produce compelling websites.
            </div>
          </div><!-- content -->
        </article>
        <article>
          <div class="icon">
            <img src="~assets/images/icons/icon-vault.svg" alt="">
          </div>
          <div class="content">
            <h4 class="title">Security</h4>
            <div class="description">
              Magnet is an independent web design and production agency, combining art &amp; science with form &amp; function to produce compelling websites.
            </div>
          </div><!-- content -->
        </article>
        <article>
          <div class="icon">
            <img src="~assets/images/icons/icon-browser.svg" alt="">
          </div>
          <div class="content">
            <h4 class="title">Accessibility</h4>
            <div class="description">
              Magnet is an independent web design and production agency, combining art &amp; science with form &amp; function to produce compelling websites.
            </div>
          </div><!-- content -->
        </article>
        <article>
          <div class="icon">
            <img src="~assets/images/icons/icon-tick.svg" alt="">
          </div>
          <div class="content">
            <h4 class="title">Inspiration</h4>
            <div class="description">
              Magnet is an independent web design and production agency, combining art &amp; science with form &amp; function to produce compelling websites.
            </div>
          </div><!-- content -->
        </article>
        <article>
          <div class="icon">
            <img src="~assets/images/icons/icon-help.svg" alt="">
          </div>
          <div class="content">
            <h4 class="title">Strategy</h4>
            <div class="description">
              Magnet is an independent web design and production agency, combining art &amp; science with form &amp; function to produce compelling websites.
            </div>
          </div><!-- content -->
        </article>
        <article>
          <div class="icon">
            <img src="~assets/images/icons/icon-compass.svg" alt="">
          </div>
          <div class="content">
            <h4 class="title">Inclusion</h4>
            <div class="description">
              Magnet is an independent web design and production agency, combining art &amp; science with form &amp; function to produce compelling websites.
            </div>
          </div><!-- content -->
        </article>
        <article>
          <div class="icon">
            <img src="~assets/images/icons/icon-chair.svg" alt="">
          </div>
          <div class="content">
            <h4 class="title">Inclusion</h4>
            <div class="description">
              Magnet is an independent web design and production agency, combining art &amp; science with form &amp; function to produce compelling websites.
            </div>
          </div><!-- content -->
        </article>
      </div>
    </section>
    <section class="puff-grad-invert">
      <callout/>
  	</section>
  </main>
</template>

<script>

  import callout from '~/components/callout.vue'
  import designBlock from '~/components/services/design.vue'
  import engineeringBlock from '~/components/services/engineering.vue'
  export default {
    components: {
      callout,
      designBlock,
      engineeringBlock
    },
    layout: 'home',
    head: {
      title: 'Magnet Co - Better web by design',
      meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'Your next web design and development team'
        }
      ]
    }
  }
</script>

<style lang="scss">
  // @import '~assets/scss/master.scss';
</style>
