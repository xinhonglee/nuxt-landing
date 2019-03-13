<template>
  <main id="main">

    <!-- <preLoader/> -->

    <section class="about">
      <div class="wrap">
        <div class="headline title">
          <h1>How we work</h1>
          <p>Psychology-focused design that thoughtfully combines art and science, form and function. </p>
        </div>
        <div class="cards squish">

          <div class="card">
            <div class="title">
              <span>01</span>
              <h2>Precise</h2>
            </div>
            <p>A balanced website utilizes a modern technology stack, tested software and responsive design.</p>
          </div>

          <div class="card">
            <div class="title">
              <span>02</span>
              <h2>Beautiful</h2>
            </div>
            <p>Design has the power to transform perception of relevance, credibility and usability.</p>

          </div>

          <div class="card">
            <div class="title">
              <span>03</span>
              <h2>Intelligent</h2>
            </div>
            <p>Functional design creates an intuitive experience, while future-oriented technology adapts and delivers.</p>

          </div>

          <div class="card">
            <div class="title">
              <span>04</span>
              <h2>Manageable</h2>
            </div>
            <p>Empowerment through intuitive content management and a range of support options.</p>

          </div>

          <div class="card">
            <div class="title">
              <span>05</span>
              <h2>Accessible</h2>
            </div>
            <p>Equal access to information for all.</p>

          </div>

          <div class="card">
            <div class="title">
              <span>06</span>
              <h2>Accurate</h2>
            </div>
            <p>Credibility is maintained through built-in monitoring and daily backups.</p>

          </div>

          <div class="card">
            <div class="title">
              <span>07</span>
              <h2>Secure</h2>
            </div>
            <p>Peace of mind with powerful tools and access control. </p>

          </div>

          <div class="card">
            <div class="title">
              <span>08</span>
              <h2>Data-driven</h2>
            </div>
            <p>Information architecture built upon quantitative data and supported by qualitative studies.</p>

          </div>

          <div class="card">
            <div class="title">
              <span>09</span>
              <h2>Connecting</h2>
            </div>
            <p>Encourage dialogue with features that connect people.</p>
          </div>


        </div><!-- END cards -->

      </div>
    </section>
  </main>
</template>

<script>
  // import preLoader from '~/components/loader.vue'
  // import { preLoading } from "~/assets/js/animate";
  import { paintCommon } from "~/assets/js/animate";
  export default {
    data() {
      return {};
    },
    mounted() {
      // preLoading();
      paintCommon();
    },
    // components: {
    //   preLoader
    // },
    head: {
      title: 'About Magnet Co',
      meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'About Magnet Co'
        }
      ],
      bodyAttrs: {
        class: 'page_about'
      }
    }
  }
</script>

<style lang="scss">
  // @import '~assets/scss/master.scss';
</style>
