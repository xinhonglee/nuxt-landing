<template>
  <main id="main">
    <div class="wrap">
      <article>
        <div class="title">
          <h1>Because everyone loves turtles</h1>
          <p>The institute is dedicated to the study and conservation of turtles and tortoises of the world.</p>
        </div>
        <div class="content">
          <section class="content_section half_first">
            <div class="text">
              <h4>A design refresh</h4>
              <p>The CRI was in need of a visual refresh. We kept the existing WordPress backend and updated the frontend with a sumptuous new design to better inform visitors to the website and institute as well as help steer potential donors in the right direction.</p>
            </div>
          </section>
          <section class="content_section content_image">
            <img src="~assets/images/work/cri-01.jpg">
          </section>
          <section class="content_section half_last">
            <div class="text">
              <h4>Reliable technology</h4>
              <p>Built using WordPress, Javascript, HTML5, and CSS, the site was designed for a stable future.</p>
            </div>
          </section>
          <section class="content_section content_icons" id="">
            <div><img src="~assets/images/tech/icon_js.png"><span>Javascript</span></div>
            <div><img src="~assets/images/tech/icon_html5.png"><span>HTML5</span></div>
            <div><img src="~assets/images/tech/icon_css3.png"><span>CSS3</span></div>
            <div><img src="~assets/images/tech/icon_wordpress.png"><span>WordPress</span></div>
          </section>
        </div><!-- content -->
      </article>
      <div class="callout">
        <a href="/case-studies" class="anim-button">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="60" width="320" />
          </svg>
           <div class="text">View more work</div>
        </a>
      </div>
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
      title: 'Chelonian Research Institute Case Study',
      meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'Chelonian Research Institute Case Study'
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
