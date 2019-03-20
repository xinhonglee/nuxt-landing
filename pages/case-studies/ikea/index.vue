<template>
  <main id="main">
    <div class="wrap">
      <article>
        <div class="title">
          <h1>Data and design</h1>
          <p>Our work with Ikea involved visual design for an early concept mobile store as well as large-volume document workflow automation.</p>
        </div>
        <div class="content">
          <section class="content_section half_last">
            <div class="text">
              <h4>Designing for mobile</h4>
              <p>In the early days, Ikea's web store was built primarily for the desktop, as most sites were. We helped shape the eventual vision of Ikea's mobile store by designing and prototyping a cohesive mobile experience.</p>
            </div>
          </section>
          <section class="content_section content_image">
            <img src="~assets/images/work/ikea-full.jpg">
          </section>
          <section class="content_section half_first">
            <div class="text">
              <h4>Print to web</h4>
              <p>Ikea had a user manual problem. They held vast amounts of documentation to their massive inventory of products old and new in electronic postscript format, ready to be printed but not ready for the web. They needed a way to bring these print files online with accuracy and as much automation as possible.</p>
            </div>
          </section>
          <section class="content_section content_image">
            <img src="~assets/images/work/ikea-03.jpg">
          </section>
          <section class="content_section half_last">
            <div class="text">
              <h4>Data challenges</h4>
              <p>As with any task of transforming data to the web, fields must be correctly mapped. Our engineers figured out a dynamic workflow to automate and self-correct the formatting and structure of content from print to web.</p>
            </div>
          </section>
          <section class="content_section content_image">
            <img src="~assets/images/work/ikea-04.jpg">
          </section>

          <section class="content_section half_first">
            <div class="text">
              <h4>Toolkit</h4>
              <p>Our work involved large data handling using python scripting as well as frontend design and development.</p>
            </div>
          </section>
          <section class="content_section content_icons" id="">
            <div><img src="~assets/images/tech/icon_python.png"><span>Python</span></div>
            <div><img src="~assets/images/tech/icon_html5.png"><span>HTML5</span></div>
            <div><img src="~assets/images/tech/icon_css3.png"><span>CSS3</span></div>
            <div><img src="~assets/images/tech/icon_js.png"><span>JS</span></div>
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
