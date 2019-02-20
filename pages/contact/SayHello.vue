<template>
  <div class="say-hello-form">
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
      <label class="label">Message</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
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
    name: "say-hello"
  }
</script>

<style scoped>

</style>
