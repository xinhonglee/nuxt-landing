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
    <section class="bg-03 case_studies">
      <div class="titleblock center-flex">
        <h5>Case studies</h5>
        <h2>Some of our recent activity</h2>
      </div>
      <caseStudyList/>
  	</section>
    <section class="">
      <div class="titleblock center-flex">
        <h5>Our approach</h5>
        <h2>Things we care most about</h2>
      </div>
      <serviceFeatures/>
    </section>
    <section class="puff-grad-invert-2">
      <callout/>
  	</section>
  </main>
</template>

<script>
  import { paintCommon } from "~/assets/js/animate";
  import caseStudyList from '~/components/services/work/case_study_list.vue'
  import serviceFeatures from '~/components/services/features.vue'
  import callout from '~/components/callout.vue'
  import designBlock from '~/components/services/design.vue'
  import engineeringBlock from '~/components/services/engineering.vue'
  export default {
    data() {
      return {};
    },
    mounted() {
      paintCommon();
    },
    components: {
      callout,
      designBlock,
      engineeringBlock,
      serviceFeatures,
      caseStudyList
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
