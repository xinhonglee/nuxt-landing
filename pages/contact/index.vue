<template>
  <section class="page-contact">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <template  v-if="!sentEmail">
            <div class="tabs">
              <ul>
                <li :class="{'is-active' : activeTab === 'say-hello'}"
                    @click="activeTab = 'say-hello'">
                  <a>Say Hello</a>
                </li>
                <li :class="{'is-active' : activeTab === 'request-estimate'}"
                    @click="activeTab = 'request-estimate'">
                  <a>Request Estimate</a>
                </li>
              </ul>
            </div>
            <div class="tabs-content">
              <say-hello v-show="activeTab === 'say-hello'"></say-hello>
              <request-estimate v-show="activeTab === 'request-estimate'"></request-estimate>
            </div>
          </template>
          <thank-you v-else></thank-you>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SayHello from "./SayHello";
  import RequestEstimate from "./RequestEstimate";
  import ThankYou from "./ThankYou";

  export default {
    name: "contact",
    components: {
      ThankYou,
      RequestEstimate,
      SayHello
    },
    data() {
      return {
        activeTab: 'say-hello',
        sentEmail: false
      }
    },
    mounted() {
      this.$root.$on("submit:form", () => {
        console.log("submit emit action");
        this.sentEmail = true;
      })
    },
    methods: {}
  }
</script>

<style scoped>

</style>
