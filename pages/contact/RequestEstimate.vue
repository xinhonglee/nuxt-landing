<template>
  <div class="request-estimate-form">
    <div class="field">
      <label class="label">Contact Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="">
      </div>
    </div>
    <div class="field">
      <label class="label">Company Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="">
      </div>
    </div>
    <div class="field">
      <label class="label">Email Address</label>
      <div class="control">
        <input class="input" type="email" placeholder="">
      </div>
    </div>
    <div class="field">
      <label class="label">Phone Number</label>
      <div class="control">
        <input class="input" type="text" placeholder="">
      </div>
    </div>
    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
      </div>
    </div>
    <div class="field">
      <label class="label">Project Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="">
      </div>
    </div>
    <div class="field">
      <label class="label">Project URL</label>
      <div class="control">
        <input class="input" type="text" placeholder="">
      </div>
    </div>
    <div class="field">
      <label class="label">Project Type</label>
      <div class="select">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </div>
    <hr>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="checkbox"><input type="checkbox">Design Services</label>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="checkbox"><input type="checkbox">Content Services</label>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="field">
          <label class="checkbox"><input type="checkbox">Deployment Services</label>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <label class="checkbox"><input type="checkbox">Project Size</label>
        </div>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "request-estimate"
  }
</script>

<style scoped>

</style>
