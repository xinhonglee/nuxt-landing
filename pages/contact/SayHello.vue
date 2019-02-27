<template>
  <div class="say-hello-form">
    <form @submit.prevent="onSubmit">
      <div class="field">
        <label class="label">Contact Name</label>
        <div class="control">
          <input class="input" type="text" v-model.trim="$v.contactName.$model" placeholder="">
        </div>
      </div>
      <div class="error-field" v-show="$v.contactName.$dirty">
        <p class="has-text-danger" v-show="!$v.contactName.required">Contact Name is required</p>
        <p class="has-text-danger" v-show="!$v.contactName.minLength">
          Please enter more than {{$v.contactName.$params.minLength.min}} characters
        </p>
      </div>
      <div class="field">
        <label class="label">Company Name</label>
        <div class="control">
          <input class="input" type="text" v-model.trim="companyName" placeholder="">
        </div>
      </div>
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
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" v-model.trim="$v.message.$model" placeholder=""></textarea>
        </div>
      </div>
      <div class="error-field" v-show="$v.message.$dirty">
        <p class="has-text-danger" v-show="!$v.message.minLength">
          Please enter more than {{$v.message.$params.minLength.min}} characters.
        </p>
        <p class="has-text-danger" v-show="!$v.message.maxLength">
          Please enter less than {{$v.message.$params.maxLength.max}} characters.
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
</template>

<script>
  import VueRecaptcha from 'vue-recaptcha';
  import {required, minLength, maxLength, email} from 'vuelidate/lib/validators';
  import {gSiteKey} from '../constants';

  export default {
    name: "say-hello",
    components: {VueRecaptcha},
    data() {
      return {
        contactName: '',
        companyName: '',
        emailAddress: '',
        message: '',
        siteKey: gSiteKey,
        recaptchaVerified: false,
        recaptchaErrorMessage: ''
      }
    },
    validations: {
      contactName: {
        required,
        minLength: minLength(2)
      },
      emailAddress: {
        required,
        email
      },
      message: {
        minLength: minLength(3),
        maxLength: maxLength(3000)
      }
    },
    methods: {
      verifyRecaptcha(response) {
        this.recaptchaErrorMessage = '';
        this.recaptchaVerified = true;
      },
      async onSubmit() {
        this.$v.$touch();
        if (this.$v.$invalid) {
          console.log('form validation error-field');
          return false;
        }
        if (!this.recaptchaVerified) {
          this.recaptchaErrorMessage = 'Please tick recaptcha.'
          return false;
        }
        const data = {
          contactName: this.contactName,
          companyName: this.companyName,
          emailAddress: this.emailAddress,
          message: this.message,
        };
        const result = await this.$axios.$post('/api/contact/say-hello', data);
        this.$root.$emit("submit:form");
        console.log(result);
      }
    }
  }
</script>

<style scoped>
</style>
