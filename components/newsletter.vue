<template>
  <div class="newsletter">
    <form @submit.prevent="onSubmit">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" v-model.trim="contactName" placeholder="">
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" v-model.trim="emailAddress" placeholder="">
        </div>
      </div>
      <div class="error-field" v-show="$v.emailAddress.$dirty">
        <p class="has-text-danger" v-show="!$v.emailAddress.required">Email Address is required</p>
        <p class="has-text-danger" v-show="!$v.emailAddress.email">Please check the email address was entered
          correctly.</p>
      </div>
      <div class="field mt-2">
        <div class="control">
          <button type="submit" class="button is-link">SignUp</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import {required, email} from 'vuelidate/lib/validators';

  export default {
    name: "news-letter",
    data() {
      return {
        contactName: null,
        emailAddress: null,
      }
    },
    validations: {
      emailAddress: {
        required,
        email
      },
    },
    methods: {
      async onSubmit() {
        this.$v.$touch();
        if (this.$v.$invalid) {
          console.log('form validation error-field');
          return false;
        }
        const data = {
          contactName: this.contactName,
          emailAddress: this.emailAddress,
        };
        const result = await this.$axios.$post('/api/contact/newsletter', data);
        this.$swal('Thanks. You have been subscribed.');
        console.log(result);
      }
    }
  }
</script>

<style scoped>

</style>
