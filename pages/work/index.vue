<template>
  <main id="main">
    <section>
      <div class="wrap">
        <div class="title headline">
          <h1>Recent work</h1>
        </div>
      </div>
    </section>
    <section>
      <div class="wrap case_study">
        <div class="title">
          <h4>Case Study</h4>
          <h2><a href="/work/ucla/">UCLA Department of English</a></h2>
        </div>
        <a href="/work/ucla/" class="action">
          <img src="~assets/images/icons/arrow-next.svg">
          <span class="text">View</span>
        </a>
        <a href="/work/ucla/" class="media">
          <img src="~assets/images/work/ucla-05.jpg" alt="Case study example from the UCLA Department of English project by Magnet Co">
          <!-- <caption></caption> -->
        </a>
      </div>
    </section>
    <section>
      <div class="wrap case_study">
        <div class="title">
          <h4>Case Study</h4>
          <h2><a href="/work/ikea/">Ikea</a></h2>
        </div>
        <a href="/work/ikea/" class="action">
          <img src="~assets/images/icons/arrow-next.svg">
          <span class="text">View</span>
        </a>
        <a href="/work/ikea/" class="media">
          <img src="~assets/images/work/ikea-preview.jpg" alt="Case study example from the Ikea project by Magnet Co">
          <!-- <caption></caption> -->
        </a>
      </div>
    </section>
    <section>
      <div class="wrap case_study">
        <div class="title">
          <h4>Case Study</h4>
          <h2><a href="/work/explore/">Explore Org</a></h2>
        </div>
        <a href="/work/explore/" class="action">
          <img src="~assets/images/icons/arrow-next.svg">
          <span class="text">View</span>
        </a>
        <a href="/work/explore/" class="media">
          <img src="~assets/images/work/explore-03.jpg" alt="Case study example from the Explore project by Magnet Co">
          <!-- <caption></caption> -->
        </a>
      </div>
    </section>
    <section>
      <div class="wrap case_study">
        <div class="title">
          <h4>Case Study</h4>
          <h2><a href="/work/vonholzhausen/">Vonholzhausen</a></h2>
        </div>
        <a href="/work/vonholzhausen/" class="action">
          <img src="~assets/images/icons/arrow-next.svg">
          <span class="text">View</span>
        </a>
        <a href="/work/vonholzhausen/" class="media">
          <img src="~assets/images/work/von-01.jpg" alt="Case study example from the Vonholzhausen project by Magnet Co">
          <!-- <caption></caption> -->
        </a>
      </div>
    </section>
    <section>
      <div class="wrap case_study">
        <div class="title">
          <h4>Case Study</h4>
          <h2><a href="/work/clarity/">Clarity</a></h2>
        </div>
        <a href="/work/clarity/" class="action">
          <img src="~assets/images/icons/arrow-next.svg">
          <span class="text">View</span>
        </a>
        <a href="/work/clarity/" class="media">
          <img src="~assets/images/work/clarity-01.jpg" alt="Case study example from the Clarity project by Magnet Co">
          <!-- <caption></caption> -->
        </a>
      </div>
    </section>
    <section>
      <div class="wrap case_study">
        <div class="title">
          <h4>Case Study</h4>
          <h2><a href="/work/chelonian/">Chelonian Research Institute</a></h2>
        </div>
        <a href="/work/chelonian/" class="action">
          <img src="~assets/images/icons/arrow-next.svg">
          <span class="text">View</span>
        </a>
        <a href="/work/chelonian/" class="media">
          <img src="~assets/images/work/cri-01.jpg" alt="Case study example from the Chelonian Research Institute project by Magnet Co">
          <!-- <caption></caption> -->
        </a>
      </div>
    </section>
    <section>
      <div class="wrap client_logos hide_active">
        <clientList/>
      </div>
    </section>
    <section class="call">
      <callout/>
  	</section>
  </main>
</template>

<script>
  import { paintCommon } from "~/assets/js/animate";
  import clientList from '~/components/services/work/client_list.vue'
  import callout from '~/components/callout.vue'
  export default {
    data() {
      return {};
    },
    mounted() {
      paintCommon();
    },
    components: {
      callout,
      clientList
    },
    layout: 'work',
    head: {
      title: 'Case Studies',
      meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'Case Studies'
        }
      ],
      bodyAttrs: {
        class: 'page_work_index'
      }
    }
  }
</script>

<style lang="scss">

</style>
