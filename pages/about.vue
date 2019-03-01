<template>
  <main id="main">
    <section>
      <div class="wrap">
        <h1>About</h1>
        <p>Psychology-focused design that thoughtfully combines art and science, form and function. </p>

        <h2>Precise</h2>

        <p>A balanced website utilizes a modern technology stack, tested software and responsive design.</p>

        <h2>Beautiful</h2>

        <p>Design has the power to transform perception of relevance, credibility and usability.</p>

        <h2>Intelligent</h2>

        <p>Functional design creates an intuitive experience, while future-oriented technology adapts and delivers.</p>

        <h2>Manageable</h2>

        <p>Empowerment through intuitive content management and a range of support options.</p>

        <h2>Accessible</h2>

        <p>Equal access to information for all.</p>

        <h2>Accurate</h2>

        <p>Credibility is maintained through built-in monitoring and daily backups.</p>

        <h2>Secure</h2>

        <p>Peace of mind with powerful tools and access control. </p>

        <h2>Data-driven</h2>

        <p>Information architecture built upon quantitative data and supported by qualitative studies.</p>

        <h2>Connecting</h2>

        <p>Encourage dialogue with features that connect people.</p>
      </div>
    </section>
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
    head: {
      title: 'About Magnet Co',
      meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'About Magnet Co'
        }
      ]
    }
  }
</script>

<style lang="scss">
  // @import '~assets/scss/master.scss';
</style>
