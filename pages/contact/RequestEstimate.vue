<template>
  <div class="request-estimate-form">
    <form @submit.prevent="onSubmit">
      <input id="project_url_2" class="input" type="text" value="">

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
          <label class="label">Company Name</label>
          <div class="control">
            <input class="input" type="text" v-model.trim="companyName" placeholder="">
          </div>
        </div>
      </div>

      <div class="fields">
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

        <div class="field">
          <label class="label">Phone Number</label>
          <div class="control">
            <input class="input" type="text" v-model.trim="$v.phoneNumber.$model" placeholder="">
          </div>
          <div class="error-field" v-show="$v.phoneNumber.$dirty">
            <p class="has-text-danger" v-show="!$v.phoneNumber.required">Phone Number is required</p>
            <p class="has-text-danger" v-show="!$v.phoneNumber.isPhone && $v.phoneNumber.$model !== ''">Please check the
              phone
              number was entered correctly.</p>
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

      <div class="field">
        <label class="label">Project Name</label>
        <div class="control">
          <input class="input" type="text" v-model.trim="$v.projectName.$model" placeholder="">
        </div>
        <div class="error-field" v-show="$v.projectName.$dirty">
          <p class="has-text-danger" v-show="!$v.projectName.required">Project Name is required</p>
        </div>
      </div>

      <div class="fields three">
        <div class="field">
          <label class="label">Project Type</label>
          <label class="radio radio-slim" v-for="(option, index) of projectTypeOptions" :key="index">
            <input type="radio" :value="option" v-model="projectType">
            {{option}}
          </label>
          <div class="error-field" v-show="$v.projectType.$dirty">
            <p class="has-text-danger" v-show="!$v.projectType.required">Project Type is required</p>
          </div>
        </div>

        <div class="field">
          <label class="label">Project Size</label>
          <label class="radio radio-slim" v-for="(option, index) of projectSizeOptions" :key="index">
            <input type="radio" :value="option" v-model="projectSize">
            {{option}}
          </label>
          <div class="error-field" v-show="$v.projectSize.$dirty">
            <p class="has-text-danger" v-show="!$v.projectSize.required">Project Size is required</p>
          </div>
        </div>

        <div class="field">
          <label class="label">Services needed</label>
          <label class="checkbox"><input type="checkbox" v-model="designServices">Design Services</label>
          <label class="checkbox"><input type="checkbox" v-model="contentServices">Content Services</label>
          <label class="checkbox"><input type="checkbox" v-model="deploymentServices">Development Services</label>
        </div>

      </div>

      <div class="field actions">
        <div class="control">
          <button type="submit" class="button is-link">Send request</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import {required, minLength, maxLength, email} from 'vuelidate/lib/validators';
  import {isPhone} from "../utils";

  const _projectTypeOptions = [
    'Static website',
    'Website with CMS',
    'Website + Mobile application',
    ' Mobile application',
  ];

  const _projectSizeOptions = [
    '1-2 unique page layouts',
    '3-10 unique page layouts',
    '10+ unique page layouts',
  ];

  export default {
    name: "request-estimate",
    components: {},
    data() {
      return {
        contactName: '',
        companyName: '',
        emailAddress: '',
        phoneNumber: '',
        message: '',
        projectName: '',
        projectType: '',
        projectTypeOptions: _projectTypeOptions,
        designServices: false,
        contentServices: false,
        deploymentServices: false,
        projectSize: '',
        projectSizeOptions: _projectSizeOptions,
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
      phoneNumber: {
        required,
        isPhone
      },
      message: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(3000)
      },
      projectName: {
        required
      },
      projectType: {
        required
      },
      projectSize: {
        required
      },
    },
    mounted() {
      document.getElementById('project_url_2').style.display = "none";
    },
    methods: {
      async onSubmit() {
        console.log('submit!');
        this.$v.$touch();
        if (this.$v.$invalid) {
          console.log('form validation error-field');
          return false;
        }
        if(document.getElementById('project_url_2').value.length !== 0) {
          this.$root.$emit("submit:form");
          console.log("!!! this is bot !!!");
          return false;
        }
        const data = {
          contactName: this.contactName,
          companyName: this.companyName,
          emailAddress: this.emailAddress,
          phoneNumber: this.phoneNumber,
          message: this.message.replace(/(?:\r\n|\r|\n)/g, '<br>'),
          projectName: this.projectName,
          projectType: this.projectType,
          designServices: this.designServices,
          contentServices: this.contentServices,
          deploymentServices: this.deploymentServices,
          projectSize: this.projectSize,
        };
        const result = await this.$axios.$post('/api/contact/request-estimate', data);
        this.$root.$emit("submit:form");
        console.log(result);
      }
    },
  }
</script>

<style scoped>

</style>
