<template>
  <section class="page-contact">
    <div class="container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SayHello from "./SayHello";
  import RequestEstimate from "./RequestEstimate";

  export default {
    name: "contact",
    components: {
      RequestEstimate,
      SayHello
    },
    data() {
      return {
        activeTab: 'say-hello',
      }
    }
  }
</script>

<style scoped>

</style>
