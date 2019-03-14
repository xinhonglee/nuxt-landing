<template>
  <main id="main">
    <div class="wrap">
      <article>
        <div class="title">
          <h1>Beautiful, sustainable bags</h1>
          <p>Launched in 2015, von Holzhausen is a Malibu–based collection of accessories with a focus on design, sustainability, and quality of life.</p>
        </div>
        <div class="content">
          <section class="content_section content_image">
            <img src="~assets/images/work/ucla-location.jpg">
          </section>
          <section class="content_section half_first">
            <div class="text">
              <h4>Something different</h4>
              <p>Vicki von Holzhausen's brand is a little unconventional. We used fresh thinking to produce a modern design that held up to her and her audience's expectations.</p>
            </div>
          </section>
          <section class="content_section content_image">
            <img src="~assets/images/work/ucla-preview.jpg">
          </section>
          <section class="content_section half_last">
            <div class="text">
              <h4>A fixed viewport</h4>
              <p>As most ecommerce sites tend to look and feel the same, we decided to change things up. Here, a fixed frame viewport features animated panels and interactive flyouts, such as the details link that folds outwards from the top right into a series of boxes showing price, size and color options.</p>
            </div>
          </section>
          <section class="content_section content_image">
            <img src="~assets/images/work/ucla-05.jpg">
          </section>
          <section class="content_section half_first">
            <div class="text">
              <h4>Powerful ecommerce technology</h4>
              <p>Built using WordPress with WooCommerce, Javascript, HTML5, and CSS, the site was built to handle transactions efficiently and scale easily over time.</p>
            </div>
          </section>
          <section class="content_section content_icons" id="">
            <div><img src="~assets/images/tech/icon_wordpress.png"><span>Python</span></div>
            <div><img src="~assets/images/tech/icon_js.png"><span>Angular</span></div>
            <div><img src="~assets/images/tech/icon_html5.png"><span>HTML5</span></div>
            <div><img src="~assets/images/tech/icon_css3.png"><span>CSS3</span></div>
            <div><img src="~assets/images/tech/icon_vagrant.png"><span>Vagrant</span></div>
          </section>
        </div><!-- content -->
      </article>
      <div class="callout">
        <a href="/work" class="anim-button">
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
      title: 'Vonholzhausen Case Study',
      meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'Vicki Vonholzhausen Case Study'
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
