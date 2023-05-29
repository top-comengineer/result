<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card shadow-sm">
          <div class="card-header">
            <h3>Home Page</h3>
          </div>
          <div class="card-body">
            <p class="mb-0">Welcome <b>{{ user.name }}</b></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      user: this.$store.state.auth.user
    }
  }
}
</script>