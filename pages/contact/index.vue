<template>
  <main>
    <section class="page-contact">
      <div class="wrap">
        <div class="title headline">
          <h1>Contact Magnet</h1>
          <p>Use the form below to email us</p>
        </div>

        <!-- BEGIN BULMA -->
        <div class="container">
          <div class="columns squish">
            <div class="column is-three-fifths is-offset-one-fifth">
              <template v-if="!sentEmail">
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
              <thank-you v-if="sentEmail"></thank-you>
              <div class="field backward" v-if="sentEmail">
                <div class="control">
                  <button class="button is-text" @click="back">Back</button>
                </div>
              </div>
            </div>
          </div>
        </div><!-- container -->
        <!-- END BULMA -->

      </div><!-- wrap -->
    </section>
  </main>

</template>

<script>
  import { paintCommon } from "~/assets/js/animate";

  import SayHello from "./SayHello";
  import RequestEstimate from "./RequestEstimate";
  import ThankYou from "./ThankYou";
  import NewsLetter from "../../components/newsletter";

  export default {
    name: "contact",
    components: {
      NewsLetter,
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
    methods: {
      back() {
        this.sentEmail = false;
      },
    },
    mounted() {
      paintCommon(),
      this.$root.$on("submit:form", () => {
        console.log("submit emit action");
        this.sentEmail = true;
      })
    },
    head: {
      title: 'Contact',
      meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'Contact Magnet Co'
        }
      ],
      bodyAttrs: {
        class: 'page_contact'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .backward {
    margin-top: 20px;
  }
  // @import '~bulma/sass/utilities/all';
  // @import '~bulma/bulma';
</style>
