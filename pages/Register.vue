<template>
  <div>
    <Header2 />
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 login-box">
          <div class="col-lg-12 login-key">
            <i class="fa fa-key" aria-hidden="true"></i>
          </div>
          <div class="col-lg-12 login-title">REGISTER HERE</div>

          <div class="col-lg-12 login-form">
            <div class="col-lg-12 login-form">
              <form @submit.prevent="register">
                <div class="form-group">
                  <label class="form-control-label">NAME</label>
                  <input type="text" v-model="fullname" class="form-control" />
                </div>
                <div class="form-group">
                  <label class="form-control-label">EMAIL</label>
                  <input type="text" v-model="email" class="form-control" />
                </div>
                <div class="form-group">
                  <label class="form-control-label">PASSWORD</label>
                  <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    i
                  />
                </div>

                <div class="col-lg-12 loginbttm">
                  <div class="col-lg-6 login-btm login-text">
                    <!-- Error Message -->
                  </div>
                  <div class="col-lg-6 login-btm login-button">
                    <button type="submit" class="btn btn-outline-primary">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-3 col-md-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      fullname: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async register() {
      console.log(this.fullname)
      console.log(this.email)
      console.log(this.password)
      await this.$store.dispatch('registerUser', {
        full_name: this.fullname,
        email: this.email,
        password: this.password,
      })
      await this.$router.push('/')
    },
  },
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}

.login-box {
  margin-top: 75px;
  height: auto;
  background: #1a2226;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.login-key {
  height: 100px;
  font-size: 80px;
  line-height: 100px;
  background: -webkit-linear-gradient(#27ef9f, #1a2226);

  -webkit-text-fill-color: transparent;
}

.login-title {
  margin-top: 15px;
  text-align: center;
  font-size: 30px;
  letter-spacing: 2px;
  margin-top: 15px;
  font-weight: bold;
  color: #ecf0f5;
}

.login-form {
  margin-top: 25px;
  text-align: left;
}

input[type='text'] {
  background-color: #1a2226;
  border: none;
  border-bottom: 2px solid #0db8de;
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  margin-bottom: 20px;
  padding-left: 0px;
  color: #ecf0f5;
}

input[type='password'] {
  background-color: #1a2226;
  border: none;
  border-bottom: 2px solid #0db8de;
  border-top: 0px;
  border-radius: 0px;
  font-weight: bold;
  outline: 0;
  padding-left: 0px;
  margin-bottom: 20px;
  color: #ecf0f5;
}

.form-group {
  margin-bottom: 40px;
  outline: 0px;
}

.form-control:focus {
  border-color: inherit;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 2px solid #0db8de;
  outline: 0;
  background-color: #1a2226;
  color: #ecf0f5;
}

input:focus {
  outline: none;
  box-shadow: 0 0 0;
}

label {
  margin-bottom: 0px;
}

.form-control-label {
  font-size: 10px;
  color: #6c6c6c;
  font-weight: bold;
  letter-spacing: 1px;
}

.btn-outline-primary {
  border-color: #0db8de;
  color: #0db8de;
  border-radius: 0px;
  font-weight: bold;
  letter-spacing: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.btn-outline-primary:hover {
  background-color: #0db8de;
  right: 0px;
}

.login-btm {
  float: left;
}

.login-button {
  padding-right: 0px;
  text-align: right;
  margin-bottom: 25px;
}

.login-text {
  text-align: left;
  padding-left: 0px;
  color: #a2a4a4;
}

.loginbttm {
  padding: 0px;
}
</style>
