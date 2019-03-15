<template>
  <main class="">
    <section>
      <div class="wrap">
        <div class="title headline">
          <h1>Pricing</h1>
          <p>Get a ballpark estimate of pricing using the form below.</p>
        </div>
      </div>
    </section>

    <form @submit.prevent="onSubmit">
      <input id="project_url_1" class="input" type="text" value="">
      <section class="option_fields">
        <div class="wrap">
          <fieldset>
            <div class="title_bar">
              <div class="title">
                <h4>Creative Direction</h4>
                <h2>What level of design assistance do you need?</h2>
              </div>
              <a href="#help" class="meta">
                <img src="~assets/images/icons/help.svg">
                <!-- <span class="text">Help?</span> -->
              </a>
            </div>
            <div class="columns">
              <div class="column" v-for="(option, index) of creativeDirectionOptions" :key="index"
                   :class="creativeDirectionSelected === index ? 'active' : ''"
                   @click="creativeDirectionSelected = index">
                <label class="radio">
                  <input type="radio" :value="option.value" v-model="costData.creativeDirection"
                         :selected="creativeDirectionSelected === index">
                  <div class="radio-right-pane">
                    <h3>{{option.value}}</h3>
                    <div class="description"><p>{{option.description}}</p></div>
                    <div class="cost"><p class="has-text-link">${{option.cost}}</p></div>
                  </div>
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </section>

      <section class="option_fields">
        <div class="wrap">
          <fieldset>
            <div class="title_bar">
              <div class="title">
                <h4>Content Management System</h4>
                <h2>How editable do you need your website to be?</h2>
              </div>
              <a href="#help" class="meta">
                <img src="~assets/images/icons/help.svg">
                <!-- <span class="text">Help?</span> -->
              </a>
            </div>
            <div class="columns">
              <div class="column" v-for="(option, index) of contentManagementSystemOptions" :key="index"
                   :class="contentManagementSystemSelected === index ? 'active' : ''"
                   @click="contentManagementSystemSelected = index">
                <label class="radio">
                  <input type="radio" :value="option.value" v-model="costData.contentManagementSystem"
                         :selected="contentManagementSystemSelected === index">
                  <div class="radio-right-pane">
                    <h3>{{option.value}}</h3>
                    <p>{{option.description}}</p>
                    <p class="has-text-link">${{option.cost}}</p>
                  </div>
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </section>
      <section class="option_fields">
        <div class="wrap">
          <fieldset>
            <div class="title_bar">
              <div class="title">
                <h4>Discoverability</h4>
                <h2>Improve your Google Search ranking?</h2>
              </div>
              <a href="#help" class="meta">
                <img src="~assets/images/icons/help.svg">
                <!-- <span class="text">Help?</span> -->
              </a>
            </div>
            <div class="columns">
              <div class="column" v-for="(option, index) of discoverabilityOptions" :key="index"
                   :class="discoverabilitySelected === index ? 'active' : ''"
                   @click="discoverabilitySelected = index">
                <label class="radio">
                  <input type="radio" :value="option.value" v-model="costData.discoverability"
                         :selected="discoverabilitySelected === index">
                  <div class="radio-right-pane">
                    <h3>{{option.value}}</h3>
                    <p>{{option.description}}</p>
                    <p class="has-text-link">${{option.cost}}</p>
                  </div>
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </section>
      <section class="option_fields">
        <div class="wrap">
          <fieldset>
            <div class="title_bar">
              <div class="title">
                <h4>Images, illustrating and copywriting</h4>
                <h2>Need help adding or creating content?</h2>
              </div>
              <a href="#help" class="meta">
                <img src="~assets/images/icons/help.svg">
                <!-- <span class="text">Help?</span> -->
              </a>
            </div>
            <div class="columns">
              <div class="column" v-for="(option, index) of illustrateOptions" :key="index"
                   :class="illustrateSelected === index ? 'active' : ''"
                   @click="illustrateSelected = index">
                <label class="radio">
                  <input type="radio" :value="option.value" v-model="costData.illustrate"
                         :selected="illustrateSelected === index">
                  <div class="radio-right-pane">
                    <h3>{{option.value}}</h3>
                    <p>{{option.description}}</p>
                    <p class="has-text-link">${{option.cost}}</p>
                  </div>
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </section>
      <section class="option_fields">
        <div class="wrap">
          <fieldset>
            <div class="title_bar">
              <div class="title">
                <h4>Customer support</h4>
                <h2>How long do you need support for?</h2>
              </div>
              <a href="#help" class="meta">
                <img src="~assets/images/icons/help.svg">
                <!-- <span class="text">Help?</span> -->
              </a>
            </div>
            <div class="columns">
              <div class="column" v-for="(option, index) of customerSupportOptions" :key="index"
                   :class="customerSupportSelected === index ? 'active' : ''"
                   @click="customerSupportSelected = index">
                <label class="radio">
                  <input type="radio" :value="option.value" v-model="costData.customerSupport"
                         :selected="customerSupportSelected === index">
                  <div class="radio-right-pane">
                    <h3>{{option.value}}</h3>
                    <p>{{option.description}}</p>
                    <p class="has-text-link">${{option.cost}}</p>
                  </div>
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </section>
      <section class="total-estimate">
        <div class="wrap">
          <div class="title_bar">
            <div class="title">
              <h4>Total</h4>
              <h2>Our ballpark estimate is ${{totalCost}}</h2>
            </div>
            <a href="#help" class="meta">
              <img src="~assets/images/icons/help.svg">
              <!-- <span class="text">Help?</span> -->
            </a>
          </div>
        </div>
      </section>
      <template v-if="!sentEmail">

        <section class="email-estimate">
          <div class="wrap">
            <div class="title_bar">
              <div class="title">
                <h4>Email this</h4>
                <h2>Save your estimate</h2>
              </div>
              <a href="#help" class="meta">
                <img src="~assets/images/icons/help.svg">
                <!-- <span class="text">Help?</span> -->
              </a>
            </div>

            <fieldset class="actions email-group mt-5">
              <label class="label">Email Address</label>
              <template v-for="(emailAddress, index) of emailAddresses">
                <div class="field">
                  <div class="control">
                    <input class="input" type="email" v-model.trim="emailAddresses[index]" placeholder="">
                    <a class="button is-text" @click="removeEmail(index)"> Remove</a>
                  </div>
                </div>
                <div class="error-field" v-show="$v.emailAddresses.$each[index].$dirty">
                  <p class="has-text-danger" v-show="!$v.emailAddresses.$each[index].required">Email Address is required</p>
                  <p class="has-text-danger" v-show="!$v.emailAddresses.$each[index].email">Please check the email address
                    was entered correctly.</p>
                </div>
              </template>
              <div class="add-email">
                <a class="" @click="addEmailAddress">Add another recipient</a>
              </div>
              <div class="field">
                <label class="label">Follow-up</label>
                <label class="checkbox"><input type="checkbox" v-model="requestFollowUp">May we schedule a call with you?</label>
              </div>
            </fieldset>
            <fieldset class="actions">

              <div class="field">
                <label class="label">Notes</label>
                <div class="control">
                  <textarea class="textarea" v-model.trim="$v.notes.$model" placeholder=""></textarea>
                </div>
                <div class="error-field" v-show="$v.notes.$dirty">
                  <p class="has-text-danger" v-show="!$v.notes.maxLength">
                    Please enter less than {{$v.notes.$params.maxLength.max}} characters.
                  </p>
                </div>
              </div>

            </fieldset>

            <fieldset class="actions">
              <div class="field">
                <div class="control">
                  <button type="submit" class="button is-link">Send estimate</button>
                </div>
              </div>
            </fieldset>



          </div>
        </section>

      </template>
      <template v-else>
        <section class="email-notification">
          <div class="wrap">
            <h3 class="">On its way!</h3>
            <p>Your estimate has been sent to the address(s) listed above.</p>
            <p>If you have any questions please don't hesitate to <a href="/contact/">reach out.</a></p>
          </div>
        </section>
      </template>
    </form>
  </main>
</template>

<script>
  import { paintCommon } from "~/assets/js/animate";
  import {required, maxLength, email} from 'vuelidate/lib/validators';
  import {
    _creativeDirectionOptions,
    _cmsOptions,
    _discoverabilityOptions,
    _illustrateOptions,
    _customerSupportOptions
  } from "../constants";
  import {getOptionByValue} from "../utils";
  import NewsLetter from "../../components/newsletter";

  export default {
    name: "pricing",
    layout: 'pricing',
    components: {NewsLetter},
    data() {
      return {
        costData: {
          creativeDirection: '',
          contentManagementSystem: '',
          discoverability: '',
          illustrate: '',
          customerSupport: '',
        },
        creativeDirectionSelected: null,
        contentManagementSystemSelected: null,
        discoverabilitySelected: null,
        illustrateSelected: null,
        customerSupportSelected: null,
        creativeDirectionOptions: _creativeDirectionOptions,
        contentManagementSystemOptions: _cmsOptions,
        discoverabilityOptions: _discoverabilityOptions,
        illustrateOptions: _illustrateOptions,
        customerSupportOptions: _customerSupportOptions,
        emailAddresses: [''],
        requestFollowUp: false,
        notes: '',
        totalCost: 0,
        sentEmail: false,
      }
    },
    mounted() {
      paintCommon();
      document.getElementById('project_url_1').style.display = "none";
    },
    validations: {
      emailAddresses: {
        $each: {
          required,
          email
        }
      },
      notes: {
        maxLength: maxLength(5000)
      }
    },
    head: {
      title: 'Pricing',
      meta: [
        {
         hid: 'description',
         name: 'description',
         content: 'Magnet website pricing estimator'
        }
      ],
      bodyAttrs: {
        class: 'page_pricing'
      }
    },
    methods: {
      async onSubmit() {
        console.log('submit!');
        this.$v.$touch();
        if (this.$v.$invalid) {
          console.log('form validation error-field');
          return false;
        }
        if(document.getElementById('project_url_1').value.length !== 0) {
          this.$root.$emit("submit:form");
          console.log("!!! this is bot !!!");
          return false;
        }
        const data = {
          creativeDirection: this.costData.creativeDirection,
          contentManagementSystem: this.costData.contentManagementSystem,
          discoverability: this.costData.discoverability,
          illustrate: this.costData.illustrate,
          customerSupport: this.costData.customerSupport,
          requestFollowUp: this.requestFollowUp,
          notes: this.notes.replace(/(?:\r\n|\r|\n)/g, '<br>'),
          totalCost: this.totalCost,
          emailAddresses: this.emailAddresses
        };
        const result = await this.$axios.$post('/api/contact/pricing', data);
        console.log(result);
        this.sentEmail = true;
      },
      addEmailAddress() {
        this.emailAddresses.push('');
      },
      removeEmail(index) {
        this.emailAddresses.splice(index, 1);
      }
    },
    watch: {
      costData: {
        handler: function (data) {
          this.totalCost = 0;

          const creativeDirection = getOptionByValue(_creativeDirectionOptions, data.creativeDirection);
          const contentManagementSystem = getOptionByValue(_cmsOptions, data.contentManagementSystem);
          const discoverability = getOptionByValue(_discoverabilityOptions, data.discoverability);
          const illustrate = getOptionByValue(_illustrateOptions, data.illustrate);
          const customerSupport = getOptionByValue(_customerSupportOptions, data.customerSupport);

          this.totalCost += creativeDirection ? creativeDirection.cost : 0;
          this.totalCost += contentManagementSystem ? contentManagementSystem.cost : 0;
          this.totalCost += illustrate ? illustrate.cost : 0;
          this.totalCost += discoverability ? discoverability.cost : 0;
          this.totalCost += customerSupport ? customerSupport.cost : 0;
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="scss">
  // @import '~bulma/sass/utilities/all';
  // @import '~bulma/bulma';
  .email-group {
    input {
      max-width: 400px;
    }
  }
  .radio-right-pane {
    display: inline-grid;
  }

  fieldset.actions {
    padding: 0 0 0 5rem;
    label {

    }
    .field {
      padding: 0.5rem 0 0;
    }
    .button {}
  }
  .add-email {
    margin: 0.75rem 0 1.5rem;
    // padding: 0 0 0 5rem;
  }
  // .total-estimate {
  //   background: rgb(37, 100, 255);
  //   position: sticky;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  //   padding: 0rem;
  //   width: 100%;
  //   position: -webkit-sticky;
  // }
</style>
