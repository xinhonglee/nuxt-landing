<template>
  <div class="page-pricing">
    <div class="container">
      <fieldset class="mt-5">
        <h4 class="title is-4">Creative Direction</h4>
        <h5 class="subtitle is-5 mt-2">What level of design assistance do you need?</h5>
        <div class="columns">
          <div class="column" v-for="(option, index) of creativeDirectionOptions" :key="index">
            <label class="radio">
              <input type="radio" :value="option.value" v-model="creativeDirection">
              <div>
                <p>{{option.value}}</p>
                <p>{{option.description}}</p>
                <p>${{option.cost}}</p>
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
              <input type="radio" :value="option.value" v-model="contentManagementSystem">
              <div>
                <p>{{option.value}}</p>
                <p>{{option.description}}</p>
                <p>${{option.cost}}</p>
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
              <input type="radio" :value="option.value" v-model="discoverability">
              <div>
                <p>{{option.value}}</p>
                <p>{{option.description}}</p>
                <p>${{option.cost}}</p>
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
              <input type="radio" :value="option.value" v-model="illustrate">
              <div>
                <p>{{option.value}}</p>
                <p>{{option.description}}</p>
                <p>${{option.cost}}</p>
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
              <input type="radio" :value="option.value" v-model="customerSupport">
              <div>
                <p>{{option.value}}</p>
                <p>{{option.description}}</p>
                <p>${{option.cost}}</p>
              </div>
            </label>
          </div>
        </div>
      </fieldset>
      <hr>
      <div class="field">
        <label class="label">Email Address</label>
        <div class="control">
          <input class="input" type="email" v-model.trim="$v.emailAddress.$model" placeholder="">
        </div>
      </div>
      <div class="error-field" v-show="$v.emailAddress.$dirty">
        <p class="has-text-danger" v-show="!$v.emailAddress.required">Email Address is required</p>
        <p class="has-text-danger" v-show="!$v.emailAddress.email">Please check the email address was entered
          correctly.</p>
      </div>
      <div class="field">
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
          <button class="button is-link" @click="onSubmit">Submit</button>
        </div>
      </div>
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

  export default {
    name: "pricing",
    components: {VueRecaptcha},
    data() {
      return {
        creativeDirection: '',
        creativeDirectionOptions: _creativeDirectionOptions,
        contentManagementSystem: '',
        contentManagementSystemOptions: _cmsOptions,
        discoverability: '',
        discoverabilityOptions: _discoverabilityOptions,
        illustrate: '',
        illustrateOptions: _illustrateOptions,
        customerSupport: '',
        customerSupportOptions: _customerSupportOptions,
        emailAddress: '',
        requestFollowUp: false,
        notes: '',
        siteKey: gSiteKey,
        recaptchaVerified: false,
        recaptchaErrorMessage: ''
      }
    },
    validations: {
      emailAddress: {
        required,
        email
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
          this.recaptchaErrorMessage = 'Please tick recaptcha.'
          return false;
        }
        // const result = await this.$axios.$post('/api/contact/request-estimate', data);
        // console.log(result);
      }
    }
  }
</script>

<style scoped>

</style>
