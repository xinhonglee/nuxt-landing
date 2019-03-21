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
          <h2><a href="/case-studies/ucla/">UCLA Department of English</a></h2>
        </div>
        <a href="/case-studies/ucla/" class="action">
          <img src="~assets/images/icons/arrow-next.svg">
          <span class="text">View</span>
        </a>
        <a href="/case-studies/ucla/" class="media">
          <img src="~assets/images/work/ucla-05.jpg" alt="Case study example from the UCLA Department of English project by Magnet Co">
          <!-- <caption></caption> -->
        </a>
      </div>
    </section>
    <section>
      <div class="wrap case_study">
        <div class="title">
          <h4>Case Study</h4>
          <h2><a href="/case-studies/ikea/">Ikea</a></h2>
        </div>
        <a href="/case-studies/ikea/" class="action">
          <img src="~assets/images/icons/arrow-next.svg">
          <span class="text">View</span>
        </a>
        <a href="/case-studies/ikea/" class="media">
          <img src="~assets/images/work/ikea-preview.jpg" alt="Case study example from the Ikea project by Magnet Co">
          <!-- <caption></caption> -->
        </a>
      </div>
    </section>
    <section>
      <div class="wrap case_study">
        <div class="title">
          <h4>Case Study</h4>
          <h2><a href="/case-studies/explore/">Explore Org</a></h2>
        </div>
        <a href="/case-studies/explore/" class="action">
          <img src="~assets/images/icons/arrow-next.svg">
          <span class="text">View</span>
        </a>
        <a href="/case-studies/explore/" class="media">
          <img src="~assets/images/work/explore-03.jpg" alt="Case study example from the Explore project by Magnet Co">
          <!-- <caption></caption> -->
        </a>
      </div>
    </section>
    <section>
      <div class="wrap case_study">
        <div class="title">
          <h4>Case Study</h4>
          <h2><a href="/case-studies/vonholzhausen/">Vonholzhausen</a></h2>
        </div>
        <a href="/case-studies/vonholzhausen/" class="action">
          <img src="~assets/images/icons/arrow-next.svg">
          <span class="text">View</span>
        </a>
        <a href="/case-studies/vonholzhausen/" class="media">
          <img src="~assets/images/work/von-01.jpg" alt="Case study example from the Vonholzhausen project by Magnet Co">
          <!-- <caption></caption> -->
        </a>
      </div>
    </section>
    <section>
      <div class="wrap case_study">
        <div class="title">
          <h4>Case Study</h4>
          <h2><a href="/case-studies/clarity/">Clarity</a></h2>
        </div>
        <a href="/case-studies/clarity/" class="action">
          <img src="~assets/images/icons/arrow-next.svg">
          <span class="text">View</span>
        </a>
        <a href="/case-studies/clarity/" class="media">
          <img src="~assets/images/work/clarity-01.jpg" alt="Case study example from the Clarity project by Magnet Co">
          <!-- <caption></caption> -->
        </a>
      </div>
    </section>
    <section>
      <div class="wrap case_study">
        <div class="title">
          <h4>Case Study</h4>
          <h2><a href="/case-studies/chelonian/">Chelonian Research Institute</a></h2>
        </div>
        <a href="/case-studies/chelonian/" class="action">
          <img src="~assets/images/icons/arrow-next.svg">
          <span class="text">View</span>
        </a>
        <a href="/case-studies/chelonian/" class="media">
          <img src="~assets/images/work/cri-01.jpg" alt="Case study example from the Chelonian Research Institute project by Magnet Co">
          <!-- <caption></caption> -->
        </a>
      </div>
    </section>
    <section>
      <div class="wrap case_study">
        <div class="title">
          <h4>Work in progress</h4>
          <h2>Cityzen</h2>
        </div>
        <a class="action">
          <!-- <img src="~assets/images/icons/arrow-next.svg"> -->
          <!-- <span class="text">View</span> -->
        </a>
        <a class="media">
          <img src="~assets/images/work/cityzen-01.jpg" alt="Work in progress shot from the Cityzen project by Magnet Co">
          <!-- <caption></caption> -->
        </a>
      </div>
    </section>
    <section>
      <div class="wrap case_study">
        <div class="title">
          <h4>Work in progress</h4>
          <h2>Hunter</h2>
        </div>
        <a class="action">
          <!-- <img src="~assets/images/icons/arrow-next.svg"> -->
          <!-- <span class="text">View</span> -->
        </a>
        <a class="media">
          <img src="~assets/images/work/hunter-01.jpg" alt="Work in progress shot from the Hunter project by Magnet Co">
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
