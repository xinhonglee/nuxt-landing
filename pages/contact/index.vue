<template>
  <main>
    <section class="page-contact">

      <div class="wrap">
        <div class="title headline">
          <h1>Get in touch</h1>
        </div>
        <div class="team-members">
          <div class="team-profile">
            <img src="~assets/images/team-headshots/team-gavin.jpg" alt="Gavin">
            <h3>Gavin</h3>
            <p>Design</p>
          </div>
          <div class="team-profile">
            <img src="~assets/images/team-headshots/team-sarah.jpg" alt="Sarah">
            <h3>Sarah</h3>
            <p>Design</p>
          </div>
          <div class="team-profile">
            <img src="~assets/images/team-headshots/team-alex.jpg" alt="Alex">
            <h3>Alex</h3>
            <p>Engineering</p>
          </div>
          <div class="team-profile">
            <img src="~assets/images/team-headshots/team-eugene.jpg" alt="Eugene">
            <h3>Eugene</h3>
            <p>Engineering</p>
          </div>
          <div class="team-profile">
            <img src="~assets/images/team-headshots/team-don.jpg" alt="Don">
            <h3>Don</h3>
            <p>Engineering</p>
          </div>
          <div class="team-profile">
            <img src="~assets/images/team-headshots/team-igor.jpg" alt="Igor">
            <h3>Igor</h3>
            <p>Engineering</p>
          </div>
          <div class="team-profile">
            <img src="~assets/images/team-headshots/team-bryan.jpg" alt="Bryan">
            <h3>Bryan</h3>
            <p>Engineering</p>
          </div>
          <div class="team-profile">
            <img src="~assets/images/team-headshots/team-andres.jpg" alt="Andres">
            <h3>Andres</h3>
            <p>Engineering</p>
          </div>

        </div>
        <div class="form">
          <template v-if="!sentEmail">
            <div class="tabs-wrap">
              <div class="tabs">
                <ul>
                  <li :class="{'is-active' : activeTab === 'say-hello'}"
                      @click="activeTab = 'say-hello'">
                    <a>Just say hi</a>
                  </li>
                  <li :class="{'is-active' : activeTab === 'request-estimate'}"
                      @click="activeTab = 'request-estimate'">
                    <a>Request an estimate</a>
                  </li>
                </ul>
              </div>
              <div class="tabs-content">
                <say-hello v-show="activeTab === 'say-hello'"></say-hello>
                <request-estimate v-show="activeTab === 'request-estimate'"></request-estimate>
              </div>
            </div>
          </template>
          <thank-you v-if="sentEmail"></thank-you>
          <div class="field backward" v-if="sentEmail">
            <div class="control">
              <button class="button is-text" @click="back">Back</button>
            </div>
          </div>
        </div>
        <div class="asides">

          <div class="aside">
            <h4>New projects</h4>
            <p>
              <a href="mailto:hello@magnet.co">hello@magnet.co</a>
              <br>
              +1 (424) 322-9059
            </p>
          </div>

          <div class="aside">
            <h4>Contact us</h4>
            <p>
              <a href="mailto:team@magnet.co">team@magnet.co</a>
              <br>
              1806 River Heights Lane, Villa Hills KY, 41017
            </p>
          </div>

        </div>

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
