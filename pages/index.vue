<template>
  <main id="main">
    <section class="puff-grad-invert-2 with-meta">
      <div class="meta meta-1">
        <span>Sketch, HTML, CSS, Javascript</span>
      </div>
      <div class="meta meta-2">
        <span>Another longer text goes here</span>
      </div>
  		<div class="callout duo squish">
  			<div class="wrap">
  				<designBlock/>
  				<engineeringBlock/>
  			</div>
  		</div>
  	</section>
    <section class="">
      <serviceFeatures/>
    </section>
    <section class="puff-grad-invert">
      <callout/>
  	</section>
    <section class="case_studies">
      <caseUCLA/>
  	</section>
  </main>
</template>

<script>
  import caseUCLA from '~/components/services/work/case_study_ucla.vue'
  import serviceFeatures from '~/components/services/features.vue'
  import callout from '~/components/callout.vue'
  import designBlock from '~/components/services/design.vue'
  import engineeringBlock from '~/components/services/engineering.vue'
  export default {
    components: {
      callout,
      designBlock,
      engineeringBlock,
      serviceFeatures,
      caseUCLA
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
