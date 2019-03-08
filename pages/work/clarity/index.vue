<template>
  <main id="main">
    <div class="wrap">
      <article>
        <div class="title">
          <h1>A single source of truth</h1>
          <p>Clarity is a productivity app that allows users to organize information, and design workflows in a way that makes sense for day-to-day business across industries.</p>
        </div>
        <div class="content">
          <section class="content_section half_first">
            <div class="text">
              <h4>Improving the status quo</h4>
              <p>Most productivity apps deal with a particular workflow that doesn't necessarily work for everyone and content can be mistakenly deleted or moved, making team collaboration difficult and frustrating.</p>
            </div>
          </section>
          <section class="content_section content_image">
            <img src="~assets/images/work/clarity-01.jpg">
          </section>
          <section class="content_section half_last">
            <div class="text">
              <h4>Refining the look</h4>
              <p>Clarity is a lightweight, modern app that allows you to build a project or contact page that links to your most essential tools, while giving you additional optional fields to enter more information.</p>
            </div>
          </section>
          <section class="content_section content_image">
            <img src="~assets/images/work/clarity-02.jpg">
          </section>
          <section class="content_section half_first">
            <div class="text">
              <h4>Customization creates cohesion</h4>
              <p>Customizable workflows, templates, branding and user accounts create an integrated experience that complements business operations.</p>
            </div>
          </section>
          <section class="content_section content_image">
            <img src="~assets/images/work/clarity-03.jpg">
          </section>
          <section class="content_section half_last">
            <div class="text">
              <h4>Robust technology</h4>
              <p>Built using Vue JS, HTML5, and CSS, Clarity was designed for a future of growth.</p>
            </div>
          </section>
          <section class="content_section content_icons" id="">
            <div><img src="~assets/images/tech/icon_vue.png"><span>Python</span></div>
            <div><img src="~assets/images/tech/icon_postgres.png"><span>Angular</span></div>
            <div><img src="~assets/images/tech/icon_html5.png"><span>HTML5</span></div>
            <div><img src="~assets/images/tech/icon_css3.png"><span>CSS3</span></div>
          </section>
        </div><!-- content -->
      </article>
    </div>
  </main>
</template>

<script>
  import { paintCommon } from "~/assets/js/animate";
  export default {
    data() {
      return {};
    },
    mounted() {
      paintCommon();
    },
    layout: 'work',
    head: {
      title: 'UCLA Case Study',
      meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'UCLA Case Study'
        }
      ],
      bodyAttrs: {
        class: 'page_work'
      }
    }
  }
</script>

<style lang="scss">
  // @import '~assets/scss/master.scss';
</style>
