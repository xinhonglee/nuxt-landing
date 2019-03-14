<template>
  <div class="say-hello-form">
    <form @submit.prevent="onSubmit">
      <input id="project_url_3" class="input" type="text" value="">
      <div class="fields">
        <div class="field">
          <label class="label">Contact Name</label>
          <div class="control">
            <input class="input" type="text" v-model.trim="$v.contactName.$model" placeholder="">
          </div>
          <div class="error-field" v-show="$v.contactName.$dirty">
            <p class="has-text-danger" v-show="!$v.contactName.required">Contact Name is required</p>
            <p class="has-text-danger" v-show="!$v.contactName.minLength">
              Please enter more than {{$v.contactName.$params.minLength.min}} characters
            </p>
          </div>
        </div>

        <div class="field">
          <label class="label">Email Address</label>
          <div class="control">
            <input class="input" type="email" v-model.trim="$v.emailAddress.$model" placeholder="">
          </div>
          <div class="error-field" v-show="$v.emailAddress.$dirty">
            <p class="has-text-danger" v-show="!$v.emailAddress.required">Email Address is required</p>
            <p class="has-text-danger" v-show="!$v.emailAddress.email">Please check the email address was entered
              correctly.</p>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" v-model.trim="$v.message.$model" placeholder=""></textarea>
        </div>
        <div class="error-field" v-show="$v.message.$dirty">
          <p class="has-text-danger" v-show="!$v.message.minLength">
            Please enter more than {{$v.message.$params.minLength.min}} characters.
          </p>
          <p class="has-text-danger" v-show="!$v.message.maxLength">
            Please enter less than {{$v.message.$params.maxLength.max}} characters.
          </p>
        </div>
      </div>
      <div class="field actions">
        <div class="control">
          <button type="submit" class="button is-link">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import {required, minLength, maxLength, email} from 'vuelidate/lib/validators';

  export default {
    name: "say-hello",
    components: {},
    data() {
      return {
        contactName: '',
        companyName: '',
        emailAddress: '',
        message: '',
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
    mounted() {
      document.getElementById('project_url_3').style.display = "none";
    },
    methods: {

      async onSubmit() {
        this.$v.$touch();
        if (this.$v.$invalid) {
          console.log('form validation error-field');
          return false;
        }
        if(document.getElementById('project_url_3').value.length !== 0) {
          this.$root.$emit("submit:form");
          console.log("!!! this is bot !!!");
          return false;
        }
        const data = {
          contactName: this.contactName,
          companyName: this.companyName,
          emailAddress: this.emailAddress,
          message: this.message.replace(/(?:\r\n|\r|\n)/g, '<br>'),
        };
        const result = await this.$axios.$post('/api/contact/say-hello', data);
        this.$root.$emit("submit:form");
        console.log(result);
      }
    },
  }
</script>

<style scoped>
</style>
