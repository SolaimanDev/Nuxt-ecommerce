<template>
<div>
    <Menu />
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card text-center">
          <div class="card-header">Login Page</div>
          <div class="card-body">
            <form @submit.prevent="userLogin">

              <div class="mb-3 row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="email" v-model="login.email">
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword" v-model="login.password">
                </div>
              </div>
              <button type="sumbit" class="btn btn-outline-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  auth: 'guest',
  data() {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('laravelSanctum', { data: this.login })
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
