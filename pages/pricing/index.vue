<template>
  <main class="">
    <form @submit.prevent="onSubmit">
      <section class="option_fields">
        <div class="wrap">
          <fieldset>
            <div class="title">
              <h4>Creative Direction</h4>
              <h2>What level of design assistance do you need?</h2>
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


      <section>
        <div class="wrap case_study">
          <div class="title">
            <h4>Case Study</h4>
            <h2><a href="/work/ucla/">UCLA Department of English</a></h2>
          </div>
          <a href="/work/ucla/" class="action">
            <img src="~assets/images/icons/arrow-next.svg">
            <span class="text">Next</span>
          </a>
          <a href="/work/ucla/" class="media">
            <img src="~assets/images/work/ucla-05.jpg" alt="Case study example from the UCLA Department of English project by Magnet Co">
            <!-- <caption></caption> -->
          </a>
        </div>
      </section>


      <section class="option_fields">
        <div class="wrap">
          <fieldset>
            <h5 class="title">Content Management System</h5>
            <h2 class="subtitle">How editable do you need your website to be?</h2>
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
            <div class="text-wrap">
              <h5 class="title">Discoverability</h5>
              <h2 class="subtitle">Improve your Google Search ranking?</h2>
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
            <div class="text-wrap">
              <h5 class="title">Images, illustrating and copywriting</h5>
              <h2 class="subtitle">Need help adding or creating content?</h2>
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
            <div class="text-wrap">
              <h5 class="title">Customer support</h5>
              <h2 class="subtitle">How long do you need support for?</h2>
            </div>
            <div class="columns">
              <div class="column" v-for="(option, index) of customerSupportOptions" :key="index"
                   :class="customerSupportSelected === index ? 'active' : ''"
                   @click="customerSupportSelected = index">
                <label class="radio">
                  <input type="radio" :value="option.value" v-model="costData.customerSupport"
                         :selected="customerSupportSelected === index">
                  <div class="radio-right-pane">
                    <p>{{option.value}}</p>
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
          <h6 class="title has-text-primary">Total Estimate Value: ${{totalCost}}</h6>
        </div>
      </section>
      <template v-if="!sentEmail">

        <section class="email-estimate">
          <div class="wrap">

            <div class="title">
              <h2>Save your estimate</h2>
            </div>

            <fieldset class="email-group mt-5">
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
            </fieldset>

            <div>
              <a class="button is-text" @click="addEmailAddress">+ Another Email</a>
            </div>

            <div class="callout">
              <div class="text">
                <h3>Can we call you?</h3>
                <p>We would love to hear from you and discuss more about the details of your project.</p>
              </div>
              <div class="field">
                <label class="checkbox"><input type="checkbox" v-model="requestFollowUp">Request a follow-up with us</label>
              </div>
            </div>

            <div class="field">
              <label class="label">Notes</label>
              <div class="control">
                <textarea class="textarea" v-model.trim="$v.notes.$model" placeholder=""></textarea>
              </div>
            </div>
            <div class="error-field" v-show="$v.notes.$dirty">
              <p class="has-text-danger" v-show="!$v.notes.maxLength">
                Please enter less than {{$v.notes.$params.maxLength.max}} characters.
              </p>
            </div>
            <vue-recaptcha @verify="verifyRecaptcha" :sitekey="siteKey"></vue-recaptcha>
            <div class="error-field" v-show="recaptchaErrorMessage">
              <p class="has-text-danger">{{recaptchaErrorMessage}}</p>
            </div>
            <div class="field">
              <div class="control">
                <button type="submit" class="button is-link">Submit</button>
              </div>
            </div>
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

  import VueRecaptcha from 'vue-recaptcha';
  import {required, maxLength, email} from 'vuelidate/lib/validators';
  import {
    _creativeDirectionOptions,
    _cmsOptions,
    _discoverabilityOptions,
    _illustrateOptions,
    _customerSupportOptions
  } from "../constants";
  import {gSiteKey} from "../constants";
  import {getOptionByValue} from "../utils";

  export default {
    name: "pricing",
    components: {VueRecaptcha},
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
        siteKey: gSiteKey,
        recaptchaVerified: false,
        recaptchaErrorMessage: '',
        totalCost: 0,
        sentEmail: false,
      }
    },
    mounted() {
      paintCommon();
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
      verifyRecaptcha(response) {
        this.recaptchaErrorMessage = '';
        this.recaptchaVerified = true;
      },
      async onSubmit() {
        console.log('submit!');
        this.$v.$touch();
        if (this.$v.$invalid) {
          console.log('form validation error-field');
          return false;
        }
        if (!this.recaptchaVerified) {
          this.recaptchaErrorMessage = 'Please tick recaptcha.';
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
</style>
