<template>
  <main id="main">
    <section class="">
      <div class="wrap case_study">
        <div class="title">
          <h4>Our work</h4>
          <h2><a href="/">Wordsmith / UCLA Department of English</a></h2>
        </div>
        <a href="/" class="action">
          <img src="~assets/images/icons/arrow-next.svg">
          <span class="text">View</span>
        </a>
        <a href="/" class="media">
          <img src="~assets/images/work/ucla-05.jpg">
          <!-- <caption></caption> -->
        </a>
      </div>
      <div class="wrap client_logos hide_nonhome">
        <clientList/>
      </div>
      <div class="wrap callout">
        <a href="/work" class="anim-button">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="60" width="320" />
          </svg>
           <div class="text">See more examples</div>
        </a>
      </div>
    </section>

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
    <!-- <section class="bg-02 case_studies">
      <div class="titleblock center-flex">
        <h5>Case studies</h5>
        <h2>Some of our recent activity</h2>
      </div>
      <caseStudyList/>
  	</section> -->
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
  import { paintHome } from "~/assets/js/animate";
  // import { testBind } from "~/assets/js/animate";
  // import caseStudyList from '~/components/services/work/case_study_list.vue'
  import clientList from '~/components/services/work/client_list.vue'
  import serviceFeatures from '~/components/services/features.vue'
  import callout from '~/components/callout.vue'
  import designBlock from '~/components/services/design.vue'
  import engineeringBlock from '~/components/services/engineering.vue'
  export default {
    data() {
      return {};
    },
    mounted() {
      paintHome();
    },
    components: {
      callout,
      designBlock,
      engineeringBlock,
      serviceFeatures,
      // caseStudyList,
      clientList
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
      ],
      bodyAttrs: {
        class: 'page_index'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .case_study + .client_logos {
    padding-top: 0.5rem;
  }
  .client_logos + .callout {
    padding-top: 0.5rem;
    padding-bottom: 3rem;
  }
</style>
