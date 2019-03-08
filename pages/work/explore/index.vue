<template>
  <main id="main">
    <div class="wrap">
      <article>
        <div class="title">
          <h1>Incredible nature live streaming</h1>
          <p>Explore Org is the world's leading philanthropic live nature cam network and documentary film channel. They champion the selfless acts of others, create a portal into the soul of humanity and inspire lifelong learning.</p>
        </div>
        <div class="content">
          <section class="content_section content_image">
            <img src="~assets/images/work/explore-01.jpg">
          </section>
          <section class="content_section half_last">
            <div class="text">
              <h4>The challenge</h4>
              <p>Explore contacted Magnet with a brief to help them design, build and support a comprehensive web platform for their audience.</p>
              <p>More and more users had been attracted to the live streams of animals in their native habitats, performing daily rituals, nesting, hunting etc, and so our brief was to bring this incredible content to as many people as possible, using real-time stitching and a scalable media backend system to handle the demands of real-time distributed video feeds.</p>
            </div>
          </section>
          <section class="content_section content_image">
            <img src="~assets/images/work/explore-02.jpg">
          </section>
          <section class="content_section half_first">
            <div class="text">
              <h4>Our approach</h4>
              <p>We built a future-proof technology stack that included websites, microsites and a comprehensive media delivery platform to gather live feeds of exotic and endangered animals worldwide and stitch into useable web clips in real time.</p>
            </div>
          </section>
          <section class="content_section content_image">
            <img src="~assets/images/work/explore-03.jpg">
          </section>
          <section class="content_section half_last">
            <div class="text">
              <h4>Powerful technology</h4>
              <p>The platform was built using Python, Angular, HTML5, CSS, Terraform, Tesseract OCR and a few more magic things.</p>
              <p>We built a custom platform to integrate advanced document management with OCR processing and multi-threaded annotations.</p>
            </div>
          </section>
          <section class="content_section content_icons" id="">
            <div><img src="~assets/images/tech/icon_python.png"><span>Python</span></div>
            <div><img src="~assets/images/tech/icon_wordpress.png"><span>WordPress</span></div>
            <div><img src="~assets/images/tech/icon_js.png"><span>Javascript</span></div>
            <div><img src="~assets/images/tech/icon_html5.png"><span>HTML5</span></div>
            <div><img src="~assets/images/tech/icon_css3.png"><span>CSS</span></div>
            <div><img src="~assets/images/tech/icon_swift.png"><span>Swift</span></div>
            <div><img src="~assets/images/tech/icon_android.png"><span>Android</span></div>
          </section>
          <section class="content_section half_last">
            <div class="text">
              <h4>A platform for growth</h4>
              <p>The solution we built successfully scaled with Explore Org's growing audience over the years.</p>
              <p>Explore were able to continue to raise increasing funds to directly help endangered animals around the world and spread awareness.</p>
            </div>
          </section>
          <section class="content_section content_quote">
            <blockquote cite="">
              <p>""The engineers at Magnet provide outstanding design and development services to our non-profit foundation. Their contribution efficiently captures a range of web camera feeds of rare and exciting wildlife around the world in real time and streams it across our range of websites. We highly recommend their services."</p>
              <cite>
                <img src="~assets/images/client-headshots/img-jonathan-silvio-small.jpg">
                <span><strong>Jonathan Silvio</strong>, Technical Director</span>
              </cite>
            </blockquote>
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
      title: 'Explore Case Study',
      meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'Explore Case Study'
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
