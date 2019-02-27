<template>
  <div class="page-pricing">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <fieldset class="mt-5">
          <h4 class="title is-4">Creative Direction</h4>
          <h5 class="subtitle is-5 mt-2">What level of design assistance do you need?</h5>
          <div class="columns">
            <div class="column" v-for="(option, index) of creativeDirectionOptions" :key="index">
              <label class="radio">
                <input type="radio" :value="option.value" v-model="costData.creativeDirection">
                <div class="radio-right-pane">
                  <p>{{option.value}}</p>
                  <p>{{option.description}}</p>
                  <p class="has-text-link">${{option.cost}}</p>
                </div>
              </label>
            </div>
          </div>
        </fieldset>
        <hr>
        <fieldset class="mt-5">
          <h4 class="title is-4">Content Management System</h4>
          <h5 class="subtitle is-5 mt-2">How editable do you need your website to be?</h5>
          <div class="columns">
            <div class="column" v-for="(option, index) of contentManagementSystemOptions" :key="index">
              <label class="radio">
                <input type="radio" :value="option.value" v-model="costData.contentManagementSystem">
                <div class="radio-right-pane">
                  <p>{{option.value}}</p>
                  <p>{{option.description}}</p>
                  <p class="has-text-link">${{option.cost}}</p>
                </div>
              </label>
            </div>
          </div>
        </fieldset>
        <hr>
        <fieldset class="mt-5">
          <h4 class="title is-4">Discoverability</h4>
          <h5 class="subtitle is-5 mt-2">Improve your Google Search ranking?</h5>
          <div class="columns">
            <div class="column" v-for="(option, index) of discoverabilityOptions" :key="index">
              <label class="radio">
                <input type="radio" :value="option.value" v-model="costData.discoverability">
                <div class="radio-right-pane">
                  <p>{{option.value}}</p>
                  <p>{{option.description}}</p>
                  <p class="has-text-link">${{option.cost}}</p>
                </div>
              </label>
            </div>
          </div>
        </fieldset>
        <hr>
        <fieldset class="mt-5">
          <h4 class="title is-4">Images, illustrating and copywriting</h4>
          <h5 class="subtitle is-5 mt-2">Need help adding or creating content?</h5>
          <div class="columns">
            <div class="column" v-for="(option, index) of illustrateOptions" :key="index">
              <label class="radio">
                <input type="radio" :value="option.value" v-model="costData.illustrate">
                <div class="radio-right-pane">
                  <p>{{option.value}}</p>
                  <p>{{option.description}}</p>
                  <p class="has-text-link">${{option.cost}}</p>
                </div>
              </label>
            </div>
          </div>
        </fieldset>
        <hr>
        <fieldset class="mt-5">
          <h4 class="title is-4">Customer support</h4>
          <h5 class="subtitle is-5 mt-2">How long do you need support for?</h5>
          <div class="columns">
            <div class="column" v-for="(option, index) of customerSupportOptions" :key="index">
              <label class="radio">
                <input type="radio" :value="option.value" v-model="costData.customerSupport">
                <div class="radio-right-pane">
                  <p>{{option.value}}</p>
                  <p>{{option.description}}</p>
                  <p class="has-text-link">${{option.cost}}</p>
                </div>
              </label>
            </div>
          </div>
        </fieldset>
        <hr>
        <div class="total-estimate mt-5">
          <h6 class="title is-4 has-text-primary">Total Estimate Value: ${{totalCost}}</h6>
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
                was
                entered correctly.</p>
            </div>
          </template>
        </fieldset>
        <a class="button is-text" @click="addEmailAddress">+ Another Email</a>
        <div class="field mt-5">
          <label class="checkbox"><input type="checkbox" v-model="requestFollowUp">Request Follow Up</label>
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
        <div class="field mt-2">
          <div class="control">
            <button type="submit" class="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
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
      }
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
        // const result = await this.$axios.$post('/api/contact/pricing', data);
        // console.log(result);
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
        handler: function(data) {
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
  .email-group {
    input {
      max-width: 400px;
    }
  }

  .radio-right-pane {
    display: inline-grid;
  }
</style>
