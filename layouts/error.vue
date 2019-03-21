<template>
  <div class="nuxt-error">
    <component :is="errorPage" :error="error" />
  </div>
</template>
<script>
import { paintCommon } from "~/assets/js/animate";
import error404 from '~/components/error/404.vue';
import error500 from '~/components/error/500.vue';
export default {
  data() {
    return {};
  },
  mounted() {
    paintCommon();
  },
  name: 'nuxt-error',
  layout: 'default', // optional
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  head: {
    title: 'Magnet Co',
    meta: [
      {
       hid: 'description',
       name: 'description',
       content: 'Magnet Co'
      }
    ],
    bodyAttrs: {
      class: 'page_error'
    }
  },
  computed: {
    errorPage() {
      if (this.statusCode === 404) {
        return error404;
      }
      // catch everything else
      return error500;
    }
  }
}
</script>
